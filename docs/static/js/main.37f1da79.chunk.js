(this["webpackJsonpgif-expert-app-2"]=this["webpackJsonpgif-expert-app-2"]||[]).push([[0],{14:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var n=c(1),o=c(8),s=c.n(o),a=(c(14),c(3)),i=Object(n.createContext)(null),d=c(6),r=c(2),j=function(t){var e=Object(n.useState)(t),c=Object(a.a)(e,2),o=c[0],s=c[1];return[o,function(t){s(Object(r.a)(Object(r.a)({},o),{},Object(d.a)({},t.target.name,t.target.value)))},function(){s(t)}]},l=c(0),b=function(){var t=Object(n.useContext)(i),e=t.dispatch,c=t.editionMode,o=t.setEditionMode,s=j({task:""}),d=Object(a.a)(s,3),r=d[0].task,b=d[1],u=d[2];return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Form"}),Object(l.jsx)("hr",{}),Object(l.jsxs)("form",{onSubmit:c.state?function(t){t.preventDefault(),e({type:"edit",payload:{id:c.id,todo:r}}),o({id:"",state:!1}),u()}:function(t){t.preventDefault(),r.trim().length>2&&(e({type:"add",payload:{id:(new Date).getTime(),todo:r,done:!1}}),u())},children:[Object(l.jsx)("input",{className:"form-control mb-3",type:"text",placeholder:c.state?"".concat(c.todo):"Introduce a todo ...",name:"task",value:r,onChange:b,autoComplete:"off"}),Object(l.jsx)("input",{className:c.state?"btn btn-outline-warning":"btn btn-outline-primary",type:"submit",value:c.state?"Edit":"Add",disabled:!(r.trim().length>2)}),c.state&&Object(l.jsx)("input",{onClick:function(){o({id:"",state:!1})},className:" ml-3 btn btn-outline-danger",type:"button",value:"Cancel"})]})]})},u=function(t){var e=t.todo,c=t.id,o=t.done,s=t.index,a=Object(n.useContext)(i),d=a.dispatch,r=a.setEditionMode;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:s+1}),Object(l.jsx)("td",{children:Object(l.jsxs)("span",{className:"".concat(o&&"complete"),children:[e," "]})}),Object(l.jsx)("td",{children:c}),Object(l.jsxs)("td",{children:[o?Object(l.jsx)("span",{children:"\u2714\ufe0f"}):Object(l.jsx)("span",{children:"\u274c"})," ",Object(l.jsx)("button",{onClick:function(){d({type:"toggle",payload:c})},className:"btn btn-outline-info",type:"button",children:"Change"})]}),Object(l.jsxs)("td",{children:[Object(l.jsx)("button",{onClick:function(){r({id:c,state:!0,todo:e})},className:"btn btn-outline-warning mr-2",type:"button",children:"Edit"}),Object(l.jsx)("button",{onClick:function(){d({type:"delete",payload:c})},className:"btn btn-outline-danger",type:"button",children:"Delete"})]})]})},O=function(){var t=Object(n.useContext)(i).todos;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"List Todos"}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{className:"table-x",children:Object(l.jsxs)("table",{className:"table table-dark",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"col",children:"N\xb0"}),Object(l.jsx)("th",{scope:"col",children:"Todo"}),Object(l.jsx)("th",{scope:"col",children:"Id"}),Object(l.jsx)("th",{scope:"col",children:"Done"}),Object(l.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(l.jsx)("tbody",{children:t.map((function(t,e){return Object(l.jsx)(u,Object(r.a)(Object(r.a)({},t),{},{index:e}),t.id)}))})]})})]})},h=c(9),p=function(t,e){switch(e.type){case"add":return[].concat(Object(h.a)(t),[e.payload]);case"toggle":return t.map((function(t){return t.id===e.payload?Object(r.a)(Object(r.a)({},t),{},{done:!t.done}):t}));case"delete":return t.filter((function(t){return t.id!==e.payload}));case"edit":return t.map((function(t){return t.id===e.payload.id?Object(r.a)(Object(r.a)({},t),{},{todo:e.payload.todo}):t}));default:return t}},x=function(){var t=Object(n.useReducer)(p,[],(function(){return JSON.parse(localStorage.getItem("list-todos-best"))||[]})),e=Object(a.a)(t,2),c=e[0],o=e[1],s=Object(n.useState)({id:"",state:!1,todo:""}),d=Object(a.a)(s,2),r=d[0],j=d[1];return Object(n.useEffect)((function(){localStorage.setItem("list-todos-best",JSON.stringify(c))}),[c]),Object(l.jsx)("div",{children:Object(l.jsxs)(i.Provider,{value:{todos:c,dispatch:o,editionMode:r,setEditionMode:j},children:[Object(l.jsx)("h1",{children:"AppReducer! "}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-9",children:Object(l.jsx)(O,{})}),Object(l.jsx)("div",{className:"col-3",children:Object(l.jsx)(b,{})})]})]})})};s.a.render(Object(l.jsx)(x,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.37f1da79.chunk.js.map