// Compiled by ClojureScript 0.0-2173
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__14558__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__14557 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__14557,0,null);var body = cljs.core.nthnext.call(null,vec__14557,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__14558 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14558__delegate.call(this,args);};
G__14558.cljs$lang$maxFixedArity = 0;
G__14558.cljs$lang$applyTo = (function (arglist__14559){
var args = cljs.core.seq(arglist__14559);
return G__14558__delegate(args);
});
G__14558.cljs$core$IFn$_invoke$arity$variadic = G__14558__delegate;
return G__14558;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4158__auto__ = (function iter__14564(s__14565){return (new cljs.core.LazySeq(null,(function (){var s__14565__$1 = s__14565;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14565__$1);if(temp__4092__auto__)
{var s__14565__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14565__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__14565__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__14567 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__14566 = 0;while(true){
if((i__14566 < size__4157__auto__))
{var args = cljs.core._nth.call(null,c__4156__auto__,i__14566);cljs.core.chunk_append.call(null,b__14567,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__14568 = (i__14566 + 1);
i__14566 = G__14568;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14567),iter__14564.call(null,cljs.core.chunk_rest.call(null,s__14565__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14567),null);
}
} else
{var args = cljs.core.first.call(null,s__14565__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__14564.call(null,cljs.core.rest.call(null,s__14565__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4158__auto__ = (function iter__14573(s__14574){return (new cljs.core.LazySeq(null,(function (){var s__14574__$1 = s__14574;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14574__$1);if(temp__4092__auto__)
{var s__14574__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14574__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__14574__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__14576 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__14575 = 0;while(true){
if((i__14575 < size__4157__auto__))
{var style = cljs.core._nth.call(null,c__4156__auto__,i__14575);cljs.core.chunk_append.call(null,b__14576,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__14577 = (i__14575 + 1);
i__14575 = G__14577;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14576),iter__14573.call(null,cljs.core.chunk_rest.call(null,s__14574__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14576),null);
}
} else
{var style = cljs.core.first.call(null,s__14574__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__14573.call(null,cljs.core.rest.call(null,s__14574__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__14578){
var styles = cljs.core.seq(arglist__14578);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to14579 = (function() { 
var link_to14579__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to14579 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to14579__delegate.call(this,url,content);};
link_to14579.cljs$lang$maxFixedArity = 1;
link_to14579.cljs$lang$applyTo = (function (arglist__14580){
var url = cljs.core.first(arglist__14580);
var content = cljs.core.rest(arglist__14580);
return link_to14579__delegate(url,content);
});
link_to14579.cljs$core$IFn$_invoke$arity$variadic = link_to14579__delegate;
return link_to14579;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to14579);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to14581 = (function() { 
var mail_to14581__delegate = function (e_mail,p__14582){var vec__14584 = p__14582;var content = cljs.core.nth.call(null,vec__14584,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3441__auto__ = content;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to14581 = function (e_mail,var_args){
var p__14582 = null;if (arguments.length > 1) {
  p__14582 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to14581__delegate.call(this,e_mail,p__14582);};
mail_to14581.cljs$lang$maxFixedArity = 1;
mail_to14581.cljs$lang$applyTo = (function (arglist__14585){
var e_mail = cljs.core.first(arglist__14585);
var p__14582 = cljs.core.rest(arglist__14585);
return mail_to14581__delegate(e_mail,p__14582);
});
mail_to14581.cljs$core$IFn$_invoke$arity$variadic = mail_to14581__delegate;
return mail_to14581;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to14581);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list14586 = (function unordered_list14586(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4158__auto__ = (function iter__14591(s__14592){return (new cljs.core.LazySeq(null,(function (){var s__14592__$1 = s__14592;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14592__$1);if(temp__4092__auto__)
{var s__14592__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14592__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__14592__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__14594 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__14593 = 0;while(true){
if((i__14593 < size__4157__auto__))
{var x = cljs.core._nth.call(null,c__4156__auto__,i__14593);cljs.core.chunk_append.call(null,b__14594,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__14595 = (i__14593 + 1);
i__14593 = G__14595;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14594),iter__14591.call(null,cljs.core.chunk_rest.call(null,s__14592__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14594),null);
}
} else
{var x = cljs.core.first.call(null,s__14592__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__14591.call(null,cljs.core.rest.call(null,s__14592__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list14586);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list14596 = (function ordered_list14596(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4158__auto__ = (function iter__14601(s__14602){return (new cljs.core.LazySeq(null,(function (){var s__14602__$1 = s__14602;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14602__$1);if(temp__4092__auto__)
{var s__14602__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14602__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__14602__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__14604 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__14603 = 0;while(true){
if((i__14603 < size__4157__auto__))
{var x = cljs.core._nth.call(null,c__4156__auto__,i__14603);cljs.core.chunk_append.call(null,b__14604,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__14605 = (i__14603 + 1);
i__14603 = G__14605;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14604),iter__14601.call(null,cljs.core.chunk_rest.call(null,s__14602__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14604),null);
}
} else
{var x = cljs.core.first.call(null,s__14602__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__14601.call(null,cljs.core.rest.call(null,s__14602__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list14596);
/**
* Create an image element.
*/
sablono.core.image14606 = (function() {
var image14606 = null;
var image14606__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image14606__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image14606 = function(src,alt){
switch(arguments.length){
case 1:
return image14606__1.call(this,src);
case 2:
return image14606__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image14606.cljs$core$IFn$_invoke$arity$1 = image14606__1;
image14606.cljs$core$IFn$_invoke$arity$2 = image14606__2;
return image14606;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image14606);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__14607_SHARP_,p2__14608_SHARP_){return [cljs.core.str(p1__14607_SHARP_),cljs.core.str("["),cljs.core.str(p2__14608_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__14609_SHARP_,p2__14610_SHARP_){return [cljs.core.str(p1__14609_SHARP_),cljs.core.str("-"),cljs.core.str(p2__14610_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field14611 = (function() {
var color_field14611 = null;
var color_field14611__1 = (function (name__9150__auto__){return color_field14611.call(null,name__9150__auto__,null);
});
var color_field14611__2 = (function (name__9150__auto__,value__9151__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1545688804,null))].join(''),name__9150__auto__,value__9151__auto__);
});
color_field14611 = function(name__9150__auto__,value__9151__auto__){
switch(arguments.length){
case 1:
return color_field14611__1.call(this,name__9150__auto__);
case 2:
return color_field14611__2.call(this,name__9150__auto__,value__9151__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field14611.cljs$core$IFn$_invoke$arity$1 = color_field14611__1;
color_field14611.cljs$core$IFn$_invoke$arity$2 = color_field14611__2;
return color_field14611;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field14611);
/**
* Creates a date input field.
*/
sablono.core.date_field14612 = (function() {
var date_field14612 = null;
var date_field14612__1 = (function (name__9150__auto__){return date_field14612.call(null,name__9150__auto__,null);
});
var date_field14612__2 = (function (name__9150__auto__,value__9151__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",-1637455513,null))].join(''),name__9150__auto__,value__9151__auto__);
});
date_field14612 = function(name__9150__auto__,value__9151__auto__){
switch(arguments.length){
case 1:
return date_field14612__1.call(this,name__9150__auto__);
case 2:
return date_field14612__2.call(this,name__9150__auto__,value__9151__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field14612.cljs$core$IFn$_invoke$arity$1 = date_field14612__1;
date_field14612.cljs$core$IFn$_invoke$arity$2 = date_field14612__2;
return date_field14612;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field14612);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field14613 = (function() {
var datetime_field14613 = null;
var datetime_field14613__1 = (function (name__9150__auto__){return datetime_field14613.call(null,name__9150__auto__,null);
});
var datetime_field14613__2 = (function (name__9150__auto__,value__9151__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))].join(''),name__9150__auto__,value__9151__auto__);
});
datetime_field14613 = function(name__9150__auto__,value__9151__auto__){
switch(arguments.length){
case 1:
return datetime_field14613__1.call(this,name__9150__auto__);
case 2:
return datetime_field14613__2.call(this,name__9150__auto__,value__9151__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field14613.cljs$core$IFn$_invoke$arity$1 = datetime_field14613__1;
datetime_field14613.cljs$core$IFn$_invoke$arity$2 = datetime_field14613__2;
return datetime_field14613;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field14613);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field14614 = (function() {
var datetime_local_field14614 = null;
var datetime_local_field14614__1 = (function (name__9150__auto__){return datetime_local_field14614.call(null,name__9150__auto__,null);
});
var datetime_local_field14614__2 = (function (name__9150__auto__,value__9151__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))].join(''),name__9150__auto__,value__9151__auto__);
});
datetime_local_field14614 = function(name__9150__auto__,value__9151__auto__){
switch(arguments.length){
case 1:
return datetime_local_field14614__1.call(this,name__9150__auto__);
case 2:
return datetime_local_field14614__2.call(this,name__9150__auto__,value__9151__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field14614.cljs$core$IFn$_invoke$arity$1 = datetime_local_field14614__1;
datetime_local_field14614.cljs$core$IFn$_invoke$arity$2 = datetime_local_field14614__2;
return datetime_local_field14614;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field14614);
/**
* Creates a email input field.
*/
sablono.core.email_field14615 = (function() {
var email_field14615 = null;
var email_field14615__1 = (function (name__9150__auto__){return email_field14615.call(null,name__9150__auto__,null);
});
var email_field14615__2 = (function (name__9150__auto__,value__9151__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1543912107,null))].join(''),name__9150__auto__,value__9151__auto__);
});
email_field14615 = function(name__9150__auto__,value__9151__auto__){
switch(arguments.length){
case 1:
return email_field14615__1.call(this,name__9150__auto__);
case 2:
return email_field14615__2.call(this,name__9150__auto__,value__9151__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field14615.cljs$core$IFn$_invoke$arity$1 = email_field14615__1;
email_field14615.cljs$core$IFn$_invoke$arity$2 = email_field14615__2;
return email_field14615;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field14615);
/**
* Creates a file input field.
*/
sablono.core.file_field14616 = (function() {
var file_field14616 = null;
var file_field14616__1 = (function (name__9150__auto__){return file_field14616.call(null,name__9150__auto__,null);
});
var file_field14616__2 = (function (name__9150__auto__,value__9151__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",-1637388491,null))].join(''),name__9150__auto__,value__9151__auto__);
});
file_field14616 = function(name__9150__auto__,value__9151__auto__){
switch(arguments.length){
case 1:
return file_field14616__1.call(this,name__9150__auto__);
case 2:
return file_field14616__2.call(this,name__9150__auto__,value__9151__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field14616.cljs$core$IFn$_invoke$arity$1 = file_field14616__1;
file_field14616.cljs$core$IFn$_invoke$arity$2 = file_field14616__2;
return file_field14616;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field14616);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field14617 = (function() {
var hidden_field14617 = null;
var hidden_field14617__1 = (function (name__9150__auto__){return hidden_field14617.call(null,name__9150__auto__,null);
});
var hidden_field14617__2 = (function (name__9150__auto__,value__9151__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))].join(''),name__9150__auto__,value__9151__auto__);
});
hidden_field14617 = function(name__9150__auto__,value__9151__auto__){
switch(arguments.length){
case 1:
return hidden_field14617__1.call(this,name__9150__auto__);
case 2:
return hidden_field14617__2.call(this,name__9150__auto__,value__9151__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field14617.cljs$core$IFn$_invoke$arity$1 = hidden_field14617__1;
hidden_field14617.cljs$core$IFn$_invoke$arity$2 = hidden_field14617__2;
return hidden_field14617;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field14617);
/**
* Creates a month input field.
*/
sablono.core.month_field14618 = (function() {
var month_field14618 = null;
var month_field14618__1 = (function (name__9150__auto__){return month_field14618.call(null,name__9150__auto__,null);
});
var month_field14618__2 = (function (name__9150__auto__,value__9151__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-1536451527,null))].join(''),name__9150__auto__,value__9151__auto__);
});
month_field14618 = function(name__9150__auto__,value__9151__auto__){
switch(arguments.length){
case 1:
return month_field14618__1.call(this,name__9150__auto__);
case 2:
return month_field14618__2.call(this,name__9150__auto__,value__9151__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field14618.cljs$core$IFn$_invoke$arity$1 = month_field14618__1;
month_field14618.cljs$core$IFn$_invoke$arity$2 = month_field14618__2;
return month_field14618;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field14618);
/**
* Creates a number input field.
*/
sablono.core.number_field14619 = (function() {
var number_field14619 = null;
var number_field14619__1 = (function (name__9150__auto__){return number_field14619.call(null,name__9150__auto__,null);
});
var number_field14619__2 = (function (name__9150__auto__,value__9151__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",1620071682,null))].join(''),name__9150__auto__,value__9151__auto__);
});
number_field14619 = function(name__9150__auto__,value__9151__auto__){
switch(arguments.length){
case 1:
return number_field14619__1.call(this,name__9150__auto__);
case 2:
return number_field14619__2.call(this,name__9150__auto__,value__9151__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field14619.cljs$core$IFn$_invoke$arity$1 = number_field14619__1;
number_field14619.cljs$core$IFn$_invoke$arity$2 = number_field14619__2;
return number_field14619;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field14619);
/**
* Creates a password input field.
*/
sablono.core.password_field14620 = (function() {
var password_field14620 = null;
var password_field14620__1 = (function (name__9150__auto__){return password_field14620.call(null,name__9150__auto__,null);
});
var password_field14620__2 = (function (name__9150__auto__,value__9151__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",-423545772,null))].join(''),name__9150__auto__,value__9151__auto__);
});
password_field14620 = function(name__9150__auto__,value__9151__auto__){
switch(arguments.length){
case 1:
return password_field14620__1.call(this,name__9150__auto__);
case 2:
return password_field14620__2.call(this,name__9150__auto__,value__9151__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field14620.cljs$core$IFn$_invoke$arity$1 = password_field14620__1;
password_field14620.cljs$core$IFn$_invoke$arity$2 = password_field14620__2;
return password_field14620;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field14620);
/**
* Creates a range input field.
*/
sablono.core.range_field14621 = (function() {
var range_field14621 = null;
var range_field14621__1 = (function (name__9150__auto__){return range_field14621.call(null,name__9150__auto__,null);
});
var range_field14621__2 = (function (name__9150__auto__,value__9151__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1532251402,null))].join(''),name__9150__auto__,value__9151__auto__);
});
range_field14621 = function(name__9150__auto__,value__9151__auto__){
switch(arguments.length){
case 1:
return range_field14621__1.call(this,name__9150__auto__);
case 2:
return range_field14621__2.call(this,name__9150__auto__,value__9151__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field14621.cljs$core$IFn$_invoke$arity$1 = range_field14621__1;
range_field14621.cljs$core$IFn$_invoke$arity$2 = range_field14621__2;
return range_field14621;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field14621);
/**
* Creates a search input field.
*/
sablono.core.search_field14622 = (function() {
var search_field14622 = null;
var search_field14622__1 = (function (name__9150__auto__){return search_field14622.call(null,name__9150__auto__,null);
});
var search_field14622__2 = (function (name__9150__auto__,value__9151__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",1748098913,null))].join(''),name__9150__auto__,value__9151__auto__);
});
search_field14622 = function(name__9150__auto__,value__9151__auto__){
switch(arguments.length){
case 1:
return search_field14622__1.call(this,name__9150__auto__);
case 2:
return search_field14622__2.call(this,name__9150__auto__,value__9151__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field14622.cljs$core$IFn$_invoke$arity$1 = search_field14622__1;
search_field14622.cljs$core$IFn$_invoke$arity$2 = search_field14622__2;
return search_field14622;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field14622);
/**
* Creates a tel input field.
*/
sablono.core.tel_field14623 = (function() {
var tel_field14623 = null;
var tel_field14623__1 = (function (name__9150__auto__){return tel_field14623.call(null,name__9150__auto__,null);
});
var tel_field14623__2 = (function (name__9150__auto__,value__9151__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))].join(''),name__9150__auto__,value__9151__auto__);
});
tel_field14623 = function(name__9150__auto__,value__9151__auto__){
switch(arguments.length){
case 1:
return tel_field14623__1.call(this,name__9150__auto__);
case 2:
return tel_field14623__2.call(this,name__9150__auto__,value__9151__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field14623.cljs$core$IFn$_invoke$arity$1 = tel_field14623__1;
tel_field14623.cljs$core$IFn$_invoke$arity$2 = tel_field14623__2;
return tel_field14623;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field14623);
/**
* Creates a text input field.
*/
sablono.core.text_field14624 = (function() {
var text_field14624 = null;
var text_field14624__1 = (function (name__9150__auto__){return text_field14624.call(null,name__9150__auto__,null);
});
var text_field14624__2 = (function (name__9150__auto__,value__9151__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-1636974874,null))].join(''),name__9150__auto__,value__9151__auto__);
});
text_field14624 = function(name__9150__auto__,value__9151__auto__){
switch(arguments.length){
case 1:
return text_field14624__1.call(this,name__9150__auto__);
case 2:
return text_field14624__2.call(this,name__9150__auto__,value__9151__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field14624.cljs$core$IFn$_invoke$arity$1 = text_field14624__1;
text_field14624.cljs$core$IFn$_invoke$arity$2 = text_field14624__2;
return text_field14624;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field14624);
/**
* Creates a time input field.
*/
sablono.core.time_field14625 = (function() {
var time_field14625 = null;
var time_field14625__1 = (function (name__9150__auto__){return time_field14625.call(null,name__9150__auto__,null);
});
var time_field14625__2 = (function (name__9150__auto__,value__9151__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1636971386,null))].join(''),name__9150__auto__,value__9151__auto__);
});
time_field14625 = function(name__9150__auto__,value__9151__auto__){
switch(arguments.length){
case 1:
return time_field14625__1.call(this,name__9150__auto__);
case 2:
return time_field14625__2.call(this,name__9150__auto__,value__9151__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field14625.cljs$core$IFn$_invoke$arity$1 = time_field14625__1;
time_field14625.cljs$core$IFn$_invoke$arity$2 = time_field14625__2;
return time_field14625;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field14625);
/**
* Creates a url input field.
*/
sablono.core.url_field14626 = (function() {
var url_field14626 = null;
var url_field14626__1 = (function (name__9150__auto__){return url_field14626.call(null,name__9150__auto__,null);
});
var url_field14626__2 = (function (name__9150__auto__,value__9151__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",-1640415448,null))].join(''),name__9150__auto__,value__9151__auto__);
});
url_field14626 = function(name__9150__auto__,value__9151__auto__){
switch(arguments.length){
case 1:
return url_field14626__1.call(this,name__9150__auto__);
case 2:
return url_field14626__2.call(this,name__9150__auto__,value__9151__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field14626.cljs$core$IFn$_invoke$arity$1 = url_field14626__1;
url_field14626.cljs$core$IFn$_invoke$arity$2 = url_field14626__2;
return url_field14626;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field14626);
/**
* Creates a week input field.
*/
sablono.core.week_field14627 = (function() {
var week_field14627 = null;
var week_field14627__1 = (function (name__9150__auto__){return week_field14627.call(null,name__9150__auto__,null);
});
var week_field14627__2 = (function (name__9150__auto__,value__9151__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",-1636886099,null))].join(''),name__9150__auto__,value__9151__auto__);
});
week_field14627 = function(name__9150__auto__,value__9151__auto__){
switch(arguments.length){
case 1:
return week_field14627__1.call(this,name__9150__auto__);
case 2:
return week_field14627__2.call(this,name__9150__auto__,value__9151__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field14627.cljs$core$IFn$_invoke$arity$1 = week_field14627__1;
week_field14627.cljs$core$IFn$_invoke$arity$2 = week_field14627__2;
return week_field14627;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field14627);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box14628 = (function() {
var check_box14628 = null;
var check_box14628__1 = (function (name){return check_box14628.call(null,name,null);
});
var check_box14628__2 = (function (name,checked_QMARK_){return check_box14628.call(null,name,checked_QMARK_,"true");
});
var check_box14628__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box14628 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box14628__1.call(this,name);
case 2:
return check_box14628__2.call(this,name,checked_QMARK_);
case 3:
return check_box14628__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box14628.cljs$core$IFn$_invoke$arity$1 = check_box14628__1;
check_box14628.cljs$core$IFn$_invoke$arity$2 = check_box14628__2;
check_box14628.cljs$core$IFn$_invoke$arity$3 = check_box14628__3;
return check_box14628;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box14628);
/**
* Creates a radio button.
*/
sablono.core.radio_button14629 = (function() {
var radio_button14629 = null;
var radio_button14629__1 = (function (group){return radio_button14629.call(null,group,null);
});
var radio_button14629__2 = (function (group,checked_QMARK_){return radio_button14629.call(null,group,checked_QMARK_,"true");
});
var radio_button14629__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button14629 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button14629__1.call(this,group);
case 2:
return radio_button14629__2.call(this,group,checked_QMARK_);
case 3:
return radio_button14629__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button14629.cljs$core$IFn$_invoke$arity$1 = radio_button14629__1;
radio_button14629.cljs$core$IFn$_invoke$arity$2 = radio_button14629__2;
radio_button14629.cljs$core$IFn$_invoke$arity$3 = radio_button14629__3;
return radio_button14629;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button14629);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options14630 = (function() {
var select_options14630 = null;
var select_options14630__1 = (function (coll){return select_options14630.call(null,coll,null);
});
var select_options14630__2 = (function (coll,selected){var iter__4158__auto__ = (function iter__14639(s__14640){return (new cljs.core.LazySeq(null,(function (){var s__14640__$1 = s__14640;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14640__$1);if(temp__4092__auto__)
{var s__14640__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14640__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__14640__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__14642 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__14641 = 0;while(true){
if((i__14641 < size__4157__auto__))
{var x = cljs.core._nth.call(null,c__4156__auto__,i__14641);cljs.core.chunk_append.call(null,b__14642,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__14645 = x;var text = cljs.core.nth.call(null,vec__14645,0,null);var val = cljs.core.nth.call(null,vec__14645,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__14645,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options14630.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__14647 = (i__14641 + 1);
i__14641 = G__14647;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14642),iter__14639.call(null,cljs.core.chunk_rest.call(null,s__14640__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14642),null);
}
} else
{var x = cljs.core.first.call(null,s__14640__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__14646 = x;var text = cljs.core.nth.call(null,vec__14646,0,null);var val = cljs.core.nth.call(null,vec__14646,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__14646,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options14630.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__14639.call(null,cljs.core.rest.call(null,s__14640__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,coll);
});
select_options14630 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options14630__1.call(this,coll);
case 2:
return select_options14630__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options14630.cljs$core$IFn$_invoke$arity$1 = select_options14630__1;
select_options14630.cljs$core$IFn$_invoke$arity$2 = select_options14630__2;
return select_options14630;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options14630);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down14648 = (function() {
var drop_down14648 = null;
var drop_down14648__2 = (function (name,options){return drop_down14648.call(null,name,options,null);
});
var drop_down14648__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down14648 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down14648__2.call(this,name,options);
case 3:
return drop_down14648__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down14648.cljs$core$IFn$_invoke$arity$2 = drop_down14648__2;
drop_down14648.cljs$core$IFn$_invoke$arity$3 = drop_down14648__3;
return drop_down14648;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down14648);
/**
* Creates a text area element.
*/
sablono.core.text_area14649 = (function() {
var text_area14649 = null;
var text_area14649__1 = (function (name){return text_area14649.call(null,name,null);
});
var text_area14649__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area14649 = function(name,value){
switch(arguments.length){
case 1:
return text_area14649__1.call(this,name);
case 2:
return text_area14649__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area14649.cljs$core$IFn$_invoke$arity$1 = text_area14649__1;
text_area14649.cljs$core$IFn$_invoke$arity$2 = text_area14649__2;
return text_area14649;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area14649);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label14650 = (function label14650(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label14650);
/**
* Creates a submit button.
*/
sablono.core.submit_button14651 = (function submit_button14651(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button14651);
/**
* Creates a form reset button.
*/
sablono.core.reset_button14652 = (function reset_button14652(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button14652);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to14653 = (function() { 
var form_to14653__delegate = function (p__14654,body){var vec__14656 = p__14654;var method = cljs.core.nth.call(null,vec__14656,0,null);var action = cljs.core.nth.call(null,vec__14656,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to14653 = function (p__14654,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to14653__delegate.call(this,p__14654,body);};
form_to14653.cljs$lang$maxFixedArity = 1;
form_to14653.cljs$lang$applyTo = (function (arglist__14657){
var p__14654 = cljs.core.first(arglist__14657);
var body = cljs.core.rest(arglist__14657);
return form_to14653__delegate(p__14654,body);
});
form_to14653.cljs$core$IFn$_invoke$arity$variadic = form_to14653__delegate;
return form_to14653;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to14653);

//# sourceMappingURL=core.js.map