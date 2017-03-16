// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('delaunay_triangulation.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
delaunay_triangulation.core.abs = Math.abs;
delaunay_triangulation.core.pow = Math.pow;
delaunay_triangulation.core.circumscribe_triangle = (function delaunay_triangulation$core$circumscribe_triangle(p__13694){
var vec__13707 = p__13694;
var vec__13710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13707,(0),null);
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13710,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13710,(1),null);
var vec__13713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13707,(1),null);
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13713,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13713,(1),null);
var vec__13716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13707,(2),null);
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13716,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13716,(1),null);
var A = (bx - ax);
var B = (by - ay);
var C = (cx - ax);
var D = (cy - ay);
var E = ((A * (ax + bx)) + (B * (ay + by)));
var F = ((C * (ax + cx)) + (D * (ay + cy)));
var G = ((2) * ((A * (cy - by)) - (B * (cx - bx))));
if(((delaunay_triangulation.core.abs.cljs$core$IFn$_invoke$arity$1 ? delaunay_triangulation.core.abs.cljs$core$IFn$_invoke$arity$1(G) : delaunay_triangulation.core.abs.call(null,G)) > 1.0E-6)){
var cx__$1 = (((D * E) - (B * F)) / G);
var cy__$1 = (((A * F) - (C * E)) / G);
var dx = (cx__$1 - ax);
var dy = (cy__$1 - ay);
var r = ((delaunay_triangulation.core.pow.cljs$core$IFn$_invoke$arity$2 ? delaunay_triangulation.core.pow.cljs$core$IFn$_invoke$arity$2(dx,(2)) : delaunay_triangulation.core.pow.call(null,dx,(2))) + (delaunay_triangulation.core.pow.cljs$core$IFn$_invoke$arity$2 ? delaunay_triangulation.core.pow.cljs$core$IFn$_invoke$arity$2(dy,(2)) : delaunay_triangulation.core.pow.call(null,dy,(2))));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x,cx__$1,cljs.core.cst$kw$y,cy__$1,cljs.core.cst$kw$radius_DASH_squared,r], null);
} else {
return null;
}
});
delaunay_triangulation.core.edges = (function delaunay_triangulation$core$edges(p__13719){
var vec__13723 = p__13719;
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13723,(0),null);
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13723,(1),null);
var p3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13723,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2,p3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p3,p1], null)], null);
});
delaunay_triangulation.core.contains_point_QMARK_ = (function delaunay_triangulation$core$contains_point_QMARK_(p__13726,p__13727){
var map__13737 = p__13726;
var map__13737__$1 = ((((!((map__13737 == null)))?((((map__13737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13737):map__13737);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13737__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13737__$1,cljs.core.cst$kw$y);
var radius_squared = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13737__$1,cljs.core.cst$kw$radius_DASH_squared);
var vec__13738 = p__13727;
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13738,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13738,(1),null);
var distance_squared = ((function (){var G__13742 = (x - px);
var G__13743 = (2);
return (delaunay_triangulation.core.pow.cljs$core$IFn$_invoke$arity$2 ? delaunay_triangulation.core.pow.cljs$core$IFn$_invoke$arity$2(G__13742,G__13743) : delaunay_triangulation.core.pow.call(null,G__13742,G__13743));
})() + (function (){var G__13744 = (y - py);
var G__13745 = (2);
return (delaunay_triangulation.core.pow.cljs$core$IFn$_invoke$arity$2 ? delaunay_triangulation.core.pow.cljs$core$IFn$_invoke$arity$2(G__13744,G__13745) : delaunay_triangulation.core.pow.call(null,G__13744,G__13745));
})());
return (distance_squared < radius_squared);
});
delaunay_triangulation.core.outer_edges = (function delaunay_triangulation$core$outer_edges(triangles){
var all_edges = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(delaunay_triangulation.core.edges,cljs.core.array_seq([triangles], 0));
var matches = ((function (all_edges){
return (function (edge){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([edge,cljs.core.reverse(edge)], true),all_edges);
});})(all_edges))
;
var appears_once = ((function (all_edges,matches){
return (function (edge){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(matches(edge)),(1));
});})(all_edges,matches))
;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(appears_once,all_edges);
});
delaunay_triangulation.core.make_new_triangles = (function delaunay_triangulation$core$make_new_triangles(containers,point){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13750){
var vec__13751 = p__13750;
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13751,(0),null);
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13751,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2,point], null);
}),delaunay_triangulation.core.outer_edges(containers)));
});
delaunay_triangulation.core.add_point_to_triangles = (function delaunay_triangulation$core$add_point_to_triangles(triangles,point){
var containers = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__13754_SHARP_){
return delaunay_triangulation.core.contains_point_QMARK_(delaunay_triangulation.core.circumscribe_triangle(p1__13754_SHARP_),point);
}),triangles);
var new_triangles = delaunay_triangulation.core.make_new_triangles(containers,point);
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(triangles,containers),new_triangles);
});
delaunay_triangulation.core.bounds = (function delaunay_triangulation$core$bounds(points){
var minx = ((-1000) + cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,points)));
var maxx = ((1000) + cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,points)));
var miny = ((-1000) + cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,points)));
var maxy = ((1000) + cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,points)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx,maxy], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx,maxy], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx,miny], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx,miny], null)], null);
});
delaunay_triangulation.core.triangulate = (function delaunay_triangulation$core$triangulate(points){
var points__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13766){
var vec__13767 = p__13766;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13767,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13767,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
}),points);
var vec__13763 = delaunay_triangulation.core.bounds(points__$1);
var tl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13763,(0),null);
var tr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13763,(1),null);
var bl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13763,(2),null);
var br = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13763,(3),null);
var initial = cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tl,tr,bl], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bl,tr,br], null)], true);
var with_bounds = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(delaunay_triangulation.core.add_point_to_triangles,initial,points__$1);
var triangles = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (points__$1,vec__13763,tl,tr,bl,br,initial,with_bounds){
return (function (p1__13755_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([tl,tr,bl,br], true),p1__13755_SHARP_);
});})(points__$1,vec__13763,tl,tr,bl,br,initial,with_bounds))
,with_bounds);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$points,points__$1,cljs.core.cst$kw$triangles,triangles,cljs.core.cst$kw$edges,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(delaunay_triangulation.core.edges,cljs.core.array_seq([triangles], 0)))], null);
});
