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
var G__7741__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__7740 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__7740,0,null);var body = cljs.core.nthnext.call(null,vec__7740,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__7741 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__7741__delegate.call(this,args);};
G__7741.cljs$lang$maxFixedArity = 0;
G__7741.cljs$lang$applyTo = (function (arglist__7742){
var args = cljs.core.seq(arglist__7742);
return G__7741__delegate(args);
});
G__7741.cljs$core$IFn$_invoke$arity$variadic = G__7741__delegate;
return G__7741;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4158__auto__ = (function iter__7747(s__7748){return (new cljs.core.LazySeq(null,(function (){var s__7748__$1 = s__7748;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7748__$1);if(temp__4092__auto__)
{var s__7748__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7748__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__7748__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__7750 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__7749 = 0;while(true){
if((i__7749 < size__4157__auto__))
{var args = cljs.core._nth.call(null,c__4156__auto__,i__7749);cljs.core.chunk_append.call(null,b__7750,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__7751 = (i__7749 + 1);
i__7749 = G__7751;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7750),iter__7747.call(null,cljs.core.chunk_rest.call(null,s__7748__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7750),null);
}
} else
{var args = cljs.core.first.call(null,s__7748__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__7747.call(null,cljs.core.rest.call(null,s__7748__$2)));
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
var include_css__delegate = function (styles){var iter__4158__auto__ = (function iter__7756(s__7757){return (new cljs.core.LazySeq(null,(function (){var s__7757__$1 = s__7757;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7757__$1);if(temp__4092__auto__)
{var s__7757__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7757__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__7757__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__7759 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__7758 = 0;while(true){
if((i__7758 < size__4157__auto__))
{var style = cljs.core._nth.call(null,c__4156__auto__,i__7758);cljs.core.chunk_append.call(null,b__7759,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__7760 = (i__7758 + 1);
i__7758 = G__7760;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7759),iter__7756.call(null,cljs.core.chunk_rest.call(null,s__7757__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7759),null);
}
} else
{var style = cljs.core.first.call(null,s__7757__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__7756.call(null,cljs.core.rest.call(null,s__7757__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__7761){
var styles = cljs.core.seq(arglist__7761);
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
sablono.core.link_to7762 = (function() { 
var link_to7762__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to7762 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to7762__delegate.call(this,url,content);};
link_to7762.cljs$lang$maxFixedArity = 1;
link_to7762.cljs$lang$applyTo = (function (arglist__7763){
var url = cljs.core.first(arglist__7763);
var content = cljs.core.rest(arglist__7763);
return link_to7762__delegate(url,content);
});
link_to7762.cljs$core$IFn$_invoke$arity$variadic = link_to7762__delegate;
return link_to7762;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to7762);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to7764 = (function() { 
var mail_to7764__delegate = function (e_mail,p__7765){var vec__7767 = p__7765;var content = cljs.core.nth.call(null,vec__7767,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3441__auto__ = content;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to7764 = function (e_mail,var_args){
var p__7765 = null;if (arguments.length > 1) {
  p__7765 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to7764__delegate.call(this,e_mail,p__7765);};
mail_to7764.cljs$lang$maxFixedArity = 1;
mail_to7764.cljs$lang$applyTo = (function (arglist__7768){
var e_mail = cljs.core.first(arglist__7768);
var p__7765 = cljs.core.rest(arglist__7768);
return mail_to7764__delegate(e_mail,p__7765);
});
mail_to7764.cljs$core$IFn$_invoke$arity$variadic = mail_to7764__delegate;
return mail_to7764;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to7764);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list7769 = (function unordered_list7769(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4158__auto__ = (function iter__7774(s__7775){return (new cljs.core.LazySeq(null,(function (){var s__7775__$1 = s__7775;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7775__$1);if(temp__4092__auto__)
{var s__7775__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7775__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__7775__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__7777 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__7776 = 0;while(true){
if((i__7776 < size__4157__auto__))
{var x = cljs.core._nth.call(null,c__4156__auto__,i__7776);cljs.core.chunk_append.call(null,b__7777,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__7778 = (i__7776 + 1);
i__7776 = G__7778;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7777),iter__7774.call(null,cljs.core.chunk_rest.call(null,s__7775__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7777),null);
}
} else
{var x = cljs.core.first.call(null,s__7775__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__7774.call(null,cljs.core.rest.call(null,s__7775__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list7769);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list7779 = (function ordered_list7779(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4158__auto__ = (function iter__7784(s__7785){return (new cljs.core.LazySeq(null,(function (){var s__7785__$1 = s__7785;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7785__$1);if(temp__4092__auto__)
{var s__7785__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7785__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__7785__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__7787 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__7786 = 0;while(true){
if((i__7786 < size__4157__auto__))
{var x = cljs.core._nth.call(null,c__4156__auto__,i__7786);cljs.core.chunk_append.call(null,b__7787,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__7788 = (i__7786 + 1);
i__7786 = G__7788;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7787),iter__7784.call(null,cljs.core.chunk_rest.call(null,s__7785__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7787),null);
}
} else
{var x = cljs.core.first.call(null,s__7785__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__7784.call(null,cljs.core.rest.call(null,s__7785__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list7779);
/**
* Create an image element.
*/
sablono.core.image7789 = (function() {
var image7789 = null;
var image7789__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image7789__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image7789 = function(src,alt){
switch(arguments.length){
case 1:
return image7789__1.call(this,src);
case 2:
return image7789__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image7789.cljs$core$IFn$_invoke$arity$1 = image7789__1;
image7789.cljs$core$IFn$_invoke$arity$2 = image7789__2;
return image7789;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image7789);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__7790_SHARP_,p2__7791_SHARP_){return [cljs.core.str(p1__7790_SHARP_),cljs.core.str("["),cljs.core.str(p2__7791_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__7792_SHARP_,p2__7793_SHARP_){return [cljs.core.str(p1__7792_SHARP_),cljs.core.str("-"),cljs.core.str(p2__7793_SHARP_)].join('');
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
sablono.core.color_field7794 = (function() {
var color_field7794 = null;
var color_field7794__1 = (function (name__5345__auto__){return color_field7794.call(null,name__5345__auto__,null);
});
var color_field7794__2 = (function (name__5345__auto__,value__5346__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1545688804,null))].join(''),name__5345__auto__,value__5346__auto__);
});
color_field7794 = function(name__5345__auto__,value__5346__auto__){
switch(arguments.length){
case 1:
return color_field7794__1.call(this,name__5345__auto__);
case 2:
return color_field7794__2.call(this,name__5345__auto__,value__5346__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field7794.cljs$core$IFn$_invoke$arity$1 = color_field7794__1;
color_field7794.cljs$core$IFn$_invoke$arity$2 = color_field7794__2;
return color_field7794;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field7794);
/**
* Creates a date input field.
*/
sablono.core.date_field7795 = (function() {
var date_field7795 = null;
var date_field7795__1 = (function (name__5345__auto__){return date_field7795.call(null,name__5345__auto__,null);
});
var date_field7795__2 = (function (name__5345__auto__,value__5346__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",-1637455513,null))].join(''),name__5345__auto__,value__5346__auto__);
});
date_field7795 = function(name__5345__auto__,value__5346__auto__){
switch(arguments.length){
case 1:
return date_field7795__1.call(this,name__5345__auto__);
case 2:
return date_field7795__2.call(this,name__5345__auto__,value__5346__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field7795.cljs$core$IFn$_invoke$arity$1 = date_field7795__1;
date_field7795.cljs$core$IFn$_invoke$arity$2 = date_field7795__2;
return date_field7795;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field7795);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field7796 = (function() {
var datetime_field7796 = null;
var datetime_field7796__1 = (function (name__5345__auto__){return datetime_field7796.call(null,name__5345__auto__,null);
});
var datetime_field7796__2 = (function (name__5345__auto__,value__5346__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))].join(''),name__5345__auto__,value__5346__auto__);
});
datetime_field7796 = function(name__5345__auto__,value__5346__auto__){
switch(arguments.length){
case 1:
return datetime_field7796__1.call(this,name__5345__auto__);
case 2:
return datetime_field7796__2.call(this,name__5345__auto__,value__5346__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field7796.cljs$core$IFn$_invoke$arity$1 = datetime_field7796__1;
datetime_field7796.cljs$core$IFn$_invoke$arity$2 = datetime_field7796__2;
return datetime_field7796;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field7796);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field7797 = (function() {
var datetime_local_field7797 = null;
var datetime_local_field7797__1 = (function (name__5345__auto__){return datetime_local_field7797.call(null,name__5345__auto__,null);
});
var datetime_local_field7797__2 = (function (name__5345__auto__,value__5346__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))].join(''),name__5345__auto__,value__5346__auto__);
});
datetime_local_field7797 = function(name__5345__auto__,value__5346__auto__){
switch(arguments.length){
case 1:
return datetime_local_field7797__1.call(this,name__5345__auto__);
case 2:
return datetime_local_field7797__2.call(this,name__5345__auto__,value__5346__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field7797.cljs$core$IFn$_invoke$arity$1 = datetime_local_field7797__1;
datetime_local_field7797.cljs$core$IFn$_invoke$arity$2 = datetime_local_field7797__2;
return datetime_local_field7797;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field7797);
/**
* Creates a email input field.
*/
sablono.core.email_field7798 = (function() {
var email_field7798 = null;
var email_field7798__1 = (function (name__5345__auto__){return email_field7798.call(null,name__5345__auto__,null);
});
var email_field7798__2 = (function (name__5345__auto__,value__5346__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1543912107,null))].join(''),name__5345__auto__,value__5346__auto__);
});
email_field7798 = function(name__5345__auto__,value__5346__auto__){
switch(arguments.length){
case 1:
return email_field7798__1.call(this,name__5345__auto__);
case 2:
return email_field7798__2.call(this,name__5345__auto__,value__5346__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field7798.cljs$core$IFn$_invoke$arity$1 = email_field7798__1;
email_field7798.cljs$core$IFn$_invoke$arity$2 = email_field7798__2;
return email_field7798;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field7798);
/**
* Creates a file input field.
*/
sablono.core.file_field7799 = (function() {
var file_field7799 = null;
var file_field7799__1 = (function (name__5345__auto__){return file_field7799.call(null,name__5345__auto__,null);
});
var file_field7799__2 = (function (name__5345__auto__,value__5346__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",-1637388491,null))].join(''),name__5345__auto__,value__5346__auto__);
});
file_field7799 = function(name__5345__auto__,value__5346__auto__){
switch(arguments.length){
case 1:
return file_field7799__1.call(this,name__5345__auto__);
case 2:
return file_field7799__2.call(this,name__5345__auto__,value__5346__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field7799.cljs$core$IFn$_invoke$arity$1 = file_field7799__1;
file_field7799.cljs$core$IFn$_invoke$arity$2 = file_field7799__2;
return file_field7799;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field7799);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field7800 = (function() {
var hidden_field7800 = null;
var hidden_field7800__1 = (function (name__5345__auto__){return hidden_field7800.call(null,name__5345__auto__,null);
});
var hidden_field7800__2 = (function (name__5345__auto__,value__5346__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))].join(''),name__5345__auto__,value__5346__auto__);
});
hidden_field7800 = function(name__5345__auto__,value__5346__auto__){
switch(arguments.length){
case 1:
return hidden_field7800__1.call(this,name__5345__auto__);
case 2:
return hidden_field7800__2.call(this,name__5345__auto__,value__5346__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field7800.cljs$core$IFn$_invoke$arity$1 = hidden_field7800__1;
hidden_field7800.cljs$core$IFn$_invoke$arity$2 = hidden_field7800__2;
return hidden_field7800;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field7800);
/**
* Creates a month input field.
*/
sablono.core.month_field7801 = (function() {
var month_field7801 = null;
var month_field7801__1 = (function (name__5345__auto__){return month_field7801.call(null,name__5345__auto__,null);
});
var month_field7801__2 = (function (name__5345__auto__,value__5346__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-1536451527,null))].join(''),name__5345__auto__,value__5346__auto__);
});
month_field7801 = function(name__5345__auto__,value__5346__auto__){
switch(arguments.length){
case 1:
return month_field7801__1.call(this,name__5345__auto__);
case 2:
return month_field7801__2.call(this,name__5345__auto__,value__5346__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field7801.cljs$core$IFn$_invoke$arity$1 = month_field7801__1;
month_field7801.cljs$core$IFn$_invoke$arity$2 = month_field7801__2;
return month_field7801;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field7801);
/**
* Creates a number input field.
*/
sablono.core.number_field7802 = (function() {
var number_field7802 = null;
var number_field7802__1 = (function (name__5345__auto__){return number_field7802.call(null,name__5345__auto__,null);
});
var number_field7802__2 = (function (name__5345__auto__,value__5346__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",1620071682,null))].join(''),name__5345__auto__,value__5346__auto__);
});
number_field7802 = function(name__5345__auto__,value__5346__auto__){
switch(arguments.length){
case 1:
return number_field7802__1.call(this,name__5345__auto__);
case 2:
return number_field7802__2.call(this,name__5345__auto__,value__5346__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field7802.cljs$core$IFn$_invoke$arity$1 = number_field7802__1;
number_field7802.cljs$core$IFn$_invoke$arity$2 = number_field7802__2;
return number_field7802;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field7802);
/**
* Creates a password input field.
*/
sablono.core.password_field7803 = (function() {
var password_field7803 = null;
var password_field7803__1 = (function (name__5345__auto__){return password_field7803.call(null,name__5345__auto__,null);
});
var password_field7803__2 = (function (name__5345__auto__,value__5346__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",-423545772,null))].join(''),name__5345__auto__,value__5346__auto__);
});
password_field7803 = function(name__5345__auto__,value__5346__auto__){
switch(arguments.length){
case 1:
return password_field7803__1.call(this,name__5345__auto__);
case 2:
return password_field7803__2.call(this,name__5345__auto__,value__5346__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field7803.cljs$core$IFn$_invoke$arity$1 = password_field7803__1;
password_field7803.cljs$core$IFn$_invoke$arity$2 = password_field7803__2;
return password_field7803;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field7803);
/**
* Creates a range input field.
*/
sablono.core.range_field7804 = (function() {
var range_field7804 = null;
var range_field7804__1 = (function (name__5345__auto__){return range_field7804.call(null,name__5345__auto__,null);
});
var range_field7804__2 = (function (name__5345__auto__,value__5346__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1532251402,null))].join(''),name__5345__auto__,value__5346__auto__);
});
range_field7804 = function(name__5345__auto__,value__5346__auto__){
switch(arguments.length){
case 1:
return range_field7804__1.call(this,name__5345__auto__);
case 2:
return range_field7804__2.call(this,name__5345__auto__,value__5346__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field7804.cljs$core$IFn$_invoke$arity$1 = range_field7804__1;
range_field7804.cljs$core$IFn$_invoke$arity$2 = range_field7804__2;
return range_field7804;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field7804);
/**
* Creates a search input field.
*/
sablono.core.search_field7805 = (function() {
var search_field7805 = null;
var search_field7805__1 = (function (name__5345__auto__){return search_field7805.call(null,name__5345__auto__,null);
});
var search_field7805__2 = (function (name__5345__auto__,value__5346__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",1748098913,null))].join(''),name__5345__auto__,value__5346__auto__);
});
search_field7805 = function(name__5345__auto__,value__5346__auto__){
switch(arguments.length){
case 1:
return search_field7805__1.call(this,name__5345__auto__);
case 2:
return search_field7805__2.call(this,name__5345__auto__,value__5346__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field7805.cljs$core$IFn$_invoke$arity$1 = search_field7805__1;
search_field7805.cljs$core$IFn$_invoke$arity$2 = search_field7805__2;
return search_field7805;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field7805);
/**
* Creates a tel input field.
*/
sablono.core.tel_field7806 = (function() {
var tel_field7806 = null;
var tel_field7806__1 = (function (name__5345__auto__){return tel_field7806.call(null,name__5345__auto__,null);
});
var tel_field7806__2 = (function (name__5345__auto__,value__5346__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))].join(''),name__5345__auto__,value__5346__auto__);
});
tel_field7806 = function(name__5345__auto__,value__5346__auto__){
switch(arguments.length){
case 1:
return tel_field7806__1.call(this,name__5345__auto__);
case 2:
return tel_field7806__2.call(this,name__5345__auto__,value__5346__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field7806.cljs$core$IFn$_invoke$arity$1 = tel_field7806__1;
tel_field7806.cljs$core$IFn$_invoke$arity$2 = tel_field7806__2;
return tel_field7806;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field7806);
/**
* Creates a text input field.
*/
sablono.core.text_field7807 = (function() {
var text_field7807 = null;
var text_field7807__1 = (function (name__5345__auto__){return text_field7807.call(null,name__5345__auto__,null);
});
var text_field7807__2 = (function (name__5345__auto__,value__5346__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-1636974874,null))].join(''),name__5345__auto__,value__5346__auto__);
});
text_field7807 = function(name__5345__auto__,value__5346__auto__){
switch(arguments.length){
case 1:
return text_field7807__1.call(this,name__5345__auto__);
case 2:
return text_field7807__2.call(this,name__5345__auto__,value__5346__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field7807.cljs$core$IFn$_invoke$arity$1 = text_field7807__1;
text_field7807.cljs$core$IFn$_invoke$arity$2 = text_field7807__2;
return text_field7807;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field7807);
/**
* Creates a time input field.
*/
sablono.core.time_field7808 = (function() {
var time_field7808 = null;
var time_field7808__1 = (function (name__5345__auto__){return time_field7808.call(null,name__5345__auto__,null);
});
var time_field7808__2 = (function (name__5345__auto__,value__5346__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1636971386,null))].join(''),name__5345__auto__,value__5346__auto__);
});
time_field7808 = function(name__5345__auto__,value__5346__auto__){
switch(arguments.length){
case 1:
return time_field7808__1.call(this,name__5345__auto__);
case 2:
return time_field7808__2.call(this,name__5345__auto__,value__5346__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field7808.cljs$core$IFn$_invoke$arity$1 = time_field7808__1;
time_field7808.cljs$core$IFn$_invoke$arity$2 = time_field7808__2;
return time_field7808;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field7808);
/**
* Creates a url input field.
*/
sablono.core.url_field7809 = (function() {
var url_field7809 = null;
var url_field7809__1 = (function (name__5345__auto__){return url_field7809.call(null,name__5345__auto__,null);
});
var url_field7809__2 = (function (name__5345__auto__,value__5346__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",-1640415448,null))].join(''),name__5345__auto__,value__5346__auto__);
});
url_field7809 = function(name__5345__auto__,value__5346__auto__){
switch(arguments.length){
case 1:
return url_field7809__1.call(this,name__5345__auto__);
case 2:
return url_field7809__2.call(this,name__5345__auto__,value__5346__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field7809.cljs$core$IFn$_invoke$arity$1 = url_field7809__1;
url_field7809.cljs$core$IFn$_invoke$arity$2 = url_field7809__2;
return url_field7809;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field7809);
/**
* Creates a week input field.
*/
sablono.core.week_field7810 = (function() {
var week_field7810 = null;
var week_field7810__1 = (function (name__5345__auto__){return week_field7810.call(null,name__5345__auto__,null);
});
var week_field7810__2 = (function (name__5345__auto__,value__5346__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",-1636886099,null))].join(''),name__5345__auto__,value__5346__auto__);
});
week_field7810 = function(name__5345__auto__,value__5346__auto__){
switch(arguments.length){
case 1:
return week_field7810__1.call(this,name__5345__auto__);
case 2:
return week_field7810__2.call(this,name__5345__auto__,value__5346__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field7810.cljs$core$IFn$_invoke$arity$1 = week_field7810__1;
week_field7810.cljs$core$IFn$_invoke$arity$2 = week_field7810__2;
return week_field7810;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field7810);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box7811 = (function() {
var check_box7811 = null;
var check_box7811__1 = (function (name){return check_box7811.call(null,name,null);
});
var check_box7811__2 = (function (name,checked_QMARK_){return check_box7811.call(null,name,checked_QMARK_,"true");
});
var check_box7811__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box7811 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box7811__1.call(this,name);
case 2:
return check_box7811__2.call(this,name,checked_QMARK_);
case 3:
return check_box7811__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box7811.cljs$core$IFn$_invoke$arity$1 = check_box7811__1;
check_box7811.cljs$core$IFn$_invoke$arity$2 = check_box7811__2;
check_box7811.cljs$core$IFn$_invoke$arity$3 = check_box7811__3;
return check_box7811;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box7811);
/**
* Creates a radio button.
*/
sablono.core.radio_button7812 = (function() {
var radio_button7812 = null;
var radio_button7812__1 = (function (group){return radio_button7812.call(null,group,null);
});
var radio_button7812__2 = (function (group,checked_QMARK_){return radio_button7812.call(null,group,checked_QMARK_,"true");
});
var radio_button7812__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button7812 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button7812__1.call(this,group);
case 2:
return radio_button7812__2.call(this,group,checked_QMARK_);
case 3:
return radio_button7812__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button7812.cljs$core$IFn$_invoke$arity$1 = radio_button7812__1;
radio_button7812.cljs$core$IFn$_invoke$arity$2 = radio_button7812__2;
radio_button7812.cljs$core$IFn$_invoke$arity$3 = radio_button7812__3;
return radio_button7812;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button7812);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options7813 = (function() {
var select_options7813 = null;
var select_options7813__1 = (function (coll){return select_options7813.call(null,coll,null);
});
var select_options7813__2 = (function (coll,selected){var iter__4158__auto__ = (function iter__7822(s__7823){return (new cljs.core.LazySeq(null,(function (){var s__7823__$1 = s__7823;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7823__$1);if(temp__4092__auto__)
{var s__7823__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7823__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__7823__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__7825 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__7824 = 0;while(true){
if((i__7824 < size__4157__auto__))
{var x = cljs.core._nth.call(null,c__4156__auto__,i__7824);cljs.core.chunk_append.call(null,b__7825,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__7828 = x;var text = cljs.core.nth.call(null,vec__7828,0,null);var val = cljs.core.nth.call(null,vec__7828,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__7828,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options7813.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__7830 = (i__7824 + 1);
i__7824 = G__7830;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7825),iter__7822.call(null,cljs.core.chunk_rest.call(null,s__7823__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7825),null);
}
} else
{var x = cljs.core.first.call(null,s__7823__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__7829 = x;var text = cljs.core.nth.call(null,vec__7829,0,null);var val = cljs.core.nth.call(null,vec__7829,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__7829,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options7813.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__7822.call(null,cljs.core.rest.call(null,s__7823__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,coll);
});
select_options7813 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options7813__1.call(this,coll);
case 2:
return select_options7813__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options7813.cljs$core$IFn$_invoke$arity$1 = select_options7813__1;
select_options7813.cljs$core$IFn$_invoke$arity$2 = select_options7813__2;
return select_options7813;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options7813);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down7831 = (function() {
var drop_down7831 = null;
var drop_down7831__2 = (function (name,options){return drop_down7831.call(null,name,options,null);
});
var drop_down7831__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down7831 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down7831__2.call(this,name,options);
case 3:
return drop_down7831__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down7831.cljs$core$IFn$_invoke$arity$2 = drop_down7831__2;
drop_down7831.cljs$core$IFn$_invoke$arity$3 = drop_down7831__3;
return drop_down7831;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down7831);
/**
* Creates a text area element.
*/
sablono.core.text_area7832 = (function() {
var text_area7832 = null;
var text_area7832__1 = (function (name){return text_area7832.call(null,name,null);
});
var text_area7832__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area7832 = function(name,value){
switch(arguments.length){
case 1:
return text_area7832__1.call(this,name);
case 2:
return text_area7832__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area7832.cljs$core$IFn$_invoke$arity$1 = text_area7832__1;
text_area7832.cljs$core$IFn$_invoke$arity$2 = text_area7832__2;
return text_area7832;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area7832);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label7833 = (function label7833(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label7833);
/**
* Creates a submit button.
*/
sablono.core.submit_button7834 = (function submit_button7834(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button7834);
/**
* Creates a form reset button.
*/
sablono.core.reset_button7835 = (function reset_button7835(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button7835);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to7836 = (function() { 
var form_to7836__delegate = function (p__7837,body){var vec__7839 = p__7837;var method = cljs.core.nth.call(null,vec__7839,0,null);var action = cljs.core.nth.call(null,vec__7839,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to7836 = function (p__7837,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to7836__delegate.call(this,p__7837,body);};
form_to7836.cljs$lang$maxFixedArity = 1;
form_to7836.cljs$lang$applyTo = (function (arglist__7840){
var p__7837 = cljs.core.first(arglist__7840);
var body = cljs.core.rest(arglist__7840);
return form_to7836__delegate(p__7837,body);
});
form_to7836.cljs$core$IFn$_invoke$arity$variadic = form_to7836__delegate;
return form_to7836;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to7836);

//# sourceMappingURL=core.js.map