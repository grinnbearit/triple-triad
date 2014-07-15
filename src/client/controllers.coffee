app = angular.module "tripleTriad"

app.controller "GlossaryController", (Cards) ->
  scope = this
  scope.cards = []
  scope.selected = "name"

  scope.select = (field) ->
    scope.selected = field

  scope.isSelected = (field) ->
    scope.selected == field

  Cards.list().then (data) ->
    scope.cards = data
    return

  return
