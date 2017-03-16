// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('sonja.loader');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('sonja.palettizer');
sonja.loader.hide_canvas_and_show_img = (function sonja$loader$hide_canvas_and_show_img(img_tag,canvas){
var parent = img_tag.parentNode;
parent.removeChild(canvas);

return img_tag.style.display = "block";
});
sonja.loader.kill_possible_unfinished_palettizations = (function sonja$loader$kill_possible_unfinished_palettizations(){
var highest_timeout_id = (function (){var G__11121 = (function (){
return null;
});
var G__11122 = (1);
return setTimeout(G__11121,G__11122);
})();
var seq__11123 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((10),highest_timeout_id));
var chunk__11124 = null;
var count__11125 = (0);
var i__11126 = (0);
while(true){
if((i__11126 < count__11125)){
var i = chunk__11124.cljs$core$IIndexed$_nth$arity$2(null,i__11126);
clearTimeout(i);

var G__11127 = seq__11123;
var G__11128 = chunk__11124;
var G__11129 = count__11125;
var G__11130 = (i__11126 + (1));
seq__11123 = G__11127;
chunk__11124 = G__11128;
count__11125 = G__11129;
i__11126 = G__11130;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__11123);
if(temp__6753__auto__){
var seq__11123__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11123__$1)){
var c__8279__auto__ = cljs.core.chunk_first(seq__11123__$1);
var G__11131 = cljs.core.chunk_rest(seq__11123__$1);
var G__11132 = c__8279__auto__;
var G__11133 = cljs.core.count(c__8279__auto__);
var G__11134 = (0);
seq__11123 = G__11131;
chunk__11124 = G__11132;
count__11125 = G__11133;
i__11126 = G__11134;
continue;
} else {
var i = cljs.core.first(seq__11123__$1);
clearTimeout(i);

var G__11135 = cljs.core.next(seq__11123__$1);
var G__11136 = null;
var G__11137 = (0);
var G__11138 = (0);
seq__11123 = G__11135;
chunk__11124 = G__11136;
count__11125 = G__11137;
i__11126 = G__11138;
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
sonja.loader.hide_canvas_and_show_img(img_tag,canvas);

return sonja.loader.kill_possible_unfinished_palettizations();
});
sonja.loader.hide_img_and_show_canvas = (function sonja$loader$hide_img_and_show_canvas(img_tag,canvas){
img_tag.parentNode.appendChild(canvas);

canvas.onmouseout = (function (){
return sonja.loader.hover_stop(img_tag,canvas);
});

return img_tag.style.display = "none";
});
sonja.loader.hover_start = (function sonja$loader$hover_start(img_tag){
var img_width = (img_tag.width | (0));
var img_height = (img_tag.height | (0));
var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
var img = (new Image());
var load_img = ((function (img_width,img_height,canvas,context,img){
return (function (callback){
canvas.width = img_width;

canvas.height = img_height;

img.onload = callback;

img.crossOrigin = "anonymous";

return img.src = img_tag.src;
});})(img_width,img_height,canvas,context,img))
;
var img_ready_handler = ((function (img_width,img_height,canvas,context,img,load_img){
return (function (){
sonja.loader.hide_img_and_show_canvas(img_tag,canvas);

context.drawImage(img,(0),(0));

return sonja.palettizer.run(context,img_width,img_height);
});})(img_width,img_height,canvas,context,img,load_img))
;
return load_img(img_ready_handler);
});
sonja.loader.set_hover_events_for_img_tags = (function sonja$loader$set_hover_events_for_img_tags(){
var img_tags = document.getElementsByTagName("img");
var n__8389__auto__ = img_tags.length;
var i = (0);
while(true){
if((i < n__8389__auto__)){
var img_tag_11139 = img_tags.item(i);
img_tag_11139.onmouseover = ((function (i,img_tag_11139,n__8389__auto__,img_tags){
return (function (){
return sonja.loader.hover_start(img_tag_11139);
});})(i,img_tag_11139,n__8389__auto__,img_tags))
;

var G__11140 = (i + (1));
i = G__11140;
continue;
} else {
return null;
}
break;
}
});
