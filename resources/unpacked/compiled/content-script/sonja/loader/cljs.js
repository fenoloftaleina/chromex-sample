// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('sonja.loader.cljs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('delaunay_triangulation.core');
sonja.loader.cljs.map_px = (function sonja$loader$cljs$map_px(x,y,w,h){
return (((4) * x) + (((4) * w) * y));
});
sonja.loader.cljs.get_px = (function sonja$loader$cljs$get_px(data,x,y,w,h){
var a = sonja.loader.cljs.map_px(x,y,w,h);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (a){
return (function (p1__13772_SHARP_){
return (data[(a + p1__13772_SHARP_)]);
});})(a))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
});
sonja.loader.cljs.get_image_data = (function sonja$loader$cljs$get_image_data(context,w,h){
return context.getImageData((0),(0),w,h);
});
sonja.loader.cljs.draw_path = (function sonja$loader$cljs$draw_path(context,data,w,h,triangles){
context.strokeStyle = "rgb(255, 255, 255)";

var seq__13854 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,triangles,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i * (4)),(i * 2.5),(200)], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((54)))));
var chunk__13855 = null;
var count__13856 = (0);
var i__13857 = (0);
while(true){
if((i__13857 < count__13856)){
var vec__13858 = chunk__13855.cljs$core$IIndexed$_nth$arity$2(null,i__13857);
var triangle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13858,(0),null);
var vec__13861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13858,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13861,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13861,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13861,(2),null);
var triangle_edges_13934 = (sonja.loader.cljs.edges.cljs$core$IFn$_invoke$arity$1 ? sonja.loader.cljs.edges.cljs$core$IFn$_invoke$arity$1(triangle) : sonja.loader.cljs.edges.call(null,triangle));
var vec__13864_13935 = cljs.core.first(cljs.core.first(triangle_edges_13934));
var first_x_13936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13864_13935,(0),null);
var first_y_13937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13864_13935,(1),null);
var vec__13867_13938 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__13854,chunk__13855,count__13856,i__13857,triangle_edges_13934,vec__13864_13935,first_x_13936,first_y_13937,vec__13858,triangle,vec__13861,r,g,b){
return (function (a){
return ((a / 3.0) | (0));
});})(seq__13854,chunk__13855,count__13856,i__13857,triangle_edges_13934,vec__13864_13935,first_x_13936,first_y_13937,vec__13858,triangle,vec__13861,r,g,b))
,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (seq__13854,chunk__13855,count__13856,i__13857,triangle_edges_13934,vec__13864_13935,first_x_13936,first_y_13937,vec__13858,triangle,vec__13861,r,g,b){
return (function (a,e){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,a,e);
});})(seq__13854,chunk__13855,count__13856,i__13857,triangle_edges_13934,vec__13864_13935,first_x_13936,first_y_13937,vec__13858,triangle,vec__13861,r,g,b))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__13854,chunk__13855,count__13856,i__13857,triangle_edges_13934,vec__13864_13935,first_x_13936,first_y_13937,vec__13858,triangle,vec__13861,r,g,b){
return (function (p__13870){
var vec__13871 = p__13870;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13871,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13871,(1),null);
return sonja.loader.cljs.get_px(data,(x | (0)),(y | (0)),w,h);
});})(seq__13854,chunk__13855,count__13856,i__13857,triangle_edges_13934,vec__13864_13935,first_x_13936,first_y_13937,vec__13858,triangle,vec__13861,r,g,b))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__13854,chunk__13855,count__13856,i__13857,triangle_edges_13934,vec__13864_13935,first_x_13936,first_y_13937,vec__13858,triangle,vec__13861,r,g,b){
return (function (p){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__13854,chunk__13855,count__13856,i__13857,triangle_edges_13934,vec__13864_13935,first_x_13936,first_y_13937,vec__13858,triangle,vec__13861,r,g,b){
return (function (p1__13773_SHARP_){
return ((p1__13773_SHARP_ - 0.01) | (0));
});})(seq__13854,chunk__13855,count__13856,i__13857,triangle_edges_13934,vec__13864_13935,first_x_13936,first_y_13937,vec__13858,triangle,vec__13861,r,g,b))
,p);
});})(seq__13854,chunk__13855,count__13856,i__13857,triangle_edges_13934,vec__13864_13935,first_x_13936,first_y_13937,vec__13858,triangle,vec__13861,r,g,b))
,triangle))));
var r_13939__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13867_13938,(0),null);
var g_13940__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13867_13938,(1),null);
var b_13941__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13867_13938,(2),null);
context.beginPath();

