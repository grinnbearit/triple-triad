(ns triple-triad.board
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]))


(enable-console-print!)


(defn board
  [app]
  (om/component
   (html [:h1 "Triple Triad Board"])))


(om/root board nil {:target (. js/document (getElementById "app"))})
