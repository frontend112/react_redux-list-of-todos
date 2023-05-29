(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{31:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var a,s,n=c(11),r=c.n(n),o=c(10),l=c(20),i=c(8),d=c(17),u=c(18),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/REMOVE":return null;case"currentTodo/SET":return t.payload;default:return e}},h=c(7);!function(e){e.currentTodoSet="currentTodo/SET",e.currentTodoDelete="currentTodo/REMOVE",e.changeTodosStatus="todos/CHANGESTATUS",e.changeTodosQuery="todos/CHANGEQUERY",e.todosSet="todos/SET"}(a||(a={})),function(e){e.all="all",e.active="active",e.completed="completed"}(s||(s={}));var b={searchedTitle:"",selectedStatus:s.all},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.changeTodosQuery:return Object(h.a)(Object(h.a)({},e),{},{searchedTitle:t.payload});case a.changeTodosStatus:return Object(h.a)(Object(h.a)({},e),{},{selectedStatus:t.payload});default:return e}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.type===a.todosSet?t.payload:e},p=Object(i.combineReducers)({currentTodo:j,filter:m,todos:O}),x=Object(i.createStore)(p,Object(d.composeWithDevTools)(Object(i.applyMiddleware)(u.a))),f=c(4),v=c(3),y=c(2),N=c.n(y),g=c(0),T=(c(29),c(30),c(19)),S=c.n(T),w=o.b,k=o.c,E=(c(31),c(1)),C=function(){return Object(E.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(E.jsx)("div",{className:"Loader__content"})})},I=function(e){var t,c=e.error,a=k((function(e){return e.todos})),n=k((function(e){return e.filter})),r=n.searchedTitle,o=n.selectedStatus,l=w(),i=null===(t=k((function(e){return e.currentTodo})))||void 0===t?void 0:t.id,d=Object(g.useMemo)((function(){return a.filter((function(e){var t=e.title,c=e.completed;if(""!==r&&!t.toLocaleLowerCase().includes(r.toLocaleLowerCase()))return!1;switch(o){case s.active:return!c;case s.completed:return c;default:return!0}}))}),[a,r,o]);return Object(E.jsxs)(E.Fragment,{children:[c&&Object(E.jsx)("p",{className:"notification is-warning",children:c}),a.length?Object(E.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(E.jsx)("thead",{children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{children:"#"}),Object(E.jsx)("th",{children:Object(E.jsx)("span",{className:"icon",children:Object(E.jsx)("i",{className:"fas fa-check"})})}),Object(E.jsx)("th",{children:"Title"}),Object(E.jsx)("th",{children:" "})]})}),Object(E.jsx)("tbody",{children:d.map((function(e){var t=e.id,c=e.completed,a=e.title,s=e.userId;return Object(E.jsxs)("tr",{"data-cy":"todo",children:[Object(E.jsx)("td",{className:"is-vcentered",children:t}),Object(E.jsx)("td",{className:"is-vcentered",children:c&&Object(E.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(E.jsx)("i",{className:"fas fa-check"})})}),Object(E.jsx)("td",{className:"is-vcentered is-expanded",children:Object(E.jsx)("p",{className:c?"has-text-success":"has-text-danger",children:a})}),Object(E.jsx)("td",{className:"has-text-right is-vcentered",children:Object(E.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(e){var t=e.id,c=e.completed,a=e.title,s=e.userId;return l({type:"currentTodo/SET",payload:{id:t,completed:c,title:a,userId:s}})}({id:t,completed:c,title:a,userId:s})},children:Object(E.jsx)("span",{className:"icon",children:Object(E.jsx)("i",{className:S()("far",{"fa-eye-slash":t===i},{"fa-eye":t!==i})})})})})]},t)}))})]}):Object(E.jsx)(C,{})]})},L=function(){var e=w(),t=k((function(e){return e.filter})),c=t.selectedStatus,n=t.searchedTitle;return Object(E.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(E.jsx)("p",{className:"control",children:Object(E.jsx)("span",{className:"select",children:Object(E.jsxs)("select",{"data-cy":"statusSelect",onChange:function(t){var c;switch(t.target.value){case"active":c=s.active;break;case"completed":c=s.completed;break;default:c=s.all}e({type:a.changeTodosStatus,payload:c})},value:c,children:[Object(E.jsx)("option",{value:s.all,children:"All"}),Object(E.jsx)("option",{value:s.active,children:"Active"}),Object(E.jsx)("option",{value:s.completed,children:"Completed"})]})})}),Object(E.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(E.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:n,onChange:function(t){return e({type:a.changeTodosQuery,payload:t.target.value})}}),Object(E.jsx)("span",{className:"icon is-left",children:Object(E.jsx)("i",{className:"fas fa-magnifying-glass"})}),n&&Object(E.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(E.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return e({type:a.changeTodosQuery,payload:""})}})})]})]})};function A(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var M=function(e){return A("/users/".concat(e))},Q=function(e){var t=e.currentTodo,c=Object(g.useState)(null),a=Object(v.a)(c,2),s=a[0],n=a[1],r=w(),o=Object(g.useState)(""),l=Object(v.a)(o,2),i=l[0],d=l[1],u=t.id,j=t.title,h=t.completed,b=t.userId,m=function(){var e=Object(f.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M(b);case 3:t=e.sent,n(t),d(""),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),d("unable to get user");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(g.useEffect)((function(){m()}),[]),Object(E.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(E.jsx)("div",{className:"modal-background"}),!s&&!i&&Object(E.jsx)(C,{}),i&&Object(E.jsx)("p",{className:"notification is-warning",children:i}),s&&Object(E.jsxs)("div",{className:"modal-card",children:[Object(E.jsxs)("header",{className:"modal-card-head",children:[Object(E.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",u]}),Object(E.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return r({type:"currentTodo/REMOVE"})}})]}),Object(E.jsxs)("div",{className:"modal-card-body",children:[Object(E.jsx)("p",{className:"block","data-cy":"modal-title",children:j}),Object(E.jsxs)("p",{className:"block","data-cy":"modal-user",children:[h?Object(E.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(E.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",s&&Object(E.jsx)("a",{href:"mailto:".concat(s.email),children:s.name})]})]})]})]})},R=function(){var e=Object(g.useState)(""),t=Object(v.a)(e,2),c=t[0],s=t[1],n=w(),r=k((function(e){return e.currentTodo})),o=function(){var e=Object(f.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A("/todos");case 3:t=e.sent,n({payload:t,type:a.todosSet}),s(""),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s("unable to get todos");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(g.useEffect)((function(){o()}),[]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("div",{className:"section",children:Object(E.jsx)("div",{className:"container",children:Object(E.jsxs)("div",{className:"box",children:[Object(E.jsx)("h1",{className:"title",children:"Todos:"}),Object(E.jsx)("div",{className:"block",children:Object(E.jsx)(L,{})}),Object(E.jsx)("div",{className:"block",children:Object(E.jsx)(I,{error:c})})]})})}),r&&Object(E.jsx)(Q,{currentTodo:r})]})},_=function(){return Object(E.jsx)(o.a,{store:x,children:Object(E.jsx)(l.a,{children:Object(E.jsx)(R,{})})})};r.a.render(Object(E.jsx)(_,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.5ef8bb38.chunk.js.map