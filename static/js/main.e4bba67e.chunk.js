(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{11:function(t){t.exports=JSON.parse('[{"id":1,"title":"iPad 4 Mini","price":500.01,"inventory":2},{"id":2,"title":"H&M T-Shirt White","price":10.99,"inventory":12},{"id":3,"title":"Charli XCX - Sucker CD","price":19.99,"inventory":5}]')},24:function(t,n,e){"use strict";e.r(n);e(0);var r=e(6),c=e(3),i=e(5),u=(e(21),e(10)),d=e(2),o=e(4),a=e(12),s="ADD_TO_CART",l="CHECKOUT_REQUEST",j="CHECKOUT_FAILURE",p="RECEIVE_PRODUCTS",b={addedIds:[],quantityById:{}},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b.addedIds,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case s:return-1!==t.indexOf(n.productId)?t:[].concat(Object(a.a)(t),[n.productId]);default:return t}},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b.quantityById,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case s:var e=n.productId;return Object(d.a)(Object(d.a)({},t),{},Object(o.a)({},e,(t[e]||0)+1));default:return t}},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case l:return b;case j:return n.cart;default:return{addedIds:f(t.addedIds,n),quantityById:h(t.quantityById,n)}}},v=function(t,n){switch(n.type){case s:return Object(d.a)(Object(d.a)({},t),{},{inventory:t.inventory-1});default:return t}},y=Object(c.b)({byId:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case p:return Object(d.a)(Object(d.a)({},t),n.products.reduce((function(t,n){return t[n.id]=n,t}),{}));default:var e=n.productId;return e?Object(d.a)(Object(d.a)({},t),{},Object(o.a)({},e,v(t[e],n))):t}},visibleIds:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case p:return n.products.map((function(t){return t.id}));default:return t}}}),x=function(t,n){return t.byId[n]},C=function(t){return t.visibleIds.map((function(n){return x(t,n)}))},I=Object(c.b)({cart:O,products:y}),g=function(t){return function(t){return t.addedIds}(t.cart)},T=function(t,n){return function(t,n){return t.quantityById[n]||0}(t.cart,n)},k=function(t,n){return x(t.products,n)},m=function(t){return g(t).reduce((function(n,e){return n+k(t,e).price*T(t,e)}),0).toFixed(2)},E=function(t){return g(t).map((function(n){return Object(d.a)(Object(d.a)({},k(t,n)),{},{quantity:T(t,n)})}))},q=e(11),S=function(t,n){return setTimeout((function(){return t(q)}),n||100)},w=function(t,n,e){return setTimeout((function(){return n()}),e||100)},B=e(1),U=function(t){var n=t.price,e=t.quantity,r=t.title;return Object(B.jsxs)("div",{children:[r," - $",n,e?" x ".concat(e):null]})},A=function(t){var n=t.product,e=t.onAddToCartClicked;return Object(B.jsxs)("div",{style:{marginBottom:20},children:[Object(B.jsx)(U,{title:n.title,price:n.price,quantity:n.inventory}),Object(B.jsx)("button",{onClick:e,disabled:n.inventory>0?"":"disabled",children:n.inventory>0?"Add to cart":"Sold Out"})]})},_=function(t){var n=t.title,e=t.children;return Object(B.jsxs)("div",{children:[Object(B.jsx)("h3",{children:n}),Object(B.jsx)("div",{children:e})]})},R=Object(i.b)((function(t){return{products:C(t.products)}}),{addToCart:function(t){return function(n,e){e().products.byId[t].inventory>0&&n(function(t){return{type:s,productId:t}}(t))}}})((function(t){var n=t.products,e=t.addToCart;return Object(B.jsx)(_,{title:"Products",children:n.map((function(t){return Object(B.jsx)(A,{product:t,onAddToCartClicked:function(){return e(t.id)}},t.id)}))})})),D=function(t){var n=t.products,e=t.total,r=t.onCheckoutClicked,c=n.length>0,i=c?n.map((function(t){return Object(B.jsx)(U,{title:t.title,price:t.price,quantity:t.quantity},t.id)})):Object(B.jsx)("em",{children:"Please addsad some products to cart."});return Object(B.jsxs)("div",{children:[Object(B.jsx)("h3",{children:"Your Cart"}),Object(B.jsx)("div",{children:i}),Object(B.jsxs)("p",{children:["Total: $",e]}),Object(B.jsx)("button",{onClick:r,disabled:c?"":"disabled",children:"Checkout"})]})},H=Object(i.b)((function(t){return{products:E(t),total:m(t)}}),{checkout:function(t){return function(n,e){var r=e().cart;n({type:l}),w(t,(function(){n({type:"CHECKOUT_SUCCESS",cart:r})}))}}})((function(t){var n=t.products,e=t.total,r=t.checkout;return Object(B.jsx)(D,{products:n,total:e,onCheckoutClicked:function(){return r(n)}})})),P=function(){return Object(B.jsxs)("div",{children:[Object(B.jsx)("h2",{children:"Shopping Cart Example"}),Object(B.jsx)("hr",{}),Object(B.jsx)(R,{}),Object(B.jsx)("hr",{}),Object(B.jsx)(H,{})]})},J=[u.a];var K=Object(c.c)(I,c.a.apply(void 0,J));K.dispatch((function(t){S((function(n){t(function(t){return{type:p,products:t}}(n))}))})),Object(r.render)(Object(B.jsx)(i.a,{store:K,children:Object(B.jsx)(P,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.e4bba67e.chunk.js.map