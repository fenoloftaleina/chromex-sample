(ns sonja.loader
  (:require [sonja.palettizer :as palettizer]))

(defn hide-canvas-and-show-img [img-tag canvas]
  (let [parent (.-parentNode img-tag)]
    (.removeChild parent canvas)
    (set! (.-display (.-style img-tag)) "block")))

(defn kill-possible-unfinished-palettizations []
  (let [highest-timeout-id (js/setTimeout (fn []) 1)]
    (doseq [i (range 10 highest-timeout-id)]
      (js/clearTimeout i))))

(defn hover-stop [img-tag canvas]
  (hide-canvas-and-show-img img-tag canvas)
  (kill-possible-unfinished-palettizations))

(defn hide-img-and-show-canvas [img-tag canvas]
  (.appendChild (.-parentNode img-tag) canvas)
  (set!  (.-onmouseout canvas) (fn [] (hover-stop img-tag canvas)))
  (set! (.-display (.-style img-tag)) "none"))

(defn hover-start [img-tag]
  (let [img-width (int (.-width img-tag))
        img-height (int (.-height img-tag))
        canvas (.createElement js/document "canvas")
        context (.getContext canvas "2d")
        img (js/Image.)
        load-img (fn [callback]
                   (set! (.-width canvas) img-width)
                   (set! (.-height canvas) img-height)
                   (set! (.-onload img) callback)
                   (set! (.-crossOrigin img) "anonymous")
                   (set! (.-src img) (.-src img-tag)))
        img-ready-handler (fn []
                            (hide-img-and-show-canvas img-tag canvas)
                            (.drawImage context img 0 0)
                            (palettizer/run context img-width img-height))]
    (load-img img-ready-handler)))

(defn set-hover-events-for-img-tags []
  (let [img-tags (.getElementsByTagName js/document "img")]
    (dotimes [i (. img-tags -length)]
      (let [img-tag (. img-tags item i)]
        (set! (.-onmouseover img-tag) (fn [] (hover-start img-tag)))))))
