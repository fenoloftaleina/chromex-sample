// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('sonja.palettizer');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('delaunay_triangulation.core');
sonja.palettizer.map_px = (function sonja$palettizer$map_px(x,y,w,h){
return (((4) * x) + (((4) * w) * y));
});
sonja.palettizer.get_px = (function sonja$palettizer$get_px(data,x,y,w,h){
var a = sonja.palettizer.map_px(x,y,w,h);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (a){
return (function (p1__10801_SHARP_){
return (data[(a + p1__10801_SHARP_)]);
});})(a))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
});
sonja.palettizer.get_image_data = (function sonja$palettizer$get_image_data(context,w,h){
return context.getImageData((0),(0),w,h);
});
sonja.palettizer.draw_path = (function sonja$palettizer$draw_path(context,data,w,h,triangles){
context.strokeStyle = "rgb(255, 255, 255)";

var seq__10883 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,triangles,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i * (4)),(i * 2.5),(200)], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((54)))));
var chunk__10884 = null;
var count__10885 = (0);
var i__10886 = (0);
while(true){
if((i__10886 < count__10885)){
var vec__10887 = chunk__10884.cljs$core$IIndexed$_nth$arity$2(null,i__10886);
var triangle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10887,(0),null);
var vec__10890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10887,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10890,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10890,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10890,(2),null);
var triangle_edges_10963 = delaunay_triangulation.core.edges(triangle);
var vec__10893_10964 = cljs.core.first(cljs.core.first(triangle_edges_10963));
var first_x_10965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10893_10964,(0),null);
var first_y_10966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10893_10964,(1),null);
var vec__10896_10967 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__10883,chunk__10884,count__10885,i__10886,triangle_edges_10963,vec__10893_10964,first_x_10965,first_y_10966,vec__10887,triangle,vec__10890,r,g,b){
return (function (a){
return ((a / 3.0) | (0));
});})(seq__10883,chunk__10884,count__10885,i__10886,triangle_edges_10963,vec__10893_10964,first_x_10965,first_y_10966,vec__10887,triangle,vec__10890,r,g,b))
,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (seq__10883,chunk__10884,count__10885,i__10886,triangle_edges_10963,vec__10893_10964,first_x_10965,first_y_10966,vec__10887,triangle,vec__10890,r,g,b){
return (function (a,e){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,a,e);
});})(seq__10883,chunk__10884,count__10885,i__10886,triangle_edges_10963,vec__10893_10964,first_x_10965,first_y_10966,vec__10887,triangle,vec__10890,r,g,b))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__10883,chunk__10884,count__10885,i__10886,triangle_edges_10963,vec__10893_10964,first_x_10965,first_y_10966,vec__10887,triangle,vec__10890,r,g,b){
return (function (p__10899){
var vec__10900 = p__10899;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10900,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10900,(1),null);
return sonja.palettizer.get_px(data,(x | (0)),(y | (0)),w,h);
});})(seq__10883,chunk__10884,count__10885,i__10886,triangle_edges_10963,vec__10893_10964,first_x_10965,first_y_10966,vec__10887,triangle,vec__10890,r,g,b))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__10883,chunk__10884,count__10885,i__10886,triangle_edges_10963,vec__10893_10964,first_x_10965,first_y_10966,vec__10887,triangle,vec__10890,r,g,b){
return (function (p){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__10883,chunk__10884,count__10885,i__10886,triangle_edges_10963,vec__10893_10964,first_x_10965,first_y_10966,vec__10887,triangle,vec__10890,r,g,b){
return (function (p1__10802_SHARP_){
return ((p1__10802_SHARP_ - 0.01) | (0));
});})(seq__10883,chunk__10884,count__10885,i__10886,triangle_edges_10963,vec__10893_10964,first_x_10965,first_y_10966,vec__10887,triangle,vec__10890,r,g,b))
,p);
});})(seq__10883,chunk__10884,count__10885,i__10886,triangle_edges_10963,vec__10893_10964,first_x_10965,first_y_10966,vec__10887,triangle,vec__10890,r,g,b))
,triangle))));
var r_10968__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10896_10967,(0),null);
var g_10969__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10896_10967,(1),null);
var b_10970__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10896_10967,(2),null);
context.beginPath();

context.moveTo(first_x_10965,first_y_10966);

