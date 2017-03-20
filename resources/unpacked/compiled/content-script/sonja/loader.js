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
var highest_timeout_id = (function (){var G__26147 = (function (){
return null;
});
var G__26148 = (1);
return setTimeout(G__26147,G__26148);
})();
var seq__26149 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((10),highest_timeout_id));
var chunk__26150 = null;
var count__26151 = (0);
var i__26152 = (0);
while(true){
if((i__26152 < count__26151)){
var i = chunk__26150.cljs$core$IIndexed$_nth$arity$2(null,i__26152);
clearTimeout(i);

var G__26153 = seq__26149;
var G__26154 = chunk__26150;
var G__26155 = count__26151;
var G__26156 = (i__26152 + (1));
seq__26149 = G__26153;
chunk__26150 = G__26154;
count__26151 = G__26155;
i__26152 = G__26156;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__26149);
if(temp__6753__auto__){
var seq__26149__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26149__$1)){
var c__8279__auto__ = cljs.core.chunk_first(seq__26149__$1);
var G__26157 = cljs.core.chunk_rest(seq__26149__$1);
var G__26158 = c__8279__auto__;
var G__26159 = cljs.core.count(c__8279__auto__);
var G__26160 = (0);
seq__26149 = G__26157;
chunk__26150 = G__26158;
count__26151 = G__26159;
i__26152 = G__26160;
continue;
} else {
var i = cljs.core.first(seq__26149__$1);
clearTimeout(i);

var G__26161 = cljs.core.next(seq__26149__$1);
var G__26162 = null;
var G__26163 = (0);
var G__26164 = (0);
seq__26149 = G__26161;
chunk__26150 = G__26162;
count__26151 = G__26163;
i__26152 = G__26164;
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
var img_tag_26165 = img_tags.item(i);
img_tag_26165.onmouseover = ((function (i,img_tag_26165,n__8389__auto__,img_tags){
return (function (){
return sonja.loader.hover_start(img_tag_26165);
});})(i,img_tag_26165,n__8389__auto__,img_tags))
;

var G__26166 = (i + (1));
i = G__26166;
continue;
} else {
return null;
}
break;
}
});
