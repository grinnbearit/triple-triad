(ns triple-triad.api)


(defn- neighbours
  [row col]
  (for [[r c :as neighbour] [[(dec row) col :top :bottom]
                             [(inc row) col :bottom :top]
                             [row (dec col) :left :right]
                             [row (inc col) :right :left]]
        :when (and (<= 0 r 2) (<= 0 c 2))]
    neighbour))


(defn grid-step
  "Returns the next grid state with the new card added"
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


(defn winner
  "Returns winnner if any, o/w returns nil"
  [grid]
  (let [values (apply concat grid)]
    (when (not-any? nil? values)
      (->> values
           (map first)
           (frequencies)
           (sort-by second)
           (last)
           (first)))))
