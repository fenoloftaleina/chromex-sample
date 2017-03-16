(ns chromex-sample.content-script.core
  (:require [sonja.loader :as loader]))

(defn init! []
  (js/setInterval
    (fn []
      (loader/set-hover-events-for-img-tags))
    1000))
