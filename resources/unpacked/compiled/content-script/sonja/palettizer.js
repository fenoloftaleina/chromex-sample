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
return (function (p1__11598_SHARP_){
return (data[(a + p1__11598_SHARP_)]);
});})(a))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
});
sonja.palettizer.get_image_data = (function sonja$palettizer$get_image_data(context,w,h){
return context.getImageData((0),(0),w,h);
});
sonja.palettizer.draw_path = (function sonja$palettizer$draw_path(context,data,w,h,triangles){
context.strokeStyle = "rgb(255, 255, 255)";

var seq__11680 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,triangles,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i * (4)),(i * 2.5),(200)], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((54)))));
var chunk__11681 = null;
var count__11682 = (0);
var i__11683 = (0);
while(true){
if((i__11683 < count__11682)){
var vec__11684 = chunk__11681.cljs$core$IIndexed$_nth$arity$2(null,i__11683);
var triangle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11684,(0),null);
var vec__11687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11684,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11687,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11687,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11687,(2),null);
var triangle_edges_11760 = delaunay_triangulation.core.edges(triangle);
var vec__11690_11761 = cljs.core.first(cljs.core.first(triangle_edges_11760));
var first_x_11762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11690_11761,(0),null);
var first_y_11763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11690_11761,(1),null);
var vec__11693_11764 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__11680,chunk__11681,count__11682,i__11683,triangle_edges_11760,vec__11690_11761,first_x_11762,first_y_11763,vec__11684,triangle,vec__11687,r,g,b){
return (function (a){
return ((a / 3.0) | (0));
});})(seq__11680,chunk__11681,count__11682,i__11683,triangle_edges_11760,vec__11690_11761,first_x_11762,first_y_11763,vec__11684,triangle,vec__11687,r,g,b))
,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (seq__11680,chunk__11681,count__11682,i__11683,triangle_edges_11760,vec__11690_11761,first_x_11762,first_y_11763,vec__11684,triangle,vec__11687,r,g,b){
return (function (a,e){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,a,e);
});})(seq__11680,chunk__11681,count__11682,i__11683,triangle_edges_11760,vec__11690_11761,first_x_11762,first_y_11763,vec__11684,triangle,vec__11687,r,g,b))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__11680,chunk__11681,count__11682,i__11683,triangle_edges_11760,vec__11690_11761,first_x_11762,first_y_11763,vec__11684,triangle,vec__11687,r,g,b){
return (function (p__11696){
var vec__11697 = p__11696;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11697,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11697,(1),null);
return sonja.palettizer.get_px(data,(x | (0)),(y | (0)),w,h);
});})(seq__11680,chunk__11681,count__11682,i__11683,triangle_edges_11760,vec__11690_11761,first_x_11762,first_y_11763,vec__11684,triangle,vec__11687,r,g,b))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__11680,chunk__11681,count__11682,i__11683,triangle_edges_11760,vec__11690_11761,first_x_11762,first_y_11763,vec__11684,triangle,vec__11687,r,g,b){
return (function (p){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__11680,chunk__11681,count__11682,i__11683,triangle_edges_11760,vec__11690_11761,first_x_11762,first_y_11763,vec__11684,triangle,vec__11687,r,g,b){
return (function (p1__11599_SHARP_){
return ((p1__11599_SHARP_ - 0.01) | (0));
});})(seq__11680,chunk__11681,count__11682,i__11683,triangle_edges_11760,vec__11690_11761,first_x_11762,first_y_11763,vec__11684,triangle,vec__11687,r,g,b))
,p);
});})(seq__11680,chunk__11681,count__11682,i__11683,triangle_edges_11760,vec__11690_11761,first_x_11762,first_y_11763,vec__11684,triangle,vec__11687,r,g,b))
,triangle))));
var r_11765__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11693_11764,(0),null);
var g_11766__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11693_11764,(1),null);
var b_11767__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11693_11764,(2),null);
context.beginPath();

context.moveTo(first_x_11762,first_y_11763);

