(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),o=n.n(c),i=n(6),r=n(8),a=n(1),u=(n(13),n(14),n(4)),l=n.n(u),b=n(0),j=function(t){var e=t.goods;return Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})},d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var h=function(){var t=Object(a.useState)(s.NONE),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(!1),u=Object(i.a)(o,2),h=u[0],N=u[1],O=function(t,e){var n=Object(r.a)(t),c=e.sortType,o=e.isReversed;return n.sort((function(t,e){switch(c){case s.ALPHABET:return t.localeCompare(e);case s.LENGTH:return t.length-e.length;default:return 0}})),o&&n.reverse(),n}(d,{sortType:n,isReversed:h}),f=n!==s.NONE;return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":n!==s.ALPHABET}),onClick:function(){c(s.ALPHABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:l()("button is-success",{"is-light":n!==s.LENGTH}),onClick:function(){c(s.LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:l()("button is-warning",{"is-light":!1===h}),onClick:function(){N((function(t){return!t}))},children:"Reverse"}),(f||h)&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(s.NONE),N(!1)},children:"Reset"})]}),Object(b.jsx)(j,{goods:O})]})};o.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5ffcee30.chunk.js.map