context.moveTo(first_x_13936,first_y_13937);

var seq__13874_13942 = cljs.core.seq(triangle_edges_13934);
var chunk__13875_13943 = null;
var count__13876_13944 = (0);
var i__13877_13945 = (0);
while(true){
if((i__13877_13945 < count__13876_13944)){
var vec__13878_13946 = chunk__13875_13943.cljs$core$IIndexed$_nth$arity$2(null,i__13877_13945);
var vec__13881_13947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13878_13946,(0),null);
var fx_13948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13881_13947,(0),null);
var fy_13949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13881_13947,(1),null);
var vec__13884_13950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13878_13946,(1),null);
var tx_13951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13884_13950,(0),null);
var ty_13952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13884_13950,(1),null);
context.lineTo(tx_13951,ty_13952);

var G__13953 = seq__13874_13942;
var G__13954 = chunk__13875_13943;
var G__13955 = count__13876_13944;
var G__13956 = (i__13877_13945 + (1));
seq__13874_13942 = G__13953;
chunk__13875_13943 = G__13954;
count__13876_13944 = G__13955;
i__13877_13945 = G__13956;
continue;
} else {
var temp__6753__auto___13957 = cljs.core.seq(seq__13874_13942);
if(temp__6753__auto___13957){
var seq__13874_13958__$1 = temp__6753__auto___13957;
if(cljs.core.chunked_seq_QMARK_(seq__13874_13958__$1)){
var c__8279__auto___13959 = cljs.core.chunk_first(seq__13874_13958__$1);
var G__13960 = cljs.core.chunk_rest(seq__13874_13958__$1);
var G__13961 = c__8279__auto___13959;
var G__13962 = cljs.core.count(c__8279__auto___13959);
var G__13963 = (0);
seq__13874_13942 = G__13960;
chunk__13875_13943 = G__13961;
count__13876_13944 = G__13962;
i__13877_13945 = G__13963;
continue;
} else {
var vec__13887_13964 = cljs.core.first(seq__13874_13958__$1);
var vec__13890_13965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13887_13964,(0),null);
var fx_13966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13890_13965,(0),null);
var fy_13967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13890_13965,(1),null);
var vec__13893_13968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13887_13964,(1),null);
var tx_13969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13893_13968,(0),null);
var ty_13970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13893_13968,(1),null);
context.lineTo(tx_13969,ty_13970);

var G__13971 = cljs.core.next(seq__13874_13958__$1);
var G__13972 = null;
var G__13973 = (0);
var G__13974 = (0);
seq__13874_13942 = G__13971;
chunk__13875_13943 = G__13972;
count__13876_13944 = G__13973;
i__13877_13945 = G__13974;
continue;
}
} else {
}
}
break;
}