var seq__11700_11768 = cljs.core.seq(triangle_edges_11760);
var chunk__11701_11769 = null;
var count__11702_11770 = (0);
var i__11703_11771 = (0);
while(true){
if((i__11703_11771 < count__11702_11770)){
var vec__11704_11772 = chunk__11701_11769.cljs$core$IIndexed$_nth$arity$2(null,i__11703_11771);
var vec__11707_11773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11704_11772,(0),null);
var fx_11774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11707_11773,(0),null);
var fy_11775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11707_11773,(1),null);
var vec__11710_11776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11704_11772,(1),null);
var tx_11777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11710_11776,(0),null);
var ty_11778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11710_11776,(1),null);
context.lineTo(tx_11777,ty_11778);

var G__11779 = seq__11700_11768;
var G__11780 = chunk__11701_11769;
var G__11781 = count__11702_11770;
var G__11782 = (i__11703_11771 + (1));
seq__11700_11768 = G__11779;
chunk__11701_11769 = G__11780;
count__11702_11770 = G__11781;
i__11703_11771 = G__11782;
continue;
} else {
var temp__6753__auto___11783 = cljs.core.seq(seq__11700_11768);
if(temp__6753__auto___11783){
var seq__11700_11784__$1 = temp__6753__auto___11783;
if(cljs.core.chunked_seq_QMARK_(seq__11700_11784__$1)){
var c__8279__auto___11785 = cljs.core.chunk_first(seq__11700_11784__$1);
var G__11786 = cljs.core.chunk_rest(seq__11700_11784__$1);
var G__11787 = c__8279__auto___11785;
var G__11788 = cljs.core.count(c__8279__auto___11785);
var G__11789 = (0);
seq__11700_11768 = G__11786;
chunk__11701_11769 = G__11787;
count__11702_11770 = G__11788;
i__11703_11771 = G__11789;
continue;
} else {
var vec__11713_11790 = cljs.core.first(seq__11700_11784__$1);
var vec__11716_11791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11713_11790,(0),null);
var fx_11792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11716_11791,(0),null);
var fy_11793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11716_11791,(1),null);
var vec__11719_11794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11713_11790,(1),null);
var tx_11795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11719_11794,(0),null);
var ty_11796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11719_11794,(1),null);
context.lineTo(tx_11795,ty_11796);

var G__11797 = cljs.core.next(seq__11700_11784__$1);
var G__11798 = null;
var G__11799 = (0);
var G__11800 = (0);
seq__11700_11768 = G__11797;
chunk__11701_11769 = G__11798;
count__11702_11770 = G__11799;
i__11703_11771 = G__11800;
continue;
}
} else {
}
}
break;
}

