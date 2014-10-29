// Compiled by ClojureScript 0.0-2173
goog.provide('triple_triad.board');
goog.require('cljs.core');
goog.require('triple_triad.cards');
goog.require('triple_triad.cards');
goog.require('triple_triad.api');
goog.require('triple_triad.api');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
triple_triad.board.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"player","player",4323118675),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",1014017027),new cljs.core.Keyword(null,"blue","blue",1016931276)], null)),new cljs.core.Keyword(null,"picked","picked",4320394226),null,new cljs.core.Keyword(null,"score","score",1123168772),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"red","red",1014017027),0,new cljs.core.Keyword(null,"blue","blue",1016931276),0], null),new cljs.core.Keyword(null,"hand","hand",1017099233),(function (){var idxs = cljs.core.take.call(null,10,cljs.core.shuffle.call(null,cljs.core.range.call(null,cljs.core.count.call(null,triple_triad.cards.cards))));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"red","red",1014017027),cljs.core.take.call(null,5,idxs),new cljs.core.Keyword(null,"blue","blue",1016931276),cljs.core.take.call(null,5,cljs.core.drop.call(null,5,idxs))], null);
})(),new cljs.core.Keyword(null,"grid","grid",1017085624),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null)], null)], null));
triple_triad.board.card_single = (function card_single(app,owner,p__15792){var map__15799 = p__15792;var map__15799__$1 = ((cljs.core.seq_QMARK_.call(null,map__15799))?cljs.core.apply.call(null,cljs.core.hash_map,map__15799):map__15799);var idx = cljs.core.get.call(null,map__15799__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var color = cljs.core.get.call(null,map__15799__$1,new cljs.core.Keyword(null,"color","color",1108746965));if(typeof triple_triad.board.t15800 !== 'undefined')
{} else
{
/**
* @constructor
*/
triple_triad.board.t15800 = (function (color,idx,map__15799,p__15792,owner,app,card_single,meta15801){
this.color = color;
this.idx = idx;
this.map__15799 = map__15799;
this.p__15792 = p__15792;
this.owner = owner;
this.app = app;
this.card_single = card_single;
this.meta15801 = meta15801;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
triple_triad.board.t15800.cljs$lang$type = true;
triple_triad.board.t15800.cljs$lang$ctorStr = "triple-triad.board/t15800";
triple_triad.board.t15800.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"triple-triad.board/t15800");
});
triple_triad.board.t15800.prototype.om$core$IRender$ = true;
triple_triad.board.t15800.prototype.om$core$IRender$render$arity$1 = (function (this__5430__auto__){var self__ = this;
var this__5430__auto____$1 = this;var attrs15803 = (function (){var G__15804 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["card",cljs.core.name.call(null,self__.color)], null)], null);var G__15804__$1 = ((cljs.core._EQ_.call(null,self__.color,new cljs.core.Keyword(null,"player","player",4323118675).cljs$core$IFn$_invoke$arity$1(self__.app)))?cljs.core.assoc.call(null,G__15804,new cljs.core.Keyword(null,"on-click","on-click",1416542092),((function (G__15804){
return (function (){return om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"picked","picked",4320394226),self__.idx);
});})(G__15804))
):G__15804);var G__15804__$2 = ((cljs.core._EQ_.call(null,self__.idx,new cljs.core.Keyword(null,"picked","picked",4320394226).cljs$core$IFn$_invoke$arity$1(self__.app)))?cljs.core.assoc.call(null,G__15804__$1,new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["card","picked"], null)):G__15804__$1);return G__15804__$2;
})();if(cljs.core.map_QMARK_.call(null,attrs15803))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs15803),React.DOM.img({"src": cljs.core.get_in.call(null,triple_triad.cards.cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.idx,new cljs.core.Keyword(null,"file","file",1017047278)], null))}));
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs15803),React.DOM.img({"src": cljs.core.get_in.call(null,triple_triad.cards.cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.idx,new cljs.core.Keyword(null,"file","file",1017047278)], null))}));
}
});
triple_triad.board.t15800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15802){var self__ = this;
var _15802__$1 = this;return self__.meta15801;
});
triple_triad.board.t15800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15802,meta15801__$1){var self__ = this;
var _15802__$1 = this;return (new triple_triad.board.t15800(self__.color,self__.idx,self__.map__15799,self__.p__15792,self__.owner,self__.app,self__.card_single,meta15801__$1));
});
triple_triad.board.__GT_t15800 = (function __GT_t15800(color__$1,idx__$1,map__15799__$2,p__15792__$1,owner__$1,app__$1,card_single__$1,meta15801){return (new triple_triad.board.t15800(color__$1,idx__$1,map__15799__$2,p__15792__$1,owner__$1,app__$1,card_single__$1,meta15801));
});
}
return (new triple_triad.board.t15800(color,idx,map__15799__$1,p__15792,owner,app,card_single,null));
});
triple_triad.board.card_hand = (function card_hand(app,owner,p__15805){var map__15814 = p__15805;var map__15814__$1 = ((cljs.core.seq_QMARK_.call(null,map__15814))?cljs.core.apply.call(null,cljs.core.hash_map,map__15814):map__15814);var color = cljs.core.get.call(null,map__15814__$1,new cljs.core.Keyword(null,"color","color",1108746965));if(typeof triple_triad.board.t15815 !== 'undefined')
{} else
{
/**
* @constructor
*/
triple_triad.board.t15815 = (function (color,map__15814,p__15805,owner,app,card_hand,meta15816){
this.color = color;
this.map__15814 = map__15814;
this.p__15805 = p__15805;
this.owner = owner;
this.app = app;
this.card_hand = card_hand;
this.meta15816 = meta15816;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
triple_triad.board.t15815.cljs$lang$type = true;
triple_triad.board.t15815.cljs$lang$ctorStr = "triple-triad.board/t15815";
triple_triad.board.t15815.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"triple-triad.board/t15815");
});
triple_triad.board.t15815.prototype.om$core$IRender$ = true;
triple_triad.board.t15815.prototype.om$core$IRender$render$arity$1 = (function (this__5430__auto__){var self__ = this;
var this__5430__auto____$1 = this;return React.DOM.div({"className": "hand"},cljs.core.into_array.call(null,(function (){var iter__4158__auto__ = (function iter__15818(s__15819){return (new cljs.core.LazySeq(null,(function (){var s__15819__$1 = s__15819;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15819__$1);if(temp__4092__auto__)
{var s__15819__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15819__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__15819__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__15821 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__15820 = 0;while(true){
if((i__15820 < size__4157__auto__))
{var idx = cljs.core._nth.call(null,c__4156__auto__,i__15820);cljs.core.chunk_append.call(null,b__15821,sablono.interpreter.interpret.call(null,om.core.build.call(null,triple_triad.board.card_single,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1108746965),self__.color,new cljs.core.Keyword(null,"idx","idx",1014008367),idx], null)], null))));
{
var G__15822 = (i__15820 + 1);
i__15820 = G__15822;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15821),iter__15818.call(null,cljs.core.chunk_rest.call(null,s__15819__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15821),null);
}
} else
{var idx = cljs.core.first.call(null,s__15819__$2);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,om.core.build.call(null,triple_triad.board.card_single,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1108746965),self__.color,new cljs.core.Keyword(null,"idx","idx",1014008367),idx], null)], null))),iter__15818.call(null,cljs.core.rest.call(null,s__15819__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hand","hand",1017099233),self__.color], null)));
})()));
});
triple_triad.board.t15815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15817){var self__ = this;
var _15817__$1 = this;return self__.meta15816;
});
triple_triad.board.t15815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15817,meta15816__$1){var self__ = this;
var _15817__$1 = this;return (new triple_triad.board.t15815(self__.color,self__.map__15814,self__.p__15805,self__.owner,self__.app,self__.card_hand,meta15816__$1));
});
triple_triad.board.__GT_t15815 = (function __GT_t15815(color__$1,map__15814__$2,p__15805__$1,owner__$1,app__$1,card_hand__$1,meta15816){return (new triple_triad.board.t15815(color__$1,map__15814__$2,p__15805__$1,owner__$1,app__$1,card_hand__$1,meta15816));
});
}
return (new triple_triad.board.t15815(color,map__15814__$1,p__15805,owner,app,card_hand,null));
});
triple_triad.board.update_grid_BANG_ = (function update_grid_BANG_(app,e,row,col){var player = new cljs.core.Keyword(null,"player","player",4323118675).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app));var picked = new cljs.core.Keyword(null,"picked","picked",4320394226).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app));var grid = triple_triad.api.grid_step.call(null,triple_triad.cards.cards,new cljs.core.Keyword(null,"grid","grid",1017085624).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app)),row,col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [player,picked], null));var winner = triple_triad.api.winner.call(null,grid);return om.core.transact_BANG_.call(null,app,(function (a){var G__15825 = cljs.core.update_in.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"grid","grid",1017085624),grid),new cljs.core.Keyword(null,"player","player",4323118675),(function (){var G__15826 = player;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"red","red",1014017027),G__15826))
{return new cljs.core.Keyword(null,"blue","blue",1016931276);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.Keyword(null,"red","red",1014017027);
} else
{return null;
}
}
})()),new cljs.core.Keyword(null,"picked","picked",4320394226),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hand","hand",1017099233),player], null),cljs.core.partial.call(null,cljs.core.remove,cljs.core.PersistentHashSet.fromArray([picked], true)));var G__15825__$1 = (cljs.core.truth_(winner)?cljs.core.update_in.call(null,cljs.core.assoc.call(null,G__15825,new cljs.core.Keyword(null,"winner","winner",4521128881),winner),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",1123168772),winner], null),cljs.core.inc):G__15825);return G__15825__$1;
}));
});
triple_triad.board.grid_cell = (function grid_cell(app,owner,p__15828){var map__15834 = p__15828;var map__15834__$1 = ((cljs.core.seq_QMARK_.call(null,map__15834))?cljs.core.apply.call(null,cljs.core.hash_map,map__15834):map__15834);var col = cljs.core.get.call(null,map__15834__$1,new cljs.core.Keyword(null,"col","col",1014002930));var row = cljs.core.get.call(null,map__15834__$1,new cljs.core.Keyword(null,"row","row",1014017356));if(typeof triple_triad.board.t15835 !== 'undefined')
{} else
{
/**
* @constructor
*/
triple_triad.board.t15835 = (function (row,col,map__15834,p__15828,owner,app,grid_cell,meta15836){
this.row = row;
this.col = col;
this.map__15834 = map__15834;
this.p__15828 = p__15828;
this.owner = owner;
this.app = app;
this.grid_cell = grid_cell;
this.meta15836 = meta15836;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
triple_triad.board.t15835.cljs$lang$type = true;
triple_triad.board.t15835.cljs$lang$ctorStr = "triple-triad.board/t15835";
triple_triad.board.t15835.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"triple-triad.board/t15835");
});
triple_triad.board.t15835.prototype.om$core$IRender$ = true;
triple_triad.board.t15835.prototype.om$core$IRender$render$arity$1 = (function (this__5430__auto__){var self__ = this;
var this__5430__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var vec__15838 = cljs.core.get_in.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.row,self__.col], null));var color = cljs.core.nth.call(null,vec__15838,0,null);var idx = cljs.core.nth.call(null,vec__15838,1,null);var cell = vec__15838;if(cljs.core.truth_(cell))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["card",cljs.core.name.call(null,color)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),cljs.core.get_in.call(null,triple_triad.cards.cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,new cljs.core.Keyword(null,"file","file",1017047278)], null))], null)], null)], null);
} else
{if(cljs.core.truth_(new cljs.core.Keyword(null,"picked","picked",4320394226).cljs$core$IFn$_invoke$arity$1(self__.app)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.neutral","div.card.neutral",1549592216),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (p1__15827_SHARP_){return triple_triad.board.update_grid_BANG_.call(null,self__.app,p1__15827_SHARP_,self__.row,self__.col);
})], null)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.neutral","div.card.neutral",1549592216)], null);
} else
{return null;
}
}
}
})());
});
triple_triad.board.t15835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15837){var self__ = this;
var _15837__$1 = this;return self__.meta15836;
});
triple_triad.board.t15835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15837,meta15836__$1){var self__ = this;
var _15837__$1 = this;return (new triple_triad.board.t15835(self__.row,self__.col,self__.map__15834,self__.p__15828,self__.owner,self__.app,self__.grid_cell,meta15836__$1));
});
triple_triad.board.__GT_t15835 = (function __GT_t15835(row__$1,col__$1,map__15834__$2,p__15828__$1,owner__$1,app__$1,grid_cell__$1,meta15836){return (new triple_triad.board.t15835(row__$1,col__$1,map__15834__$2,p__15828__$1,owner__$1,app__$1,grid_cell__$1,meta15836));
});
}
return (new triple_triad.board.t15835(row,col,map__15834__$1,p__15828,owner,app,grid_cell,null));
});
triple_triad.board.grid_row = (function grid_row(app,owner,p__15839){var map__15848 = p__15839;var map__15848__$1 = ((cljs.core.seq_QMARK_.call(null,map__15848))?cljs.core.apply.call(null,cljs.core.hash_map,map__15848):map__15848);var row = cljs.core.get.call(null,map__15848__$1,new cljs.core.Keyword(null,"row","row",1014017356));if(typeof triple_triad.board.t15849 !== 'undefined')
{} else
{
/**
* @constructor
*/
triple_triad.board.t15849 = (function (row,map__15848,p__15839,owner,app,grid_row,meta15850){
this.row = row;
this.map__15848 = map__15848;
this.p__15839 = p__15839;
this.owner = owner;
this.app = app;
this.grid_row = grid_row;
this.meta15850 = meta15850;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
triple_triad.board.t15849.cljs$lang$type = true;
triple_triad.board.t15849.cljs$lang$ctorStr = "triple-triad.board/t15849";
triple_triad.board.t15849.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"triple-triad.board/t15849");
});
triple_triad.board.t15849.prototype.om$core$IRender$ = true;
triple_triad.board.t15849.prototype.om$core$IRender$render$arity$1 = (function (this__5430__auto__){var self__ = this;
var this__5430__auto____$1 = this;return React.DOM.div(null,cljs.core.into_array.call(null,(function (){var iter__4158__auto__ = (function iter__15852(s__15853){return (new cljs.core.LazySeq(null,(function (){var s__15853__$1 = s__15853;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15853__$1);if(temp__4092__auto__)
{var s__15853__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15853__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__15853__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__15855 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__15854 = 0;while(true){
if((i__15854 < size__4157__auto__))
{var col = cljs.core._nth.call(null,c__4156__auto__,i__15854);cljs.core.chunk_append.call(null,b__15855,sablono.interpreter.interpret.call(null,om.core.build.call(null,triple_triad.board.grid_cell,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",1014017356),self__.row,new cljs.core.Keyword(null,"col","col",1014002930),col], null)], null))));
{
var G__15856 = (i__15854 + 1);
i__15854 = G__15856;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15855),iter__15852.call(null,cljs.core.chunk_rest.call(null,s__15853__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15855),null);
}
} else
{var col = cljs.core.first.call(null,s__15853__$2);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,om.core.build.call(null,triple_triad.board.grid_cell,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",1014017356),self__.row,new cljs.core.Keyword(null,"col","col",1014002930),col], null)], null))),iter__15852.call(null,cljs.core.rest.call(null,s__15853__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,cljs.core.range.call(null,3));
})()));
});
triple_triad.board.t15849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15851){var self__ = this;
var _15851__$1 = this;return self__.meta15850;
});
triple_triad.board.t15849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15851,meta15850__$1){var self__ = this;
var _15851__$1 = this;return (new triple_triad.board.t15849(self__.row,self__.map__15848,self__.p__15839,self__.owner,self__.app,self__.grid_row,meta15850__$1));
});
triple_triad.board.__GT_t15849 = (function __GT_t15849(row__$1,map__15848__$2,p__15839__$1,owner__$1,app__$1,grid_row__$1,meta15850){return (new triple_triad.board.t15849(row__$1,map__15848__$2,p__15839__$1,owner__$1,app__$1,grid_row__$1,meta15850));
});
}
return (new triple_triad.board.t15849(row,map__15848__$1,p__15839,owner,app,grid_row,null));
});
triple_triad.board.card_grid = (function card_grid(app){if(typeof triple_triad.board.t15864 !== 'undefined')
{} else
{
/**
* @constructor
*/
triple_triad.board.t15864 = (function (app,card_grid,meta15865){
this.app = app;
this.card_grid = card_grid;
this.meta15865 = meta15865;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
triple_triad.board.t15864.cljs$lang$type = true;
triple_triad.board.t15864.cljs$lang$ctorStr = "triple-triad.board/t15864";
triple_triad.board.t15864.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"triple-triad.board/t15864");
});
triple_triad.board.t15864.prototype.om$core$IRender$ = true;
triple_triad.board.t15864.prototype.om$core$IRender$render$arity$1 = (function (this__5430__auto__){var self__ = this;
var this__5430__auto____$1 = this;return React.DOM.div(null,cljs.core.into_array.call(null,(function (){var iter__4158__auto__ = (function iter__15867(s__15868){return (new cljs.core.LazySeq(null,(function (){var s__15868__$1 = s__15868;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15868__$1);if(temp__4092__auto__)
{var s__15868__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15868__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__15868__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__15870 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__15869 = 0;while(true){
if((i__15869 < size__4157__auto__))
{var row = cljs.core._nth.call(null,c__4156__auto__,i__15869);cljs.core.chunk_append.call(null,b__15870,sablono.interpreter.interpret.call(null,om.core.build.call(null,triple_triad.board.grid_row,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row","row",1014017356),row], null)], null))));
{
var G__15871 = (i__15869 + 1);
i__15869 = G__15871;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15870),iter__15867.call(null,cljs.core.chunk_rest.call(null,s__15868__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15870),null);
}
} else
{var row = cljs.core.first.call(null,s__15868__$2);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,om.core.build.call(null,triple_triad.board.grid_row,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row","row",1014017356),row], null)], null))),iter__15867.call(null,cljs.core.rest.call(null,s__15868__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,cljs.core.range.call(null,3));
})()));
});
triple_triad.board.t15864.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15866){var self__ = this;
var _15866__$1 = this;return self__.meta15865;
});
triple_triad.board.t15864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15866,meta15865__$1){var self__ = this;
var _15866__$1 = this;return (new triple_triad.board.t15864(self__.app,self__.card_grid,meta15865__$1));
});
triple_triad.board.__GT_t15864 = (function __GT_t15864(app__$1,card_grid__$1,meta15865){return (new triple_triad.board.t15864(app__$1,card_grid__$1,meta15865));
});
}
return (new triple_triad.board.t15864(app,card_grid,null));
});
triple_triad.board.score_board = (function score_board(app){if(typeof triple_triad.board.t15877 !== 'undefined')
{} else
{
/**
* @constructor
*/
triple_triad.board.t15877 = (function (app,score_board,meta15878){
this.app = app;
this.score_board = score_board;
this.meta15878 = meta15878;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
triple_triad.board.t15877.cljs$lang$type = true;
triple_triad.board.t15877.cljs$lang$ctorStr = "triple-triad.board/t15877";
triple_triad.board.t15877.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"triple-triad.board/t15877");
});
triple_triad.board.t15877.prototype.om$core$IRender$ = true;
triple_triad.board.t15877.prototype.om$core$IRender$render$arity$1 = (function (this__5430__auto__){var self__ = this;
var this__5430__auto____$1 = this;return React.DOM.div(null,(function (){var attrs15880 = [cljs.core.str("red "),cljs.core.str(cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",1123168772),new cljs.core.Keyword(null,"red","red",1014017027)], null)))].join('');if(cljs.core.map_QMARK_.call(null,attrs15880))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red-text"], null)], null),attrs15880)),null);
} else
{return React.DOM.span({"className": "red-text"},sablono.interpreter.interpret.call(null,attrs15880));
}
})(),(function (){var attrs15881 = [cljs.core.str("blue "),cljs.core.str(cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",1123168772),new cljs.core.Keyword(null,"blue","blue",1016931276)], null)))].join('');if(cljs.core.map_QMARK_.call(null,attrs15881))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["blue-text"], null)], null),attrs15881)),null);
} else
{return React.DOM.span({"className": "blue-text"},sablono.interpreter.interpret.call(null,attrs15881));
}
})());
});
triple_triad.board.t15877.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15879){var self__ = this;
var _15879__$1 = this;return self__.meta15878;
});
triple_triad.board.t15877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15879,meta15878__$1){var self__ = this;
var _15879__$1 = this;return (new triple_triad.board.t15877(self__.app,self__.score_board,meta15878__$1));
});
triple_triad.board.__GT_t15877 = (function __GT_t15877(app__$1,score_board__$1,meta15878){return (new triple_triad.board.t15877(app__$1,score_board__$1,meta15878));
});
}
return (new triple_triad.board.t15877(app,score_board,null));
});
triple_triad.board.reset_state_BANG_ = (function reset_state_BANG_(app){var idxs = cljs.core.take.call(null,10,cljs.core.shuffle.call(null,cljs.core.range.call(null,cljs.core.count.call(null,triple_triad.cards.cards))));return om.core.transact_BANG_.call(null,app,(function (p1__15882_SHARP_){return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__15882_SHARP_,new cljs.core.Keyword(null,"winner","winner",4521128881),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hand","hand",1017099233),new cljs.core.Keyword(null,"red","red",1014017027)], null),cljs.core.take.call(null,5,idxs)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hand","hand",1017099233),new cljs.core.Keyword(null,"blue","blue",1016931276)], null),cljs.core.take.call(null,5,cljs.core.drop.call(null,5,idxs))),new cljs.core.Keyword(null,"grid","grid",1017085624),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null)], null));
}));
});
triple_triad.board.winner_header = (function winner_header(app){if(typeof triple_triad.board.t15886 !== 'undefined')
{} else
{
/**
* @constructor
*/
triple_triad.board.t15886 = (function (app,winner_header,meta15887){
this.app = app;
this.winner_header = winner_header;
this.meta15887 = meta15887;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
triple_triad.board.t15886.cljs$lang$type = true;
triple_triad.board.t15886.cljs$lang$ctorStr = "triple-triad.board/t15886";
triple_triad.board.t15886.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"triple-triad.board/t15886");
});
triple_triad.board.t15886.prototype.om$core$IRender$ = true;
triple_triad.board.t15886.prototype.om$core$IRender$render$arity$1 = (function (this__5430__auto__){var self__ = this;
var this__5430__auto____$1 = this;return React.DOM.div(null,React.DOM.span({"className": [cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"winner","winner",4521128881).cljs$core$IFn$_invoke$arity$1(self__.app))),cljs.core.str("-text")].join('')},sablono.interpreter.interpret.call(null,[cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"winner","winner",4521128881).cljs$core$IFn$_invoke$arity$1(self__.app))),cljs.core.str(" wins")].join(''))),React.DOM.button({"onClick": (function (){return triple_triad.board.reset_state_BANG_.call(null,self__.app);
})},"start over"));
});
triple_triad.board.t15886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15888){var self__ = this;
var _15888__$1 = this;return self__.meta15887;
});
triple_triad.board.t15886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15888,meta15887__$1){var self__ = this;
var _15888__$1 = this;return (new triple_triad.board.t15886(self__.app,self__.winner_header,meta15887__$1));
});
triple_triad.board.__GT_t15886 = (function __GT_t15886(app__$1,winner_header__$1,meta15887){return (new triple_triad.board.t15886(app__$1,winner_header__$1,meta15887));
});
}
return (new triple_triad.board.t15886(app,winner_header,null));
});
triple_triad.board.player_header = (function player_header(app){if(typeof triple_triad.board.t15892 !== 'undefined')
{} else
{
/**
* @constructor
*/
triple_triad.board.t15892 = (function (app,player_header,meta15893){
this.app = app;
this.player_header = player_header;
this.meta15893 = meta15893;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
triple_triad.board.t15892.cljs$lang$type = true;
triple_triad.board.t15892.cljs$lang$ctorStr = "triple-triad.board/t15892";
triple_triad.board.t15892.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"triple-triad.board/t15892");
});
triple_triad.board.t15892.prototype.om$core$IRender$ = true;
triple_triad.board.t15892.prototype.om$core$IRender$render$arity$1 = (function (this__5430__auto__){var self__ = this;
var this__5430__auto____$1 = this;return React.DOM.span({"className": [cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"player","player",4323118675).cljs$core$IFn$_invoke$arity$1(self__.app))),cljs.core.str("-text")].join('')},sablono.interpreter.interpret.call(null,[cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"player","player",4323118675).cljs$core$IFn$_invoke$arity$1(self__.app))),cljs.core.str("'s turn")].join('')));
});
triple_triad.board.t15892.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15894){var self__ = this;
var _15894__$1 = this;return self__.meta15893;
});
triple_triad.board.t15892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15894,meta15893__$1){var self__ = this;
var _15894__$1 = this;return (new triple_triad.board.t15892(self__.app,self__.player_header,meta15893__$1));
});
triple_triad.board.__GT_t15892 = (function __GT_t15892(app__$1,player_header__$1,meta15893){return (new triple_triad.board.t15892(app__$1,player_header__$1,meta15893));
});
}
return (new triple_triad.board.t15892(app,player_header,null));
});
triple_triad.board.board = (function board(app){if(typeof triple_triad.board.t15900 !== 'undefined')
{} else
{
/**
* @constructor
*/
triple_triad.board.t15900 = (function (app,board,meta15901){
this.app = app;
this.board = board;
this.meta15901 = meta15901;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
triple_triad.board.t15900.cljs$lang$type = true;
triple_triad.board.t15900.cljs$lang$ctorStr = "triple-triad.board/t15900";
triple_triad.board.t15900.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"triple-triad.board/t15900");
});
triple_triad.board.t15900.prototype.om$core$IRender$ = true;
triple_triad.board.t15900.prototype.om$core$IRender$render$arity$1 = (function (this__5430__auto__){var self__ = this;
var this__5430__auto____$1 = this;return React.DOM.div(null,React.DOM.h1(null,"Triple Triad Board"),sablono.interpreter.interpret.call(null,om.core.build.call(null,triple_triad.board.score_board,self__.app)),(cljs.core.truth_(new cljs.core.Keyword(null,"winner","winner",4521128881).cljs$core$IFn$_invoke$arity$1(self__.app))?sablono.interpreter.interpret.call(null,om.core.build.call(null,triple_triad.board.winner_header,self__.app)):sablono.interpreter.interpret.call(null,om.core.build.call(null,triple_triad.board.player_header,self__.app))),sablono.interpreter.interpret.call(null,om.core.build.call(null,triple_triad.board.card_hand,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),new cljs.core.Keyword(null,"red","red",1014017027)], null)], null))),sablono.interpreter.interpret.call(null,om.core.build.call(null,triple_triad.board.card_grid,self__.app)),sablono.interpreter.interpret.call(null,om.core.build.call(null,triple_triad.board.card_hand,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),new cljs.core.Keyword(null,"blue","blue",1016931276)], null)], null))));
});
triple_triad.board.t15900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15902){var self__ = this;
var _15902__$1 = this;return self__.meta15901;
});
triple_triad.board.t15900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15902,meta15901__$1){var self__ = this;
var _15902__$1 = this;return (new triple_triad.board.t15900(self__.app,self__.board,meta15901__$1));
});
triple_triad.board.__GT_t15900 = (function __GT_t15900(app__$1,board__$1,meta15901){return (new triple_triad.board.t15900(app__$1,board__$1,meta15901));
});
}
return (new triple_triad.board.t15900(app,board,null));
});
om.core.root.call(null,triple_triad.board.board,triple_triad.board.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=board.js.map