(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{35:function(e,t,i){},36:function(e,t,i){},6:function(e,t,i){e.exports={container:"detail_container__2-Gpy",youtube:"detail_youtube__302sw",item:"detail_item__2A43m",itemtext:"detail_itemtext__oqTDE",write:"detail_write__2M6OD",itemimage:"detail_itemimage__uVhNQ"}},62:function(e,t,i){"use strict";i.r(t);var a=i(0),c=i.n(a),n=i(29),s=i.n(n),l=(i(35),i(17)),r=(i(36),i(8)),o=i.n(r),u=(i(37),i(10)),d=i.n(u),j=i(2),m=i(7),h=i(1),b=function(e){var t=Object(a.useRef)(null),i=Object(a.useRef)(null),c=Object(j.e)();return Object(h.jsxs)("div",{className:o.a.container,children:[Object(h.jsx)(m.b,{to:"/",children:Object(h.jsx)("div",{className:o.a.logo,children:Object(h.jsx)("i",{className:"fab fa-youtube"})})}),Object(h.jsx)(m.b,{to:"/",children:Object(h.jsx)("span",{className:o.a.text,children:"WonTube"})}),Object(h.jsxs)("form",{ref:i,onSubmit:function(a){a.preventDefault();var n="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=".concat(t.current.value,"&key=AIzaSyCBEqHMrpU-L7VQKFCohacpTaNnZNe8YV8");d.a.get(n).then((function(e){s(e.data.items)})).catch((function(e){console.log(e)}));var s=function(t){var i=t.map((function(e){var t=e.snippet.thumbnails.medium.url,i=e.snippet.channelTitle,a=e.snippet.title;return{id:e.id.videoId,url:t,title:a,channelTitle:i,description:e.snippet.description}}));e.searchList(i)};c.push("/"),i.current.reset()},children:[Object(h.jsx)("input",{className:o.a.search,ref:t,type:"text",placeholder:"Search..."}),Object(h.jsx)("button",{className:o.a.button,children:Object(h.jsx)("i",{class:"fas fa-search"})})]})]})},p=i(9),x=i.n(p),_=function(e){var t=Object(j.e)();return Object(h.jsx)("div",{className:x.a.container,children:e.lists.map((function(i){return Object(h.jsxs)("div",{className:x.a.item,onClick:function(){e.detailData(i.id,i.title,i.channelTitle,i.description),t.push("/detail")},children:[Object(h.jsx)("img",{className:x.a.itemimage,src:i.url}),Object(h.jsxs)("ul",{className:x.a.itemtext,children:[Object(h.jsx)("li",{children:i.title}),Object(h.jsx)("li",{className:x.a.write,children:i.channelTitle})]})]},i.id)}))})},O=i(6),f=i.n(O),v=function(e){var t="https://www.youtube.com/embed/".concat(e.detail.id);return Object(h.jsxs)("div",{className:f.a.container,children:[Object(h.jsxs)("div",{className:f.a.content,children:[Object(h.jsx)("iframe",{className:f.a.youtube,id:"ytplayer",type:"text/html",width:"650",height:"300",src:t,frameborder:"0",allowfullscreen:!0}),Object(h.jsx)("h2",{children:e.detail.title}),Object(h.jsx)("h4",{children:e.detail.ctitle}),Object(h.jsx)("p",{children:e.detail.description})]}),Object(h.jsx)("div",{className:f.a.leftContainer,children:e.lists.map((function(t){return Object(h.jsxs)("div",{className:f.a.item,onClick:function(){e.detailData(t.id,t.title,t.channelTitle,t.description)},children:[Object(h.jsx)("img",{className:f.a.itemimage,src:t.url}),Object(h.jsxs)("ul",{className:f.a.itemtext,children:[Object(h.jsx)("li",{children:t.title}),Object(h.jsx)("li",{className:f.a.write,children:t.channelTitle})]})]},t.id)}))})]})};var N=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),i=t[0],c=t[1],n=Object(a.useState)({}),s=Object(l.a)(n,2),r=s[0],o=s[1];Object(a.useEffect)((function(){d.a.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCBEqHMrpU-L7VQKFCohacpTaNnZNe8YV8").then((function(t){e(t.data.items)})).catch((function(e){console.log(e)}));var e=function(e){var t=e.map((function(e){var t=e.snippet.thumbnails.medium.url,i=e.snippet.channelTitle,a=e.snippet.title;return{id:e.id,url:t,title:a,channelTitle:i,description:e.snippet.description}}));c(t)}}),[]);var u=function(e,t,i,a){o({id:e,title:t,ctitle:i,description:a})};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b,{searchList:function(e){c([]),c(e)}}),Object(h.jsx)(j.a,{exact:!0,path:"/",children:Object(h.jsx)(_,{lists:i,detailData:u})}),Object(h.jsx)(j.a,{path:"/detail",children:Object(h.jsx)(v,{lists:i,detail:r,detailData:u})})]})};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(m.a,{children:Object(h.jsx)(N,{})})}),document.getElementById("root"))},8:function(e,t,i){e.exports={container:"searchBar_container__fn6t5",text:"searchBar_text__3lEaZ",search:"searchBar_search__1Gn7i",button:"searchBar_button__1BTVv",logo:"searchBar_logo__2qHhq"}},9:function(e,t,i){e.exports={container:"main_container__3z2FT",item:"main_item__2bI6w",itemtext:"main_itemtext__20Ef9",write:"main_write__1CpaZ",itemimage:"main_itemimage__1kzS2"}}},[[62,1,2]]]);
//# sourceMappingURL=main.2e63aca7.chunk.js.map