context.fillStyle = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("rgb("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_11765__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_11766__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_11767__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');

context.closePath();

context.fill();

context.stroke();

var G__11801 = seq__11680;
var G__11802 = chunk__11681;
var G__11803 = count__11682;
var G__11804 = (i__11683 + (1));
seq__11680 = G__11801;
chunk__11681 = G__11802;
count__11682 = G__11803;
i__11683 = G__11804;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__11680);
if(temp__6753__auto__){
var seq__11680__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11680__$1)){
var c__8279__auto__ = cljs.core.chunk_first(seq__11680__$1);
var G__11805 = cljs.core.chunk_rest(seq__11680__$1);
var G__11806 = c__8279__auto__;
var G__11807 = cljs.core.count(c__8279__auto__);
var G__11808 = (0);
seq__11680 = G__11805;
chunk__11681 = G__11806;
count__11682 = G__11807;
i__11683 = G__11808;
continue;
} else {
var vec__11722 = cljs.core.first(seq__11680__$1);
var triangle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11722,(0),null);
var vec__11725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11722,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11725,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11725,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11725,(2),null);
var triangle_edges_11809 = delaunay_triangulation.core.edges(triangle);
var vec__11728_11810 = cljs.core.first(cljs.core.first(triangle_edges_11809));
var first_x_11811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11728_11810,(0),null);
var first_y_11812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11728_11810,(1),null);
var vec__11731_11813 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__11680,chunk__11681,count__11682,i__11683,triangle_edges_11809,vec__11728_11810,first_x_11811,first_y_11812,vec__11722,triangle,vec__11725,r,g,b,seq__11680__$1,temp__6753__auto__){
return (function (a){
return ((a / 3.0) | (0));
});})(seq__11680,chunk__11681,count__11682,i__11683,triangle_edges_11809,vec__11728_11810,first_x_11811,first_y_11812,vec__11722,triangle,vec__11725,r,g,b,seq__11680__$1,temp__6753__auto__))
,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (seq__11680,chunk__11681,count__11682,i__11683,triangle_edges_11809,vec__11728_11810,first_x_11811,first_y_11812,vec__11722,triangle,vec__11725,r,g,b,seq__11680__$1,temp__6753__auto__){
return (function (a,e){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,a,e);
});})(seq__11680,chunk__11681,count__11682,i__11683,triangle_edges_11809,vec__11728_11810,first_x_11811,first_y_11812,vec__11722,triangle,vec__11725,r,g,b,seq__11680__$1,temp__6753__auto__))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__11680,chunk__11681,count__11682,i__11683,triangle_edges_11809,vec__11728_11810,first_x_11811,first_y_11812,vec__11722,triangle,vec__11725,r,g,b,seq__11680__$1,temp__6753__auto__){
return (function (p__11734){
var vec__11735 = p__11734;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11735,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11735,(1),null);
return sonja.palettizer.get_px(data,(x | (0)),(y | (0)),w,h);
});})(seq__11680,chunk__11681,count__11682,i__11683,triangle_edges_11809,vec__11728_11810,first_x_11811,first_y_11812,vec__11722,triangle,vec__11725,r,g,b,seq__11680__$1,temp__6753__auto__))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__11680,chunk__11681,count__11682,i__11683,triangle_edges_11809,vec__11728_11810,first_x_11811,first_y_11812,vec__11722,triangle,vec__11725,r,g,b,seq__11680__$1,temp__6753__auto__){
return (function (p){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__11680,chunk__11681,count__11682,i__11683,triangle_edges_11809,vec__11728_11810,first_x_11811,first_y_11812,vec__11722,triangle,vec__11725,r,g,b,seq__11680__$1,temp__6753__auto__){
return (function (p1__11599_SHARP_){
return ((p1__11599_SHARP_ - 0.01) | (0));
});})(seq__11680,chunk__11681,count__11682,i__11683,triangle_edges_11809,vec__11728_11810,first_x_11811,first_y_11812,vec__11722,triangle,vec__11725,r,g,b,seq__11680__$1,temp__6753__auto__))
,p);
});})(seq__11680,chunk__11681,count__11682,i__11683,triangle_edges_11809,vec__11728_11810,first_x_11811,first_y_11812,vec__11722,triangle,vec__11725,r,g,b,seq__11680__$1,temp__6753__auto__))
,triangle))));
var r_11814__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11731_11813,(0),null);
var g_11815__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11731_11813,(1),null);
var b_11816__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11731_11813,(2),null);
context.beginPath();

context.moveTo(first_x_11811,first_y_11812);

var seq__11738_11817 = cljs.core.seq(triangle_edges_11809);
var chunk__11739_11818 = null;
var count__11740_11819 = (0);
var i__11741_11820 = (0);
while(true){
if((i__11741_11820 < count__11740_11819)){
var vec__11742_11821 = chunk__11739_11818.cljs$core$IIndexed$_nth$arity$2(null,i__11741_11820);
var vec__11745_11822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11742_11821,(0),null);
var fx_11823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11745_11822,(0),null);
var fy_11824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11745_11822,(1),null);
var vec__11748_11825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11742_11821,(1),null);
var tx_11826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11748_11825,(0),null);
var ty_11827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11748_11825,(1),null);
context.lineTo(tx_11826,ty_11827);

