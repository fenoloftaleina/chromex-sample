// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('sonja.palettizer');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('delaunay_triangulation.core');
goog.require('chromex.logging');
sonja.palettizer.draw_triangles = (function sonja$palettizer$draw_triangles(p__16264,triangles){
var map__16331 = p__16264;
var map__16331__$1 = ((((!((map__16331 == null)))?((((map__16331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16331.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16331):map__16331);
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16331__$1,cljs.core.cst$kw$context);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16331__$1,cljs.core.cst$kw$data);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16331__$1,cljs.core.cst$kw$width);
var map_px = ((function (map__16331,map__16331__$1,context,data,width){
return (function (x,y){
return (((4) * x) + (((4) * width) * y));
});})(map__16331,map__16331__$1,context,data,width))
;
var get_px = ((function (map_px,map__16331,map__16331__$1,context,data,width){
return (function (x,y){
var pos = map_px(x,y);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (pos,map_px,map__16331,map__16331__$1,context,data,width){
return (function (p1__16262_SHARP_){
return (data[(pos + p1__16262_SHARP_)]);
});})(pos,map_px,map__16331,map__16331__$1,context,data,width))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
});})(map_px,map__16331,map__16331__$1,context,data,width))
;
var color_avg_from_right_within_triangle_vertices = ((function (map_px,get_px,map__16331,map__16331__$1,context,data,width){
return (function (triangle){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map_px,get_px,map__16331,map__16331__$1,context,data,width){
return (function (color_element){
return ((color_element / 3.0) | (0));
});})(map_px,get_px,map__16331,map__16331__$1,context,data,width))
,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map_px,get_px,map__16331,map__16331__$1,context,data,width){
return (function (summed_color,color){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,summed_color,color);
});})(map_px,get_px,map__16331,map__16331__$1,context,data,width))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map_px,get_px,map__16331,map__16331__$1,context,data,width){
return (function (p__16333){
var vec__16334 = p__16333;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16334,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16334,(1),null);
return get_px((x | (0)),(y | (0)));
});})(map_px,get_px,map__16331,map__16331__$1,context,data,width))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map_px,get_px,map__16331,map__16331__$1,context,data,width){
return (function (point){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map_px,get_px,map__16331,map__16331__$1,context,data,width){
return (function (p1__16263_SHARP_){
return ((p1__16263_SHARP_ - 0.01) | (0));
});})(map_px,get_px,map__16331,map__16331__$1,context,data,width))
,point);
});})(map_px,get_px,map__16331,map__16331__$1,context,data,width))
,triangle))));
});})(map_px,get_px,map__16331,map__16331__$1,context,data,width))
;
context.strokeStyle = "#fff";

var seq__16337 = cljs.core.seq(triangles);
var chunk__16338 = null;
var count__16339 = (0);
var i__16340 = (0);
while(true){
if((i__16340 < count__16339)){
var triangle = chunk__16338.cljs$core$IIndexed$_nth$arity$2(null,i__16340);
var triangle_edges_16397 = delaunay_triangulation.core.edges(triangle);
var vec__16341_16398 = cljs.core.first(cljs.core.first(triangle_edges_16397));
var first_x_16399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16341_16398,(0),null);
var first_y_16400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16341_16398,(1),null);
var vec__16344_16401 = color_avg_from_right_within_triangle_vertices(triangle);
var r_16402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16344_16401,(0),null);
var g_16403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16344_16401,(1),null);
var b_16404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16344_16401,(2),null);
context.beginPath();

context.moveTo(first_x_16399,first_y_16400);

var seq__16347_16405 = cljs.core.seq(triangle_edges_16397);
var chunk__16348_16406 = null;
var count__16349_16407 = (0);
var i__16350_16408 = (0);
while(true){
if((i__16350_16408 < count__16349_16407)){
var vec__16351_16409 = chunk__16348_16406.cljs$core$IIndexed$_nth$arity$2(null,i__16350_16408);
var vec__16354_16410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16351_16409,(0),null);
var a_16411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16354_16410,(0),null);
var b_16412__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16354_16410,(1),null);
var vec__16357_16413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16351_16409,(1),null);
var to_x_16414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16357_16413,(0),null);
var to_y_16415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16357_16413,(1),null);
context.lineTo(to_x_16414,to_y_16415);

