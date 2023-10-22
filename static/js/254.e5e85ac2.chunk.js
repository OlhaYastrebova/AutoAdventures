"use strict";(self.webpackChunkAutoAdventures=self.webpackChunkAutoAdventures||[]).push([[254],{4254:function(n,e,r){r.r(e),r.d(e,{default:function(){return G}});var t,i,o,a,l,c,s,u,d,f,p,x,h,g=r(7762),m=r(3433),b=r(9439),v=r(8670),Z=r(2791),w=r(168),y=r(6088),j=y.Z.div(t||(t=(0,w.Z)(["\n  margin: 0 auto;\n  width: 100%;\n  max-width: 375px;\n  margin-top: 20px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  flex-wrap: wrap;\n\n  @media screen and (min-width: 768px) {\n    max-width: 768px;\n    }\n\n  @media screen and (min-width: 1440px) {\n    max-width: 1440px;\n    }\n"]))),k=y.Z.form(i||(i=(0,w.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 50px;\n  gap: 18px;\n"]))),C=y.Z.button(o||(o=(0,w.Z)(["\n  padding: 14px 44px;\n  border: none;\n  height: 56px;\n  align-self: flex-start;\n  margin-top: 8px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  border-radius: 12px;\n  background-color: #3470ff;\n\n  color: #ffffff;\n  font-family: Manrope;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 1.42857;\n\n  cursor: pointer;\n\n  transition: background-color 250ms linear;\n\n  &:hover {\n    background-color: #0b44cd;\n  }\n"]))),S=(y.Z.div(a||(a=(0,w.Z)(["\n  @media screen and (max-width: 767px) {\n    align-items: center;\n    flex-direction: column;\n    display: flex;\n  }\n"]))),y.Z.label(l||(l=(0,w.Z)(["\n  color: #8a8a89;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 128.6%;\n"])))),F=y.Z.select(c||(c=(0,w.Z)(["\n  padding: 0.5em;\n  width: 100%;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  margin-bottom: 0.5em;\n\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n\n  ::-webkit-scrollbar-track {\n    // background:transparent\n    background: #3e85f3;\n    border-radius: 12px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: #e7e5e5;\n    height: 112px;\n    border-radius: 12px;\n  }\n\n  ::-webkit-scrollbar-thumb:hover {\n    background: #7c7c7c;\n  }\n"]))),M=y.Z.div(s||(s=(0,w.Z)(["\n  display: flex;\n  margin-top: 8px;\n"]))),z=y.Z.label(u||(u=(0,w.Z)(["\n  color: #121417;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 111.111%;\n  border-radius: 14px 0px 0px 14px;\n  padding: 14px 0 14px 24px;\n  border-right: 2px solid rgba(138, 138, 137, 0.2);\n  background: #f7f7fb;\n"]))),B=y.Z.label(d||(d=(0,w.Z)(["\n  color: #121417;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 111.111%;\n  border-radius: 0px 14px 14px 0px;\n  padding: 14px 23px 14px 24px;\n  background: #f7f7fb;\n"]))),P=y.Z.input(f||(f=(0,w.Z)(["\n  background: #f7f7fb;\n  padding-left: 5px;\n  border: none;\n  outline: none;\n  width: 89px;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 111,1%;\n"]))),L=JSON.parse('["Buick","Toyota","Bugatti","Tesla","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land"]'),T=JSON.parse("[25,35,45,55,65,75,85,95,105,120,150,180,200]"),A=r(3329),N=function(n){var e=n.setBrand,r=n.brand,t=n.setPrice,i=n.price,o=n.setFrom,a=(n.from,n.setTo),l=(n.to,n.handleFilter),c=(0,Z.useState)(""),s=(0,b.Z)(c,2),u=s[0],d=s[1],f=(0,Z.useState)(""),p=(0,b.Z)(f,2),x=p[0],h=p[1];return(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(j,{children:(0,A.jsxs)(k,{children:[(0,A.jsxs)(S,{htmlFor:"car-brand",children:["Make your choice",(0,A.jsxs)(F,{id:"car-brand",value:r,onChange:function(n){return e(n.target.value)},children:[(0,A.jsx)("option",{value:"",children:"Car brand"}),L.map((function(n){return(0,A.jsx)("option",{value:n,children:n},n)}))]})]}),(0,A.jsxs)(S,{htmlFor:"price",children:["Price/1hour",(0,A.jsxs)(F,{id:"price",value:i,onChange:function(n){return t(n.target.value)},children:[(0,A.jsx)("option",{value:"",children:"To $"}),T.map((function(n){return(0,A.jsx)("option",{value:n,children:n},n)}))]})]}),(0,A.jsxs)(M,{children:[(0,A.jsxs)(z,{htmlFor:"from",children:["From car mileage / km",(0,A.jsx)(P,{id:"from",type:"text",value:x,onChange:function(n){var e=n.target.value.replace(/,/g,"");o(e),h("0"===e?"":new Intl.NumberFormat("en-US").format(e))}})]}),(0,A.jsxs)(B,{htmlFor:"to",children:["To car mileage / km",(0,A.jsx)(P,{id:"to",type:"text",value:u,onChange:function(n){var e=n.target.value.replace(/,/g,"");a(e),d("0"===e?"":new Intl.NumberFormat("en-US").format(e))}})]})]}),(0,A.jsx)(C,{type:"button",onClick:l,children:"Search"})]})})})},I=y.Z.div(p||(p=(0,w.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 100px;\n  margin-bottom: 20px;\n"]))),U=y.Z.button(x||(x=(0,w.Z)(["\n  background-color: transparent;\n  border: none;\n  text-decoration: underline;\n\n  color: #3470ff;\n  font-family: Manrope;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.5;\n\n  cursor: pointer;\n\n  transition: color 250ms linear;\n\n  &:hover {\n    color: #0b44cd;\n  }\n"]))),E=function(n){var e=n.setPage;return(0,A.jsx)(I,{children:(0,A.jsx)(U,{type:"button",onClick:function(){return e((function(n){return n+1}))},children:"Load more"})})},H=y.Z.p(h||(h=(0,w.Z)(["\n  color: #3470ff;\n  font-family: Manrope;\n  font-size: 25px;\n  font-weight: bold;\n  font-style: normal;\n  line-height: 24px;\n\n  text-align: center;\n"]))),J=r(9434),O=r(5634),q=r(9044);function G(){var n=(0,J.I0)();(0,Z.useEffect)((function(){n((0,O.c)())}),[n]);var e=(0,J.v9)((function(n){return n.cars.items})),r=(0,J.v9)((function(n){return n.cars.isLoading})),t=(0,Z.useState)(1),i=(0,b.Z)(t,2),o=i[0],a=i[1],l=(0,Z.useState)(""),c=(0,b.Z)(l,2),s=c[0],u=c[1],d=(0,Z.useState)(""),f=(0,b.Z)(d,2),p=f[0],x=f[1],h=(0,Z.useState)(""),w=(0,b.Z)(h,2),y=w[0],j=w[1],k=(0,Z.useState)(""),C=(0,b.Z)(k,2),S=C[0],F=C[1],M=(0,Z.useState)([]),z=(0,b.Z)(M,2),B=z[0],P=z[1];(0,Z.useEffect)((function(){P(e)}),[e]);var L;return L=B.filter((function(n,e,r){return e<8*o})),(0,A.jsxs)(A.Fragment,{children:[r&&(0,A.jsx)(q.a,{}),(0,A.jsx)(N,{setBrand:u,selectedBrand:s,setPrice:x,price:p,setFrom:j,from:y,to:S,setTo:F,handleFilter:function(){a(1);var n=e;if(""!==s&&(n=n.filter((function(n){return n.make.toLowerCase()===s.toLowerCase()}))),""!==p){var r=(0,m.Z)(n);n=[].concat();var t,i=(0,g.Z)(r);try{for(i.s();!(t=i.n()).done;){var o=t.value;o.rentalPrice.slice(1,o.rentalPrice.length)<=p&&n.push(o)}}catch(l){i.e(l)}finally{i.f()}}""!==y&&(n=n.filter((function(n){return y<=n.mileage}))),""!==S&&(n=n.filter((function(n){return S>=n.mileage}))),P(n)}}),(0,A.jsx)(v.H,{cars:L}),0===L.length&&!r&&(0,A.jsx)(H,{children:"Unfortunately, there is no suitable car for your request. Try changing your search parametrs"}),B.length>8*o&&(0,A.jsx)(E,{setPage:a})]})}}}]);
//# sourceMappingURL=254.e5e85ac2.chunk.js.map