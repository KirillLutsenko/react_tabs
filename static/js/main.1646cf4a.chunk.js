(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{14:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(3),c=a.n(r),s=(a(14),a(4)),l=a(5),o=a(8),u=a(7),b=a(1),p=a.n(b),d=(p.a.shape({tabs:p.a.arrayOf(p.a.shape({title:p.a.string.isRequired,content:p.a.string.isRequired})).isRequired,index:p.a.number.isRequired}),p.a.string.isRequired,p.a.number.isRequired,p.a.func.isRequired,p.a.bool.isRequired,a(6)),m=a.n(d),f=function(e){var t=e.index,a=e.onTableSelected,n=e.title,r=e.isActive;return i.a.createElement("button",{type:"button",onClick:function(){return a(t)},className:m()("button",{"button is-light":r})},n)},v=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={activeIndex:0},e.onTableSelected=function(t){e.setState((function(){return{activeIndex:t}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.tabs,a=this.state.activeIndex;return i.a.createElement("div",{className:"app__tabs tabs"},i.a.createElement("div",{className:"tabs__tab tab"},t.map((function(n,r){return i.a.createElement(f,{key:t.title,index:r,onTableSelected:e.onTableSelected,title:n.title,isActive:a===r})}))),i.a.createElement("p",{className:"app__text"},t[a].content))}}]),a}(i.a.Component),h=[{title:"HTML/CSS",content:"DONE 100%"},{title:"Javascript",content:"DONE 90%"},{title:"React",content:"DONE 70%"}],E=function(){return i.a.createElement("div",{className:"app"},i.a.createElement("h1",{className:"app__title"},"Statistics of passed topics"),i.a.createElement(v,{tabs:h}))};c.a.render(i.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.1646cf4a.chunk.js.map