context.fillStyle = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("rgb("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_13939__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_13940__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_13941__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');

context.closePath();

context.fill();

context.stroke();

var G__13975 = seq__13854;
var G__13976 = chunk__13855;
var G__13977 = count__13856;
var G__13978 = (i__13857 + (1));
seq__13854 = G__13975;
chunk__13855 = G__13976;
count__13856 = G__13977;
i__13857 = G__13978;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__13854);
if(temp__6753__auto__){
var seq__13854__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13854__$1)){
var c__8279__auto__ = cljs.core.chunk_first(seq__13854__$1);
var G__13979 = cljs.core.chunk_rest(seq__13854__$1);
var G__13980 = c__8279__auto__;
var G__13981 = cljs.core.count(c__8279__auto__);
var G__13982 = (0);
seq__13854 = G__13979;
chunk__13855 = G__13980;
count__13856 = G__13981;
i__13857 = G__13982;
continue;
} else {
var vec__13896 = cljs.core.first(seq__13854__$1);
var triangle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13896,(0),null);
var vec__13899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13896,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13899,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13899,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13899,(2),null);
var triangle_edges_13983 = (sonja.loader.cljs.edges.cljs$core$IFn$_invoke$arity$1 ? sonja.loader.cljs.edges.cljs$core$IFn$_invoke$arity$1(triangle) : sonja.loader.cljs.edges.call(null,triangle));
var vec__13902_13984 = cljs.core.first(cljs.core.first(triangle_edges_13983));
var first_x_13985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13902_13984,(0),null);
var first_y_13986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13902_13984,(1),null);
var vec__13905_13987 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__13854,chunk__13855,count__13856,i__13857,triangle_edges_13983,vec__13902_13984,first_x_13985,first_y_13986,vec__13896,triangle,vec__13899,r,g,b,seq__13854__$1,temp__6753__auto__){
return (function (a){
return ((a / 3.0) | (0));
});})(seq__13854,chunk__13855,count__13856,i__13857,triangle_edges_13983,vec__13902_13984,first_x_13985,first_y_13986,vec__13896,triangle,vec__13899,r,g,b,seq__13854__$1,temp__6753__auto__))
,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (seq__13854,chunk__13855,count__13856,i__13857,triangle_edges_13983,vec__13902_13984,first_x_13985,first_y_13986,vec__13896,triangle,vec__13899,r,g,b,seq__13854__$1,temp__6753__auto__){
return (function (a,e){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,a,e);
});})(seq__13854,chunk__13855,count__13856,i__13857,triangle_edges_13983,vec__13902_13984,first_x_13985,first_y_13986,vec__13896,triangle,vec__13899,r,g,b,seq__13854__$1,temp__6753__auto__))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__13854,chunk__13855,count__13856,i__13857,triangle_edges_13983,vec__13902_13984,first_x_13985,first_y_13986,vec__13896,triangle,vec__13899,r,g,b,seq__13854__$1,temp__6753__auto__){
return (function (p__13908){
var vec__13909 = p__13908;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13909,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13909,(1),null);
return sonja.loader.cljs.get_px(data,(x | (0)),(y | (0)),w,h);
});})(seq__13854,chunk__13855,count__13856,i__13857,triangle_edges_13983,vec__13902_13984,first_x_13985,first_y_13986,vec__13896,triangle,vec__13899,r,g,b,seq__13854__$1,temp__6753__auto__))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__13854,chunk__13855,count__13856,i__13857,triangle_edges_13983,vec__13902_13984,first_x_13985,first_y_13986,vec__13896,triangle,vec__13899,r,g,b,seq__13854__$1,temp__6753__auto__){
return (function (p){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__13854,chunk__13855,count__13856,i__13857,triangle_edges_13983,vec__13902_13984,first_x_13985,first_y_13986,vec__13896,triangle,vec__13899,r,g,b,seq__13854__$1,temp__6753__auto__){
return (function (p1__13773_SHARP_){
return ((p1__13773_SHARP_ - 0.01) | (0));
});})(seq__13854,chunk__13855,count__13856,i__13857,triangle_edges_13983,vec__13902_13984,first_x_13985,first_y_13986,vec__13896,triangle,vec__13899,r,g,b,seq__13854__$1,temp__6753__auto__))
,p);
});})(seq__13854,chunk__13855,count__13856,i__13857,triangle_edges_13983,vec__13902_13984,first_x_13985,first_y_13986,vec__13896,triangle,vec__13899,r,g,b,seq__13854__$1,temp__6753__auto__))
,triangle))));
var r_13988__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13905_13987,(0),null);
var g_13989__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13905_13987,(1),null);
var b_13990__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13905_13987,(2),null);
context.beginPath();

context.moveTo(first_x_13985,first_y_13986);

var seq__13912_13991 = cljs.core.seq(triangle_edges_13983);
var chunk__13913_13992 = null;
var count__13914_13993 = (0);
var i__13915_13994 = (0);
while(true){
if((i__13915_13994 < count__13914_13993)){
var vec__13916_13995 = chunk__13913_13992.cljs$core$IIndexed$_nth$arity$2(null,i__13915_13994);
var vec__13919_13996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13916_13995,(0),null);
var fx_13997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13919_13996,(0),null);
var fy_13998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13919_13996,(1),null);
var vec__13922_13999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13916_13995,(1),null);
var tx_14000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13922_13999,(0),null);
var ty_14001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13922_13999,(1),null);
context.lineTo(tx_14000,ty_14001);

