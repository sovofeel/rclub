$(document).ready(function(){$("header").offset().top+$("header").outerHeight();$(window).scroll(function(e){$(window).scrollTop()>$(".contact").offset().top&&!$(".contact").hasClass("fixed")&&$(".contact").addClass("fixed"),0==$(window).scrollTop()&&$(".contact").hasClass("fixed")&&$(".contact").removeClass("fixed")})}),function(e,t){"use strict";"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.Headroom=t()}(this,function(){"use strict";function e(e){this.callback=e,this.ticking=!1}function t(e){return e&&"undefined"!=typeof window&&(e===window||e.nodeType)}function n(e){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var r,o,i=e||{};for(o=1;o<arguments.length;o++){var a=arguments[o]||{};for(r in a)"object"!=typeof i[r]||t(i[r])?i[r]=i[r]||a[r]:i[r]=n(i[r],a[r])}return i}function r(e){return e===Object(e)?e:{down:e,up:e}}function o(e,t){t=n(t,o.options),this.lastKnownScrollY=0,this.elem=e,this.tolerance=r(t.tolerance),this.classes=t.classes,this.offset=t.offset,this.scroller=t.scroller,this.initialised=!1,this.onPin=t.onPin,this.onUnpin=t.onUnpin,this.onTop=t.onTop,this.onNotTop=t.onNotTop,this.onBottom=t.onBottom,this.onNotBottom=t.onNotBottom}var i={bind:!!function(){}.bind,classList:"classList"in document.documentElement,rAF:!!(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame)};return window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,e.prototype={constructor:e,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},o.prototype={constructor:o,init:function(){if(o.cutsTheMustard)return this.debouncer=new e(this.update.bind(this)),this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this},destroy:function(){var e=this.classes;this.initialised=!1,this.elem.classList.remove(e.unpinned,e.pinned,e.top,e.notTop,e.initial),this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var e=this.elem.classList,t=this.classes;!e.contains(t.pinned)&&e.contains(t.unpinned)||(e.add(t.unpinned),e.remove(t.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var e=this.elem.classList,t=this.classes;e.contains(t.unpinned)&&(e.remove(t.unpinned),e.add(t.pinned),this.onPin&&this.onPin.call(this))},top:function(){var e=this.elem.classList,t=this.classes;e.contains(t.top)||(e.add(t.top),e.remove(t.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var e=this.elem.classList,t=this.classes;e.contains(t.notTop)||(e.add(t.notTop),e.remove(t.top),this.onNotTop&&this.onNotTop.call(this))},bottom:function(){var e=this.elem.classList,t=this.classes;e.contains(t.bottom)||(e.add(t.bottom),e.remove(t.notBottom),this.onBottom&&this.onBottom.call(this))},notBottom:function(){var e=this.elem.classList,t=this.classes;e.contains(t.notBottom)||(e.add(t.notBottom),e.remove(t.bottom),this.onNotBottom&&this.onNotBottom.call(this))},getScrollY:function(){return void 0!==this.scroller.pageYOffset?this.scroller.pageYOffset:void 0!==this.scroller.scrollTop?this.scroller.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},getViewportHeight:function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},getElementPhysicalHeight:function(e){return Math.max(e.offsetHeight,e.clientHeight)},getScrollerPhysicalHeight:function(){return this.scroller===window||this.scroller===document.body?this.getViewportHeight():this.getElementPhysicalHeight(this.scroller)},getDocumentHeight:function(){var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,t.scrollHeight,e.offsetHeight,t.offsetHeight,e.clientHeight,t.clientHeight)},getElementHeight:function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},getScrollerHeight:function(){return this.scroller===window||this.scroller===document.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(e){var t=e<0,n=e+this.getScrollerPhysicalHeight()>this.getScrollerHeight();return t||n},toleranceExceeded:function(e,t){return Math.abs(e-this.lastKnownScrollY)>=this.tolerance[t]},shouldUnpin:function(e,t){var n=e>this.lastKnownScrollY,r=e>=this.offset;return n&&r&&t},shouldPin:function(e,t){var n=e<this.lastKnownScrollY,r=e<=this.offset;return n&&t||r},update:function(){var e=this.getScrollY(),t=e>this.lastKnownScrollY?"down":"up",n=this.toleranceExceeded(e,t);this.isOutOfBounds(e)||(e<=this.offset?this.top():this.notTop(),e+this.getViewportHeight()>=this.getScrollerHeight()?this.bottom():this.notBottom(),this.shouldUnpin(e,n)?this.unpin():this.shouldPin(e,n)&&this.pin(),this.lastKnownScrollY=e)}},o.options={tolerance:{up:0,down:0},offset:0,scroller:window,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",bottom:"headroom--bottom",notBottom:"headroom--not-bottom",initial:"headroom"}},o.cutsTheMustard="undefined"!=typeof i&&i.rAF&&i.bind&&i.classList,o}),$(document).ready(function(){$(document).on("mouseover mouseout","a",function(e){var t=$(this).attr("href");t&&"#"!=t&&$("a").filter('[href="'+$(this).attr("href")+'"]').toggleClass("hover","mouseover"==e.type)})}),function(e,t,n){"use strict";function r(n){if(o=t.documentElement,i=t.body,_(),se=this,n=n||{},me=n.constants||{},n.easing)for(var r in n.easing)j[r]=n.easing[r];Te=n.edgeStrategy||"set",fe={beforerender:n.beforerender,render:n.render,keyframe:n.keyframe},ue=n.forceHeight!==!1,ue&&(Oe=n.scale||1),de=n.mobileDeceleration||x,he=n.smoothScrolling!==!1,ge=n.smoothScrollingDuration||H,ve={targetTop:se.getScrollTop()},Ue=(n.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),Ue?(ce=t.getElementById(n.skrollrBody||E),ce&&ae(),X(),Pe(o,[y,w],[T])):Pe(o,[y,b],[T]),se.refresh(),Se(e,"resize orientationchange",function(){var e=o.clientWidth,t=o.clientHeight;t===ze&&e===Me||(ze=t,Me=e,Ye=!0)});var a=R();return function s(){J(),we=a(s)}(),se}var o,i,a={get:function(){return se},init:function(e){return se||new r(e)},VERSION:"0.6.30"},s=Object.prototype.hasOwnProperty,l=e.Math,c=e.getComputedStyle,f="touchstart",u="touchmove",m="touchcancel",d="touchend",p="skrollable",h=p+"-before",g=p+"-between",v=p+"-after",y="skrollr",T="no-"+y,b=y+"-desktop",w=y+"-mobile",S="linear",k=1e3,x=.004,E="skrollr-body",H=200,A="start",F="end",C="center",P="bottom",$="___skrollable_id",N=/^(?:input|textarea|button|select)$/i,B=/^\s+|\s+$/g,D=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,L=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,O=/^(@?[a-z\-]+)\[(\w+)\]$/,q=/-([a-z0-9_])/g,I=function(e,t){return t.toUpperCase()},V=/[\-+]?[\d]*\.?[\d]+/g,M=/\{\?\}/g,z=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,Y=/[a-z\-]+-gradient/g,K="",U="",_=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(c){var t=c(i,null);for(var n in t)if(K=n.match(e)||+n==n&&t[n].match(e))break;if(!K)return void(K=U="");K=K[0],"-"===K.slice(0,1)?(U=K,K={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[K]):U="-"+K.toLowerCase()+"-"}},R=function(){var t=e.requestAnimationFrame||e[K.toLowerCase()+"RequestAnimationFrame"],n=Be();return!Ue&&t||(t=function(t){var r=Be()-n,o=l.max(0,1e3/60-r);return e.setTimeout(function(){n=Be(),t()},o)}),t},G=function(){var t=e.cancelAnimationFrame||e[K.toLowerCase()+"CancelAnimationFrame"];return!Ue&&t||(t=function(t){return e.clearTimeout(t)}),t},j={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-l.cos(e*l.PI)/2+.5},sqrt:function(e){return l.sqrt(e)},outCubic:function(e){return l.pow(e-1,3)+1},bounce:function(e){var t;if(e<=.5083)t=3;else if(e<=.8489)t=9;else if(e<=.96208)t=27;else{if(!(e<=.99981))return 1;t=91}return 1-l.abs(3*l.cos(e*t*1.028)/t)}};r.prototype.refresh=function(e){var r,o,i=!1;for(e===n?(i=!0,le=[],Ke=0,e=t.getElementsByTagName("*")):e.length===n&&(e=[e]),r=0,o=e.length;r<o;r++){var a=e[r],s=a,l=[],c=he,f=Te,u=!1;if(i&&$ in a&&delete a[$],a.attributes){for(var m=0,d=a.attributes.length;m<d;m++){var h=a.attributes[m];if("data-anchor-target"!==h.name)if("data-smooth-scrolling"!==h.name)if("data-edge-strategy"!==h.name)if("data-emit-events"!==h.name){var g=h.name.match(D);if(null!==g){var v={props:h.value,element:a,eventType:h.name.replace(q,I)};l.push(v);var y=g[1];y&&(v.constant=y.substr(1));var T=g[2];/p$/.test(T)?(v.isPercentage=!0,v.offset=(0|T.slice(0,-1))/100):v.offset=0|T;var b=g[3],w=g[4]||b;b&&b!==A&&b!==F?(v.mode="relative",v.anchors=[b,w]):(v.mode="absolute",b===F?v.isEnd=!0:v.isPercentage||(v.offset=v.offset*Oe))}}else u=!0;else f=h.value;else c="off"!==h.value;else if(s=t.querySelector(h.value),null===s)throw'Unable to find anchor target "'+h.value+'"'}if(l.length){var S,k,x;!i&&$ in a?(x=a[$],S=le[x].styleAttr,k=le[x].classAttr):(x=a[$]=Ke++,S=a.style.cssText,k=Ce(a)),le[x]={element:a,styleAttr:S,classAttr:k,anchorTarget:s,keyFrames:l,smoothScrolling:c,edgeStrategy:f,emitEvents:u,lastFrameIndex:-1},Pe(a,[p],[])}}}for(He(),r=0,o=e.length;r<o;r++){var E=le[e[r][$]];E!==n&&(Q(E),te(E))}return se},r.prototype.relativeToAbsolute=function(e,t,n){var r=o.clientHeight,i=e.getBoundingClientRect(),a=i.top,s=i.bottom-i.top;return t===P?a-=r:t===C&&(a-=r/2),n===P?a+=s:n===C&&(a+=s/2),a+=se.getScrollTop(),a+.5|0},r.prototype.animateTo=function(e,t){t=t||{};var r=Be(),o=se.getScrollTop(),i=t.duration===n?k:t.duration;return pe={startTop:o,topDiff:e-o,targetTop:e,duration:i,startTime:r,endTime:r+i,easing:j[t.easing||S],done:t.done},pe.topDiff||(pe.done&&pe.done.call(se,!1),pe=n),se},r.prototype.stopAnimateTo=function(){pe&&pe.done&&pe.done.call(se,!0),pe=n},r.prototype.isAnimatingTo=function(){return!!pe},r.prototype.isMobile=function(){return Ue},r.prototype.setScrollTop=function(t,n){return ye=n===!0,Ue?_e=l.min(l.max(t,0),Le):e.scrollTo(0,t),se},r.prototype.getScrollTop=function(){return Ue?_e:e.pageYOffset||o.scrollTop||i.scrollTop||0},r.prototype.getMaxScrollTop=function(){return Le},r.prototype.on=function(e,t){return fe[e]=t,se},r.prototype.off=function(e){return delete fe[e],se},r.prototype.destroy=function(){var e=G();e(we),xe(),Pe(o,[T],[y,b,w]);for(var t=0,r=le.length;t<r;t++)ie(le[t].element);o.style.overflow=i.style.overflow="",o.style.height=i.style.height="",ce&&a.setStyle(ce,"transform","none"),se=n,ce=n,fe=n,ue=n,Le=0,Oe=1,me=n,de=n,qe="down",Ie=-1,Me=0,ze=0,Ye=!1,pe=n,he=n,ge=n,ve=n,ye=n,Ke=0,Te=n,Ue=!1,_e=0,be=n};var X=function(){var r,a,s,c,p,h,g,v,y,T,b,w;Se(o,[f,u,m,d].join(" "),function(e){var o=e.changedTouches[0];for(c=e.target;3===c.nodeType;)c=c.parentNode;switch(p=o.clientY,h=o.clientX,T=e.timeStamp,N.test(c.tagName)||e.preventDefault(),e.type){case f:r&&r.blur(),se.stopAnimateTo(),r=c,a=g=p,s=h,y=T;break;case u:N.test(c.tagName)&&t.activeElement!==c&&e.preventDefault(),v=p-g,w=T-b,se.setScrollTop(_e-v,!0),g=p,b=T;break;default:case m:case d:var i=a-p,S=s-h,k=S*S+i*i;if(k<49){if(!N.test(r.tagName)){r.focus();var x=t.createEvent("MouseEvents");x.initMouseEvent("click",!0,!0,e.view,1,o.screenX,o.screenY,o.clientX,o.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),r.dispatchEvent(x)}return}r=n;var E=v/w;E=l.max(l.min(E,3),-3);var H=l.abs(E/de),A=E*H+.5*de*H*H,F=se.getScrollTop()-A,C=0;F>Le?(C=(Le-F)/A,F=Le):F<0&&(C=-F/A,F=0),H*=1-C,se.animateTo(F+.5|0,{easing:"outCubic",duration:H})}}),e.scrollTo(0,0),o.style.overflow=i.style.overflow="hidden"},W=function(){var e,t,n,r,i,a,s,c,f,u,m,d=o.clientHeight,p=Ae();for(c=0,f=le.length;c<f;c++)for(e=le[c],t=e.element,n=e.anchorTarget,r=e.keyFrames,i=0,a=r.length;i<a;i++)s=r[i],u=s.offset,m=p[s.constant]||0,s.frame=u,s.isPercentage&&(u*=d,s.frame=u),"relative"===s.mode&&(ie(t),s.frame=se.relativeToAbsolute(n,s.anchors[0],s.anchors[1])-u,ie(t,!0)),s.frame+=m,ue&&!s.isEnd&&s.frame>Le&&(Le=s.frame);for(Le=l.max(Le,Fe()),c=0,f=le.length;c<f;c++){for(e=le[c],r=e.keyFrames,i=0,a=r.length;i<a;i++)s=r[i],m=p[s.constant]||0,s.isEnd&&(s.frame=Le-s.offset+m);e.keyFrames.sort(De)}},Z=function(e,t){for(var n=0,r=le.length;n<r;n++){var o,i,l=le[n],c=l.element,f=l.smoothScrolling?e:t,u=l.keyFrames,m=u.length,d=u[0],y=u[u.length-1],T=f<d.frame,b=f>y.frame,w=T?d:y,S=l.emitEvents,k=l.lastFrameIndex;if(T||b){if(T&&l.edge===-1||b&&1===l.edge)continue;switch(T?(Pe(c,[h],[v,g]),S&&k>-1&&(Ee(c,d.eventType,qe),l.lastFrameIndex=-1)):(Pe(c,[v],[h,g]),S&&k<m&&(Ee(c,y.eventType,qe),l.lastFrameIndex=m)),l.edge=T?-1:1,l.edgeStrategy){case"reset":ie(c);continue;case"ease":f=w.frame;break;default:case"set":var x=w.props;for(o in x)s.call(x,o)&&(i=oe(x[o].value),0===o.indexOf("@")?c.setAttribute(o.substr(1),i):a.setStyle(c,o,i));continue}}else 0!==l.edge&&(Pe(c,[p,g],[h,v]),l.edge=0);for(var E=0;E<m-1;E++)if(f>=u[E].frame&&f<=u[E+1].frame){var H=u[E],A=u[E+1];for(o in H.props)if(s.call(H.props,o)){var F=(f-H.frame)/(A.frame-H.frame);F=H.props[o].easing(F),i=re(H.props[o].value,A.props[o].value,F),i=oe(i),0===o.indexOf("@")?c.setAttribute(o.substr(1),i):a.setStyle(c,o,i)}S&&k!==E&&("down"===qe?Ee(c,H.eventType,qe):Ee(c,A.eventType,qe),l.lastFrameIndex=E);break}}},J=function(){Ye&&(Ye=!1,He());var e,t,r=se.getScrollTop(),o=Be();if(pe)o>=pe.endTime?(r=pe.targetTop,e=pe.done,pe=n):(t=pe.easing((o-pe.startTime)/pe.duration),r=pe.startTop+t*pe.topDiff|0),se.setScrollTop(r,!0);else if(!ye){var i=ve.targetTop-r;i&&(ve={startTop:Ie,topDiff:r-Ie,targetTop:r,startTime:Ve,endTime:Ve+ge}),o<=ve.endTime&&(t=j.sqrt((o-ve.startTime)/ge),r=ve.startTop+t*ve.topDiff|0)}if(ye||Ie!==r){qe=r>Ie?"down":r<Ie?"up":qe,ye=!1;var s={curTop:r,lastTop:Ie,maxTop:Le,direction:qe},l=fe.beforerender&&fe.beforerender.call(se,s);l!==!1&&(Z(r,se.getScrollTop()),Ue&&ce&&a.setStyle(ce,"transform","translate(0, "+-_e+"px) "+be),Ie=r,fe.render&&fe.render.call(se,s)),e&&e.call(se,!1)}Ve=o},Q=function(e){for(var t=0,n=e.keyFrames.length;t<n;t++){for(var r,o,i,a,s=e.keyFrames[t],l={};null!==(a=L.exec(s.props));)i=a[1],o=a[2],r=i.match(O),null!==r?(i=r[1],r=r[2]):r=S,o=o.indexOf("!")?ee(o):[o.slice(1)],l[i]={value:o,easing:j[r]};s.props=l}},ee=function(e){var t=[];return z.lastIndex=0,e=e.replace(z,function(e){return e.replace(V,function(e){return e/255*100+"%"})}),U&&(Y.lastIndex=0,e=e.replace(Y,function(e){return U+e})),e=e.replace(V,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},te=function(e){var t,n,r={};for(t=0,n=e.keyFrames.length;t<n;t++)ne(e.keyFrames[t],r);for(r={},t=e.keyFrames.length-1;t>=0;t--)ne(e.keyFrames[t],r)},ne=function(e,t){var n;for(n in t)s.call(e.props,n)||(e.props[n]=t[n]);for(n in e.props)t[n]=e.props[n]},re=function(e,t,n){var r,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var i=[e[0]];for(r=1;r<o;r++)i[r]=e[r]+(t[r]-e[r])*n;return i},oe=function(e){var t=1;return M.lastIndex=0,e[0].replace(M,function(){return e[t++]})},ie=function(e,t){e=[].concat(e);for(var n,r,o=0,i=e.length;o<i;o++)r=e[o],n=le[r[$]],n&&(t?(r.style.cssText=n.dirtyStyleAttr,Pe(r,n.dirtyClassAttr)):(n.dirtyStyleAttr=r.style.cssText,n.dirtyClassAttr=Ce(r),r.style.cssText=n.styleAttr,Pe(r,n.classAttr)))},ae=function(){be="translateZ(0)",a.setStyle(ce,"transform",be);var e=c(ce),t=e.getPropertyValue("transform"),n=e.getPropertyValue(U+"transform"),r=t&&"none"!==t||n&&"none"!==n;r||(be="")};a.setStyle=function(e,t,n){var r=e.style;if(t=t.replace(q,I).replace("-",""),"zIndex"===t)isNaN(n)?r[t]=n:r[t]=""+(0|n);else if("float"===t)r.styleFloat=r.cssFloat=n;else try{K&&(r[K+t.slice(0,1).toUpperCase()+t.slice(1)]=n),r[t]=n}catch(o){}};var se,le,ce,fe,ue,me,de,pe,he,ge,ve,ye,Te,be,we,Se=a.addEvent=function(t,n,r){var o=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1,t.defaultPrevented=!0}),r.call(this,t)};n=n.split(" ");for(var i,a=0,s=n.length;a<s;a++)i=n[a],t.addEventListener?t.addEventListener(i,r,!1):t.attachEvent("on"+i,o),Re.push({element:t,name:i,listener:r})},ke=a.removeEvent=function(e,t,n){t=t.split(" ");for(var r=0,o=t.length;r<o;r++)e.removeEventListener?e.removeEventListener(t[r],n,!1):e.detachEvent("on"+t[r],n)},xe=function(){for(var e,t=0,n=Re.length;t<n;t++)e=Re[t],ke(e.element,e.name,e.listener);Re=[]},Ee=function(e,t,n){fe.keyframe&&fe.keyframe.call(se,e,t,n)},He=function(){var e=se.getScrollTop();Le=0,ue&&!Ue&&(i.style.height=""),W(),ue&&!Ue&&(i.style.height=Le+o.clientHeight+"px"),Ue?se.setScrollTop(l.min(se.getScrollTop(),Le)):se.setScrollTop(e,!0),ye=!0},Ae=function(){var e,t,n=o.clientHeight,r={};for(e in me)t=me[e],"function"==typeof t?t=t.call(se):/p$/.test(t)&&(t=t.slice(0,-1)/100*n),r[e]=t;return r},Fe=function(){var e,t=0;return ce&&(t=l.max(ce.offsetHeight,ce.scrollHeight)),e=l.max(t,i.scrollHeight,i.offsetHeight,o.scrollHeight,o.offsetHeight,o.clientHeight),e-o.clientHeight},Ce=function(t){var n="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[n],n="baseVal"),t[n]},Pe=function(t,r,o){var i="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[i],i="baseVal"),o===n)return void(t[i]=r);for(var a=t[i],s=0,l=o.length;s<l;s++)a=Ne(a).replace(Ne(o[s])," ");a=$e(a);for(var c=0,f=r.length;c<f;c++)Ne(a).indexOf(Ne(r[c]))===-1&&(a+=" "+r[c]);t[i]=$e(a)},$e=function(e){return e.replace(B,"")},Ne=function(e){return" "+e+" "},Be=Date.now||function(){return+new Date},De=function(e,t){return e.frame-t.frame},Le=0,Oe=1,qe="down",Ie=-1,Ve=Be(),Me=0,ze=0,Ye=!1,Ke=0,Ue=!1,_e=0,Re=[];"function"==typeof define&&define.amd?define([],function(){return a}):"undefined"!=typeof module&&module.exports?module.exports=a:e.skrollr=a}(window,document),!function(e,t,n){"use strict";function r(n){if(o=t.documentElement,i=t.body,_(),se=this,n=n||{},me=n.constants||{},n.easing)for(var r in n.easing)j[r]=n.easing[r];Te=n.edgeStrategy||"set",fe={beforerender:n.beforerender,render:n.render,keyframe:n.keyframe},ue=n.forceHeight!==!1,ue&&(Oe=n.scale||1),de=n.mobileDeceleration||x,he=n.smoothScrolling!==!1,ge=n.smoothScrollingDuration||H,ve={targetTop:se.getScrollTop()},Ue=(n.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),Ue?(ce=t.getElementById(n.skrollrBody||E),ce&&ae(),X(),Pe(o,[y,w],[T])):Pe(o,[y,b],[T]),se.refresh(),Se(e,"resize orientationchange",function(){var e=o.clientWidth,t=o.clientHeight;(t!==ze||e!==Me)&&(ze=t,Me=e,Ye=!0)});var a=R();return function s(){J(),we=a(s)}(),se}var o,i,a={get:function(){return se},init:function(e){return se||new r(e)},VERSION:"0.6.30"},s=Object.prototype.hasOwnProperty,l=e.Math,c=e.getComputedStyle,f="touchstart",u="touchmove",m="touchcancel",d="touchend",p="skrollable",h=p+"-before",g=p+"-between",v=p+"-after",y="skrollr",T="no-"+y,b=y+"-desktop",w=y+"-mobile",S="linear",k=1e3,x=.004,E="skrollr-body",H=200,A="start",F="end",C="center",P="bottom",$="___skrollable_id",N=/^(?:input|textarea|button|select)$/i,B=/^\s+|\s+$/g,D=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,L=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,O=/^(@?[a-z\-]+)\[(\w+)\]$/,q=/-([a-z0-9_])/g,I=function(e,t){return t.toUpperCase()},V=/[\-+]?[\d]*\.?[\d]+/g,M=/\{\?\}/g,z=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,Y=/[a-z\-]+-gradient/g,K="",U="",_=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(c){var t=c(i,null);for(var n in t)if(K=n.match(e)||+n==n&&t[n].match(e))break;if(!K)return void(K=U="");K=K[0],"-"===K.slice(0,1)?(U=K,K={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[K]):U="-"+K.toLowerCase()+"-"}},R=function(){var t=e.requestAnimationFrame||e[K.toLowerCase()+"RequestAnimationFrame"],n=Be();return(Ue||!t)&&(t=function(t){var r=Be()-n,o=l.max(0,1e3/60-r);return e.setTimeout(function(){n=Be(),t()},o)}),t},G=function(){var t=e.cancelAnimationFrame||e[K.toLowerCase()+"CancelAnimationFrame"];return(Ue||!t)&&(t=function(t){return e.clearTimeout(t)}),t},j={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-l.cos(e*l.PI)/2+.5},sqrt:function(e){return l.sqrt(e)},outCubic:function(e){return l.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-l.abs(3*l.cos(e*t*1.028)/t)}};r.prototype.refresh=function(e){var r,o,i=!1;for(e===n?(i=!0,le=[],Ke=0,e=t.getElementsByTagName("*")):e.length===n&&(e=[e]),r=0,o=e.length;o>r;r++){var a=e[r],s=a,l=[],c=he,f=Te,u=!1;if(i&&$ in a&&delete a[$],a.attributes){for(var m=0,d=a.attributes.length;d>m;m++){var h=a.attributes[m];if("data-anchor-target"!==h.name)if("data-smooth-scrolling"!==h.name)if("data-edge-strategy"!==h.name)if("data-emit-events"!==h.name){var g=h.name.match(D);if(null!==g){var v={props:h.value,element:a,eventType:h.name.replace(q,I)};l.push(v);var y=g[1];y&&(v.constant=y.substr(1));var T=g[2];/p$/.test(T)?(v.isPercentage=!0,v.offset=(0|T.slice(0,-1))/100):v.offset=0|T;var b=g[3],w=g[4]||b;b&&b!==A&&b!==F?(v.mode="relative",v.anchors=[b,w]):(v.mode="absolute",b===F?v.isEnd=!0:v.isPercentage||(v.offset=v.offset*Oe))}}else u=!0;else f=h.value;else c="off"!==h.value;else if(s=t.querySelector(h.value),null===s)throw'Unable to find anchor target "'+h.value+'"'}if(l.length){var S,k,x;!i&&$ in a?(x=a[$],S=le[x].styleAttr,k=le[x].classAttr):(x=a[$]=Ke++,S=a.style.cssText,k=Ce(a)),le[x]={element:a,styleAttr:S,classAttr:k,anchorTarget:s,keyFrames:l,smoothScrolling:c,edgeStrategy:f,emitEvents:u,lastFrameIndex:-1},Pe(a,[p],[])}}}for(He(),r=0,o=e.length;o>r;r++){var E=le[e[r][$]];E!==n&&(Q(E),te(E))}return se},r.prototype.relativeToAbsolute=function(e,t,n){var r=o.clientHeight,i=e.getBoundingClientRect(),a=i.top,s=i.bottom-i.top;return t===P?a-=r:t===C&&(a-=r/2),n===P?a+=s:n===C&&(a+=s/2),a+=se.getScrollTop(),a+.5|0},r.prototype.animateTo=function(e,t){t=t||{};var r=Be(),o=se.getScrollTop(),i=t.duration===n?k:t.duration;return pe={startTop:o,topDiff:e-o,targetTop:e,duration:i,startTime:r,endTime:r+i,easing:j[t.easing||S],done:t.done},pe.topDiff||(pe.done&&pe.done.call(se,!1),pe=n),se},r.prototype.stopAnimateTo=function(){pe&&pe.done&&pe.done.call(se,!0),pe=n},r.prototype.isAnimatingTo=function(){return!!pe},r.prototype.isMobile=function(){return Ue},r.prototype.setScrollTop=function(t,n){return ye=n===!0,Ue?_e=l.min(l.max(t,0),Le):e.scrollTo(0,t),se},r.prototype.getScrollTop=function(){return Ue?_e:e.pageYOffset||o.scrollTop||i.scrollTop||0},r.prototype.getMaxScrollTop=function(){return Le},r.prototype.on=function(e,t){return fe[e]=t,se},r.prototype.off=function(e){return delete fe[e],se},r.prototype.destroy=function(){var e=G();e(we),xe(),Pe(o,[T],[y,b,w]);for(var t=0,r=le.length;r>t;t++)ie(le[t].element);o.style.overflow=i.style.overflow="",o.style.height=i.style.height="",ce&&a.setStyle(ce,"transform","none"),se=n,ce=n,fe=n,ue=n,Le=0,Oe=1,me=n,de=n,qe="down",Ie=-1,Me=0,ze=0,Ye=!1,pe=n,he=n,ge=n,ve=n,ye=n,Ke=0,Te=n,Ue=!1,_e=0,be=n};var X=function(){var r,a,s,c,p,h,g,v,y,T,b,w;Se(o,[f,u,m,d].join(" "),function(e){var o=e.changedTouches[0];for(c=e.target;3===c.nodeType;)c=c.parentNode;switch(p=o.clientY,h=o.clientX,T=e.timeStamp,N.test(c.tagName)||e.preventDefault(),e.type){case f:r&&r.blur(),se.stopAnimateTo(),r=c,a=g=p,s=h,y=T;break;case u:N.test(c.tagName)&&t.activeElement!==c&&e.preventDefault(),v=p-g,w=T-b,se.setScrollTop(_e-v,!0),g=p,b=T;break;default:case m:case d:var i=a-p,S=s-h,k=S*S+i*i;if(49>k){if(!N.test(r.tagName)){r.focus();var x=t.createEvent("MouseEvents");x.initMouseEvent("click",!0,!0,e.view,1,o.screenX,o.screenY,o.clientX,o.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),r.dispatchEvent(x)}return}r=n;var E=v/w;E=l.max(l.min(E,3),-3);var H=l.abs(E/de),A=E*H+.5*de*H*H,F=se.getScrollTop()-A,C=0;F>Le?(C=(Le-F)/A,F=Le):0>F&&(C=-F/A,F=0),H*=1-C,se.animateTo(F+.5|0,{easing:"outCubic",duration:H})}}),e.scrollTo(0,0),o.style.overflow=i.style.overflow="hidden"},W=function(){var e,t,n,r,i,a,s,c,f,u,m,d=o.clientHeight,p=Ae();for(c=0,f=le.length;f>c;c++)for(e=le[c],t=e.element,n=e.anchorTarget,r=e.keyFrames,i=0,a=r.length;a>i;i++)s=r[i],u=s.offset,m=p[s.constant]||0,s.frame=u,s.isPercentage&&(u*=d,s.frame=u),"relative"===s.mode&&(ie(t),s.frame=se.relativeToAbsolute(n,s.anchors[0],s.anchors[1])-u,ie(t,!0)),s.frame+=m,ue&&!s.isEnd&&s.frame>Le&&(Le=s.frame);for(Le=l.max(Le,Fe()),c=0,f=le.length;f>c;c++){for(e=le[c],r=e.keyFrames,i=0,a=r.length;a>i;i++)s=r[i],m=p[s.constant]||0,s.isEnd&&(s.frame=Le-s.offset+m);e.keyFrames.sort(De)}},Z=function(e,t){for(var n=0,r=le.length;r>n;n++){var o,i,l=le[n],c=l.element,f=l.smoothScrolling?e:t,u=l.keyFrames,m=u.length,d=u[0],y=u[u.length-1],T=f<d.frame,b=f>y.frame,w=T?d:y,S=l.emitEvents,k=l.lastFrameIndex;if(T||b){if(T&&-1===l.edge||b&&1===l.edge)continue;switch(T?(Pe(c,[h],[v,g]),S&&k>-1&&(Ee(c,d.eventType,qe),l.lastFrameIndex=-1)):(Pe(c,[v],[h,g]),S&&m>k&&(Ee(c,y.eventType,qe),l.lastFrameIndex=m)),l.edge=T?-1:1,l.edgeStrategy){case"reset":ie(c);continue;case"ease":f=w.frame;break;default:case"set":var x=w.props;for(o in x)s.call(x,o)&&(i=oe(x[o].value),0===o.indexOf("@")?c.setAttribute(o.substr(1),i):a.setStyle(c,o,i));continue}}else 0!==l.edge&&(Pe(c,[p,g],[h,v]),l.edge=0);for(var E=0;m-1>E;E++)if(f>=u[E].frame&&f<=u[E+1].frame){var H=u[E],A=u[E+1];for(o in H.props)if(s.call(H.props,o)){var F=(f-H.frame)/(A.frame-H.frame);F=H.props[o].easing(F),i=re(H.props[o].value,A.props[o].value,F),i=oe(i),0===o.indexOf("@")?c.setAttribute(o.substr(1),i):a.setStyle(c,o,i)}S&&k!==E&&("down"===qe?Ee(c,H.eventType,qe):Ee(c,A.eventType,qe),l.lastFrameIndex=E);break}}},J=function(){Ye&&(Ye=!1,He());var e,t,r=se.getScrollTop(),o=Be();if(pe)o>=pe.endTime?(r=pe.targetTop,e=pe.done,pe=n):(t=pe.easing((o-pe.startTime)/pe.duration),r=pe.startTop+t*pe.topDiff|0),se.setScrollTop(r,!0);else if(!ye){var i=ve.targetTop-r;i&&(ve={startTop:Ie,topDiff:r-Ie,targetTop:r,startTime:Ve,endTime:Ve+ge}),o<=ve.endTime&&(t=j.sqrt((o-ve.startTime)/ge),r=ve.startTop+t*ve.topDiff|0)}if(ye||Ie!==r){qe=r>Ie?"down":Ie>r?"up":qe,ye=!1;var s={curTop:r,lastTop:Ie,maxTop:Le,direction:qe},l=fe.beforerender&&fe.beforerender.call(se,s);l!==!1&&(Z(r,se.getScrollTop()),Ue&&ce&&a.setStyle(ce,"transform","translate(0, "+-_e+"px) "+be),Ie=r,fe.render&&fe.render.call(se,s)),e&&e.call(se,!1)}Ve=o},Q=function(e){for(var t=0,n=e.keyFrames.length;n>t;t++){for(var r,o,i,a,s=e.keyFrames[t],l={};null!==(a=L.exec(s.props));)i=a[1],o=a[2],r=i.match(O),null!==r?(i=r[1],r=r[2]):r=S,o=o.indexOf("!")?ee(o):[o.slice(1)],l[i]={value:o,easing:j[r]};s.props=l}},ee=function(e){var t=[];return z.lastIndex=0,e=e.replace(z,function(e){return e.replace(V,function(e){return e/255*100+"%"})}),U&&(Y.lastIndex=0,e=e.replace(Y,function(e){return U+e})),e=e.replace(V,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},te=function(e){var t,n,r={};for(t=0,n=e.keyFrames.length;n>t;t++)ne(e.keyFrames[t],r);for(r={},t=e.keyFrames.length-1;t>=0;t--)ne(e.keyFrames[t],r)},ne=function(e,t){var n;for(n in t)s.call(e.props,n)||(e.props[n]=t[n]);for(n in e.props)t[n]=e.props[n]},re=function(e,t,n){var r,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var i=[e[0]];for(r=1;o>r;r++)i[r]=e[r]+(t[r]-e[r])*n;return i},oe=function(e){var t=1;return M.lastIndex=0,e[0].replace(M,function(){return e[t++]})},ie=function(e,t){e=[].concat(e);for(var n,r,o=0,i=e.length;i>o;o++)r=e[o],n=le[r[$]],n&&(t?(r.style.cssText=n.dirtyStyleAttr,Pe(r,n.dirtyClassAttr)):(n.dirtyStyleAttr=r.style.cssText,n.dirtyClassAttr=Ce(r),r.style.cssText=n.styleAttr,Pe(r,n.classAttr)))},ae=function(){be="translateZ(0)",a.setStyle(ce,"transform",be);var e=c(ce),t=e.getPropertyValue("transform"),n=e.getPropertyValue(U+"transform"),r=t&&"none"!==t||n&&"none"!==n;r||(be="")};a.setStyle=function(e,t,n){var r=e.style;if(t=t.replace(q,I).replace("-",""),"zIndex"===t)isNaN(n)?r[t]=n:r[t]=""+(0|n);else if("float"===t)r.styleFloat=r.cssFloat=n;else try{K&&(r[K+t.slice(0,1).toUpperCase()+t.slice(1)]=n),r[t]=n}catch(o){}};var se,le,ce,fe,ue,me,de,pe,he,ge,ve,ye,Te,be,we,Se=a.addEvent=function(t,n,r){var o=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1,t.defaultPrevented=!0}),r.call(this,t)};n=n.split(" ");for(var i,a=0,s=n.length;s>a;a++)i=n[a],t.addEventListener?t.addEventListener(i,r,!1):t.attachEvent("on"+i,o),Re.push({element:t,name:i,listener:r})},ke=a.removeEvent=function(e,t,n){t=t.split(" ");for(var r=0,o=t.length;o>r;r++)e.removeEventListener?e.removeEventListener(t[r],n,!1):e.detachEvent("on"+t[r],n)},xe=function(){for(var e,t=0,n=Re.length;n>t;t++)e=Re[t],ke(e.element,e.name,e.listener);Re=[]},Ee=function(e,t,n){fe.keyframe&&fe.keyframe.call(se,e,t,n)},He=function(){var e=se.getScrollTop();Le=0,ue&&!Ue&&(i.style.height=""),W(),ue&&!Ue&&(i.style.height=Le+o.clientHeight+"px"),Ue?se.setScrollTop(l.min(se.getScrollTop(),Le)):se.setScrollTop(e,!0),ye=!0},Ae=function(){var e,t,n=o.clientHeight,r={};for(e in me)t=me[e],"function"==typeof t?t=t.call(se):/p$/.test(t)&&(t=t.slice(0,-1)/100*n),r[e]=t;return r},Fe=function(){var e,t=0;return ce&&(t=l.max(ce.offsetHeight,ce.scrollHeight)),e=l.max(t,i.scrollHeight,i.offsetHeight,o.scrollHeight,o.offsetHeight,o.clientHeight),e-o.clientHeight},Ce=function(t){var n="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[n],n="baseVal"),t[n]},Pe=function(t,r,o){var i="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[i],i="baseVal"),o===n)return void(t[i]=r);for(var a=t[i],s=0,l=o.length;l>s;s++)a=Ne(a).replace(Ne(o[s])," ");a=$e(a);for(var c=0,f=r.length;f>c;c++)-1===Ne(a).indexOf(Ne(r[c]))&&(a+=" "+r[c]);t[i]=$e(a)},$e=function(e){return e.replace(B,"")},Ne=function(e){return" "+e+" "},Be=Date.now||function(){return+new Date},De=function(e,t){return e.frame-t.frame},Le=0,Oe=1,qe="down",Ie=-1,Ve=Be(),Me=0,ze=0,Ye=!1,Ke=0,Ue=!1,_e=0,Re=[];"function"==typeof define&&define.amd?define([],function(){return a}):"undefined"!=typeof module&&module.exports?module.exports=a:e.skrollr=a}(window,document);