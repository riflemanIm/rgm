(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/vpQ":function(r,n,t){"use strict";function e(r,n){if(null==r)return{};var t,e,o={},a=Object.keys(r);for(e=0;e<a.length;e++)t=a[e],n.indexOf(t)>=0||(o[t]=r[t]);return o}t.d(n,"a",(function(){return w})),t.d(n,"b",(function(){return P}));var o=t("wx14"),a=t("q1tI"),i=t("qKvR"),c=function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.literal,e=n.overlap,o=t?r:["&"].concat(r);function a(r){if("object"!==typeof r||null==r)return[];if(Array.isArray(r))return r.map(a);var n={},i={},c={};return Object.keys(r).forEach((function(u){var p=r[u];if(!Array.isArray(p)&&t&&(p=[p]),(t||Array.isArray(p))&&38!==u.charCodeAt(0)){var s=void 0;p.forEach((function(r,a){if((!e||s!==r)&&null!=r)if(s=r,0!==a||t)if(void 0===n[o[a]]){var i;n[o[a]]=((i={})[u]=r,i)}else n[o[a]][u]=r;else c[u]=r}))}else"object"===typeof p?i[u]=a(p):c[u]=p})),o.forEach((function(r){n[r]&&(c[r]=n[r])})),Object.assign(c,i),c}return function(){for(var r=arguments.length,n=Array(r),t=0;t<r;t++)n[t]=arguments[t];return n.map(a)}},u=Object(a.createContext)({breakpoints:[768,1280,1920],spaces:[0,4,8,16,32,64,128,256]}),p=function(r){return"screen and (min-width: "+("number"===typeof r?Math.ceil(r/16)+"em":r)+")"},s=(u.Provider,function(r){var n=r.breakpoints.map((function(r){return"@media "+p(r)})),t=c(n),e=function(r){return function(n){var t=Object(o.a)({},n[0]);return n.slice(1).forEach((function(n,e){t[r[e]]=n})),t}}(n);return function(r){return Array.isArray(r)?e(r):t(r)}}),f=function(){var r=Object(a.useContext)(u),n=Object(a.useMemo)((function(){return s(r)}),[r]),t=function(n){return Array.isArray(n)?n.map((function(n){return m(n,r)})):m(n,r)},e=function(r){return n({paddingTop:t(r)})},o=function(r){return n({paddingRight:t(r)})},i=function(r){return n({paddingBottom:t(r)})},c=function(r){return n({paddingLeft:t(r)})},p=function(r){return n({marginTop:t(r)})},f=function(r){return n({marginRight:t(r)})},l=function(r){return n({marginBottom:t(r)})},d=function(r){return n({marginLeft:t(r)})};return{media:n,pt:e,pr:o,pb:i,pl:c,px:function(r){return[c(r),o(r)]},py:function(r){return[e(r),i(r)]},p:function(r){return[e(r),o(r),i(r),c(r)]},mt:p,mr:f,mb:l,ml:d,mx:function(r){return[d(r),f(r)]},my:function(r){return[p(r),l(r)]},m:function(r){return[p(r),f(r),l(r),d(r)]}}},l=function(r,n){return r},d=function(r){return"number"===typeof r?function(r){return 0===r?0:100*r+"%"}(Math.max(0,Math.min(r,1))):r},m=function(r,n){var t,e=n.spaces;if("number"===typeof r){var o=e.length-1,a=Math.max(-o,Math.min(r,o));return t=a,(Number(t>0)-Number(t<0)||+t)*e[Math.abs(a)]}return r},g=[{prop:"width",transform:d},{prop:"height",transform:d}],v=[{prop:"p",cssProp:"paddingTop",transform:m},{prop:"p",cssProp:"paddingRight",transform:m},{prop:"p",cssProp:"paddingBottom",transform:m},{prop:"p",cssProp:"paddingLeft",transform:m},{prop:"ph",cssProp:"paddingLeft",transform:m},{prop:"ph",cssProp:"paddingRight",transform:m},{prop:"px",cssProp:"paddingLeft",transform:m},{prop:"px",cssProp:"paddingRight",transform:m},{prop:"pv",cssProp:"paddingTop",transform:m},{prop:"pv",cssProp:"paddingBottom",transform:m},{prop:"py",cssProp:"paddingTop",transform:m},{prop:"py",cssProp:"paddingBottom",transform:m},{prop:"pt",cssProp:"paddingTop",transform:m},{prop:"pr",cssProp:"paddingRight",transform:m},{prop:"pb",cssProp:"paddingBottom",transform:m},{prop:"pl",cssProp:"paddingLeft",transform:m},{prop:"m",cssProp:"marginTop",transform:m},{prop:"m",cssProp:"marginRight",transform:m},{prop:"m",cssProp:"marginBottom",transform:m},{prop:"m",cssProp:"marginLeft",transform:m},{prop:"mh",cssProp:"marginLeft",transform:m},{prop:"mh",cssProp:"marginRight",transform:m},{prop:"mx",cssProp:"marginLeft",transform:m},{prop:"mx",cssProp:"marginRight",transform:m},{prop:"mv",cssProp:"marginTop",transform:m},{prop:"mv",cssProp:"marginBottom",transform:m},{prop:"my",cssProp:"marginTop",transform:m},{prop:"my",cssProp:"marginBottom",transform:m},{prop:"mt",cssProp:"marginTop",transform:m},{prop:"mr",cssProp:"marginRight",transform:m},{prop:"mb",cssProp:"marginBottom",transform:m},{prop:"ml",cssProp:"marginLeft",transform:m}],h=[{prop:"flexGrow"},{prop:"flexShrink"},{prop:"flexBasis"},{prop:"justifySelf"},{prop:"alignSelf"},{prop:"order"}],b=[{prop:"alignItems"},{prop:"alignContent"},{prop:"justifyItems"},{prop:"justifyContent"},{prop:"flexWrap"},{prop:"flexDirection"}],y=function(r,n){var t={};for(var e in r)-1===n.indexOf(e)&&(t[e]=r[e]);return t},O=function(r){return r.prop},j=function(r,n,t){for(var e={},o=function(o){var a=t[o],i=a.prop,c=a.cssProp,u=void 0===c?i:c,p=a.transform,s=void 0===p?l:p,f=r[i];null!=f&&(e[u]=Array.isArray(f)?f.map((function(r){return s(r,n)})):s(f,n))},a=0;a<t.length;a+=1)o(a);return e},w=Object(a.forwardRef)((function(r,n){var t=r.as,c=void 0===t?"div":t,p=r.css,s=r.children,l=e(r,["as","css","children"]),d=Object(a.useContext)(u),m=f().media,b=[].concat(g,v,h),w=j(l,d,b),P=y(l,b.map(O));return Object(i.c)(c,Object(o.a)({ref:n,css:[{boxSizing:"border-box",minWidth:0,minHeight:0},p,m(w)]},P),null==s?null:s)}));w.displayName="Box";var P=Object(a.forwardRef)((function(r,n){var t=r.as,c=void 0===t?"div":t,p=r.css,s=r.children,l=e(r,["as","css","children"]),d=Object(a.useContext)(u),m=f().media,w=[].concat(g,v,h,b),P=j(l,d,w),x=y(l,w.map(O));return Object(i.c)(c,Object(o.a)({ref:n,css:[{display:"flex",boxSizing:"border-box",minWidth:0,minHeight:0},p,m(P)]},x),null==s?null:s)}));P.displayName="Flex"},"74wY":function(r,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/performance",function(){return t("NE9F")}])},BsWD:function(r,n,t){"use strict";t.d(n,"a",(function(){return o}));var e=t("a3WO");function o(r,n){if(r){if("string"===typeof r)return Object(e.a)(r,n);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(e.a)(r,n):void 0}}},CZrd:function(r,n,t){"use strict";t.d(n,"a",(function(){return s}));var e=t("ODXe");var o=t("q1tI"),a=new Map,i=new Map,c={emitter:{events:{},emit(r,...n){for(let t of this.events[r]||[])t(...n)},on(r,n){return(this.events[r]=this.events[r]||[]).push(n),()=>this.events[r]=this.events[r].filter(r=>r!==n)}},api:null,error:null},u=document.getElementsByTagName("head")[0],p=u.insertBefore;u.insertBefore=function(r,n){r.href&&r.href.indexOf("//fonts.googleapis.com/css?family=Roboto")>-1||p.call(u,r,n)},window.gm_authFailure=function(){c.error=new Error("Gmap encountered auth error. See console for more details."),c.api=null,c.emitter.emit("change")},window.rgm_mapLoaded=function(){null==c.error&&(c.api=window.google.maps),c.emitter.emit("change")};var s=function(){var r=o.useState(c.api),n=Object(e.a)(r,2),t=n[0],u=n[1],p="AIzaSyBC4njLnT0Gr9Lo_necn1pHL5OdzSMHXHY";var s=function(r){var n=o.useState("loading"),t=Object(e.a)(n,2),c=t[0],u=t[1];return o.useEffect((function(){var n=!0,t=function(){a.set(r,"done"),n&&u("done")},e=function(){a.set(r,"failed"),n&&u("failed")},o=a.get(r);if(null==o){var c=document.createElement("script");c.async=!0,c.defer=!0,c.importance="low",c.src=r,c.addEventListener("load",t),c.addEventListener("error",e),a.set(r,"loading"),i.set(r,c),document.body&&document.body.appendChild(c)}if("loading"===o){var p=i.get(r);if(p)return p.addEventListener("load",t),p.addEventListener("error",e),function(){p.removeEventListener("load",t),p.removeEventListener("error",e)}}return"done"===o&&u("done"),"failed"===o&&u("failed"),function(){n=!1}}),[r]),c}("https://maps.googleapis.com/maps/api/js?key=".concat(p,"&libraries=places&callback=rgm_mapLoaded"));return o.useEffect((function(){return null==t&&null!=c.api&&u(c.api),c.emitter.on("change",(function(){u(c.api)}))}),[t,s]),t}},NE9F:function(r,n,t){"use strict";t.r(n),t.d(n,"__N_SSG",(function(){return l})),t.d(n,"default",(function(){return d}));var e=t("ODXe"),o=t("q1tI"),a=t("sqll"),i=t("/vpQ"),c=t("CZrd"),u=t("TOXp"),p=t("qKvR");o.createElement;var s={zoom:9,center:{lat:59.936,lng:30.314},gestureHandling:"greedy",clickableIcons:!1},f=function(r){return Array.from(Array(r),(function(){var r=2*Math.random()+.05,n=2*Math.random()*Math.PI;return{lat:s.center.lat+r*Math.cos(n),lng:s.center.lng+r*Math.sin(n)}}))},l=!0;function d(){var r=Object(c.a)(),n=o.useState((function(){return f(200)})),t=Object(e.a)(n,2),l=t[0],d=t[1];return Object(p.c)("div",null,Object(p.c)(i.b,{p:3},Object(p.c)(i.a,{pr:2},"Count:"),Object(p.c)(u.h,{options:["100","200","300","500","1000","2000"],value:"".concat(l.length),onChange:function(r){d(f(Number.parseFloat(r)))}})),Object(p.c)(u.g,{value:.75},r&&Object(p.c)(a.a,{api:r,options:s},Object(p.c)(a.c,null,l.map((function(r,n){return Object(p.c)(a.b,{key:n,lat:r.lat,lng:r.lng},Object(p.c)(g,null))}))))))}var m={name:"1dpkr08",styles:"place-self:center center;width:10px;height:10px;border-radius:100%;background-color:white;border:2px solid red;"},g=function(){return Object(p.c)("div",{css:m})}},ODXe:function(r,n,t){"use strict";t.d(n,"a",(function(){return o}));var e=t("BsWD");function o(r,n){return function(r){if(Array.isArray(r))return r}(r)||function(r,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(r)){var t=[],e=!0,o=!1,a=void 0;try{for(var i,c=r[Symbol.iterator]();!(e=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);e=!0);}catch(u){o=!0,a=u}finally{try{e||null==c.return||c.return()}finally{if(o)throw a}}return t}}(r,n)||Object(e.a)(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},a3WO:function(r,n,t){"use strict";function e(r,n){(null==n||n>r.length)&&(n=r.length);for(var t=0,e=new Array(n);t<n;t++)e[t]=r[t];return e}t.d(n,"a",(function(){return e}))},sqll:function(r,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"d",(function(){return p})),t.d(n,"b",(function(){return f})),t.d(n,"c",(function(){return l}));var e=t("ODXe"),o=t("q1tI"),a=t("qKvR"),i=(o.createElement,o.createContext(null)),c=(function(){var r={}}(),{width:"100%",height:"100%"}),u=o.forwardRef((function(r,n){var t=r.api,u=r.options,p=r.children,s=o.useRef(null),f=o.useRef(!1),l=o.useState(null),d=Object(e.a)(l,2),m=d[0],g=d[1];return o.useImperativeHandle(n,(function(){return m?m.map:null}),[m]),o.useEffect((function(){if(!f.current&&s.current){var r=new t.Map(s.current,"function"===typeof u?u(s.current):u);return f.current=!0,g({map:r,api:t}),function(){}}}),[t,u]),Object(a.c)(o.Fragment,null,Object(a.c)("div",{style:c,ref:s}),m&&Object(a.c)(i.Provider,{value:m},p))})),p=function(){return o.useContext(i)},s=t("i8i4"),f=(o.createElement,function(r){return r.children}),l=function(r){var n=p(),t=n.api,i=n.map,c=o.useRef(2),u=o.Children.toArray(r.children||[]),f=o.useState(null),l=Object(e.a)(f,2),d=l[0],m=l[1],g=o.useRef([]),v=o.useRef([]),h=function(r){return Math.round(r*c.current)/c.current};if(o.useLayoutEffect((function(){g.current=u})),o.useEffect((function(){if(t){c.current=window.devicePixelRatio;var r=new t.OverlayView,n=null;return r.onAdd=function(){n=document.createElement("div"),r.getPanes().floatPane.appendChild(n),m({element:n,view:r})},r.onRemove=function(){if(null!=n){var r=n.parentNode;null!=r&&r.removeChild(n),m(null)}},r.draw=function(){var n=r.getProjection();g.current.forEach((function(r,e){var o=r.props,a=o.lat,i=o.lng,c=v.current[e].current;if(null!=c){var u=n.fromLatLngToDivPixel(new t.LatLng(a,i));c.style.left=h(u.x)+"px",c.style.top=h(u.y)+"px"}}))},r.setMap(i),function(){r.setMap(null)}}}),[t,i]),null!=d&&null!=u&&null!=t){var b=d.view.getProjection();return s.createPortal(u.map((function(n,e){var o=b.fromLatLngToDivPixel(new t.LatLng(n.props.lat,n.props.lng));return null==v.current[e]&&(v.current[e]={current:null}),Object(a.c)("div",{key:n.key,ref:v.current[e],style:{position:"absolute",left:h(o.x),top:h(o.y),display:"grid",gridTemplate:"0/0"}},n,!0===r.debug&&Object(a.c)("div",{style:{position:"absolute",borderRadius:"100%",width:4,height:4,left:-2,top:-2,opacity:.8,boxShadow:"0 0 0 2px blue, 0 0 0 4px white, 0 0 0 6px blue"}}))})),d.element)}return null}}},[["74wY",1,2,3,0,4]]]);