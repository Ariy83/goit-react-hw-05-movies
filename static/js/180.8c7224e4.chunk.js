"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[180],{9226:function(e,r,n){var t=n(5861),a=n(9439),s=n(7757),c=n.n(s),i=n(2791),u=n(8174);r.Z=function(e,r){var n=(0,i.useState)(null),s=(0,a.Z)(n,2),o=s[0],p=s[1],l=(0,i.useCallback)((0,t.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e(r);case 3:t=n.sent,p(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),u.Am.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])}))),[e,r]);return(0,i.useEffect)((function(){l()}),[l]),[o,p]}},1064:function(e,r,n){n.r(r),n.d(r,{default:function(){return y}});var t,a,s,c,i,u=n(168),o=n(9439),p=n(3986),l=n(9226),f=n(2791),d=n(7689),v=n(1087),h=n(4390),x=n(6444),m=n.p+"static/media/poster.64eb9996966f208be9fd.jpg",j=n(184),Z=x.ZP.button(t||(t=(0,u.Z)(["\n  margin-bottom: 8px;\n"]))),k=x.ZP.img(a||(a=(0,u.Z)(["\n  display: block;\n  height: auto;\n"]))),w=x.ZP.div(s||(s=(0,u.Z)(["\ndisplay: flex;\nflex-direction: column;\nmargin: 0;\npadding: 0;\n"]))),b=x.ZP.div(c||(c=(0,u.Z)(["\ndisplay: flex; \ngap: 20px;\n"]))),g=x.ZP.div(i||(i=(0,u.Z)(["\ndisplay: flex; \ngap: 5px;\n"]))),y=function(){var e,r=(0,d.UO)().movieId,n=(0,l.Z)(h.Mc,r),t=(0,o.Z)(n,1)[0],a=(0,d.TH)(),s=(0,d.s0)(),c=(0,f.useRef)((null===(e=a.state)||void 0===e?void 0:e.from)||"/");if(!t)return(0,j.jsx)(p.a,{});var i=t.poster_path,u=t.title,x=t.vote_average,y=t.overview,_=t.genres,C=t.release_date.slice(0,4),P=null===_||void 0===_?void 0:_.map((function(e,r){return(0,j.jsx)("p",{children:e.name},r)}));return(0,j.jsxs)("div",{children:[(0,j.jsx)(Z,{onClick:function(){s(c.current)},children:" Go back"}),(0,j.jsx)("br",{}),(0,j.jsxs)(b,{children:[i?(0,j.jsx)(k,{src:"https://image.tmdb.org/t/p/w300".concat(i),alt:u}):(0,j.jsx)(k,{src:m,alt:u}),(0,j.jsxs)(w,{children:[(0,j.jsxs)("h2",{children:[u," (",C,")"]}),(0,j.jsxs)("p",{children:["User Score (Vote Average): ",x]}),(0,j.jsx)("h3",{children:"Overview"}),(0,j.jsx)("p",{children:y}),(0,j.jsx)("h4",{children:"Genres"}),(0,j.jsx)(g,{children:P})]})]}),(0,j.jsx)("hr",{}),(0,j.jsx)("p",{children:"Additional information"}),(0,j.jsxs)("ul",{children:[(0,j.jsx)("li",{children:(0,j.jsx)(v.rU,{to:"cast",id:r,children:"Cast"})}),(0,j.jsx)("li",{children:(0,j.jsx)(v.rU,{to:"reviews",children:"Reviews"})}),(0,j.jsx)(f.Suspense,{fallback:(0,j.jsx)(p.a,{}),children:(0,j.jsx)(d.j3,{})})]})]})}},4390:function(e,r,n){n.d(r,{Mc:function(){return o},h6:function(){return l},iZ:function(){return p},mv:function(){return f},vw:function(){return u}});var t=n(5861),a=n(7757),s=n.n(a),c=n(5294);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="38073b7a97af15277e125ef03e31899b",u=function(){var e=(0,t.Z)(s().mark((function e(){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/movie/day",{params:{api_key:i}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(r),{params:{api_key:i}});case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(r,"/credits"),{params:{api_key:i}});case 2:return n=e.sent,t=n.data,e.abrupt("return",t.cast);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(r,"/reviews"),{params:{api_key:i}});case 2:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie?query=".concat(r),{params:{api_key:i}});case 2:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=180.8c7224e4.chunk.js.map