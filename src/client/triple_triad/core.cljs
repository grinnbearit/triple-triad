(ns triple-triad.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [triple-triad.api :as api])
  (:use [cljs.core.async :only [<!]]))


(enable-console-print!)


(def app-state
  (atom {:cards []
         :images? false
         :filters {:show? false
                   :name {:pattern nil}
                   :level {:min 1
                           :max 10}
                   :top {:min 1
                         :max 10}
                   :right {:min 1
                           :max 10}
                   :bottom {:min 1
                            :max 10}
                   :left {:min 1
                          :max 10}
                   :element #{:earth :fire :holy :ice
                              :thunder :wind :neutral}}
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
           (when (:images? app)
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
       [:div "name"]
       [:input {:type "text" :placeholder "name"
                :value (get-in app [:filters :name :pattern])
                :on-change #(update-pattern! app %)}]]
      (om/build header app {:opts {:column :name :text "name"}})))))


(defn- update-bound!
  [app e column bound]
  (let [v (js/parseInt (.. e -target -value))]
    (om/update! app [:filters column bound] v)))


(defn number-header
  [app owner {:keys [column text A?]
              :or {A? true}}]
  (om/component
   (html
    (if (get-in app [:filters :show?])
      [:th
       [:div text]
       [:select {:value (get-in app [:filters column :min])
                 :on-change #(update-bound! app % column :min)}
        (for [option (range 1 (inc (get-in app [:filters column :max])))]
          [:option {:value option} (if A? (format-rank option) option)])]
       [:span " - "]
       [:select {:value (get-in app [:filters column :max])
                 :on-change #(update-bound! app % column :max)}
        (for [option (range (get-in app [:filters column :min]) 11)]
          [:option {:value option} (if A? (format-rank option) option)])]]
      (om/build header app {:opts {:column column :text text}})))))


(defn- update-element!
  [app elt]
  (om/transact! app [:filters :element]
                (fn [elements]
                  (if (elements elt)
                    (disj elements elt)
                    (conj elements elt)))))


(defn element-header
  [app owner]
  (om/component
   (html
    (if (get-in app [:filters :show?])
      [:th
       [:div "element"]
       (for [[elt text] [[:earth "e"] [:fire "f"] [:holy "h"] [:ice "i"]
                         [:thunder "t"] [:wind "w"] [:neutral "n"]]]
         [:input {:type "checkbox" :checked (contains? (get-in app [:filters :element]) elt)
                  :on-change #(update-element! app elt)}
          text])]
      (om/build header app {:opts {:column :element :text "element"}})))))


(defn card-list
  [app]
  (om/component
   (html [:table
          [:thead
           [:tr
            (om/build name-header app)
            (om/build number-header app {:opts {:column :level  :text "level" :A? false}})
            (om/build number-header app {:opts {:column :top    :text "top"}})
            (om/build number-header app {:opts {:column :right  :text "right"}})
            (om/build number-header app {:opts {:column :bottom :text "bottom"}})
            (om/build number-header app {:opts {:column :left   :text "left"}})
            (om/build element-header app)
            (om/build header app {:opts {:column :location :text "location"}})]]
          [:tbody (let [column     (get-in app [:sort :column])
                        ascending? (get-in app [:sort :ascending?])
                        text       (get-in app [:filters :name :pattern])
                        pattern    (and text (re-pattern (str "(?i)" text)))
                        level-min  (get-in app [:filters :level :min])
                        level-max  (get-in app [:filters :level :max])
                        top-min    (get-in app [:filters :top :min])
                        top-max    (get-in app [:filters :top :max])
                        right-min  (get-in app [:filters :right :min])
                        right-max  (get-in app [:filters :right :max])
                        bottom-min (get-in app [:filters :bottom :min])
                        bottom-max (get-in app [:filters :bottom :max])
                        left-min   (get-in app [:filters :left :min])
                        left-max   (get-in app [:filters :left :max])
                        elements   (get-in app [:filters :element])]
                    (for [card (sort-by (case column :element (comp str :element) column)
                                        (if ascending? < >)
                                        (:cards app))
                          :when (and (or (not pattern) (re-find pattern (:name card)))
                                     (<= level-min  (:level card) level-max)
                                     (<= top-min    (:top card)   top-max)
                                     (<= right-min  (:right card) right-max)
                                     (<= bottom-min (:level card) bottom-max)
                                     (<= left-min   (:level card) left-max)
                                     (case (:element card)
                                       nil (elements :neutral)
                                       (elements (:element card))))]
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
             [:button {:on-click #(om/transact! app :images? not)}
              (if (:images? app)
                "Hide Images"
                "Show Images")]
             (om/build card-list app)]))))


(om/root glossary app-state {:target (. js/document (getElementById "app"))})