var G__14002 = seq__13912_13991;
var G__14003 = chunk__13913_13992;
var G__14004 = count__13914_13993;
var G__14005 = (i__13915_13994 + (1));
seq__13912_13991 = G__14002;
chunk__13913_13992 = G__14003;
count__13914_13993 = G__14004;
i__13915_13994 = G__14005;
continue;
} else {
var temp__6753__auto___14006__$1 = cljs.core.seq(seq__13912_13991);
if(temp__6753__auto___14006__$1){
var seq__13912_14007__$1 = temp__6753__auto___14006__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13912_14007__$1)){
var c__8279__auto___14008 = cljs.core.chunk_first(seq__13912_14007__$1);
var G__14009 = cljs.core.chunk_rest(seq__13912_14007__$1);
var G__14010 = c__8279__auto___14008;
var G__14011 = cljs.core.count(c__8279__auto___14008);
var G__14012 = (0);
seq__13912_13991 = G__14009;
chunk__13913_13992 = G__14010;
count__13914_13993 = G__14011;
i__13915_13994 = G__14012;
continue;
} else {
var vec__13925_14013 = cljs.core.first(seq__13912_14007__$1);
var vec__13928_14014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13925_14013,(0),null);
var fx_14015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13928_14014,(0),null);
var fy_14016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13928_14014,(1),null);
var vec__13931_14017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13925_14013,(1),null);
var tx_14018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13931_14017,(0),null);
var ty_14019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13931_14017,(1),null);
context.lineTo(tx_14018,ty_14019);

var G__14020 = cljs.core.next(seq__13912_14007__$1);
var G__14021 = null;
var G__14022 = (0);
var G__14023 = (0);
seq__13912_13991 = G__14020;
chunk__13913_13992 = G__14021;
count__13914_13993 = G__14022;
i__13915_13994 = G__14023;
continue;
}
} else {
}
}
break;
}

context.fillStyle = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("rgb("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_13988__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_13989__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_13990__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');

context.closePath();

context.fill();

context.stroke();

var G__14024 = cljs.core.next(seq__13854__$1);
var G__14025 = null;
var G__14026 = (0);
var G__14027 = (0);
seq__13854 = G__14024;
chunk__13855 = G__14025;
count__13856 = G__14026;
i__13857 = G__14027;
continue;
}
} else {
return null;
}
}
break;
}
});
sonja.loader.cljs.new_positions = (function sonja$loader$cljs$new_positions(points,w,h){
var randomizing_function = (function (){
return (cljs.core.rand_int((40)) - (20));
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (randomizing_function){
return (function (p__14032){
var vec__14033 = p__14032;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14033,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14033,(1),null);
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
sonja.loader.cljs.loop_it = (function sonja$loader$cljs$loop_it(context,data,current_points,future_points,w,h,i){
var frames = 100.0;
var moving_function = ((function (frames){
return (function (cur,fut){
return ((i / frames) * (fut - cur));
});})(frames))
;
var moved_points = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (frames,moving_function){
return (function (p__14060,p__14061){
var vec__14062 = p__14060;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14062,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14062,(1),null);
var vec__14065 = p__14061;
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14065,(0),null);
var fy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14065,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cx + moving_function(cx,fx)),(cy + moving_function(cy,fy))], null);
});})(frames,moving_function))
,current_points,future_points);
context.fillStyle = "#fff";

context.fillRect((0),(0),w,h);

sonja.loader.cljs.draw_path(context,data,w,h,cljs.core.cst$kw$triangles.cljs$core$IFn$_invoke$arity$1(delaunay_triangulation.core.triangulate(moved_points)));

