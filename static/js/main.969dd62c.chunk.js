(this["webpackJsonpramp-test"]=this["webpackJsonpramp-test"]||[]).push([[0],{1:function(e,t,c){e.exports={list:"App_list__13ELI",App:"App_App__1aeHe",card:"App_card__SMf5X",output:"App_output__2SQuO",h3:"App_h3__2NwpT"}},11:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(2),r=c.n(a),i=c(5),s=c.n(i),j=(c(11),c(4)),l=c(1),d=c.n(l);function o(){var e=Object(a.useState)(null),t=Object(j.a)(e,2),c=t[0],r=t[1];return Object(a.useEffect)((function(){var e=new Date;r("".concat(e.toLocaleDateString(),", ").concat(e.toLocaleTimeString()));var t=setInterval((function(){var e=new Date;r("".concat(e.toLocaleDateString(),", ").concat(e.toLocaleTimeString()))}),1e3);return function(){return clearInterval(t)}}),[r]),Object(n.jsx)("div",{children:c})}function u(e){var t=e.input,c=function(e){var t=e.children;return Object(n.jsx)("div",{className:d.a.output,children:t})};return"object"===typeof t?t instanceof Array?Object(n.jsx)(c,{children:Object(n.jsx)("ul",{className:d.a.list,children:t.map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsx)("div",{children:e})},t)}))})}):Object(n.jsx)(c,{children:Object(n.jsx)("div",{children:t.toString()})}):!1===!!t?Object(n.jsx)(c,{children:Object(n.jsx)("div",{children:Object(n.jsx)(o,{})})}):Object(n.jsx)(c,{children:Object(n.jsx)("div",{children:t})})}var h=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),c=t[0],r=t[1];return Object(n.jsxs)("div",{className:d.a.App,children:[Object(n.jsxs)("div",{className:d.a.card,children:[Object(n.jsxs)("select",{defaultValue:"undefined",onChange:function(e){switch(e.target.value){case"array":r(["This","is an","array!"]);break;case"undefined":r(void 0);break;case"other":r(12345)}},name:"inputSelect",children:[Object(n.jsx)("option",{value:"array",children:"Array ['This', 'is an', 'array!']"}),Object(n.jsx)("option",{value:"undefined",children:"Falsy/Undefined"}),Object(n.jsx)("option",{value:"other",children:"Other (number)"})]}),Object(n.jsx)(u,{input:c})]}),Object(n.jsxs)("div",{className:d.a.card,children:[Object(n.jsx)("h3",{className:d.a.h3,children:"Array"}),Object(n.jsx)(u,{input:["Number array",1,0,2,"with strings"]})]}),Object(n.jsxs)("div",{className:d.a.card,children:[Object(n.jsx)("h3",{className:d.a.h3,children:"Falsy"}),Object(n.jsx)(u,{input:""})]}),Object(n.jsxs)("div",{className:d.a.card,children:[Object(n.jsx)("h3",{className:d.a.h3,children:"Any other"}),Object(n.jsx)(u,{input:"Hello world!"})]})]})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(h,{})}),document.getElementById("root")),b()}},[[12,1,2]]]);
//# sourceMappingURL=main.969dd62c.chunk.js.map