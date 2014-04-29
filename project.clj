(defproject triple-triad "0.1.0"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2173"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [om "0.6.2"]
                 [sablono "0.2.16"]]
  :source-paths ["src"]
  :plugins [[lein-cljsbuild "1.0.2"]]
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src"]
                        :compiler {:output-to "resources/public/js/triple_triad.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :none
                                   :source-map true}}]})
