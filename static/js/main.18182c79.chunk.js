(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(21)},17:function(e,t,n){},18:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(10),c=n.n(o),r=(n(17),n(18),n(4)),i=n(1),d=n(2),s=n(5),u=n(3),h=n(6),m=n(11),f=n.n(m),p=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={value:""},n.handleChange=function(e){var t=e.target.value;n.setState(function(e){return{value:t}})},n.handleSubmit=function(e){e.target;window.event.preventDefault();var t=n.state.value;(0,n.props.onAdd)(t),n.setState({value:""})},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"todos"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{onChange:this.handleChange,value:this.state.value,className:"new-todo",placeholder:"What needs to be done?"})))}}]),t}(l.a.Component),k=function(e){var t=e.id,n=e.checked,a=e.todo,o=e.onDestroy,c=e.onChecked;return l.a.createElement("li",{className:n?"completed":""},l.a.createElement("div",{className:"view"},l.a.createElement("input",{onChange:function(){c(t)},checked:n,type:"checkbox",className:"toggle",id:t}),l.a.createElement("label",{htmlFor:t},a),l.a.createElement("button",{onClick:function(){o(t)},type:"button",className:"destroy"})))},v=function(e){return l.a.createElement("section",{className:"main",style:{display:"block"}},l.a.createElement("input",{value:e.checked,onChange:e.onCheckedAll,type:"checkbox",id:"toggle-all",className:"toggle-all"}),l.a.createElement("label",{htmlFor:"toggle-all"},"Markup"),l.a.createElement("ul",{className:"todo-list"},Object(r.a)(e.todos).map(function(t){return l.a.createElement(k,{key:t.id,todo:t.title,id:t.id,onDestroy:e.onDestroy,onChecked:e.onChecked,checked:t.checked})})))},C=function(e){var t=e.todos,n=e.onFilterAll,a=e.activeFilter,o=e.onFilterComplete,c=e.onClearCompleted,r=e.onFilterActive;return l.a.createElement("footer",{className:"footer",style:{display:"block"}},l.a.createElement("span",{className:"todo-count"},"".concat(t.filter(function(e){return!e.checked}).length," itmes left")),l.a.createElement("ul",{className:"filters"},l.a.createElement("li",null,l.a.createElement("a",{href:"#/",onClick:n,className:"all"===a?"selected":""},"All")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/active",onClick:r,className:"active"===a?"selected":""},"Active")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/completed",onClick:o,className:"complete"===a?"selected":""},"Completed"))),l.a.createElement("button",{type:"button",className:"clear-completed",style:t.some(function(e){return e.checked})?{display:"block"}:{display:"none"},onClick:c},"clear completed"))},E=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={todos:[],activeFilter:"all"},n.handleSubmitForm=function(e){var t=f.a.v4();!0===new RegExp(/^[^\s]/).test(e)&&n.setState(function(n){return{todos:[].concat(Object(r.a)(n.todos),[{id:t,title:e,checked:!1}])}})},n.handleChecked=function(e){n.setState(function(t){return{todos:t.todos.map(function(t){return t.id===e?{title:t.title,checked:!t.checked,id:t.id}:t})}})},n.handleCheckedAll=function(){n.setState(function(e){return{todos:e.todos.map(function(t){return{title:t.title,checked:!e.todos.every(function(e){return e.checked}),id:t.id}})}})},n.handleDestroyButton=function(e){n.setState(function(t){return{todos:t.todos.filter(function(t){return t.id!==e})}})},n.handleClearCompleted=function(){n.setState(function(e){return{todos:e.todos.filter(function(e){return!e.checked})}})},n.handleFilterTodos=function(e){n.setState({activeFilter:e})},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.todos,a=t.activeFilter,o="active"===a?n.filter(function(e){return!e.checked}):n.filter(function(e){return e.checked});return l.a.createElement("section",{className:"todoapp"},l.a.createElement(p,{onAdd:this.handleSubmitForm}),l.a.createElement(v,{onDestroy:this.handleDestroyButton,onCheckedAll:this.handleCheckedAll,onChecked:this.handleChecked,todos:"all"===a?n:o}),l.a.createElement(C,{onFilterAll:function(){return e.handleFilterTodos("all")},onFilterActive:function(){return e.handleFilterTodos("active")},onFilterComplete:function(){return e.handleFilterTodos("complete")},onClearCompleted:this.handleClearCompleted,activeFilter:a,todos:n}))}}]),t}(l.a.Component);var b=function(){return l.a.createElement(E,null)};c.a.render(l.a.createElement(b,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.18182c79.chunk.js.map