"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{7297:function(e,r,t){var n=t(5861),a=t(9439),u=t(7757),c=t.n(u),s=t(2791),i=t(8174);r.Z=function(e,r){var t=(0,s.useState)(null),u=(0,a.Z)(t,2),o=u[0],f=u[1],p=(0,s.useCallback)((0,n.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e(r);case 3:n=t.sent,f(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),i.Am.error(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),[e,r]);return(0,s.useEffect)((function(){p()}),[p]),[o,f]}},1134:function(e,r,t){t.r(r);var n=t(9439),a=t(7297),u=t(2791),c=t(1087),s=t(7689),i=t(4390),o=t(184);r.default=function(){var e=(0,u.useState)(""),r=(0,n.Z)(e,2),t=r[0],f=r[1],p=(0,c.lr)(),v=(0,n.Z)(p,2),l=v[0],d=v[1],h=(0,u.useRef)(!0),m=(0,u.useRef)(null);(0,u.useEffect)((function(){h.current&&(h.current=!1),m.current.focus()}),[]);var x=l.get("query")||"",k=(0,a.Z)(i.mv,x),Z=(0,n.Z)(k,1)[0],w=(0,s.TH)();return(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("input",{ref:m,value:t,onChange:function(e){return f(e.target.value)},type:"text"}),(0,o.jsx)("button",{onClick:function(){d(t?{query:t}:{})},children:"Search"})]}),(0,o.jsx)("ul",{children:null!==Z&&void 0!==Z&&Z.length&&x?null===Z||void 0===Z?void 0:Z.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsx)(c.rU,{state:{from:w},to:e.id.toString(),children:(0,o.jsx)("p",{children:e.title})})},e.id)})):""})]})}},4390:function(e,r,t){t.d(r,{Mc:function(){return o},h6:function(){return p},iZ:function(){return f},mv:function(){return v},vw:function(){return i}});var n=t(5861),a=t(7757),u=t.n(a),c=t(5294);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="38073b7a97af15277e125ef03e31899b",i=function(){var e=(0,n.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/movie/day",{params:{api_key:s}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(r),{params:{api_key:s}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(r,"/credits"),{params:{api_key:s}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(r,"/reviews"),{params:{api_key:s}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie?query=".concat(r),{params:{api_key:s}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=134.bf14d0e8.chunk.js.map