(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{12:function(e,t,i){},14:function(e,t,i){"use strict";i.r(t);var s=i(1),n=i.n(s),a=i(3),l=i.n(a),c=(i(12),i(4)),m=i(5),r=i(7),o=i(6),h=i(0),p=function(){return Object(h.jsx)("div",{className:"Header",children:Object(h.jsx)("h1",{children:"Best Series of the year"})})},u=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"Card",children:[Object(h.jsx)("img",{src:e.image,alt:"google",width:" 250px",height:"250px"}),Object(h.jsx)("div",{className:"line",children:e.title}),Object(h.jsx)("div",{className:"line",children:e.sname})]})})},d=function(e){return e.List.map((function(e,t){return Object(h.jsx)(u,{sname:e.sname,image:e.image,title:e.title},e.id)}))},g=function(e){e.searchfield;var t=e.searchchange;return Object(h.jsx)("div",{className:"search",children:Object(h.jsx)("input",{type:"text",placeholder:"search for favourite Web series",onChange:t})})},f=[{id:1,link:"https://www.netflix.com/in/title/70276033",sname:"orphan black",image:"https://picsum.photos/id/870/200/300?grayscale&blur=2",title:" netflix original series"},{id:2,link:"https://www.netflix.com/in/title/70276033",sname:"Inout",image:"https://picsum.photos/200/300",title:" netflix original series"},{id:3,link:"https://www.netflix.com/in/title/70276033",title:" netflix original series",image:"https://picsum.photos/200/300/?blur",sname:"Traveller"},{id:4,link:"https://www.netflix.com/in/title/80105699",title:" netflix original series",image:"https://picsum.photos/200/300?grayscale",sname:"Spit-out"},{id:5,link:"https://www.netflix.com/in/title/80991826",title:" netflix original series",image:"https://picsum.photos/seed/picsum/200/300",sname:"jumangi"},{id:6,link:"https://www.netflix.com/in/title/80991826",title:" Amazon  original series",image:"https://picsum.photos/seed/picsum/200/300",sname:"The family man"},{id:7,link:"https://www.netflix.com/in/title/80991826",title:" Amazon original series",image:"https://picsum.photos/seed/picsum/200/300",sname:"The family man"},{id:8,link:"https://www.imdb.com/title/tt9544034/",title:" ZEE original series",image:"https://picsum.photos/seed/picsum/200/300",sname:"The family man"},{id:9,link:"https://www.netflix.com/in/title/80991826",title:" netflix original series",image:"https://picsum.photos/seed/picsum/200/300",sname:"jumangi"},{id:10,link:"https://www.netflix.com/in/title/80991826",title:" ZEE original series",image:"https://picsum.photos/seed/picsum/200/300",sname:"The family man"},{id:11,link:"https://www.netflix.com/in/title/80991826",title:"ZEE original series",image:"https://picsum.photos/seed/picsum/200/300",sname:"The family man"},{id:12,link:"https://www.imdb.com/title/tt9544034/",title:" ZEE original series",image:"https://picsum.photos/seed/picsum/200/300",sname:"The family man"}],w=function(e){Object(r.a)(i,e);var t=Object(o.a)(i);function i(){var e;return Object(c.a)(this,i),(e=t.call(this)).onchnage=function(t){e.setState({searchfield:t.target.value})},e.state={List:f,searchfield:""},e}return Object(m.a)(i,[{key:"render",value:function(){var e=this,t=this.state.List.filter((function(t){return t.title.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(p,{}),Object(h.jsx)(g,{searchchange:this.onchnage}),Object(h.jsx)(d,{List:t})]})}}]),i}(n.a.Component);l.a.render(Object(h.jsx)(w,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f7511d58.chunk.js.map