var seq__10903_10971 = cljs.core.seq(triangle_edges_10963);
var chunk__10904_10972 = null;
var count__10905_10973 = (0);
var i__10906_10974 = (0);
while(true){
if((i__10906_10974 < count__10905_10973)){
var vec__10907_10975 = chunk__10904_10972.cljs$core$IIndexed$_nth$arity$2(null,i__10906_10974);
var vec__10910_10976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10907_10975,(0),null);
var fx_10977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10910_10976,(0),null);
var fy_10978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10910_10976,(1),null);
var vec__10913_10979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10907_10975,(1),null);
var tx_10980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10913_10979,(0),null);
var ty_10981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10913_10979,(1),null);
context.lineTo(tx_10980,ty_10981);

var G__10982 = seq__10903_10971;
var G__10983 = chunk__10904_10972;
var G__10984 = count__10905_10973;
var G__10985 = (i__10906_10974 + (1));
seq__10903_10971 = G__10982;
chunk__10904_10972 = G__10983;
count__10905_10973 = G__10984;
i__10906_10974 = G__10985;
continue;
} else {
var temp__6753__auto___10986 = cljs.core.seq(seq__10903_10971);
if(temp__6753__auto___10986){
var seq__10903_10987__$1 = temp__6753__auto___10986;
if(cljs.core.chunked_seq_QMARK_(seq__10903_10987__$1)){
var c__8279__auto___10988 = cljs.core.chunk_first(seq__10903_10987__$1);
var G__10989 = cljs.core.chunk_rest(seq__10903_10987__$1);
var G__10990 = c__8279__auto___10988;
var G__10991 = cljs.core.count(c__8279__auto___10988);
var G__10992 = (0);
seq__10903_10971 = G__10989;
chunk__10904_10972 = G__10990;
count__10905_10973 = G__10991;
i__10906_10974 = G__10992;
continue;
} else {
var vec__10916_10993 = cljs.core.first(seq__10903_10987__$1);
var vec__10919_10994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10916_10993,(0),null);
var fx_10995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10919_10994,(0),null);
var fy_10996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10919_10994,(1),null);
var vec__10922_10997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10916_10993,(1),null);
var tx_10998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10922_10997,(0),null);
var ty_10999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10922_10997,(1),null);
context.lineTo(tx_10998,ty_10999);

var G__11000 = cljs.core.next(seq__10903_10987__$1);
var G__11001 = null;
var G__11002 = (0);
var G__11003 = (0);
seq__10903_10971 = G__11000;
chunk__10904_10972 = G__11001;
count__10905_10973 = G__11002;
i__10906_10974 = G__11003;
continue;
}
} else {
}
}
break;
}

