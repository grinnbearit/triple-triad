(ns triple-triad.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [triple-triad.api :as api])
  (:use [cljs.core.async :only [<!]]))


(enable-console-print!)


(def app-state (atom {:cards []}))


(defn card-view
  [app owner {:keys [name]}]
  (om/component
   (html [:li {:key [name]} name])))


(defn card-list
  [app]
  (reify
    om/IWillMount
    (will-mount [_]
      (go (let [cards (<! (api/fetch-cards))]
            (om/update! app [:cards] cards))))
    om/IRender
    (render [_]
      (html [:ol (for [card (:cards app)]
                   (om/build card-view app {:opts card}))]))))


(om/root card-list app-state {:target (. js/document (getElementById "app"))})
