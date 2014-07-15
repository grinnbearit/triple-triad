app = angular.module "tripleTriad"

app.controller "GlossaryController", (Cards) ->
  scope = this
  scope.cards = []

  Cards.list().then (data) ->
    scope.cards = data
    return

  return
