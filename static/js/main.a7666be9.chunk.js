(this.webpackJsonpsynonyms=this.webpackJsonpsynonyms||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(3),o=n.n(s),c=(n(15),n(1)),l=n(4),i=n(5),u=n(6),y=n(8),m=n(7),h=n(9);n(16);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var p=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(y.a)(this,Object(m.a)(t).call(this,e))).addWord=function(){var e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n.state.words),t=Object(c.a)(n.state.synonyms_list);e[n.state.word]||(e[n.state.word]={name:n.state.word}),e[n.state.word].synonyms=Object(c.a)(t);for(var r=0;r<t.length;r++)e[t[r]]?e[t[r]].synonyms.push(n.state.word):e[t[r]]={name:t[r],synonyms:[n.state.word]};n.setState({words:e,synonyms_list:[],word:""})},n.updateSynonyms=function(){n.setState({synonyms_list:[].concat(Object(c.a)(n.state.synonyms_list),[n.state.synonym]),synonym:""})},n.onChangeWord=function(e){n.state.words[e.target.value]?n.setState({synonyms_list:Object(c.a)(n.state.words[e.target.value].synonyms)}):n.setState({synonyms_list:[]}),n.setState({word:e.target.value})},n.search=function(e){var t=e.target.value;if(n.setState({search:t,search_results:[]}),n.state.words[t]){var r=n.searchRecursion(t,[]);r.splice(0,1),n.setState({search_results:r})}},n.searchRecursion=function(e,t){if(t.indexOf(e)>-1)return t;t.push(e);for(var r=0;r<n.state.words[e].synonyms.length;r++)n.searchRecursion(n.state.words[e].synonyms[r],t);return t},n.state={word:"",synonym:"",synonyms_list:[],words:{},search:"",search_results:[]},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.word,r=t.synonym,s=t.synonyms_list,o=t.search,c=t.search_results,l=a.a.createElement("ul",null,s.length>0&&s.map((function(e){return a.a.createElement("li",{key:e},e)}))),i=a.a.createElement("ul",null,c.length>0&&c.map((function(e,t){return a.a.createElement("li",{key:"".concat(e,"_").concat(t)},e)})));return a.a.createElement("div",{className:"App"},a.a.createElement("header",null,a.a.createElement("h1",null,"Synonym Dictionary")),a.a.createElement("main",null,a.a.createElement("input",{type:"text",placeholder:"Enter your word",value:n,onChange:this.onChangeWord}),a.a.createElement("br",null),s.length>0&&l,a.a.createElement("br",null),n.length>0&&a.a.createElement("input",{type:"text",placeholder:"Add synonym",value:r,onChange:function(t){return e.setState({synonym:t.target.value})}}),n.length>0&&a.a.createElement("button",{disabled:!s.indexOf(r)||r===n,onClick:this.updateSynonyms},"Add"),a.a.createElement("br",null),a.a.createElement("br",null),n.length>0&&s.length>0&&a.a.createElement("button",{onClick:this.addWord},"Save word")),a.a.createElement("section",{className:"search"},a.a.createElement("hr",null),a.a.createElement("h2",null,"Search words"),a.a.createElement("input",{type:"text",placeholder:"search",value:o,onChange:this.search}),a.a.createElement("br",null),i))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.a7666be9.chunk.js.map