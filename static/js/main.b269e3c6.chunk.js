(this["webpackJsonpshoppies-web-dev"]=this["webpackJsonpshoppies-web-dev"]||[]).push([[0],{29:function(e,a,t){e.exports=t.p+"static/media/logo.ae25aaa3.png"},31:function(e,a,t){e.exports=t.p+"static/media/giphy.b0ac73ff.gif"},32:function(e,a,t){e.exports=t(67)},37:function(e,a,t){},38:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(27),i=t.n(c),l=(t(37),t(38),t(8)),s=t(9),m=t(11),o=t(10),u=t(28),h=t.n(u),d=(t(56),t(57),t(29)),p=t.n(d),_=t(13),v=function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"head"},r.a.createElement("div",{className:"head__logo-container"},r.a.createElement("img",{className:"head__logo",src:p.a,alt:"Logo"})),r.a.createElement("div",{className:"head__text-container"},r.a.createElement(_.b,{className:"head__text-link ",to:"/",activeClassName:"is--active",exact:!0},r.a.createElement("p",{className:"head__text"},"Home")),r.a.createElement(_.b,{className:"head__text-link",to:"/story",activeClassName:"is--active"},r.a.createElement("p",{className:"head__text"},"Our Story")))))},f=(t(63),function(e){return r.a.createElement("section",{className:"search"},r.a.createElement("div",{className:"search__head-container"},r.a.createElement("h1",{className:"search__head"},"The Shoppies"),r.a.createElement("h2",{className:"search__subhead"},"Nominate Your Favorite Movie")),r.a.createElement("form",{onSubmit:e.searchKey,className:"search__input-form"},r.a.createElement("input",{type:"text",name:"search",placeholder:"Please Enter Movie Title",required:!0,minLength:"3",className:"search__input-field"}),r.a.createElement("button",{type:"submit",className:"search__input-btn"},"Search")))}),E=(t(64),t(31)),b=t.n(E),N=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return 0===this.props.data.length?r.a.createElement("div",{className:"movie__error-container"},r.a.createElement("span",null,r.a.createElement("img",{className:"movie__error-img",src:b.a,alt:"sleepy Icon"})),r.a.createElement("h2",{className:"movie__error-text"},"Nothing to display",r.a.createElement("br",null),"Please search for a Movie ",r.a.createElement("br",null)," And get Started!")):r.a.createElement("section",{className:"movie"},r.a.createElement("section",null,this.props.data.map((function(a){return r.a.createElement("form",{className:"movie__container animate__animated animate__fadeIn",onSubmit:function(t){return e.props.clickHandler(t,a.Title)},key:a.imdbID},r.a.createElement("div",{className:"movie__poster--container"},r.a.createElement("img",{src:a.Poster,className:"movie__poster",alt:a.Title})),r.a.createElement("div",{className:"movie__blurb"},r.a.createElement("h3",{className:"movie__blurb-text"},"Title : ",a.Title),r.a.createElement("h4",{className:"movie__blurb-text"},"Release Year: ",a.Year)),r.a.createElement("button",{className:"movie__btn",type:"submit"},"Nominate"))}))))}}]),t}(n.Component),y=(t(65),function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"nominated"},this.props.nomination.map((function(a){return r.a.createElement("form",{className:"nominated__container  animate__animated animate__fadeIn  ",onSubmit:e.props.deleteHandler,key:a.Title},r.a.createElement("div",{className:"nominated__poster--container"},r.a.createElement("img",{src:a.Poster,className:"nominated__poster",alt:a.Title})),r.a.createElement("div",{className:"nominated__blurb"},r.a.createElement("h3",{className:"nominated__blurb-text"},"Title : ",a.Title),r.a.createElement("h4",{className:"nominated__blurb-text"},"Release Year: ",a.Year)),r.a.createElement("button",{className:"nominated__btn",type:"submit"},"Delete"))})))}}]),t}(n.Component)),g=[],S=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={movies:[],nomMov:[]},e.searchKey=function(a){a.preventDefault();var t=a.target.search.value;h.a.get(" https://www.omdbapi.com/?apikey=2e171a45&s=".concat(t)).then((function(a){var t=a.data.Search;e.setState({movies:t})}))},e.clickHandler=function(a,t){if(a.preventDefault(),e.state.movies){g.push(e.state.movies.find((function(e){return e.Title===t}))),e.setState({nomMov:g});var n=e.state.movies.filter((function(e){return e.Title!==t}));e.setState({movies:n})}},e.deleteHandler=function(a,t){a.preventDefault(),e.state.nomMov&&(g.splice(e.state.nomMov.find((function(e){return e.Title===t})),1),e.setState({nomMov:g}))},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this.state,a=e.movies,t=e.nomMov;return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("main",{className:"main"},r.a.createElement(f,{searchKey:this.searchKey}),r.a.createElement("section",{className:"main__movies"},r.a.createElement("div",{className:"main__movie-results"},r.a.createElement("h2",{className:"main__movie-heading"},"Search Results"),r.a.createElement(N,{clickHandler:this.clickHandler,data:a})),r.a.createElement("div",{className:"main__movie-nominated"},r.a.createElement("h2",{className:"main__movie-heading"},"Nominated Movies"),r.a.createElement(y,{nomination:t,deleteHandler:this.deleteHandler})))))}}]),t}(n.Component),w=t(1),x=(t(66),function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("section",{className:"story"},r.a.createElement("div",{className:"story__heading"},r.a.createElement("h1",null,"The Shopify Awards")),r.a.createElement("div",{clasname:"story__blurb"},r.a.createElement("p",null,'The Shopify Awards, popularly known as the Shopies, are awards for artistic and technical merit in the Developer world. Given annually by the Shopify, the awards are in recognition of excellence in cinematic achievements, as assessed by the Shopify\'s voting membership. The various category winners are awarded a copy of a golden statuette, officially called the "Shopify Award of Merit", although more commonly referred to by its nickname, the "Shoppie".'))))});var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(_.a,null,r.a.createElement(w.c,null,r.a.createElement(w.a,{path:"/",exact:!0,component:S}),r.a.createElement(w.a,{path:"/story",component:x}))))};i.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.b269e3c6.chunk.js.map