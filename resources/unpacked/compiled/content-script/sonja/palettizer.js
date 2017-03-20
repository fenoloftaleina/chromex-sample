// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('sonja.palettizer');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('delaunay_triangulation.core');
goog.require('chromex.logging');
sonja.palettizer.draw_triangles = (function sonja$palettizer$draw_triangles(p__14338,triangles){
var map__14405 = p__14338;
var map__14405__$1 = ((((!((map__14405 == null)))?((((map__14405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14405.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14405):map__14405);
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14405__$1,cljs.core.cst$kw$context);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14405__$1,cljs.core.cst$kw$data);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14405__$1,cljs.core.cst$kw$width);
var map_px = ((function (map__14405,map__14405__$1,context,data,width){
return (function (x,y){
return (((4) * x) + (((4) * width) * y));
});})(map__14405,map__14405__$1,context,data,width))
;
var get_px = ((function (map_px,map__14405,map__14405__$1,context,data,width){
return (function (x,y){
var pos = map_px(x,y);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (pos,map_px,map__14405,map__14405__$1,context,data,width){
return (function (p1__14336_SHARP_){
return (data[(pos + p1__14336_SHARP_)]);
});})(pos,map_px,map__14405,map__14405__$1,context,data,width))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
});})(map_px,map__14405,map__14405__$1,context,data,width))
;
var color_avg_from_right_within_triangle_vertices = ((function (map_px,get_px,map__14405,map__14405__$1,context,data,width){
return (function (triangle){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map_px,get_px,map__14405,map__14405__$1,context,data,width){
return (function (color_element){
return ((color_element / 3.0) | (0));
});})(map_px,get_px,map__14405,map__14405__$1,context,data,width))
,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map_px,get_px,map__14405,map__14405__$1,context,data,width){
return (function (summed_color,color){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,summed_color,color);
});})(map_px,get_px,map__14405,map__14405__$1,context,data,width))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map_px,get_px,map__14405,map__14405__$1,context,data,width){
return (function (p__14407){
var vec__14408 = p__14407;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14408,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14408,(1),null);
return get_px((x | (0)),(y | (0)));
});})(map_px,get_px,map__14405,map__14405__$1,context,data,width))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map_px,get_px,map__14405,map__14405__$1,context,data,width){
return (function (point){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map_px,get_px,map__14405,map__14405__$1,context,data,width){
return (function (p1__14337_SHARP_){
return ((p1__14337_SHARP_ - 0.01) | (0));
});})(map_px,get_px,map__14405,map__14405__$1,context,data,width))
,point);
});})(map_px,get_px,map__14405,map__14405__$1,context,data,width))
,triangle))));
});})(map_px,get_px,map__14405,map__14405__$1,context,data,width))
;
context.strokeStyle = "#fff";

var seq__14411 = cljs.core.seq(triangles);
var chunk__14412 = null;
var count__14413 = (0);
var i__14414 = (0);
while(true){
if((i__14414 < count__14413)){
var triangle = chunk__14412.cljs$core$IIndexed$_nth$arity$2(null,i__14414);
var triangle_edges_14471 = delaunay_triangulation.core.edges(triangle);
var vec__14415_14472 = cljs.core.first(cljs.core.first(triangle_edges_14471));
var first_x_14473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14415_14472,(0),null);
var first_y_14474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14415_14472,(1),null);
var vec__14418_14475 = color_avg_from_right_within_triangle_vertices(triangle);
var r_14476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14418_14475,(0),null);
var g_14477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14418_14475,(1),null);
var b_14478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14418_14475,(2),null);
context.beginPath();

context.moveTo(first_x_14473,first_y_14474);

var seq__14421_14479 = cljs.core.seq(triangle_edges_14471);
var chunk__14422_14480 = null;
var count__14423_14481 = (0);
var i__14424_14482 = (0);
while(true){
if((i__14424_14482 < count__14423_14481)){
var vec__14425_14483 = chunk__14422_14480.cljs$core$IIndexed$_nth$arity$2(null,i__14424_14482);
var vec__14428_14484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14425_14483,(0),null);
var a_14485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14428_14484,(0),null);
var b_14486__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14428_14484,(1),null);
var vec__14431_14487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14425_14483,(1),null);
var to_x_14488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14431_14487,(0),null);
var to_y_14489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14431_14487,(1),null);
context.lineTo(to_x_14488,to_y_14489);

