(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-switch/u-switch"],{"02ad":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}));var i={uLoading:function(){return n.e("uview-ui/components/u-loading/u-loading").then(n.bind(null,"02c3"))}},a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__get_style([t.switchStyle])),i=t.$u.addUnit(this.size),a=t.$u.addUnit(this.size);t.$mp.data=Object.assign({},{$root:{s0:n,g0:i,g1:a}})},u=[]},"39cd":function(t,e,n){"use strict";n.r(e);var i=n("02ad"),a=n("63b9");for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);n("3f40");var o,l=n("f0c5"),r=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"17a1df6f",null,!1,i["a"],o);e["default"]=r.exports},"3f40":function(t,e,n){"use strict";var i=n("da31"),a=n.n(i);a.a},"63b9":function(t,e,n){"use strict";n.r(e);var i=n("c634"),a=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=a.a},c634:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-switch",props:{loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{type:[Number,String],default:50},activeColor:{type:String,default:"#2979ff"},inactiveColor:{type:String,default:"#ffffff"},value:{type:Boolean,default:!1},vibrateShort:{type:Boolean,default:!1},activeValue:{type:[Number,String,Boolean],default:!0},inactiveValue:{type:[Number,String,Boolean],default:!1}},data:function(){return{}},computed:{switchStyle:function(){var t={};return t.fontSize=this.size+"rpx",t.backgroundColor=this.value?this.activeColor:this.inactiveColor,t},loadingColor:function(){return this.value?this.activeColor:null}},methods:{onClick:function(){var e=this;this.disabled||this.loading||(this.vibrateShort&&t.vibrateShort(),this.$emit("input",!this.value),this.$nextTick((function(){e.$emit("change",e.value?e.activeValue:e.inactiveValue)})))}}};e.default=n}).call(this,n("543d")["default"])},da31:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-switch/u-switch-create-component',
    {
        'uview-ui/components/u-switch/u-switch-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("39cd"))
        })
    },
    [['uview-ui/components/u-switch/u-switch-create-component']]
]);
