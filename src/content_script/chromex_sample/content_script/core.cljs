(ns chromex-sample.content-script.core
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [cljs.core.async :refer [<!]]
            [chromex.logging :refer-macros [log info warn error group group-end]]
            [chromex.protocols :refer [post-message!]]
            [chromex.ext.runtime :as runtime :refer-macros [connect]]
            [clojure.set]))








(def abs js/Math.abs)
(def pow js/Math.pow)

;; https://gist.github.com/mutoo/5617691
(defn circumscribe-triangle [[[ax ay] [bx by] [cx cy]]]
  (let [A (- bx ax)
        B (- by ay)
        C (- cx ax)
        D (- cy ay)
        E (+ (* A (+ ax bx)) (* B (+ ay by)))
        F (+ (* C (+ ax cx)) (* D (+ ay cy)))
        G (* 2 (- (* A (- cy by)) (* B (- cx bx))))]
    (when (> (abs G) 0.000001)
      (let [cx (/ (- (* D E) (* B F)) G)
            cy (/ (- (* A F) (* C E)) G)
            dx (- cx ax)
            dy (- cy ay)
            r  (+ (pow dx 2) (pow dy 2))]
        {:x cx :y cy :radius-squared r}))))

(defn edges [[p1 p2 p3]] [[p1 p2] [p2 p3] [p3 p1]])

(defn contains-point? [{:keys [x y radius-squared]} [px py]]
  (let [distance-squared (+ (pow (- x px) 2) (pow (- y py) 2))]
    (< distance-squared radius-squared)))