var G__14490 = seq__14421_14479;
var G__14491 = chunk__14422_14480;
var G__14492 = count__14423_14481;
var G__14493 = (i__14424_14482 + (1));
seq__14421_14479 = G__14490;
chunk__14422_14480 = G__14491;
count__14423_14481 = G__14492;
i__14424_14482 = G__14493;
continue;
} else {
var temp__6753__auto___14494 = cljs.core.seq(seq__14421_14479);
if(temp__6753__auto___14494){
var seq__14421_14495__$1 = temp__6753__auto___14494;
if(cljs.core.chunked_seq_QMARK_(seq__14421_14495__$1)){
var c__8279__auto___14496 = cljs.core.chunk_first(seq__14421_14495__$1);
var G__14497 = cljs.core.chunk_rest(seq__14421_14495__$1);
var G__14498 = c__8279__auto___14496;
var G__14499 = cljs.core.count(c__8279__auto___14496);
var G__14500 = (0);
seq__14421_14479 = G__14497;
chunk__14422_14480 = G__14498;
count__14423_14481 = G__14499;
i__14424_14482 = G__14500;
continue;
} else {
var vec__14434_14501 = cljs.core.first(seq__14421_14495__$1);
var vec__14437_14502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14434_14501,(0),null);
var a_14503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14437_14502,(0),null);
var b_14504__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14437_14502,(1),null);
var vec__14440_14505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14434_14501,(1),null);
var to_x_14506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14440_14505,(0),null);
var to_y_14507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14440_14505,(1),null);
context.lineTo(to_x_14506,to_y_14507);

var G__14508 = cljs.core.next(seq__14421_14495__$1);
var G__14509 = null;
var G__14510 = (0);
var G__14511 = (0);
seq__14421_14479 = G__14508;
chunk__14422_14480 = G__14509;
count__14423_14481 = G__14510;
i__14424_14482 = G__14511;
continue;
}
} else {
}
}
break;
}

context.fillStyle = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("rgb("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_14476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_14477),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_14478),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');

context.closePath();

context.fill();

context.stroke();

var G__14512 = seq__14411;
var G__14513 = chunk__14412;
var G__14514 = count__14413;
var G__14515 = (i__14414 + (1));
seq__14411 = G__14512;
chunk__14412 = G__14513;
count__14413 = G__14514;
i__14414 = G__14515;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__14411);
if(temp__6753__auto__){
var seq__14411__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14411__$1)){
var c__8279__auto__ = cljs.core.chunk_first(seq__14411__$1);
var G__14516 = cljs.core.chunk_rest(seq__14411__$1);
var G__14517 = c__8279__auto__;
var G__14518 = cljs.core.count(c__8279__auto__);
var G__14519 = (0);
seq__14411 = G__14516;
chunk__14412 = G__14517;
count__14413 = G__14518;
i__14414 = G__14519;
continue;
} else {
var triangle = cljs.core.first(seq__14411__$1);
var triangle_edges_14520 = delaunay_triangulation.core.edges(triangle);
var vec__14443_14521 = cljs.core.first(cljs.core.first(triangle_edges_14520));
var first_x_14522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14443_14521,(0),null);
var first_y_14523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14443_14521,(1),null);
var vec__14446_14524 = color_avg_from_right_within_triangle_vertices(triangle);
var r_14525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14446_14524,(0),null);
var g_14526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14446_14524,(1),null);
var b_14527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14446_14524,(2),null);
context.beginPath();

context.moveTo(first_x_14522,first_y_14523);

var seq__14449_14528 = cljs.core.seq(triangle_edges_14520);
var chunk__14450_14529 = null;
var count__14451_14530 = (0);
var i__14452_14531 = (0);
while(true){
if((i__14452_14531 < count__14451_14530)){
var vec__14453_14532 = chunk__14450_14529.cljs$core$IIndexed$_nth$arity$2(null,i__14452_14531);
var vec__14456_14533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14453_14532,(0),null);
var a_14534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14456_14533,(0),null);
var b_14535__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14456_14533,(1),null);
var vec__14459_14536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14453_14532,(1),null);
var to_x_14537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14459_14536,(0),null);
var to_y_14538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14459_14536,(1),null);
context.lineTo(to_x_14537,to_y_14538);

