// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11902 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11902 = (function (f,fn_handler,meta11903){
this.f = f;
this.fn_handler = fn_handler;
this.meta11903 = meta11903;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11902.cljs$lang$type = true;
cljs.core.async.t11902.cljs$lang$ctorStr = "cljs.core.async/t11902";
cljs.core.async.t11902.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t11902");
});
cljs.core.async.t11902.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11902.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11902.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11904){var self__ = this;
var _11904__$1 = this;return self__.meta11903;
});
cljs.core.async.t11902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11904,meta11903__$1){var self__ = this;
var _11904__$1 = this;return (new cljs.core.async.t11902(self__.f,self__.fn_handler,meta11903__$1));
});
cljs.core.async.__GT_t11902 = (function __GT_t11902(f__$1,fn_handler__$1,meta11903){return (new cljs.core.async.t11902(f__$1,fn_handler__$1,meta11903));
});
}
return (new cljs.core.async.t11902(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11906 = buff;if(G__11906)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__11906.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11906.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11906);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11906);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11907 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11907);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11907);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3429__auto__ = ret;if(cljs.core.truth_(and__3429__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3429__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4289__auto___11908 = n;var x_11909 = 0;while(true){
if((x_11909 < n__4289__auto___11908))
{(a[x_11909] = 0);
{
var G__11910 = (x_11909 + 1);
x_11909 = G__11910;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11911 = (i + 1);
i = G__11911;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11915 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11915 = (function (flag,alt_flag,meta11916){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11916 = meta11916;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11915.cljs$lang$type = true;
cljs.core.async.t11915.cljs$lang$ctorStr = "cljs.core.async/t11915";
cljs.core.async.t11915.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t11915");
});
cljs.core.async.t11915.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11915.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11915.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11917){var self__ = this;
var _11917__$1 = this;return self__.meta11916;
});
cljs.core.async.t11915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11917,meta11916__$1){var self__ = this;
var _11917__$1 = this;return (new cljs.core.async.t11915(self__.flag,self__.alt_flag,meta11916__$1));
});
cljs.core.async.__GT_t11915 = (function __GT_t11915(flag__$1,alt_flag__$1,meta11916){return (new cljs.core.async.t11915(flag__$1,alt_flag__$1,meta11916));
});
}
return (new cljs.core.async.t11915(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11921 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11921 = (function (cb,flag,alt_handler,meta11922){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11922 = meta11922;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11921.cljs$lang$type = true;
cljs.core.async.t11921.cljs$lang$ctorStr = "cljs.core.async/t11921";
cljs.core.async.t11921.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t11921");
});
cljs.core.async.t11921.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11921.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11921.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11923){var self__ = this;
var _11923__$1 = this;return self__.meta11922;
});
cljs.core.async.t11921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11923,meta11922__$1){var self__ = this;
var _11923__$1 = this;return (new cljs.core.async.t11921(self__.cb,self__.flag,self__.alt_handler,meta11922__$1));
});
cljs.core.async.__GT_t11921 = (function __GT_t11921(cb__$1,flag__$1,alt_handler__$1,meta11922){return (new cljs.core.async.t11921(cb__$1,flag__$1,alt_handler__$1,meta11922));
});
}
return (new cljs.core.async.t11921(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11924_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11924_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3441__auto__ = wport;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11925 = (i + 1);
i = G__11925;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3441__auto__ = ret;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3429__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3429__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3429__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11926){var map__11928 = p__11926;var map__11928__$1 = ((cljs.core.seq_QMARK_.call(null,map__11928))?cljs.core.apply.call(null,cljs.core.hash_map,map__11928):map__11928);var opts = map__11928__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11926 = null;if (arguments.length > 1) {
  p__11926 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11926);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11929){
var ports = cljs.core.first(arglist__11929);
var p__11926 = cljs.core.rest(arglist__11929);
return alts_BANG___delegate(ports,p__11926);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11937 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11937 = (function (ch,f,map_LT_,meta11938){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11938 = meta11938;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11937.cljs$lang$type = true;
cljs.core.async.t11937.cljs$lang$ctorStr = "cljs.core.async/t11937";
cljs.core.async.t11937.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t11937");
});
cljs.core.async.t11937.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11937.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11937.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11937.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11940 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11940 = (function (fn1,_,meta11938,ch,f,map_LT_,meta11941){
this.fn1 = fn1;
this._ = _;
this.meta11938 = meta11938;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11941 = meta11941;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11940.cljs$lang$type = true;
cljs.core.async.t11940.cljs$lang$ctorStr = "cljs.core.async/t11940";
cljs.core.async.t11940.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t11940");
});
cljs.core.async.t11940.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11940.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11940.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11940.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11930_SHARP_){return f1.call(null,(((p1__11930_SHARP_ == null))?null:self__.f.call(null,p1__11930_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11942){var self__ = this;
var _11942__$1 = this;return self__.meta11941;
});
cljs.core.async.t11940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11942,meta11941__$1){var self__ = this;
var _11942__$1 = this;return (new cljs.core.async.t11940(self__.fn1,self__._,self__.meta11938,self__.ch,self__.f,self__.map_LT_,meta11941__$1));
});
cljs.core.async.__GT_t11940 = (function __GT_t11940(fn1__$1,___$2,meta11938__$1,ch__$2,f__$2,map_LT___$2,meta11941){return (new cljs.core.async.t11940(fn1__$1,___$2,meta11938__$1,ch__$2,f__$2,map_LT___$2,meta11941));
});
}
return (new cljs.core.async.t11940(fn1,___$1,self__.meta11938,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3429__auto__ = ret;if(cljs.core.truth_(and__3429__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3429__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11937.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11937.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11939){var self__ = this;
var _11939__$1 = this;return self__.meta11938;
});
cljs.core.async.t11937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11939,meta11938__$1){var self__ = this;
var _11939__$1 = this;return (new cljs.core.async.t11937(self__.ch,self__.f,self__.map_LT_,meta11938__$1));
});
cljs.core.async.__GT_t11937 = (function __GT_t11937(ch__$1,f__$1,map_LT___$1,meta11938){return (new cljs.core.async.t11937(ch__$1,f__$1,map_LT___$1,meta11938));
});
}
return (new cljs.core.async.t11937(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11946 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11946 = (function (ch,f,map_GT_,meta11947){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11947 = meta11947;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11946.cljs$lang$type = true;
cljs.core.async.t11946.cljs$lang$ctorStr = "cljs.core.async/t11946";
cljs.core.async.t11946.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t11946");
});
cljs.core.async.t11946.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11946.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11946.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11946.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11946.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11946.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11948){var self__ = this;
var _11948__$1 = this;return self__.meta11947;
});
cljs.core.async.t11946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11948,meta11947__$1){var self__ = this;
var _11948__$1 = this;return (new cljs.core.async.t11946(self__.ch,self__.f,self__.map_GT_,meta11947__$1));
});
cljs.core.async.__GT_t11946 = (function __GT_t11946(ch__$1,f__$1,map_GT___$1,meta11947){return (new cljs.core.async.t11946(ch__$1,f__$1,map_GT___$1,meta11947));
});
}
return (new cljs.core.async.t11946(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11952 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11952 = (function (ch,p,filter_GT_,meta11953){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11953 = meta11953;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11952.cljs$lang$type = true;
cljs.core.async.t11952.cljs$lang$ctorStr = "cljs.core.async/t11952";
cljs.core.async.t11952.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t11952");
});
cljs.core.async.t11952.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11952.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11952.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11952.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11952.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11952.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11954){var self__ = this;
var _11954__$1 = this;return self__.meta11953;
});
cljs.core.async.t11952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11954,meta11953__$1){var self__ = this;
var _11954__$1 = this;return (new cljs.core.async.t11952(self__.ch,self__.p,self__.filter_GT_,meta11953__$1));
});
cljs.core.async.__GT_t11952 = (function __GT_t11952(ch__$1,p__$1,filter_GT___$1,meta11953){return (new cljs.core.async.t11952(ch__$1,p__$1,filter_GT___$1,meta11953));
});
}
return (new cljs.core.async.t11952(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___12037 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_12016){var state_val_12017 = (state_12016[1]);if((state_val_12017 === 1))
{var state_12016__$1 = state_12016;var statearr_12018_12038 = state_12016__$1;(statearr_12018_12038[2] = null);
(statearr_12018_12038[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12017 === 2))
{var state_12016__$1 = state_12016;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12016__$1,4,ch);
} else
{if((state_val_12017 === 3))
{var inst_12014 = (state_12016[2]);var state_12016__$1 = state_12016;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12016__$1,inst_12014);
} else
{if((state_val_12017 === 4))
{var inst_11998 = (state_12016[7]);var inst_11998__$1 = (state_12016[2]);var inst_11999 = (inst_11998__$1 == null);var state_12016__$1 = (function (){var statearr_12019 = state_12016;(statearr_12019[7] = inst_11998__$1);
return statearr_12019;
})();if(cljs.core.truth_(inst_11999))
{var statearr_12020_12039 = state_12016__$1;(statearr_12020_12039[1] = 5);
} else
{var statearr_12021_12040 = state_12016__$1;(statearr_12021_12040[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12017 === 5))
{var inst_12001 = cljs.core.async.close_BANG_.call(null,out);var state_12016__$1 = state_12016;var statearr_12022_12041 = state_12016__$1;(statearr_12022_12041[2] = inst_12001);
(statearr_12022_12041[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12017 === 6))
{var inst_11998 = (state_12016[7]);var inst_12003 = p.call(null,inst_11998);var state_12016__$1 = state_12016;if(cljs.core.truth_(inst_12003))
{var statearr_12023_12042 = state_12016__$1;(statearr_12023_12042[1] = 8);
} else
{var statearr_12024_12043 = state_12016__$1;(statearr_12024_12043[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12017 === 7))
{var inst_12012 = (state_12016[2]);var state_12016__$1 = state_12016;var statearr_12025_12044 = state_12016__$1;(statearr_12025_12044[2] = inst_12012);
(statearr_12025_12044[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12017 === 8))
{var inst_11998 = (state_12016[7]);var state_12016__$1 = state_12016;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12016__$1,11,out,inst_11998);
} else
{if((state_val_12017 === 9))
{var state_12016__$1 = state_12016;var statearr_12026_12045 = state_12016__$1;(statearr_12026_12045[2] = null);
(statearr_12026_12045[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12017 === 10))
{var inst_12009 = (state_12016[2]);var state_12016__$1 = (function (){var statearr_12027 = state_12016;(statearr_12027[8] = inst_12009);
return statearr_12027;
})();var statearr_12028_12046 = state_12016__$1;(statearr_12028_12046[2] = null);
(statearr_12028_12046[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12017 === 11))
{var inst_12006 = (state_12016[2]);var state_12016__$1 = state_12016;var statearr_12029_12047 = state_12016__$1;(statearr_12029_12047[2] = inst_12006);
(statearr_12029_12047[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_12033 = [null,null,null,null,null,null,null,null,null];(statearr_12033[0] = state_machine__5548__auto__);
(statearr_12033[1] = 1);
return statearr_12033;
});
var state_machine__5548__auto____1 = (function (state_12016){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_12016);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e12034){if((e12034 instanceof Object))
{var ex__5551__auto__ = e12034;var statearr_12035_12048 = state_12016;(statearr_12035_12048[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12016);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12034;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12049 = state_12016;
state_12016 = G__12049;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_12016){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_12016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_12036 = f__5563__auto__.call(null);(statearr_12036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___12037);
return statearr_12036;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_12201){var state_val_12202 = (state_12201[1]);if((state_val_12202 === 1))
{var state_12201__$1 = state_12201;var statearr_12203_12240 = state_12201__$1;(statearr_12203_12240[2] = null);
(statearr_12203_12240[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12202 === 2))
{var state_12201__$1 = state_12201;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12201__$1,4,in$);
} else
{if((state_val_12202 === 3))
{var inst_12199 = (state_12201[2]);var state_12201__$1 = state_12201;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12201__$1,inst_12199);
} else
{if((state_val_12202 === 4))
{var inst_12147 = (state_12201[7]);var inst_12147__$1 = (state_12201[2]);var inst_12148 = (inst_12147__$1 == null);var state_12201__$1 = (function (){var statearr_12204 = state_12201;(statearr_12204[7] = inst_12147__$1);
return statearr_12204;
})();if(cljs.core.truth_(inst_12148))
{var statearr_12205_12241 = state_12201__$1;(statearr_12205_12241[1] = 5);
} else
{var statearr_12206_12242 = state_12201__$1;(statearr_12206_12242[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12202 === 5))
{var inst_12150 = cljs.core.async.close_BANG_.call(null,out);var state_12201__$1 = state_12201;var statearr_12207_12243 = state_12201__$1;(statearr_12207_12243[2] = inst_12150);
(statearr_12207_12243[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12202 === 6))
{var inst_12147 = (state_12201[7]);var inst_12152 = f.call(null,inst_12147);var inst_12157 = cljs.core.seq.call(null,inst_12152);var inst_12158 = inst_12157;var inst_12159 = null;var inst_12160 = 0;var inst_12161 = 0;var state_12201__$1 = (function (){var statearr_12208 = state_12201;(statearr_12208[8] = inst_12159);
(statearr_12208[9] = inst_12158);
(statearr_12208[10] = inst_12160);
(statearr_12208[11] = inst_12161);
return statearr_12208;
})();var statearr_12209_12244 = state_12201__$1;(statearr_12209_12244[2] = null);
(statearr_12209_12244[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12202 === 7))
{var inst_12197 = (state_12201[2]);var state_12201__$1 = state_12201;var statearr_12210_12245 = state_12201__$1;(statearr_12210_12245[2] = inst_12197);
(statearr_12210_12245[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12202 === 8))
{var inst_12160 = (state_12201[10]);var inst_12161 = (state_12201[11]);var inst_12163 = (inst_12161 < inst_12160);var inst_12164 = inst_12163;var state_12201__$1 = state_12201;if(cljs.core.truth_(inst_12164))
{var statearr_12211_12246 = state_12201__$1;(statearr_12211_12246[1] = 10);
} else
{var statearr_12212_12247 = state_12201__$1;(statearr_12212_12247[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12202 === 9))
{var inst_12194 = (state_12201[2]);var state_12201__$1 = (function (){var statearr_12213 = state_12201;(statearr_12213[12] = inst_12194);
return statearr_12213;
})();var statearr_12214_12248 = state_12201__$1;(statearr_12214_12248[2] = null);
(statearr_12214_12248[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12202 === 10))
{var inst_12159 = (state_12201[8]);var inst_12161 = (state_12201[11]);var inst_12166 = cljs.core._nth.call(null,inst_12159,inst_12161);var state_12201__$1 = state_12201;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12201__$1,13,out,inst_12166);
} else
{if((state_val_12202 === 11))
{var inst_12158 = (state_12201[9]);var inst_12172 = (state_12201[13]);var inst_12172__$1 = cljs.core.seq.call(null,inst_12158);var state_12201__$1 = (function (){var statearr_12218 = state_12201;(statearr_12218[13] = inst_12172__$1);
return statearr_12218;
})();if(inst_12172__$1)
{var statearr_12219_12249 = state_12201__$1;(statearr_12219_12249[1] = 14);
} else
{var statearr_12220_12250 = state_12201__$1;(statearr_12220_12250[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12202 === 12))
{var inst_12192 = (state_12201[2]);var state_12201__$1 = state_12201;var statearr_12221_12251 = state_12201__$1;(statearr_12221_12251[2] = inst_12192);
(statearr_12221_12251[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12202 === 13))
{var inst_12159 = (state_12201[8]);var inst_12158 = (state_12201[9]);var inst_12160 = (state_12201[10]);var inst_12161 = (state_12201[11]);var inst_12168 = (state_12201[2]);var inst_12169 = (inst_12161 + 1);var tmp12215 = inst_12159;var tmp12216 = inst_12158;var tmp12217 = inst_12160;var inst_12158__$1 = tmp12216;var inst_12159__$1 = tmp12215;var inst_12160__$1 = tmp12217;var inst_12161__$1 = inst_12169;var state_12201__$1 = (function (){var statearr_12222 = state_12201;(statearr_12222[8] = inst_12159__$1);
(statearr_12222[9] = inst_12158__$1);
(statearr_12222[10] = inst_12160__$1);
(statearr_12222[11] = inst_12161__$1);
(statearr_12222[14] = inst_12168);
return statearr_12222;
})();var statearr_12223_12252 = state_12201__$1;(statearr_12223_12252[2] = null);
(statearr_12223_12252[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12202 === 14))
{var inst_12172 = (state_12201[13]);var inst_12174 = cljs.core.chunked_seq_QMARK_.call(null,inst_12172);var state_12201__$1 = state_12201;if(inst_12174)
{var statearr_12224_12253 = state_12201__$1;(statearr_12224_12253[1] = 17);
} else
{var statearr_12225_12254 = state_12201__$1;(statearr_12225_12254[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12202 === 15))
{var state_12201__$1 = state_12201;var statearr_12226_12255 = state_12201__$1;(statearr_12226_12255[2] = null);
(statearr_12226_12255[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12202 === 16))
{var inst_12190 = (state_12201[2]);var state_12201__$1 = state_12201;var statearr_12227_12256 = state_12201__$1;(statearr_12227_12256[2] = inst_12190);
(statearr_12227_12256[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12202 === 17))
{var inst_12172 = (state_12201[13]);var inst_12176 = cljs.core.chunk_first.call(null,inst_12172);var inst_12177 = cljs.core.chunk_rest.call(null,inst_12172);var inst_12178 = cljs.core.count.call(null,inst_12176);var inst_12158 = inst_12177;var inst_12159 = inst_12176;var inst_12160 = inst_12178;var inst_12161 = 0;var state_12201__$1 = (function (){var statearr_12228 = state_12201;(statearr_12228[8] = inst_12159);
(statearr_12228[9] = inst_12158);
(statearr_12228[10] = inst_12160);
(statearr_12228[11] = inst_12161);
return statearr_12228;
})();var statearr_12229_12257 = state_12201__$1;(statearr_12229_12257[2] = null);
(statearr_12229_12257[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12202 === 18))
{var inst_12172 = (state_12201[13]);var inst_12181 = cljs.core.first.call(null,inst_12172);var state_12201__$1 = state_12201;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12201__$1,20,out,inst_12181);
} else
{if((state_val_12202 === 19))
{var inst_12187 = (state_12201[2]);var state_12201__$1 = state_12201;var statearr_12230_12258 = state_12201__$1;(statearr_12230_12258[2] = inst_12187);
(statearr_12230_12258[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12202 === 20))
{var inst_12172 = (state_12201[13]);var inst_12183 = (state_12201[2]);var inst_12184 = cljs.core.next.call(null,inst_12172);var inst_12158 = inst_12184;var inst_12159 = null;var inst_12160 = 0;var inst_12161 = 0;var state_12201__$1 = (function (){var statearr_12231 = state_12201;(statearr_12231[8] = inst_12159);
(statearr_12231[9] = inst_12158);
(statearr_12231[15] = inst_12183);
(statearr_12231[10] = inst_12160);
(statearr_12231[11] = inst_12161);
return statearr_12231;
})();var statearr_12232_12259 = state_12201__$1;(statearr_12232_12259[2] = null);
(statearr_12232_12259[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_12236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12236[0] = state_machine__5548__auto__);
(statearr_12236[1] = 1);
return statearr_12236;
});
var state_machine__5548__auto____1 = (function (state_12201){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_12201);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e12237){if((e12237 instanceof Object))
{var ex__5551__auto__ = e12237;var statearr_12238_12260 = state_12201;(statearr_12238_12260[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12201);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12237;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12261 = state_12201;
state_12201 = G__12261;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_12201){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_12201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_12239 = f__5563__auto__.call(null);(statearr_12239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_12239;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5562__auto___12342 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_12321){var state_val_12322 = (state_12321[1]);if((state_val_12322 === 1))
{var state_12321__$1 = state_12321;var statearr_12323_12343 = state_12321__$1;(statearr_12323_12343[2] = null);
(statearr_12323_12343[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12322 === 2))
{var state_12321__$1 = state_12321;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12321__$1,4,from);
} else
{if((state_val_12322 === 3))
{var inst_12319 = (state_12321[2]);var state_12321__$1 = state_12321;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12321__$1,inst_12319);
} else
{if((state_val_12322 === 4))
{var inst_12304 = (state_12321[7]);var inst_12304__$1 = (state_12321[2]);var inst_12305 = (inst_12304__$1 == null);var state_12321__$1 = (function (){var statearr_12324 = state_12321;(statearr_12324[7] = inst_12304__$1);
return statearr_12324;
})();if(cljs.core.truth_(inst_12305))
{var statearr_12325_12344 = state_12321__$1;(statearr_12325_12344[1] = 5);
} else
{var statearr_12326_12345 = state_12321__$1;(statearr_12326_12345[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12322 === 5))
{var state_12321__$1 = state_12321;if(cljs.core.truth_(close_QMARK_))
{var statearr_12327_12346 = state_12321__$1;(statearr_12327_12346[1] = 8);
} else
{var statearr_12328_12347 = state_12321__$1;(statearr_12328_12347[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12322 === 6))
{var inst_12304 = (state_12321[7]);var state_12321__$1 = state_12321;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12321__$1,11,to,inst_12304);
} else
{if((state_val_12322 === 7))
{var inst_12317 = (state_12321[2]);var state_12321__$1 = state_12321;var statearr_12329_12348 = state_12321__$1;(statearr_12329_12348[2] = inst_12317);
(statearr_12329_12348[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12322 === 8))
{var inst_12308 = cljs.core.async.close_BANG_.call(null,to);var state_12321__$1 = state_12321;var statearr_12330_12349 = state_12321__$1;(statearr_12330_12349[2] = inst_12308);
(statearr_12330_12349[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12322 === 9))
{var state_12321__$1 = state_12321;var statearr_12331_12350 = state_12321__$1;(statearr_12331_12350[2] = null);
(statearr_12331_12350[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12322 === 10))
{var inst_12311 = (state_12321[2]);var state_12321__$1 = state_12321;var statearr_12332_12351 = state_12321__$1;(statearr_12332_12351[2] = inst_12311);
(statearr_12332_12351[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12322 === 11))
{var inst_12314 = (state_12321[2]);var state_12321__$1 = (function (){var statearr_12333 = state_12321;(statearr_12333[8] = inst_12314);
return statearr_12333;
})();var statearr_12334_12352 = state_12321__$1;(statearr_12334_12352[2] = null);
(statearr_12334_12352[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_12338 = [null,null,null,null,null,null,null,null,null];(statearr_12338[0] = state_machine__5548__auto__);
(statearr_12338[1] = 1);
return statearr_12338;
});
var state_machine__5548__auto____1 = (function (state_12321){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_12321);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e12339){if((e12339 instanceof Object))
{var ex__5551__auto__ = e12339;var statearr_12340_12353 = state_12321;(statearr_12340_12353[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12321);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12339;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12354 = state_12321;
state_12321 = G__12354;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_12321){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_12321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_12341 = f__5563__auto__.call(null);(statearr_12341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___12342);
return statearr_12341;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5562__auto___12441 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_12419){var state_val_12420 = (state_12419[1]);if((state_val_12420 === 1))
{var state_12419__$1 = state_12419;var statearr_12421_12442 = state_12419__$1;(statearr_12421_12442[2] = null);
(statearr_12421_12442[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12420 === 2))
{var state_12419__$1 = state_12419;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12419__$1,4,ch);
} else
{if((state_val_12420 === 3))
{var inst_12417 = (state_12419[2]);var state_12419__$1 = state_12419;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12419__$1,inst_12417);
} else
{if((state_val_12420 === 4))
{var inst_12400 = (state_12419[7]);var inst_12400__$1 = (state_12419[2]);var inst_12401 = (inst_12400__$1 == null);var state_12419__$1 = (function (){var statearr_12422 = state_12419;(statearr_12422[7] = inst_12400__$1);
return statearr_12422;
})();if(cljs.core.truth_(inst_12401))
{var statearr_12423_12443 = state_12419__$1;(statearr_12423_12443[1] = 5);
} else
{var statearr_12424_12444 = state_12419__$1;(statearr_12424_12444[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12420 === 5))
{var inst_12403 = cljs.core.async.close_BANG_.call(null,tc);var inst_12404 = cljs.core.async.close_BANG_.call(null,fc);var state_12419__$1 = (function (){var statearr_12425 = state_12419;(statearr_12425[8] = inst_12403);
return statearr_12425;
})();var statearr_12426_12445 = state_12419__$1;(statearr_12426_12445[2] = inst_12404);
(statearr_12426_12445[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12420 === 6))
{var inst_12400 = (state_12419[7]);var inst_12406 = p.call(null,inst_12400);var state_12419__$1 = state_12419;if(cljs.core.truth_(inst_12406))
{var statearr_12427_12446 = state_12419__$1;(statearr_12427_12446[1] = 9);
} else
{var statearr_12428_12447 = state_12419__$1;(statearr_12428_12447[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12420 === 7))
{var inst_12415 = (state_12419[2]);var state_12419__$1 = state_12419;var statearr_12429_12448 = state_12419__$1;(statearr_12429_12448[2] = inst_12415);
(statearr_12429_12448[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12420 === 8))
{var inst_12412 = (state_12419[2]);var state_12419__$1 = (function (){var statearr_12430 = state_12419;(statearr_12430[9] = inst_12412);
return statearr_12430;
})();var statearr_12431_12449 = state_12419__$1;(statearr_12431_12449[2] = null);
(statearr_12431_12449[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12420 === 9))
{var state_12419__$1 = state_12419;var statearr_12432_12450 = state_12419__$1;(statearr_12432_12450[2] = tc);
(statearr_12432_12450[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12420 === 10))
{var state_12419__$1 = state_12419;var statearr_12433_12451 = state_12419__$1;(statearr_12433_12451[2] = fc);
(statearr_12433_12451[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12420 === 11))
{var inst_12400 = (state_12419[7]);var inst_12410 = (state_12419[2]);var state_12419__$1 = state_12419;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12419__$1,8,inst_12410,inst_12400);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_12437 = [null,null,null,null,null,null,null,null,null,null];(statearr_12437[0] = state_machine__5548__auto__);
(statearr_12437[1] = 1);
return statearr_12437;
});
var state_machine__5548__auto____1 = (function (state_12419){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_12419);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e12438){if((e12438 instanceof Object))
{var ex__5551__auto__ = e12438;var statearr_12439_12452 = state_12419;(statearr_12439_12452[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12419);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12438;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12453 = state_12419;
state_12419 = G__12453;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_12419){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_12419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_12440 = f__5563__auto__.call(null);(statearr_12440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___12441);
return statearr_12440;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_12500){var state_val_12501 = (state_12500[1]);if((state_val_12501 === 7))
{var inst_12496 = (state_12500[2]);var state_12500__$1 = state_12500;var statearr_12502_12518 = state_12500__$1;(statearr_12502_12518[2] = inst_12496);
(statearr_12502_12518[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12501 === 6))
{var inst_12489 = (state_12500[7]);var inst_12486 = (state_12500[8]);var inst_12493 = f.call(null,inst_12486,inst_12489);var inst_12486__$1 = inst_12493;var state_12500__$1 = (function (){var statearr_12503 = state_12500;(statearr_12503[8] = inst_12486__$1);
return statearr_12503;
})();var statearr_12504_12519 = state_12500__$1;(statearr_12504_12519[2] = null);
(statearr_12504_12519[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12501 === 5))
{var inst_12486 = (state_12500[8]);var state_12500__$1 = state_12500;var statearr_12505_12520 = state_12500__$1;(statearr_12505_12520[2] = inst_12486);
(statearr_12505_12520[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12501 === 4))
{var inst_12489 = (state_12500[7]);var inst_12489__$1 = (state_12500[2]);var inst_12490 = (inst_12489__$1 == null);var state_12500__$1 = (function (){var statearr_12506 = state_12500;(statearr_12506[7] = inst_12489__$1);
return statearr_12506;
})();if(cljs.core.truth_(inst_12490))
{var statearr_12507_12521 = state_12500__$1;(statearr_12507_12521[1] = 5);
} else
{var statearr_12508_12522 = state_12500__$1;(statearr_12508_12522[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12501 === 3))
{var inst_12498 = (state_12500[2]);var state_12500__$1 = state_12500;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12500__$1,inst_12498);
} else
{if((state_val_12501 === 2))
{var state_12500__$1 = state_12500;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12500__$1,4,ch);
} else
{if((state_val_12501 === 1))
{var inst_12486 = init;var state_12500__$1 = (function (){var statearr_12509 = state_12500;(statearr_12509[8] = inst_12486);
return statearr_12509;
})();var statearr_12510_12523 = state_12500__$1;(statearr_12510_12523[2] = null);
(statearr_12510_12523[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_12514 = [null,null,null,null,null,null,null,null,null];(statearr_12514[0] = state_machine__5548__auto__);
(statearr_12514[1] = 1);
return statearr_12514;
});
var state_machine__5548__auto____1 = (function (state_12500){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_12500);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e12515){if((e12515 instanceof Object))
{var ex__5551__auto__ = e12515;var statearr_12516_12524 = state_12500;(statearr_12516_12524[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12500);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12515;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12525 = state_12500;
state_12500 = G__12525;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_12500){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_12500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_12517 = f__5563__auto__.call(null);(statearr_12517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_12517;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_12587){var state_val_12588 = (state_12587[1]);if((state_val_12588 === 1))
{var inst_12567 = cljs.core.seq.call(null,coll);var inst_12568 = inst_12567;var state_12587__$1 = (function (){var statearr_12589 = state_12587;(statearr_12589[7] = inst_12568);
return statearr_12589;
})();var statearr_12590_12608 = state_12587__$1;(statearr_12590_12608[2] = null);
(statearr_12590_12608[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12588 === 2))
{var inst_12568 = (state_12587[7]);var state_12587__$1 = state_12587;if(cljs.core.truth_(inst_12568))
{var statearr_12591_12609 = state_12587__$1;(statearr_12591_12609[1] = 4);
} else
{var statearr_12592_12610 = state_12587__$1;(statearr_12592_12610[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12588 === 3))
{var inst_12585 = (state_12587[2]);var state_12587__$1 = state_12587;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12587__$1,inst_12585);
} else
{if((state_val_12588 === 4))
{var inst_12568 = (state_12587[7]);var inst_12571 = cljs.core.first.call(null,inst_12568);var state_12587__$1 = state_12587;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12587__$1,7,ch,inst_12571);
} else
{if((state_val_12588 === 5))
{var state_12587__$1 = state_12587;if(cljs.core.truth_(close_QMARK_))
{var statearr_12593_12611 = state_12587__$1;(statearr_12593_12611[1] = 8);
} else
{var statearr_12594_12612 = state_12587__$1;(statearr_12594_12612[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12588 === 6))
{var inst_12583 = (state_12587[2]);var state_12587__$1 = state_12587;var statearr_12595_12613 = state_12587__$1;(statearr_12595_12613[2] = inst_12583);
(statearr_12595_12613[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12588 === 7))
{var inst_12568 = (state_12587[7]);var inst_12573 = (state_12587[2]);var inst_12574 = cljs.core.next.call(null,inst_12568);var inst_12568__$1 = inst_12574;var state_12587__$1 = (function (){var statearr_12596 = state_12587;(statearr_12596[7] = inst_12568__$1);
(statearr_12596[8] = inst_12573);
return statearr_12596;
})();var statearr_12597_12614 = state_12587__$1;(statearr_12597_12614[2] = null);
(statearr_12597_12614[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12588 === 8))
{var inst_12578 = cljs.core.async.close_BANG_.call(null,ch);var state_12587__$1 = state_12587;var statearr_12598_12615 = state_12587__$1;(statearr_12598_12615[2] = inst_12578);
(statearr_12598_12615[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12588 === 9))
{var state_12587__$1 = state_12587;var statearr_12599_12616 = state_12587__$1;(statearr_12599_12616[2] = null);
(statearr_12599_12616[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12588 === 10))
{var inst_12581 = (state_12587[2]);var state_12587__$1 = state_12587;var statearr_12600_12617 = state_12587__$1;(statearr_12600_12617[2] = inst_12581);
(statearr_12600_12617[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_12604 = [null,null,null,null,null,null,null,null,null];(statearr_12604[0] = state_machine__5548__auto__);
(statearr_12604[1] = 1);
return statearr_12604;
});
var state_machine__5548__auto____1 = (function (state_12587){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_12587);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e12605){if((e12605 instanceof Object))
{var ex__5551__auto__ = e12605;var statearr_12606_12618 = state_12587;(statearr_12606_12618[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12587);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12605;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12619 = state_12587;
state_12587 = G__12619;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_12587){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_12587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_12607 = f__5563__auto__.call(null);(statearr_12607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_12607;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12621 = {};return obj12621;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3429__auto__ = _;if(and__3429__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4068__auto__ = (((_ == null))?null:_);return (function (){var or__3441__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12623 = {};return obj12623;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12847 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12847 = (function (cs,ch,mult,meta12848){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12848 = meta12848;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12847.cljs$lang$type = true;
cljs.core.async.t12847.cljs$lang$ctorStr = "cljs.core.async/t12847";
cljs.core.async.t12847.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t12847");
});})(cs))
;
cljs.core.async.t12847.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12847.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12847.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12847.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12847.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12847.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12847.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12849){var self__ = this;
var _12849__$1 = this;return self__.meta12848;
});})(cs))
;
cljs.core.async.t12847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12849,meta12848__$1){var self__ = this;
var _12849__$1 = this;return (new cljs.core.async.t12847(self__.cs,self__.ch,self__.mult,meta12848__$1));
});})(cs))
;
cljs.core.async.__GT_t12847 = ((function (cs){
return (function __GT_t12847(cs__$1,ch__$1,mult__$1,meta12848){return (new cljs.core.async.t12847(cs__$1,ch__$1,mult__$1,meta12848));
});})(cs))
;
}
return (new cljs.core.async.t12847(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5562__auto___13070 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_12984){var state_val_12985 = (state_12984[1]);if((state_val_12985 === 32))
{var inst_12928 = (state_12984[7]);var inst_12852 = (state_12984[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12984,31,Object,null,30);var inst_12935 = cljs.core.async.put_BANG_.call(null,inst_12928,inst_12852,done);var state_12984__$1 = state_12984;var statearr_12986_13071 = state_12984__$1;(statearr_12986_13071[2] = inst_12935);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12984__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 1))
{var state_12984__$1 = state_12984;var statearr_12987_13072 = state_12984__$1;(statearr_12987_13072[2] = null);
(statearr_12987_13072[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 33))
{var inst_12941 = (state_12984[9]);var inst_12943 = cljs.core.chunked_seq_QMARK_.call(null,inst_12941);var state_12984__$1 = state_12984;if(inst_12943)
{var statearr_12988_13073 = state_12984__$1;(statearr_12988_13073[1] = 36);
} else
{var statearr_12989_13074 = state_12984__$1;(statearr_12989_13074[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 2))
{var state_12984__$1 = state_12984;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12984__$1,4,ch);
} else
{if((state_val_12985 === 34))
{var state_12984__$1 = state_12984;var statearr_12990_13075 = state_12984__$1;(statearr_12990_13075[2] = null);
(statearr_12990_13075[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 3))
{var inst_12982 = (state_12984[2]);var state_12984__$1 = state_12984;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12984__$1,inst_12982);
} else
{if((state_val_12985 === 35))
{var inst_12966 = (state_12984[2]);var state_12984__$1 = state_12984;var statearr_12991_13076 = state_12984__$1;(statearr_12991_13076[2] = inst_12966);
(statearr_12991_13076[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 4))
{var inst_12852 = (state_12984[8]);var inst_12852__$1 = (state_12984[2]);var inst_12853 = (inst_12852__$1 == null);var state_12984__$1 = (function (){var statearr_12992 = state_12984;(statearr_12992[8] = inst_12852__$1);
return statearr_12992;
})();if(cljs.core.truth_(inst_12853))
{var statearr_12993_13077 = state_12984__$1;(statearr_12993_13077[1] = 5);
} else
{var statearr_12994_13078 = state_12984__$1;(statearr_12994_13078[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 36))
{var inst_12941 = (state_12984[9]);var inst_12945 = cljs.core.chunk_first.call(null,inst_12941);var inst_12946 = cljs.core.chunk_rest.call(null,inst_12941);var inst_12947 = cljs.core.count.call(null,inst_12945);var inst_12920 = inst_12946;var inst_12921 = inst_12945;var inst_12922 = inst_12947;var inst_12923 = 0;var state_12984__$1 = (function (){var statearr_12995 = state_12984;(statearr_12995[10] = inst_12923);
(statearr_12995[11] = inst_12920);
(statearr_12995[12] = inst_12921);
(statearr_12995[13] = inst_12922);
return statearr_12995;
})();var statearr_12996_13079 = state_12984__$1;(statearr_12996_13079[2] = null);
(statearr_12996_13079[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 5))
{var inst_12859 = cljs.core.deref.call(null,cs);var inst_12860 = cljs.core.seq.call(null,inst_12859);var inst_12861 = inst_12860;var inst_12862 = null;var inst_12863 = 0;var inst_12864 = 0;var state_12984__$1 = (function (){var statearr_12997 = state_12984;(statearr_12997[14] = inst_12864);
(statearr_12997[15] = inst_12863);
(statearr_12997[16] = inst_12862);
(statearr_12997[17] = inst_12861);
return statearr_12997;
})();var statearr_12998_13080 = state_12984__$1;(statearr_12998_13080[2] = null);
(statearr_12998_13080[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 37))
{var inst_12941 = (state_12984[9]);var inst_12950 = cljs.core.first.call(null,inst_12941);var state_12984__$1 = (function (){var statearr_12999 = state_12984;(statearr_12999[18] = inst_12950);
return statearr_12999;
})();var statearr_13000_13081 = state_12984__$1;(statearr_13000_13081[2] = null);
(statearr_13000_13081[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 6))
{var inst_12912 = (state_12984[19]);var inst_12911 = cljs.core.deref.call(null,cs);var inst_12912__$1 = cljs.core.keys.call(null,inst_12911);var inst_12913 = cljs.core.count.call(null,inst_12912__$1);var inst_12914 = cljs.core.reset_BANG_.call(null,dctr,inst_12913);var inst_12919 = cljs.core.seq.call(null,inst_12912__$1);var inst_12920 = inst_12919;var inst_12921 = null;var inst_12922 = 0;var inst_12923 = 0;var state_12984__$1 = (function (){var statearr_13001 = state_12984;(statearr_13001[19] = inst_12912__$1);
(statearr_13001[20] = inst_12914);
(statearr_13001[10] = inst_12923);
(statearr_13001[11] = inst_12920);
(statearr_13001[12] = inst_12921);
(statearr_13001[13] = inst_12922);
return statearr_13001;
})();var statearr_13002_13082 = state_12984__$1;(statearr_13002_13082[2] = null);
(statearr_13002_13082[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 38))
{var inst_12963 = (state_12984[2]);var state_12984__$1 = state_12984;var statearr_13003_13083 = state_12984__$1;(statearr_13003_13083[2] = inst_12963);
(statearr_13003_13083[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 7))
{var inst_12980 = (state_12984[2]);var state_12984__$1 = state_12984;var statearr_13004_13084 = state_12984__$1;(statearr_13004_13084[2] = inst_12980);
(statearr_13004_13084[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 39))
{var inst_12941 = (state_12984[9]);var inst_12959 = (state_12984[2]);var inst_12960 = cljs.core.next.call(null,inst_12941);var inst_12920 = inst_12960;var inst_12921 = null;var inst_12922 = 0;var inst_12923 = 0;var state_12984__$1 = (function (){var statearr_13005 = state_12984;(statearr_13005[21] = inst_12959);
(statearr_13005[10] = inst_12923);
(statearr_13005[11] = inst_12920);
(statearr_13005[12] = inst_12921);
(statearr_13005[13] = inst_12922);
return statearr_13005;
})();var statearr_13006_13085 = state_12984__$1;(statearr_13006_13085[2] = null);
(statearr_13006_13085[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 8))
{var inst_12864 = (state_12984[14]);var inst_12863 = (state_12984[15]);var inst_12866 = (inst_12864 < inst_12863);var inst_12867 = inst_12866;var state_12984__$1 = state_12984;if(cljs.core.truth_(inst_12867))
{var statearr_13007_13086 = state_12984__$1;(statearr_13007_13086[1] = 10);
} else
{var statearr_13008_13087 = state_12984__$1;(statearr_13008_13087[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 40))
{var inst_12950 = (state_12984[18]);var inst_12951 = (state_12984[2]);var inst_12952 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12953 = cljs.core.async.untap_STAR_.call(null,m,inst_12950);var state_12984__$1 = (function (){var statearr_13009 = state_12984;(statearr_13009[22] = inst_12951);
(statearr_13009[23] = inst_12952);
return statearr_13009;
})();var statearr_13010_13088 = state_12984__$1;(statearr_13010_13088[2] = inst_12953);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12984__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 9))
{var inst_12909 = (state_12984[2]);var state_12984__$1 = state_12984;var statearr_13011_13089 = state_12984__$1;(statearr_13011_13089[2] = inst_12909);
(statearr_13011_13089[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 41))
{var inst_12950 = (state_12984[18]);var inst_12852 = (state_12984[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12984,40,Object,null,39);var inst_12957 = cljs.core.async.put_BANG_.call(null,inst_12950,inst_12852,done);var state_12984__$1 = state_12984;var statearr_13012_13090 = state_12984__$1;(statearr_13012_13090[2] = inst_12957);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12984__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 10))
{var inst_12864 = (state_12984[14]);var inst_12862 = (state_12984[16]);var inst_12870 = cljs.core._nth.call(null,inst_12862,inst_12864);var inst_12871 = cljs.core.nth.call(null,inst_12870,0,null);var inst_12872 = cljs.core.nth.call(null,inst_12870,1,null);var state_12984__$1 = (function (){var statearr_13013 = state_12984;(statearr_13013[24] = inst_12871);
return statearr_13013;
})();if(cljs.core.truth_(inst_12872))
{var statearr_13014_13091 = state_12984__$1;(statearr_13014_13091[1] = 13);
} else
{var statearr_13015_13092 = state_12984__$1;(statearr_13015_13092[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 42))
{var state_12984__$1 = state_12984;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12984__$1,45,dchan);
} else
{if((state_val_12985 === 11))
{var inst_12861 = (state_12984[17]);var inst_12881 = (state_12984[25]);var inst_12881__$1 = cljs.core.seq.call(null,inst_12861);var state_12984__$1 = (function (){var statearr_13016 = state_12984;(statearr_13016[25] = inst_12881__$1);
return statearr_13016;
})();if(inst_12881__$1)
{var statearr_13017_13093 = state_12984__$1;(statearr_13017_13093[1] = 16);
} else
{var statearr_13018_13094 = state_12984__$1;(statearr_13018_13094[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 43))
{var state_12984__$1 = state_12984;var statearr_13019_13095 = state_12984__$1;(statearr_13019_13095[2] = null);
(statearr_13019_13095[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 12))
{var inst_12907 = (state_12984[2]);var state_12984__$1 = state_12984;var statearr_13020_13096 = state_12984__$1;(statearr_13020_13096[2] = inst_12907);
(statearr_13020_13096[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 44))
{var inst_12977 = (state_12984[2]);var state_12984__$1 = (function (){var statearr_13021 = state_12984;(statearr_13021[26] = inst_12977);
return statearr_13021;
})();var statearr_13022_13097 = state_12984__$1;(statearr_13022_13097[2] = null);
(statearr_13022_13097[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 13))
{var inst_12871 = (state_12984[24]);var inst_12874 = cljs.core.async.close_BANG_.call(null,inst_12871);var state_12984__$1 = state_12984;var statearr_13023_13098 = state_12984__$1;(statearr_13023_13098[2] = inst_12874);
(statearr_13023_13098[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 45))
{var inst_12974 = (state_12984[2]);var state_12984__$1 = state_12984;var statearr_13027_13099 = state_12984__$1;(statearr_13027_13099[2] = inst_12974);
(statearr_13027_13099[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 14))
{var state_12984__$1 = state_12984;var statearr_13028_13100 = state_12984__$1;(statearr_13028_13100[2] = null);
(statearr_13028_13100[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 15))
{var inst_12864 = (state_12984[14]);var inst_12863 = (state_12984[15]);var inst_12862 = (state_12984[16]);var inst_12861 = (state_12984[17]);var inst_12877 = (state_12984[2]);var inst_12878 = (inst_12864 + 1);var tmp13024 = inst_12863;var tmp13025 = inst_12862;var tmp13026 = inst_12861;var inst_12861__$1 = tmp13026;var inst_12862__$1 = tmp13025;var inst_12863__$1 = tmp13024;var inst_12864__$1 = inst_12878;var state_12984__$1 = (function (){var statearr_13029 = state_12984;(statearr_13029[14] = inst_12864__$1);
(statearr_13029[15] = inst_12863__$1);
(statearr_13029[16] = inst_12862__$1);
(statearr_13029[17] = inst_12861__$1);
(statearr_13029[27] = inst_12877);
return statearr_13029;
})();var statearr_13030_13101 = state_12984__$1;(statearr_13030_13101[2] = null);
(statearr_13030_13101[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 16))
{var inst_12881 = (state_12984[25]);var inst_12883 = cljs.core.chunked_seq_QMARK_.call(null,inst_12881);var state_12984__$1 = state_12984;if(inst_12883)
{var statearr_13031_13102 = state_12984__$1;(statearr_13031_13102[1] = 19);
} else
{var statearr_13032_13103 = state_12984__$1;(statearr_13032_13103[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 17))
{var state_12984__$1 = state_12984;var statearr_13033_13104 = state_12984__$1;(statearr_13033_13104[2] = null);
(statearr_13033_13104[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 18))
{var inst_12905 = (state_12984[2]);var state_12984__$1 = state_12984;var statearr_13034_13105 = state_12984__$1;(statearr_13034_13105[2] = inst_12905);
(statearr_13034_13105[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 19))
{var inst_12881 = (state_12984[25]);var inst_12885 = cljs.core.chunk_first.call(null,inst_12881);var inst_12886 = cljs.core.chunk_rest.call(null,inst_12881);var inst_12887 = cljs.core.count.call(null,inst_12885);var inst_12861 = inst_12886;var inst_12862 = inst_12885;var inst_12863 = inst_12887;var inst_12864 = 0;var state_12984__$1 = (function (){var statearr_13035 = state_12984;(statearr_13035[14] = inst_12864);
(statearr_13035[15] = inst_12863);
(statearr_13035[16] = inst_12862);
(statearr_13035[17] = inst_12861);
return statearr_13035;
})();var statearr_13036_13106 = state_12984__$1;(statearr_13036_13106[2] = null);
(statearr_13036_13106[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 20))
{var inst_12881 = (state_12984[25]);var inst_12891 = cljs.core.first.call(null,inst_12881);var inst_12892 = cljs.core.nth.call(null,inst_12891,0,null);var inst_12893 = cljs.core.nth.call(null,inst_12891,1,null);var state_12984__$1 = (function (){var statearr_13037 = state_12984;(statearr_13037[28] = inst_12892);
return statearr_13037;
})();if(cljs.core.truth_(inst_12893))
{var statearr_13038_13107 = state_12984__$1;(statearr_13038_13107[1] = 22);
} else
{var statearr_13039_13108 = state_12984__$1;(statearr_13039_13108[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 21))
{var inst_12902 = (state_12984[2]);var state_12984__$1 = state_12984;var statearr_13040_13109 = state_12984__$1;(statearr_13040_13109[2] = inst_12902);
(statearr_13040_13109[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 22))
{var inst_12892 = (state_12984[28]);var inst_12895 = cljs.core.async.close_BANG_.call(null,inst_12892);var state_12984__$1 = state_12984;var statearr_13041_13110 = state_12984__$1;(statearr_13041_13110[2] = inst_12895);
(statearr_13041_13110[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 23))
{var state_12984__$1 = state_12984;var statearr_13042_13111 = state_12984__$1;(statearr_13042_13111[2] = null);
(statearr_13042_13111[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 24))
{var inst_12881 = (state_12984[25]);var inst_12898 = (state_12984[2]);var inst_12899 = cljs.core.next.call(null,inst_12881);var inst_12861 = inst_12899;var inst_12862 = null;var inst_12863 = 0;var inst_12864 = 0;var state_12984__$1 = (function (){var statearr_13043 = state_12984;(statearr_13043[14] = inst_12864);
(statearr_13043[15] = inst_12863);
(statearr_13043[29] = inst_12898);
(statearr_13043[16] = inst_12862);
(statearr_13043[17] = inst_12861);
return statearr_13043;
})();var statearr_13044_13112 = state_12984__$1;(statearr_13044_13112[2] = null);
(statearr_13044_13112[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 25))
{var inst_12923 = (state_12984[10]);var inst_12922 = (state_12984[13]);var inst_12925 = (inst_12923 < inst_12922);var inst_12926 = inst_12925;var state_12984__$1 = state_12984;if(cljs.core.truth_(inst_12926))
{var statearr_13045_13113 = state_12984__$1;(statearr_13045_13113[1] = 27);
} else
{var statearr_13046_13114 = state_12984__$1;(statearr_13046_13114[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 26))
{var inst_12912 = (state_12984[19]);var inst_12970 = (state_12984[2]);var inst_12971 = cljs.core.seq.call(null,inst_12912);var state_12984__$1 = (function (){var statearr_13047 = state_12984;(statearr_13047[30] = inst_12970);
return statearr_13047;
})();if(inst_12971)
{var statearr_13048_13115 = state_12984__$1;(statearr_13048_13115[1] = 42);
} else
{var statearr_13049_13116 = state_12984__$1;(statearr_13049_13116[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 27))
{var inst_12923 = (state_12984[10]);var inst_12921 = (state_12984[12]);var inst_12928 = cljs.core._nth.call(null,inst_12921,inst_12923);var state_12984__$1 = (function (){var statearr_13050 = state_12984;(statearr_13050[7] = inst_12928);
return statearr_13050;
})();var statearr_13051_13117 = state_12984__$1;(statearr_13051_13117[2] = null);
(statearr_13051_13117[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 28))
{var inst_12941 = (state_12984[9]);var inst_12920 = (state_12984[11]);var inst_12941__$1 = cljs.core.seq.call(null,inst_12920);var state_12984__$1 = (function (){var statearr_13055 = state_12984;(statearr_13055[9] = inst_12941__$1);
return statearr_13055;
})();if(inst_12941__$1)
{var statearr_13056_13118 = state_12984__$1;(statearr_13056_13118[1] = 33);
} else
{var statearr_13057_13119 = state_12984__$1;(statearr_13057_13119[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 29))
{var inst_12968 = (state_12984[2]);var state_12984__$1 = state_12984;var statearr_13058_13120 = state_12984__$1;(statearr_13058_13120[2] = inst_12968);
(statearr_13058_13120[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 30))
{var inst_12923 = (state_12984[10]);var inst_12920 = (state_12984[11]);var inst_12921 = (state_12984[12]);var inst_12922 = (state_12984[13]);var inst_12937 = (state_12984[2]);var inst_12938 = (inst_12923 + 1);var tmp13052 = inst_12920;var tmp13053 = inst_12921;var tmp13054 = inst_12922;var inst_12920__$1 = tmp13052;var inst_12921__$1 = tmp13053;var inst_12922__$1 = tmp13054;var inst_12923__$1 = inst_12938;var state_12984__$1 = (function (){var statearr_13059 = state_12984;(statearr_13059[10] = inst_12923__$1);
(statearr_13059[31] = inst_12937);
(statearr_13059[11] = inst_12920__$1);
(statearr_13059[12] = inst_12921__$1);
(statearr_13059[13] = inst_12922__$1);
return statearr_13059;
})();var statearr_13060_13121 = state_12984__$1;(statearr_13060_13121[2] = null);
(statearr_13060_13121[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 31))
{var inst_12928 = (state_12984[7]);var inst_12929 = (state_12984[2]);var inst_12930 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12931 = cljs.core.async.untap_STAR_.call(null,m,inst_12928);var state_12984__$1 = (function (){var statearr_13061 = state_12984;(statearr_13061[32] = inst_12930);
(statearr_13061[33] = inst_12929);
return statearr_13061;
})();var statearr_13062_13122 = state_12984__$1;(statearr_13062_13122[2] = inst_12931);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12984__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_13066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13066[0] = state_machine__5548__auto__);
(statearr_13066[1] = 1);
return statearr_13066;
});
var state_machine__5548__auto____1 = (function (state_12984){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_12984);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e13067){if((e13067 instanceof Object))
{var ex__5551__auto__ = e13067;var statearr_13068_13123 = state_12984;(statearr_13068_13123[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12984);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13067;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13124 = state_12984;
state_12984 = G__13124;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_12984){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_12984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_13069 = f__5563__auto__.call(null);(statearr_13069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___13070);
return statearr_13069;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj13126 = {};return obj13126;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t13236 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13236 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13237){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta13237 = meta13237;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13236.cljs$lang$type = true;
cljs.core.async.t13236.cljs$lang$ctorStr = "cljs.core.async/t13236";
cljs.core.async.t13236.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t13236");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13236.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13236.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13236.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13236.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13236.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13236.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13236.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13236.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13236.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13238){var self__ = this;
var _13238__$1 = this;return self__.meta13237;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13238,meta13237__$1){var self__ = this;
var _13238__$1 = this;return (new cljs.core.async.t13236(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13237__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13236 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13236(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13237){return (new cljs.core.async.t13236(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13237));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13236(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5562__auto___13345 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_13303){var state_val_13304 = (state_13303[1]);if((state_val_13304 === 1))
{var inst_13242 = (state_13303[7]);var inst_13242__$1 = calc_state.call(null);var inst_13243 = cljs.core.seq_QMARK_.call(null,inst_13242__$1);var state_13303__$1 = (function (){var statearr_13305 = state_13303;(statearr_13305[7] = inst_13242__$1);
return statearr_13305;
})();if(inst_13243)
{var statearr_13306_13346 = state_13303__$1;(statearr_13306_13346[1] = 2);
} else
{var statearr_13307_13347 = state_13303__$1;(statearr_13307_13347[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13304 === 2))
{var inst_13242 = (state_13303[7]);var inst_13245 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13242);var state_13303__$1 = state_13303;var statearr_13308_13348 = state_13303__$1;(statearr_13308_13348[2] = inst_13245);
(statearr_13308_13348[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13304 === 3))
{var inst_13242 = (state_13303[7]);var state_13303__$1 = state_13303;var statearr_13309_13349 = state_13303__$1;(statearr_13309_13349[2] = inst_13242);
(statearr_13309_13349[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13304 === 4))
{var inst_13242 = (state_13303[7]);var inst_13248 = (state_13303[2]);var inst_13249 = cljs.core.get.call(null,inst_13248,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13250 = cljs.core.get.call(null,inst_13248,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13251 = cljs.core.get.call(null,inst_13248,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13252 = inst_13242;var state_13303__$1 = (function (){var statearr_13310 = state_13303;(statearr_13310[8] = inst_13252);
(statearr_13310[9] = inst_13251);
(statearr_13310[10] = inst_13250);
(statearr_13310[11] = inst_13249);
return statearr_13310;
})();var statearr_13311_13350 = state_13303__$1;(statearr_13311_13350[2] = null);
(statearr_13311_13350[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13304 === 5))
{var inst_13252 = (state_13303[8]);var inst_13255 = cljs.core.seq_QMARK_.call(null,inst_13252);var state_13303__$1 = state_13303;if(inst_13255)
{var statearr_13312_13351 = state_13303__$1;(statearr_13312_13351[1] = 7);
} else
{var statearr_13313_13352 = state_13303__$1;(statearr_13313_13352[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13304 === 6))
{var inst_13301 = (state_13303[2]);var state_13303__$1 = state_13303;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13303__$1,inst_13301);
} else
{if((state_val_13304 === 7))
{var inst_13252 = (state_13303[8]);var inst_13257 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13252);var state_13303__$1 = state_13303;var statearr_13314_13353 = state_13303__$1;(statearr_13314_13353[2] = inst_13257);
(statearr_13314_13353[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13304 === 8))
{var inst_13252 = (state_13303[8]);var state_13303__$1 = state_13303;var statearr_13315_13354 = state_13303__$1;(statearr_13315_13354[2] = inst_13252);
(statearr_13315_13354[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13304 === 9))
{var inst_13260 = (state_13303[12]);var inst_13260__$1 = (state_13303[2]);var inst_13261 = cljs.core.get.call(null,inst_13260__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13262 = cljs.core.get.call(null,inst_13260__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13263 = cljs.core.get.call(null,inst_13260__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13303__$1 = (function (){var statearr_13316 = state_13303;(statearr_13316[13] = inst_13263);
(statearr_13316[12] = inst_13260__$1);
(statearr_13316[14] = inst_13262);
return statearr_13316;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13303__$1,10,inst_13261);
} else
{if((state_val_13304 === 10))
{var inst_13268 = (state_13303[15]);var inst_13267 = (state_13303[16]);var inst_13266 = (state_13303[2]);var inst_13267__$1 = cljs.core.nth.call(null,inst_13266,0,null);var inst_13268__$1 = cljs.core.nth.call(null,inst_13266,1,null);var inst_13269 = (inst_13267__$1 == null);var inst_13270 = cljs.core._EQ_.call(null,inst_13268__$1,change);var inst_13271 = (inst_13269) || (inst_13270);var state_13303__$1 = (function (){var statearr_13317 = state_13303;(statearr_13317[15] = inst_13268__$1);
(statearr_13317[16] = inst_13267__$1);
return statearr_13317;
})();if(cljs.core.truth_(inst_13271))
{var statearr_13318_13355 = state_13303__$1;(statearr_13318_13355[1] = 11);
} else
{var statearr_13319_13356 = state_13303__$1;(statearr_13319_13356[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13304 === 11))
{var inst_13267 = (state_13303[16]);var inst_13273 = (inst_13267 == null);var state_13303__$1 = state_13303;if(cljs.core.truth_(inst_13273))
{var statearr_13320_13357 = state_13303__$1;(statearr_13320_13357[1] = 14);
} else
{var statearr_13321_13358 = state_13303__$1;(statearr_13321_13358[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13304 === 12))
{var inst_13282 = (state_13303[17]);var inst_13268 = (state_13303[15]);var inst_13263 = (state_13303[13]);var inst_13282__$1 = inst_13263.call(null,inst_13268);var state_13303__$1 = (function (){var statearr_13322 = state_13303;(statearr_13322[17] = inst_13282__$1);
return statearr_13322;
})();if(cljs.core.truth_(inst_13282__$1))
{var statearr_13323_13359 = state_13303__$1;(statearr_13323_13359[1] = 17);
} else
{var statearr_13324_13360 = state_13303__$1;(statearr_13324_13360[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13304 === 13))
{var inst_13299 = (state_13303[2]);var state_13303__$1 = state_13303;var statearr_13325_13361 = state_13303__$1;(statearr_13325_13361[2] = inst_13299);
(statearr_13325_13361[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13304 === 14))
{var inst_13268 = (state_13303[15]);var inst_13275 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13268);var state_13303__$1 = state_13303;var statearr_13326_13362 = state_13303__$1;(statearr_13326_13362[2] = inst_13275);
(statearr_13326_13362[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13304 === 15))
{var state_13303__$1 = state_13303;var statearr_13327_13363 = state_13303__$1;(statearr_13327_13363[2] = null);
(statearr_13327_13363[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13304 === 16))
{var inst_13278 = (state_13303[2]);var inst_13279 = calc_state.call(null);var inst_13252 = inst_13279;var state_13303__$1 = (function (){var statearr_13328 = state_13303;(statearr_13328[18] = inst_13278);
(statearr_13328[8] = inst_13252);
return statearr_13328;
})();var statearr_13329_13364 = state_13303__$1;(statearr_13329_13364[2] = null);
(statearr_13329_13364[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13304 === 17))
{var inst_13282 = (state_13303[17]);var state_13303__$1 = state_13303;var statearr_13330_13365 = state_13303__$1;(statearr_13330_13365[2] = inst_13282);
(statearr_13330_13365[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13304 === 18))
{var inst_13268 = (state_13303[15]);var inst_13263 = (state_13303[13]);var inst_13262 = (state_13303[14]);var inst_13285 = cljs.core.empty_QMARK_.call(null,inst_13263);var inst_13286 = inst_13262.call(null,inst_13268);var inst_13287 = cljs.core.not.call(null,inst_13286);var inst_13288 = (inst_13285) && (inst_13287);var state_13303__$1 = state_13303;var statearr_13331_13366 = state_13303__$1;(statearr_13331_13366[2] = inst_13288);
(statearr_13331_13366[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13304 === 19))
{var inst_13290 = (state_13303[2]);var state_13303__$1 = state_13303;if(cljs.core.truth_(inst_13290))
{var statearr_13332_13367 = state_13303__$1;(statearr_13332_13367[1] = 20);
} else
{var statearr_13333_13368 = state_13303__$1;(statearr_13333_13368[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13304 === 20))
{var inst_13267 = (state_13303[16]);var state_13303__$1 = state_13303;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13303__$1,23,out,inst_13267);
} else
{if((state_val_13304 === 21))
{var state_13303__$1 = state_13303;var statearr_13334_13369 = state_13303__$1;(statearr_13334_13369[2] = null);
(statearr_13334_13369[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13304 === 22))
{var inst_13260 = (state_13303[12]);var inst_13296 = (state_13303[2]);var inst_13252 = inst_13260;var state_13303__$1 = (function (){var statearr_13335 = state_13303;(statearr_13335[19] = inst_13296);
(statearr_13335[8] = inst_13252);
return statearr_13335;
})();var statearr_13336_13370 = state_13303__$1;(statearr_13336_13370[2] = null);
(statearr_13336_13370[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13304 === 23))
{var inst_13293 = (state_13303[2]);var state_13303__$1 = state_13303;var statearr_13337_13371 = state_13303__$1;(statearr_13337_13371[2] = inst_13293);
(statearr_13337_13371[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_13341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13341[0] = state_machine__5548__auto__);
(statearr_13341[1] = 1);
return statearr_13341;
});
var state_machine__5548__auto____1 = (function (state_13303){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_13303);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e13342){if((e13342 instanceof Object))
{var ex__5551__auto__ = e13342;var statearr_13343_13372 = state_13303;(statearr_13343_13372[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13303);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13342;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13373 = state_13303;
state_13303 = G__13373;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_13303){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_13303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_13344 = f__5563__auto__.call(null);(statearr_13344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___13345);
return statearr_13344;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj13375 = {};return obj13375;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3441__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3441__auto__,mults){
return (function (p1__13376_SHARP_){if(cljs.core.truth_(p1__13376_SHARP_.call(null,topic)))
{return p1__13376_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13376_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3441__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13501 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13501 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13502){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13502 = meta13502;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13501.cljs$lang$type = true;
cljs.core.async.t13501.cljs$lang$ctorStr = "cljs.core.async/t13501";
cljs.core.async.t13501.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t13501");
});})(mults,ensure_mult))
;
cljs.core.async.t13501.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13501.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13501.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13501.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13501.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13501.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13501.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13501.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13503){var self__ = this;
var _13503__$1 = this;return self__.meta13502;
});})(mults,ensure_mult))
;
cljs.core.async.t13501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13503,meta13502__$1){var self__ = this;
var _13503__$1 = this;return (new cljs.core.async.t13501(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13502__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13501 = ((function (mults,ensure_mult){
return (function __GT_t13501(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13502){return (new cljs.core.async.t13501(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13502));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13501(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5562__auto___13625 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_13577){var state_val_13578 = (state_13577[1]);if((state_val_13578 === 1))
{var state_13577__$1 = state_13577;var statearr_13579_13626 = state_13577__$1;(statearr_13579_13626[2] = null);
(statearr_13579_13626[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 2))
{var state_13577__$1 = state_13577;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13577__$1,4,ch);
} else
{if((state_val_13578 === 3))
{var inst_13575 = (state_13577[2]);var state_13577__$1 = state_13577;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13577__$1,inst_13575);
} else
{if((state_val_13578 === 4))
{var inst_13506 = (state_13577[7]);var inst_13506__$1 = (state_13577[2]);var inst_13507 = (inst_13506__$1 == null);var state_13577__$1 = (function (){var statearr_13580 = state_13577;(statearr_13580[7] = inst_13506__$1);
return statearr_13580;
})();if(cljs.core.truth_(inst_13507))
{var statearr_13581_13627 = state_13577__$1;(statearr_13581_13627[1] = 5);
} else
{var statearr_13582_13628 = state_13577__$1;(statearr_13582_13628[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 5))
{var inst_13513 = cljs.core.deref.call(null,mults);var inst_13514 = cljs.core.vals.call(null,inst_13513);var inst_13515 = cljs.core.seq.call(null,inst_13514);var inst_13516 = inst_13515;var inst_13517 = null;var inst_13518 = 0;var inst_13519 = 0;var state_13577__$1 = (function (){var statearr_13583 = state_13577;(statearr_13583[8] = inst_13516);
(statearr_13583[9] = inst_13518);
(statearr_13583[10] = inst_13517);
(statearr_13583[11] = inst_13519);
return statearr_13583;
})();var statearr_13584_13629 = state_13577__$1;(statearr_13584_13629[2] = null);
(statearr_13584_13629[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 6))
{var inst_13556 = (state_13577[12]);var inst_13554 = (state_13577[13]);var inst_13506 = (state_13577[7]);var inst_13554__$1 = topic_fn.call(null,inst_13506);var inst_13555 = cljs.core.deref.call(null,mults);var inst_13556__$1 = cljs.core.get.call(null,inst_13555,inst_13554__$1);var state_13577__$1 = (function (){var statearr_13585 = state_13577;(statearr_13585[12] = inst_13556__$1);
(statearr_13585[13] = inst_13554__$1);
return statearr_13585;
})();if(cljs.core.truth_(inst_13556__$1))
{var statearr_13586_13630 = state_13577__$1;(statearr_13586_13630[1] = 19);
} else
{var statearr_13587_13631 = state_13577__$1;(statearr_13587_13631[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 7))
{var inst_13573 = (state_13577[2]);var state_13577__$1 = state_13577;var statearr_13588_13632 = state_13577__$1;(statearr_13588_13632[2] = inst_13573);
(statearr_13588_13632[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 8))
{var inst_13518 = (state_13577[9]);var inst_13519 = (state_13577[11]);var inst_13521 = (inst_13519 < inst_13518);var inst_13522 = inst_13521;var state_13577__$1 = state_13577;if(cljs.core.truth_(inst_13522))
{var statearr_13592_13633 = state_13577__$1;(statearr_13592_13633[1] = 10);
} else
{var statearr_13593_13634 = state_13577__$1;(statearr_13593_13634[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 9))
{var inst_13552 = (state_13577[2]);var state_13577__$1 = state_13577;var statearr_13594_13635 = state_13577__$1;(statearr_13594_13635[2] = inst_13552);
(statearr_13594_13635[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 10))
{var inst_13516 = (state_13577[8]);var inst_13518 = (state_13577[9]);var inst_13517 = (state_13577[10]);var inst_13519 = (state_13577[11]);var inst_13524 = cljs.core._nth.call(null,inst_13517,inst_13519);var inst_13525 = cljs.core.async.muxch_STAR_.call(null,inst_13524);var inst_13526 = cljs.core.async.close_BANG_.call(null,inst_13525);var inst_13527 = (inst_13519 + 1);var tmp13589 = inst_13516;var tmp13590 = inst_13518;var tmp13591 = inst_13517;var inst_13516__$1 = tmp13589;var inst_13517__$1 = tmp13591;var inst_13518__$1 = tmp13590;var inst_13519__$1 = inst_13527;var state_13577__$1 = (function (){var statearr_13595 = state_13577;(statearr_13595[8] = inst_13516__$1);
(statearr_13595[9] = inst_13518__$1);
(statearr_13595[10] = inst_13517__$1);
(statearr_13595[11] = inst_13519__$1);
(statearr_13595[14] = inst_13526);
return statearr_13595;
})();var statearr_13596_13636 = state_13577__$1;(statearr_13596_13636[2] = null);
(statearr_13596_13636[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 11))
{var inst_13516 = (state_13577[8]);var inst_13530 = (state_13577[15]);var inst_13530__$1 = cljs.core.seq.call(null,inst_13516);var state_13577__$1 = (function (){var statearr_13597 = state_13577;(statearr_13597[15] = inst_13530__$1);
return statearr_13597;
})();if(inst_13530__$1)
{var statearr_13598_13637 = state_13577__$1;(statearr_13598_13637[1] = 13);
} else
{var statearr_13599_13638 = state_13577__$1;(statearr_13599_13638[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 12))
{var inst_13550 = (state_13577[2]);var state_13577__$1 = state_13577;var statearr_13600_13639 = state_13577__$1;(statearr_13600_13639[2] = inst_13550);
(statearr_13600_13639[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 13))
{var inst_13530 = (state_13577[15]);var inst_13532 = cljs.core.chunked_seq_QMARK_.call(null,inst_13530);var state_13577__$1 = state_13577;if(inst_13532)
{var statearr_13601_13640 = state_13577__$1;(statearr_13601_13640[1] = 16);
} else
{var statearr_13602_13641 = state_13577__$1;(statearr_13602_13641[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 14))
{var state_13577__$1 = state_13577;var statearr_13603_13642 = state_13577__$1;(statearr_13603_13642[2] = null);
(statearr_13603_13642[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 15))
{var inst_13548 = (state_13577[2]);var state_13577__$1 = state_13577;var statearr_13604_13643 = state_13577__$1;(statearr_13604_13643[2] = inst_13548);
(statearr_13604_13643[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 16))
{var inst_13530 = (state_13577[15]);var inst_13534 = cljs.core.chunk_first.call(null,inst_13530);var inst_13535 = cljs.core.chunk_rest.call(null,inst_13530);var inst_13536 = cljs.core.count.call(null,inst_13534);var inst_13516 = inst_13535;var inst_13517 = inst_13534;var inst_13518 = inst_13536;var inst_13519 = 0;var state_13577__$1 = (function (){var statearr_13605 = state_13577;(statearr_13605[8] = inst_13516);
(statearr_13605[9] = inst_13518);
(statearr_13605[10] = inst_13517);
(statearr_13605[11] = inst_13519);
return statearr_13605;
})();var statearr_13606_13644 = state_13577__$1;(statearr_13606_13644[2] = null);
(statearr_13606_13644[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 17))
{var inst_13530 = (state_13577[15]);var inst_13539 = cljs.core.first.call(null,inst_13530);var inst_13540 = cljs.core.async.muxch_STAR_.call(null,inst_13539);var inst_13541 = cljs.core.async.close_BANG_.call(null,inst_13540);var inst_13542 = cljs.core.next.call(null,inst_13530);var inst_13516 = inst_13542;var inst_13517 = null;var inst_13518 = 0;var inst_13519 = 0;var state_13577__$1 = (function (){var statearr_13607 = state_13577;(statearr_13607[8] = inst_13516);
(statearr_13607[9] = inst_13518);
(statearr_13607[16] = inst_13541);
(statearr_13607[10] = inst_13517);
(statearr_13607[11] = inst_13519);
return statearr_13607;
})();var statearr_13608_13645 = state_13577__$1;(statearr_13608_13645[2] = null);
(statearr_13608_13645[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 18))
{var inst_13545 = (state_13577[2]);var state_13577__$1 = state_13577;var statearr_13609_13646 = state_13577__$1;(statearr_13609_13646[2] = inst_13545);
(statearr_13609_13646[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 19))
{var state_13577__$1 = state_13577;var statearr_13610_13647 = state_13577__$1;(statearr_13610_13647[2] = null);
(statearr_13610_13647[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 20))
{var state_13577__$1 = state_13577;var statearr_13611_13648 = state_13577__$1;(statearr_13611_13648[2] = null);
(statearr_13611_13648[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 21))
{var inst_13570 = (state_13577[2]);var state_13577__$1 = (function (){var statearr_13612 = state_13577;(statearr_13612[17] = inst_13570);
return statearr_13612;
})();var statearr_13613_13649 = state_13577__$1;(statearr_13613_13649[2] = null);
(statearr_13613_13649[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 22))
{var inst_13567 = (state_13577[2]);var state_13577__$1 = state_13577;var statearr_13614_13650 = state_13577__$1;(statearr_13614_13650[2] = inst_13567);
(statearr_13614_13650[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 23))
{var inst_13554 = (state_13577[13]);var inst_13558 = (state_13577[2]);var inst_13559 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13554);var state_13577__$1 = (function (){var statearr_13615 = state_13577;(statearr_13615[18] = inst_13558);
return statearr_13615;
})();var statearr_13616_13651 = state_13577__$1;(statearr_13616_13651[2] = inst_13559);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13577__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 24))
{var inst_13556 = (state_13577[12]);var inst_13506 = (state_13577[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13577,23,Object,null,22);var inst_13563 = cljs.core.async.muxch_STAR_.call(null,inst_13556);var state_13577__$1 = state_13577;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13577__$1,25,inst_13563,inst_13506);
} else
{if((state_val_13578 === 25))
{var inst_13565 = (state_13577[2]);var state_13577__$1 = state_13577;var statearr_13617_13652 = state_13577__$1;(statearr_13617_13652[2] = inst_13565);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13577__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_13621 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13621[0] = state_machine__5548__auto__);
(statearr_13621[1] = 1);
return statearr_13621;
});
var state_machine__5548__auto____1 = (function (state_13577){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_13577);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e13622){if((e13622 instanceof Object))
{var ex__5551__auto__ = e13622;var statearr_13623_13653 = state_13577;(statearr_13623_13653[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13577);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13622;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13654 = state_13577;
state_13577 = G__13654;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_13577){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_13577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_13624 = f__5563__auto__.call(null);(statearr_13624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___13625);
return statearr_13624;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5562__auto___13791 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_13761){var state_val_13762 = (state_13761[1]);if((state_val_13762 === 1))
{var state_13761__$1 = state_13761;var statearr_13763_13792 = state_13761__$1;(statearr_13763_13792[2] = null);
(statearr_13763_13792[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 2))
{var inst_13724 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13725 = 0;var state_13761__$1 = (function (){var statearr_13764 = state_13761;(statearr_13764[7] = inst_13724);
(statearr_13764[8] = inst_13725);
return statearr_13764;
})();var statearr_13765_13793 = state_13761__$1;(statearr_13765_13793[2] = null);
(statearr_13765_13793[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 3))
{var inst_13759 = (state_13761[2]);var state_13761__$1 = state_13761;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13761__$1,inst_13759);
} else
{if((state_val_13762 === 4))
{var inst_13725 = (state_13761[8]);var inst_13727 = (inst_13725 < cnt);var state_13761__$1 = state_13761;if(cljs.core.truth_(inst_13727))
{var statearr_13766_13794 = state_13761__$1;(statearr_13766_13794[1] = 6);
} else
{var statearr_13767_13795 = state_13761__$1;(statearr_13767_13795[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 5))
{var inst_13745 = (state_13761[2]);var state_13761__$1 = (function (){var statearr_13768 = state_13761;(statearr_13768[9] = inst_13745);
return statearr_13768;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13761__$1,12,dchan);
} else
{if((state_val_13762 === 6))
{var state_13761__$1 = state_13761;var statearr_13769_13796 = state_13761__$1;(statearr_13769_13796[2] = null);
(statearr_13769_13796[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 7))
{var state_13761__$1 = state_13761;var statearr_13770_13797 = state_13761__$1;(statearr_13770_13797[2] = null);
(statearr_13770_13797[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 8))
{var inst_13743 = (state_13761[2]);var state_13761__$1 = state_13761;var statearr_13771_13798 = state_13761__$1;(statearr_13771_13798[2] = inst_13743);
(statearr_13771_13798[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 9))
{var inst_13725 = (state_13761[8]);var inst_13738 = (state_13761[2]);var inst_13739 = (inst_13725 + 1);var inst_13725__$1 = inst_13739;var state_13761__$1 = (function (){var statearr_13772 = state_13761;(statearr_13772[10] = inst_13738);
(statearr_13772[8] = inst_13725__$1);
return statearr_13772;
})();var statearr_13773_13799 = state_13761__$1;(statearr_13773_13799[2] = null);
(statearr_13773_13799[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 10))
{var inst_13729 = (state_13761[2]);var inst_13730 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13761__$1 = (function (){var statearr_13774 = state_13761;(statearr_13774[11] = inst_13729);
return statearr_13774;
})();var statearr_13775_13800 = state_13761__$1;(statearr_13775_13800[2] = inst_13730);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13761__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 11))
{var inst_13725 = (state_13761[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13761,10,Object,null,9);var inst_13734 = chs__$1.call(null,inst_13725);var inst_13735 = done.call(null,inst_13725);var inst_13736 = cljs.core.async.take_BANG_.call(null,inst_13734,inst_13735);var state_13761__$1 = state_13761;var statearr_13776_13801 = state_13761__$1;(statearr_13776_13801[2] = inst_13736);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13761__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 12))
{var inst_13747 = (state_13761[12]);var inst_13747__$1 = (state_13761[2]);var inst_13748 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13747__$1);var state_13761__$1 = (function (){var statearr_13777 = state_13761;(statearr_13777[12] = inst_13747__$1);
return statearr_13777;
})();if(cljs.core.truth_(inst_13748))
{var statearr_13778_13802 = state_13761__$1;(statearr_13778_13802[1] = 13);
} else
{var statearr_13779_13803 = state_13761__$1;(statearr_13779_13803[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 13))
{var inst_13750 = cljs.core.async.close_BANG_.call(null,out);var state_13761__$1 = state_13761;var statearr_13780_13804 = state_13761__$1;(statearr_13780_13804[2] = inst_13750);
(statearr_13780_13804[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 14))
{var inst_13747 = (state_13761[12]);var inst_13752 = cljs.core.apply.call(null,f,inst_13747);var state_13761__$1 = state_13761;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13761__$1,16,out,inst_13752);
} else
{if((state_val_13762 === 15))
{var inst_13757 = (state_13761[2]);var state_13761__$1 = state_13761;var statearr_13781_13805 = state_13761__$1;(statearr_13781_13805[2] = inst_13757);
(statearr_13781_13805[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13762 === 16))
{var inst_13754 = (state_13761[2]);var state_13761__$1 = (function (){var statearr_13782 = state_13761;(statearr_13782[13] = inst_13754);
return statearr_13782;
})();var statearr_13783_13806 = state_13761__$1;(statearr_13783_13806[2] = null);
(statearr_13783_13806[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_13787 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13787[0] = state_machine__5548__auto__);
(statearr_13787[1] = 1);
return statearr_13787;
});
var state_machine__5548__auto____1 = (function (state_13761){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_13761);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e13788){if((e13788 instanceof Object))
{var ex__5551__auto__ = e13788;var statearr_13789_13807 = state_13761;(statearr_13789_13807[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13761);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13788;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13808 = state_13761;
state_13761 = G__13808;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_13761){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_13761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_13790 = f__5563__auto__.call(null);(statearr_13790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___13791);
return statearr_13790;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___13916 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_13892){var state_val_13893 = (state_13892[1]);if((state_val_13893 === 1))
{var inst_13863 = cljs.core.vec.call(null,chs);var inst_13864 = inst_13863;var state_13892__$1 = (function (){var statearr_13894 = state_13892;(statearr_13894[7] = inst_13864);
return statearr_13894;
})();var statearr_13895_13917 = state_13892__$1;(statearr_13895_13917[2] = null);
(statearr_13895_13917[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13893 === 2))
{var inst_13864 = (state_13892[7]);var inst_13866 = cljs.core.count.call(null,inst_13864);var inst_13867 = (inst_13866 > 0);var state_13892__$1 = state_13892;if(cljs.core.truth_(inst_13867))
{var statearr_13896_13918 = state_13892__$1;(statearr_13896_13918[1] = 4);
} else
{var statearr_13897_13919 = state_13892__$1;(statearr_13897_13919[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13893 === 3))
{var inst_13890 = (state_13892[2]);var state_13892__$1 = state_13892;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13892__$1,inst_13890);
} else
{if((state_val_13893 === 4))
{var inst_13864 = (state_13892[7]);var state_13892__$1 = state_13892;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13892__$1,7,inst_13864);
} else
{if((state_val_13893 === 5))
{var inst_13886 = cljs.core.async.close_BANG_.call(null,out);var state_13892__$1 = state_13892;var statearr_13898_13920 = state_13892__$1;(statearr_13898_13920[2] = inst_13886);
(statearr_13898_13920[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13893 === 6))
{var inst_13888 = (state_13892[2]);var state_13892__$1 = state_13892;var statearr_13899_13921 = state_13892__$1;(statearr_13899_13921[2] = inst_13888);
(statearr_13899_13921[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13893 === 7))
{var inst_13871 = (state_13892[8]);var inst_13872 = (state_13892[9]);var inst_13871__$1 = (state_13892[2]);var inst_13872__$1 = cljs.core.nth.call(null,inst_13871__$1,0,null);var inst_13873 = cljs.core.nth.call(null,inst_13871__$1,1,null);var inst_13874 = (inst_13872__$1 == null);var state_13892__$1 = (function (){var statearr_13900 = state_13892;(statearr_13900[8] = inst_13871__$1);
(statearr_13900[10] = inst_13873);
(statearr_13900[9] = inst_13872__$1);
return statearr_13900;
})();if(cljs.core.truth_(inst_13874))
{var statearr_13901_13922 = state_13892__$1;(statearr_13901_13922[1] = 8);
} else
{var statearr_13902_13923 = state_13892__$1;(statearr_13902_13923[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13893 === 8))
{var inst_13871 = (state_13892[8]);var inst_13873 = (state_13892[10]);var inst_13872 = (state_13892[9]);var inst_13864 = (state_13892[7]);var inst_13876 = (function (){var c = inst_13873;var v = inst_13872;var vec__13869 = inst_13871;var cs = inst_13864;return ((function (c,v,vec__13869,cs,inst_13871,inst_13873,inst_13872,inst_13864,state_val_13893){
return (function (p1__13809_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13809_SHARP_);
});
;})(c,v,vec__13869,cs,inst_13871,inst_13873,inst_13872,inst_13864,state_val_13893))
})();var inst_13877 = cljs.core.filterv.call(null,inst_13876,inst_13864);var inst_13864__$1 = inst_13877;var state_13892__$1 = (function (){var statearr_13903 = state_13892;(statearr_13903[7] = inst_13864__$1);
return statearr_13903;
})();var statearr_13904_13924 = state_13892__$1;(statearr_13904_13924[2] = null);
(statearr_13904_13924[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13893 === 9))
{var inst_13872 = (state_13892[9]);var state_13892__$1 = state_13892;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13892__$1,11,out,inst_13872);
} else
{if((state_val_13893 === 10))
{var inst_13884 = (state_13892[2]);var state_13892__$1 = state_13892;var statearr_13906_13925 = state_13892__$1;(statearr_13906_13925[2] = inst_13884);
(statearr_13906_13925[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13893 === 11))
{var inst_13864 = (state_13892[7]);var inst_13881 = (state_13892[2]);var tmp13905 = inst_13864;var inst_13864__$1 = tmp13905;var state_13892__$1 = (function (){var statearr_13907 = state_13892;(statearr_13907[11] = inst_13881);
(statearr_13907[7] = inst_13864__$1);
return statearr_13907;
})();var statearr_13908_13926 = state_13892__$1;(statearr_13908_13926[2] = null);
(statearr_13908_13926[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_13912 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13912[0] = state_machine__5548__auto__);
(statearr_13912[1] = 1);
return statearr_13912;
});
var state_machine__5548__auto____1 = (function (state_13892){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_13892);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e13913){if((e13913 instanceof Object))
{var ex__5551__auto__ = e13913;var statearr_13914_13927 = state_13892;(statearr_13914_13927[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13892);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13913;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13928 = state_13892;
state_13892 = G__13928;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_13892){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_13892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_13915 = f__5563__auto__.call(null);(statearr_13915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___13916);
return statearr_13915;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___14021 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_13998){var state_val_13999 = (state_13998[1]);if((state_val_13999 === 1))
{var inst_13975 = 0;var state_13998__$1 = (function (){var statearr_14000 = state_13998;(statearr_14000[7] = inst_13975);
return statearr_14000;
})();var statearr_14001_14022 = state_13998__$1;(statearr_14001_14022[2] = null);
(statearr_14001_14022[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13999 === 2))
{var inst_13975 = (state_13998[7]);var inst_13977 = (inst_13975 < n);var state_13998__$1 = state_13998;if(cljs.core.truth_(inst_13977))
{var statearr_14002_14023 = state_13998__$1;(statearr_14002_14023[1] = 4);
} else
{var statearr_14003_14024 = state_13998__$1;(statearr_14003_14024[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13999 === 3))
{var inst_13995 = (state_13998[2]);var inst_13996 = cljs.core.async.close_BANG_.call(null,out);var state_13998__$1 = (function (){var statearr_14004 = state_13998;(statearr_14004[8] = inst_13995);
return statearr_14004;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13998__$1,inst_13996);
} else
{if((state_val_13999 === 4))
{var state_13998__$1 = state_13998;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13998__$1,7,ch);
} else
{if((state_val_13999 === 5))
{var state_13998__$1 = state_13998;var statearr_14005_14025 = state_13998__$1;(statearr_14005_14025[2] = null);
(statearr_14005_14025[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13999 === 6))
{var inst_13993 = (state_13998[2]);var state_13998__$1 = state_13998;var statearr_14006_14026 = state_13998__$1;(statearr_14006_14026[2] = inst_13993);
(statearr_14006_14026[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13999 === 7))
{var inst_13980 = (state_13998[9]);var inst_13980__$1 = (state_13998[2]);var inst_13981 = (inst_13980__$1 == null);var inst_13982 = cljs.core.not.call(null,inst_13981);var state_13998__$1 = (function (){var statearr_14007 = state_13998;(statearr_14007[9] = inst_13980__$1);
return statearr_14007;
})();if(inst_13982)
{var statearr_14008_14027 = state_13998__$1;(statearr_14008_14027[1] = 8);
} else
{var statearr_14009_14028 = state_13998__$1;(statearr_14009_14028[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13999 === 8))
{var inst_13980 = (state_13998[9]);var state_13998__$1 = state_13998;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13998__$1,11,out,inst_13980);
} else
{if((state_val_13999 === 9))
{var state_13998__$1 = state_13998;var statearr_14010_14029 = state_13998__$1;(statearr_14010_14029[2] = null);
(statearr_14010_14029[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13999 === 10))
{var inst_13990 = (state_13998[2]);var state_13998__$1 = state_13998;var statearr_14011_14030 = state_13998__$1;(statearr_14011_14030[2] = inst_13990);
(statearr_14011_14030[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13999 === 11))
{var inst_13975 = (state_13998[7]);var inst_13985 = (state_13998[2]);var inst_13986 = (inst_13975 + 1);var inst_13975__$1 = inst_13986;var state_13998__$1 = (function (){var statearr_14012 = state_13998;(statearr_14012[10] = inst_13985);
(statearr_14012[7] = inst_13975__$1);
return statearr_14012;
})();var statearr_14013_14031 = state_13998__$1;(statearr_14013_14031[2] = null);
(statearr_14013_14031[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_14017 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14017[0] = state_machine__5548__auto__);
(statearr_14017[1] = 1);
return statearr_14017;
});
var state_machine__5548__auto____1 = (function (state_13998){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_13998);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14018){if((e14018 instanceof Object))
{var ex__5551__auto__ = e14018;var statearr_14019_14032 = state_13998;(statearr_14019_14032[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13998);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14018;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14033 = state_13998;
state_13998 = G__14033;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_13998){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_13998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14020 = f__5563__auto__.call(null);(statearr_14020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___14021);
return statearr_14020;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___14130 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14105){var state_val_14106 = (state_14105[1]);if((state_val_14106 === 1))
{var inst_14082 = null;var state_14105__$1 = (function (){var statearr_14107 = state_14105;(statearr_14107[7] = inst_14082);
return statearr_14107;
})();var statearr_14108_14131 = state_14105__$1;(statearr_14108_14131[2] = null);
(statearr_14108_14131[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14106 === 2))
{var state_14105__$1 = state_14105;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14105__$1,4,ch);
} else
{if((state_val_14106 === 3))
{var inst_14102 = (state_14105[2]);var inst_14103 = cljs.core.async.close_BANG_.call(null,out);var state_14105__$1 = (function (){var statearr_14109 = state_14105;(statearr_14109[8] = inst_14102);
return statearr_14109;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14105__$1,inst_14103);
} else
{if((state_val_14106 === 4))
{var inst_14085 = (state_14105[9]);var inst_14085__$1 = (state_14105[2]);var inst_14086 = (inst_14085__$1 == null);var inst_14087 = cljs.core.not.call(null,inst_14086);var state_14105__$1 = (function (){var statearr_14110 = state_14105;(statearr_14110[9] = inst_14085__$1);
return statearr_14110;
})();if(inst_14087)
{var statearr_14111_14132 = state_14105__$1;(statearr_14111_14132[1] = 5);
} else
{var statearr_14112_14133 = state_14105__$1;(statearr_14112_14133[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14106 === 5))
{var inst_14085 = (state_14105[9]);var inst_14082 = (state_14105[7]);var inst_14089 = cljs.core._EQ_.call(null,inst_14085,inst_14082);var state_14105__$1 = state_14105;if(inst_14089)
{var statearr_14113_14134 = state_14105__$1;(statearr_14113_14134[1] = 8);
} else
{var statearr_14114_14135 = state_14105__$1;(statearr_14114_14135[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14106 === 6))
{var state_14105__$1 = state_14105;var statearr_14116_14136 = state_14105__$1;(statearr_14116_14136[2] = null);
(statearr_14116_14136[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14106 === 7))
{var inst_14100 = (state_14105[2]);var state_14105__$1 = state_14105;var statearr_14117_14137 = state_14105__$1;(statearr_14117_14137[2] = inst_14100);
(statearr_14117_14137[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14106 === 8))
{var inst_14082 = (state_14105[7]);var tmp14115 = inst_14082;var inst_14082__$1 = tmp14115;var state_14105__$1 = (function (){var statearr_14118 = state_14105;(statearr_14118[7] = inst_14082__$1);
return statearr_14118;
})();var statearr_14119_14138 = state_14105__$1;(statearr_14119_14138[2] = null);
(statearr_14119_14138[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14106 === 9))
{var inst_14085 = (state_14105[9]);var state_14105__$1 = state_14105;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14105__$1,11,out,inst_14085);
} else
{if((state_val_14106 === 10))
{var inst_14097 = (state_14105[2]);var state_14105__$1 = state_14105;var statearr_14120_14139 = state_14105__$1;(statearr_14120_14139[2] = inst_14097);
(statearr_14120_14139[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14106 === 11))
{var inst_14085 = (state_14105[9]);var inst_14094 = (state_14105[2]);var inst_14082 = inst_14085;var state_14105__$1 = (function (){var statearr_14121 = state_14105;(statearr_14121[10] = inst_14094);
(statearr_14121[7] = inst_14082);
return statearr_14121;
})();var statearr_14122_14140 = state_14105__$1;(statearr_14122_14140[2] = null);
(statearr_14122_14140[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_14126 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14126[0] = state_machine__5548__auto__);
(statearr_14126[1] = 1);
return statearr_14126;
});
var state_machine__5548__auto____1 = (function (state_14105){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14105);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14127){if((e14127 instanceof Object))
{var ex__5551__auto__ = e14127;var statearr_14128_14141 = state_14105;(statearr_14128_14141[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14105);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14127;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14142 = state_14105;
state_14105 = G__14142;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14105){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14129 = f__5563__auto__.call(null);(statearr_14129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___14130);
return statearr_14129;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___14277 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14247){var state_val_14248 = (state_14247[1]);if((state_val_14248 === 1))
{var inst_14210 = (new Array(n));var inst_14211 = inst_14210;var inst_14212 = 0;var state_14247__$1 = (function (){var statearr_14249 = state_14247;(statearr_14249[7] = inst_14211);
(statearr_14249[8] = inst_14212);
return statearr_14249;
})();var statearr_14250_14278 = state_14247__$1;(statearr_14250_14278[2] = null);
(statearr_14250_14278[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14248 === 2))
{var state_14247__$1 = state_14247;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14247__$1,4,ch);
} else
{if((state_val_14248 === 3))
{var inst_14245 = (state_14247[2]);var state_14247__$1 = state_14247;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14247__$1,inst_14245);
} else
{if((state_val_14248 === 4))
{var inst_14215 = (state_14247[9]);var inst_14215__$1 = (state_14247[2]);var inst_14216 = (inst_14215__$1 == null);var inst_14217 = cljs.core.not.call(null,inst_14216);var state_14247__$1 = (function (){var statearr_14251 = state_14247;(statearr_14251[9] = inst_14215__$1);
return statearr_14251;
})();if(inst_14217)
{var statearr_14252_14279 = state_14247__$1;(statearr_14252_14279[1] = 5);
} else
{var statearr_14253_14280 = state_14247__$1;(statearr_14253_14280[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14248 === 5))
{var inst_14215 = (state_14247[9]);var inst_14211 = (state_14247[7]);var inst_14212 = (state_14247[8]);var inst_14220 = (state_14247[10]);var inst_14219 = (inst_14211[inst_14212] = inst_14215);var inst_14220__$1 = (inst_14212 + 1);var inst_14221 = (inst_14220__$1 < n);var state_14247__$1 = (function (){var statearr_14254 = state_14247;(statearr_14254[10] = inst_14220__$1);
(statearr_14254[11] = inst_14219);
return statearr_14254;
})();if(cljs.core.truth_(inst_14221))
{var statearr_14255_14281 = state_14247__$1;(statearr_14255_14281[1] = 8);
} else
{var statearr_14256_14282 = state_14247__$1;(statearr_14256_14282[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14248 === 6))
{var inst_14212 = (state_14247[8]);var inst_14233 = (inst_14212 > 0);var state_14247__$1 = state_14247;if(cljs.core.truth_(inst_14233))
{var statearr_14258_14283 = state_14247__$1;(statearr_14258_14283[1] = 12);
} else
{var statearr_14259_14284 = state_14247__$1;(statearr_14259_14284[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14248 === 7))
{var inst_14243 = (state_14247[2]);var state_14247__$1 = state_14247;var statearr_14260_14285 = state_14247__$1;(statearr_14260_14285[2] = inst_14243);
(statearr_14260_14285[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14248 === 8))
{var inst_14211 = (state_14247[7]);var inst_14220 = (state_14247[10]);var tmp14257 = inst_14211;var inst_14211__$1 = tmp14257;var inst_14212 = inst_14220;var state_14247__$1 = (function (){var statearr_14261 = state_14247;(statearr_14261[7] = inst_14211__$1);
(statearr_14261[8] = inst_14212);
return statearr_14261;
})();var statearr_14262_14286 = state_14247__$1;(statearr_14262_14286[2] = null);
(statearr_14262_14286[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14248 === 9))
{var inst_14211 = (state_14247[7]);var inst_14225 = cljs.core.vec.call(null,inst_14211);var state_14247__$1 = state_14247;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14247__$1,11,out,inst_14225);
} else
{if((state_val_14248 === 10))
{var inst_14231 = (state_14247[2]);var state_14247__$1 = state_14247;var statearr_14263_14287 = state_14247__$1;(statearr_14263_14287[2] = inst_14231);
(statearr_14263_14287[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14248 === 11))
{var inst_14227 = (state_14247[2]);var inst_14228 = (new Array(n));var inst_14211 = inst_14228;var inst_14212 = 0;var state_14247__$1 = (function (){var statearr_14264 = state_14247;(statearr_14264[7] = inst_14211);
(statearr_14264[8] = inst_14212);
(statearr_14264[12] = inst_14227);
return statearr_14264;
})();var statearr_14265_14288 = state_14247__$1;(statearr_14265_14288[2] = null);
(statearr_14265_14288[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14248 === 12))
{var inst_14211 = (state_14247[7]);var inst_14235 = cljs.core.vec.call(null,inst_14211);var state_14247__$1 = state_14247;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14247__$1,15,out,inst_14235);
} else
{if((state_val_14248 === 13))
{var state_14247__$1 = state_14247;var statearr_14266_14289 = state_14247__$1;(statearr_14266_14289[2] = null);
(statearr_14266_14289[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14248 === 14))
{var inst_14240 = (state_14247[2]);var inst_14241 = cljs.core.async.close_BANG_.call(null,out);var state_14247__$1 = (function (){var statearr_14267 = state_14247;(statearr_14267[13] = inst_14240);
return statearr_14267;
})();var statearr_14268_14290 = state_14247__$1;(statearr_14268_14290[2] = inst_14241);
(statearr_14268_14290[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14248 === 15))
{var inst_14237 = (state_14247[2]);var state_14247__$1 = state_14247;var statearr_14269_14291 = state_14247__$1;(statearr_14269_14291[2] = inst_14237);
(statearr_14269_14291[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_14273 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14273[0] = state_machine__5548__auto__);
(statearr_14273[1] = 1);
return statearr_14273;
});
var state_machine__5548__auto____1 = (function (state_14247){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14247);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14274){if((e14274 instanceof Object))
{var ex__5551__auto__ = e14274;var statearr_14275_14292 = state_14247;(statearr_14275_14292[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14247);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14274;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14293 = state_14247;
state_14247 = G__14293;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14247){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14276 = f__5563__auto__.call(null);(statearr_14276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___14277);
return statearr_14276;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___14436 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14406){var state_val_14407 = (state_14406[1]);if((state_val_14407 === 1))
{var inst_14365 = [];var inst_14366 = inst_14365;var inst_14367 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14406__$1 = (function (){var statearr_14408 = state_14406;(statearr_14408[7] = inst_14366);
(statearr_14408[8] = inst_14367);
return statearr_14408;
})();var statearr_14409_14437 = state_14406__$1;(statearr_14409_14437[2] = null);
(statearr_14409_14437[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14407 === 2))
{var state_14406__$1 = state_14406;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14406__$1,4,ch);
} else
{if((state_val_14407 === 3))
{var inst_14404 = (state_14406[2]);var state_14406__$1 = state_14406;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14406__$1,inst_14404);
} else
{if((state_val_14407 === 4))
{var inst_14370 = (state_14406[9]);var inst_14370__$1 = (state_14406[2]);var inst_14371 = (inst_14370__$1 == null);var inst_14372 = cljs.core.not.call(null,inst_14371);var state_14406__$1 = (function (){var statearr_14410 = state_14406;(statearr_14410[9] = inst_14370__$1);
return statearr_14410;
})();if(inst_14372)
{var statearr_14411_14438 = state_14406__$1;(statearr_14411_14438[1] = 5);
} else
{var statearr_14412_14439 = state_14406__$1;(statearr_14412_14439[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14407 === 5))
{var inst_14374 = (state_14406[10]);var inst_14370 = (state_14406[9]);var inst_14367 = (state_14406[8]);var inst_14374__$1 = f.call(null,inst_14370);var inst_14375 = cljs.core._EQ_.call(null,inst_14374__$1,inst_14367);var inst_14376 = cljs.core.keyword_identical_QMARK_.call(null,inst_14367,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14377 = (inst_14375) || (inst_14376);var state_14406__$1 = (function (){var statearr_14413 = state_14406;(statearr_14413[10] = inst_14374__$1);
return statearr_14413;
})();if(cljs.core.truth_(inst_14377))
{var statearr_14414_14440 = state_14406__$1;(statearr_14414_14440[1] = 8);
} else
{var statearr_14415_14441 = state_14406__$1;(statearr_14415_14441[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14407 === 6))
{var inst_14366 = (state_14406[7]);var inst_14391 = inst_14366.length;var inst_14392 = (inst_14391 > 0);var state_14406__$1 = state_14406;if(cljs.core.truth_(inst_14392))
{var statearr_14417_14442 = state_14406__$1;(statearr_14417_14442[1] = 12);
} else
{var statearr_14418_14443 = state_14406__$1;(statearr_14418_14443[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14407 === 7))
{var inst_14402 = (state_14406[2]);var state_14406__$1 = state_14406;var statearr_14419_14444 = state_14406__$1;(statearr_14419_14444[2] = inst_14402);
(statearr_14419_14444[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14407 === 8))
{var inst_14366 = (state_14406[7]);var inst_14374 = (state_14406[10]);var inst_14370 = (state_14406[9]);var inst_14379 = inst_14366.push(inst_14370);var tmp14416 = inst_14366;var inst_14366__$1 = tmp14416;var inst_14367 = inst_14374;var state_14406__$1 = (function (){var statearr_14420 = state_14406;(statearr_14420[7] = inst_14366__$1);
(statearr_14420[11] = inst_14379);
(statearr_14420[8] = inst_14367);
return statearr_14420;
})();var statearr_14421_14445 = state_14406__$1;(statearr_14421_14445[2] = null);
(statearr_14421_14445[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14407 === 9))
{var inst_14366 = (state_14406[7]);var inst_14382 = cljs.core.vec.call(null,inst_14366);var state_14406__$1 = state_14406;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14406__$1,11,out,inst_14382);
} else
{if((state_val_14407 === 10))
{var inst_14389 = (state_14406[2]);var state_14406__$1 = state_14406;var statearr_14422_14446 = state_14406__$1;(statearr_14422_14446[2] = inst_14389);
(statearr_14422_14446[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14407 === 11))
{var inst_14374 = (state_14406[10]);var inst_14370 = (state_14406[9]);var inst_14384 = (state_14406[2]);var inst_14385 = [];var inst_14386 = inst_14385.push(inst_14370);var inst_14366 = inst_14385;var inst_14367 = inst_14374;var state_14406__$1 = (function (){var statearr_14423 = state_14406;(statearr_14423[7] = inst_14366);
(statearr_14423[8] = inst_14367);
(statearr_14423[12] = inst_14386);
(statearr_14423[13] = inst_14384);
return statearr_14423;
})();var statearr_14424_14447 = state_14406__$1;(statearr_14424_14447[2] = null);
(statearr_14424_14447[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14407 === 12))
{var inst_14366 = (state_14406[7]);var inst_14394 = cljs.core.vec.call(null,inst_14366);var state_14406__$1 = state_14406;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14406__$1,15,out,inst_14394);
} else
{if((state_val_14407 === 13))
{var state_14406__$1 = state_14406;var statearr_14425_14448 = state_14406__$1;(statearr_14425_14448[2] = null);
(statearr_14425_14448[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14407 === 14))
{var inst_14399 = (state_14406[2]);var inst_14400 = cljs.core.async.close_BANG_.call(null,out);var state_14406__$1 = (function (){var statearr_14426 = state_14406;(statearr_14426[14] = inst_14399);
return statearr_14426;
})();var statearr_14427_14449 = state_14406__$1;(statearr_14427_14449[2] = inst_14400);
(statearr_14427_14449[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14407 === 15))
{var inst_14396 = (state_14406[2]);var state_14406__$1 = state_14406;var statearr_14428_14450 = state_14406__$1;(statearr_14428_14450[2] = inst_14396);
(statearr_14428_14450[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_14432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14432[0] = state_machine__5548__auto__);
(statearr_14432[1] = 1);
return statearr_14432;
});
var state_machine__5548__auto____1 = (function (state_14406){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14406);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14433){if((e14433 instanceof Object))
{var ex__5551__auto__ = e14433;var statearr_14434_14451 = state_14406;(statearr_14434_14451[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14406);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14433;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14452 = state_14406;
state_14406 = G__14452;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14406){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14435 = f__5563__auto__.call(null);(statearr_14435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___14436);
return statearr_14435;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map