context.fillStyle = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("rgb("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_10968__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_10969__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_10970__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');

context.closePath();

context.fill();

context.stroke();

var G__11004 = seq__10883;
var G__11005 = chunk__10884;
var G__11006 = count__10885;
var G__11007 = (i__10886 + (1));
seq__10883 = G__11004;
chunk__10884 = G__11005;
count__10885 = G__11006;
i__10886 = G__11007;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__10883);
if(temp__6753__auto__){
var seq__10883__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10883__$1)){
var c__8279__auto__ = cljs.core.chunk_first(seq__10883__$1);
var G__11008 = cljs.core.chunk_rest(seq__10883__$1);
var G__11009 = c__8279__auto__;
var G__11010 = cljs.core.count(c__8279__auto__);
var G__11011 = (0);
seq__10883 = G__11008;
chunk__10884 = G__11009;
count__10885 = G__11010;
i__10886 = G__11011;
continue;
} else {
var vec__10925 = cljs.core.first(seq__10883__$1);
var triangle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10925,(0),null);
var vec__10928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10925,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10928,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10928,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10928,(2),null);
var triangle_edges_11012 = delaunay_triangulation.core.edges(triangle);
var vec__10931_11013 = cljs.core.first(cljs.core.first(triangle_edges_11012));
var first_x_11014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10931_11013,(0),null);
var first_y_11015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10931_11013,(1),null);
var vec__10934_11016 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__10883,chunk__10884,count__10885,i__10886,triangle_edges_11012,vec__10931_11013,first_x_11014,first_y_11015,vec__10925,triangle,vec__10928,r,g,b,seq__10883__$1,temp__6753__auto__){
return (function (a){
return ((a / 3.0) | (0));
});})(seq__10883,chunk__10884,count__10885,i__10886,triangle_edges_11012,vec__10931_11013,first_x_11014,first_y_11015,vec__10925,triangle,vec__10928,r,g,b,seq__10883__$1,temp__6753__auto__))
,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (seq__10883,chunk__10884,count__10885,i__10886,triangle_edges_11012,vec__10931_11013,first_x_11014,first_y_11015,vec__10925,triangle,vec__10928,r,g,b,seq__10883__$1,temp__6753__auto__){
return (function (a,e){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,a,e);
});})(seq__10883,chunk__10884,count__10885,i__10886,triangle_edges_11012,vec__10931_11013,first_x_11014,first_y_11015,vec__10925,triangle,vec__10928,r,g,b,seq__10883__$1,temp__6753__auto__))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__10883,chunk__10884,count__10885,i__10886,triangle_edges_11012,vec__10931_11013,first_x_11014,first_y_11015,vec__10925,triangle,vec__10928,r,g,b,seq__10883__$1,temp__6753__auto__){
return (function (p__10937){
var vec__10938 = p__10937;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10938,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10938,(1),null);
return sonja.palettizer.get_px(data,(x | (0)),(y | (0)),w,h);
});})(seq__10883,chunk__10884,count__10885,i__10886,triangle_edges_11012,vec__10931_11013,first_x_11014,first_y_11015,vec__10925,triangle,vec__10928,r,g,b,seq__10883__$1,temp__6753__auto__))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__10883,chunk__10884,count__10885,i__10886,triangle_edges_11012,vec__10931_11013,first_x_11014,first_y_11015,vec__10925,triangle,vec__10928,r,g,b,seq__10883__$1,temp__6753__auto__){
return (function (p){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__10883,chunk__10884,count__10885,i__10886,triangle_edges_11012,vec__10931_11013,first_x_11014,first_y_11015,vec__10925,triangle,vec__10928,r,g,b,seq__10883__$1,temp__6753__auto__){
return (function (p1__10802_SHARP_){
return ((p1__10802_SHARP_ - 0.01) | (0));
});})(seq__10883,chunk__10884,count__10885,i__10886,triangle_edges_11012,vec__10931_11013,first_x_11014,first_y_11015,vec__10925,triangle,vec__10928,r,g,b,seq__10883__$1,temp__6753__auto__))
,p);
});})(seq__10883,chunk__10884,count__10885,i__10886,triangle_edges_11012,vec__10931_11013,first_x_11014,first_y_11015,vec__10925,triangle,vec__10928,r,g,b,seq__10883__$1,temp__6753__auto__))
,triangle))));
var r_11017__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10934_11016,(0),null);
var g_11018__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10934_11016,(1),null);
var b_11019__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10934_11016,(2),null);
context.beginPath();

context.moveTo(first_x_11014,first_y_11015);

var seq__10941_11020 = cljs.core.seq(triangle_edges_11012);
var chunk__10942_11021 = null;
var count__10943_11022 = (0);
var i__10944_11023 = (0);
while(true){
if((i__10944_11023 < count__10943_11022)){
var vec__10945_11024 = chunk__10942_11021.cljs$core$IIndexed$_nth$arity$2(null,i__10944_11023);
var vec__10948_11025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10945_11024,(0),null);
var fx_11026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10948_11025,(0),null);
var fy_11027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10948_11025,(1),null);
var vec__10951_11028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10945_11024,(1),null);
var tx_11029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10951_11028,(0),null);
var ty_11030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10951_11028,(1),null);
context.lineTo(tx_11029,ty_11030);

var G__11031 = seq__10941_11020;
var G__11032 = chunk__10942_11021;
var G__11033 = count__10943_11022;
var G__11034 = (i__10944_11023 + (1));
seq__10941_11020 = G__11031;
chunk__10942_11021 = G__11032;
count__10943_11022 = G__11033;
i__10944_11023 = G__11034;
continue;
} else {
var temp__6753__auto___11035__$1 = cljs.core.seq(seq__10941_11020);
if(temp__6753__auto___11035__$1){
var seq__10941_11036__$1 = temp__6753__auto___11035__$1;
if(cljs.core.chunked_seq_QMARK_(seq__10941_11036__$1)){
var c__8279__auto___11037 = cljs.core.chunk_first(seq__10941_11036__$1);
var G__11038 = cljs.core.chunk_rest(seq__10941_11036__$1);
var G__11039 = c__8279__auto___11037;
var G__11040 = cljs.core.count(c__8279__auto___11037);
var G__11041 = (0);
seq__10941_11020 = G__11038;
chunk__10942_11021 = G__11039;
count__10943_11022 = G__11040;
i__10944_11023 = G__11041;
continue;
} else {
var vec__10954_11042 = cljs.core.first(seq__10941_11036__$1);
var vec__10957_11043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10954_11042,(0),null);
var fx_11044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10957_11043,(0),null);
var fy_11045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10957_11043,(1),null);
var vec__10960_11046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10954_11042,(1),null);
var tx_11047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10960_11046,(0),null);
var ty_11048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10960_11046,(1),null);
context.lineTo(tx_11047,ty_11048);

