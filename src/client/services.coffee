app = angular.module "tripleTriad"

app.factory "Cards", ["$http", ($http) ->
  list: ->
    $http.get("/cards.json").then (response) ->
      response.data
  ]
