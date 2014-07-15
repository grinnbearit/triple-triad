app = angular.module "tripleTriad"

app.controller "CardListController", (Cards) ->
  scope = this
  scope.cards = []

  Cards.list().then (data) ->
    scope.cards = data
    return

  return
