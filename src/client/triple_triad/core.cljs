(ns triple-triad.core
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]))


(enable-console-print!)


(defn home
  [app]
  (om/component
   (html [:div
          [:h1 "Triple Triad"]
          [:div [:a {:href "glossary.html"} "glossary"]]
          [:div [:a {:href "board.html"} "board"]]])))


(om/root home nil {:target (. js/document (getElementById "app"))})
