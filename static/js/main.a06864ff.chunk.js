(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{29:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n=c(23),s=c.n(n),a=c(8),i=(c(28),c(2)),j=(c(29),c(13)),r=c.n(j),b=c(3),l=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"navbar-brand",children:[Object(b.jsx)(a.c,{to:"/",className:function(e){var t=e.isActive;return r()("navbar-item",{"is-active":t})},children:"Home"}),Object(b.jsx)(a.c,{to:"/tabs",className:function(e){var t=e.isActive;return r()("navbar-item",{"is-active":t})},children:"Tabs"})]})})}),Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(i.b,{})})})]})},d=function(e){var t=e.tabs,c=Object(i.r)().tabId,n=t.find((function(e){return e.id===c}))||null;return Object(b.jsx)(b.Fragment,{children:t.some((function(e){return e.id===c}))||void 0===c?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:"title",children:"Tabs page"}),Object(b.jsx)("div",{className:"tabs is-boxed",children:Object(b.jsx)("ul",{children:t.map((function(e){return Object(b.jsx)("li",{"data-cy":"Tab",className:r()({"is-active":e.id===c}),children:Object(b.jsx)(a.b,{to:"/tabs/".concat(e.id),children:e.title})},e.id)}))})}),Object(b.jsx)("div",{className:"block","data-cy":"TabContent",children:n?n.content:"Please select a tab"})]}):Object(b.jsx)("h1",{className:"title",children:"Not Found"})})},o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],h=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(d,{tabs:o})})},x=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(i.e,{children:[Object(b.jsxs)(i.c,{path:"/",element:Object(b.jsx)(l,{}),children:[Object(b.jsx)(i.c,{index:!0,element:Object(b.jsx)("h1",{className:"title",children:"Home page"})}),Object(b.jsx)(i.c,{path:"home",element:Object(b.jsx)(i.a,{to:"/"})}),Object(b.jsx)(i.c,{path:"*",element:Object(b.jsx)("h1",{className:"title",children:"Not found"})})]}),Object(b.jsx)(i.c,{path:"/tabs",element:Object(b.jsx)(l,{}),children:Object(b.jsx)(i.c,{path:":tabId?",element:Object(b.jsx)(h,{})})})]})})};s.a.render(Object(b.jsx)(a.a,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.a06864ff.chunk.js.map