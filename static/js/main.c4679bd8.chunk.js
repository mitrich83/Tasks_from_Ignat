(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports={div:"Header_div__bVVFr",preJunior:"Header_preJunior__1eRSa",junior:"Header_junior__KWAOu",juniorPlus:"Header_juniorPlus__1VuKh",button:"Header_button___JUxU",active:"Header_active__2t569"}},function(e,t,a){e.exports={message:"Message_message__1AV7o",avatar:"Message_avatar__3n_JT",messageBox:"Message_messageBox__pO-3c",angle:"Message_angle__32ji-",name:"Message_name__37PUS",messageText:"Message_messageText__1wZoP",time:"Message_time__22wPC"}},function(e,t,a){e.exports={container:"Affairs_container__yDgKA",tasks:"Affairs_tasks__1ZvDZ",filterButtons:"Affairs_filterButtons__1-n4s",active:"Affairs_active__33Oft"}},,,function(e,t,a){e.exports={block:"Greeting_block__2DMIN",errorMessage:"Greeting_errorMessage__2v6yh",error:"Greeting_error__36Zjg",notError:"Greeting_notError__1Fwxs",totalUsers:"Greeting_totalUsers__gUW-T",buttonAdd:"Greeting_buttonAdd__36oOj"}},,,function(e,t,a){e.exports={container:"Affair_container__5VxqV",high:"Affair_high__aTsmy",middle:"Affair_middle__2LtVv",low:"Affair_low__z5DnP"}},,,,,,function(e,t,a){e.exports={default:"Button_default__1-9jh",red:"Button_red__3d2ZR"}},function(e,t,a){e.exports={superInput:"Input_superInput__1a2yc",errorInput:"Input_errorInput__1XVxv",error:"Input_error__lKAe2",span:"Input_span__3mv1M"}},function(e,t,a){e.exports={superInput:"SuperInputText_superInput__1HK5c",errorInput:"SuperInputText_errorInput__omlL5",error:"SuperInputText_error__34pql",span:"SuperInputText_span__2O1my"}},function(e,t,a){e.exports={blue:"HW4_blue__3xN5C",column:"HW4_column__1l5lh",testSpanError:"HW4_testSpanError__1ydNm"}},function(e,t,a){e.exports={default:"SuperButton_default__hLGlP",red:"SuperButton_red__1bODc"}},function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__3e6ni",spanClassName:"SuperCheckbox_spanClassName__1lJzl"}},,,function(e,t,a){e.exports={App:"App_App__SJwTR"}},,function(e,t,a){e.exports={default:"Button_default__1ebRT",red:"Button_red__K1hTV"}},,,,,,function(e,t,a){},,,,,,,function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(31),s=a.n(c),i=(a(40),a(32)),o=a.n(i),l=a(13),j=a(10),u=a.n(j),d=a(0);var b=function(){return Object(d.jsxs)("div",{className:u.a.div,children:[Object(d.jsx)(l.b,{className:u.a.preJunior,activeClassName:u.a.active,to:"pre-junior",children:"| pre-junior |"}),Object(d.jsx)(l.b,{className:u.a.junior,activeClassName:u.a.active,to:"junior",children:" junior "}),Object(d.jsx)(l.b,{className:u.a.juniorPlus,activeClassName:u.a.active,to:"junior-plus",children:"| junior+ |"}),Object(d.jsx)("button",{className:u.a.button})]})},_=a(2);var x=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},h=a(11),m=a.n(h);var O=function(e){return Object(d.jsxs)("div",{className:m.a.message,children:[Object(d.jsx)("div",{className:m.a.avatar,children:Object(d.jsx)("img",{src:e.avatar})}),Object(d.jsx)("div",{className:m.a.angle}),Object(d.jsxs)("div",{className:m.a.messageBox,children:[Object(d.jsx)("div",{className:m.a.name,children:e.name}),Object(d.jsx)("div",{className:m.a.messageText,children:e.message}),Object(d.jsx)("div",{className:m.a.time,children:e.time})]})]})},f="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",p="Artem",v="npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",g="20:00";var N=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(O,{avatar:f,name:p,message:v,time:g}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},k=a(8),C=a(7),y=a(9),A=a(24),w=a.n(A),S=function(e){var t=e.red,a=e.className,r=e.title,n=e.callback,c=Object(y.a)(e,["red","className","title","callback"]),s="".concat(t?w.a.red:w.a.default," ").concat(a);return Object(d.jsx)("button",Object(C.a)(Object(C.a)({className:s},c),{},{onClick:n,children:r}))},T=a(18),I=a.n(T);var P=function(e){var t=I.a[e.affair.priority];return Object(d.jsxs)("div",{className:I.a.container,children:[Object(d.jsx)("div",{className:I.a.item,children:e.affair.name}),Object(d.jsx)("div",{className:t,children:e.affair.priority}),Object(d.jsx)("div",{className:I.a.item,children:Object(d.jsx)(S,{title:"X",callback:function(){e.deleteAffairCallback(e.affair._id)},red:!0})})]})},B=a(12),E=a.n(B);var H=function(e){var t=e.data.map((function(t){return Object(d.jsx)(P,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{className:E.a.container,children:[Object(d.jsx)("div",{className:E.a.tasks,children:t}),Object(d.jsxs)("div",{className:E.a.filterButtons,children:[Object(d.jsx)(S,{className:"all"===e.filter?E.a.active:"",title:"All",callback:function(){e.setFilter("all")}}),Object(d.jsx)(S,{className:"high"===e.filter?E.a.active:"",title:"High",callback:function(){e.setFilter("high")}}),Object(d.jsx)(S,{className:"middle"===e.filter?E.a.active:"",title:"Middle",callback:function(){e.setFilter("middle")}}),Object(d.jsx)(S,{className:"low"===e.filter?E.a.active:"",title:"Low",callback:function(){e.setFilter("low")}})]})]})},K=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var M=function(){var e=Object(r.useState)(K),t=Object(k.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)("all"),s=Object(k.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):e}(a,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(H,{data:l,setFilter:o,deleteAffairCallback:function(e){return n(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))},filter:i}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},U=a(35),F=a(15),J=a.n(F),V=a(25),W=a.n(V),G=function(e){e.type;var t=e.onChange,a=e.onChangeText,r=e.onKeyPress,n=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(y.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(W.a.error," ").concat(i||""),j="".concat(W.a.errorInput," ").concat(s||"");return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(C.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),n&&"Enter"===e.key&&n()},className:j},o)),c&&Object(d.jsx)("span",{className:l,children:c})]})},Z=a(34),D=a.n(Z),R=function(e){return Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:D.a.default,onClick:e.callback,disabled:!e.name,children:"Add"})})},L=function(e){var t=e.name,a=e.setNameCallback,r=e.addUser,n=e.error,c=e.totalUsers,s=e.onKeyPressHandler,i=n?J.a.error:J.a.notError;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:J.a.block,children:[Object(d.jsx)(G,{value:t,onChange:a,className:i,onKeyPress:s}),Object(d.jsx)("span",{className:J.a.totalUsers,children:c}),Object(d.jsx)(R,{name:t,callback:r})]}),Object(d.jsx)("div",{children:Object(d.jsx)("span",{className:J.a.errorMessage,children:n})})]})},q=function(e){var t=e.users,a=e.addUserCallback,n=Object(r.useState)(""),c=Object(k.a)(n,2),s=c[0],i=c[1],o=Object(r.useState)(""),l=Object(k.a)(o,2),j=l[0],u=l[1],b=function(){a(s),alert("Hi, ".concat(s,"!")),i("")},_=t.length;return Object(d.jsx)(L,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),u("")):(i(""),u("Name should be input"))},addUser:b,error:j,totalUsers:_,onKeyPressHandler:function(e){"Enter"===e.key&&s&&b()}})},X=a(49);var z=function(){var e=Object(r.useState)([]),t=Object(k.a)(e,2),a=t[0],n=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(q,{users:a,addUserCallback:function(e){var t={id:Object(X.a)(),name:e},r=[].concat(Object(U.a)(a),[t]);n(r)}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},Y=a(26),$=a.n(Y),Q=function(e){e.type;var t=e.onChange,a=e.onChangeText,r=e.onKeyPress,n=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(y.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat($.a.error," ").concat(i||""),j="".concat($.a.errorInput," ").concat(s||"");return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(C.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),n&&"Enter"===e.key&&n(e)},className:j},o)),c&&Object(d.jsx)("span",{className:l,children:c})]})},ee=a(27),te=a.n(ee),ae=a(28),re=a.n(ae),ne=function(e){var t=e.red,a=e.className,r=Object(y.a)(e,["red","className"]),n="".concat(t?re.a.red:re.a.default," ").concat(a);return Object(d.jsx)("button",Object(C.a)({className:n},r))},ce=a(29),se=a.n(ce),ie=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,r=e.className,n=(e.spanClassName,e.children),c=Object(y.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(se.a.checkbox," ").concat(r||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(C.a)({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:s},c)),n&&Object(d.jsx)("span",{className:se.a.spanClassName,children:n})]})};var oe=function(){var e=Object(r.useState)(""),t=Object(k.a)(e,2),a=t[0],n=t[1],c=a?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},i=Object(r.useState)(!1),o=Object(k.a)(i,2),l=o[0],j=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:te.a.column,children:[Object(d.jsx)(Q,{value:a,onChangeText:n,onEnter:s,error:c}),Object(d.jsx)(Q,{className:te.a.blue}),Object(d.jsx)(ne,{children:"default"}),Object(d.jsx)(ne,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(ne,{disabled:!0,children:"disabled"}),Object(d.jsx)(ie,{checked:l,onChangeChecked:j,children:"some text "}),Object(d.jsx)(ie,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var le=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(N,{}),Object(d.jsx)(M,{}),Object(d.jsx)(z,{}),Object(d.jsx)(oe,{})]})};var je=function(){return Object(d.jsx)("div",{})};var ue=function(){return Object(d.jsx)("div",{})},de="/pre-junior",be="/junior",_e="/junior-plus";var xe=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(_.d,{children:[Object(d.jsx)(_.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(_.a,{to:de})}}),Object(d.jsx)(_.b,{path:de,render:function(){return Object(d.jsx)(le,{})}}),Object(d.jsx)(_.b,{path:be,render:function(){return Object(d.jsx)(je,{})}}),Object(d.jsx)(_.b,{path:_e,render:function(){return Object(d.jsx)(ue,{})}}),Object(d.jsx)(_.b,{render:function(){return Object(d.jsx)(x,{})}})]})})};var he=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(b,{}),Object(d.jsx)(xe,{})]})})};var me=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(he,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(me,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[47,1,2]]]);
//# sourceMappingURL=main.c4679bd8.chunk.js.map