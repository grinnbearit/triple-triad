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
                                       :pattern nil}
                                :level {:min 1
                                        :max 10}}
                      :sort {:column :name
                             :ascending? true}}))


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
  [app owner {:keys [column text]}]
  (om/component
   (html (if (= column (get-in app [:sort :column]))
           [:th.sortBy
            {:on-click #(om/transact! app [:sort :ascending?] not)}
            text]
           [:th
            {:on-click #(om/update! app [:sort] {:column column
                                                 :ascending? true})}
            text]))))


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
      (om/build header app {:opts {:column :name :text "name"}})))))


(defn- update-level!
  [app e bound]
  (let [v (js/parseInt (.. e -target -value))]
    (om/update! app [:filters :level bound] v)))


(defn level-header
  [app]
  (om/component
   (html
    (if (get-in app [:filters :show?])
      [:th
       [:select {:value (get-in app [:filters :level :min])
                 :on-change #(update-level! app % :min)}
        (for [option (range 1 (inc (get-in app [:filters :level :max])))]
          [:option {:value option} option])]
       [:span "<= level <="]
       [:select {:value (get-in app [:filters :level :max])
                 :on-change #(update-level! app % :max)}
        (for [option (range (get-in app [:filters :level :min]) 11)]
          [:option {:value option} option])]]
      (om/build header app {:opts {:column :level :text "level"}})))))


(defn card-list
  [app]
  (om/component
   (html [:table
          [:thead
           [:tr
            (om/build name-header app)
            (om/build level-header app)
            (om/build header app {:opts {:column :top :text "top"}})
            (om/build header app {:opts {:column :right :text "right"}})
            (om/build header app {:opts {:column :bottom :text "bottom"}})
            (om/build header app {:opts {:column :left :text "left"}})
            (om/build header app {:opts {:column :element :text "element"}})
            (om/build header app {:opts {:column :location :text "location"}})]]
          [:tbody (let [column (get-in app [:sort :column])
                        ascending? (get-in app [:sort :ascending?])
                        text (get-in app [:filters :name :pattern])
                        pattern (and text (re-pattern (str "(?i)" text)))
                        level-min (get-in app [:filters :level :min])
                        level-max (get-in app [:filters :level :max])]
                    (for [card (sort-by (case column :element (comp str :element) column)
                                        (if ascending? < >)
                                        (:cards app))
                          :when (and (or (not pattern) (re-find pattern (:name card)))
                                     (<= level-min (:level card) level-max))]
                      (om/build card-view app {:opts {:card card}
                                               :react-key (:name card)})))]])))


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
