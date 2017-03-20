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
var highest_timeout_id = (function (){var G__14627 = (function (){
return null;
});
var G__14628 = (1);
return setTimeout(G__14627,G__14628);
})();
var seq__14629 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((10),highest_timeout_id));
var chunk__14630 = null;
var count__14631 = (0);
var i__14632 = (0);
while(true){
if((i__14632 < count__14631)){
var i = chunk__14630.cljs$core$IIndexed$_nth$arity$2(null,i__14632);
clearTimeout(i);

var G__14633 = seq__14629;
var G__14634 = chunk__14630;
var G__14635 = count__14631;
var G__14636 = (i__14632 + (1));
seq__14629 = G__14633;
chunk__14630 = G__14634;
count__14631 = G__14635;
i__14632 = G__14636;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__14629);
if(temp__6753__auto__){
var seq__14629__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14629__$1)){
var c__8279__auto__ = cljs.core.chunk_first(seq__14629__$1);
var G__14637 = cljs.core.chunk_rest(seq__14629__$1);
var G__14638 = c__8279__auto__;
var G__14639 = cljs.core.count(c__8279__auto__);
var G__14640 = (0);
seq__14629 = G__14637;
chunk__14630 = G__14638;
count__14631 = G__14639;
i__14632 = G__14640;
continue;
} else {
var i = cljs.core.first(seq__14629__$1);
clearTimeout(i);

var G__14641 = cljs.core.next(seq__14629__$1);
var G__14642 = null;
var G__14643 = (0);
var G__14644 = (0);
seq__14629 = G__14641;
chunk__14630 = G__14642;
count__14631 = G__14643;
i__14632 = G__14644;
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
var img_tag_14645 = img_tags.item(i);
img_tag_14645.onmouseover = ((function (i,img_tag_14645,n__8389__auto__,img_tags){
return (function (){
return sonja.loader.hover_start(img_tag_14645);
});})(i,img_tag_14645,n__8389__auto__,img_tags))
;

var G__14646 = (i + (1));
i = G__14646;
continue;
} else {
return null;
}
break;
}
});