var G__11049 = cljs.core.next(seq__10941_11036__$1);
var G__11050 = null;
var G__11051 = (0);
var G__11052 = (0);
seq__10941_11020 = G__11049;
chunk__10942_11021 = G__11050;
count__10943_11022 = G__11051;
i__10944_11023 = G__11052;
continue;
}
} else {
}
}
break;
}

context.fillStyle = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("rgb("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_11017__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_11018__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_11019__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');

context.closePath();

context.fill();

context.stroke();

var G__11053 = cljs.core.next(seq__10883__$1);
var G__11054 = null;
var G__11055 = (0);
var G__11056 = (0);
seq__10883 = G__11053;
chunk__10884 = G__11054;
count__10885 = G__11055;
i__10886 = G__11056;
continue;
}
} else {
return null;
}
}
break;
}
});
sonja.palettizer.new_positions = (function sonja$palettizer$new_positions(points,w,h){
var randomizing_function = (function (){
return (cljs.core.rand_int((40)) - (20));
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (randomizing_function){
return (function (p__11061){
var vec__11062 = p__11061;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11062,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11062,(1),null);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cx,(0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cx,w)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cy,(0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cy,h))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null);
} else {
var rand_x = randomizing_function();
var rand_y = randomizing_function();
var new_x = (cx + rand_x);
var new_y = (cy + rand_y);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((new_x <= (0))) || ((new_x >= w)))?(cx - rand_x):new_x),((((new_y <= (0))) || ((new_y >= h)))?(cy - rand_y):new_y)], null);
}
});})(randomizing_function))
,points);
});
sonja.palettizer.loop_it = (function sonja$palettizer$loop_it(context,data,current_points,future_points,w,h,i){
var frames = 100.0;
var moving_function = ((function (frames){
return (function (cur,fut){
return ((i / frames) * (fut - cur));
});})(frames))
;
var moved_points = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (frames,moving_function){
return (function (p__11089,p__11090){
var vec__11091 = p__11089;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11091,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11091,(1),null);
var vec__11094 = p__11090;
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11094,(0),null);
var fy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11094,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cx + moving_function(cx,fx)),(cy + moving_function(cy,fy))], null);
});})(frames,moving_function))
,current_points,future_points);
context.fillStyle = "#fff";

context.fillRect((0),(0),w,h);

sonja.palettizer.draw_path(context,data,w,h,cljs.core.cst$kw$triangles.cljs$core$IFn$_invoke$arity$1(delaunay_triangulation.core.triangulate(moved_points)));

var G__11097 = ((function (frames,moving_function,moved_points){
return (function (){
if((i < frames)){
var G__11099 = context;
var G__11100 = data;
var G__11101 = current_points;
var G__11102 = future_points;
var G__11103 = w;
var G__11104 = h;
var G__11105 = (i + (1));
return (sonja.palettizer.loop_it.cljs$core$IFn$_invoke$arity$7 ? sonja.palettizer.loop_it.cljs$core$IFn$_invoke$arity$7(G__11099,G__11100,G__11101,G__11102,G__11103,G__11104,G__11105) : sonja.palettizer.loop_it.call(null,G__11099,G__11100,G__11101,G__11102,G__11103,G__11104,G__11105));
} else {
var G__11106 = context;
var G__11107 = data;
var G__11108 = future_points;
var G__11109 = sonja.palettizer.new_positions(future_points,w,h);
var G__11110 = w;
var G__11111 = h;
var G__11112 = (0);
return (sonja.palettizer.loop_it.cljs$core$IFn$_invoke$arity$7 ? sonja.palettizer.loop_it.cljs$core$IFn$_invoke$arity$7(G__11106,G__11107,G__11108,G__11109,G__11110,G__11111,G__11112) : sonja.palettizer.loop_it.call(null,G__11106,G__11107,G__11108,G__11109,G__11110,G__11111,G__11112));
}
});})(frames,moving_function,moved_points))
;
var G__11098 = (20);
return setTimeout(G__11097,G__11098);
});
sonja.palettizer.run = (function sonja$palettizer$run(context,width,height){
var edge_points = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),height], null)], null);
var rand_points = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(edge_points,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (edge_points){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int(width),cljs.core.rand_int(height)], null);
});})(edge_points))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1((20))));
return sonja.palettizer.loop_it(context,sonja.palettizer.get_image_data(context,width,height).data,rand_points,sonja.palettizer.new_positions(rand_points,width,height),width,height,(0));
});
