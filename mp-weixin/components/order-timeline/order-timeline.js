(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/order-timeline/order-timeline"],{"228e":function(e,t,r){"use strict";var n;r.r(t);var s,c=function(){var e=this,t=e.$createElement,r=(e._self._c,e.steps.length);e.$mp.data=Object.assign({},{$root:{g0:r}})},u=[],o={name:"OrderTimeline",props:{steps:{type:Array,default:()=>[]},current:{type:String,default:""},currentIndex:{type:Number,default:-1}},data(){return{computedIndex:-1}},watch:{steps:"recompute",current:"recompute",currentIndex:"recompute"},created(){this.recompute()},methods:{recompute(){let e="number"===typeof this.currentIndex?this.currentIndex:-1;(void 0===e||e<0)&&this.current&&this.steps&&(e=this.steps.indexOf(this.current)),this.computedIndex=e}}},p=o,i=(r("2795"),r("f0c5")),a=Object(i["a"])(p,c,u,!1,null,"4fb3160f",null,!1,n,s);t["default"]=a.exports},2795:function(e,t,r){"use strict";var n=r("412e"),s=r.n(n);s.a},"412e":function(e,t,r){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/order-timeline/order-timeline-create-component',
    {
        'components/order-timeline/order-timeline-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("228e"))
        })
    },
    [['components/order-timeline/order-timeline-create-component']]
]);
