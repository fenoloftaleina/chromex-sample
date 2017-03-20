// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('sonja.palettizer');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('delaunay_triangulation.core');
goog.require('chromex.logging');
sonja.palettizer.draw_triangles = (function sonja$palettizer$draw_triangles(context,data,width,height,triangles){
var map_px = (function (x,y){
return (((4) * x) + (((4) * width) * y));
});
var get_px = ((function (map_px){
return (function (x,y){
var pos = map_px(x,y);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (pos,map_px){
return (function (p1__25859_SHARP_){
return (data[(pos + p1__25859_SHARP_)]);
});})(pos,map_px))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
});})(map_px))
;
var color_avg_from_right_within_triangle_vertices = ((function (map_px,get_px){
return (function (triangle){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map_px,get_px){
return (function (color_element){
return ((color_element / 3.0) | (0));
});})(map_px,get_px))
,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map_px,get_px){
return (function (summed_color,color){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,summed_color,color);
});})(map_px,get_px))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map_px,get_px){
return (function (p__25925){
var vec__25926 = p__25925;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25926,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25926,(1),null);
return get_px((x | (0)),(y | (0)));
});})(map_px,get_px))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map_px,get_px){
return (function (point){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map_px,get_px){
return (function (p1__25860_SHARP_){
return ((p1__25860_SHARP_ - 0.01) | (0));
});})(map_px,get_px))
,point);
});})(map_px,get_px))
,triangle))));
});})(map_px,get_px))
;
context.strokeStyle = "#fff";

var seq__25929 = cljs.core.seq(triangles);
var chunk__25930 = null;
var count__25931 = (0);
var i__25932 = (0);
while(true){
if((i__25932 < count__25931)){
var triangle = chunk__25930.cljs$core$IIndexed$_nth$arity$2(null,i__25932);
var triangle_edges_25989 = delaunay_triangulation.core.edges(triangle);
var vec__25933_25990 = cljs.core.first(cljs.core.first(triangle_edges_25989));
var first_x_25991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25933_25990,(0),null);
var first_y_25992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25933_25990,(1),null);
var vec__25936_25993 = color_avg_from_right_within_triangle_vertices(triangle);
var r_25994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25936_25993,(0),null);
var g_25995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25936_25993,(1),null);
var b_25996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25936_25993,(2),null);
context.beginPath();

context.moveTo(first_x_25991,first_y_25992);

var seq__25939_25997 = cljs.core.seq(triangle_edges_25989);
var chunk__25940_25998 = null;
var count__25941_25999 = (0);
var i__25942_26000 = (0);
while(true){
if((i__25942_26000 < count__25941_25999)){
var vec__25943_26001 = chunk__25940_25998.cljs$core$IIndexed$_nth$arity$2(null,i__25942_26000);
var vec__25946_26002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25943_26001,(0),null);
var a_26003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25946_26002,(0),null);
var b_26004__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25946_26002,(1),null);
var vec__25949_26005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25943_26001,(1),null);
var to_x_26006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25949_26005,(0),null);
var to_y_26007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25949_26005,(1),null);
context.lineTo(to_x_26006,to_y_26007);

var G__26008 = seq__25939_25997;
var G__26009 = chunk__25940_25998;
var G__26010 = count__25941_25999;
var G__26011 = (i__25942_26000 + (1));
seq__25939_25997 = G__26008;
chunk__25940_25998 = G__26009;
count__25941_25999 = G__26010;
i__25942_26000 = G__26011;
continue;
} else {
var temp__6753__auto___26012 = cljs.core.seq(seq__25939_25997);
if(temp__6753__auto___26012){
var seq__25939_26013__$1 = temp__6753__auto___26012;
if(cljs.core.chunked_seq_QMARK_(seq__25939_26013__$1)){
var c__8279__auto___26014 = cljs.core.chunk_first(seq__25939_26013__$1);
var G__26015 = cljs.core.chunk_rest(seq__25939_26013__$1);
var G__26016 = c__8279__auto___26014;
var G__26017 = cljs.core.count(c__8279__auto___26014);
var G__26018 = (0);
seq__25939_25997 = G__26015;
chunk__25940_25998 = G__26016;
count__25941_25999 = G__26017;
i__25942_26000 = G__26018;
continue;
} else {
var vec__25952_26019 = cljs.core.first(seq__25939_26013__$1);
var vec__25955_26020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25952_26019,(0),null);
var a_26021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25955_26020,(0),null);
var b_26022__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25955_26020,(1),null);
var vec__25958_26023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25952_26019,(1),null);
var to_x_26024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25958_26023,(0),null);
var to_y_26025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25958_26023,(1),null);
context.lineTo(to_x_26024,to_y_26025);

