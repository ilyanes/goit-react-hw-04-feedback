(this["webpackJsonpgoit-react-hw-04-feedback"]=this["webpackJsonpgoit-react-hw-04-feedback"]||[]).push([[0],{14:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c,r,a,i=n(0),s=n.n(i),o=n(7),j=n.n(o),d=(n(14),n(6)),b=n(4),l=n(2),u=n(3),x=u.a.div(c||(c=Object(l.a)(["\n  font-size: 14px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 35%;\n  margin: auto;\n  margin-top: 10px;\n  background-color: yellow;\n  border-radius: 20px;\n  box-shadow: 4px 3px 6px 4px rgba(155, 155, 155, 0.75);\n  padding: 40px;\n"]))),p=u.a.div(r||(r=Object(l.a)(["\n  text-align: center;\n  margin-top: 10px;\n  font-size: 16px;\n  font-weight: 700;\n  width: 100%;\n"]))),O=u.a.p(a||(a=Object(l.a)(["\n  color: grey;\n"]))),h=n(1),f=function(e){var t=e.buttons;return Object(h.jsx)(h.Fragment,{children:t.map((function(e){return Object(h.jsx)("button",{onClick:e[1],name:e[0],children:e[0]},e[0])}))})},g=function(e){var t=e.data;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{children:["Good:",Object(h.jsx)("span",{children:t.Good})]}),Object(h.jsxs)("p",{children:["Neutral:",Object(h.jsx)("span",{children:t.Neutral})]}),Object(h.jsxs)("p",{children:["Bad:",Object(h.jsx)("span",{children:t.Bad})]}),Object(h.jsxs)("p",{children:["Total:",Object(h.jsx)("span",{children:t.total})]}),Object(h.jsxs)("p",{children:["Positive feedback:",Object(h.jsxs)("span",{children:[Number(t.positive.toFixed()),"% "]})]})]})},m=function(){var e=Object(i.useState)(0),t=Object(b.a)(e,2),n=t[0],c=t[1],r=Object(i.useState)(0),a=Object(b.a)(r,2),s=a[0],o=a[1],j=Object(i.useState)(0),l=Object(b.a)(j,2),u=l[0],m=l[1],v=[["Good",function(){return c((function(e){return e+1}))}],["Neutral",function(){return o((function(e){return e+1}))}],["Bad",function(){return m((function(e){return e+1}))}]],k=n+s+u,w=n/k*100,N=Object(d.a)(Object(d.a)({},{Good:n,Neutral:s,Bad:u}),{total:k,positive:w});return Object(h.jsxs)(x,{children:[Object(h.jsx)("h1",{children:"Please leave feedback"}),Object(h.jsx)(f,{buttons:v}),Object(h.jsxs)(p,{children:["Statistics",0!==k?Object(h.jsx)(g,{value:w,total:k,data:N}):Object(h.jsx)(O,{children:"No feedback given"})]})]})};j.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.885400fd.chunk.js.map