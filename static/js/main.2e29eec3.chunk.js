(this["webpackJsonpmovie-hub"]=this["webpackJsonpmovie-hub"]||[]).push([[0],{112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(17),r=a.n(s),i=(a(112),a(113),a(114),a.p+"static/media/film-slate.57e8440b.png"),o=a(2),l=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("span",{onClick:function(){window.scrollTo(0,0)},className:"header",children:[Object(o.jsx)("img",{src:i,alt:"photu"}),"MOVIES-HUB"]})})},j=a(9),u=a(203),d=a(206),b=a(207),p=a(91),O=a.n(p),f=a(92),g=a.n(f),x=a(60),h=a.n(x),m=a(93),v=a.n(m),y=a(11);function _(){var e=c.a.useState(0),t=Object(j.a)(e,2),a=t[0],s=t[1],r=Object(y.f)();return Object(n.useEffect)((function(){0===a?r("/"):1===a?r("/movies"):2===a?r("/series"):3===a&&r("/search")}),[a,r]),Object(o.jsx)(u.a,{sx:{width:"100%",position:"fixed",bottom:0,zIndex:100},children:Object(o.jsxs)(d.a,{value:a,onChange:function(e,t){s(t)},style:{backgroundColor:"#483434",zIndex:100},children:[Object(o.jsx)(b.a,{style:{color:"#fff"},label:"Trending",icon:Object(o.jsx)(O.a,{})}),Object(o.jsx)(b.a,{style:{color:"#fff"},label:"Movies",icon:Object(o.jsx)(g.a,{})}),Object(o.jsx)(b.a,{style:{color:"#fff"},label:"TV/Series",icon:Object(o.jsx)(v.a,{})}),Object(o.jsx)(b.a,{style:{color:"#fff"},label:"Search",icon:Object(o.jsx)(h.a,{})})]})})}var S=a(69),w=a(209),k=a(21),N=a.n(k),C=a(27),T=a(28),E=a.n(T),M=(a(139),a(201)),z=function(e){return Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)(M.a,{badgeContent:e.rating,color:e.rating>6?"primary":"secondary"}),Object(o.jsx)("img",{className:"poster",src:e.poster?"".concat("https://image.tmdb.org/t/p/w300","/").concat(e.poster):"https://www.movienewz.com/img/films/poster-holder.jpg",alt:e.title}),Object(o.jsxs)("span",{className:"bottom-Container",children:[Object(o.jsx)("b",{className:"title",children:e.title}),Object(o.jsxs)("span",{className:"sub-title-Container",children:[Object(o.jsx)("span",{className:"sub-title",children:"tv"===e.media_type?"Series":"Movies"}),Object(o.jsx)("span",{className:"sub-title",children:e.date})]})]})]})},B=(a(140),a(198)),P=function(e){return Object(o.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:"10px"},children:Object(o.jsx)(B.a,{count:e.count,onChange:function(t){return a=t.target.textContent,e.setpage(a),void window.scroll(0,0);var a},hideNextButton:!0,hidePrevButton:!0,style:{color:"#483434"},color:"primary"})})},U=function(){var e=Object(n.useState)(1),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),r=Object(j.a)(s,2),i=r[0],l=r[1],u=function(){var e=Object(C.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://api.themoviedb.org/3/trending/all/week?api_key=".concat("a17e0917c42999516e8f1c9407dbca87","&page=").concat(a));case 2:t=e.sent,n=t.data,l(n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){u()}),[a]),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"pageTitle",children:"Trending"}),Object(o.jsx)("div",{className:"trending",children:i&&i.map((function(e){return Object(o.jsx)(z,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:e.media_type,rating:e.vote_average},e.id)}))}),Object(o.jsx)(P,{count:50,setpage:c})]})},I=function(e){return e.length<1?"":e.map((function(e){return e.id})).reduce((function(e,t){return e+","+t}))},V=a(16),F=a(204),J=function(e){var t=function(){var t=Object(C.a)(N.a.mark((function t(){var a,n;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.get("https://api.themoviedb.org/3/genre/".concat(e.type,"/list?api_key=").concat("a17e0917c42999516e8f1c9407dbca87","&language=en-US"));case 2:a=t.sent,n=a.data,e.setgenres(n.genres);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){return t(),function(){e.setgenres({})}}),[]),Object(o.jsxs)("div",{style:{padding:"6px 0px"},children:[e.selectedgenres&&e.selectedgenres.map((function(t){return Object(o.jsx)(F.a,{label:t.name,style:{margin:"2px"},onDelete:function(){return function(t){e.setselectedgenres(e.selectedgenres.filter((function(e){return e.id!==t.id}))),e.setgenres([].concat(Object(V.a)(e.genres),[t])),e.setPage(1)}(t)},size:"small",color:"primary",clickable:!0},t.id)})),e.genres&&e.genres.map((function(t){return Object(o.jsx)(F.a,{label:t.name,style:{margin:"2px"},onClick:function(){return function(t){e.setselectedgenres([].concat(Object(V.a)(e.selectedgenres),[t])),e.setgenres(e.genres.filter((function(e){return e.id!==t.id}))),e.setPage(1)}(t)},size:"small",clickable:!0},t.id)}))]})},q=(a(141),function(){var e=Object(n.useState)(1),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),r=Object(j.a)(s,2),i=r[0],l=r[1],u=Object(n.useState)(1),d=Object(j.a)(u,2),b=d[0],p=d[1],O=Object(n.useState)([]),f=Object(j.a)(O,2),g=f[0],x=f[1],h=Object(n.useState)([]),m=Object(j.a)(h,2),v=m[0],y=m[1],_=I(v),S=function(){var e=Object(C.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://api.themoviedb.org/3/discover/movie?api_key=".concat("a17e0917c42999516e8f1c9407dbca87","&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=").concat(a,"&with_genres=").concat(_));case 2:t=e.sent,n=t.data,l(n.results),p(n.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){S()}),[a,_]),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"pageTitle",children:"Movies"}),Object(o.jsx)(J,{type:"movie",selectedgenres:v,genres:g,setgenres:x,setselectedgenres:y,setPage:c}),Object(o.jsx)("div",{className:"movies",children:i&&i.map((function(e){return Object(o.jsx)(z,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:e.media_type,rating:e.vote_average},e.id)}))}),b>1&&Object(o.jsx)(P,{count:b,setpage:c})]})}),A=(a(142),function(){var e=Object(n.useState)(1),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),r=Object(j.a)(s,2),i=r[0],l=r[1],u=Object(n.useState)(1),d=Object(j.a)(u,2),b=d[0],p=d[1],O=Object(n.useState)([]),f=Object(j.a)(O,2),g=f[0],x=f[1],h=Object(n.useState)([]),m=Object(j.a)(h,2),v=m[0],y=m[1],_=I(v),S=function(){var e=Object(C.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://api.themoviedb.org/3/discover/tv?api_key=".concat("a17e0917c42999516e8f1c9407dbca87","&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=").concat(a,"&with_genres=").concat(_));case 2:t=e.sent,n=t.data,l(n.results),p(n.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){S()}),[a,_]),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"pageTitle",children:"Series/Tv"}),Object(o.jsx)(J,{type:"tv",selectedgenres:v,genres:g,setgenres:x,setselectedgenres:y,setPage:c}),Object(o.jsx)("div",{className:"Series",children:i&&i.map((function(e){return Object(o.jsx)(z,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:e.media_type,rating:e.vote_average},e.id)}))}),b>1&&Object(o.jsx)(P,{count:b,setpage:c})]})}),D=a(197),H=a(205),L=a(199),G=a(208),K=function(){var e=Object(n.useState)(0),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(1),r=Object(j.a)(s,2),i=r[0],l=r[1],u=Object(n.useState)(""),d=Object(j.a)(u,2),b=d[0],p=d[1],O=Object(n.useState)([]),f=Object(j.a)(O,2),g=f[0],x=f[1],m=Object(n.useState)(),v=Object(j.a)(m,2),y=v[0],_=v[1],S=function(){var e=Object(C.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://api.themoviedb.org/3/search/".concat(a?"tv":"movie","?api_key=").concat("a17e0917c42999516e8f1c9407dbca87","&language=en-US&query=").concat(b,"&page=").concat(i,"&include_adult=false"));case 2:t=e.sent,n=t.data,x(n.results),_(n.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){window.scroll(0,0),S()}),[a,i]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{style:{display:"flex",padding:"18px 0"},children:[Object(o.jsx)(D.a,{style:{flex:1},className:"searchBox",label:"Search",variant:"filled",onChange:function(e){return p(e.target.value)}}),Object(o.jsx)(H.a,{variant:"contained",style:{marginLeft:"10px"},onClick:S,children:Object(o.jsx)(h.a,{})})]}),Object(o.jsxs)(L.a,{value:a,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){c(t),l(1)},children:[Object(o.jsx)(G.a,{style:{width:"50%"},label:"Search Movies"}),Object(o.jsx)(G.a,{style:{width:"50%"},label:"Search TV/Series"})]}),Object(o.jsx)("div",{className:"trending",style:{marginTop:"15px"},children:g&&g.map((function(e){return Object(o.jsx)(z,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:a?"tv":"movie",rating:e.vote_average},e.id)}))}),y>1&&Object(o.jsx)(P,{count:y,setpage:l})]})};var Q=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(S.a,{children:[Object(o.jsx)(l,{}),Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(w.a,{children:Object(o.jsxs)(y.c,{children:[Object(o.jsx)(y.a,{exact:!0,path:"/",element:Object(o.jsx)(U,{})}),Object(o.jsx)(y.a,{exact:!0,path:"/movies",element:Object(o.jsx)(q,{})}),Object(o.jsx)(y.a,{exact:!0,path:"/series",element:Object(o.jsx)(A,{})}),Object(o.jsx)(y.a,{exact:!0,path:"/search",element:Object(o.jsx)(K,{})})]})})}),Object(o.jsx)(_,{})]})})};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(Q,{})}),document.getElementById("root"))}},[[143,1,2]]]);
//# sourceMappingURL=main.2e29eec3.chunk.js.map