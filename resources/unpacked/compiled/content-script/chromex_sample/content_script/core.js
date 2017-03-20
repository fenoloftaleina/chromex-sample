// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('chromex_sample.content_script.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('sonja.loader');
chromex_sample.content_script.core.init_BANG_ = (function chromex_sample$content_script$core$init_BANG_(){
var G__26171 = (function (){
return sonja.loader.set_hover_events_for_img_tags();
});
var G__26172 = (1000);
return setInterval(G__26171,G__26172);
});
