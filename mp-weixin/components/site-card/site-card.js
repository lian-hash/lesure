(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/site-card/site-card"],{"0298":function(t,e,s){"use strict";var a;s.r(e);var i,c=function(){var t=this,e=t.$createElement;t._self._c},n=[],l=s("5dcc"),u=s.n(l),o={name:"SiteCard",props:{site:{type:Object,default:()=>({})}},computed:{statusClass(){return u.a.siteStatusClass(this.site.availableStatus)}},methods:{onTap(){this.$emit("select",{siteId:this.site.siteId})}}},r=o,d=(s("8d15"),s("f0c5")),f=Object(d["a"])(r,c,n,!1,null,"f77bf208",null,!1,a,i);e["default"]=f.exports},"8d15":function(t,e,s){"use strict";var a=s("e2bf"),i=s.n(a);i.a},e2bf:function(t,e,s){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/site-card/site-card-create-component',
    {
        'components/site-card/site-card-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0298"))
        })
    },
    [['components/site-card/site-card-create-component']]
]);
