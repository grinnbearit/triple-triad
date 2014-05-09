(ns triple-triad.board
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [triple-triad.api :as api])
  (:use [cljs.core.async :only [<!]]))


(enable-console-print!)


(def app-state
  (atom {:cards []
         :hands {:red []
                 :blue []}}))


(defn hand
  [app owner {:keys [color]}]
  (om/component
   (html [:div (for [card (get-in app [:hands color])]
                 [:div {:class (name color)}
                  [:img {:src (:file card)}]])])))


(defn grid
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
      (go (let [cards (<! (api/fetch-cards))]
            (om/update! app {:cards cards
                             :hands {:red (take 5 (shuffle cards))
                                     :blue (take 5 (shuffle cards))}}))))

    om/IRender
    (render [_]
      (html [:div
             [:h1 "Triple Triad Board"]
             (om/build hand app {:opts {:color :red}})
             (om/build grid app)
             (om/build hand app {:opts {:color :blue}})]))))


(om/root board app-state {:target (. js/document (getElementById "app"))})
