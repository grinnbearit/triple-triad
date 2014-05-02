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
                                       :pattern nil}}
                      :sort-by :name}))


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


(defn header
  [app owner {:keys [sort-by text]}]
  (om/component
   (html [:th (if (= sort-by (:sort-by app))
                [:span.sortBy text]
                [:span {:on-click #(om/update! app [:sort-by] sort-by)}
                 text])])))


(defn- update-pattern!
  [app e]
  (let [v (.. e -target -value)]
    (if (seq v)
      (om/update! app [:filters :name :pattern] v)
      (om/update! app [:filters :name :pattern] nil))))


(defn name-header
  [app]
  (om/component
   (html
    (if (get-in app [:filters :show?])
      [:th
       [:input {:type "text" :placeholder "name"
                :value (get-in app [:filters :name :pattern])
                :on-change #(update-pattern! app %)}]
       [:button {:on-click #(om/transact! app [:filters :name :images?] not)}
        (if (get-in app [:filters :name :images?])
          "Hide Images"
          "Show Images")]]
      (om/build header app {:opts {:sort-by :name :text "name"}})))))


(defn card-list
  [app]
  (om/component
   (html [:table
          [:thead
           [:tr
            (om/build name-header app)
            (om/build header app {:opts {:sort-by :level :text "level"}})
            (om/build header app {:opts {:sort-by :top :text "top"}})
            (om/build header app {:opts {:sort-by :right :text "right"}})
            (om/build header app {:opts {:sort-by :bottom :text "bottom"}})
            (om/build header app {:opts {:sort-by :left :text "left"}})
            (om/build header app {:opts {:sort-by :element :text "element"}})
            (om/build header app {:opts {:sort-by :location :text "location"}})]]
          [:tbody (let [text (get-in app [:filters :name :pattern])
                        pattern (and text (re-pattern (str "(?i)" text)))]
                    (for [card (sort-by (:sort-by app) (:cards app))
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