var G__26026 = cljs.core.next(seq__25939_26013__$1);
var G__26027 = null;
var G__26028 = (0);
var G__26029 = (0);
seq__25939_25997 = G__26026;
chunk__25940_25998 = G__26027;
count__25941_25999 = G__26028;
i__25942_26000 = G__26029;
continue;
}
} else {
}
}
break;
}

context.fillStyle = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("rgb("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_25994),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_25995),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_25996),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');

context.closePath();

context.fill();

context.stroke();

var G__26030 = seq__25929;
var G__26031 = chunk__25930;
var G__26032 = count__25931;
var G__26033 = (i__25932 + (1));
seq__25929 = G__26030;
chunk__25930 = G__26031;
count__25931 = G__26032;
i__25932 = G__26033;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__25929);
if(temp__6753__auto__){
var seq__25929__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25929__$1)){
var c__8279__auto__ = cljs.core.chunk_first(seq__25929__$1);
var G__26034 = cljs.core.chunk_rest(seq__25929__$1);
var G__26035 = c__8279__auto__;
var G__26036 = cljs.core.count(c__8279__auto__);
var G__26037 = (0);
seq__25929 = G__26034;
chunk__25930 = G__26035;
count__25931 = G__26036;
i__25932 = G__26037;
continue;
} else {
var triangle = cljs.core.first(seq__25929__$1);
var triangle_edges_26038 = delaunay_triangulation.core.edges(triangle);
var vec__25961_26039 = cljs.core.first(cljs.core.first(triangle_edges_26038));
var first_x_26040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25961_26039,(0),null);
var first_y_26041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25961_26039,(1),null);
var vec__25964_26042 = color_avg_from_right_within_triangle_vertices(triangle);
var r_26043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25964_26042,(0),null);
var g_26044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25964_26042,(1),null);
var b_26045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25964_26042,(2),null);
context.beginPath();

context.moveTo(first_x_26040,first_y_26041);

var seq__25967_26046 = cljs.core.seq(triangle_edges_26038);
var chunk__25968_26047 = null;
var count__25969_26048 = (0);
var i__25970_26049 = (0);
while(true){
if((i__25970_26049 < count__25969_26048)){
var vec__25971_26050 = chunk__25968_26047.cljs$core$IIndexed$_nth$arity$2(null,i__25970_26049);
var vec__25974_26051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25971_26050,(0),null);
var a_26052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25974_26051,(0),null);
var b_26053__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25974_26051,(1),null);
var vec__25977_26054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25971_26050,(1),null);
var to_x_26055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25977_26054,(0),null);
var to_y_26056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25977_26054,(1),null);
context.lineTo(to_x_26055,to_y_26056);

var G__26057 = seq__25967_26046;
var G__26058 = chunk__25968_26047;
var G__26059 = count__25969_26048;
var G__26060 = (i__25970_26049 + (1));
seq__25967_26046 = G__26057;
chunk__25968_26047 = G__26058;
count__25969_26048 = G__26059;
i__25970_26049 = G__26060;
continue;
} else {
var temp__6753__auto___26061__$1 = cljs.core.seq(seq__25967_26046);
if(temp__6753__auto___26061__$1){
var seq__25967_26062__$1 = temp__6753__auto___26061__$1;
if(cljs.core.chunked_seq_QMARK_(seq__25967_26062__$1)){
var c__8279__auto___26063 = cljs.core.chunk_first(seq__25967_26062__$1);
var G__26064 = cljs.core.chunk_rest(seq__25967_26062__$1);
var G__26065 = c__8279__auto___26063;
var G__26066 = cljs.core.count(c__8279__auto___26063);
var G__26067 = (0);
seq__25967_26046 = G__26064;
chunk__25968_26047 = G__26065;
count__25969_26048 = G__26066;
i__25970_26049 = G__26067;
continue;
} else {
var vec__25980_26068 = cljs.core.first(seq__25967_26062__$1);
var vec__25983_26069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25980_26068,(0),null);
var a_26070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25983_26069,(0),null);
var b_26071__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25983_26069,(1),null);
var vec__25986_26072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25980_26068,(1),null);
var to_x_26073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25986_26072,(0),null);
var to_y_26074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25986_26072,(1),null);
context.lineTo(to_x_26073,to_y_26074);

var G__26075 = cljs.core.next(seq__25967_26062__$1);
var G__26076 = null;
var G__26077 = (0);
var G__26078 = (0);
seq__25967_26046 = G__26075;
chunk__25968_26047 = G__26076;
count__25969_26048 = G__26077;
i__25970_26049 = G__26078;
continue;
}
} else {
}
}
break;
}

