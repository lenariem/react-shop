(this["webpackJsonpreact-book-store"]=this["webpackJsonpreact-book-store"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(7),o=c.n(a),s=(c(14),c(15),c.p+"static/media/logo.5e4e7f73.svg"),r=c.p+"static/media/github.f11a34fa.svg",l=c(0);function d(){return Object(l.jsx)("header",{children:Object(l.jsx)("nav",{className:"deep-orange lighten-1",children:Object(l.jsxs)("div",{className:"nav-wrapper deep-orange lighten-1",children:[Object(l.jsx)("div",{className:"brand-logo",onClick:function(){return window.location.reload()},children:Object(l.jsx)("img",{src:s,alt:"logo",className:"logoIcon"})}),Object(l.jsx)("span",{className:"logoText",children:"IT BOOKS"}),Object(l.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://github.com/lenariem/react-shop",title:"Repo on GitHub",target:"blank",children:Object(l.jsx)("img",{src:r,alt:"github link",className:"gitIcon"})})})})]})})})}var j=c(9),u=c(2),b=c(3),h="https://api.itbook.store/1.0/",O=c.p+"static/media/preloader.42905077.svg";c(17);function p(){return Object(l.jsxs)("div",{className:"preloaderContainer",children:[Object(l.jsx)("img",{src:O,alt:"loading"}),Object(l.jsx)("p",{children:"Loading..."})]})}c(18),c(19);function m(e){var t=e.isbn13,c=e.title,i=void 0===c?"No Info":c,a=e.subtitle,o=void 0===a?"No description":a,s=e.image,r=void 0===s?"No Book Cover available":s,d=e.price,j=void 0===d?"No Info":d,u=e.addToCart,O=Object(n.useState)("About Book"),p=Object(b.a)(O,2),m=p[0],x=p[1],f=Object(n.useState)([]),g=Object(b.a)(f,2),v=g[0],y=g[1],N=v.authors,k=v.language,C=v.pages,w=v.year,F=v.desc,q=function(e){x("About Book"===m?Object(l.jsx)("i",{className:"material-icons",children:"keyboard_backspace"}):"About Book"),fetch("".concat(h,"books/").concat(e)).then((function(e){return e.json()})).then((function(e){e&&y(e)})).catch((function(e){console.log(e)}))};return Object(l.jsxs)("div",{className:"card",children:["About Book"===m?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"card-image",title:"About this book",onClick:function(){return q(t)},children:Object(l.jsx)("img",{src:r,alt:i})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsx)("span",{className:"card-title",children:i}),Object(l.jsx)("p",{children:o})]})]}):Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsx)("p",{children:Object(l.jsx)("b",{children:i})}),Object(l.jsx)("hr",{}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Author:"})," ",N]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Language:"})," ",k]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Pages:"})," ",C]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Year:"})," ",w]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Description:"})," ",F]})]})}),Object(l.jsx)("button",{className:"btn deep-purple accent-2 moreBtn",onClick:function(){return q(t)},children:m}),Object(l.jsxs)("div",{className:"card-action",children:[Object(l.jsx)("span",{className:"card-price",children:j}),Object(l.jsx)("button",{className:"btn right cyan",onClick:function(){return u({id:t,title:i,price:j,image:r})},children:"Buy"})]})]})}function x(e){var t=e.goods,c=void 0===t?[]:t,n=e.addToCart,i=void 0===n?Function.prototype:n;return c.length?Object(l.jsx)("div",{className:"goods",children:c.map((function(e){return Object(l.jsx)(m,Object(u.a)(Object(u.a)({},e),{},{addToCart:i}),e.isbn13)}))}):Object(l.jsx)("h3",{className:"noResult",children:"No goods in shop now"})}c(20);function f(e){var t=e.quantity,c=void 0===t?0:t,i=e.setCartShown,a=e.toggleCartDisplay,o=void 0===a?Function.prototype:a;return Object(n.useEffect)((function(){var e=function(e){27===e.keyCode&&i(!1)};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[i]),Object(l.jsxs)("div",{className:"cart white-text deep-purple darken-2",onClick:o,title:"show your order",children:[Object(l.jsx)("i",{className:"material-icons",children:"shopping_cart"}),c?Object(l.jsx)("span",{className:"cart-quantity",children:c}):null]})}var g=c(8),v=c.n(g);c(24),c(25);function y(e){var t=e.id,c=e.title,n=e.price,i=e.image,a=e.quantity,o=e.deleteFromCart,s=e.incQuantity,r=e.decQuantity;return Object(l.jsxs)("li",{className:"collection-item avatar",children:[Object(l.jsx)("img",{src:i,alt:c,className:"circle"}),Object(l.jsx)("span",{className:"title",children:c}),Object(l.jsxs)("p",{children:[n," ",Object(l.jsx)("i",{className:"material-icons cartQuantity",onClick:function(){return r(t)},children:"remove"})," ","x",a," ",Object(l.jsx)("i",{className:"material-icons cartQuantity",onClick:function(){return s(t)},children:"add"})," ","= ",(+n.slice(1)*+a).toFixed(2),"$"]}),Object(l.jsx)("span",{className:"secondary-content",title:"delete from your cart",onClick:function(){return o(t)},children:Object(l.jsx)("i",{className:"material-icons item-delete-icon",children:"delete"})})]})}function N(e){var t=e.order,c=void 0===t?[]:t,n=e.toggleCartDisplay,i=void 0===n?Function.prototype:n,a=e.deleteFromCart,o=void 0===a?Function.prototype:a,s=e.incQuantity,r=void 0===s?Function.prototype:s,d=e.decQuantity,j=void 0===d?Function.prototype:d,b=c.reduce((function(e,t){return e+ +t.price.slice(1)*+t.quantity}),0).toFixed(2);return Object(l.jsxs)("div",{className:"cartContainer",children:[Object(l.jsx)("h4",{className:"collection-item",children:"Your Order: "}),Object(l.jsxs)("ul",{className:"collection",children:[c.length?c.map((function(e){return Object(l.jsx)(y,Object(u.a)(Object(u.a)({},e),{},{deleteFromCart:o,incQuantity:r,decQuantity:j}),e.id)})):Object(l.jsx)("li",{className:"collection-item",children:"Your cart is empty"}),Object(l.jsx)("li",{className:"collection-item",children:Object(l.jsxs)("b",{children:["Total price:"," ",Object(l.jsxs)("span",{className:"secondary-content",style:{color:"#000"},children:[b,"$"]})]})})]}),Object(l.jsx)(v.a,{stripeKey:"pk_test_51I6uwuAF7gx84FkWjEsyUvHvq13MGsJeI72xykMkyXyrTLhDxGGRmE7K4r5WLFzyLQZpi9K3dQ8bL7M3JXB8RQ4U00Cjj97Up0",token:function(e,t){console.log({token:e,addresses:t})},locale:"en",billingAddress:!0,shippingAddress:!0,bitcoin:!0,children:Object(l.jsx)("button",{className:"secondary-content btn deep-purple darken-2",children:"Delivery address and payment"})}),Object(l.jsx)("i",{className:"material-icons cart-close",onClick:i,title:"close cart",children:"close"})]})}c(26);function k(e){var t=e.title,c=void 0===t?"":t,i=e.closePopup,a=void 0===i?Function.prototype:i;return Object(n.useEffect)((function(){var e=setTimeout(a,3e3);return function(){clearTimeout(e)}}),[a]),Object(l.jsx)("div",{id:"toast-container",children:Object(l.jsxs)("div",{className:"toast",children:[c," added to cart"]})})}c(27);function C(e){var t=e.getData,c=e.goodsLength,i=Object(n.useState)(""),a=Object(b.a)(i,2),o=a[0],s=a[1],r=function(){o&&t("".concat(h,"search/"),o)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"input-field col s12",children:[Object(l.jsx)("input",{type:"text",className:"validate",placeholder:"Search...",maxLength:"130",value:o,onChange:function(e){var t=e.target.value.toLowerCase();s(t)},onKeyPress:function(e){"Enter"===e.key&&r()},onClick:function(){s("")}}),Object(l.jsx)("button",{className:"btn search-btn deep-purple darken-2",onClick:function(){return r()},children:Object(l.jsx)("i",{className:"material-icons",children:"search"})})]})}),o&&Object(l.jsxs)("p",{children:["Found books: ",c," "]})]})}function w(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(!0),o=Object(b.a)(a,2),s=o[0],r=o[1],d=Object(n.useState)([]),O=Object(b.a)(d,2),m=O[0],g=O[1],v=Object(n.useState)(!1),y=Object(b.a)(v,2),w=y[0],F=y[1],q=Object(n.useState)(""),Q=Object(b.a)(q,2),S=Q[0],L=Q[1],T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"new",c="".concat(e).concat(t.trim());fetch(c).then((function(e){return e.json()})).then((function(e){e.books&&i(e.books),r(!1)})).catch((function(e){console.log(e),r(!1)}))},A=function(){F(!w)};return Object(n.useEffect)((function(){T(h,"new")}),[]),Object(l.jsxs)("main",{className:"container content",children:[Object(l.jsx)(C,{getData:T,goodsLength:c.length}),Object(l.jsx)(f,{order:m,quantity:m.length,toggleCartDisplay:A,setCartShown:F}),s?Object(l.jsx)(p,{}):Object(l.jsx)("div",{children:Object(l.jsx)(x,{goods:c,addToCart:function(e){var t=m.findIndex((function(t){return t.id===e.id}));if(t<0){var c=Object(u.a)(Object(u.a)({},e),{},{quantity:1});g([].concat(Object(j.a)(m),[c]))}else{var n=m.map((function(e,c){return c===t?Object(u.a)(Object(u.a)({},e),{},{quantity:e.quantity+1}):e}));g(n)}L(e.title)}})}),w&&Object(l.jsx)(N,{order:m,toggleCartDisplay:A,deleteFromCart:function(e){var t=m.filter((function(t){return t.id!==e}));g(t)},incQuantity:function(e){var t=m.map((function(t){return t.id===e?Object(u.a)(Object(u.a)({},t),{},{quantity:t.quantity+1}):t}));g(t)},decQuantity:function(e){var t=m.map((function(t){if(t.id===e){var c=t.quantity-1;return Object(u.a)(Object(u.a)({},t),{},{quantity:c>=0?c:0})}return t}));g(t)}}),S&&Object(l.jsx)(k,{title:S,closePopup:function(){L("")}})]})}c(28);function F(){return Object(l.jsx)("footer",{className:"page-footer",children:Object(l.jsx)("div",{className:"footer-copyright deep-orange lighten-1",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," Copyright Elena Riemer"]}),Object(l.jsx)("button",{className:"btn deep-purple darken-2",title:"Go to top",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(l.jsx)("i",{className:"material-icons",children:"arrow_upward"})})]})})})}var q=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{}),Object(l.jsx)(w,{}),Object(l.jsx)(F,{})]})};o.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(q,{})}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.1371df92.chunk.js.map