var G__14068 = ((function (frames,moving_function,moved_points){
return (function (){
if((i < frames)){
var G__14070 = context;
var G__14071 = data;
var G__14072 = current_points;
var G__14073 = future_points;
var G__14074 = w;
var G__14075 = h;
var G__14076 = (i + (1));
return (sonja.loader.cljs.loop_it.cljs$core$IFn$_invoke$arity$7 ? sonja.loader.cljs.loop_it.cljs$core$IFn$_invoke$arity$7(G__14070,G__14071,G__14072,G__14073,G__14074,G__14075,G__14076) : sonja.loader.cljs.loop_it.call(null,G__14070,G__14071,G__14072,G__14073,G__14074,G__14075,G__14076));
} else {
var G__14077 = context;
var G__14078 = data;
var G__14079 = future_points;
var G__14080 = sonja.loader.cljs.new_positions(future_points,w,h);
var G__14081 = w;
var G__14082 = h;
var G__14083 = (0);
return (sonja.loader.cljs.loop_it.cljs$core$IFn$_invoke$arity$7 ? sonja.loader.cljs.loop_it.cljs$core$IFn$_invoke$arity$7(G__14077,G__14078,G__14079,G__14080,G__14081,G__14082,G__14083) : sonja.loader.cljs.loop_it.call(null,G__14077,G__14078,G__14079,G__14080,G__14081,G__14082,G__14083));
}
});})(frames,moving_function,moved_points))
;
var G__14069 = (20);
return setTimeout(G__14068,G__14069);
});
sonja.loader.cljs.hide_canvas_and_show_image = (function sonja$loader$cljs$hide_canvas_and_show_image(img_tag,canvas){
var parent = img_tag.parentNode;
parent.removeChild(canvas);

return img_tag.style.display = "block";
});
sonja.loader.cljs.kill_possible_unfinished_palettizations = (function sonja$loader$cljs$kill_possible_unfinished_palettizations(){
var highest_timeout_id = (function (){var G__14090 = (function (){
return null;
});
var G__14091 = (1);
return setTimeout(G__14090,G__14091);
})();
var seq__14092 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((10),highest_timeout_id));
var chunk__14093 = null;
var count__14094 = (0);
var i__14095 = (0);
while(true){
if((i__14095 < count__14094)){
var i = chunk__14093.cljs$core$IIndexed$_nth$arity$2(null,i__14095);
clearTimeout(i);

var G__14096 = seq__14092;
var G__14097 = chunk__14093;
var G__14098 = count__14094;
var G__14099 = (i__14095 + (1));
seq__14092 = G__14096;
chunk__14093 = G__14097;
count__14094 = G__14098;
i__14095 = G__14099;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__14092);
if(temp__6753__auto__){
var seq__14092__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14092__$1)){
var c__8279__auto__ = cljs.core.chunk_first(seq__14092__$1);
var G__14100 = cljs.core.chunk_rest(seq__14092__$1);
var G__14101 = c__8279__auto__;
var G__14102 = cljs.core.count(c__8279__auto__);
var G__14103 = (0);
seq__14092 = G__14100;
chunk__14093 = G__14101;
count__14094 = G__14102;
i__14095 = G__14103;
continue;
} else {
var i = cljs.core.first(seq__14092__$1);
clearTimeout(i);

var G__14104 = cljs.core.next(seq__14092__$1);
var G__14105 = null;
var G__14106 = (0);
var G__14107 = (0);
seq__14092 = G__14104;
chunk__14093 = G__14105;
count__14094 = G__14106;
i__14095 = G__14107;
continue;
}
} else {
return null;
}
}
break;
}
});
sonja.loader.cljs.hover_stop = (function sonja$loader$cljs$hover_stop(img_tag,canvas){
sonja.loader.cljs.hide_canvas_and_show_image(img_tag,canvas);

return sonja.loader.cljs.kill_possible_unfinished_palettizations();
});
sonja.loader.cljs.hover_start = (function sonja$loader$cljs$hover_start(img_tag){
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
return sonja.loader.cljs.hover_stop(img_tag,canvas);
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

return sonja.loader.cljs.loop_it(context,sonja.loader.cljs.get_image_data(context,img_width,img_height).data,rand_points,sonja.loader.cljs.new_positions(rand_points,img_width,img_height),img_width,img_height,(0));
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
sonja.loader.cljs.set_hover_events_for_img_tags = (function sonja$loader$cljs$set_hover_events_for_img_tags(){
var img_tags = document.getElementsByTagName("img");
var n__8389__auto__ = img_tags.length;
var i = (0);
while(true){
if((i < n__8389__auto__)){
var img_tag_14108 = img_tags.item(i);
img_tag_14108.onmouseover = ((function (i,img_tag_14108,n__8389__auto__,img_tags){
return (function (){
return sonja.loader.cljs.hover_start(img_tag_14108);
});})(i,img_tag_14108,n__8389__auto__,img_tags))
;

var G__14109 = (i + (1));
i = G__14109;
continue;
} else {
return null;
}
break;
}
});
