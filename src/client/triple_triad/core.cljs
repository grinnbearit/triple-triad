(ns triple-triad.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [triple-triad.api :as api])
  (:use [cljs.core.async :only [<!]]))


(enable-console-print!)


(def app-state (atom {:cards []}))


(defn- format-rank
  [n]
  (case n
    10 "A"
    n))


(defn- format-element
  [elt]
  (when elt
    (name elt)))


(defn card-view
  [app owner opts]
  (om/component
   (html [:tr {:key (:name opts)}
          [:td
           [:div (:name opts)]
           [:img {:src (:file opts)}]]
          [:td (:level opts)]
          [:td (format-rank (:top opts))]
          [:td (format-rank (:right opts))]
          [:td (format-rank (:bottom opts))]
          [:td (format-rank (:left opts))]
          [:td (format-element (:element opts))]
          [:td (:location opts)]])))


(defn card-list
  [app]
  (reify
    om/IWillMount
    (will-mount [_]
      (go (let [cards (<! (api/fetch-cards))]
            (om/update! app [:cards] cards))))
    om/IRender
    (render [_]
      (html [:table
             [:thead
              [:tr
               [:th "name"] [:th "level"] [:th "top"] [:th "right"]
               [:th "bottom"] [:th "left"] [:th "element"] [:th "location"]]]
             [:tbody (for [card (:cards app)]
                       (om/build card-view app {:opts card}))]]))))


(om/root card-list app-state {:target (. js/document (getElementById "app"))})
