// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('sonja.loader');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('sonja.palettizer');
sonja.loader.hide_canvas_and_show_image = (function sonja$loader$hide_canvas_and_show_image(img_tag,canvas){
var parent = img_tag.parentNode;
parent.removeChild(canvas);

return img_tag.style.display = "block";
});
sonja.loader.kill_possible_unfinished_palettizations = (function sonja$loader$kill_possible_unfinished_palettizations(){
var highest_timeout_id = (function (){var G__12006 = (function (){
return null;
});
var G__12007 = (1);
return setTimeout(G__12006,G__12007);
})();
var seq__12008 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((10),highest_timeout_id));
var chunk__12009 = null;
var count__12010 = (0);
var i__12011 = (0);
while(true){
if((i__12011 < count__12010)){
var i = chunk__12009.cljs$core$IIndexed$_nth$arity$2(null,i__12011);
clearTimeout(i);

var G__12012 = seq__12008;
var G__12013 = chunk__12009;
var G__12014 = count__12010;
var G__12015 = (i__12011 + (1));
seq__12008 = G__12012;
chunk__12009 = G__12013;
count__12010 = G__12014;
i__12011 = G__12015;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__12008);
if(temp__6753__auto__){
var seq__12008__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12008__$1)){
var c__8279__auto__ = cljs.core.chunk_first(seq__12008__$1);
var G__12016 = cljs.core.chunk_rest(seq__12008__$1);
var G__12017 = c__8279__auto__;
var G__12018 = cljs.core.count(c__8279__auto__);
var G__12019 = (0);
seq__12008 = G__12016;
chunk__12009 = G__12017;
count__12010 = G__12018;
i__12011 = G__12019;
continue;
} else {
var i = cljs.core.first(seq__12008__$1);
clearTimeout(i);

var G__12020 = cljs.core.next(seq__12008__$1);
var G__12021 = null;
var G__12022 = (0);
var G__12023 = (0);
seq__12008 = G__12020;
chunk__12009 = G__12021;
count__12010 = G__12022;
i__12011 = G__12023;
continue;
}
} else {
return null;
}
}
break;
}
});
sonja.loader.hover_stop = (function sonja$loader$hover_stop(img_tag,canvas){
sonja.loader.hide_canvas_and_show_image(img_tag,canvas);

return sonja.loader.kill_possible_unfinished_palettizations();
});
sonja.loader.hover_start = (function sonja$loader$hover_start(img_tag){
var img_width = (img_tag.width | (0));
var img_height = (img_tag.height | (0));
var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
var image = (new Image());
var src = img_tag.src;
var go_on = ((function (img_width,img_height,canvas,context,image,src){
return (function (dupa){
img_tag.parentNode.appendChild(canvas);

canvas.onmouseout = ((function (img_width,img_height,canvas,context,image,src){
return (function (){
return sonja.loader.hover_stop(img_tag,canvas);
});})(img_width,img_height,canvas,context,image,src))
;

img_tag.style.display = "none";

var edge_points = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [img_width,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [img_width,img_height], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),img_height], null)], null);
var rand_points = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(edge_points,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (edge_points,img_width,img_height,canvas,context,image,src){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int(img_width),cljs.core.rand_int(img_height)], null);
});})(edge_points,img_width,img_height,canvas,context,image,src))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1((20))));
context.drawImage(dupa,(0),(0));

return sonja.palettizer.loop_it(context,sonja.palettizer.get_image_data(context,img_width,img_height).data,rand_points,sonja.palettizer.new_positions(rand_points,img_width,img_height),img_width,img_height,(0));
});})(img_width,img_height,canvas,context,image,src))
;
canvas.width = img_width;

canvas.height = img_height;

image.onload = ((function (img_width,img_height,canvas,context,image,src,go_on){
return (function (){
return go_on(image);
});})(img_width,img_height,canvas,context,image,src,go_on))
;

image.crossOrigin = "anonymous";

return image.src = src;
});
sonja.loader.set_hover_events_for_img_tags = (function sonja$loader$set_hover_events_for_img_tags(){
var img_tags = document.getElementsByTagName("img");
var n__8389__auto__ = img_tags.length;
var i = (0);
while(true){
if((i < n__8389__auto__)){
var img_tag_12024 = img_tags.item(i);
img_tag_12024.onmouseover = ((function (i,img_tag_12024,n__8389__auto__,img_tags){
return (function (){
return sonja.loader.hover_start(img_tag_12024);
});})(i,img_tag_12024,n__8389__auto__,img_tags))
;

var G__12025 = (i + (1));
i = G__12025;
continue;
} else {
return null;
}
break;
}
});
