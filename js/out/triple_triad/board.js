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
triple_triad.board.card_single = (function card_single(app,owner,p__6381){var map__6388 = p__6381;var map__6388__$1 = ((cljs.core.seq_QMARK_.call(null,map__6388))?cljs.core.apply.call(null,cljs.core.hash_map,map__6388):map__6388);var idx = cljs.core.get.call(null,map__6388__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var color = cljs.core.get.call(null,map__6388__$1,new cljs.core.Keyword(null,"color","color",1108746965));if(typeof triple_triad.board.t6389 !== 'undefined')
{} else
{
/**
* @constructor
*/
triple_triad.board.t6389 = (function (color,idx,map__6388,p__6381,owner,app,card_single,meta6390){
this.color = color;
this.idx = idx;
this.map__6388 = map__6388;
this.p__6381 = p__6381;
this.owner = owner;
this.app = app;
this.card_single = card_single;
this.meta6390 = meta6390;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
triple_triad.board.t6389.cljs$lang$type = true;
triple_triad.board.t6389.cljs$lang$ctorStr = "triple-triad.board/t6389";
triple_triad.board.t6389.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"triple-triad.board/t6389");
});
triple_triad.board.t6389.prototype.om$core$IRender$ = true;
triple_triad.board.t6389.prototype.om$core$IRender$render$arity$1 = (function (this__5433__auto__){var self__ = this;
var this__5433__auto____$1 = this;var attrs6392 = (function (){var G__6393 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["card",cljs.core.name.call(null,self__.color)], null)], null);var G__6393__$1 = ((cljs.core._EQ_.call(null,self__.color,new cljs.core.Keyword(null,"player","player",4323118675).cljs$core$IFn$_invoke$arity$1(self__.app)))?cljs.core.assoc.call(null,G__6393,new cljs.core.Keyword(null,"on-click","on-click",1416542092),((function (G__6393){
return (function (){return om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"picked","picked",4320394226),self__.idx);
});})(G__6393))
):G__6393);var G__6393__$2 = ((cljs.core._EQ_.call(null,self__.idx,new cljs.core.Keyword(null,"picked","picked",4320394226).cljs$core$IFn$_invoke$arity$1(self__.app)))?cljs.core.assoc.call(null,G__6393__$1,new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["card","picked"], null)):G__6393__$1);return G__6393__$2;
})();if(cljs.core.map_QMARK_.call(null,attrs6392))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs6392),React.DOM.img({"src": cljs.core.get_in.call(null,triple_triad.cards.cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.idx,new cljs.core.Keyword(null,"file","file",1017047278)], null))}));
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs6392),React.DOM.img({"src": cljs.core.get_in.call(null,triple_triad.cards.cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.idx,new cljs.core.Keyword(null,"file","file",1017047278)], null))}));
}
});
triple_triad.board.t6389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6391){var self__ = this;
var _6391__$1 = this;return self__.meta6390;
});
triple_triad.board.t6389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6391,meta6390__$1){var self__ = this;
var _6391__$1 = this;return (new triple_triad.board.t6389(self__.color,self__.idx,self__.map__6388,self__.p__6381,self__.owner,self__.app,self__.card_single,meta6390__$1));
});
triple_triad.board.__GT_t6389 = (function __GT_t6389(color__$1,idx__$1,map__6388__$2,p__6381__$1,owner__$1,app__$1,card_single__$1,meta6390){return (new triple_triad.board.t6389(color__$1,idx__$1,map__6388__$2,p__6381__$1,owner__$1,app__$1,card_single__$1,meta6390));
});
}
return (new triple_triad.board.t6389(color,idx,map__6388__$1,p__6381,owner,app,card_single,null));
});
triple_triad.board.card_hand = (function card_hand(app,owner,p__6394){var map__6403 = p__6394;var map__6403__$1 = ((cljs.core.seq_QMARK_.call(null,map__6403))?cljs.core.apply.call(null,cljs.core.hash_map,map__6403):map__6403);var color = cljs.core.get.call(null,map__6403__$1,new cljs.core.Keyword(null,"color","color",1108746965));if(typeof triple_triad.board.t6404 !== 'undefined')
{} else
{
/**
* @constructor
*/
triple_triad.board.t6404 = (function (color,map__6403,p__6394,owner,app,card_hand,meta6405){
this.color = color;
this.map__6403 = map__6403;
this.p__6394 = p__6394;
this.owner = owner;
this.app = app;
this.card_hand = card_hand;
this.meta6405 = meta6405;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
triple_triad.board.t6404.cljs$lang$type = true;
triple_triad.board.t6404.cljs$lang$ctorStr = "triple-triad.board/t6404";
triple_triad.board.t6404.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"triple-triad.board/t6404");
});
triple_triad.board.t6404.prototype.om$core$IRender$ = true;
triple_triad.board.t6404.prototype.om$core$IRender$render$arity$1 = (function (this__5433__auto__){var self__ = this;
var this__5433__auto____$1 = this;return React.DOM.div({"className": "hand"},cljs.core.into_array.call(null,(function (){var iter__4158__auto__ = (function iter__6407(s__6408){return (new cljs.core.LazySeq(null,(function (){var s__6408__$1 = s__6408;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6408__$1);if(temp__4092__auto__)
{var s__6408__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6408__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__6408__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__6410 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__6409 = 0;while(true){
if((i__6409 < size__4157__auto__))
{var idx = cljs.core._nth.call(null,c__4156__auto__,i__6409);cljs.core.chunk_append.call(null,b__6410,sablono.interpreter.interpret.call(null,om.core.build.call(null,triple_triad.board.card_single,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1108746965),self__.color,new cljs.core.Keyword(null,"idx","idx",1014008367),idx], null)], null))));
{
var G__6411 = (i__6409 + 1);
i__6409 = G__6411;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6410),iter__6407.call(null,cljs.core.chunk_rest.call(null,s__6408__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6410),null);
}
} else
{var idx = cljs.core.first.call(null,s__6408__$2);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,om.core.build.call(null,triple_triad.board.card_single,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1108746965),self__.color,new cljs.core.Keyword(null,"idx","idx",1014008367),idx], null)], null))),iter__6407.call(null,cljs.core.rest.call(null,s__6408__$2)));
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
triple_triad.board.t6404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6406){var self__ = this;
var _6406__$1 = this;return self__.meta6405;
});
triple_triad.board.t6404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6406,meta6405__$1){var self__ = this;
var _6406__$1 = this;return (new triple_triad.board.t6404(self__.color,self__.map__6403,self__.p__6394,self__.owner,self__.app,self__.card_hand,meta6405__$1));
});
triple_triad.board.__GT_t6404 = (function __GT_t6404(color__$1,map__6403__$2,p__6394__$1,owner__$1,app__$1,card_hand__$1,meta6405){return (new triple_triad.board.t6404(color__$1,map__6403__$2,p__6394__$1,owner__$1,app__$1,card_hand__$1,meta6405));
});
}
return (new triple_triad.board.t6404(color,map__6403__$1,p__6394,owner,app,card_hand,null));
});
triple_triad.board.update_grid_BANG_ = (function update_grid_BANG_(app,e,row,col){var player = new cljs.core.Keyword(null,"player","player",4323118675).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app));var picked = new cljs.core.Keyword(null,"picked","picked",4320394226).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app));var grid = triple_triad.api.grid_step.call(null,triple_triad.cards.cards,new cljs.core.Keyword(null,"grid","grid",1017085624).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app)),row,col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [player,picked], null));var winner = triple_triad.api.winner.call(null,grid);return om.core.transact_BANG_.call(null,app,(function (a){var G__6414 = cljs.core.update_in.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"grid","grid",1017085624),grid),new cljs.core.Keyword(null,"player","player",4323118675),(function (){var G__6415 = player;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"red","red",1014017027),G__6415))
{return new cljs.core.Keyword(null,"blue","blue",1016931276);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.Keyword(null,"red","red",1014017027);
} else
{return null;
}
}
})()),new cljs.core.Keyword(null,"picked","picked",4320394226),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hand","hand",1017099233),player], null),cljs.core.partial.call(null,cljs.core.remove,cljs.core.PersistentHashSet.fromArray([picked], true)));var G__6414__$1 = (cljs.core.truth_(winner)?cljs.core.update_in.call(null,cljs.core.assoc.call(null,G__6414,new cljs.core.Keyword(null,"winner","winner",4521128881),winner),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",1123168772),winner], null),cljs.core.inc):G__6414);return G__6414__$1;
}));
});
triple_triad.board.grid_cell = (function grid_cell(app,owner,p__6417){var map__6423 = p__6417;var map__6423__$1 = ((cljs.core.seq_QMARK_.call(null,map__6423))?cljs.core.apply.call(null,cljs.core.hash_map,map__6423):map__6423);var col = cljs.core.get.call(null,map__6423__$1,new cljs.core.Keyword(null,"col","col",1014002930));var row = cljs.core.get.call(null,map__6423__$1,new cljs.core.Keyword(null,"row","row",1014017356));if(typeof triple_triad.board.t6424 !== 'undefined')
{} else
{
/**
* @constructor
*/
triple_triad.board.t6424 = (function (row,col,map__6423,p__6417,owner,app,grid_cell,meta6425){
this.row = row;
this.col = col;
this.map__6423 = map__6423;
this.p__6417 = p__6417;
this.owner = owner;
this.app = app;
this.grid_cell = grid_cell;
this.meta6425 = meta6425;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
triple_triad.board.t6424.cljs$lang$type = true;
triple_triad.board.t6424.cljs$lang$ctorStr = "triple-triad.board/t6424";
triple_triad.board.t6424.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"triple-triad.board/t6424");
});
triple_triad.board.t6424.prototype.om$core$IRender$ = true;
triple_triad.board.t6424.prototype.om$core$IRender$render$arity$1 = (function (this__5433__auto__){var self__ = this;
var this__5433__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var vec__6427 = cljs.core.get_in.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.row,self__.col], null));var color = cljs.core.nth.call(null,vec__6427,0,null);var idx = cljs.core.nth.call(null,vec__6427,1,null);var cell = vec__6427;if(cljs.core.truth_(cell))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["card",cljs.core.name.call(null,color)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),cljs.core.get_in.call(null,triple_triad.cards.cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,new cljs.core.Keyword(null,"file","file",1017047278)], null))], null)], null)], null);
} else
{if(cljs.core.truth_(new cljs.core.Keyword(null,"picked","picked",4320394226).cljs$core$IFn$_invoke$arity$1(self__.app)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.neutral","div.card.neutral",1549592216),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (p1__6416_SHARP_){return triple_triad.board.update_grid_BANG_.call(null,self__.app,p1__6416_SHARP_,self__.row,self__.col);
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
triple_triad.board.t6424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6426){var self__ = this;
var _6426__$1 = this;return self__.meta6425;
});
triple_triad.board.t6424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6426,meta6425__$1){var self__ = this;
var _6426__$1 = this;return (new triple_triad.board.t6424(self__.row,self__.col,self__.map__6423,self__.p__6417,self__.owner,self__.app,self__.grid_cell,meta6425__$1));
});
triple_triad.board.__GT_t6424 = (function __GT_t6424(row__$1,col__$1,map__6423__$2,p__6417__$1,owner__$1,app__$1,grid_cell__$1,meta6425){return (new triple_triad.board.t6424(row__$1,col__$1,map__6423__$2,p__6417__$1,owner__$1,app__$1,grid_cell__$1,meta6425));
});
}
return (new triple_triad.board.t6424(row,col,map__6423__$1,p__6417,owner,app,grid_cell,null));
});
triple_triad.board.grid_row = (function grid_row(app,owner,p__6428){var map__6437 = p__6428;var map__6437__$1 = ((cljs.core.seq_QMARK_.call(null,map__6437))?cljs.core.apply.call(null,cljs.core.hash_map,map__6437):map__6437);var row = cljs.core.get.call(null,map__6437__$1,new cljs.core.Keyword(null,"row","row",1014017356));if(typeof triple_triad.board.t6438 !== 'undefined')
{} else
{
/**
* @constructor
*/
triple_triad.board.t6438 = (function (row,map__6437,p__6428,owner,app,grid_row,meta6439){
this.row = row;
this.map__6437 = map__6437;
this.p__6428 = p__6428;
this.owner = owner;
this.app = app;
this.grid_row = grid_row;
this.meta6439 = meta6439;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
triple_triad.board.t6438.cljs$lang$type = true;
triple_triad.board.t6438.cljs$lang$ctorStr = "triple-triad.board/t6438";
triple_triad.board.t6438.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"triple-triad.board/t6438");
});
triple_triad.board.t6438.prototype.om$core$IRender$ = true;
triple_triad.board.t6438.prototype.om$core$IRender$render$arity$1 = (function (this__5433__auto__){var self__ = this;
var this__5433__auto____$1 = this;return React.DOM.div(null,cljs.core.into_array.call(null,(function (){var iter__4158__auto__ = (function iter__6441(s__6442){return (new cljs.core.LazySeq(null,(function (){var s__6442__$1 = s__6442;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6442__$1);if(temp__4092__auto__)
{var s__6442__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6442__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__6442__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__6444 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__6443 = 0;while(true){
if((i__6443 < size__4157__auto__))
{var col = cljs.core._nth.call(null,c__4156__auto__,i__6443);cljs.core.chunk_append.call(null,b__6444,sablono.interpreter.interpret.call(null,om.core.build.call(null,triple_triad.board.grid_cell,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",1014017356),self__.row,new cljs.core.Keyword(null,"col","col",1014002930),col], null)], null))));
{
var G__6445 = (i__6443 + 1);
i__6443 = G__6445;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6444),iter__6441.call(null,cljs.core.chunk_rest.call(null,s__6442__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6444),null);
}
} else
{var col = cljs.core.first.call(null,s__6442__$2);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,om.core.build.call(null,triple_triad.board.grid_cell,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",1014017356),self__.row,new cljs.core.Keyword(null,"col","col",1014002930),col], null)], null))),iter__6441.call(null,cljs.core.rest.call(null,s__6442__$2)));
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
triple_triad.board.t6438.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6440){var self__ = this;
var _6440__$1 = this;return self__.meta6439;
});
triple_triad.board.t6438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6440,meta6439__$1){var self__ = this;
var _6440__$1 = this;return (new triple_triad.board.t6438(self__.row,self__.map__6437,self__.p__6428,self__.owner,self__.app,self__.grid_row,meta6439__$1));
});
triple_triad.board.__GT_t6438 = (function __GT_t6438(row__$1,map__6437__$2,p__6428__$1,owner__$1,app__$1,grid_row__$1,meta6439){return (new triple_triad.board.t6438(row__$1,map__6437__$2,p__6428__$1,owner__$1,app__$1,grid_row__$1,meta6439));
});
}
return (new triple_triad.board.t6438(row,map__6437__$1,p__6428,owner,app,grid_row,null));
});
triple_triad.board.card_grid = (function card_grid(app){if(typeof triple_triad.board.t6453 !== 'undefined')
{} else
{
/**
* @constructor
*/
triple_triad.board.t6453 = (function (app,card_grid,meta6454){
this.app = app;
this.card_grid = card_grid;
this.meta6454 = meta6454;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
triple_triad.board.t6453.cljs$lang$type = true;
triple_triad.board.t6453.cljs$lang$ctorStr = "triple-triad.board/t6453";
triple_triad.board.t6453.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"triple-triad.board/t6453");
});
triple_triad.board.t6453.prototype.om$core$IRender$ = true;
triple_triad.board.t6453.prototype.om$core$IRender$render$arity$1 = (function (this__5433__auto__){var self__ = this;
var this__5433__auto____$1 = this;return React.DOM.div(null,cljs.core.into_array.call(null,(function (){var iter__4158__auto__ = (function iter__6456(s__6457){return (new cljs.core.LazySeq(null,(function (){var s__6457__$1 = s__6457;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6457__$1);if(temp__4092__auto__)
{var s__6457__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6457__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__6457__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__6459 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__6458 = 0;while(true){
if((i__6458 < size__4157__auto__))
{var row = cljs.core._nth.call(null,c__4156__auto__,i__6458);cljs.core.chunk_append.call(null,b__6459,sablono.interpreter.interpret.call(null,om.core.build.call(null,triple_triad.board.grid_row,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row","row",1014017356),row], null)], null))));
{
var G__6460 = (i__6458 + 1);
i__6458 = G__6460;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6459),iter__6456.call(null,cljs.core.chunk_rest.call(null,s__6457__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6459),null);
}
} else
{var row = cljs.core.first.call(null,s__6457__$2);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,om.core.build.call(null,triple_triad.board.grid_row,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row","row",1014017356),row], null)], null))),iter__6456.call(null,cljs.core.rest.call(null,s__6457__$2)));
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
triple_triad.board.t6453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6455){var self__ = this;
var _6455__$1 = this;return self__.meta6454;
});
triple_triad.board.t6453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6455,meta6454__$1){var self__ = this;
var _6455__$1 = this;return (new triple_triad.board.t6453(self__.app,self__.card_grid,meta6454__$1));
});
triple_triad.board.__GT_t6453 = (function __GT_t6453(app__$1,card_grid__$1,meta6454){return (new triple_triad.board.t6453(app__$1,card_grid__$1,meta6454));
});
}
return (new triple_triad.board.t6453(app,card_grid,null));
});
triple_triad.board.score_board = (function score_board(app){if(typeof triple_triad.board.t6466 !== 'undefined')
{} else
{
/**
* @constructor
*/
triple_triad.board.t6466 = (function (app,score_board,meta6467){
this.app = app;
this.score_board = score_board;
this.meta6467 = meta6467;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
triple_triad.board.t6466.cljs$lang$type = true;
triple_triad.board.t6466.cljs$lang$ctorStr = "triple-triad.board/t6466";
triple_triad.board.t6466.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"triple-triad.board/t6466");
});
triple_triad.board.t6466.prototype.om$core$IRender$ = true;
triple_triad.board.t6466.prototype.om$core$IRender$render$arity$1 = (function (this__5433__auto__){var self__ = this;
var this__5433__auto____$1 = this;return React.DOM.div(null,(function (){var attrs6469 = [cljs.core.str("red "),cljs.core.str(cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",1123168772),new cljs.core.Keyword(null,"red","red",1014017027)], null)))].join('');if(cljs.core.map_QMARK_.call(null,attrs6469))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red-text"], null)], null),attrs6469)),null);
} else
{return React.DOM.span({"className": "red-text"},sablono.interpreter.interpret.call(null,attrs6469));
}
})(),(function (){var attrs6470 = [cljs.core.str("blue "),cljs.core.str(cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",1123168772),new cljs.core.Keyword(null,"blue","blue",1016931276)], null)))].join('');if(cljs.core.map_QMARK_.call(null,attrs6470))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["blue-text"], null)], null),attrs6470)),null);
} else
{return React.DOM.span({"className": "blue-text"},sablono.interpreter.interpret.call(null,attrs6470));
}
})());
});
triple_triad.board.t6466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6468){var self__ = this;
var _6468__$1 = this;return self__.meta6467;
});
triple_triad.board.t6466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6468,meta6467__$1){var self__ = this;
var _6468__$1 = this;return (new triple_triad.board.t6466(self__.app,self__.score_board,meta6467__$1));
});
triple_triad.board.__GT_t6466 = (function __GT_t6466(app__$1,score_board__$1,meta6467){return (new triple_triad.board.t6466(app__$1,score_board__$1,meta6467));
});
}
return (new triple_triad.board.t6466(app,score_board,null));
});
triple_triad.board.reset_state_BANG_ = (function reset_state_BANG_(app){var idxs = cljs.core.take.call(null,10,cljs.core.shuffle.call(null,cljs.core.range.call(null,cljs.core.count.call(null,triple_triad.cards.cards))));return om.core.transact_BANG_.call(null,app,(function (p1__6471_SHARP_){return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__6471_SHARP_,new cljs.core.Keyword(null,"winner","winner",4521128881),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hand","hand",1017099233),new cljs.core.Keyword(null,"red","red",1014017027)], null),cljs.core.take.call(null,5,idxs)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hand","hand",1017099233),new cljs.core.Keyword(null,"blue","blue",1016931276)], null),cljs.core.take.call(null,5,cljs.core.drop.call(null,5,idxs))),new cljs.core.Keyword(null,"grid","grid",1017085624),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null)], null));
}));
});
triple_triad.board.winner_header = (function winner_header(app){if(typeof triple_triad.board.t6475 !== 'undefined')
{} else
{
/**
* @constructor
*/
triple_triad.board.t6475 = (function (app,winner_header,meta6476){
this.app = app;
this.winner_header = winner_header;
this.meta6476 = meta6476;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
triple_triad.board.t6475.cljs$lang$type = true;
triple_triad.board.t6475.cljs$lang$ctorStr = "triple-triad.board/t6475";
triple_triad.board.t6475.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"triple-triad.board/t6475");
});
triple_triad.board.t6475.prototype.om$core$IRender$ = true;
triple_triad.board.t6475.prototype.om$core$IRender$render$arity$1 = (function (this__5433__auto__){var self__ = this;
var this__5433__auto____$1 = this;return React.DOM.div(null,React.DOM.span({"className": [cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"winner","winner",4521128881).cljs$core$IFn$_invoke$arity$1(self__.app))),cljs.core.str("-text")].join('')},sablono.interpreter.interpret.call(null,[cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"winner","winner",4521128881).cljs$core$IFn$_invoke$arity$1(self__.app))),cljs.core.str(" wins")].join(''))),React.DOM.button({"onClick": (function (){return triple_triad.board.reset_state_BANG_.call(null,self__.app);
})},"start over"));
});
triple_triad.board.t6475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6477){var self__ = this;
var _6477__$1 = this;return self__.meta6476;
});
triple_triad.board.t6475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6477,meta6476__$1){var self__ = this;
var _6477__$1 = this;return (new triple_triad.board.t6475(self__.app,self__.winner_header,meta6476__$1));
});
triple_triad.board.__GT_t6475 = (function __GT_t6475(app__$1,winner_header__$1,meta6476){return (new triple_triad.board.t6475(app__$1,winner_header__$1,meta6476));
});
}
return (new triple_triad.board.t6475(app,winner_header,null));
});
triple_triad.board.player_header = (function player_header(app){if(typeof triple_triad.board.t6481 !== 'undefined')
{} else
{
/**
* @constructor
*/
triple_triad.board.t6481 = (function (app,player_header,meta6482){
this.app = app;
this.player_header = player_header;
this.meta6482 = meta6482;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
triple_triad.board.t6481.cljs$lang$type = true;
triple_triad.board.t6481.cljs$lang$ctorStr = "triple-triad.board/t6481";
triple_triad.board.t6481.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"triple-triad.board/t6481");
});
triple_triad.board.t6481.prototype.om$core$IRender$ = true;
triple_triad.board.t6481.prototype.om$core$IRender$render$arity$1 = (function (this__5433__auto__){var self__ = this;
var this__5433__auto____$1 = this;return React.DOM.span({"className": [cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"player","player",4323118675).cljs$core$IFn$_invoke$arity$1(self__.app))),cljs.core.str("-text")].join('')},sablono.interpreter.interpret.call(null,[cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"player","player",4323118675).cljs$core$IFn$_invoke$arity$1(self__.app))),cljs.core.str("'s turn")].join('')));
});
triple_triad.board.t6481.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6483){var self__ = this;
var _6483__$1 = this;return self__.meta6482;
});
triple_triad.board.t6481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6483,meta6482__$1){var self__ = this;
var _6483__$1 = this;return (new triple_triad.board.t6481(self__.app,self__.player_header,meta6482__$1));
});
triple_triad.board.__GT_t6481 = (function __GT_t6481(app__$1,player_header__$1,meta6482){return (new triple_triad.board.t6481(app__$1,player_header__$1,meta6482));
});
}
return (new triple_triad.board.t6481(app,player_header,null));
});
triple_triad.board.board = (function board(app){if(typeof triple_triad.board.t6489 !== 'undefined')
{} else
{
/**
* @constructor
*/
triple_triad.board.t6489 = (function (app,board,meta6490){
this.app = app;
this.board = board;
this.meta6490 = meta6490;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
triple_triad.board.t6489.cljs$lang$type = true;
triple_triad.board.t6489.cljs$lang$ctorStr = "triple-triad.board/t6489";
triple_triad.board.t6489.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"triple-triad.board/t6489");
});
triple_triad.board.t6489.prototype.om$core$IRender$ = true;
triple_triad.board.t6489.prototype.om$core$IRender$render$arity$1 = (function (this__5433__auto__){var self__ = this;
var this__5433__auto____$1 = this;return React.DOM.div(null,React.DOM.h1(null,"Triple Triad Board"),sablono.interpreter.interpret.call(null,om.core.build.call(null,triple_triad.board.score_board,self__.app)),(cljs.core.truth_(new cljs.core.Keyword(null,"winner","winner",4521128881).cljs$core$IFn$_invoke$arity$1(self__.app))?sablono.interpreter.interpret.call(null,om.core.build.call(null,triple_triad.board.winner_header,self__.app)):sablono.interpreter.interpret.call(null,om.core.build.call(null,triple_triad.board.player_header,self__.app))),sablono.interpreter.interpret.call(null,om.core.build.call(null,triple_triad.board.card_hand,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),new cljs.core.Keyword(null,"red","red",1014017027)], null)], null))),sablono.interpreter.interpret.call(null,om.core.build.call(null,triple_triad.board.card_grid,self__.app)),sablono.interpreter.interpret.call(null,om.core.build.call(null,triple_triad.board.card_hand,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),new cljs.core.Keyword(null,"blue","blue",1016931276)], null)], null))));
});
triple_triad.board.t6489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6491){var self__ = this;
var _6491__$1 = this;return self__.meta6490;
});
triple_triad.board.t6489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6491,meta6490__$1){var self__ = this;
var _6491__$1 = this;return (new triple_triad.board.t6489(self__.app,self__.board,meta6490__$1));
});
triple_triad.board.__GT_t6489 = (function __GT_t6489(app__$1,board__$1,meta6490){return (new triple_triad.board.t6489(app__$1,board__$1,meta6490));
});
}
return (new triple_triad.board.t6489(app,board,null));
});
om.core.root.call(null,triple_triad.board.board,triple_triad.board.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=board.js.map