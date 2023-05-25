(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{23:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n=c(11),r=c(5),a=(c(21),c(22),c(2)),s=(c(23),c(0)),j=function(){return Object(s.jsx)("h1",{className:"title",children:"Home Page"})},i=c(8),o=c(9),b=c(12),l=c(4),h=c(1),d=(c(25),function(){return Object(s.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(s.jsx)("div",{className:"Loader__content"})})});function O(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var x=c(6),u=c.n(x),p=function(e){var t=e.person;return Object(s.jsx)(r.b,{to:"../".concat(t.slug),className:u()({"has-text-danger":"f"===t.sex}),children:t.name})},m=function(e){var t=e.person,c=e.slug;return Object(s.jsxs)("tr",{"data-cy":"person",className:u()({"has-background-warning":c===t.slug}),children:[Object(s.jsx)("td",{children:Object(s.jsx)(p,{person:t})}),Object(s.jsx)("td",{children:t.sex}),Object(s.jsx)("td",{children:t.born}),Object(s.jsx)("td",{children:t.died}),Object(s.jsxs)("td",{children:[t.mother&&Object(s.jsx)(p,{person:t.mother}),t.motherName&&!t.mother&&Object(s.jsx)("p",{children:t.motherName}),!t.motherName&&!t.mother&&"-"]}),Object(s.jsxs)("td",{children:[t.father&&Object(s.jsx)(p,{person:t.father}),t.fatherName&&!t.father&&Object(s.jsx)("p",{children:t.fatherName}),!t.fatherName&&!t.father&&"-"]})]},t.slug)},f=function(e){var t=e.people,c=Object(a.h)().slug;return Object(s.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Name"}),Object(s.jsx)("th",{children:"Sex"}),Object(s.jsx)("th",{children:"Born"}),Object(s.jsx)("th",{children:"Died"}),Object(s.jsx)("th",{children:"Mother"}),Object(s.jsx)("th",{children:"Father"})]})}),Object(s.jsx)("tbody",{children:t.map((function(e){return Object(s.jsx)(m,{person:e,slug:c})}))})]})},v=function(){var e=Object(h.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],r=Object(h.useState)(!0),a=Object(l.a)(r,2),j=a[0],x=a[1],u=Object(h.useState)(""),p=Object(l.a)(u,2),m=p[0],v=p[1],g=function(){var e=Object(b.a)(Object(i.a)().mark((function e(){var t,c;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O();case 3:t=e.sent,c=t.map((function(e){var c=t.find((function(t){return t.name===e.motherName})),n=t.find((function(t){return t.name===e.fatherName}));return Object(o.a)(Object(o.a)({},e),{},{mother:c,father:n})})),n(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),v("Something went wrong");case 11:return e.prev=11,x(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return Object(h.useEffect)((function(){g()}),[]),Object(s.jsxs)("div",{className:"block",children:[Object(s.jsx)("h1",{className:"title",children:"People Page"}),Object(s.jsxs)("div",{className:"box table-container",children:[j&&Object(s.jsx)(d,{}),!j&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:m}),0===c.length&&Object(s.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),Object(s.jsx)(f,{people:c})]})]})]})},g=function(){return Object(s.jsx)("h1",{className:"title",children:"Page not found"})},N=Object(h.memo)((function(e){var t=e.to,c=e.text;return Object(s.jsx)(r.c,{to:t,className:function(e){var t=e.isActive;return u()("navbar-item",{"has-background-grey-lighter":t})},children:c})})),y=function(){return Object(s.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"navbar-brand",children:[Object(s.jsx)(N,{to:"/",text:"Home"}),Object(s.jsx)(N,{to:"/people",text:"People"})]})})})},w=function(){return Object(s.jsxs)("div",{"data-cy":"app",children:[Object(s.jsx)(y,{}),Object(s.jsx)("main",{className:"section",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)(a.d,{children:[Object(s.jsx)(a.b,{path:"/",element:Object(s.jsx)(j,{})}),Object(s.jsx)(a.b,{path:"/home",element:Object(s.jsx)(a.a,{to:"/",replace:!0})}),Object(s.jsxs)(a.b,{path:"/people",children:[Object(s.jsx)(a.b,{index:!0,element:Object(s.jsx)(v,{})}),Object(s.jsx)(a.b,{path:":slug",element:Object(s.jsx)(v,{})})]}),Object(s.jsx)(a.b,{path:"*",element:Object(s.jsx)(g,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(s.jsx)(r.a,{children:Object(s.jsx)(w,{})}))}},[[26,1,2]]]);
//# sourceMappingURL=main.48f9d751.chunk.js.map