(ns sonja.palettizer
  (:require [delaunay-triangulation.core :as delaunay]))

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
    (let [triangle-edges (delaunay/edges triangle)
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
        (delaunay/triangulate moved-points)))
    (js/setTimeout
      (fn []
        (if (< i frames)
          (loop-it context data current-points future-points w h (inc i))
          (loop-it context data future-points (new-positions future-points w h) w h 0)))
      20)))

(defn run [context width height]
  (let [edge-points [[0 0] [width 0] [width height] [0 height]]
        rand-points (concat edge-points (map (fn [] [(rand-int width) (rand-int height)]) (range 20)))]
    (loop-it
      context
      (.-data (get-image-data context width height))
      rand-points
      (new-positions rand-points width height)
      width
      height
      0)))
