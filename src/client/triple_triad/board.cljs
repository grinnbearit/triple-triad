(ns triple-triad.board
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [triple-triad.api :as api])
  (:use [cljs.core.async :only [<!]]))


(enable-console-print!)


(def app-state
  (atom {:cards []
         :player (rand-nth [:red :blue])
         :picked nil
         :score {:red 0
                 :blue 0}
         :hand {:red []
                :blue []}
         :grid [[nil nil nil]
                [nil nil nil]
                [nil nil nil]]}))


(defn card-single
  [app owner {:keys [color idx]}]
  (om/component
   (html
    [:div (cond-> {:class ["card" (name color)]}

                  (= color (:player app))
                  (assoc :on-click #(om/update! app :picked idx))

                  (= idx (:picked app))
                  (assoc :class ["card" "picked"]))

     [:img {:src (get-in (:cards app) [idx :file])}]])))


(defn card-hand
  [app owner {:keys [color]}]
  (om/component
   (html
    [:div.hand
     (for [idx (get-in app [:hand color])]
       (om/build card-single app {:opts {:color color
                                         :idx idx}}))])))


(defn- update-grid!
  [app e row col]
  (let [player (:player @app)
        picked (:picked @app)
        grid (api/grid-step (:cards @app) (:grid @app) row col [player picked])
        winner (api/winner grid)]
    (om/transact! app (fn [a]
                        (cond-> (-> (assoc a :grid grid)
                                    (assoc :player (case player :red :blue :red))
                                    (assoc :picked nil)
                                    (update-in [:hand player] (partial remove #{picked})))

                                winner
                                (-> (assoc :winner winner)
                                    (update-in [:score winner] inc)))))))


(defn grid-cell
  [app owner {:keys [row col]}]
  (om/component
   (html
    (let [[color idx :as cell] (get-in (:grid app) [row col])]
      (cond cell
            [:div {:class ["card" (name color)]}
             [:img {:src (get-in (:cards app) [idx :file])}]]

            (:picked app)
            [:div.card.neutral
             {:on-click #(update-grid! app % row col)}]

            :else
            [:div.card.neutral])))))


(defn grid-row
  [app owner {:keys [row]}]
  (om/component
   (html
    [:div (for [col (range 3)]
            (om/build grid-cell app {:opts {:row row :col col}}))])))


(defn card-grid
  [app]
  (om/component
   (html
    [:div (for [row (range 3)]
            (om/build grid-row app {:opts {:row row}}))])))


(defn score-board
  [app]
  (om/component
   (html
    [:div
     [:span.red-text (str "red " (get-in app [:score :red]))]
     [:span.blue-text (str "blue " (get-in app [:score :blue]))]])))


(defn- reset-state!
  [app]
  (let [cards (:cards @app)
        idxs (take 10 (shuffle (range (count cards))))]
    (om/transact! app #(-> (assoc % :winner nil)
                           (assoc-in [:hand :red] (take 5 idxs))
                           (assoc-in [:hand :blue] (take 5 (drop 5 idxs)))
                           (assoc :grid [[nil nil nil]
                                         [nil nil nil]
                                         [nil nil nil]])))))


(defn winner-header
  [app]
  (om/component
   (html
    [:div
     [:span {:class (str (name (:winner app)) "-text")}
      (str (name (:winner app)) " wins")]
     [:button {:on-click #(reset-state! app)} "start over"]])))


(defn player-header
  [app]
  (om/component
   (html
    [:span {:class (str (name (:player app)) "-text")}
     (str (name (:player app)) "'s turn")])))


(defn board
  [app]
  (reify
    om/IWillMount
    (will-mount [_]
      (go (let [cards (<! (api/fetch-cards))]
            (om/transact! app #(let [idxs (take 10 (shuffle (range (count cards))))]
                                 (-> (assoc % :cards cards)
                                     (assoc-in [:hand :red] (take 5 idxs))
                                     (assoc-in [:hand :blue] (take 5 (drop 5 idxs)))))))))

    om/IRender
    (render [_]
      (html
       [:div
        [:h1 "Triple Triad Board"]
        (om/build score-board app)
        (if (:winner app)
          (om/build winner-header app)
          (om/build player-header app))
        (om/build card-hand app {:opts {:color :red}})
        (om/build card-grid app)
        (om/build card-hand app {:opts {:color :blue}})]))))


(om/root board app-state {:target (. js/document (getElementById "app"))})
