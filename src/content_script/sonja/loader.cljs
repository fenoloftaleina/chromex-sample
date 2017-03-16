(ns sonja.loader
  (:require [sonja.palettizer :as palettizer]))

(defn hide-canvas-and-show-image [img-tag canvas]
  (let [parent (.-parentNode img-tag)]
    (.removeChild parent canvas)
    (set! (.-display (.-style img-tag)) "block")))

(defn kill-possible-unfinished-palettizations []
  (let [highest-timeout-id (js/setTimeout (fn []) 1)]
    (doseq [i (range 10 highest-timeout-id)]
      (js/clearTimeout i))))

(defn hover-stop [img-tag canvas]
  (hide-canvas-and-show-image img-tag canvas)
  (kill-possible-unfinished-palettizations))

(defn hover-start [img-tag]
  (let [img-width (int (.-width img-tag))
        img-height (int (.-height img-tag))
        canvas (.createElement js/document "canvas")
        context (.getContext canvas "2d")
        image (js/Image.)
        src (.-src img-tag)
        go-on (fn [dupa]
                (.appendChild (.-parentNode img-tag) canvas)
                (set! (.-onmouseout canvas) (fn [] (hover-stop img-tag canvas)))
                (set! (.-display (.-style img-tag)) "none")
                (let [edge-points [[0 0] [img-width 0] [img-width img-height] [0 img-height]]
                      rand-points (concat edge-points (map (fn [] [(rand-int img-width) (rand-int img-height)]) (range 20)))]
                  (.drawImage context dupa 0 0)
                  (palettizer/loop-it
                    context
                    (.-data (palettizer/get-image-data context img-width img-height))
                    rand-points
                    (palettizer/new-positions rand-points img-width img-height)
                    img-width
                    img-height
                    0)))]
    (set! (.-width canvas) img-width)
    (set! (.-height canvas) img-height)
    (set! (.-onload image) (fn [] (go-on image)))
    (set! (.-crossOrigin image) "anonymous")
    (set! (.-src image) src)))

(defn set-hover-events-for-img-tags []
  (let [img-tags (.getElementsByTagName js/document "img")]
    (dotimes [i (. img-tags -length)]
      (let [img-tag (. img-tags item i)]
        (set! (.-onmouseover img-tag) (fn [] (hover-start img-tag)))))))
