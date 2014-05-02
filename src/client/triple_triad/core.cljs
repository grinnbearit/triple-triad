(ns triple-triad.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [triple-triad.api :as api])
  (:use [cljs.core.async :only [<!]]))


(enable-console-print!)


(def app-state (atom {:cards []
                      :filters {:show? false
                                :name {:images? false
                                       :pattern nil}}}))


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
  (om/component
   (html [:tr {:key (:name card)}
          [:td
           [:div (:name card)]
           (when (get-in app [:filters :name :images?])
             [:img {:src (:file card)}])]
          [:td (:level card)]
          [:td (format-rank (:top card))]
          [:td (format-rank (:right card))]
          [:td (format-rank (:bottom card))]
          [:td (format-rank (:left card))]
          [:td (format-element (:element card))]
          [:td (:location card)]])))


(defn- update-pattern!
  [app e]
  (let [v (.. e -target -value)]
    (if (seq v)
      (om/update! app [:filters :name :pattern] (re-pattern (str "(?i)" v)))
      (om/update! app [:filters :name :pattern] nil))))


(defn name-header
  [app]
  (om/component
   (html
    (if (get-in app [:filters :show?])
      [:th
       [:input {:type "text" :placeholder "name"
                :on-change #(update-pattern! app %)}]
       [:button {:on-click #(om/transact! app [:filters :name :images?] not)}
        (if (get-in app [:filters :name :images?])
          "Hide Images"
          "Show Images")]]
      [:th "name"]))))


(defn card-list
  [app]
  (om/component
   (html [:table
          [:thead
           [:tr
            (om/build name-header app)
            [:th "level"]
            [:th "top"]
            [:th "right"]
            [:th "bottom"]
            [:th "left"]
            [:th "element"]
            [:th "location"]]]
          [:tbody (let [pattern (get-in app [:filters :name :pattern])]
                    (for [card (:cards app)
                          :when (or (not pattern) (re-find pattern (:name card)))]
                      (om/build card-view app {:opts {:card card}})))]])))


(defn glossary
  [app]
  (reify
    om/IWillMount
    (will-mount [_]
      (go (let [cards (<! (api/fetch-cards))]
            (om/update! app [:cards] cards))))

    om/IRender
    (render [_]
      (html [:div
             [:h1 "Triple Triad Glossary"]
             [:button {:on-click #(om/transact! app [:filters :show?] not)}
              (if (get-in app [:filters :show?])
                "Hide Filters"
                "Show Filters")]
             (om/build card-list app)]))))


(om/root glossary app-state {:target (. js/document (getElementById "app"))})
