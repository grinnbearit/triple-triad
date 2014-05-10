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
         :hand {:red []
                :blue []}
         :grid [[nil nil nil]
                [nil nil nil]
                [nil nil nil]]}))


(defn card-hand
  [app owner {:keys [color]}]
  (om/component
   (let [cards (:cards app)
         hand (get-in app [:hand color])]
     (html [:div.hand
            (for [idx hand]
              [:div (cond-> {:class ["card" (name color)]}

                            (= color (:player app))
                            (assoc :on-click #(om/update! app :picked idx))

                            (= idx (:picked app))
                            (assoc :class ["card" "picked"]))

               [:img {:src (get-in cards [idx :file])}]])]))))


(defn- neighbours
  [row col]
  (for [[r c :as neighbour] [[(dec row) col :top :bottom]
                             [(inc row) col :bottom :top]
                             [row (dec col) :left :right]
                             [row (inc col) :right :left]]
        :when (and (<= 0 r 2) (<= 0 c 2))]
    neighbour))


(defn- grid-step
  [cards grid row col [player picked]]
  (let [attacker (cards picked)]
    (reduce (fn [g [r c atk blk]]
              (let [[color idx] (get-in grid [r c])
                    blocker (and idx (cards idx))]
                (if (and blocker (not= color player)
                         (< (blocker blk) (attacker atk)))
                  (assoc-in g [r c] [player idx])
                  g)))
            (assoc-in grid [row col] [player picked])
            (neighbours row col))))


(defn- update-grid!
  [app e row col]
  (let [cards (:cards @app)
        grid (:grid @app)
        player (:player @app)
        picked (:picked @app)]
    (om/transact! app (fn [a]
                        (-> (assoc a :grid (grid-step cards grid row col [player picked]))
                            (assoc :player (case player :red :blue :red))
                            (assoc :picked nil)
                            (update-in [:hand player] (partial remove #{picked})))))))


(defn card-grid
  [app]
  (om/component
   (html [:div
          (for [row (range 3)]
            [:div
             (for [col (range 3)
                   :let [[color idx :as cell] (get-in (:grid app) [row col])]]
               (cond  cell
                      [:div {:class ["card" (name color)]}
                       [:img {:src (get-in (:cards app) [idx :file])}]]

                      (:picked app)
                      [:div.card.neutral
                       {:on-click #(update-grid! app % row col)}]

                      :else
                      [:div.card.neutral]))])])))


(defn board
  [app]
  (reify
    om/IWillMount
    (will-mount [_]
      (go (let [cards (<! (api/fetch-cards))
                idxs (take 10 (shuffle (range (count cards))))]
            (om/transact! app (fn [a]
                                (-> (assoc a :cards cards)
                                    (assoc-in [:hand :red] (take 5 idxs))
                                    (assoc-in [:hand :blue] (take 5 (drop 5 idxs)))))))))

    om/IRender
    (render [_]
      (html [:div
             [:h1 "Triple Triad Board"]
             [:h2 (str (name (:player app)) "'s turn")]
             (om/build card-hand app {:opts {:color :red}})
             (om/build card-grid app)
             (om/build card-hand app {:opts {:color :blue}})]))))


(om/root board app-state {:target (. js/document (getElementById "app"))})