var G__14539 = seq__14449_14528;
var G__14540 = chunk__14450_14529;
var G__14541 = count__14451_14530;
var G__14542 = (i__14452_14531 + (1));
seq__14449_14528 = G__14539;
chunk__14450_14529 = G__14540;
count__14451_14530 = G__14541;
i__14452_14531 = G__14542;
continue;
} else {
var temp__6753__auto___14543__$1 = cljs.core.seq(seq__14449_14528);
if(temp__6753__auto___14543__$1){
var seq__14449_14544__$1 = temp__6753__auto___14543__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14449_14544__$1)){
var c__8279__auto___14545 = cljs.core.chunk_first(seq__14449_14544__$1);
var G__14546 = cljs.core.chunk_rest(seq__14449_14544__$1);
var G__14547 = c__8279__auto___14545;
var G__14548 = cljs.core.count(c__8279__auto___14545);
var G__14549 = (0);
seq__14449_14528 = G__14546;
chunk__14450_14529 = G__14547;
count__14451_14530 = G__14548;
i__14452_14531 = G__14549;
continue;
} else {
var vec__14462_14550 = cljs.core.first(seq__14449_14544__$1);
var vec__14465_14551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14462_14550,(0),null);
var a_14552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14465_14551,(0),null);
var b_14553__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14465_14551,(1),null);
var vec__14468_14554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14462_14550,(1),null);
var to_x_14555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14468_14554,(0),null);
var to_y_14556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14468_14554,(1),null);
context.lineTo(to_x_14555,to_y_14556);

var G__14557 = cljs.core.next(seq__14449_14544__$1);
var G__14558 = null;
var G__14559 = (0);
var G__14560 = (0);
seq__14449_14528 = G__14557;
chunk__14450_14529 = G__14558;
count__14451_14530 = G__14559;
i__14452_14531 = G__14560;
continue;
}
} else {
}
}
break;
}

context.fillStyle = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("rgb("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_14525),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_14526),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_14527),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');

context.closePath();

context.fill();

context.stroke();

var G__14561 = cljs.core.next(seq__14411__$1);
var G__14562 = null;
var G__14563 = (0);
var G__14564 = (0);
seq__14411 = G__14561;
chunk__14412 = G__14562;
count__14413 = G__14563;
i__14414 = G__14564;
continue;
}
} else {
return null;
}
}
break;
}
});
sonja.palettizer.new_positions = (function sonja$palettizer$new_positions(p__14565,points){
var map__14572 = p__14565;
var map__14572__$1 = ((((!((map__14572 == null)))?((((map__14572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14572.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14572):map__14572);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14572__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14572__$1,cljs.core.cst$kw$height);
var random_function = ((function (map__14572,map__14572__$1,width,height){
return (function (){
return (cljs.core.rand_int((40)) - (20));
});})(map__14572,map__14572__$1,width,height))
;
var within = ((function (random_function,map__14572,map__14572__$1,width,height){
return (function (value,border){
return ((value > (0))) && ((value < border));
});})(random_function,map__14572,map__14572__$1,width,height))
;
var new_position_if_within = ((function (random_function,within,map__14572,map__14572__$1,width,height){
return (function (current_x,current_y){
var new_x = (current_x + random_function());
var new_y = (current_y + random_function());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(within(new_x,width))?new_x:current_x),(cljs.core.truth_(within(new_y,height))?new_y:current_y)], null);
});})(random_function,within,map__14572,map__14572__$1,width,height))
;
var not_on_border = ((function (random_function,within,new_position_if_within,map__14572,map__14572__$1,width,height){
return (function (value,border){
return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,border));
});})(random_function,within,new_position_if_within,map__14572,map__14572__$1,width,height))
;
var new_position_if_not_on_border = ((function (random_function,within,new_position_if_within,not_on_border,map__14572,map__14572__$1,width,height){
return (function (position_function,p__14574){
var vec__14575 = p__14574;
var current_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14575,(0),null);
var current_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14575,(1),null);
if(cljs.core.truth_((function (){var and__7356__auto__ = not_on_border(current_x,width);
if(cljs.core.truth_(and__7356__auto__)){
return not_on_border(current_y,height);
} else {
return and__7356__auto__;
}
})())){
return (position_function.cljs$core$IFn$_invoke$arity$2 ? position_function.cljs$core$IFn$_invoke$arity$2(current_x,current_y) : position_function.call(null,current_x,current_y));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_x,current_y], null);
}
});})(random_function,within,new_position_if_within,not_on_border,map__14572,map__14572__$1,width,height))
;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new_position_if_not_on_border,new_position_if_within),points);
});
sonja.palettizer.update_frame = (function sonja$palettizer$update_frame(p__14578,current_points,future_points,i){
var map__14599 = p__14578;
var map__14599__$1 = ((((!((map__14599 == null)))?((((map__14599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14599.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14599):map__14599);
var drawing_context = map__14599__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14599__$1,cljs.core.cst$kw$context);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14599__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14599__$1,cljs.core.cst$kw$height);
var frames = (100);
var moved_points = ((function (frames,map__14599,map__14599__$1,drawing_context,context,width,height){
return (function (){
var moving_function = ((function (frames,map__14599,map__14599__$1,drawing_context,context,width,height){
return (function (cur,fut){
return ((i / frames) * (fut - cur));
});})(frames,map__14599,map__14599__$1,drawing_context,context,width,height))
;
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (moving_function,frames,map__14599,map__14599__$1,drawing_context,context,width,height){
return (function (p__14601,p__14602){
var vec__14603 = p__14601;
var current_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14603,(0),null);
var current_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14603,(1),null);
var vec__14606 = p__14602;
var next_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14606,(0),null);
var next_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14606,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(current_x + moving_function(current_x,next_x)),(current_y + moving_function(current_y,next_y))], null);
});})(moving_function,frames,map__14599,map__14599__$1,drawing_context,context,width,height))
,current_points,future_points);
});})(frames,map__14599,map__14599__$1,drawing_context,context,width,height))
;
var fill_bg_white = ((function (frames,moved_points,map__14599,map__14599__$1,drawing_context,context,width,height){
return (function (){
context.fillStyle = "#fff";

return context.fillRect((0),(0),width,height);
});})(frames,moved_points,map__14599,map__14599__$1,drawing_context,context,width,height))
;
fill_bg_white();

