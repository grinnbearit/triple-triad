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
  [app owner {:keys [card]}]
  (reify
    om/IRenderState
    (render-state [_ {:keys [image?]}]
      (html [:tr {:key (:name card)}
             [:td
              [:div (:name card)]
              (when image?
                [:img {:src (:file card)}])]
             [:td (:level card)]
             [:td (format-rank (:top card))]
             [:td (format-rank (:right card))]
             [:td (format-rank (:bottom card))]
             [:td (format-rank (:left card))]
             [:td (format-element (:element card))]
             [:td (:location card)]]))))


(defn card-list
  [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:images? true})

    om/IWillMount
    (will-mount [_]
      (go (let [cards (<! (api/fetch-cards))]
            (om/update! app [:cards] cards))))

    om/IRenderState
    (render-state [_ {:keys [images?]}]
      (html [:table
             [:thead
              [:tr
               [:th
                [:button {:on-click #(om/update-state! owner :images? not)}
                 (if images? "-" "+")]
                [:span "name"]]
               [:th "level"]
               [:th "top"]
               [:th "right"]
               [:th "bottom"]
               [:th "left"]
               [:th "element"]
               [:th "location"]]]
             [:tbody (for [card (:cards app)]
                       (om/build card-view app {:opts {:card card}
                                                :state {:image? images?}}))]]))))


(om/root card-list app-state {:target (. js/document (getElementById "app"))})
