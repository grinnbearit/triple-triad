(ns triple-triad.board
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [triple-triad.api :as api])
  (:use [cljs.core.async :only [<!]]))


(enable-console-print!)


(def app-state
  (atom {:cards []
         :player :red
         :picked nil
         :hands {:red []
                 :blue []}}))


(defn card-hand
  [app owner {:keys [color]}]
  (om/component
   (let [cards (:cards app)
         hand (get-in app [:hands color])]
     (html [:div (for [idx hand]
                   [:div (cond-> {:class (name color)}

                                 (= color (:player app))
                                 (assoc :on-click #(om/update! app :picked idx))

                                 (= idx (:picked app))
                                 (assoc :class "picked"))

                    [:img {:src (get-in cards [idx :file])}]])]))))


(defn card-grid
  [app]
  (om/component
   (html [:div
          [:div [:div.neutral][:div.neutral][:div.neutral]]
          [:div [:div.neutral][:div.neutral][:div.neutral]]
          [:div [:div.neutral][:div.neutral][:div.neutral]]])))


(defn board
  [app]
  (reify
    om/IWillMount
    (will-mount [_]
      (go (let [cards (<! (api/fetch-cards))
                idxs (vec (repeatedly 10 (partial rand-int (count cards))))]
            (om/transact! app (fn [a]
                                (-> (assoc a :cards cards)
                                    (assoc-in [:hands :red] (subvec idxs 0 5))
                                    (assoc-in [:hands :blue] (subvec idxs 5 10))))))))

    om/IRender
    (render [_]
      (html [:div
             [:h1 "Triple Triad Board"]
             [:div (pr-str (dissoc @app-state :cards))]
             (om/build card-hand app {:opts {:color :red}})
             (om/build card-grid app)
             (om/build card-hand app {:opts {:color :blue}})]))))


(om/root board app-state {:target (. js/document (getElementById "app"))})
