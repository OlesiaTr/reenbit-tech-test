"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[578],{4578:function(n,e,t){t.r(e),t.d(e,{default:function(){return X}});var r=t(5861),a=t(9439),i=t(7757),o=t.n(i),s=t(2791),c=t(1087),p=t(9014),d=t(1243);d.Z.defaults.baseURL="https://rickandmortyapi.com/api";var u,x,l,m,h,f,g,b,w,v,Z,j=function(){var n=(0,r.Z)(o().mark((function n(){var e,t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,d.Z.get("./character/?page=2");case 3:return e=n.sent,t=e.data,r=y(t.results),n.abrupt("return",P(r));case 9:n.prev=9,n.t0=n.catch(0),console.error("error:",n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}(),k=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e),n.prev=1,n.next=4,d.Z.get("./character/?name=".concat(e));case 4:return t=n.sent,r=t.data,a=y(r.results),n.abrupt("return",P(a));case 10:n.prev=10,n.t0=n.catch(1),console.error("error:",n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}(),y=function(n){return n.sort((function(n,e){return n.name.localeCompare(e.name)}))},P=function(n){return n.map((function(n){var e=n.id,t=n.name,r=n.species;return{id:e,name:t,species:r||"Unknown yet",image:n.image}}))},S=t(5243),C=t(184),z=function(){return(0,C.jsx)(S.iT,{height:80,width:80,color:"#01b0c8",wrapperStyle:{position:"fixed",top:"50%",left:" 50%",transform:"translate(-50%, -50%)"},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#a5fd91",strokeWidth:2,strokeWidthSecondary:1})},_=t(168),E=t(6444),T=E.ZP.img(u||(u=(0,_.Z)(["\n  margin: 0 auto 30px;\n\n  @media screen and (min-width: 768px) {\n    max-width: 600px;\n    margin-bottom: 16px;\n  }\n"]))),U=t(7784),I=t(8579),L=t(7269),O=t(4045),R=function(){return(0,C.jsxs)("picture",{children:[(0,C.jsx)("source",{srcSet:"".concat(U," 1x, ").concat(L," 2x"),media:"(min-width: 768px)"}),(0,C.jsx)("source",{srcSet:"".concat(I," 1x, ").concat(O," 2x"),media:"(min-width: 320px)"}),(0,C.jsx)(T,{src:"imgs/hero-mob-x1.png",alt:"Rick and Morty banner"})]})},W=t(719),q=t(3628),A=E.ZP.div(x||(x=(0,_.Z)(["\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n\n  width: 100%;\n  margin: 0 auto;\n  margin-bottom: 32px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 61px;\n  }\n"]))),D=(0,E.ZP)(q.DebounceInput)(l||(l=(0,_.Z)(["\n  padding: 16px;\n  padding-left: 48px;\n  width: 100%;\n\n  border-radius: 8px;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  outline: none;\n\n  color: rgba(0, 0, 0, 0.5);\n  line-height: 150%;\n\n  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    border: 1px solid #a5fd91;\n  }\n\n  &:not(:placeholder-shown) {\n    border: 1px solid #01b0c8;\n  }\n"]))),F=(0,E.ZP)(W.wnI)(m||(m=(0,_.Z)(["\n  position: absolute;\n  left: 16px;\n\n  width: 24px;\n  height: 24px;\n\n  color: rgba(0, 0, 0, 0.54);\n"]))),H=function(){var n,e=(0,c.lr)(),t=(0,a.Z)(e,2),r=t[0],i=t[1],o=null!==(n=r.get("name"))&&void 0!==n?n:"";return(0,C.jsxs)(A,{children:[(0,C.jsx)(F,{}),(0,C.jsx)(D,{type:"text",debounceTimeout:300,value:o,placeholder:"Filter by name...",onChange:function(n){return e=n.target.value,void i(""!==e?{name:e}:{});var e}})]})},M=t(7689),B=E.ZP.ul(h||(h=(0,_.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 312px);\n  justify-content: center;\n  gap: 32px;\n\n  @media screen and (min-width: 1020px) {\n    grid-template-columns: repeat(4, 240px);\n    gap: 24px 20px;\n  } ;\n"]))),G=E.ZP.li(f||(f=(0,_.Z)(["\n  background: #ffffff;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),\n    0px 2px 4px rgba(0, 0, 0, 0.14);\n  border-radius: 4px;\n  cursor: pointer;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    transform: scale(1.05);\n  }\n\n  > a {\n    text-decoration: none;\n  }\n"]))),J=E.ZP.img(g||(g=(0,_.Z)(["\n  height: auto;\n  width: 100%;\n\n  object-fit: cover;\n  object-position: 50% 10%;\n\n  @media screen and (min-width: 768px) {\n    height: 168px;\n  }\n"]))),K=E.ZP.div(b||(b=(0,_.Z)(["\n  padding: 12px 16px;\n"]))),N=E.ZP.h2(w||(w=(0,_.Z)(["\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 150%;\n  letter-spacing: 0.15px;\n"]))),Q=(E.ZP.p(v||(v=(0,_.Z)(["\n  font-size: 14px;\n  line-height: 150%;\n  letter-spacing: 0.25px;\n\n  color: rgba(0, 0, 0, 0.6);\n"]))),function(n){var e=n.data,t=(0,M.TH)();return(0,C.jsx)(B,{children:e.map((function(n){var e=n.id,r=n.name,a=n.image,i=n.species;return(0,C.jsx)(G,{children:(0,C.jsxs)(c.rU,{to:"/feed/".concat(e),state:{from:t},children:[(0,C.jsx)(J,{src:a,alt:r}),(0,C.jsxs)(K,{children:[(0,C.jsx)(N,{children:r}),(0,C.jsx)("p",{children:i})]})]})},e)}))})}),V=E.ZP.div(Z||(Z=(0,_.Z)(["\n  max-width: 100%;\n  padding: 0 24px;\n  margin: 92px auto 223px;\n\n  @media screen and (min-width: 480px) {\n    max-width: 480px;\n  }\n\n  @media screen and (min-width: 768px) {\n    max-width: 768px;\n    margin: 86px auto 188px;\n  }\n\n  @media screen and (min-width: 1020px) {\n    min-width: 1020px;\n    padding: 0;\n  }\n\n  @media screen and (min-width: 1440px) {\n    max-width: 1440px;\n    padding: 0 210px;\n  }\n"]))),X=function(){var n,e=(0,s.useState)(!1),t=(0,a.Z)(e,2),i=t[0],d=t[1],u=(0,s.useState)(""),x=(0,a.Z)(u,2),l=x[0],m=x[1],h=(0,s.useState)([]),f=(0,a.Z)(h,2),g=f[0],b=f[1],w=(0,c.lr)(),v=null!==(n=(0,a.Z)(w,1)[0].get("name"))&&void 0!==n?n:"";return(0,s.useEffect)((function(){var n=function(){var n=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,d(!0),m(""),n.next=5,j();case 5:e=n.sent,b(e),d(!1),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),m("Oops, something went wrong. Please, try again later!");case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,s.useEffect)((function(){if(""!==v){var n=function(){var n=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,d(!0),m(""),n.next=5,k(v);case 5:e=n.sent,b(e),d(!1),e.length<1&&m("Sorry, we didn`t find any characters according to your request."),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),m("Oops, something went wrong. Please, try again later!");case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}();n()}}),[v]),(0,s.useEffect)((function(){l&&p.Am.error(l)}),[l]),i?(0,C.jsx)(z,{}):l?(0,C.jsx)(p.x7,{position:"top-right"}):(0,C.jsx)("main",{children:(0,C.jsxs)(V,{children:[(0,C.jsx)(R,{}),(0,C.jsx)(H,{}),g.length>0&&(0,C.jsx)(Q,{data:g})||""!==v&&(0,C.jsx)(Q,{data:g})]})})}},7784:function(n,e,t){n.exports=t.p+"static/media/hero-desk-x1.7025a60a8397a5bdc91d.png"},7269:function(n,e,t){n.exports=t.p+"static/media/hero-desk-x2.2b86d11b87b8edd41dde.png"},8579:function(n,e,t){n.exports=t.p+"static/media/hero-mob-x1.094b133bac8a160da218.png"},4045:function(n,e,t){n.exports=t.p+"static/media/hero-mob-x2.e02ebdd8dd24313b2911.png"}}]);
//# sourceMappingURL=578.93074777.chunk.js.map