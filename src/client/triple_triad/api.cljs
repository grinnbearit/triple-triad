(ns triple-triad.api
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http])
  (:use [cljs.core.async :only [chan <! >!]]
        [cljs.reader :only [read-string]]))


(defn fetch-cards
  []
  (let [c (chan)]
    (go (let [res (<! (http/get "/cards.edn"))]
          (>! c (read-string (:body res)))))
    c))