var G__11828 = seq__11738_11817;
var G__11829 = chunk__11739_11818;
var G__11830 = count__11740_11819;
var G__11831 = (i__11741_11820 + (1));
seq__11738_11817 = G__11828;
chunk__11739_11818 = G__11829;
count__11740_11819 = G__11830;
i__11741_11820 = G__11831;
continue;
} else {
var temp__6753__auto___11832__$1 = cljs.core.seq(seq__11738_11817);
if(temp__6753__auto___11832__$1){
var seq__11738_11833__$1 = temp__6753__auto___11832__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11738_11833__$1)){
var c__8279__auto___11834 = cljs.core.chunk_first(seq__11738_11833__$1);
var G__11835 = cljs.core.chunk_rest(seq__11738_11833__$1);
var G__11836 = c__8279__auto___11834;
var G__11837 = cljs.core.count(c__8279__auto___11834);
var G__11838 = (0);
seq__11738_11817 = G__11835;
chunk__11739_11818 = G__11836;
count__11740_11819 = G__11837;
i__11741_11820 = G__11838;
continue;
} else {
var vec__11751_11839 = cljs.core.first(seq__11738_11833__$1);
var vec__11754_11840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11751_11839,(0),null);
var fx_11841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11754_11840,(0),null);
var fy_11842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11754_11840,(1),null);
var vec__11757_11843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11751_11839,(1),null);
var tx_11844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11757_11843,(0),null);
var ty_11845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11757_11843,(1),null);
context.lineTo(tx_11844,ty_11845);

var G__11846 = cljs.core.next(seq__11738_11833__$1);
var G__11847 = null;
var G__11848 = (0);
var G__11849 = (0);
seq__11738_11817 = G__11846;
chunk__11739_11818 = G__11847;
count__11740_11819 = G__11848;
i__11741_11820 = G__11849;
continue;
}
} else {
}
}
break;
}

context.fillStyle = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("rgb("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_11814__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_11815__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_11816__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');

context.closePath();

context.fill();

context.stroke();

var G__11850 = cljs.core.next(seq__11680__$1);
var G__11851 = null;
var G__11852 = (0);
var G__11853 = (0);
seq__11680 = G__11850;
chunk__11681 = G__11851;
count__11682 = G__11852;
i__11683 = G__11853;
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
return (function (p__11858){
var vec__11859 = p__11858;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11859,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11859,(1),null);
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
return (function (p__11886,p__11887){
var vec__11888 = p__11886;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11888,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11888,(1),null);
var vec__11891 = p__11887;
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11891,(0),null);
var fy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11891,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cx + moving_function(cx,fx)),(cy + moving_function(cy,fy))], null);
});})(frames,moving_function))
,current_points,future_points);
context.fillStyle = "#fff";

context.fillRect((0),(0),w,h);

sonja.palettizer.draw_path(context,data,w,h,cljs.core.cst$kw$triangles.cljs$core$IFn$_invoke$arity$1(delaunay_triangulation.core.triangulate(moved_points)));

var G__11894 = ((function (frames,moving_function,moved_points){
return (function (){
if((i < frames)){
var G__11896 = context;
var G__11897 = data;
var G__11898 = current_points;
var G__11899 = future_points;
var G__11900 = w;
var G__11901 = h;
var G__11902 = (i + (1));
return (sonja.palettizer.loop_it.cljs$core$IFn$_invoke$arity$7 ? sonja.palettizer.loop_it.cljs$core$IFn$_invoke$arity$7(G__11896,G__11897,G__11898,G__11899,G__11900,G__11901,G__11902) : sonja.palettizer.loop_it.call(null,G__11896,G__11897,G__11898,G__11899,G__11900,G__11901,G__11902));
} else {
var G__11903 = context;
var G__11904 = data;
var G__11905 = future_points;
var G__11906 = sonja.palettizer.new_positions(future_points,w,h);
var G__11907 = w;
var G__11908 = h;
var G__11909 = (0);
return (sonja.palettizer.loop_it.cljs$core$IFn$_invoke$arity$7 ? sonja.palettizer.loop_it.cljs$core$IFn$_invoke$arity$7(G__11903,G__11904,G__11905,G__11906,G__11907,G__11908,G__11909) : sonja.palettizer.loop_it.call(null,G__11903,G__11904,G__11905,G__11906,G__11907,G__11908,G__11909));
}
});})(frames,moving_function,moved_points))
;
var G__11895 = (20);
return setTimeout(G__11894,G__11895);
});