var G__16416 = seq__16347_16405;
var G__16417 = chunk__16348_16406;
var G__16418 = count__16349_16407;
var G__16419 = (i__16350_16408 + (1));
seq__16347_16405 = G__16416;
chunk__16348_16406 = G__16417;
count__16349_16407 = G__16418;
i__16350_16408 = G__16419;
continue;
} else {
var temp__6753__auto___16420 = cljs.core.seq(seq__16347_16405);
if(temp__6753__auto___16420){
var seq__16347_16421__$1 = temp__6753__auto___16420;
if(cljs.core.chunked_seq_QMARK_(seq__16347_16421__$1)){
var c__8279__auto___16422 = cljs.core.chunk_first(seq__16347_16421__$1);
var G__16423 = cljs.core.chunk_rest(seq__16347_16421__$1);
var G__16424 = c__8279__auto___16422;
var G__16425 = cljs.core.count(c__8279__auto___16422);
var G__16426 = (0);
seq__16347_16405 = G__16423;
chunk__16348_16406 = G__16424;
count__16349_16407 = G__16425;
i__16350_16408 = G__16426;
continue;
} else {
var vec__16360_16427 = cljs.core.first(seq__16347_16421__$1);
var vec__16363_16428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16360_16427,(0),null);
var a_16429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16363_16428,(0),null);
var b_16430__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16363_16428,(1),null);
var vec__16366_16431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16360_16427,(1),null);
var to_x_16432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16366_16431,(0),null);
var to_y_16433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16366_16431,(1),null);
context.lineTo(to_x_16432,to_y_16433);

var G__16434 = cljs.core.next(seq__16347_16421__$1);
var G__16435 = null;
var G__16436 = (0);
var G__16437 = (0);
seq__16347_16405 = G__16434;
chunk__16348_16406 = G__16435;
count__16349_16407 = G__16436;
i__16350_16408 = G__16437;
continue;
}
} else {
}
}
break;
}

context.fillStyle = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("rgb("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_16402),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_16403),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_16404),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');

context.closePath();

context.fill();

context.stroke();

var G__16438 = seq__16337;
var G__16439 = chunk__16338;
var G__16440 = count__16339;
var G__16441 = (i__16340 + (1));
seq__16337 = G__16438;
chunk__16338 = G__16439;
count__16339 = G__16440;
i__16340 = G__16441;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__16337);
if(temp__6753__auto__){
var seq__16337__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16337__$1)){
var c__8279__auto__ = cljs.core.chunk_first(seq__16337__$1);
var G__16442 = cljs.core.chunk_rest(seq__16337__$1);
var G__16443 = c__8279__auto__;
var G__16444 = cljs.core.count(c__8279__auto__);
var G__16445 = (0);
seq__16337 = G__16442;
chunk__16338 = G__16443;
count__16339 = G__16444;
i__16340 = G__16445;
continue;
} else {
var triangle = cljs.core.first(seq__16337__$1);
var triangle_edges_16446 = delaunay_triangulation.core.edges(triangle);
var vec__16369_16447 = cljs.core.first(cljs.core.first(triangle_edges_16446));
var first_x_16448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16369_16447,(0),null);
var first_y_16449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16369_16447,(1),null);
var vec__16372_16450 = color_avg_from_right_within_triangle_vertices(triangle);
var r_16451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16372_16450,(0),null);
var g_16452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16372_16450,(1),null);
var b_16453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16372_16450,(2),null);
context.beginPath();

context.moveTo(first_x_16448,first_y_16449);

var seq__16375_16454 = cljs.core.seq(triangle_edges_16446);
var chunk__16376_16455 = null;
var count__16377_16456 = (0);
var i__16378_16457 = (0);
while(true){
if((i__16378_16457 < count__16377_16456)){
var vec__16379_16458 = chunk__16376_16455.cljs$core$IIndexed$_nth$arity$2(null,i__16378_16457);
var vec__16382_16459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16379_16458,(0),null);
var a_16460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16382_16459,(0),null);
var b_16461__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16382_16459,(1),null);
var vec__16385_16462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16379_16458,(1),null);
var to_x_16463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16385_16462,(0),null);
var to_y_16464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16385_16462,(1),null);
context.lineTo(to_x_16463,to_y_16464);