(defn outer-edges [triangles]
  (let [all-edges    (mapcat edges triangles)
        matches      (fn [edge] (filter #{edge (reverse edge)} all-edges))
        appears-once (fn [edge] (= (count (matches edge)) 1))]
    (filter appears-once all-edges)))

(defn make-new-triangles [containers point]
  (->> containers
       outer-edges
       (map (fn [[p1 p2]] [p1 p2 point]))
       set))

(defn add-point-to-triangles [triangles point]
  (let [containers    (filter #(contains-point? (circumscribe-triangle %) point) triangles)
        new-triangles (make-new-triangles containers point)]
    (clojure.set/union (clojure.set/difference triangles containers) new-triangles)))

(defn bounds [points]
  (let [minx (->> points (map first) (apply min) (+ -1000))
        maxx (->> points (map first) (apply max) (+ 1000))
        miny (->> points (map second) (apply min) (+ -1000))
        maxy (->> points (map second) (apply max) (+ 1000))]
    [[minx maxy] [maxx maxy] [minx miny] [maxx miny]]))

;; http://paulbourke.net/papers/triangulate/
(defn triangulate [points]
  (let [points (map (fn [[x y]] [(float x) (float y)]) points)
        [tl tr bl br] (bounds points)
        initial #{[tl tr bl] [bl tr br]}
        with-bounds (reduce add-point-to-triangles initial points)
        triangles (remove #(some #{tl tr bl br} %) with-bounds)]
    {:points points
     :triangles triangles
     :edges (distinct (mapcat edges triangles))}))


(defn map-px [x y w h]
  (+ (* 4 x) (* 4 w y)))

(defn get-px [data x y w h]
  (let [a (map-px x y w h)]
    (mapv
      #(aget data (+ a %))
      (range 3))))

(defn get-image-data [context w h]
  (.getImageData context 0 0 w h))

(defn draw-path [context data w h triangles]
  (set! (.-strokeStyle context) "rgb(255, 255, 255)")
  (doseq [[triangle [r g b]] (map vector triangles (mapv (fn [i] [(* i 4) (* i 2.5) 200]) (range 54)))]
    (let [triangle-edges (edges triangle)
          [first-x first-y] (first (first triangle-edges))
          [r g b] (map
                    (fn [a]
                      (int (/ a 3.0)))
                    (reduce
                      (fn [a e] (map + a e))
                      [0 0 0]
                      (map
                        (fn [[x y]]
                          (get-px data (int x) (int y) w h))
                        ;; (concat
                          (mapv (fn [p] (mapv #(int (- % 0.01)) p)) triangle)
                          ;; (mapv (fn [p] (mapv #(int (/ % 2)) p)) triangle)
                          )))]
      (.beginPath context)
      (.moveTo context first-x first-y)
      (doseq [[[fx fy] [tx ty]] triangle-edges]
        (.lineTo context tx ty))
      (set! (.-fillStyle context) (str "rgb(" r ", " g ", " b ")"))
      (.closePath context)
      (.fill context)
      (.stroke context))))

(defn new-positions [points w h]
  (let [randomizing-function (fn []
                               (- (rand-int 40) 20))]
    (map
      (fn [[cx cy]]
        (if (or (= cx 0) (= cx w) (= cy 0) (= cy h))
          [cx cy]
          (let [rand-x (randomizing-function)
                rand-y (randomizing-function)
                new-x (+ cx rand-x)
                new-y (+ cy rand-y)]
            [(if (or (<= new-x 0) (>= new-x w))
               (- cx rand-x)
               new-x)
             (if (or (<= new-y 0) (>= new-y h))
               (- cy rand-y)
               new-y)])))
      points)))

(defn loop-it [context data current-points future-points w h i]
  (let [frames 100.0
        moving-function (fn [cur fut]
                          (* (/ i frames) (- fut cur)))
        moved-points (map
                       (fn [[cx cy] [fx fy]]
                         [(+ cx (moving-function cx fx))
                          (+ cy (moving-function cy fy))])
                       current-points
                       future-points)]
    (set! (.-fillStyle context) "#fff")
    (.fillRect context 0 0 w h)
    (draw-path
      context
      data
      w
      h
      (:triangles
        (triangulate moved-points)))
    (js/setTimeout
      (fn []
        (if (< i frames)
          (loop-it context data current-points future-points w h (inc i))
          (loop-it context data future-points (new-positions future-points w h) w h 0)))
      20)))








(defn hover-stop [img-tag canvas]
  (let [parent (.-parentNode img-tag)
        highest-timeout-id (js/setTimeout (fn []) 1)]
    (.removeChild parent canvas)
    (set! (.-display (.-style img-tag)) "block")
    (doseq [i (range 10 highest-timeout-id)]
      (js/clearTimeout i))))

(defn hover-start [img-tag]
  (let [w (int (.-width img-tag))
        h (int (.-height img-tag))
        canvas (.createElement js/document "canvas")
        context (.getContext canvas "2d")
        image (js/Image.)
        src (.-src img-tag)
        go-on (fn [dupa]
                (.appendChild (.-parentNode img-tag) canvas)
                (set! (.-onmouseout canvas) (fn [] (hover-stop img-tag canvas)))
                (set! (.-display (.-style img-tag)) "none")
                (let [edge-points [[0 0] [w 0] [w h] [0 h]]
                      rand-points (concat edge-points (map (fn [] [(rand-int w) (rand-int h)]) (range 20)))]
                  (.drawImage context dupa 0 0)
                  (loop-it
                    context
                    (.-data (get-image-data context w h))
                    rand-points
                    (new-positions rand-points w h)
                    w
                    h
                    0)))]
    (set! (.-width canvas) w)
    (set! (.-height canvas) h)
    (set! (.-onload image) (fn [] (go-on image)))
    (set! (.-crossOrigin image) "anonymous")
    (set! (.-src image) src)))


(defn set-hover-events-for-img-tags []
  (let [img-tags (.getElementsByTagName js/document "img")]
    (dotimes [i (. img-tags -length)]
      (let [img-tag (. img-tags item i)]
        (set! (.-onmouseover img-tag) (fn [] (hover-start img-tag)))))))

(defn init! []
  (js/setInterval
    (fn []
      (set-hover-events-for-img-tags))
    1000))