context.fillStyle = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("rgb("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_26043),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_26044),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_26045),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');

context.closePath();

context.fill();

context.stroke();

var G__26079 = cljs.core.next(seq__25929__$1);
var G__26080 = null;
var G__26081 = (0);
var G__26082 = (0);
seq__25929 = G__26079;
chunk__25930 = G__26080;
count__25931 = G__26081;
i__25932 = G__26082;
continue;
}
} else {
return null;
}
}
break;
}
});
sonja.palettizer.new_positions = (function sonja$palettizer$new_positions(points,width,height){
var random_function = (function (){
return (cljs.core.rand_int((40)) - (20));
});
var within = ((function (random_function){
return (function (value,border){
return ((value > (0))) && ((value < border));
});})(random_function))
;
var new_position_if_within = ((function (random_function,within){
return (function (current_x,current_y){
var new_x = (current_x + random_function());
var new_y = (current_y + random_function());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(within(new_x,width))?new_x:current_x),(cljs.core.truth_(within(new_y,height))?new_y:current_y)], null);
});})(random_function,within))
;
var not_on_border = ((function (random_function,within,new_position_if_within){
return (function (value,border){
return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,border));
});})(random_function,within,new_position_if_within))
;
var new_position_if_not_on_border = ((function (random_function,within,new_position_if_within,not_on_border){
return (function (position_function,p__26087){
var vec__26088 = p__26087;
var current_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26088,(0),null);
var current_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26088,(1),null);
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
});})(random_function,within,new_position_if_within,not_on_border))
;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new_position_if_not_on_border,new_position_if_within),points);
});
sonja.palettizer.update_frame = (function sonja$palettizer$update_frame(context,data,current_points,future_points,w,h,i){
var frames = 100.0;
var moving_function = ((function (frames){
return (function (cur,fut){
return ((i / frames) * (fut - cur));
});})(frames))
;
var moved_points = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (frames,moving_function){
return (function (p__26115,p__26116){
var vec__26117 = p__26115;
var current_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26117,(0),null);
var current_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26117,(1),null);
var vec__26120 = p__26116;
var next_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26120,(0),null);
var next_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26120,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(current_x + moving_function(current_x,next_x)),(current_y + moving_function(current_y,next_y))], null);
});})(frames,moving_function))
,current_points,future_points);
context.fillStyle = "#fff";

context.fillRect((0),(0),w,h);

sonja.palettizer.draw_triangles(context,data,w,h,cljs.core.cst$kw$triangles.cljs$core$IFn$_invoke$arity$1(delaunay_triangulation.core.triangulate(moved_points)));

var G__26123 = ((function (frames,moving_function,moved_points){
return (function (){
if((i < frames)){
var G__26125 = context;
var G__26126 = data;
var G__26127 = current_points;
var G__26128 = future_points;
var G__26129 = w;
var G__26130 = h;
var G__26131 = (i + (1));
return (sonja.palettizer.update_frame.cljs$core$IFn$_invoke$arity$7 ? sonja.palettizer.update_frame.cljs$core$IFn$_invoke$arity$7(G__26125,G__26126,G__26127,G__26128,G__26129,G__26130,G__26131) : sonja.palettizer.update_frame.call(null,G__26125,G__26126,G__26127,G__26128,G__26129,G__26130,G__26131));
} else {
var G__26132 = context;
var G__26133 = data;
var G__26134 = future_points;
var G__26135 = sonja.palettizer.new_positions(future_points,w,h);
var G__26136 = w;
var G__26137 = h;
var G__26138 = (0);
return (sonja.palettizer.update_frame.cljs$core$IFn$_invoke$arity$7 ? sonja.palettizer.update_frame.cljs$core$IFn$_invoke$arity$7(G__26132,G__26133,G__26134,G__26135,G__26136,G__26137,G__26138) : sonja.palettizer.update_frame.call(null,G__26132,G__26133,G__26134,G__26135,G__26136,G__26137,G__26138));
}
});})(frames,moving_function,moved_points))
;
var G__26124 = (20);
return setTimeout(G__26123,G__26124);
});
sonja.palettizer.run = (function sonja$palettizer$run(context,width,height){
var edge_points = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),height], null)], null);
var rand_points = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(edge_points,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (edge_points){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int(width),cljs.core.rand_int(height)], null);
});})(edge_points))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1((20))));
return sonja.palettizer.update_frame(context,context.getImageData((0),(0),width,height).data,rand_points,sonja.palettizer.new_positions(rand_points,width,height),width,height,(0));
});
