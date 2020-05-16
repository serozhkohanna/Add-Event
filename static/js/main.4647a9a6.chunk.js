(this["webpackJsonpreact-ts"]=this["webpackJsonpreact-ts"]||[]).push([[0],{107:function(e,t,n){e.exports=n.p+"static/media/fav.1d42aa7d.svg"},113:function(e,t,n){e.exports=n(297)},118:function(e,t,n){},119:function(e,t,n){},120:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},133:function(e,t,n){},296:function(e,t,n){},297:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(43),l=n.n(c),o=n(20),i=(n(118),n(119),n(120),n(6)),s=function(e){return{type:"SET_EVENT_FORM",payload:e}},m={setEventForm:s},u=Object(i.b)((function(e){return{isEventFormOpen:e.application.isEventFormOpen}}),m)((function(e){return r.a.createElement("button",{onClick:function(){(0,e.setEventForm)(!0)},className:"btn-addEvent"},"Add")})),v=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"title-wrapper"},r.a.createElement("h1",null,"event")),r.a.createElement(u,null))},E=(n(125),n(48),{removeEvent:function(e){return{type:"REMOVE_EVENT",payload:e}}}),d=Object(i.b)((function(e){return{events:e.events.events}}),E)((function(e){var t=e.event,n=(e.events,e.removeEvent);return r.a.createElement("button",{onClick:function(){n(t)},className:"event-config-remove"})})),p=(n(126),function(e){var t=e.setEdit;return r.a.createElement("button",{onClick:function(){t()},className:"event-config-edit"})}),f=n(107),b=n.n(f),N=(n(127),function(e){var t=e.styleClass;return r.a.createElement("img",{className:t||"favourite",src:b.a,alt:"star"})}),h=(n(128),n(71),{setNewEventData:function(e){return{type:"SET_NEW_EVENT_DATA",payload:e}}}),O=Object(i.b)(null,h)((function(e,t,n,a,c){var l=e.item,o=e.setNewEventData;return r.a.createElement("section",{className:"event-edit-form"},r.a.createElement("div",{className:"subtitle"},r.a.createElement("h4",null,"Edit")),r.a.createElement("div",{className:"form-input"},r.a.createElement("input",{type:"text",name:"name",onChange:function(e){l.eventTitle=e.target.value,o(l)},ref:function(e){return e},className:"question",id:"edit-title",required:!0,autoComplete:"off"}),r.a.createElement("label",{htmlFor:"edit-title"},r.a.createElement("span",null,"Edit name"))),r.a.createElement("div",{className:"form-input"},r.a.createElement("input",{type:"text",name:"name",onChange:function(e){l.eventDescription=e.target.value,o(l)},ref:function(e){return e},className:"question",id:"edit-desc",required:!0,autoComplete:"off"}),r.a.createElement("label",{htmlFor:"edit-desc"},r.a.createElement("span",null,"Edit description"))),r.a.createElement("div",{className:"form-input"},r.a.createElement("label",{htmlFor:"even-date"},"Edit date"),r.a.createElement("input",{ref:function(e){return e},onChange:function(e){l.eventDate=e.target.value,o(l)},id:"even-date",className:"date-form",type:"date"})),r.a.createElement("div",{className:"form-input row"},r.a.createElement("input",{ref:function(e){return e},onChange:function(e){l.eventFav=e.target.checked,o(l)},className:"btn-checkbox",id:"even-favourite",type:"checkbox"}),r.a.createElement("label",{htmlFor:"even-favourite"},"Favourite")))})),y={expandEvent:function(e){return{type:"EXPAND_EVENT",payload:e}},setEditEvent:function(e){return{type:"SET_EDIT_EVENT",payload:e}}},F=Object(i.b)(null,y)((function(e){var t=e.eventsList,n=e.expandEvent,c=e.setEditEvent;return r.a.createElement(a.Fragment,null,t&&t.map((function(e,t){return r.a.createElement("div",{key:t,className:"event"},r.a.createElement("div",{className:"dot-wrapper"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",viewBox:"0 0 15 15",fill:"none"},r.a.createElement("circle",{cx:"7.5",cy:"7.5",r:"7",fill:e.eventColor,fillOpacity:"0.5",stroke:"none"}))),r.a.createElement("p",{className:"event-title"},e.eventTitle),r.a.createElement("p",{className:"event-from"},e.eventDateFrom),r.a.createElement("button",{onClick:function(){return function(e){e.eventExpand=!e.eventExpand,n(e)}(e)},className:"show-more"},"show more"),e.eventExpand&&function(e){return r.a.createElement("div",{className:"event-expand"},r.a.createElement("div",{className:"expand-date"},r.a.createElement("p",null,e.eventDate)),r.a.createElement("div",{className:"expand-desc"},r.a.createElement("p",null,e.eventDescription)),e.eventFav&&r.a.createElement(N,{styleClass:"event-favourite"}))}(e),r.a.createElement("div",{className:"event-config"},r.a.createElement(p,{setEdit:function(){return function(e){e.eventEdit=!e.eventEdit,c(e)}(e)}}),r.a.createElement(d,{event:e})),e.eventEdit&&r.a.createElement(O,{item:e}))})))})),g=(n(129),function(e){var t=e.currentEvent;return r.a.createElement("section",{className:"event-layout"},r.a.createElement(F,{eventsList:t}))}),j=(n(130),Object(i.b)((function(e){return{events:e.events.events}}))((function(e){var t=e.events.filter((function(e){if(!e.eventOutdated)return e}));return r.a.createElement("main",{className:"home-page"},r.a.createElement("div",{className:"home-page-addEvent"},r.a.createElement(u,null)),r.a.createElement(g,{currentEvent:t}))}))),T=Object(i.b)((function(e){return{events:e.events.events}}))((function(e){var t=e.events.filter((function(e){if(e.eventOutdated)return e}));return r.a.createElement("main",null,r.a.createElement(g,{currentEvent:t}))})),D=(n(131),n(19)),w=function(){return r.a.createElement("section",{className:"page-404"},r.a.createElement("h3",{className:"page-404-title"},"This page has gone missing."),r.a.createElement(D.b,{to:"/addevent",className:"page-404-button"},"Go home"))},x=(n(133),function(){return r.a.createElement("section",{className:"breadcrumbs"},r.a.createElement(D.b,{to:"/addevent",className:"breadcrumbs-item"},"Home"),r.a.createElement(D.b,{to:"/addevent/outdated",className:"breadcrumbs-item"},"Old"))}),_=n(69),k=n(109),C=(n(296),{setEventForm:s}),V=Object(i.b)(null,C)((function(e){var t=e.setEventForm,n=e.styleClass,a=e.childResponse;return r.a.createElement("button",{className:n,onClick:function(){t(!1),a(!1)}},r.a.createElement("div",null))})),S={setEvent:function(e){return{type:"SET_EVENT",payload:e}},setEventForm:s},A=Object(i.b)((function(e){return{isEventFormOpen:e.application.isEventFormOpen}}),S)((function(e){var t=e.setEvent,n=e.setEventForm,c=e.isEventFormOpen,l=e.eventTitleField,o=e.eventDescField,i=e.eventDateField,s=e.eventFavField,m=(e.eventOutdated,Object(a.useState)("#000")),u=Object(_.a)(m,2),v=u[0],E=u[1],d=Object(a.useState)(!1),p=Object(_.a)(d,2),f=p[0],b=p[1],N=function(e){E(e.hex)},h=function(){b(!f)},O=function(){var e={eventTitle:l.value,eventDescription:o.value,eventDate:i.value,eventFav:s.checked,eventColor:v,eventExpand:!1,eventEdit:!1};l.value&&o.value&&o.value&&i.value&&(t(e),n(!1),b(!1),l.value="",o.value="",i.value="",s.checked=!1)},y=function(e){b(e)};return c&&r.a.createElement("section",{className:"full-width"},r.a.createElement("div",{className:"eventForm"},r.a.createElement("div",{className:"eventForm-wrapper"},r.a.createElement(V,{childResponse:y,styleClass:"btn-closeForm"}),r.a.createElement("div",{className:"main-title"},r.a.createElement("h2",null,"Tell about your event")),r.a.createElement("div",{className:"form-input"},r.a.createElement("input",{type:"text",name:"name",ref:function(e){return l=e},className:"question",id:"even-title",required:!0,autoComplete:"off"}),r.a.createElement("label",{htmlFor:"even-title"},r.a.createElement("span",null,"Event title"))),r.a.createElement("div",{className:"form-input"},r.a.createElement("input",{type:"text",name:"name",ref:function(e){return o=e},id:"even-desc",className:"question",required:!0,autoComplete:"off"}),r.a.createElement("label",{htmlFor:"even-desc"},r.a.createElement("span",null,"Event description"))),r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"form-input"},r.a.createElement("label",{htmlFor:"even-date"},"Date"),r.a.createElement("input",{ref:function(e){return i=e},id:"even-date",className:"date-form",type:"date"})),r.a.createElement("div",{className:"form-input-colorpicker"},r.a.createElement("label",{htmlFor:"even-color"},"Choose color"),r.a.createElement("button",{className:"btn-change-color",style:{background:v},onClick:h}),f&&r.a.createElement(k.TwitterPicker,{onChange:N,color:v}))),r.a.createElement("div",{className:"form-favourites"},r.a.createElement("input",{ref:function(e){return s=e},className:"btn-checkbox",id:"even-favourite",type:"checkbox"}),r.a.createElement("label",{htmlFor:"even-favourite"},"Favourite")),r.a.createElement("div",{className:"add-event-wrapper"},r.a.createElement("button",{onClick:O,className:"btn-setEvent"},r.a.createElement("div",null))))))}));var q=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(x,null),r.a.createElement(A,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/addevent",component:j}),r.a.createElement(o.a,{exact:!0,path:"/addevent/outdated",component:T}),r.a.createElement(o.a,{component:w})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=n(18),R=n(4),L={isEventFormOpen:!1};var W=n(112),B={events:[]};var I=Object(M.combineReducers)({application:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_EVENT_FORM":return Object(R.a)(Object(R.a)({},e),{},{isEventFormOpen:t.payload})}return e},events:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_EVENT":return Object(R.a)(Object(R.a)({},e),{},{events:[].concat(Object(W.a)(e.events),[t.payload])});case"REMOVE_EVENT":return Object(R.a)(Object(R.a)({},e),{},{events:e.events.filter((function(e){return e.id!==t.payload.id}))});case"EXPAND_EVENT":return Object(R.a)(Object(R.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?(e.eventExpand=t.payload.eventExpand,e):e}))});case"SET_EDIT_EVENT":return Object(R.a)(Object(R.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?(e.eventEdit=t.payload.eventEdit,e):e}))});case"SET_NEW_EVENT_DATA":return Object(R.a)(Object(R.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?e=t.payload:e}))})}return e}}),P=n(110),J=n(111),X=n(30),G=n.n(X),H=Date.parse(new Date),$=Object(M.createStore)(I,Object(P.composeWithDevTools)(Object(M.applyMiddleware)(J.a,(function(e){return function(e){return function(t){var n=t.type,a=t.payload;if("SET_EVENT"===n){var r=G()(a.eventDate).format("LL"),c=G()(a.eventDate).fromNow(),l=Object(R.a)(Object(R.a)({},a),{},{eventDate:r,eventDateFrom:c,id:Math.round(1e5*Math.random()),eventOutdated:H-Date.parse(new Date(a.eventDate))>0}),o=Object(R.a)(Object(R.a)({},t),{},{payload:l});e(o)}else if("SET_NEW_EVENT_DATA"===n){var i=G()(a.eventDate).format("LL"),s=G()(a.eventDate).fromNow(),m=Object(R.a)(Object(R.a)({},a),{},{eventDate:i,eventOutdated:H-Date.parse(new Date(a.eventDate))>0,eventDateFrom:s}),u=Object(R.a)(Object(R.a)({},t),{},{payload:m});e(u)}else e(t)}}}))));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:$},r.a.createElement(D.a,null,r.a.createElement(q,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},48:function(e,t,n){},71:function(e,t,n){}},[[113,1,2]]]);
//# sourceMappingURL=main.4647a9a6.chunk.js.map