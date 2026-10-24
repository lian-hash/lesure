(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/package-card/package-card"],{"251d":function(e,t,a){},6665:function(e,t,a){"use strict";var s;a.r(t);var n,r=function(){var e=this,t=e.$createElement,a=(e._self._c,e.equipTags.length);e.$mp.data=Object.assign({},{$root:{g0:a}})},c=[],i=a("5dcc"),o=a.n(i),p={name:"PackageCard",props:{pkg:{type:Object,default:()=>({})}},computed:{coverStyle(){return`background: ${o.a.seasonGradient(this.pkg.seasonTheme)};`},coverEmoji(){return o.a.seasonEmoji(this.pkg.seasonTheme)},seasonLabel(){return this.pkg.seasonTheme?this.pkg.seasonTheme+"主题":"精选"},equipTags(){const e=this.pkg&&this.pkg.items||"";return e.split(/[,，|、]/).map(e=>String(e).trim()).filter(Boolean).slice(0,4)},priceText(){const e=Number(this.pkg.price)||0;return Number.isInteger(e)?String(e):e.toFixed(2)}},methods:{onTap(){this.$emit("select",{packageId:this.pkg.packageId})}}},g=p,u=(a("7bb5"),a("f0c5")),l=Object(u["a"])(g,r,c,!1,null,"60aad149",null,!1,s,n);t["default"]=l.exports},"7bb5":function(e,t,a){"use strict";var s=a("251d"),n=a.n(s);n.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/package-card/package-card-create-component',
    {
        'components/package-card/package-card-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6665"))
        })
    },
    [['components/package-card/package-card-create-component']]
]);
