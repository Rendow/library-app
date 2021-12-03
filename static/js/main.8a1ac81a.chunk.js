(this["webpackJsonplibrary-app"]=this["webpackJsonplibrary-app"]||[]).push([[0],{13:function(e,t,a){e.exports={wrap:"BookList_wrap__1LGE6",loadWrap:"BookList_loadWrap__2R5nf",count:"BookList_count__2J4h0",bookList:"BookList_bookList__245dp",btn:"BookList_btn__1T6ea"}},15:function(e,t,a){e.exports={default:"Input_default__3LvGH",errorInput:"Input_errorInput__OSSXa",error:"Input_error__qo1QA"}},16:function(e,t,a){e.exports={wrap:"BookCard_wrap__cIVVU",book:"BookCard_book__1wv7P",img:"BookCard_img__3ZBTN",description:"BookCard_description__CPFad"}},21:function(e,t,a){e.exports={default:"Button_default__10tZj",error:"Button_error__KNz7_"}},24:function(e,t,a){e.exports={default:"Select_default__1tC0t"}},27:function(e,t,a){e.exports={book:"Book_book__G1VRf",description:"Book_description__1kddn"}},36:function(e,t,a){e.exports={container:"App_container__wkd9o"}},40:function(e,t,a){e.exports={ldsDualRing:"Preloader_ldsDualRing__1PPSD"}},46:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),s=a.n(c),o=(a(46),a(36)),i=a.n(o),u=a(3),l=a(11),d=a(15),j=a.n(d),b=a.p+"static/media/search.66b79e13.svg",p=a(1),m=r.a.memo((function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,i=Object(l.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),d="".concat(j.a.error," ").concat(o||""),m=c?"".concat(j.a.errorInput,"  ").concat(j.a.default," ").concat(s||""):"".concat(j.a.default," ").concat(s||"");return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("input",Object(u.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),r&&"Enter"===e.key&&r()},className:m,style:{backgroundImage:"url(".concat(b,")")}},i)),c&&Object(p.jsx)("div",{className:d,children:c})]})})),O=a(8),h=a.n(O),f=a(21),x=a.n(f),_=r.a.memo((function(e){var t=e.error,a=e.className,n=Object(l.a)(e,["error","className"]),r="".concat(t?x.a.error+" "+x.a.default:x.a.default," ").concat(a);return Object(p.jsx)("button",Object(u.a)({className:r},n))})),g=a(24),v=a.n(g),T=r.a.memo((function(e){var t=e.options,a=e.name,n=e.className,r=e.onChange,c=e.onChangeOption,s=Object(l.a)(e,["options","name","className","onChange","onChangeOption"]),o=t?t.map((function(e,t){return Object(p.jsx)("option",{className:v.a.option,value:e,children:e},t+""+e)})):[],i="".concat(v.a.default," ").concat(n);return Object(p.jsx)("select",Object(u.a)(Object(u.a)({name:a,className:i,onChange:function(e){c&&c(e.currentTarget.value),r&&r(e)}},s),{},{children:o}))})),y=a(25),S=a.n(y),k=a(37),E=a(17),N=function(e,t){t(F(e.message?e.message:"Some error occurred")),t(G("failed"))},P=a(38),B=a.n(P).a.create({baseURL:"https://www.googleapis.com/books/v1/"}),I=function(e,t,a,n){return B.get("volumes?q=".concat(e,"+").concat(t,"&orderBy=").concat(a,"&maxResults=30&startIndex=").concat(n,"&key=AIzaSyB-JHixor0WrTyBQX64mEutuCjbJoTaopY"))},A={totalItems:0,pageIndex:30},w=function(e){return{type:"PAGE/SET-TOTAL-ITEMS",totalItems:e}},C={status:"idle",items:[],error:null,currentBook:[],queryTerm:{}},R=function(e){return{type:"APP/SET-BOOKS",books:e}},L=function(e){return{type:"APP/SET-NEW-BOOKS",books:e}},G=function(e){return{type:"APP/SET-STATUS",status:e}},F=function(e){return{type:"APP/SET-ERROR",error:e}},q=function(e){return{type:"APP/SET-QUERY-TERM",term:e}},K=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return function(){var r=Object(k.a)(S.a.mark((function r(c,s){var o,i,u,l;return S.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=s().app.queryTerm.search,i=s().app.queryTerm.categories,u=s().app.queryTerm.sortBy,c(G("loading")),c(q({search:e,categories:t,sortBy:a})),r.prev=5,r.next=8,I(e,t,a,n);case 8:200===(l=r.sent).status?(c(w(l.data.totalItems)),c(o===e&&i===t&&u===a?R(l.data.items):L(l.data.items)),c(G("succeeded"))):(N({message:l.statusText},c),c(G("failed"))),r.next=16;break;case 12:r.prev=12,r.t0=r.catch(5),N(r.t0,c),c(G("failed"));case 16:case"end":return r.stop()}}),r,null,[[5,12]])})));return function(e,t){return r.apply(this,arguments)}}()},U=a(4),D=a(2),J="/",W="/book-card",M=function(){var e=Object(U.b)(),t=Object(D.f)(),a=Object(U.c)((function(e){return e.app.status})),r=Object(n.useRef)(null);return Object(p.jsxs)("div",{className:h.a.wrap,children:[Object(p.jsx)("div",{className:h.a.bcgImage}),Object(p.jsxs)("form",{ref:r,className:h.a.form,onSubmit:function(a){a.preventDefault();var n=a.currentTarget.elements.search.value,c=a.currentTarget.elements.categories.value,s=a.currentTarget.elements.sortBy.value;(""===n.trim()||n.length>20)&&(alert("Input should be more than 1 character and less then 20"),r.current&&r.current.reset()),e(K(n,c,s)),t(J)},children:[Object(p.jsx)("span",{className:h.a.title,children:" Online library"}),Object(p.jsxs)("div",{className:h.a.inputGroup,children:[Object(p.jsx)(m,{placeholder:"Search",name:"search",className:h.a.input}),Object(p.jsx)(_,{type:"submit",disabled:"loading"===a,className:h.a.btn,children:"search"})]}),Object(p.jsxs)("div",{className:h.a.selectGroup,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{children:"Categories"}),Object(p.jsx)(T,{options:["all","art","biography","computers","history","medical","poetry"],name:"categories"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{children:"Sorting by"}),Object(p.jsx)(T,{options:["relevance","newest"],name:"sortBy"})]})]})]})]})},Q=a(13),V=a.n(Q),X=a(40),Y=a.n(X),z=r.a.memo((function(){return Object(p.jsx)("div",{className:Y.a.ldsDualRing})})),H=a(9),Z=a(27),$=a.n(Z),ee=a.p+"static/media/book.41aa1e89.png",te=r.a.memo((function(e){var t=e.item,a=e.id,n=Object(U.b)(),r=t.imageLinks,c=t.title,s=t.categories,o=t.authors;return Object(p.jsxs)("div",{className:$.a.book,children:[Object(p.jsx)(H.b,{onClick:function(){n(function(e){return{type:"APP/SET-CURRENT-BOOK",id:e}}(a))},style:{alignSelf:"center"},to:W,children:Object(p.jsx)("img",{src:r?r.thumbnail:ee,alt:"image has been losted"})}),Object(p.jsxs)("div",{className:$.a.description,children:[Object(p.jsx)("div",{children:s?s[0]:""}),c&&Object(p.jsx)("div",{children:c.length>100?c.slice(0,100)+"...":c}),o&&Object(p.jsxs)("div",{children:[" ",o]})]})]})})),ae=function(){var e=Object(U.b)(),t=Object(U.c)((function(e){return e.app.items})),a=Object(U.c)((function(e){return e.app.status})),n=Object(U.c)((function(e){return e.app.error})),r=Object(U.c)((function(e){return e.page})),c=r.totalItems,s=r.pageIndex,o=Object(U.c)((function(e){return e.app.queryTerm})),i=o.search,u=o.categories,l=o.sortBy;return n&&(alert(n),e(F(""))),Object(p.jsx)("div",{className:V.a.wrap,children:"loading"!==a||t.length?Object(p.jsxs)(p.Fragment,{children:[c&&Object(p.jsxs)("div",{className:V.a.count,children:["Found ",c&&c," results"]}),Object(p.jsx)("div",{className:V.a.bookList,children:t&&t.map((function(e){return Object(p.jsx)(te,{id:e.id,item:e.volumeInfo},e.id)}))}),c&&Object(p.jsx)(_,{disabled:"loading"===a,className:V.a.btn,onClick:function(){e(K(i,u,l,s)),e({type:"PAGE/SET-PAGE-INDEX",index:30})},children:"Load more"}),"loading"===a&&Object(p.jsx)("div",{className:V.a.loadWrap,children:Object(p.jsx)(z,{})})]}):Object(p.jsx)("div",{style:{marginTop:"10vh"},children:Object(p.jsx)(z,{})})})},ne=a(16),re=a.n(ne),ce=function(){var e=Object(U.c)((function(e){return e.app.currentBook}));return Object(p.jsx)("div",{children:e&&e.map((function(e){var t=e.volumeInfo;return Object(p.jsx)("div",{className:re.a.wrap,children:Object(p.jsxs)("div",{className:re.a.book,children:[Object(p.jsx)("div",{className:re.a.img,children:Object(p.jsx)("img",{src:t.imageLinks?t.imageLinks.thumbnail:ee,alt:"image has been losted"})}),Object(p.jsxs)("div",{className:re.a.description,children:[t.categories&&Object(p.jsx)("div",{children:t.categories}),Object(p.jsx)("div",{children:t.title}),Object(p.jsxs)("div",{children:[" ",t.authors]}),t.description&&Object(p.jsxs)("div",{children:[" ",t.description]})]})]})},e.id)}))})};var se=function(){return Object(p.jsxs)("div",{className:i.a.container,children:[Object(p.jsx)(M,{}),Object(p.jsxs)(D.c,{children:[Object(p.jsx)(D.a,{path:"/*",element:Object(p.jsx)(ae,{})}),Object(p.jsx)(D.a,{path:J,element:Object(p.jsx)(ae,{})}),Object(p.jsx)(D.a,{path:W,element:Object(p.jsx)(ce,{})})]})]})},oe=a(22),ie=a(41),ue=Object(oe.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-BOOKS":var a=Object(E.a)(e.items),n=Object(E.a)(t.books),r=a.map((function(e){return e.id})),c=n.filter((function(e){return!r.includes(e.id)}));return Object(u.a)(Object(u.a)({},e),{},{items:[].concat(Object(E.a)(a),Object(E.a)(c))});case"APP/SET-NEW-BOOKS":return Object(u.a)(Object(u.a)({},e),{},{items:t.books});case"APP/SET-STATUS":return Object(u.a)(Object(u.a)({},e),{},{status:t.status});case"APP/SET-QUERY-TERM":return Object(u.a)(Object(u.a)({},e),{},{queryTerm:t.term});case"APP/SET-ERROR":return Object(u.a)(Object(u.a)({},e),{},{error:t.error});case"APP/SET-CURRENT-BOOK":return Object(u.a)(Object(u.a)({},e),{},{currentBook:e.items.filter((function(e){return e.id===t.id}))});default:return e}},page:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PAGE/SET-TOTAL-ITEMS":return Object(u.a)(Object(u.a)({},e),{},{totalItems:t.totalItems});case"PAGE/SET-PAGE-INDEX":return Object(u.a)(Object(u.a)({},e),{},{pageIndex:e.pageIndex+=t.index});default:return e}}}),le=Object(oe.c)(ue,Object(oe.a)(ie.a));window.store=le,s.a.render(Object(p.jsx)(H.a,{children:Object(p.jsx)(U.a,{store:le,children:Object(p.jsx)(se,{})})}),document.getElementById("root"))},8:function(e,t,a){e.exports={wrap:"SearchForm_wrap__1-Zhq",bcgImage:"SearchForm_bcgImage__2yTIM",form:"SearchForm_form__3S8V5",title:"SearchForm_title__28S27",inputGroup:"SearchForm_inputGroup__wHgTY",input:"SearchForm_input__5EQqv",btn:"SearchForm_btn__vkoJi",selectGroup:"SearchForm_selectGroup__Az_nr"}}},[[73,1,2]]]);
//# sourceMappingURL=main.8a1ac81a.chunk.js.map