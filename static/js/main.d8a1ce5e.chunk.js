(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var i=c(7),s=c.n(i),n=(c(15),c(10)),a=c(2),r=c(1),l=(c(16),c(17),c(18),c(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbId)}))})},j=c(8),m=c(6),b=c.n(m),u=(c(21),c(9)),v=c.n(u);function h(e){return fetch("".concat("https://www.omdbapi.com/?apikey=78f07b10","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}var O=function(e){var t=e.movies,c=e.onAddMovieToList,i=Object(r.useState)(""),s=Object(a.a)(i,2),n=s[0],d=s[1],m=Object(r.useState)(!1),u=Object(a.a)(m,2),O=u[0],f=u[1],x=Object(r.useState)(null),p=Object(a.a)(x,2),g=p[0],N=p[1],y=Object(r.useState)(null),w=Object(a.a)(y,2),k=w[0],C=w[1],I=Object(r.useCallback)(function(){var e=Object(j.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.prev=1,e.next=4,h(t);case 4:c=e.sent,f(!1),"Error"in c?C(c):N(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),C(null);case 12:return e.prev=12,f(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(t){return e.apply(this,arguments)}}(),[]),F=Object(r.useCallback)((function(e){return{title:e.Title,description:e.Plot,imgUrl:"N/A"===e.Poster?"https://via.placeholder.com/360x270.png?text=no%20preview":e.Poster,imdbUrl:"https://www.imdb.com/title/".concat(e.imdbID),imdbId:e.imdbID}}),[]);return Object(r.useEffect)((function(){k&&"False"===k.Response&&C(null)}),[n]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{method:"get",className:"find-movie",onSubmit:function(e){e.preventDefault(),n.length>0&&I(n)},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-dander",value:n,onChange:function(e){return d(e.target.value)}})}),k&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"searchButton",type:"submit",className:v()("button","is-light",{"is-loading":O}),disabled:0===n.length,children:"Find a movie"})}),g&&Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){t.find((function(e){return e.imdbId===g.imdbID}))&&c(F(g)),N(null)},children:"Add to the list"})})]})]}),g&&Object(l.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(o,{movie:F(g)})]})]})},f=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),c=t[0],i=t[1],s=Object(r.useCallback)((function(e){e&&i((function(t){return[].concat(Object(n.a)(t),[e])}))}),[]);return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(O,{movies:c,onAddMovieToList:function(e){return s(e)}})})]})};s.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.d8a1ce5e.chunk.js.map