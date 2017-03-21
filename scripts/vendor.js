window.Modernizr=function(e,t,n){function o(e){y.cssText=e}function i(e,t){return o(w.join(e+";")+(t||""))}function r(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function s(e,t){for(var o in e){var i=e[o];if(!a(i,"-")&&y[i]!==n)return"pfx"!=t||i}return!1}function c(e,t,o){for(var i in e){var a=t[e[i]];if(a!==n)return o===!1?e[i]:r(a,"function")?a.bind(o||t):a}return!1}function l(e,t,n){var o=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+x.join(o+" ")+o).split(" ");return r(t,"string")||r(t,"undefined")?s(i,t):(i=(e+" "+S.join(o+" ")+o).split(" "),c(i,t,n))}var u,d,f={},m=t.documentElement,p="modernizr",g=t.createElement(p),y=g.style,h=t.createElement("input"),v=":)",b={}.toString,w=" -webkit- -moz- -o- -ms- ".split(" "),E="Webkit Moz O ms",x=E.split(" "),S=E.toLowerCase().split(" "),k={svg:"http://www.w3.org/2000/svg"},T={},C={},N={},j=[],q=j.slice,O=function(e,n,o,i){var r,a,s,c,l=t.createElement("div"),u=t.body,d=u||t.createElement("body");if(parseInt(o,10))for(;o--;)s=t.createElement("div"),s.id=i?i[o]:p+(o+1),l.appendChild(s);return r=["&#173;",'<style id="s',p,'">',e,"</style>"].join(""),l.id=p,(u?l:d).innerHTML+=r,d.appendChild(l),u||(d.style.background="",d.style.overflow="hidden",c=m.style.overflow,m.style.overflow="hidden",m.appendChild(d)),a=n(l,e),u?l.parentNode.removeChild(l):(d.parentNode.removeChild(d),m.style.overflow=c),!!a},A=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var o;return O("@media "+t+" { #"+p+" { position: absolute; } }",function(t){o="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),o},M=function(){function e(e,i){i=i||t.createElement(o[e]||"div"),e="on"+e;var a=e in i;return a||(i.setAttribute||(i=t.createElement("div")),i.setAttribute&&i.removeAttribute&&(i.setAttribute(e,""),a=r(i[e],"function"),r(i[e],"undefined")||(i[e]=n),i.removeAttribute(e))),i=null,a}var o={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),L={}.hasOwnProperty;d=r(L,"undefined")||r(L.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(e,t){return L.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=q.call(arguments,1),o=function(){if(this instanceof o){var i=function(){};i.prototype=t.prototype;var r=new i,a=t.apply(r,n.concat(q.call(arguments)));return Object(a)===a?a:r}return t.apply(e,n.concat(q.call(arguments)))};return o}),T.flexbox=function(){return l("flexWrap")},T.flexboxlegacy=function(){return l("boxDirection")},T.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},T.canvastext=function(){return!(!f.canvas||!r(t.createElement("canvas").getContext("2d").fillText,"function"))},T.webgl=function(){return!!e.WebGLRenderingContext},T.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:O(["@media (",w.join("touch-enabled),("),p,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},T.geolocation=function(){return"geolocation"in navigator},T.postmessage=function(){return!!e.postMessage},T.websqldatabase=function(){return!!e.openDatabase},T.indexedDB=function(){return!!l("indexedDB",e)},T.hashchange=function(){return M("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},T.history=function(){return!(!e.history||!history.pushState)},T.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},T.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},T.rgba=function(){return o("background-color:rgba(150,255,150,.5)"),a(y.backgroundColor,"rgba")},T.hsla=function(){return o("background-color:hsla(120,40%,100%,.5)"),a(y.backgroundColor,"rgba")||a(y.backgroundColor,"hsla")},T.multiplebgs=function(){return o("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(y.background)},T.backgroundsize=function(){return l("backgroundSize")},T.borderimage=function(){return l("borderImage")},T.borderradius=function(){return l("borderRadius")},T.boxshadow=function(){return l("boxShadow")},T.textshadow=function(){return""===t.createElement("div").style.textShadow},T.opacity=function(){return i("opacity:.55"),/^0.55$/.test(y.opacity)},T.cssanimations=function(){return l("animationName")},T.csscolumns=function(){return l("columnCount")},T.cssgradients=function(){var e="background-image:";return o((e+"-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));"+e)+w.join("linear-gradient(left top,#9f9, white);"+e)).slice(0,-e.length)),a(y.backgroundImage,"gradient")},T.cssreflections=function(){return l("boxReflect")},T.csstransforms=function(){return!!l("transform")},T.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in m.style&&O("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},T.csstransitions=function(){return l("transition")},T.fontface=function(){var e;return O('@font-face {font-family:"font";src:url("https://")}',function(n,o){var i=t.getElementById("smodernizr"),r=i.sheet||i.styleSheet,a=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(o.split(" ")[0])}),e},T.generatedcontent=function(){var e;return O(["#",p,"{font:0/0 a}#",p,':after{content:"',v,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},T.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(e){}return n},T.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(e){}return n},T.localstorage=function(){try{return localStorage.setItem(p,p),localStorage.removeItem(p),!0}catch(e){return!1}},T.sessionstorage=function(){try{return sessionStorage.setItem(p,p),sessionStorage.removeItem(p),!0}catch(e){return!1}},T.webworkers=function(){return!!e.Worker},T.applicationcache=function(){return!!e.applicationCache},T.svg=function(){return!!t.createElementNS&&!!t.createElementNS(k.svg,"svg").createSVGRect},T.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==k.svg},T.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(b.call(t.createElementNS(k.svg,"animate")))},T.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(b.call(t.createElementNS(k.svg,"clipPath")))};for(var P in T)d(T,P)&&(u=P.toLowerCase(),f[u]=T[P](),j.push((f[u]?"":"no-")+u));return f.input||function(){f.input=function(n){for(var o=0,i=n.length;o<i;o++)N[n[o]]=!!(n[o]in h);return N.list&&(N.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),N}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),f.inputtypes=function(e){for(var o,i,r,a=0,s=e.length;a<s;a++)h.setAttribute("type",i=e[a]),o="text"!==h.type,o&&(h.value=v,h.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&h.style.WebkitAppearance!==n?(m.appendChild(h),r=t.defaultView,o=r.getComputedStyle&&"textfield"!==r.getComputedStyle(h,null).WebkitAppearance&&0!==h.offsetHeight,m.removeChild(h)):/^(search|tel)$/.test(i)||(o=/^(url|email)$/.test(i)?h.checkValidity&&h.checkValidity()===!1:h.value!=v)),C[e[a]]=!!o;return C}("search tel url email datetime date month week time datetime-local number range color".split(" "))}(),f.addTest=function(e,t){if("object"==typeof e)for(var o in e)d(e,o)&&f.addTest(o,e[o]);else{if(e=e.toLowerCase(),f[e]!==n)return f;t="function"==typeof t?t():t,m.className+=" "+(t?"":"no-")+e,f[e]=t}return f},o(""),g=h=null,function(e,t){function n(e,t){var n=e.createElement("p"),o=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",o.insertBefore(n.lastChild,o.firstChild)}function o(){var e=h.elements;return"string"==typeof e?e.split(" "):e}function i(e){var t=y[e[p]];return t||(t={},g++,e[p]=g,y[g]=t),t}function r(e,n,o){if(n||(n=t),u)return n.createElement(e);o||(o=i(n));var r;return r=o.cache[e]?o.cache[e].cloneNode():m.test(e)?(o.cache[e]=o.createElem(e)).cloneNode():o.createElem(e),!r.canHaveChildren||f.test(e)||r.tagUrn?r:o.frag.appendChild(r)}function a(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||i(e);for(var r=n.frag.cloneNode(),a=0,s=o(),c=s.length;a<c;a++)r.createElement(s[a]);return r}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return h.shivMethods?r(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+o().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(h,t.frag)}function c(e){e||(e=t);var o=i(e);return!h.shivCSS||l||o.hasCSS||(o.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||s(e,o),e}var l,u,d=e.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",g=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){l=!0,u=!0}}();var h={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:"3.7.0",shivCSS:d.shivCSS!==!1,supportsUnknownElements:u,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:c,createElement:r,createDocumentFragment:a};e.html5=h,c(t)}(this,t),f._version="2.8.3",f._prefixes=w,f._domPrefixes=S,f._cssomPrefixes=x,f.mq=A,f.hasEvent=M,f.testProp=function(e){return s([e])},f.testAllProps=l,f.testStyles=O,f.prefixed=function(e,t,n){return t?l(e,t,n):l(e,"pfx")},m.className=m.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+" js "+j.join(" "),f}(this,this.document),function(){"use strict";function e(n){return void 0===this||Object.getPrototypeOf(this)!==e.prototype?new e(n):(k=this,k.version="3.3.4",k.tools=new S,k.isSupported()?(k.tools.extend(k.defaults,n||{}),k.defaults.container=t(k.defaults),k.store={elements:{},containers:[]},k.sequences={},k.history=[],k.uid=0,k.initialized=!1):"undefined"!=typeof console&&console,k)}function t(e){if(e&&e.container){if("string"==typeof e.container)return window.document.documentElement.querySelector(e.container);if(k.tools.isNode(e.container))return e.container}return k.defaults.container}function n(e,t){return"string"==typeof e?Array.prototype.slice.call(t.querySelectorAll(e)):k.tools.isNode(e)?[e]:k.tools.isNodeList(e)?Array.prototype.slice.call(e):[]}function o(){return++k.uid}function i(e,t,n){t.container&&(t.container=n),e.config?e.config=k.tools.extendClone(e.config,t):e.config=k.tools.extendClone(k.defaults,t),"top"===e.config.origin||"bottom"===e.config.origin?e.config.axis="Y":e.config.axis="X"}function r(e){var t=window.getComputedStyle(e.domEl);e.styles||(e.styles={transition:{},transform:{},computed:{}},e.styles.inline=e.domEl.getAttribute("style")||"",e.styles.inline+="; visibility: visible; ",e.styles.computed.opacity=t.opacity,t.transition&&"all 0s ease 0s"!==t.transition?e.styles.computed.transition=t.transition+", ":e.styles.computed.transition=""),e.styles.transition.instant=a(e,0),e.styles.transition.delayed=a(e,e.config.delay),e.styles.transform.initial=" -webkit-transform:",e.styles.transform.target=" -webkit-transform:",s(e),e.styles.transform.initial+="transform:",e.styles.transform.target+="transform:",s(e)}function a(e,t){var n=e.config;return"-webkit-transition: "+e.styles.computed.transition+"-webkit-transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; transition: "+e.styles.computed.transition+"transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; "}function s(e){var t,n=e.config,o=e.styles.transform;t="top"===n.origin||"left"===n.origin?/^-/.test(n.distance)?n.distance.substr(1):"-"+n.distance:n.distance,parseInt(n.distance)&&(o.initial+=" translate"+n.axis+"("+t+")",o.target+=" translate"+n.axis+"(0)"),n.scale&&(o.initial+=" scale("+n.scale+")",o.target+=" scale(1)"),n.rotate.x&&(o.initial+=" rotateX("+n.rotate.x+"deg)",o.target+=" rotateX(0)"),n.rotate.y&&(o.initial+=" rotateY("+n.rotate.y+"deg)",o.target+=" rotateY(0)"),n.rotate.z&&(o.initial+=" rotateZ("+n.rotate.z+"deg)",o.target+=" rotateZ(0)"),o.initial+="; opacity: "+n.opacity+";",o.target+="; opacity: "+e.styles.computed.opacity+";"}function c(e){var t=e.config.container;t&&k.store.containers.indexOf(t)===-1&&k.store.containers.push(e.config.container),k.store.elements[e.id]=e}function l(e,t,n){var o={target:e,config:t,interval:n};k.history.push(o)}function u(){if(k.isSupported()){m();for(var e=0;e<k.store.containers.length;e++)k.store.containers[e].addEventListener("scroll",d),k.store.containers[e].addEventListener("resize",d);k.initialized||(window.addEventListener("scroll",d),window.addEventListener("resize",d),k.initialized=!0)}return k}function d(){T(m)}function f(){var e,t,n,o;k.tools.forOwn(k.sequences,function(i){o=k.sequences[i],e=!1;for(var r=0;r<o.elemIds.length;r++)n=o.elemIds[r],t=k.store.elements[n],x(t)&&!e&&(e=!0);o.active=e})}function m(){var e,t;f(),k.tools.forOwn(k.store.elements,function(n){t=k.store.elements[n],e=h(t),y(t)?(t.config.beforeReveal(t.domEl),e?t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.target+t.styles.transition.delayed):t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.target+t.styles.transition.instant),g("reveal",t,e),t.revealing=!0,t.seen=!0,t.sequence&&p(t,e)):v(t)&&(t.config.beforeReset(t.domEl),t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.initial+t.styles.transition.instant),g("reset",t),t.revealing=!1)})}function p(e,t){var n=0,o=0,i=k.sequences[e.sequence.id];i.blocked=!0,t&&"onload"===e.config.useDelay&&(o=e.config.delay),e.sequence.timer&&(n=Math.abs(e.sequence.timer.started-new Date),window.clearTimeout(e.sequence.timer)),e.sequence.timer={started:new Date},e.sequence.timer.clock=window.setTimeout(function(){i.blocked=!1,e.sequence.timer=null,d()},Math.abs(i.interval)+o-n)}function g(e,t,n){var o=0,i=0,r="after";switch(e){case"reveal":i=t.config.duration,n&&(i+=t.config.delay),r+="Reveal";break;case"reset":i=t.config.duration,r+="Reset"}t.timer&&(o=Math.abs(t.timer.started-new Date),window.clearTimeout(t.timer.clock)),t.timer={started:new Date},t.timer.clock=window.setTimeout(function(){t.config[r](t.domEl),t.timer=null},i-o)}function y(e){if(e.sequence){var t=k.sequences[e.sequence.id];return t.active&&!t.blocked&&!e.revealing&&!e.disabled}return x(e)&&!e.revealing&&!e.disabled}function h(e){var t=e.config.useDelay;return"always"===t||"onload"===t&&!k.initialized||"once"===t&&!e.seen}function v(e){if(e.sequence){return!k.sequences[e.sequence.id].active&&e.config.reset&&e.revealing&&!e.disabled}return!x(e)&&e.config.reset&&e.revealing&&!e.disabled}function b(e){return{width:e.clientWidth,height:e.clientHeight}}function w(e){if(e&&e!==window.document.documentElement){var t=E(e);return{x:e.scrollLeft+t.left,y:e.scrollTop+t.top}}return{x:window.pageXOffset,y:window.pageYOffset}}function E(e){var t=0,n=0,o=e.offsetHeight,i=e.offsetWidth;do{isNaN(e.offsetTop)||(t+=e.offsetTop),isNaN(e.offsetLeft)||(n+=e.offsetLeft),e=e.offsetParent}while(e);return{top:t,left:n,height:o,width:i}}function x(e){var t=E(e.domEl),n=b(e.config.container),o=w(e.config.container),i=e.config.viewFactor,r=t.height,a=t.width,s=t.top,c=t.left,l=s+r,u=c+a;return function(){var t=s+r*i,d=c+a*i,f=l-r*i,m=u-a*i,p=o.y+e.config.viewOffset.top,g=o.x+e.config.viewOffset.left,y=o.y-e.config.viewOffset.bottom+n.height,h=o.x-e.config.viewOffset.right+n.width;return t<y&&f>p&&d>g&&m<h}()||function(){return"fixed"===window.getComputedStyle(e.domEl).position}()}function S(){}var k,T;e.prototype.defaults={origin:"bottom",distance:"20px",duration:500,delay:0,rotate:{x:0,y:0,z:0},opacity:0,scale:.9,easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",container:window.document.documentElement,mobile:!0,reset:!1,useDelay:"always",viewFactor:.2,viewOffset:{top:0,right:0,bottom:0,left:0},beforeReveal:function(e){},beforeReset:function(e){},afterReveal:function(e){},afterReset:function(e){}},e.prototype.isSupported=function(){var e=document.documentElement.style;return"WebkitTransition"in e&&"WebkitTransform"in e||"transition"in e&&"transform"in e},e.prototype.reveal=function(e,a,s,d){var f,m,p,g,y,h;if(void 0!==a&&"number"==typeof a?(s=a,a={}):void 0!==a&&null!==a||(a={}),f=t(a),m=n(e,f),!m.length)return k;s&&"number"==typeof s&&(h=o(),y=k.sequences[h]={id:h,interval:s,elemIds:[],active:!1});for(var v=0;v<m.length;v++)g=m[v].getAttribute("data-sr-id"),g?p=k.store.elements[g]:(p={id:o(),domEl:m[v],seen:!1,revealing:!1},p.domEl.setAttribute("data-sr-id",p.id)),y&&(p.sequence={id:y.id,index:y.elemIds.length},y.elemIds.push(p.id)),i(p,a,f),r(p),c(p),k.tools.isMobile()&&!p.config.mobile||!k.isSupported()?(p.domEl.setAttribute("style",p.styles.inline),p.disabled=!0):p.revealing||p.domEl.setAttribute("style",p.styles.inline+p.styles.transform.initial);return!d&&k.isSupported()&&(l(e,a,s),k.initTimeout&&window.clearTimeout(k.initTimeout),k.initTimeout=window.setTimeout(u,0)),k},e.prototype.sync=function(){if(k.history.length&&k.isSupported()){for(var e=0;e<k.history.length;e++){var t=k.history[e];k.reveal(t.target,t.config,t.interval,!0)}u()}return k},S.prototype.isObject=function(e){return null!==e&&"object"==typeof e&&e.constructor===Object},S.prototype.isNode=function(e){return"object"==typeof window.Node?e instanceof window.Node:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},S.prototype.isNodeList=function(e){var t=Object.prototype.toString.call(e),n=/^\[object (HTMLCollection|NodeList|Object)\]$/;return"object"==typeof window.NodeList?e instanceof window.NodeList:e&&"object"==typeof e&&n.test(t)&&"number"==typeof e.length&&(0===e.length||this.isNode(e[0]))},S.prototype.forOwn=function(e,t){if(!this.isObject(e))throw new TypeError('Expected "object", but received "'+typeof e+'".');for(var n in e)e.hasOwnProperty(n)&&t(n)},S.prototype.extend=function(e,t){return this.forOwn(t,function(n){this.isObject(t[n])?(e[n]&&this.isObject(e[n])||(e[n]={}),this.extend(e[n],t[n])):e[n]=t[n]}.bind(this)),e},S.prototype.extendClone=function(e,t){return this.extend(this.extend({},e),t)},S.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},T=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return e}):"undefined"!=typeof module&&module.exports?module.exports=e:window.ScrollReveal=e}();