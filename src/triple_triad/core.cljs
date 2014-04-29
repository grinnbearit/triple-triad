(ns triple-triad.core
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]))


(enable-console-print!)


(defn root
  [app owner]
  (om/component
   (html [:h1 "Triple Triad"])))


(om/root root nil {:target (. js/document (getElementById "app"))})
