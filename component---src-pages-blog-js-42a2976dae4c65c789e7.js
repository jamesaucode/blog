(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{168:function(e,t,a){"use strict";a.r(t);a(100),a(70),a(44),a(188);var n=a(169),c=a(12),i=a(0),l=a.n(i),o=a(178),r=a(190),s=function(){return r.data.allContentfulBlog.edges},u=a(171),d=Object(n.a)("div",{target:"efp06ts0"})({name:"8ls4t5",styles:"width:100%;max-height:250px;background:transparent;padding:0 1rem;&:hover{cursor:pointer;}"}),m=Object(n.a)("h2",{target:"efp06ts1"})({name:"17jm3cy",styles:"color:rgba(255,255,255,0.9);font-size:2.5em;font-weight:600;padding-bottom:1rem;line-height:1;"}),b=Object(n.a)("p",{target:"efp06ts2"})({name:"1vec1c1",styles:"color:rgba(255,255,255,0.75);font-size:0.7em;"}),g=Object(n.a)("p",{target:"efp06ts3"})({name:"nlz57h",styles:"font-size:.9em;color:rgba(255,255,255,0.75);line-height:1.6;text-overflow:ellipsis;overflow:hidden;"}),p=Object(n.a)("div",{target:"efp06ts4"})({name:"1jt3edj",styles:"border-bottom:1px solid rgb(151,73,229);width:80%;margin:2rem auto;"}),f=function(e){var t=e.id,a=e.title,n=e.path,i=e.date,o=(e.tag,e.content.content);return Object(c.c)(l.a.Fragment,{key:t},Object(c.c)(u.a,{to:"/blog/"+n},Object(c.c)(d,null,Object(c.c)(b,null,i),Object(c.c)(m,null,a),Object(c.c)(g,null,function(e){return e.slice(0,Math.min(e.length,350))+" ..."}(o)))),Object(c.c)(p,null))},h=Object(n.a)("div",{target:"eco40i40"})({name:"rgeprw",styles:'display:grid;max-width:1200px;grid-template-areas:"sidebar post";grid-template-columns:200px auto;grid-gap:4rem;margin:0 auto;font-size:calc(0.35vw + 15px);@media (max-width:600px){grid-template-areas:"post"  "sidebar";grid-template-columns:auto;grid-gap:0;}'}),j=Object(n.a)("div",{target:"eco40i41"})({name:"1ke55z2",styles:"grid-area:post;max-width:800px;display:flex;flex-direction:column;margin:0 auto;"}),O=Object(n.a)("div",{target:"eco40i42"})({name:"189qjvy",styles:"grid-area:sidebar;height:100%;"}),v=Object(n.a)("ul",{target:"eco40i43"})({name:"1t038y6",styles:"display:flex;flex-direction:column;align-items:flex-start;max-width:400px;padding:1rem;margin:0 auto;@media (max-width:600px){}"}),x=Object(n.a)("li",{target:"eco40i44"})("color:rgba(255,255,255,0.8);font-weight:600;padding:0.25rem 0;margin:0.75rem 0;&:hover{cursor:pointer;}transition:0.5s ease-out border-bottom;border-bottom:3px solid ",function(e){return e.active?"#b0ff92":"transparent"},";");t.default=function(){var e=s(),t=Object(i.useState)(""),a=t[0],n=t[1],l=function(e){var t={};return e.forEach(function(e){var a=e.node.tag;a&&(t[a]?++t[a]:t[a]=1)}),t}(e);return Object(c.c)(o.a,null,Object(c.c)(h,null,Object(c.c)(O,null,Object(c.c)(v,null,Object.entries(l).map(function(e){var t=e[0],i=e[1];return Object(c.c)(x,{title:"#"+t,onClick:function(){n(t)},active:a===t},"#"+t+" ("+i+")")}))),Object(c.c)(j,null,e.map(function(e){var t=e.node;return a?t.tag===a?Object(c.c)(f,t):null:Object(c.c)(f,t)}))))}},170:function(e,t,a){var n;e.exports=(n=a(172))&&n.default||n},171:function(e,t,a){"use strict";a(12);var n=a(0),c=a.n(n),i=a(5),l=a.n(i),o=a(43),r=a.n(o);a.d(t,"a",function(){return r.a});a(170),c.a.createContext({});l.a.object,l.a.string.isRequired,l.a.func,l.a.func},172:function(e,t,a){"use strict";a.r(t);a(67);var n=a(0),c=a.n(n),i=a(5),l=a.n(i),o=a(68),r=function(e){var t=e.location,a=e.pageResources;return a?c.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};r.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=r},173:function(e,t,a){var n=a(0);function c(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"Gatsby icon"),n.createElement("path",{d:"M12.001.007C5.326.007.007 5.326.007 12S5.326 23.995 12 23.995s11.994-5.319 11.994-11.994S18.676.007 12.001.007zM2.614 12.105l9.283 9.283c-5.111 0-9.283-4.172-9.283-9.283zm11.473 9.074L2.823 9.915C3.76 5.743 7.516 2.614 12 2.614a9.476 9.476 0 0 1 7.614 3.86L18.259 7.62a7.657 7.657 0 0 0-6.362-3.337A7.555 7.555 0 0 0 4.7 9.393l9.804 9.805c2.4-.835 4.276-2.92 4.798-5.424h-4.068v-1.773h6.154c0 4.485-3.129 8.24-7.301 9.178z",key:1})])}c.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=c,c.default=c},174:function(e,t,a){var n=a(0);function c(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"React icon"),n.createElement("path",{d:"M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z",key:1})])}c.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=c,c.default=c},175:function(e,t,a){var n=a(0);function c(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"HTML5 icon"),n.createElement("path",{d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z",key:1})])}c.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=c,c.default=c},176:function(e,t,a){var n=a(0);function c(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"CSS3 icon"),n.createElement("path",{d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z",key:1})])}c.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=c,c.default=c},177:function(e){e.exports={data:{site:{siteMetadata:{title:"James Au | Web Developer",author:"James Au",description:"Portfolio for web developer James Au, who studies Psychology and Computer Science. Passionate about coding."}}}}},178:function(e,t,a){"use strict";var n=a(169),c=a(12),i=a(0),l=a.n(i),o=a(171),r=Object(n.a)("ul",{target:"eneaom30"})({name:"1bvc4cc",styles:"display:flex;justify-content:flex-end;"}),s=Object(n.a)("li",{target:"eneaom31"})({name:"19zltml",styles:"color:rgb(207,249,248);font-size:0.7em;font-weight:400;padding:0.5em 1em;transition:0.5s ease-out color;text-transform:uppercase;&:hover{color:white;cursor:pointer;}"}),u=Object(n.a)("header",{target:"eneaom32"})({name:"2zltv0",styles:"padding:2rem 1rem;height:75px;width:100%;font-size:calc(0.3vw + 16px);@media (max-width:450px){padding:0.5rem;}"}),d=Object(n.a)("nav",{target:"eneaom33"})({name:"12yv2sw",styles:"display:flex;max-width:1400px;margin:0 auto;justify-content:space-between;color:white;font-weight:900;@media (max-width:450px){flex-direction:column;align-items:center;}"}),m=Object(n.a)("h1",{target:"eneaom34"})({name:"10isvna",styles:"font-size:1.25em;font-weight:700;"}),b=function(){return Object(c.c)(u,null,Object(c.c)(d,null,Object(c.c)(o.a,{to:"/"},Object(c.c)(m,null,"James Au")),Object(c.c)(r,null,Object(c.c)(s,null,Object(c.c)(o.a,{to:"/"},"Home")),Object(c.c)(s,null,Object(c.c)(o.a,{to:"/project"},"Project")),Object(c.c)(s,null,Object(c.c)(o.a,{to:"/blog"},"Blog")),Object(c.c)(s,null,Object(c.c)(o.a,{to:"/about"},"About")))))},g=a(179),p=a.n(g),f=a(173),h=a.n(f),j=a(174),O=a.n(j),v=a(175),x=a.n(v),y=a(176),w=a.n(y),z=Object(n.a)("footer",{target:"e1isclpm0"})({name:"1elt2r0",styles:"display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:120px;position:absolute;background:rgb(111,1,221);background:linear-gradient( 180deg,rgba(111,1,221,1) 0%,rgba(114,1,228,1) 100% );right:0;bottom:0;left:0;"}),S=Object(n.a)("section",{target:"e1isclpm1"})({name:"1g4hh8z",styles:"display:flex;align-items:center;font-size:0.9em;line-height:1.5;color:rgba(247,255,255,0.8);"}),k=Object(n.a)("a",{target:"e1isclpm2"})({name:"q5fqw0",styles:"padding:1rem;"}),M=function(e){var t=e.iconSize;return Object(c.c)(z,null,Object(c.c)(S,null,"@2019 James Au"),Object(c.c)(S,null,"Built with",Object(c.c)(k,{href:"https://www.gatsbyjs.org/",target:"_blank",rel:"noopener","aria-label":"Gatsby's website, an amazing Javascript / React framework!"},Object(c.c)(h.a,{alt:"Gatsby Icon",height:t,fill:"rgba(247, 255, 255, 0.8)"})),Object(c.c)(k,{href:"https://reactjs.org/",target:"_blank",rel:"noopener","aria-label":"Official ReactJS Page"},Object(c.c)(O.a,{alt:"ReactJS Icon",height:t,fill:"rgba(247, 255, 255, 0.8)"})),Object(c.c)(k,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML",target:"_blank",rel:"noopener","aria-label":"Mozilla's Page about HTML (Cascading Style Sheet)"},Object(c.c)(x.a,{alt:"HTML Icon",height:t,fill:"rgba(247, 255, 255, 0.8)"})),Object(c.c)(k,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS",target:"_blank",rel:"noopener","aria-label":"Mozilla's Page about CSS (Cascading Style Sheet)"},Object(c.c)(w.a,{alt:"CSS Icon",height:t,fill:"rgba(247, 255, 255, 0.8)"}))))},C=a(177),L=function(){return C.data.site.siteMetadata},q=Object(n.a)("main",{target:"e11ahu1z0"})({name:"uvgkf",styles:"position:relative;padding-bottom:120px;min-height:calc(100vh - 75px);"}),E={name:"hje1cx",styles:'*{box-sizing:border-box;}body,html{font-family:"Source Sans Pro",Arial,Verdana,Helvetica,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;line-height:1.4;background:rgb(108,0,216);background:linear-gradient( 180deg,rgba(108,0,216,1) 0%,rgba(111,1,221,1) 100% );}a{text-decoration:none;color:inherit;}'};t.a=function(e){var t=e.children,a=L();return Object(c.c)(l.a.Fragment,null,Object(c.c)(c.a,{styles:E}),Object(c.c)(p.a,null,Object(c.c)("html",{lang:"en"}),Object(c.c)("title",null,a.title),Object(c.c)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,900&display=swap"}),Object(c.c)("meta",{charSet:"utf-8"}),Object(c.c)("meta",{name:"author",content:a.author}),Object(c.c)("meta",{name:"description",content:a.description})),Object(c.c)(b,null),Object(c.c)(q,null,t,Object(c.c)(M,{iconSize:"16px"})),Object(c.c)("script",{async:!0,defer:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}))}},188:function(e,t,a){var n=a(9),c=a(189)(!0);n(n.S,"Object",{entries:function(e){return c(e)}})},189:function(e,t,a){var n=a(10),c=a(28),i=a(21),l=a(34).f;e.exports=function(e){return function(t){for(var a,o=i(t),r=c(o),s=r.length,u=0,d=[];s>u;)a=r[u++],n&&!l.call(o,a)||d.push(e?[a,o[a]]:o[a]);return d}}},190:function(e){e.exports={data:{allContentfulBlog:{edges:[{node:{id:"881baf99-4211-57c5-a23d-7b14e9954b6d",tag:"personal",content:{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},title:"Testing",path:"haha",date:"2019-06-23"}},{node:{id:"bb7ef25b-3d6b-5c32-a5dc-647f56c83653",tag:"100daysofcode",content:{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},title:"Another Test",path:"day102",date:"2019-06-23"}},{node:{id:"65fb504e-918b-59a1-ac4b-2c7977db852d",tag:"100daysofcode",content:{content:"This is a test for a new blog!"},title:"Testing",path:"day101",date:"2019-05-14"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-42a2976dae4c65c789e7.js.map