"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{9226:function(r,t,e){var n=e(5861),a=e(9439),u=e(7757),c=e.n(u),s=e(2791),i=e(8174);t.Z=function(r,t){var e=(0,s.useState)(null),u=(0,a.Z)(e,2),o=u[0],p=u[1],f=(0,s.useCallback)((0,n.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r(t);case 3:n=e.sent,p(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),i.Am.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[r,t]);return(0,s.useEffect)((function(){f()}),[f]),[o,p]}},1134:function(r,t,e){e.r(t);var n=e(9439),a=e(9226),u=e(2791),c=e(1087),s=e(7689),i=e(4390),o=e(184);t.default=function(){var r=(0,u.useState)(""),t=(0,n.Z)(r,2),e=t[0],p=t[1],f=(0,c.lr)(),v=(0,n.Z)(f,2),l=v[0],d=v[1],h=l.get("query"),m=(0,a.Z)(i.mv,h),x=(0,n.Z)(m,1)[0],k=(0,s.TH)();return(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("input",{value:e,onChange:function(r){return p(r.target.value)},type:"text"}),(0,o.jsx)("button",{onClick:function(){d(e?{query:e}:{})},children:"Search"})]}),(0,o.jsx)("ul",{children:h?null===x||void 0===x?void 0:x.map((function(r){return(0,o.jsx)("li",{children:(0,o.jsx)(c.rU,{state:{from:k},to:r.id.toString(),children:(0,o.jsx)("p",{children:r.title})})},r.id)})):null})]})}},4390:function(r,t,e){e.d(t,{Mc:function(){return o},h6:function(){return f},iZ:function(){return p},mv:function(){return v},vw:function(){return i}});var n=e(5861),a=e(7757),u=e.n(a),c=e(5294);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="38073b7a97af15277e125ef03e31899b",i=function(){var r=(0,n.Z)(u().mark((function r(){var t,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/trending/movie/day",{params:{api_key:s}});case 2:return t=r.sent,e=t.data,r.abrupt("return",e.results);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(t),{params:{api_key:s}});case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(t,"/credits"),{params:{api_key:s}});case 2:return e=r.sent,n=e.data,r.abrupt("return",n.cast);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(t,"/reviews"),{params:{api_key:s}});case 2:return e=r.sent,n=e.data,r.abrupt("return",n.results);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/search/movie?query=".concat(t),{params:{api_key:s}});case 2:return e=r.sent,n=e.data,r.abrupt("return",n.results);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=134.a58f2b9c.chunk.js.map