var G__16465 = seq__16375_16454;
var G__16466 = chunk__16376_16455;
var G__16467 = count__16377_16456;
var G__16468 = (i__16378_16457 + (1));
seq__16375_16454 = G__16465;
chunk__16376_16455 = G__16466;
count__16377_16456 = G__16467;
i__16378_16457 = G__16468;
continue;
} else {
var temp__6753__auto___16469__$1 = cljs.core.seq(seq__16375_16454);
if(temp__6753__auto___16469__$1){
var seq__16375_16470__$1 = temp__6753__auto___16469__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16375_16470__$1)){
var c__8279__auto___16471 = cljs.core.chunk_first(seq__16375_16470__$1);
var G__16472 = cljs.core.chunk_rest(seq__16375_16470__$1);
var G__16473 = c__8279__auto___16471;
var G__16474 = cljs.core.count(c__8279__auto___16471);
var G__16475 = (0);
seq__16375_16454 = G__16472;
chunk__16376_16455 = G__16473;
count__16377_16456 = G__16474;
i__16378_16457 = G__16475;
continue;
} else {
var vec__16388_16476 = cljs.core.first(seq__16375_16470__$1);
var vec__16391_16477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16388_16476,(0),null);
var a_16478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16391_16477,(0),null);
var b_16479__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16391_16477,(1),null);
var vec__16394_16480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16388_16476,(1),null);
var to_x_16481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16394_16480,(0),null);
var to_y_16482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16394_16480,(1),null);
context.lineTo(to_x_16481,to_y_16482);

var G__16483 = cljs.core.next(seq__16375_16470__$1);
var G__16484 = null;
var G__16485 = (0);
var G__16486 = (0);
seq__16375_16454 = G__16483;
chunk__16376_16455 = G__16484;
count__16377_16456 = G__16485;
i__16378_16457 = G__16486;
continue;
}
} else {
}
}
break;
}

context.fillStyle = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("rgb("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_16451),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_16452),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_16453),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');

context.closePath();

context.fill();

context.stroke();

