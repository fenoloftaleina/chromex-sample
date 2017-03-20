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
var highest_timeout_id = (function (){var G__16553 = (function (){
return null;
});
var G__16554 = (1);
return setTimeout(G__16553,G__16554);
})();
var seq__16555 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((10),highest_timeout_id));
var chunk__16556 = null;
var count__16557 = (0);
var i__16558 = (0);
while(true){
if((i__16558 < count__16557)){
var i = chunk__16556.cljs$core$IIndexed$_nth$arity$2(null,i__16558);
clearTimeout(i);

var G__16559 = seq__16555;
var G__16560 = chunk__16556;
var G__16561 = count__16557;
var G__16562 = (i__16558 + (1));
seq__16555 = G__16559;
chunk__16556 = G__16560;
count__16557 = G__16561;
i__16558 = G__16562;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__16555);
if(temp__6753__auto__){
var seq__16555__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16555__$1)){
var c__8279__auto__ = cljs.core.chunk_first(seq__16555__$1);
var G__16563 = cljs.core.chunk_rest(seq__16555__$1);
var G__16564 = c__8279__auto__;
var G__16565 = cljs.core.count(c__8279__auto__);
var G__16566 = (0);
seq__16555 = G__16563;
chunk__16556 = G__16564;
count__16557 = G__16565;
i__16558 = G__16566;
continue;
} else {
var i = cljs.core.first(seq__16555__$1);
clearTimeout(i);

var G__16567 = cljs.core.next(seq__16555__$1);
var G__16568 = null;
var G__16569 = (0);
var G__16570 = (0);
seq__16555 = G__16567;
chunk__16556 = G__16568;
count__16557 = G__16569;
i__16558 = G__16570;
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
var img_tag_16571 = img_tags.item(i);
img_tag_16571.onmouseover = ((function (i,img_tag_16571,n__8389__auto__,img_tags){
return (function (){
return sonja.loader.hover_start(img_tag_16571);
});})(i,img_tag_16571,n__8389__auto__,img_tags))
;

var G__16572 = (i + (1));
i = G__16572;
continue;
} else {
return null;
}
break;
}
});