sonja.palettizer.draw_triangles(drawing_context,cljs.core.cst$kw$triangles.cljs$core$IFn$_invoke$arity$1(delaunay_triangulation.core.triangulate(moved_points())));

var G__14609 = ((function (frames,moved_points,fill_bg_white,map__14599,map__14599__$1,drawing_context,context,width,height){
return (function (){
if((i < frames)){
var G__14611 = drawing_context;
var G__14612 = current_points;
var G__14613 = future_points;
var G__14614 = (i + (1));
return (sonja.palettizer.update_frame.cljs$core$IFn$_invoke$arity$4 ? sonja.palettizer.update_frame.cljs$core$IFn$_invoke$arity$4(G__14611,G__14612,G__14613,G__14614) : sonja.palettizer.update_frame.call(null,G__14611,G__14612,G__14613,G__14614));
} else {
var G__14615 = drawing_context;
var G__14616 = future_points;
var G__14617 = sonja.palettizer.new_positions(drawing_context,future_points);
var G__14618 = (0);
return (sonja.palettizer.update_frame.cljs$core$IFn$_invoke$arity$4 ? sonja.palettizer.update_frame.cljs$core$IFn$_invoke$arity$4(G__14615,G__14616,G__14617,G__14618) : sonja.palettizer.update_frame.call(null,G__14615,G__14616,G__14617,G__14618));
}
});})(frames,moved_points,fill_bg_white,map__14599,map__14599__$1,drawing_context,context,width,height))
;
var G__14610 = (20);
return setTimeout(G__14609,G__14610);
});
sonja.palettizer.run = (function sonja$palettizer$run(context,width,height){
var edge_points = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),height], null)], null);
var rand_points = cljs.core.take.cljs$core$IFn$_invoke$arity$2((20),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(((function (edge_points){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int(width),cljs.core.rand_int(height)], null);
});})(edge_points))
));
var base_points = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(edge_points,rand_points);
var drawing_context = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,width,cljs.core.cst$kw$height,height,cljs.core.cst$kw$context,context,cljs.core.cst$kw$data,context.getImageData((0),(0),width,height).data], null);
return sonja.palettizer.update_frame(drawing_context,base_points,sonja.palettizer.new_positions(drawing_context,base_points),(0));
});