var G__16487 = cljs.core.next(seq__16337__$1);
var G__16488 = null;
var G__16489 = (0);
var G__16490 = (0);
seq__16337 = G__16487;
chunk__16338 = G__16488;
count__16339 = G__16489;
i__16340 = G__16490;
continue;
}
} else {
return null;
}
}
break;
}
});
sonja.palettizer.new_positions = (function sonja$palettizer$new_positions(p__16491,points){
var map__16498 = p__16491;
var map__16498__$1 = ((((!((map__16498 == null)))?((((map__16498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16498.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16498):map__16498);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16498__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16498__$1,cljs.core.cst$kw$height);
var random_function = ((function (map__16498,map__16498__$1,width,height){
return (function (){
return (cljs.core.rand_int((40)) - (20));
});})(map__16498,map__16498__$1,width,height))
;
var within = ((function (random_function,map__16498,map__16498__$1,width,height){
return (function (value,border){
return ((value > (0))) && ((value < border));
});})(random_function,map__16498,map__16498__$1,width,height))
;
var new_position_if_within = ((function (random_function,within,map__16498,map__16498__$1,width,height){
return (function (current_x,current_y){
var new_x = (current_x + random_function());
var new_y = (current_y + random_function());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(within(new_x,width))?new_x:current_x),(cljs.core.truth_(within(new_y,height))?new_y:current_y)], null);
});})(random_function,within,map__16498,map__16498__$1,width,height))
;
var not_on_border = ((function (random_function,within,new_position_if_within,map__16498,map__16498__$1,width,height){
return (function (value,border){
return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,border));
});})(random_function,within,new_position_if_within,map__16498,map__16498__$1,width,height))
;
var new_position_if_not_on_border = ((function (random_function,within,new_position_if_within,not_on_border,map__16498,map__16498__$1,width,height){
return (function (position_function,p__16500){
var vec__16501 = p__16500;
var current_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16501,(0),null);
var current_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16501,(1),null);
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
});})(random_function,within,new_position_if_within,not_on_border,map__16498,map__16498__$1,width,height))
;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new_position_if_not_on_border,new_position_if_within),points);
});
sonja.palettizer.frame_loop = (function sonja$palettizer$frame_loop(p__16504,current_points,future_points,i){
var map__16525 = p__16504;
var map__16525__$1 = ((((!((map__16525 == null)))?((((map__16525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16525.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16525):map__16525);
var drawing_context = map__16525__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16525__$1,cljs.core.cst$kw$context);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16525__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16525__$1,cljs.core.cst$kw$height);
var frames = (100);
var moved_points = ((function (frames,map__16525,map__16525__$1,drawing_context,context,width,height){
return (function (){
var moving_function = ((function (frames,map__16525,map__16525__$1,drawing_context,context,width,height){
return (function (cur,fut){
return ((i / frames) * (fut - cur));
});})(frames,map__16525,map__16525__$1,drawing_context,context,width,height))
;
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (moving_function,frames,map__16525,map__16525__$1,drawing_context,context,width,height){
return (function (p__16527,p__16528){
var vec__16529 = p__16527;
var current_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16529,(0),null);
var current_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16529,(1),null);
var vec__16532 = p__16528;
var next_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16532,(0),null);
var next_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16532,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(current_x + moving_function(current_x,next_x)),(current_y + moving_function(current_y,next_y))], null);
});})(moving_function,frames,map__16525,map__16525__$1,drawing_context,context,width,height))
,current_points,future_points);
});})(frames,map__16525,map__16525__$1,drawing_context,context,width,height))
;
var fill_bg_white = ((function (frames,moved_points,map__16525,map__16525__$1,drawing_context,context,width,height){
return (function (){
context.fillStyle = "#fff";

return context.fillRect((0),(0),width,height);
});})(frames,moved_points,map__16525,map__16525__$1,drawing_context,context,width,height))
;
fill_bg_white();

sonja.palettizer.draw_triangles(drawing_context,cljs.core.cst$kw$triangles.cljs$core$IFn$_invoke$arity$1(delaunay_triangulation.core.triangulate(moved_points())));

var G__16535 = ((function (frames,moved_points,fill_bg_white,map__16525,map__16525__$1,drawing_context,context,width,height){
return (function (){
if((i < frames)){
var G__16537 = drawing_context;
var G__16538 = current_points;
var G__16539 = future_points;
var G__16540 = (i + (1));
return (sonja.palettizer.frame_loop.cljs$core$IFn$_invoke$arity$4 ? sonja.palettizer.frame_loop.cljs$core$IFn$_invoke$arity$4(G__16537,G__16538,G__16539,G__16540) : sonja.palettizer.frame_loop.call(null,G__16537,G__16538,G__16539,G__16540));
} else {
var G__16541 = drawing_context;
var G__16542 = future_points;
var G__16543 = sonja.palettizer.new_positions(drawing_context,future_points);
var G__16544 = (0);
return (sonja.palettizer.frame_loop.cljs$core$IFn$_invoke$arity$4 ? sonja.palettizer.frame_loop.cljs$core$IFn$_invoke$arity$4(G__16541,G__16542,G__16543,G__16544) : sonja.palettizer.frame_loop.call(null,G__16541,G__16542,G__16543,G__16544));
}
});})(frames,moved_points,fill_bg_white,map__16525,map__16525__$1,drawing_context,context,width,height))
;
var G__16536 = (20);
return setTimeout(G__16535,G__16536);
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
var start_updating_and_drawing_frames = ((function (edge_points,rand_points,base_points,drawing_context){
return (function (){
return sonja.palettizer.frame_loop(drawing_context,base_points,sonja.palettizer.new_positions(drawing_context,base_points),(0));
});})(edge_points,rand_points,base_points,drawing_context))
;
return start_updating_and_drawing_frames();
});
