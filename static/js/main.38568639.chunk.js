(this["webpackJsonpcomments-app"]=this["webpackJsonpcomments-app"]||[]).push([[0],{25:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n.n(c),o=n(9),m=n.n(o),a=n(3),i=(n(25),n(11)),u=n(19),l=n(13),r=n.n(l),j=n(1),b=function(t){var e=t.inputText,n=t.setInputText,c=t.comments,s=t.setComments,o=function(t){t.preventDefault(),""===e.trim()?console.log("The field is empty"):(s([{id:Object(u.a)(),text:e}].concat(Object(i.a)(c))),n(""))};return Object(j.jsxs)("form",{className:"comment-form",children:[Object(j.jsx)("textarea",{onChange:function(t){n(t.target.value)},onKeyDown:function(t){"Enter"===t.key&&o(t)},type:"text",className:"comment-textarea",value:e,placeholder:"Empty space for your comment ^_^"}),Object(j.jsx)("button",{onClick:o,type:"submit",className:"comment-button submit-button",children:Object(j.jsx)(r.a,{})})]})},O=n(18),x=n.n(O),d=n(17),f=n.n(d),p=n(16),h=n.n(p),g=n(15),v=n.n(g),C=function(t){var e=t.text,n=t.comment,s=t.comments,o=t.setComments,m=t.index,u=Object(c.useState)(!1),l=Object(a.a)(u,2),r=l[0],b=l[1],O=Object(c.useState)(e),d=Object(a.a)(O,2),p=d[0],g=d[1],C=function(){b(!r)};return Object(j.jsxs)("li",{className:"comment"+(0===m?" selected":""),children:[r?Object(j.jsx)("input",{className:"comment-input",value:p,onChange:function(t){g(t.target.value)}}):Object(j.jsx)("span",{className:"comment-item",children:e}),Object(j.jsx)("div",{className:"comment-button-container",children:r?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{className:"comment-button save-button",disabled:!p,onClick:function(){C();var t=Object(i.a)(s);t[s.findIndex((function(t){return t.id===n.id}))].text=p,o(t)},children:Object(j.jsx)(v.a,{})}),Object(j.jsx)("button",{className:"comment-button cancel-button",onClick:function(){g(e)},children:Object(j.jsx)(h.a,{})})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{className:"comment-button edit-button",onClick:C,children:Object(j.jsx)(f.a,{})}),Object(j.jsx)("button",{className:"comment-button delete-button",onClick:function(){o(s.filter((function(t){return t.id!==n.id})))},children:Object(j.jsx)(x.a,{})})]})})]})},N=function(t){var e=t.comments,n=t.setComments;return Object(j.jsx)("div",{className:"comment-container",children:Object(j.jsx)("ul",{className:"comment-list",children:e.map((function(t,c){return Object(j.jsx)(C,{text:t.text,comments:e,setComments:n,comment:t,index:c},t.id)}))})})};var S=function(){var t=Object(c.useState)(""),e=Object(a.a)(t,2),n=e[0],s=e[1],o=Object(c.useState)([]),m=Object(a.a)(o,2),i=m[0],u=m[1],l=Object(c.useCallback)((function(){localStorage.setItem("comments",JSON.stringify(i))}),[i]);return Object(c.useEffect)((function(){!function(){if(null===localStorage.getItem("comments"))localStorage.setItem("comments",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("comments"));u(t)}}()}),[]),Object(c.useEffect)((function(){l()}),[i,l]),Object(j.jsxs)("div",{className:"comment-box",children:[Object(j.jsx)(b,{inputText:n,setComments:u,comments:i,setInputText:s}),Object(j.jsx)(N,{comments:i,setComments:u})]})},y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,o=e.getLCP,m=e.getTTFB;n(t),c(t),s(t),o(t),m(t)}))};m.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),y()}},[[33,1,2]]]);
//# sourceMappingURL=main.38568639.chunk.js.map