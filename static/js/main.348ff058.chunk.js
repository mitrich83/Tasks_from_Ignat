(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,function(e,n,t){e.exports={superInput:"SuperInputText_superInput__1HK5c",errorInput:"SuperInputText_errorInput__omlL5",error:"SuperInputText_error__34pql",span:"SuperInputText_span__2O1my"}},function(e,n,t){e.exports={spanStyle:"SuperEditableSpan_spanStyle__Wu1Gf",editImg:"SuperEditableSpan_editImg__3FIVx"}},function(e,n,t){e.exports={default:"SuperButton_default__hLGlP",red:"SuperButton_red__1bODc"}},,function(e,n,t){e.exports={App:"App_App__SJwTR"}},,,,,function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),r=t(9),o=t.n(r),s=(t(15),t(10)),i=t.n(s),u=t(4),l=t(2),p=t(3),j=t(6),b=t.n(j),d=t(0),h=function(e){e.type;var n=e.onChange,t=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,o=e.className,s=e.spanClassName,i=Object(p.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(b.a.error," ").concat(s||""),j="".concat(b.a.errorInput," ").concat(o||"");return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(l.a)({type:"text",onChange:function(e){n&&n(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c(e)},className:j},i)),r&&Object(d.jsx)("span",{className:u,children:r})]})},O=t(7),x=t.n(O),m=function(e){e.autoFocus;var n=e.onBlur,t=e.onEnter,c=e.spanProps,r=Object(p.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(a.useState)(!1),s=Object(u.a)(o,2),i=s[0],j=s[1],b=c||{},O=b.children,m=b.onDoubleClick,f=b.className,v=Object(p.a)(b,["children","onDoubleClick","className"]),_="".concat(x.a.spanStyle," ").concat(f);return Object(d.jsx)(d.Fragment,{children:i?Object(d.jsx)(h,Object(l.a)({autoFocus:!0,onBlur:function(e){j(!1),n&&n(e)},onEnter:function(e){"Enter"===e.key&&j(!1),t&&t()}},r)):Object(d.jsx)("div",{children:Object(d.jsxs)("span",Object(l.a)(Object(l.a)({onDoubleClick:function(e){j(!0),m&&m(e)},className:_},v),{},{children:[Object(d.jsx)("img",{className:x.a.editImg,src:"https://icons.iconarchive.com/icons/iconleak/cerulean/256/pen-edit-icon.png"}),O||r.value]}))})})},f=t(8),v=t.n(f),_=function(e){var n=e.red,t=e.className,a=Object(p.a)(e,["red","className"]),c="".concat(n?v.a.red:v.a.default," ").concat(t);return Object(d.jsx)("button",Object(l.a)({className:c},a))};function g(e,n){var t=JSON.stringify(n);localStorage.setItem(e,t)}function S(e,n){var t=n,a=localStorage.getItem(e);return null!==a&&(t=JSON.parse(a)),t}g("test",{x:"A",y:1});S("test",{x:"",y:0});var y=function(){var e=Object(a.useState)(""),n=Object(u.a)(e,2),t=n[0],c=n[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 6",Object(d.jsx)("div",{children:Object(d.jsx)(m,{value:t,onChangeText:c,spanProps:{children:t?void 0:"enter text..."}})}),Object(d.jsx)(_,{onClick:function(){g("editable-span-value",t)},children:"save"}),Object(d.jsx)(_,{onClick:function(){var e=S("editable-span-value",t);c(e)},children:"restore"}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var I=function(){return Object(d.jsxs)("div",{className:i.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(y,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.348ff058.chunk.js.map