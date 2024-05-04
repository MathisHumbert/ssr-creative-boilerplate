/* empty css     */window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(i,e){e=e||window;for(var t=0;t<this.length;t++)i.call(e,this[t],t,this)});window.history.scrollRestoration&&(window.history.scrollRestoration="manual");const rv=i=>{const e=new Set;do for(const t of Reflect.ownKeys(i))e.add([i,t]);while((i=Reflect.getPrototypeOf(i))&&i!==Object.prototype);return e};function Al(i,{include:e,exclude:t}={}){const n=r=>{const s=o=>typeof o=="string"?r===o:o.test(r);return e?e.some(s):t?!t.some(s):!0};for(const[r,s]of rv(i.constructor.prototype)){if(s==="constructor"||!n(s))continue;const o=Reflect.getOwnPropertyDescriptor(r,s);o&&typeof o.value=="function"&&(i[s]=i[s].bind(i))}return i}var Dr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fr(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Wh=!1,Rr,Zc,Jc,$o,qo,Vp,Yo,Qc,eu,tu,Wp,nu,iu,Xp,$p;function yn(){if(!Wh){Wh=!0;var i=navigator.userAgent,e=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(i),t=/(Mac OS X)|(Windows)|(Linux)/.exec(i);if(nu=/\b(iPhone|iP[ao]d)/.exec(i),iu=/\b(iP[ao]d)/.exec(i),tu=/Android/i.exec(i),Xp=/FBAN\/\w+;/i.exec(i),$p=/Mobile/i.exec(i),Wp=!!/Win64/.exec(i),e){Rr=e[1]?parseFloat(e[1]):e[5]?parseFloat(e[5]):NaN,Rr&&document&&document.documentMode&&(Rr=document.documentMode);var n=/(?:Trident\/(\d+.\d+))/.exec(i);Vp=n?parseFloat(n[1])+4:Rr,Zc=e[2]?parseFloat(e[2]):NaN,Jc=e[3]?parseFloat(e[3]):NaN,$o=e[4]?parseFloat(e[4]):NaN,$o?(e=/(?:Chrome\/(\d+\.\d+))/.exec(i),qo=e&&e[1]?parseFloat(e[1]):NaN):qo=NaN}else Rr=Zc=Jc=qo=$o=NaN;if(t){if(t[1]){var r=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(i);Yo=r?parseFloat(r[1].replace("_",".")):!0}else Yo=!1;Qc=!!t[2],eu=!!t[3]}else Yo=Qc=eu=!1}}var ru={ie:function(){return yn()||Rr},ieCompatibilityMode:function(){return yn()||Vp>Rr},ie64:function(){return ru.ie()&&Wp},firefox:function(){return yn()||Zc},opera:function(){return yn()||Jc},webkit:function(){return yn()||$o},safari:function(){return ru.webkit()},chrome:function(){return yn()||qo},windows:function(){return yn()||Qc},osx:function(){return yn()||Yo},linux:function(){return yn()||eu},iphone:function(){return yn()||nu},mobile:function(){return yn()||nu||iu||tu||$p},nativeApp:function(){return yn()||Xp},android:function(){return yn()||tu},ipad:function(){return yn()||iu}},sv=ru,ro=!!(typeof window<"u"&&window.document&&window.document.createElement),av={canUseDOM:ro,canUseWorkers:typeof Worker<"u",canUseEventListeners:ro&&!!(window.addEventListener||window.attachEvent),canUseViewport:ro&&!!window.screen,isInWorker:!ro},ov=av,qp=ov,Yp;qp.canUseDOM&&(Yp=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */function lv(i,e){if(!qp.canUseDOM||e&&!("addEventListener"in document))return!1;var t="on"+i,n=t in document;if(!n){var r=document.createElement("div");r.setAttribute(t,"return;"),n=typeof r[t]=="function"}return!n&&Yp&&i==="wheel"&&(n=document.implementation.hasFeature("Events.wheel","3.0")),n}var cv=lv,uv=sv,hv=cv,Xh=10,$h=40,qh=800;function jp(i){var e=0,t=0,n=0,r=0;return"detail"in i&&(t=i.detail),"wheelDelta"in i&&(t=-i.wheelDelta/120),"wheelDeltaY"in i&&(t=-i.wheelDeltaY/120),"wheelDeltaX"in i&&(e=-i.wheelDeltaX/120),"axis"in i&&i.axis===i.HORIZONTAL_AXIS&&(e=t,t=0),n=e*Xh,r=t*Xh,"deltaY"in i&&(r=i.deltaY),"deltaX"in i&&(n=i.deltaX),(n||r)&&i.deltaMode&&(i.deltaMode==1?(n*=$h,r*=$h):(n*=qh,r*=qh)),n&&!e&&(e=n<1?-1:1),r&&!t&&(t=r<1?-1:1),{spinX:e,spinY:t,pixelX:n,pixelY:r}}jp.getEventType=function(){return uv.firefox()?"DOMMouseScroll":hv("wheel")?"wheel":"mousewheel"};var fv=jp,dv=fv;const pv=fr(dv);var Kp={exports:{}};(function(i){(function(){function e(m,p){document.addEventListener?m.addEventListener("scroll",p,!1):m.attachEvent("scroll",p)}function t(m){document.body?m():document.addEventListener?document.addEventListener("DOMContentLoaded",function p(){document.removeEventListener("DOMContentLoaded",p),m()}):document.attachEvent("onreadystatechange",function p(){(document.readyState=="interactive"||document.readyState=="complete")&&(document.detachEvent("onreadystatechange",p),m())})}function n(m){this.g=document.createElement("div"),this.g.setAttribute("aria-hidden","true"),this.g.appendChild(document.createTextNode(m)),this.h=document.createElement("span"),this.i=document.createElement("span"),this.m=document.createElement("span"),this.j=document.createElement("span"),this.l=-1,this.h.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.i.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.j.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.m.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.h.appendChild(this.m),this.i.appendChild(this.j),this.g.appendChild(this.h),this.g.appendChild(this.i)}function r(m,p){m.g.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+p+";"}function s(m){var p=m.g.offsetWidth,g=p+100;return m.j.style.width=g+"px",m.i.scrollLeft=g,m.h.scrollLeft=m.h.scrollWidth+100,m.l!==p?(m.l=p,!0):!1}function o(m,p){function g(){var v=y;s(v)&&v.g.parentNode!==null&&p(v.l)}var y=m;e(m.h,g),e(m.i,g),s(m)}function a(m,p,g){p=p||{},g=g||window,this.family=m,this.style=p.style||"normal",this.weight=p.weight||"normal",this.stretch=p.stretch||"normal",this.context=g}var l=null,c=null,u=null,d=null;function h(m){return c===null&&(f(m)&&/Apple/.test(window.navigator.vendor)?(m=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent),c=!!m&&603>parseInt(m[1],10)):c=!1),c}function f(m){return d===null&&(d=!!m.document.fonts),d}function _(m,p){var g=m.style,y=m.weight;if(u===null){var v=document.createElement("div");try{v.style.font="condensed 100px sans-serif"}catch{}u=v.style.font!==""}return[g,y,u?m.stretch:"","100px",p].join(" ")}a.prototype.load=function(m,p){var g=this,y=m||"BESbswy",v=0,S=p||3e3,w=new Date().getTime();return new Promise(function(b,M){if(f(g.context)&&!h(g.context)){var D=new Promise(function(x,A){function U(){new Date().getTime()-w>=S?A(Error(""+S+"ms timeout exceeded")):g.context.document.fonts.load(_(g,'"'+g.family+'"'),y).then(function(Y){1<=Y.length?x():setTimeout(U,25)},A)}U()}),I=new Promise(function(x,A){v=setTimeout(function(){A(Error(""+S+"ms timeout exceeded"))},S)});Promise.race([I,D]).then(function(){clearTimeout(v),b(g)},M)}else t(function(){function x(){var re;(re=N!=-1&&O!=-1||N!=-1&&k!=-1||O!=-1&&k!=-1)&&((re=N!=O&&N!=k&&O!=k)||(l===null&&(re=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),l=!!re&&(536>parseInt(re[1],10)||parseInt(re[1],10)===536&&11>=parseInt(re[2],10))),re=l&&(N==W&&O==W&&k==W||N==q&&O==q&&k==q||N==R&&O==R&&k==R)),re=!re),re&&(j.parentNode!==null&&j.parentNode.removeChild(j),clearTimeout(v),b(g))}function A(){if(new Date().getTime()-w>=S)j.parentNode!==null&&j.parentNode.removeChild(j),M(Error(""+S+"ms timeout exceeded"));else{var re=g.context.document.hidden;(re===!0||re===void 0)&&(N=U.g.offsetWidth,O=Y.g.offsetWidth,k=L.g.offsetWidth,x()),v=setTimeout(A,50)}}var U=new n(y),Y=new n(y),L=new n(y),N=-1,O=-1,k=-1,W=-1,q=-1,R=-1,j=document.createElement("div");j.dir="ltr",r(U,_(g,"sans-serif")),r(Y,_(g,"serif")),r(L,_(g,"monospace")),j.appendChild(U.g),j.appendChild(Y.g),j.appendChild(L.g),g.context.document.body.appendChild(j),W=U.g.offsetWidth,q=Y.g.offsetWidth,R=L.g.offsetWidth,A(),o(U,function(re){N=re,x()}),r(U,_(g,'"'+g.family+'",sans-serif')),o(Y,function(re){O=re,x()}),r(Y,_(g,'"'+g.family+'",serif')),o(L,function(re){k=re,x()}),r(L,_(g,'"'+g.family+'",monospace'))})})},i.exports=a})()})(Kp);var mv=Kp.exports;const _v=fr(mv);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ku="161",gv=0,Yh=1,vv=2,Zp=1,xv=2,Ai=3,lr=0,Tn=1,Pi=2,nr=0,Ls=1,jh=2,Kh=3,Zh=4,yv=5,Pr=100,Sv=101,Mv=102,Jh=103,Qh=104,Ev=200,bv=201,Tv=202,wv=203,su=204,au=205,Av=206,Cv=207,Rv=208,Pv=209,Lv=210,Dv=211,Iv=212,Uv=213,Ov=214,Nv=0,Fv=1,Bv=2,al=3,zv=4,kv=5,Gv=6,Hv=7,Jp=0,Vv=1,Wv=2,ir=0,Xv=1,$v=2,qv=3,Yv=4,jv=5,Kv=6,Qp=300,Gs=301,Hs=302,ou=303,lu=304,Cl=306,cu=1e3,si=1001,uu=1002,pn=1003,ef=1004,oa=1005,tn=1006,Yl=1007,Ir=1008,rr=1009,Zv=1010,Jv=1011,Zu=1012,em=1013,Ki=1014,Li=1015,Ba=1016,tm=1017,nm=1018,Br=1020,Qv=1021,ai=1023,e0=1024,t0=1025,zr=1026,Vs=1027,n0=1028,im=1029,i0=1030,rm=1031,sm=1033,jl=33776,Kl=33777,Zl=33778,Jl=33779,tf=35840,nf=35841,rf=35842,sf=35843,am=36196,af=37492,of=37496,lf=37808,cf=37809,uf=37810,hf=37811,ff=37812,df=37813,pf=37814,mf=37815,_f=37816,gf=37817,vf=37818,xf=37819,yf=37820,Sf=37821,Ql=36492,Mf=36494,Ef=36495,r0=36283,bf=36284,Tf=36285,wf=36286,om=3e3,kr=3001,s0=3200,a0=3201,lm=0,o0=1,jn="",qt="srgb",Ni="srgb-linear",Ju="display-p3",Rl="display-p3-linear",ol="linear",xt="srgb",ll="rec709",cl="p3",rs=7680,Af=519,l0=512,c0=513,u0=514,cm=515,h0=516,f0=517,d0=518,p0=519,Cf=35044,Rf="300 es",hu=1035,Ii=2e3,ul=2001;class Zs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ec=Math.PI/180,fu=180/Math.PI;function ja(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function En(i,e,t){return Math.max(e,Math.min(t,i))}function m0(i,e){return(i%e+e)%e}function tc(i,e,t){return(1-t)*i+t*e}function Pf(i){return(i&i-1)===0&&i!==0}function du(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function la(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Sn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(En(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,t,n,r,s,o,a,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],_=n[8],m=r[0],p=r[3],g=r[6],y=r[1],v=r[4],S=r[7],w=r[2],b=r[5],M=r[8];return s[0]=o*m+a*y+l*w,s[3]=o*p+a*v+l*b,s[6]=o*g+a*S+l*M,s[1]=c*m+u*y+d*w,s[4]=c*p+u*v+d*b,s[7]=c*g+u*S+d*M,s[2]=h*m+f*y+_*w,s[5]=h*p+f*v+_*b,s[8]=h*g+f*S+_*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,f=c*s-o*l,_=t*d+n*h+r*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/_;return e[0]=d*m,e[1]=(r*c-u*n)*m,e[2]=(a*n-r*o)*m,e[3]=h*m,e[4]=(u*t-r*l)*m,e[5]=(r*s-a*t)*m,e[6]=f*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(nc.makeScale(e,t)),this}rotate(e){return this.premultiply(nc.makeRotation(-e)),this}translate(e,t){return this.premultiply(nc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nc=new et;function um(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function za(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _0(){const i=za("canvas");return i.style.display="block",i}const Lf={};function Ds(i){i in Lf||(Lf[i]=!0,console.warn(i))}const Df=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),If=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),so={[Ni]:{transfer:ol,primaries:ll,toReference:i=>i,fromReference:i=>i},[qt]:{transfer:xt,primaries:ll,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Rl]:{transfer:ol,primaries:cl,toReference:i=>i.applyMatrix3(If),fromReference:i=>i.applyMatrix3(Df)},[Ju]:{transfer:xt,primaries:cl,toReference:i=>i.convertSRGBToLinear().applyMatrix3(If),fromReference:i=>i.applyMatrix3(Df).convertLinearToSRGB()}},g0=new Set([Ni,Rl]),ht={enabled:!0,_workingColorSpace:Ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!g0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=so[e].toReference,r=so[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return so[i].primaries},getTransfer:function(i){return i===jn?ol:so[i].transfer}};function Is(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ic(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ss;class hm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ss===void 0&&(ss=za("canvas")),ss.width=e.width,ss.height=e.height;const n=ss.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ss}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=za("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Is(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Is(t[n]/255)*255):t[n]=Is(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let v0=0;class fm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=ja(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(rc(r[o].image)):s.push(rc(r[o]))}else s=rc(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function rc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let x0=0;class xn extends Zs{constructor(e=xn.DEFAULT_IMAGE,t=xn.DEFAULT_MAPPING,n=si,r=si,s=tn,o=Ir,a=ai,l=rr,c=xn.DEFAULT_ANISOTROPY,u=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=ja(),this.name="",this.source=new fm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ds("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===kr?qt:jn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cu:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case uu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cu:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case uu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ds("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===qt?kr:om}set encoding(e){Ds("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===kr?qt:jn}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Qp;xn.DEFAULT_ANISOTROPY=1;class Yt{constructor(e=0,t=0,n=0,r=1){Yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],_=l[9],m=l[2],p=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-m)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+m)<.1&&Math.abs(_+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(f+1)/2,w=(g+1)/2,b=(u+h)/4,M=(d+m)/4,D=(_+p)/4;return v>S&&v>w?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=b/n,s=M/n):S>w?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=b/r,s=D/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=M/s,r=D/s),this.set(n,r,s,t),this}let y=Math.sqrt((p-_)*(p-_)+(d-m)*(d-m)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(d-m)/y,this.z=(h-u)/y,this.w=Math.acos((c+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class y0 extends Zs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Ds("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===kr?qt:jn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new xn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new fm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jr extends y0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class dm extends xn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class S0 extends xn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ka{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const h=s[o+0],f=s[o+1],_=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=_,e[t+3]=m;return}if(d!==m||l!==h||c!==f||u!==_){let p=1-a;const g=l*h+c*f+u*_+d*m,y=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){const w=Math.sqrt(v),b=Math.atan2(w,g*y);p=Math.sin(p*b)/w,a=Math.sin(a*b)/w}const S=a*y;if(l=l*p+h*S,c=c*p+f*S,u=u*p+_*S,d=d*p+m*S,p===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=w,c*=w,u*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[o],h=s[o+1],f=s[o+2],_=s[o+3];return e[t]=a*_+u*d+l*f-c*h,e[t+1]=l*_+u*h+c*d-a*f,e[t+2]=c*_+u*f+a*h-l*d,e[t+3]=u*_-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),d=a(s/2),h=l(n/2),f=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d-h*f*_;break;case"YXZ":this._x=h*u*d+c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d+h*f*_;break;case"ZXY":this._x=h*u*d-c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d-h*f*_;break;case"ZYX":this._x=h*u*d-c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d+h*f*_;break;case"YZX":this._x=h*u*d+c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d-h*f*_;break;case"XZY":this._x=h*u*d-c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d+h*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(En(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,n=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sc.copy(this).projectOnVector(e),this.sub(sc)}reflect(e){return this.sub(sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(En(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sc=new K,Uf=new Ka;class Za{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(s,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ao.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ao.copy(n.boundingBox)),ao.applyMatrix4(e.matrixWorld),this.union(ao)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ca),oo.subVectors(this.max,ca),as.subVectors(e.a,ca),os.subVectors(e.b,ca),ls.subVectors(e.c,ca),Gi.subVectors(os,as),Hi.subVectors(ls,os),gr.subVectors(as,ls);let t=[0,-Gi.z,Gi.y,0,-Hi.z,Hi.y,0,-gr.z,gr.y,Gi.z,0,-Gi.x,Hi.z,0,-Hi.x,gr.z,0,-gr.x,-Gi.y,Gi.x,0,-Hi.y,Hi.x,0,-gr.y,gr.x,0];return!ac(t,as,os,ls,oo)||(t=[1,0,0,0,1,0,0,0,1],!ac(t,as,os,ls,oo))?!1:(lo.crossVectors(Gi,Hi),t=[lo.x,lo.y,lo.z],ac(t,as,os,ls,oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mi=[new K,new K,new K,new K,new K,new K,new K,new K],ei=new K,ao=new Za,as=new K,os=new K,ls=new K,Gi=new K,Hi=new K,gr=new K,ca=new K,oo=new K,lo=new K,vr=new K;function ac(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){vr.fromArray(i,s);const a=r.x*Math.abs(vr.x)+r.y*Math.abs(vr.y)+r.z*Math.abs(vr.z),l=e.dot(vr),c=t.dot(vr),u=n.dot(vr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const M0=new Za,ua=new K,oc=new K;class Qu{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):M0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ua.subVectors(e,this.center);const t=ua.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ua,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ua.copy(e.center).add(oc)),this.expandByPoint(ua.copy(e.center).sub(oc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ei=new K,lc=new K,co=new K,Vi=new K,cc=new K,uo=new K,uc=new K;class E0{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){lc.copy(e).add(t).multiplyScalar(.5),co.copy(t).sub(e).normalize(),Vi.copy(this.origin).sub(lc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(co),a=Vi.dot(this.direction),l=-Vi.dot(co),c=Vi.lengthSq(),u=Math.abs(1-o*o);let d,h,f,_;if(u>0)if(d=o*l-a,h=o*a-l,_=s*u,d>=0)if(h>=-_)if(h<=_){const m=1/u;d*=m,h*=m,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(lc).addScaledVector(co,h),f}intersectSphere(e,t){Ei.subVectors(e.center,this.origin);const n=Ei.dot(this.direction),r=Ei.dot(Ei)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,n,r,s){cc.subVectors(t,e),uo.subVectors(n,e),uc.crossVectors(cc,uo);let o=this.direction.dot(uc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vi.subVectors(this.origin,e);const l=a*this.direction.dot(uo.crossVectors(Vi,uo));if(l<0)return null;const c=a*this.direction.dot(cc.cross(Vi));if(c<0||l+c>o)return null;const u=-a*Vi.dot(uc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(e,t,n,r,s,o,a,l,c,u,d,h,f,_,m,p){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,d,h,f,_,m,p)}set(e,t,n,r,s,o,a,l,c,u,d,h,f,_,m,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=f,g[7]=_,g[11]=m,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/cs.setFromMatrixColumn(e,0).length(),s=1/cs.setFromMatrixColumn(e,1).length(),o=1/cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,f=o*d,_=a*u,m=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+_*c,t[5]=h-m*c,t[9]=-a*l,t[2]=m-h*c,t[6]=_+f*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,_=c*u,m=c*d;t[0]=h+m*a,t[4]=_*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-_,t[6]=m+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,_=c*u,m=c*d;t[0]=h-m*a,t[4]=-o*d,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*u,t[9]=m-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,f=o*d,_=a*u,m=a*d;t[0]=l*u,t[4]=_*c-f,t[8]=h*c+m,t[1]=l*d,t[5]=m*c+h,t[9]=f*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,f=o*c,_=a*l,m=a*c;t[0]=l*u,t[4]=m-h*d,t[8]=_*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+_,t[10]=h-m*d}else if(e.order==="XZY"){const h=o*l,f=o*c,_=a*l,m=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+m,t[5]=o*u,t[9]=f*d-_,t[2]=_*d-f,t[6]=a*u,t[10]=m*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(b0,e,T0)}lookAt(e,t,n){const r=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Wi.crossVectors(n,Dn),Wi.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Wi.crossVectors(n,Dn)),Wi.normalize(),ho.crossVectors(Dn,Wi),r[0]=Wi.x,r[4]=ho.x,r[8]=Dn.x,r[1]=Wi.y,r[5]=ho.y,r[9]=Dn.y,r[2]=Wi.z,r[6]=ho.z,r[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],_=n[2],m=n[6],p=n[10],g=n[14],y=n[3],v=n[7],S=n[11],w=n[15],b=r[0],M=r[4],D=r[8],I=r[12],x=r[1],A=r[5],U=r[9],Y=r[13],L=r[2],N=r[6],O=r[10],k=r[14],W=r[3],q=r[7],R=r[11],j=r[15];return s[0]=o*b+a*x+l*L+c*W,s[4]=o*M+a*A+l*N+c*q,s[8]=o*D+a*U+l*O+c*R,s[12]=o*I+a*Y+l*k+c*j,s[1]=u*b+d*x+h*L+f*W,s[5]=u*M+d*A+h*N+f*q,s[9]=u*D+d*U+h*O+f*R,s[13]=u*I+d*Y+h*k+f*j,s[2]=_*b+m*x+p*L+g*W,s[6]=_*M+m*A+p*N+g*q,s[10]=_*D+m*U+p*O+g*R,s[14]=_*I+m*Y+p*k+g*j,s[3]=y*b+v*x+S*L+w*W,s[7]=y*M+v*A+S*N+w*q,s[11]=y*D+v*U+S*O+w*R,s[15]=y*I+v*Y+S*k+w*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],_=e[3],m=e[7],p=e[11],g=e[15];return _*(+s*l*d-r*c*d-s*a*h+n*c*h+r*a*f-n*l*f)+m*(+t*l*f-t*c*h+s*o*h-r*o*f+r*c*u-s*l*u)+p*(+t*c*d-t*a*f-s*o*d+n*o*f+s*a*u-n*c*u)+g*(-r*a*u-t*l*d+t*a*h+r*o*d-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],_=e[12],m=e[13],p=e[14],g=e[15],y=d*p*c-m*h*c+m*l*f-a*p*f-d*l*g+a*h*g,v=_*h*c-u*p*c-_*l*f+o*p*f+u*l*g-o*h*g,S=u*m*c-_*d*c+_*a*f-o*m*f-u*a*g+o*d*g,w=_*d*l-u*m*l-_*a*h+o*m*h+u*a*p-o*d*p,b=t*y+n*v+r*S+s*w;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/b;return e[0]=y*M,e[1]=(m*h*s-d*p*s-m*r*f+n*p*f+d*r*g-n*h*g)*M,e[2]=(a*p*s-m*l*s+m*r*c-n*p*c-a*r*g+n*l*g)*M,e[3]=(d*l*s-a*h*s-d*r*c+n*h*c+a*r*f-n*l*f)*M,e[4]=v*M,e[5]=(u*p*s-_*h*s+_*r*f-t*p*f-u*r*g+t*h*g)*M,e[6]=(_*l*s-o*p*s-_*r*c+t*p*c+o*r*g-t*l*g)*M,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*f+t*l*f)*M,e[8]=S*M,e[9]=(_*d*s-u*m*s-_*n*f+t*m*f+u*n*g-t*d*g)*M,e[10]=(o*m*s-_*a*s+_*n*c-t*m*c-o*n*g+t*a*g)*M,e[11]=(u*a*s-o*d*s-u*n*c+t*d*c+o*n*f-t*a*f)*M,e[12]=w*M,e[13]=(u*m*r-_*d*r+_*n*h-t*m*h-u*n*p+t*d*p)*M,e[14]=(_*a*r-o*m*r-_*n*l+t*m*l+o*n*p-t*a*p)*M,e[15]=(o*d*r-u*a*r+u*n*l-t*d*l-o*n*h+t*a*h)*M,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,h=s*c,f=s*u,_=s*d,m=o*u,p=o*d,g=a*d,y=l*c,v=l*u,S=l*d,w=n.x,b=n.y,M=n.z;return r[0]=(1-(m+g))*w,r[1]=(f+S)*w,r[2]=(_-v)*w,r[3]=0,r[4]=(f-S)*b,r[5]=(1-(h+g))*b,r[6]=(p+y)*b,r[7]=0,r[8]=(_+v)*M,r[9]=(p-y)*M,r[10]=(1-(h+m))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=cs.set(r[0],r[1],r[2]).length();const o=cs.set(r[4],r[5],r[6]).length(),a=cs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ti.copy(this);const c=1/s,u=1/o,d=1/a;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=u,ti.elements[5]*=u,ti.elements[6]*=u,ti.elements[8]*=d,ti.elements[9]*=d,ti.elements[10]*=d,t.setFromRotationMatrix(ti),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Ii){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),d=(t+e)/(t-e),h=(n+r)/(n-r);let f,_;if(a===Ii)f=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ul)f=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Ii){const l=this.elements,c=1/(t-e),u=1/(n-r),d=1/(o-s),h=(t+e)*c,f=(n+r)*u;let _,m;if(a===Ii)_=(o+s)*d,m=-2*d;else if(a===ul)_=s*d,m=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=m,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const cs=new K,ti=new Kt,b0=new K(0,0,0),T0=new K(1,1,1),Wi=new K,ho=new K,Dn=new K,Of=new Kt,Nf=new Ka;class Pl{constructor(e=0,t=0,n=0,r=Pl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(En(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-En(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(En(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-En(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(En(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-En(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Of.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Of,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nf.setFromEuler(this),this.setFromQuaternion(Nf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pl.DEFAULT_ORDER="XYZ";class pm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let w0=0;const Ff=new K,us=new Ka,bi=new Kt,fo=new K,ha=new K,A0=new K,C0=new Ka,Bf=new K(1,0,0),zf=new K(0,1,0),kf=new K(0,0,1),R0={type:"added"},P0={type:"removed"};class kn extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const e=new K,t=new Pl,n=new Ka,r=new K(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Kt},normalMatrix:{value:new et}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(Bf,e)}rotateY(e){return this.rotateOnAxis(zf,e)}rotateZ(e){return this.rotateOnAxis(kf,e)}translateOnAxis(e,t){return Ff.copy(e).applyQuaternion(this.quaternion),this.position.add(Ff.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bf,e)}translateY(e){return this.translateOnAxis(zf,e)}translateZ(e){return this.translateOnAxis(kf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fo.copy(e):fo.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(ha,fo,this.up):bi.lookAt(fo,ha,this.up),this.quaternion.setFromRotationMatrix(bi),r&&(bi.extractRotation(r.matrixWorld),us.setFromRotationMatrix(bi),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(R0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(P0)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,A0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,C0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}kn.DEFAULT_UP=new K(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new K,Ti=new K,hc=new K,wi=new K,hs=new K,fs=new K,Gf=new K,fc=new K,dc=new K,pc=new K;class fi{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ni.subVectors(e,t),r.cross(ni);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){ni.subVectors(r,t),Ti.subVectors(n,t),hc.subVectors(e,t);const o=ni.dot(ni),a=ni.dot(Ti),l=ni.dot(hc),c=Ti.dot(Ti),u=Ti.dot(hc),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-f-_,_,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wi.x),l.addScaledVector(o,wi.y),l.addScaledVector(a,wi.z),l)}static isFrontFacing(e,t,n,r){return ni.subVectors(n,t),Ti.subVectors(e,t),ni.cross(Ti).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),ni.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return fi.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;hs.subVectors(r,n),fs.subVectors(s,n),fc.subVectors(e,n);const l=hs.dot(fc),c=fs.dot(fc);if(l<=0&&c<=0)return t.copy(n);dc.subVectors(e,r);const u=hs.dot(dc),d=fs.dot(dc);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(hs,o);pc.subVectors(e,s);const f=hs.dot(pc),_=fs.dot(pc);if(_>=0&&f<=_)return t.copy(s);const m=f*c-l*_;if(m<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(fs,a);const p=u*_-f*d;if(p<=0&&d-u>=0&&f-_>=0)return Gf.subVectors(s,r),a=(d-u)/(d-u+(f-_)),t.copy(r).addScaledVector(Gf,a);const g=1/(p+m+h);return o=m*g,a=h*g,t.copy(n).addScaledVector(hs,o).addScaledVector(fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},po={h:0,s:0,l:0};function mc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ft{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ht.workingColorSpace){if(e=m0(e,1),t=En(t,0,1),n=En(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=mc(o,s,e+1/3),this.g=mc(o,s,e),this.b=mc(o,s,e-1/3)}return ht.toWorkingColorSpace(this,r),this}setStyle(e,t=qt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const n=mm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}copyLinearToSRGB(e){return this.r=ic(e.r),this.g=ic(e.g),this.b=ic(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return ht.fromWorkingColorSpace(Qt.copy(this),e),Math.round(En(Qt.r*255,0,255))*65536+Math.round(En(Qt.g*255,0,255))*256+Math.round(En(Qt.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(Qt.copy(this),t);const n=Qt.r,r=Qt.g,s=Qt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=qt){ht.fromWorkingColorSpace(Qt.copy(this),e);const t=Qt.r,n=Qt.g,r=Qt.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(po);const n=tc(Xi.h,po.h,t),r=tc(Xi.s,po.s,t),s=tc(Xi.l,po.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new ft;ft.NAMES=mm;let L0=0;class Ja extends Zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=ja(),this.name="",this.type="Material",this.blending=Ls,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=su,this.blendDst=au,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=al,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Af,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(n.blending=this.blending),this.side!==lr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==su&&(n.blendSrc=this.blendSrc),this.blendDst!==au&&(n.blendDst=this.blendDst),this.blendEquation!==Pr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==al&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Af&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _m extends Ja{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Jp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new K,mo=new at;class gi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ds("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mo.fromBufferAttribute(this,t),mo.applyMatrix3(e),this.setXY(t,mo.x,mo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=la(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=la(t,this.array)),t}setX(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=la(t,this.array)),t}setY(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=la(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=la(t,this.array)),t}setW(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array),r=Sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array),r=Sn(r,this.array),s=Sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cf&&(e.usage=this.usage),e}}class gm extends gi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vm extends gi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Gr extends gi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let D0=0;const Wn=new Kt,_c=new kn,ds=new K,In=new Za,fa=new Za,Ht=new K;class ns extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=ja(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(um(e)?vm:gm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,n){return Wn.makeTranslation(e,t,n),this.applyMatrix4(Wn),this}scale(e,t,n){return Wn.makeScale(e,t,n),this.applyMatrix4(Wn),this}lookAt(e){return _c.lookAt(e),_c.updateMatrix(),this.applyMatrix4(_c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Gr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Za);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];In.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new K,1/0);return}if(e){const n=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];fa.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(In.min,fa.min),In.expandByPoint(Ht),Ht.addVectors(In.max,fa.max),In.expandByPoint(Ht)):(In.expandByPoint(fa.min),In.expandByPoint(fa.max))}In.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ht));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ht.fromBufferAttribute(a,c),l&&(ds.fromBufferAttribute(e,c),Ht.add(ds)),r=Math.max(r,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let x=0;x<a;x++)c[x]=new K,u[x]=new K;const d=new K,h=new K,f=new K,_=new at,m=new at,p=new at,g=new K,y=new K;function v(x,A,U){d.fromArray(r,x*3),h.fromArray(r,A*3),f.fromArray(r,U*3),_.fromArray(o,x*2),m.fromArray(o,A*2),p.fromArray(o,U*2),h.sub(d),f.sub(d),m.sub(_),p.sub(_);const Y=1/(m.x*p.y-p.x*m.y);isFinite(Y)&&(g.copy(h).multiplyScalar(p.y).addScaledVector(f,-m.y).multiplyScalar(Y),y.copy(f).multiplyScalar(m.x).addScaledVector(h,-p.x).multiplyScalar(Y),c[x].add(g),c[A].add(g),c[U].add(g),u[x].add(y),u[A].add(y),u[U].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let x=0,A=S.length;x<A;++x){const U=S[x],Y=U.start,L=U.count;for(let N=Y,O=Y+L;N<O;N+=3)v(n[N+0],n[N+1],n[N+2])}const w=new K,b=new K,M=new K,D=new K;function I(x){M.fromArray(s,x*3),D.copy(M);const A=c[x];w.copy(A),w.sub(M.multiplyScalar(M.dot(A))).normalize(),b.crossVectors(D,A);const Y=b.dot(u[x])<0?-1:1;l[x*4]=w.x,l[x*4+1]=w.y,l[x*4+2]=w.z,l[x*4+3]=Y}for(let x=0,A=S.length;x<A;++x){const U=S[x],Y=U.start,L=U.count;for(let N=Y,O=Y+L;N<O;N+=3)I(n[N+0]),I(n[N+1]),I(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const r=new K,s=new K,o=new K,a=new K,l=new K,c=new K,u=new K,d=new K;if(e)for(let h=0,f=e.count;h<f;h+=3){const _=e.getX(h+0),m=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,_=0;for(let m=0,p=l.length;m<p;m++){a.isInterleavedBufferAttribute?f=l[m]*a.data.stride+a.offset:f=l[m]*u;for(let g=0;g<u;g++)h[_++]=c[f++]}return new gi(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ns,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hf=new Kt,xr=new E0,_o=new Qu,Vf=new K,ps=new K,ms=new K,_s=new K,gc=new K,go=new K,vo=new at,xo=new at,yo=new at,Wf=new K,Xf=new K,$f=new K,So=new K,Mo=new K;class oi extends kn{constructor(e=new ns,t=new _m){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){go.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(gc.fromBufferAttribute(d,e),o?go.addScaledVector(gc,u):go.addScaledVector(gc.sub(t),u))}t.add(go)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(s),xr.copy(e.ray).recast(e.near),!(_o.containsPoint(xr.origin)===!1&&(xr.intersectSphere(_o,Vf)===null||xr.origin.distanceToSquared(Vf)>(e.far-e.near)**2))&&(Hf.copy(s).invert(),xr.copy(e.ray).applyMatrix4(Hf),!(n.boundingBox!==null&&xr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,m=h.length;_<m;_++){const p=h[_],g=o[p.materialIndex],y=Math.max(p.start,f.start),v=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let S=y,w=v;S<w;S+=3){const b=a.getX(S),M=a.getX(S+1),D=a.getX(S+2);r=Eo(this,g,e,n,c,u,d,b,M,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,f.start),m=Math.min(a.count,f.start+f.count);for(let p=_,g=m;p<g;p+=3){const y=a.getX(p),v=a.getX(p+1),S=a.getX(p+2);r=Eo(this,o,e,n,c,u,d,y,v,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,m=h.length;_<m;_++){const p=h[_],g=o[p.materialIndex],y=Math.max(p.start,f.start),v=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let S=y,w=v;S<w;S+=3){const b=S,M=S+1,D=S+2;r=Eo(this,g,e,n,c,u,d,b,M,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,f.start),m=Math.min(l.count,f.start+f.count);for(let p=_,g=m;p<g;p+=3){const y=p,v=p+1,S=p+2;r=Eo(this,o,e,n,c,u,d,y,v,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function I0(i,e,t,n,r,s,o,a){let l;if(e.side===Tn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===lr,a),l===null)return null;Mo.copy(a),Mo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Mo);return c<t.near||c>t.far?null:{distance:c,point:Mo.clone(),object:i}}function Eo(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,ps),i.getVertexPosition(l,ms),i.getVertexPosition(c,_s);const u=I0(i,e,t,n,ps,ms,_s,So);if(u){r&&(vo.fromBufferAttribute(r,a),xo.fromBufferAttribute(r,l),yo.fromBufferAttribute(r,c),u.uv=fi.getInterpolation(So,ps,ms,_s,vo,xo,yo,new at)),s&&(vo.fromBufferAttribute(s,a),xo.fromBufferAttribute(s,l),yo.fromBufferAttribute(s,c),u.uv1=fi.getInterpolation(So,ps,ms,_s,vo,xo,yo,new at),u.uv2=u.uv1),o&&(Wf.fromBufferAttribute(o,a),Xf.fromBufferAttribute(o,l),$f.fromBufferAttribute(o,c),u.normal=fi.getInterpolation(So,ps,ms,_s,Wf,Xf,$f,new K),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new K,materialIndex:0};fi.getNormal(ps,ms,_s,d.normal),u.face=d}return u}class Js extends ns{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Gr(c,3)),this.setAttribute("normal",new Gr(u,3)),this.setAttribute("uv",new Gr(d,2));function _(m,p,g,y,v,S,w,b,M,D,I){const x=S/M,A=w/D,U=S/2,Y=w/2,L=b/2,N=M+1,O=D+1;let k=0,W=0;const q=new K;for(let R=0;R<O;R++){const j=R*A-Y;for(let re=0;re<N;re++){const ve=re*x-U;q[m]=ve*y,q[p]=j*v,q[g]=L,c.push(q.x,q.y,q.z),q[m]=0,q[p]=0,q[g]=b>0?1:-1,u.push(q.x,q.y,q.z),d.push(re/M),d.push(1-R/D),k+=1}}for(let R=0;R<D;R++)for(let j=0;j<M;j++){const re=h+j+N*R,ve=h+j+N*(R+1),H=h+(j+1)+N*(R+1),J=h+(j+1)+N*R;l.push(re,ve,J),l.push(ve,H,J),W+=6}a.addGroup(f,W,I),f+=W,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function un(i){const e={};for(let t=0;t<i.length;t++){const n=Ws(i[t]);for(const r in n)e[r]=n[r]}return e}function U0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function xm(i){return i.getRenderTarget()===null?i.outputColorSpace:ht.workingColorSpace}const O0={clone:Ws,merge:un};var N0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,F0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends Ja{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N0,this.fragmentShader=F0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=U0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ym extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new K,qf=new at,Yf=new at;class $n extends ym{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ec*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fu*2*Math.atan(Math.tan(ec*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,qf,Yf),t.subVectors(Yf,qf)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ec*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gs=-90,vs=1;class B0 extends kn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $n(gs,vs,e,t);r.layers=this.layers,this.add(r);const s=new $n(gs,vs,e,t);s.layers=this.layers,this.add(s);const o=new $n(gs,vs,e,t);o.layers=this.layers,this.add(o);const a=new $n(gs,vs,e,t);a.layers=this.layers,this.add(a);const l=new $n(gs,vs,e,t);l.layers=this.layers,this.add(l);const c=new $n(gs,vs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ii)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ul)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Sm extends xn{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Gs,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class z0 extends jr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Ds("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===kr?qt:jn),this.texture=new Sm(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Js(5,5,5),s=new Fi({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:nr});s.uniforms.tEquirect.value=t;const o=new oi(r,s),a=t.minFilter;return t.minFilter===Ir&&(t.minFilter=tn),new B0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const vc=new K,k0=new K,G0=new et;class Er{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=vc.subVectors(n,t).cross(k0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(vc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||G0.getNormalMatrix(e),r=this.coplanarPoint(vc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new Qu,bo=new K;class Mm{constructor(e=new Er,t=new Er,n=new Er,r=new Er,s=new Er,o=new Er){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ii){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],f=r[8],_=r[9],m=r[10],p=r[11],g=r[12],y=r[13],v=r[14],S=r[15];if(n[0].setComponents(l-s,h-c,p-f,S-g).normalize(),n[1].setComponents(l+s,h+c,p+f,S+g).normalize(),n[2].setComponents(l+o,h+u,p+_,S+y).normalize(),n[3].setComponents(l-o,h-u,p-_,S-y).normalize(),n[4].setComponents(l-a,h-d,p-m,S-v).normalize(),t===Ii)n[5].setComponents(l+a,h+d,p+m,S+v).normalize();else if(t===ul)n[5].setComponents(a,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(bo.x=r.normal.x>0?e.max.x:e.min.x,bo.y=r.normal.y>0?e.max.y:e.min.y,bo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(bo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Em(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function H0(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const d=c.array,h=c.usage,f=d.byteLength,_=i.createBuffer();i.bindBuffer(u,_),i.bufferData(u,d,h),c.onUploadCallback();let m;if(d instanceof Float32Array)m=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)m=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)m=i.SHORT;else if(d instanceof Uint32Array)m=i.UNSIGNED_INT;else if(d instanceof Int32Array)m=i.INT;else if(d instanceof Int8Array)m=i.BYTE;else if(d instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:m,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,u,d){const h=u.array,f=u._updateRange,_=u.updateRanges;if(i.bindBuffer(d,c),f.count===-1&&_.length===0&&i.bufferSubData(d,0,h),_.length!==0){for(let m=0,p=_.length;m<p;m++){const g=_[m];t?i.bufferSubData(d,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count):i.bufferSubData(d,g.start*h.BYTES_PER_ELEMENT,h.subarray(g.start,g.start+g.count))}u.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count):i.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);if(d===void 0)n.set(c,r(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,u),d.version=c.version}}return{get:o,remove:a,update:l}}class Qa extends ns{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=t/l,f=[],_=[],m=[],p=[];for(let g=0;g<u;g++){const y=g*h-o;for(let v=0;v<c;v++){const S=v*d-s;_.push(S,-y,0),m.push(0,0,1),p.push(v/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){const v=y+c*g,S=y+c*(g+1),w=y+1+c*(g+1),b=y+1+c*g;f.push(v,S,b),f.push(S,w,b)}this.setIndex(f),this.setAttribute("position",new Gr(_,3)),this.setAttribute("normal",new Gr(m,3)),this.setAttribute("uv",new Gr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.width,e.height,e.widthSegments,e.heightSegments)}}var V0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,W0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,X0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Y0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,j0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,K0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Z0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,J0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Q0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ix=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ox=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ux=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,px=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_x=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xx="gl_FragColor = linearToOutputTexel( gl_FragColor );",yx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Sx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Mx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ex=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ax=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Px=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Dx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ix=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ux=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ox=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Nx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$x=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Kx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ey=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ty=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ny=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ry=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,sy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ay=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,oy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ly=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,py=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,my=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_y=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,My=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ey=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,by=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ty=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ay=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ry=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Py=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ly=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Oy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ny=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,By=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ky=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,oS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_S=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:V0,alphahash_pars_fragment:W0,alphamap_fragment:X0,alphamap_pars_fragment:$0,alphatest_fragment:q0,alphatest_pars_fragment:Y0,aomap_fragment:j0,aomap_pars_fragment:K0,batching_pars_vertex:Z0,batching_vertex:J0,begin_vertex:Q0,beginnormal_vertex:ex,bsdfs:tx,iridescence_fragment:nx,bumpmap_pars_fragment:ix,clipping_planes_fragment:rx,clipping_planes_pars_fragment:sx,clipping_planes_pars_vertex:ax,clipping_planes_vertex:ox,color_fragment:lx,color_pars_fragment:cx,color_pars_vertex:ux,color_vertex:hx,common:fx,cube_uv_reflection_fragment:dx,defaultnormal_vertex:px,displacementmap_pars_vertex:mx,displacementmap_vertex:_x,emissivemap_fragment:gx,emissivemap_pars_fragment:vx,colorspace_fragment:xx,colorspace_pars_fragment:yx,envmap_fragment:Sx,envmap_common_pars_fragment:Mx,envmap_pars_fragment:Ex,envmap_pars_vertex:bx,envmap_physical_pars_fragment:Nx,envmap_vertex:Tx,fog_vertex:wx,fog_pars_vertex:Ax,fog_fragment:Cx,fog_pars_fragment:Rx,gradientmap_pars_fragment:Px,lightmap_fragment:Lx,lightmap_pars_fragment:Dx,lights_lambert_fragment:Ix,lights_lambert_pars_fragment:Ux,lights_pars_begin:Ox,lights_toon_fragment:Fx,lights_toon_pars_fragment:Bx,lights_phong_fragment:zx,lights_phong_pars_fragment:kx,lights_physical_fragment:Gx,lights_physical_pars_fragment:Hx,lights_fragment_begin:Vx,lights_fragment_maps:Wx,lights_fragment_end:Xx,logdepthbuf_fragment:$x,logdepthbuf_pars_fragment:qx,logdepthbuf_pars_vertex:Yx,logdepthbuf_vertex:jx,map_fragment:Kx,map_pars_fragment:Zx,map_particle_fragment:Jx,map_particle_pars_fragment:Qx,metalnessmap_fragment:ey,metalnessmap_pars_fragment:ty,morphcolor_vertex:ny,morphnormal_vertex:iy,morphtarget_pars_vertex:ry,morphtarget_vertex:sy,normal_fragment_begin:ay,normal_fragment_maps:oy,normal_pars_fragment:ly,normal_pars_vertex:cy,normal_vertex:uy,normalmap_pars_fragment:hy,clearcoat_normal_fragment_begin:fy,clearcoat_normal_fragment_maps:dy,clearcoat_pars_fragment:py,iridescence_pars_fragment:my,opaque_fragment:_y,packing:gy,premultiplied_alpha_fragment:vy,project_vertex:xy,dithering_fragment:yy,dithering_pars_fragment:Sy,roughnessmap_fragment:My,roughnessmap_pars_fragment:Ey,shadowmap_pars_fragment:by,shadowmap_pars_vertex:Ty,shadowmap_vertex:wy,shadowmask_pars_fragment:Ay,skinbase_vertex:Cy,skinning_pars_vertex:Ry,skinning_vertex:Py,skinnormal_vertex:Ly,specularmap_fragment:Dy,specularmap_pars_fragment:Iy,tonemapping_fragment:Uy,tonemapping_pars_fragment:Oy,transmission_fragment:Ny,transmission_pars_fragment:Fy,uv_pars_fragment:By,uv_pars_vertex:zy,uv_vertex:ky,worldpos_vertex:Gy,background_vert:Hy,background_frag:Vy,backgroundCube_vert:Wy,backgroundCube_frag:Xy,cube_vert:$y,cube_frag:qy,depth_vert:Yy,depth_frag:jy,distanceRGBA_vert:Ky,distanceRGBA_frag:Zy,equirect_vert:Jy,equirect_frag:Qy,linedashed_vert:eS,linedashed_frag:tS,meshbasic_vert:nS,meshbasic_frag:iS,meshlambert_vert:rS,meshlambert_frag:sS,meshmatcap_vert:aS,meshmatcap_frag:oS,meshnormal_vert:lS,meshnormal_frag:cS,meshphong_vert:uS,meshphong_frag:hS,meshphysical_vert:fS,meshphysical_frag:dS,meshtoon_vert:pS,meshtoon_frag:mS,points_vert:_S,points_frag:gS,shadow_vert:vS,shadow_frag:xS,sprite_vert:yS,sprite_frag:SS},pe={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},hi={basic:{uniforms:un([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:un([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ft(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:un([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:un([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:un([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new ft(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:un([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:un([pe.points,pe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:un([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:un([pe.common,pe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:un([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:un([pe.sprite,pe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:un([pe.common,pe.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:un([pe.lights,pe.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};hi.physical={uniforms:un([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const To={r:0,b:0,g:0};function MS(i,e,t,n,r,s,o){const a=new ft(0);let l=s===!0?0:1,c,u,d=null,h=0,f=null;function _(p,g){let y=!1,v=g.isScene===!0?g.background:null;v&&v.isTexture&&(v=(g.backgroundBlurriness>0?t:e).get(v)),v===null?m(a,l):v&&v.isColor&&(m(v,1),y=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Cl)?(u===void 0&&(u=new oi(new Js(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:Ws(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,b,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=ht.getTransfer(v.colorSpace)!==xt,(d!==v||h!==v.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,f=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new oi(new Qa(2,2),new Fi({name:"BackgroundMaterial",uniforms:Ws(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=ht.getTransfer(v.colorSpace)!==xt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,f=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function m(p,g){p.getRGB(To,xm(i)),n.buffers.color.setClear(To.r,To.g,To.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(p,g=1){a.set(p),l=g,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,m(a,l)},render:_}}function ES(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function d(L,N,O,k,W){let q=!1;if(o){const R=m(k,O,N);c!==R&&(c=R,f(c.object)),q=g(L,k,O,W),q&&y(L,k,O,W)}else{const R=N.wireframe===!0;(c.geometry!==k.id||c.program!==O.id||c.wireframe!==R)&&(c.geometry=k.id,c.program=O.id,c.wireframe=R,q=!0)}W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(q||u)&&(u=!1,D(L,N,O,k),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function f(L){return n.isWebGL2?i.bindVertexArray(L):s.bindVertexArrayOES(L)}function _(L){return n.isWebGL2?i.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function m(L,N,O){const k=O.wireframe===!0;let W=a[L.id];W===void 0&&(W={},a[L.id]=W);let q=W[N.id];q===void 0&&(q={},W[N.id]=q);let R=q[k];return R===void 0&&(R=p(h()),q[k]=R),R}function p(L){const N=[],O=[],k=[];for(let W=0;W<r;W++)N[W]=0,O[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:k,object:L,attributes:{},index:null}}function g(L,N,O,k){const W=c.attributes,q=N.attributes;let R=0;const j=O.getAttributes();for(const re in j)if(j[re].location>=0){const H=W[re];let J=q[re];if(J===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(J=L.instanceColor)),H===void 0||H.attribute!==J||J&&H.data!==J.data)return!0;R++}return c.attributesNum!==R||c.index!==k}function y(L,N,O,k){const W={},q=N.attributes;let R=0;const j=O.getAttributes();for(const re in j)if(j[re].location>=0){let H=q[re];H===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(H=L.instanceColor));const J={};J.attribute=H,H&&H.data&&(J.data=H.data),W[re]=J,R++}c.attributes=W,c.attributesNum=R,c.index=k}function v(){const L=c.newAttributes;for(let N=0,O=L.length;N<O;N++)L[N]=0}function S(L){w(L,0)}function w(L,N){const O=c.newAttributes,k=c.enabledAttributes,W=c.attributeDivisors;O[L]=1,k[L]===0&&(i.enableVertexAttribArray(L),k[L]=1),W[L]!==N&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),W[L]=N)}function b(){const L=c.newAttributes,N=c.enabledAttributes;for(let O=0,k=N.length;O<k;O++)N[O]!==L[O]&&(i.disableVertexAttribArray(O),N[O]=0)}function M(L,N,O,k,W,q,R){R===!0?i.vertexAttribIPointer(L,N,O,W,q):i.vertexAttribPointer(L,N,O,k,W,q)}function D(L,N,O,k){if(n.isWebGL2===!1&&(L.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const W=k.attributes,q=O.getAttributes(),R=N.defaultAttributeValues;for(const j in q){const re=q[j];if(re.location>=0){let ve=W[j];if(ve===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(ve=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(ve=L.instanceColor)),ve!==void 0){const H=ve.normalized,J=ve.itemSize,he=t.get(ve);if(he===void 0)continue;const _e=he.buffer,Se=he.type,de=he.bytesPerElement,Fe=n.isWebGL2===!0&&(Se===i.INT||Se===i.UNSIGNED_INT||ve.gpuType===em);if(ve.isInterleavedBufferAttribute){const De=ve.data,B=De.stride,ke=ve.offset;if(De.isInstancedInterleavedBuffer){for(let me=0;me<re.locationSize;me++)w(re.location+me,De.meshPerAttribute);L.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let me=0;me<re.locationSize;me++)S(re.location+me);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let me=0;me<re.locationSize;me++)M(re.location+me,J/re.locationSize,Se,H,B*de,(ke+J/re.locationSize*me)*de,Fe)}else{if(ve.isInstancedBufferAttribute){for(let De=0;De<re.locationSize;De++)w(re.location+De,ve.meshPerAttribute);L.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let De=0;De<re.locationSize;De++)S(re.location+De);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let De=0;De<re.locationSize;De++)M(re.location+De,J/re.locationSize,Se,H,J*de,J/re.locationSize*De*de,Fe)}}else if(R!==void 0){const H=R[j];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(re.location,H);break;case 3:i.vertexAttrib3fv(re.location,H);break;case 4:i.vertexAttrib4fv(re.location,H);break;default:i.vertexAttrib1fv(re.location,H)}}}}b()}function I(){U();for(const L in a){const N=a[L];for(const O in N){const k=N[O];for(const W in k)_(k[W].object),delete k[W];delete N[O]}delete a[L]}}function x(L){if(a[L.id]===void 0)return;const N=a[L.id];for(const O in N){const k=N[O];for(const W in k)_(k[W].object),delete k[W];delete N[O]}delete a[L.id]}function A(L){for(const N in a){const O=a[N];if(O[L.id]===void 0)continue;const k=O[L.id];for(const W in k)_(k[W].object),delete k[W];delete O[L.id]}}function U(){Y(),u=!0,c!==l&&(c=l,f(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:U,resetDefaultState:Y,dispose:I,releaseStatesOfGeometry:x,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:S,disableUnusedAttributes:b}}function bS(i,e,t,n){const r=n.isWebGL2;let s;function o(u){s=u}function a(u,d){i.drawArrays(s,u,d),t.update(d,s,1)}function l(u,d,h){if(h===0)return;let f,_;if(r)f=i,_="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[_](s,u,d,h),t.update(d,s,h)}function c(u,d,h){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<h;_++)this.render(u[_],d[_]);else{f.multiDrawArraysWEBGL(s,u,0,d,0,h);let _=0;for(let m=0;m<h;m++)_+=d[m];t.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function TS(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(M){if(M==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,S=o||e.has("OES_texture_float"),w=v&&S,b=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:f,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:w,maxSamples:b}}function wS(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Er,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||r;return r=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const _=d.clippingPlanes,m=d.clipIntersection,p=d.clipShadows,g=i.get(d);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const y=s?0:n,v=y*4;let S=g.clippingState||null;l.value=S,S=u(_,h,v,f);for(let w=0;w!==v;++w)S[w]=t[w];g.clippingState=S,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,_){const m=d!==null?d.length:0;let p=null;if(m!==0){if(p=l.value,_!==!0||p===null){const g=f+m*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<g)&&(p=new Float32Array(g));for(let v=0,S=f;v!==m;++v,S+=4)o.copy(d[v]).applyMatrix4(y,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function AS(i){let e=new WeakMap;function t(o,a){return a===ou?o.mapping=Gs:a===lu&&(o.mapping=Hs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ou||a===lu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new z0(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class CS extends ym{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ws=4,jf=[.125,.215,.35,.446,.526,.582],Lr=20,xc=new CS,Kf=new ft;let yc=null,Sc=0,Mc=0;const br=(1+Math.sqrt(5))/2,xs=1/br,Zf=[new K(1,1,1),new K(-1,1,1),new K(1,1,-1),new K(-1,1,-1),new K(0,br,xs),new K(0,br,-xs),new K(xs,0,br),new K(-xs,0,br),new K(br,xs,0),new K(-br,xs,0)];class Jf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){yc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=td(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yc,Sc,Mc),e.scissorTest=!1,wo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Ba,format:ai,colorSpace:Ni,depthBuffer:!1},r=Qf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RS(s)),this._blurMaterial=PS(s,e,t)}return r}_compileMaterial(e){const t=new oi(this._lodPlanes[0],e);this._renderer.compile(t,xc)}_sceneToCubeUV(e,t,n,r){const a=new $n(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Kf),u.toneMapping=ir,u.autoClear=!1;const f=new _m({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),_=new oi(new Js,f);let m=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,m=!0):(f.color.copy(Kf),m=!0);for(let g=0;g<6;g++){const y=g%3;y===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):y===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const v=this._cubeSize;wo(r,y*v,g>2?v:0,v,v),u.setRenderTarget(r),m&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Gs||e.mapping===Hs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=td()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ed());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new oi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;wo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,xc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Zf[(r-1)%Zf.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new oi(this._lodPlanes[r],c),h=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Lr-1),m=s/_,p=isFinite(s)?1+Math.floor(u*m):Lr;p>Lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Lr}`);const g=[];let y=0;for(let M=0;M<Lr;++M){const D=M/m,I=Math.exp(-D*D/2);g.push(I),M===0?y+=I:M<p&&(y+=2*I)}for(let M=0;M<g.length;M++)g[M]=g[M]/y;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=g,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-n;const S=this._sizeLods[r],w=3*S*(r>v-ws?r-v+ws:0),b=4*(this._cubeSize-S);wo(t,w,b,3*S,2*S),l.setRenderTarget(t),l.render(d,xc)}}function RS(i){const e=[],t=[],n=[];let r=i;const s=i-ws+1+jf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-ws?l=jf[o-i+ws-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,_=6,m=3,p=2,g=1,y=new Float32Array(m*_*f),v=new Float32Array(p*_*f),S=new Float32Array(g*_*f);for(let b=0;b<f;b++){const M=b%3*2/3-1,D=b>2?0:-1,I=[M,D,0,M+2/3,D,0,M+2/3,D+1,0,M,D,0,M+2/3,D+1,0,M,D+1,0];y.set(I,m*_*b),v.set(h,p*_*b);const x=[b,b,b,b,b,b];S.set(x,g*_*b)}const w=new ns;w.setAttribute("position",new gi(y,m)),w.setAttribute("uv",new gi(v,p)),w.setAttribute("faceIndex",new gi(S,g)),e.push(w),r>ws&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Qf(i,e,t){const n=new jr(i,e,t);return n.texture.mapping=Cl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function PS(i,e,t){const n=new Float32Array(Lr),r=new K(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function ed(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function td(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function eh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function LS(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ou||l===lu,u=l===Gs||l===Hs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Jf(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new Jf(i));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function DS(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function IS(i,e,t,n){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const m=h.morphAttributes[_];for(let p=0,g=m.length;p<g;p++)e.remove(m[p])}h.removeEventListener("dispose",o),delete r[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const _ in f){const m=f[_];for(let p=0,g=m.length;p<g;p++)e.update(m[p],i.ARRAY_BUFFER)}}function c(d){const h=[],f=d.index,_=d.attributes.position;let m=0;if(f!==null){const y=f.array;m=f.version;for(let v=0,S=y.length;v<S;v+=3){const w=y[v+0],b=y[v+1],M=y[v+2];h.push(w,b,b,M,M,w)}}else if(_!==void 0){const y=_.array;m=_.version;for(let v=0,S=y.length/3-1;v<S;v+=3){const w=v+0,b=v+1,M=v+2;h.push(w,b,b,M,M,w)}}else return;const p=new(um(h)?vm:gm)(h,1);p.version=m;const g=s.get(d);g&&e.remove(g),s.set(d,p)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function US(i,e,t,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,_){i.drawElements(s,_,a,f*l),t.update(_,s,1)}function d(f,_,m){if(m===0)return;let p,g;if(r)p=i,g="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,_,a,f*l,m),t.update(_,s,m)}function h(f,_,m){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<m;g++)this.render(f[g]/l,_[g]);else{p.multiDrawElementsWEBGL(s,_,0,a,f,0,m);let g=0;for(let y=0;y<m;y++)g+=_[y];t.update(g,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function OS(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function NS(i,e){return i[0]-e[0]}function FS(i,e){return Math.abs(e[1])-Math.abs(i[1])}function BS(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new Yt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=f!==void 0?f.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let L=function(){U.dispose(),s.delete(u),u.removeEventListener("dispose",L)};m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],M=u.morphAttributes.color||[];let D=0;y===!0&&(D=1),v===!0&&(D=2),S===!0&&(D=3);let I=u.attributes.position.count*D,x=1;I>e.maxTextureSize&&(x=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const A=new Float32Array(I*x*4*_),U=new dm(A,I,x,_);U.type=Li,U.needsUpdate=!0;const Y=D*4;for(let N=0;N<_;N++){const O=w[N],k=b[N],W=M[N],q=I*x*4*N;for(let R=0;R<O.count;R++){const j=R*Y;y===!0&&(o.fromBufferAttribute(O,R),A[q+j+0]=o.x,A[q+j+1]=o.y,A[q+j+2]=o.z,A[q+j+3]=0),v===!0&&(o.fromBufferAttribute(k,R),A[q+j+4]=o.x,A[q+j+5]=o.y,A[q+j+6]=o.z,A[q+j+7]=0),S===!0&&(o.fromBufferAttribute(W,R),A[q+j+8]=o.x,A[q+j+9]=o.y,A[q+j+10]=o.z,A[q+j+11]=W.itemSize===4?o.w:1)}}m={count:_,texture:U,size:new at(I,x)},s.set(u,m),u.addEventListener("dispose",L)}let p=0;for(let y=0;y<h.length;y++)p+=h[y];const g=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(i,"morphTargetBaseInfluence",g),d.getUniforms().setValue(i,"morphTargetInfluences",h),d.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const f=h===void 0?0:h.length;let _=n[u.id];if(_===void 0||_.length!==f){_=[];for(let v=0;v<f;v++)_[v]=[v,0];n[u.id]=_}for(let v=0;v<f;v++){const S=_[v];S[0]=v,S[1]=h[v]}_.sort(FS);for(let v=0;v<8;v++)v<f&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(NS);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let g=0;for(let v=0;v<8;v++){const S=a[v],w=S[0],b=S[1];w!==Number.MAX_SAFE_INTEGER&&b?(m&&u.getAttribute("morphTarget"+v)!==m[w]&&u.setAttribute("morphTarget"+v,m[w]),p&&u.getAttribute("morphNormal"+v)!==p[w]&&u.setAttribute("morphNormal"+v,p[w]),r[v]=b,g+=b):(m&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),p&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}const y=u.morphTargetsRelative?1:1-g;d.getUniforms().setValue(i,"morphTargetBaseInfluence",y),d.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function zS(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class bm extends xn{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:zr,u!==zr&&u!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===zr&&(n=Ki),n===void 0&&u===Vs&&(n=Br),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:pn,this.minFilter=l!==void 0?l:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Tm=new xn,wm=new bm(1,1);wm.compareFunction=cm;const Am=new dm,Cm=new S0,Rm=new Sm,nd=[],id=[],rd=new Float32Array(16),sd=new Float32Array(9),ad=new Float32Array(4);function Qs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=nd[r];if(s===void 0&&(s=new Float32Array(r),nd[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ll(i,e){let t=id[e];t===void 0&&(t=new Int32Array(e),id[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function kS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function GS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),Gt(t,e)}}function HS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),Gt(t,e)}}function VS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),Gt(t,e)}}function WS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,n))return;ad.set(n),i.uniformMatrix2fv(this.addr,!1,ad),Gt(t,n)}}function XS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,n))return;sd.set(n),i.uniformMatrix3fv(this.addr,!1,sd),Gt(t,n)}}function $S(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,n))return;rd.set(n),i.uniformMatrix4fv(this.addr,!1,rd),Gt(t,n)}}function qS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function YS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),Gt(t,e)}}function jS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),Gt(t,e)}}function KS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),Gt(t,e)}}function ZS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function JS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),Gt(t,e)}}function QS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),Gt(t,e)}}function eM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),Gt(t,e)}}function tM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?wm:Tm;t.setTexture2D(e||s,r)}function nM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Cm,r)}function iM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Rm,r)}function rM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Am,r)}function sM(i){switch(i){case 5126:return kS;case 35664:return GS;case 35665:return HS;case 35666:return VS;case 35674:return WS;case 35675:return XS;case 35676:return $S;case 5124:case 35670:return qS;case 35667:case 35671:return YS;case 35668:case 35672:return jS;case 35669:case 35673:return KS;case 5125:return ZS;case 36294:return JS;case 36295:return QS;case 36296:return eM;case 35678:case 36198:case 36298:case 36306:case 35682:return tM;case 35679:case 36299:case 36307:return nM;case 35680:case 36300:case 36308:case 36293:return iM;case 36289:case 36303:case 36311:case 36292:return rM}}function aM(i,e){i.uniform1fv(this.addr,e)}function oM(i,e){const t=Qs(e,this.size,2);i.uniform2fv(this.addr,t)}function lM(i,e){const t=Qs(e,this.size,3);i.uniform3fv(this.addr,t)}function cM(i,e){const t=Qs(e,this.size,4);i.uniform4fv(this.addr,t)}function uM(i,e){const t=Qs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function hM(i,e){const t=Qs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function fM(i,e){const t=Qs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function dM(i,e){i.uniform1iv(this.addr,e)}function pM(i,e){i.uniform2iv(this.addr,e)}function mM(i,e){i.uniform3iv(this.addr,e)}function _M(i,e){i.uniform4iv(this.addr,e)}function gM(i,e){i.uniform1uiv(this.addr,e)}function vM(i,e){i.uniform2uiv(this.addr,e)}function xM(i,e){i.uniform3uiv(this.addr,e)}function yM(i,e){i.uniform4uiv(this.addr,e)}function SM(i,e,t){const n=this.cache,r=e.length,s=Ll(t,r);kt(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Tm,s[o])}function MM(i,e,t){const n=this.cache,r=e.length,s=Ll(t,r);kt(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Cm,s[o])}function EM(i,e,t){const n=this.cache,r=e.length,s=Ll(t,r);kt(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Rm,s[o])}function bM(i,e,t){const n=this.cache,r=e.length,s=Ll(t,r);kt(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Am,s[o])}function TM(i){switch(i){case 5126:return aM;case 35664:return oM;case 35665:return lM;case 35666:return cM;case 35674:return uM;case 35675:return hM;case 35676:return fM;case 5124:case 35670:return dM;case 35667:case 35671:return pM;case 35668:case 35672:return mM;case 35669:case 35673:return _M;case 5125:return gM;case 36294:return vM;case 36295:return xM;case 36296:return yM;case 35678:case 36198:case 36298:case 36306:case 35682:return SM;case 35679:case 36299:case 36307:return MM;case 35680:case 36300:case 36308:case 36293:return EM;case 36289:case 36303:case 36311:case 36292:return bM}}class wM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sM(t.type)}}class AM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=TM(t.type)}}class CM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Ec=/(\w+)(\])?(\[|\.)?/g;function od(i,e){i.seq.push(e),i.map[e.id]=e}function RM(i,e,t){const n=i.name,r=n.length;for(Ec.lastIndex=0;;){const s=Ec.exec(n),o=Ec.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){od(t,c===void 0?new wM(a,i,e):new AM(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new CM(a),od(t,d)),t=d}}}class jo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);RM(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function ld(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const PM=37297;let LM=0;function DM(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function IM(i){const e=ht.getPrimaries(ht.workingColorSpace),t=ht.getPrimaries(i);let n;switch(e===t?n="":e===cl&&t===ll?n="LinearDisplayP3ToLinearSRGB":e===ll&&t===cl&&(n="LinearSRGBToLinearDisplayP3"),i){case Ni:case Rl:return[n,"LinearTransferOETF"];case qt:case Ju:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function cd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+DM(i.getShaderSource(e),o)}else return r}function UM(i,e){const t=IM(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function OM(i,e){let t;switch(e){case Xv:t="Linear";break;case $v:t="Reinhard";break;case qv:t="OptimizedCineon";break;case Yv:t="ACESFilmic";break;case Kv:t="AgX";break;case jv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function NM(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(As).join(`
`)}function FM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function BM(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zM(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function As(i){return i!==""}function ud(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kM=/^[ \t]*#include +<([\w\d./]+)>/gm;function pu(i){return i.replace(kM,HM)}const GM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function HM(i,e){let t=Ye[e];if(t===void 0){const n=GM.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return pu(t)}const VM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fd(i){return i.replace(VM,WM)}function WM(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function dd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function XM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===xv?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function $M(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gs:case Hs:e="ENVMAP_TYPE_CUBE";break;case Cl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function YM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Jp:e="ENVMAP_BLENDING_MULTIPLY";break;case Vv:e="ENVMAP_BLENDING_MIX";break;case Wv:e="ENVMAP_BLENDING_ADD";break}return e}function jM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function KM(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=XM(t),c=$M(t),u=qM(t),d=YM(t),h=jM(t),f=t.isWebGL2?"":NM(t),_=FM(t),m=BM(s),p=r.createProgram();let g,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(As).join(`
`),g.length>0&&(g+=`
`),y=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(As).join(`
`),y.length>0&&(y+=`
`)):(g=[dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),y=[f,dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ir?"#define TONE_MAPPING":"",t.toneMapping!==ir?Ye.tonemapping_pars_fragment:"",t.toneMapping!==ir?OM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,UM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(As).join(`
`)),o=pu(o),o=ud(o,t),o=hd(o,t),a=pu(a),a=ud(a,t),a=hd(a,t),o=fd(o),a=fd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Rf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const S=v+g+o,w=v+y+a,b=ld(r,r.VERTEX_SHADER,S),M=ld(r,r.FRAGMENT_SHADER,w);r.attachShader(p,b),r.attachShader(p,M),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function D(U){if(i.debug.checkShaderErrors){const Y=r.getProgramInfoLog(p).trim(),L=r.getShaderInfoLog(b).trim(),N=r.getShaderInfoLog(M).trim();let O=!0,k=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,b,M);else{const W=cd(r,b,"vertex"),q=cd(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+Y+`
`+W+`
`+q)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(L===""||N==="")&&(k=!1);k&&(U.diagnostics={runnable:O,programLog:Y,vertexShader:{log:L,prefix:g},fragmentShader:{log:N,prefix:y}})}r.deleteShader(b),r.deleteShader(M),I=new jo(r,p),x=zM(r,p)}let I;this.getUniforms=function(){return I===void 0&&D(this),I};let x;this.getAttributes=function(){return x===void 0&&D(this),x};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(p,PM)),A},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=LM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=M,this}let ZM=0;class JM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new QM(e),t.set(e,n)),n}}class QM{constructor(e){this.id=ZM++,this.code=e,this.usedTimes=0}}function eE(i,e,t,n,r,s,o){const a=new pm,l=new JM,c=new Set,u=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let _=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function g(x,A,U,Y,L){const N=Y.fog,O=L.geometry,k=x.isMeshStandardMaterial?Y.environment:null,W=(x.isMeshStandardMaterial?t:e).get(x.envMap||k),q=W&&W.mapping===Cl?W.image.height:null,R=m[x.type];x.precision!==null&&(_=r.getMaxPrecision(x.precision),_!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));const j=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,re=j!==void 0?j.length:0;let ve=0;O.morphAttributes.position!==void 0&&(ve=1),O.morphAttributes.normal!==void 0&&(ve=2),O.morphAttributes.color!==void 0&&(ve=3);let H,J,he,_e;if(R){const ot=hi[R];H=ot.vertexShader,J=ot.fragmentShader}else H=x.vertexShader,J=x.fragmentShader,l.update(x),he=l.getVertexShaderID(x),_e=l.getFragmentShaderID(x);const Se=i.getRenderTarget(),de=L.isInstancedMesh===!0,Fe=L.isBatchedMesh===!0,De=!!x.map,B=!!x.matcap,ke=!!W,me=!!x.aoMap,Pe=!!x.lightMap,xe=!!x.bumpMap,V=!!x.normalMap,Oe=!!x.displacementMap,C=!!x.emissiveMap,E=!!x.metalnessMap,z=!!x.roughnessMap,ne=x.anisotropy>0,ie=x.clearcoat>0,ae=x.iridescence>0,ee=x.sheen>0,te=x.transmission>0,Z=ne&&!!x.anisotropyMap,ue=ie&&!!x.clearcoatMap,Re=ie&&!!x.clearcoatNormalMap,Q=ie&&!!x.clearcoatRoughnessMap,Ee=ae&&!!x.iridescenceMap,se=ae&&!!x.iridescenceThicknessMap,Ie=ee&&!!x.sheenColorMap,Te=ee&&!!x.sheenRoughnessMap,ye=!!x.specularMap,We=!!x.specularColorMap,Ze=!!x.specularIntensityMap,st=te&&!!x.transmissionMap,ge=te&&!!x.thicknessMap,nt=!!x.gradientMap,P=!!x.alphaMap,oe=x.alphaTest>0,le=!!x.alphaHash,Me=!!x.extensions;let Be=ir;x.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(Be=i.toneMapping);const Ke={isWebGL2:d,shaderID:R,shaderType:x.type,shaderName:x.name,vertexShader:H,fragmentShader:J,defines:x.defines,customVertexShaderID:he,customFragmentShaderID:_e,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:Fe,instancing:de,instancingColor:de&&L.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Se===null?i.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Ni,alphaToCoverage:!!x.alphaToCoverage,map:De,matcap:B,envMap:ke,envMapMode:ke&&W.mapping,envMapCubeUVHeight:q,aoMap:me,lightMap:Pe,bumpMap:xe,normalMap:V,displacementMap:f&&Oe,emissiveMap:C,normalMapObjectSpace:V&&x.normalMapType===o0,normalMapTangentSpace:V&&x.normalMapType===lm,metalnessMap:E,roughnessMap:z,anisotropy:ne,anisotropyMap:Z,clearcoat:ie,clearcoatMap:ue,clearcoatNormalMap:Re,clearcoatRoughnessMap:Q,iridescence:ae,iridescenceMap:Ee,iridescenceThicknessMap:se,sheen:ee,sheenColorMap:Ie,sheenRoughnessMap:Te,specularMap:ye,specularColorMap:We,specularIntensityMap:Ze,transmission:te,transmissionMap:st,thicknessMap:ge,gradientMap:nt,opaque:x.transparent===!1&&x.blending===Ls&&x.alphaToCoverage===!1,alphaMap:P,alphaTest:oe,alphaHash:le,combine:x.combine,mapUv:De&&p(x.map.channel),aoMapUv:me&&p(x.aoMap.channel),lightMapUv:Pe&&p(x.lightMap.channel),bumpMapUv:xe&&p(x.bumpMap.channel),normalMapUv:V&&p(x.normalMap.channel),displacementMapUv:Oe&&p(x.displacementMap.channel),emissiveMapUv:C&&p(x.emissiveMap.channel),metalnessMapUv:E&&p(x.metalnessMap.channel),roughnessMapUv:z&&p(x.roughnessMap.channel),anisotropyMapUv:Z&&p(x.anisotropyMap.channel),clearcoatMapUv:ue&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:Re&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:se&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Te&&p(x.sheenRoughnessMap.channel),specularMapUv:ye&&p(x.specularMap.channel),specularColorMapUv:We&&p(x.specularColorMap.channel),specularIntensityMapUv:Ze&&p(x.specularIntensityMap.channel),transmissionMapUv:st&&p(x.transmissionMap.channel),thicknessMapUv:ge&&p(x.thicknessMap.channel),alphaMapUv:P&&p(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(V||ne),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!O.attributes.uv&&(De||P),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:L.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ve,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Be,useLegacyLights:i._useLegacyLights,decodeVideoTexture:De&&x.map.isVideoTexture===!0&&ht.getTransfer(x.map.colorSpace)===xt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Pi,flipSided:x.side===Tn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:Me&&x.extensions.derivatives===!0,extensionFragDepth:Me&&x.extensions.fragDepth===!0,extensionDrawBuffers:Me&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:Me&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Me&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Me&&x.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function y(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)A.push(U),A.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(v(A,x),S(A,x),A.push(i.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function v(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function S(x,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.alphaToCoverage&&a.enable(20),x.push(a.mask)}function w(x){const A=m[x.type];let U;if(A){const Y=hi[A];U=O0.clone(Y.uniforms)}else U=x.uniforms;return U}function b(x,A){let U;for(let Y=0,L=u.length;Y<L;Y++){const N=u[Y];if(N.cacheKey===A){U=N,++U.usedTimes;break}}return U===void 0&&(U=new KM(i,A,x,s),u.push(U)),U}function M(x){if(--x.usedTimes===0){const A=u.indexOf(x);u[A]=u[u.length-1],u.pop(),x.destroy()}}function D(x){l.remove(x)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:w,acquireProgram:b,releaseProgram:M,releaseShaderCache:D,programs:u,dispose:I}}function tE(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function nE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function pd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function md(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,h,f,_,m,p){let g=i[e];return g===void 0?(g={id:d.id,object:d,geometry:h,material:f,groupOrder:_,renderOrder:d.renderOrder,z:m,group:p},i[e]=g):(g.id=d.id,g.object=d,g.geometry=h,g.material=f,g.groupOrder=_,g.renderOrder=d.renderOrder,g.z=m,g.group=p),e++,g}function a(d,h,f,_,m,p){const g=o(d,h,f,_,m,p);f.transmission>0?n.push(g):f.transparent===!0?r.push(g):t.push(g)}function l(d,h,f,_,m,p){const g=o(d,h,f,_,m,p);f.transmission>0?n.unshift(g):f.transparent===!0?r.unshift(g):t.unshift(g)}function c(d,h){t.length>1&&t.sort(d||nE),n.length>1&&n.sort(h||pd),r.length>1&&r.sort(h||pd)}function u(){for(let d=e,h=i.length;d<h;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function iE(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new md,i.set(n,[o])):r>=s.length?(o=new md,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function rE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new ft};break;case"SpotLight":t={position:new K,direction:new K,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":t={color:new ft,position:new K,halfWidth:new K,halfHeight:new K};break}return i[e.id]=t,t}}}function sE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let aE=0;function oE(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function lE(i,e){const t=new rE,n=sE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new K);const s=new K,o=new Kt,a=new Kt;function l(u,d){let h=0,f=0,_=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let m=0,p=0,g=0,y=0,v=0,S=0,w=0,b=0,M=0,D=0,I=0;u.sort(oE);const x=d===!0?Math.PI:1;for(let U=0,Y=u.length;U<Y;U++){const L=u[U],N=L.color,O=L.intensity,k=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=N.r*O*x,f+=N.g*O*x,_+=N.b*O*x;else if(L.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(L.sh.coefficients[q],O);I++}else if(L.isDirectionalLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*x),L.castShadow){const R=L.shadow,j=n.get(L);j.shadowBias=R.bias,j.shadowNormalBias=R.normalBias,j.shadowRadius=R.radius,j.shadowMapSize=R.mapSize,r.directionalShadow[m]=j,r.directionalShadowMap[m]=W,r.directionalShadowMatrix[m]=L.shadow.matrix,S++}r.directional[m]=q,m++}else if(L.isSpotLight){const q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(N).multiplyScalar(O*x),q.distance=k,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,r.spot[g]=q;const R=L.shadow;if(L.map&&(r.spotLightMap[M]=L.map,M++,R.updateMatrices(L),L.castShadow&&D++),r.spotLightMatrix[g]=R.matrix,L.castShadow){const j=n.get(L);j.shadowBias=R.bias,j.shadowNormalBias=R.normalBias,j.shadowRadius=R.radius,j.shadowMapSize=R.mapSize,r.spotShadow[g]=j,r.spotShadowMap[g]=W,b++}g++}else if(L.isRectAreaLight){const q=t.get(L);q.color.copy(N).multiplyScalar(O),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),r.rectArea[y]=q,y++}else if(L.isPointLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*x),q.distance=L.distance,q.decay=L.decay,L.castShadow){const R=L.shadow,j=n.get(L);j.shadowBias=R.bias,j.shadowNormalBias=R.normalBias,j.shadowRadius=R.radius,j.shadowMapSize=R.mapSize,j.shadowCameraNear=R.camera.near,j.shadowCameraFar=R.camera.far,r.pointShadow[p]=j,r.pointShadowMap[p]=W,r.pointShadowMatrix[p]=L.shadow.matrix,w++}r.point[p]=q,p++}else if(L.isHemisphereLight){const q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(O*x),q.groundColor.copy(L.groundColor).multiplyScalar(O*x),r.hemi[v]=q,v++}}y>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=f,r.ambient[2]=_;const A=r.hash;(A.directionalLength!==m||A.pointLength!==p||A.spotLength!==g||A.rectAreaLength!==y||A.hemiLength!==v||A.numDirectionalShadows!==S||A.numPointShadows!==w||A.numSpotShadows!==b||A.numSpotMaps!==M||A.numLightProbes!==I)&&(r.directional.length=m,r.spot.length=g,r.rectArea.length=y,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=b+M-D,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=I,A.directionalLength=m,A.pointLength=p,A.spotLength=g,A.rectAreaLength=y,A.hemiLength=v,A.numDirectionalShadows=S,A.numPointShadows=w,A.numSpotShadows=b,A.numSpotMaps=M,A.numLightProbes=I,r.version=aE++)}function c(u,d){let h=0,f=0,_=0,m=0,p=0;const g=d.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){const S=u[y];if(S.isDirectionalLight){const w=r.directional[h];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),h++}else if(S.isSpotLight){const w=r.spot[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),_++}else if(S.isRectAreaLight){const w=r.rectArea[m];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(g),a.identity(),o.copy(S.matrixWorld),o.premultiply(g),a.extractRotation(o),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),m++}else if(S.isPointLight){const w=r.point[f];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(g),f++}else if(S.isHemisphereLight){const w=r.hemi[p];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(g),p++}}}return{setup:l,setupView:c,state:r}}function _d(i,e){const t=new lE(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(d){n.push(d)}function a(d){r.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function cE(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new _d(i,e),t.set(s,[l])):o>=a.length?(l=new _d(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class uE extends Ja{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=s0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hE extends Ja{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pE(i,e,t){let n=new Mm;const r=new at,s=new at,o=new Yt,a=new uE({depthPacking:a0}),l=new hE,c={},u=t.maxTextureSize,d={[lr]:Tn,[Tn]:lr,[Pi]:Pi},h=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:fE,fragmentShader:dE}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const _=new ns;_.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new oi(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zp;let g=this.type;this.render=function(b,M,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const I=i.getRenderTarget(),x=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),U=i.state;U.setBlending(nr),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const Y=g!==Ai&&this.type===Ai,L=g===Ai&&this.type!==Ai;for(let N=0,O=b.length;N<O;N++){const k=b[N],W=k.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const q=W.getFrameExtents();if(r.multiply(q),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,W.mapSize.y=s.y)),W.map===null||Y===!0||L===!0){const j=this.type!==Ai?{minFilter:pn,magFilter:pn}:{};W.map!==null&&W.map.dispose(),W.map=new jr(r.x,r.y,j),W.map.texture.name=k.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const R=W.getViewportCount();for(let j=0;j<R;j++){const re=W.getViewport(j);o.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),U.viewport(o),W.updateMatrices(k,j),n=W.getFrustum(),S(M,D,W.camera,k,this.type)}W.isPointLightShadow!==!0&&this.type===Ai&&y(W,D),W.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(I,x,A)};function y(b,M){const D=e.update(m);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new jr(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(M,null,D,h,m,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(M,null,D,f,m,null)}function v(b,M,D,I){let x=null;const A=D.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(A!==void 0)x=A;else if(x=D.isPointLight===!0?l:a,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const U=x.uuid,Y=M.uuid;let L=c[U];L===void 0&&(L={},c[U]=L);let N=L[Y];N===void 0&&(N=x.clone(),L[Y]=N,M.addEventListener("dispose",w)),x=N}if(x.visible=M.visible,x.wireframe=M.wireframe,I===Ai?x.side=M.shadowSide!==null?M.shadowSide:M.side:x.side=M.shadowSide!==null?M.shadowSide:d[M.side],x.alphaMap=M.alphaMap,x.alphaTest=M.alphaTest,x.map=M.map,x.clipShadows=M.clipShadows,x.clippingPlanes=M.clippingPlanes,x.clipIntersection=M.clipIntersection,x.displacementMap=M.displacementMap,x.displacementScale=M.displacementScale,x.displacementBias=M.displacementBias,x.wireframeLinewidth=M.wireframeLinewidth,x.linewidth=M.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const U=i.properties.get(x);U.light=D}return x}function S(b,M,D,I,x){if(b.visible===!1)return;if(b.layers.test(M.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===Ai)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld);const Y=e.update(b),L=b.material;if(Array.isArray(L)){const N=Y.groups;for(let O=0,k=N.length;O<k;O++){const W=N[O],q=L[W.materialIndex];if(q&&q.visible){const R=v(b,q,I,x);b.onBeforeShadow(i,b,M,D,Y,R,W),i.renderBufferDirect(D,null,Y,R,b,W),b.onAfterShadow(i,b,M,D,Y,R,W)}}}else if(L.visible){const N=v(b,L,I,x);b.onBeforeShadow(i,b,M,D,Y,N,null),i.renderBufferDirect(D,null,Y,N,b,null),b.onAfterShadow(i,b,M,D,Y,N,null)}}const U=b.children;for(let Y=0,L=U.length;Y<L;Y++)S(U[Y],M,D,I,x)}function w(b){b.target.removeEventListener("dispose",w);for(const D in c){const I=c[D],x=b.target.uuid;x in I&&(I[x].dispose(),delete I[x])}}}function mE(i,e,t){const n=t.isWebGL2;function r(){let P=!1;const oe=new Yt;let le=null;const Me=new Yt(0,0,0,0);return{setMask:function(Be){le!==Be&&!P&&(i.colorMask(Be,Be,Be,Be),le=Be)},setLocked:function(Be){P=Be},setClear:function(Be,Ke,ot,Le,Ae){Ae===!0&&(Be*=Le,Ke*=Le,ot*=Le),oe.set(Be,Ke,ot,Le),Me.equals(oe)===!1&&(i.clearColor(Be,Ke,ot,Le),Me.copy(oe))},reset:function(){P=!1,le=null,Me.set(-1,0,0,0)}}}function s(){let P=!1,oe=null,le=null,Me=null;return{setTest:function(Be){Be?de(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},setMask:function(Be){oe!==Be&&!P&&(i.depthMask(Be),oe=Be)},setFunc:function(Be){if(le!==Be){switch(Be){case Nv:i.depthFunc(i.NEVER);break;case Fv:i.depthFunc(i.ALWAYS);break;case Bv:i.depthFunc(i.LESS);break;case al:i.depthFunc(i.LEQUAL);break;case zv:i.depthFunc(i.EQUAL);break;case kv:i.depthFunc(i.GEQUAL);break;case Gv:i.depthFunc(i.GREATER);break;case Hv:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=Be}},setLocked:function(Be){P=Be},setClear:function(Be){Me!==Be&&(i.clearDepth(Be),Me=Be)},reset:function(){P=!1,oe=null,le=null,Me=null}}}function o(){let P=!1,oe=null,le=null,Me=null,Be=null,Ke=null,ot=null,Le=null,Ae=null;return{setTest:function(Ne){P||(Ne?de(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},setMask:function(Ne){oe!==Ne&&!P&&(i.stencilMask(Ne),oe=Ne)},setFunc:function(Ne,ce,Ge){(le!==Ne||Me!==ce||Be!==Ge)&&(i.stencilFunc(Ne,ce,Ge),le=Ne,Me=ce,Be=Ge)},setOp:function(Ne,ce,Ge){(Ke!==Ne||ot!==ce||Le!==Ge)&&(i.stencilOp(Ne,ce,Ge),Ke=Ne,ot=ce,Le=Ge)},setLocked:function(Ne){P=Ne},setClear:function(Ne){Ae!==Ne&&(i.clearStencil(Ne),Ae=Ne)},reset:function(){P=!1,oe=null,le=null,Me=null,Be=null,Ke=null,ot=null,Le=null,Ae=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,d=new WeakMap;let h={},f={},_=new WeakMap,m=[],p=null,g=!1,y=null,v=null,S=null,w=null,b=null,M=null,D=null,I=new ft(0,0,0),x=0,A=!1,U=null,Y=null,L=null,N=null,O=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,q=0;const R=i.getParameter(i.VERSION);R.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(R)[1]),W=q>=1):R.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),W=q>=2);let j=null,re={};const ve=i.getParameter(i.SCISSOR_BOX),H=i.getParameter(i.VIEWPORT),J=new Yt().fromArray(ve),he=new Yt().fromArray(H);function _e(P,oe,le,Me){const Be=new Uint8Array(4),Ke=i.createTexture();i.bindTexture(P,Ke),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ot=0;ot<le;ot++)n&&(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)?i.texImage3D(oe,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,Be):i.texImage2D(oe+ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Be);return Ke}const Se={};Se[i.TEXTURE_2D]=_e(i.TEXTURE_2D,i.TEXTURE_2D,1),Se[i.TEXTURE_CUBE_MAP]=_e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Se[i.TEXTURE_2D_ARRAY]=_e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Se[i.TEXTURE_3D]=_e(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),de(i.DEPTH_TEST),l.setFunc(al),Oe(!1),C(Yh),de(i.CULL_FACE),xe(nr);function de(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function Fe(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function De(P,oe){return f[P]!==oe?(i.bindFramebuffer(P,oe),f[P]=oe,n&&(P===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=oe),P===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=oe)),!0):!1}function B(P,oe){let le=m,Me=!1;if(P)if(le=_.get(oe),le===void 0&&(le=[],_.set(oe,le)),P.isWebGLMultipleRenderTargets){const Be=P.texture;if(le.length!==Be.length||le[0]!==i.COLOR_ATTACHMENT0){for(let Ke=0,ot=Be.length;Ke<ot;Ke++)le[Ke]=i.COLOR_ATTACHMENT0+Ke;le.length=Be.length,Me=!0}}else le[0]!==i.COLOR_ATTACHMENT0&&(le[0]=i.COLOR_ATTACHMENT0,Me=!0);else le[0]!==i.BACK&&(le[0]=i.BACK,Me=!0);Me&&(t.isWebGL2?i.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function ke(P){return p!==P?(i.useProgram(P),p=P,!0):!1}const me={[Pr]:i.FUNC_ADD,[Sv]:i.FUNC_SUBTRACT,[Mv]:i.FUNC_REVERSE_SUBTRACT};if(n)me[Jh]=i.MIN,me[Qh]=i.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(me[Jh]=P.MIN_EXT,me[Qh]=P.MAX_EXT)}const Pe={[Ev]:i.ZERO,[bv]:i.ONE,[Tv]:i.SRC_COLOR,[su]:i.SRC_ALPHA,[Lv]:i.SRC_ALPHA_SATURATE,[Rv]:i.DST_COLOR,[Av]:i.DST_ALPHA,[wv]:i.ONE_MINUS_SRC_COLOR,[au]:i.ONE_MINUS_SRC_ALPHA,[Pv]:i.ONE_MINUS_DST_COLOR,[Cv]:i.ONE_MINUS_DST_ALPHA,[Dv]:i.CONSTANT_COLOR,[Iv]:i.ONE_MINUS_CONSTANT_COLOR,[Uv]:i.CONSTANT_ALPHA,[Ov]:i.ONE_MINUS_CONSTANT_ALPHA};function xe(P,oe,le,Me,Be,Ke,ot,Le,Ae,Ne){if(P===nr){g===!0&&(Fe(i.BLEND),g=!1);return}if(g===!1&&(de(i.BLEND),g=!0),P!==yv){if(P!==y||Ne!==A){if((v!==Pr||b!==Pr)&&(i.blendEquation(i.FUNC_ADD),v=Pr,b=Pr),Ne)switch(P){case Ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jh:i.blendFunc(i.ONE,i.ONE);break;case Kh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Kh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,w=null,M=null,D=null,I.set(0,0,0),x=0,y=P,A=Ne}return}Be=Be||oe,Ke=Ke||le,ot=ot||Me,(oe!==v||Be!==b)&&(i.blendEquationSeparate(me[oe],me[Be]),v=oe,b=Be),(le!==S||Me!==w||Ke!==M||ot!==D)&&(i.blendFuncSeparate(Pe[le],Pe[Me],Pe[Ke],Pe[ot]),S=le,w=Me,M=Ke,D=ot),(Le.equals(I)===!1||Ae!==x)&&(i.blendColor(Le.r,Le.g,Le.b,Ae),I.copy(Le),x=Ae),y=P,A=!1}function V(P,oe){P.side===Pi?Fe(i.CULL_FACE):de(i.CULL_FACE);let le=P.side===Tn;oe&&(le=!le),Oe(le),P.blending===Ls&&P.transparent===!1?xe(nr):xe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const Me=P.stencilWrite;c.setTest(Me),Me&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),z(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(P){U!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),U=P)}function C(P){P!==gv?(de(i.CULL_FACE),P!==Y&&(P===Yh?i.cullFace(i.BACK):P===vv?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),Y=P}function E(P){P!==L&&(W&&i.lineWidth(P),L=P)}function z(P,oe,le){P?(de(i.POLYGON_OFFSET_FILL),(N!==oe||O!==le)&&(i.polygonOffset(oe,le),N=oe,O=le)):Fe(i.POLYGON_OFFSET_FILL)}function ne(P){P?de(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}function ie(P){P===void 0&&(P=i.TEXTURE0+k-1),j!==P&&(i.activeTexture(P),j=P)}function ae(P,oe,le){le===void 0&&(j===null?le=i.TEXTURE0+k-1:le=j);let Me=re[le];Me===void 0&&(Me={type:void 0,texture:void 0},re[le]=Me),(Me.type!==P||Me.texture!==oe)&&(j!==le&&(i.activeTexture(le),j=le),i.bindTexture(P,oe||Se[P]),Me.type=P,Me.texture=oe)}function ee(){const P=re[j];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function te(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ie(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function We(P){J.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),J.copy(P))}function Ze(P){he.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),he.copy(P))}function st(P,oe){let le=d.get(oe);le===void 0&&(le=new WeakMap,d.set(oe,le));let Me=le.get(P);Me===void 0&&(Me=i.getUniformBlockIndex(oe,P.name),le.set(P,Me))}function ge(P,oe){const Me=d.get(oe).get(P);u.get(oe)!==Me&&(i.uniformBlockBinding(oe,Me,P.__bindingPointIndex),u.set(oe,Me))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},j=null,re={},f={},_=new WeakMap,m=[],p=null,g=!1,y=null,v=null,S=null,w=null,b=null,M=null,D=null,I=new ft(0,0,0),x=0,A=!1,U=null,Y=null,L=null,N=null,O=null,J.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:de,disable:Fe,bindFramebuffer:De,drawBuffers:B,useProgram:ke,setBlending:xe,setMaterial:V,setFlipSided:Oe,setCullFace:C,setLineWidth:E,setPolygonOffset:z,setScissorTest:ne,activeTexture:ie,bindTexture:ae,unbindTexture:ee,compressedTexImage2D:te,compressedTexImage3D:Z,texImage2D:Te,texImage3D:ye,updateUBOMapping:st,uniformBlockBinding:ge,texStorage2D:se,texStorage3D:Ie,texSubImage2D:ue,texSubImage3D:Re,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ee,scissor:We,viewport:Ze,reset:nt}}function _E(i,e,t,n,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,E){return f?new OffscreenCanvas(C,E):za("canvas")}function m(C,E,z,ne){let ie=1;if((C.width>ne||C.height>ne)&&(ie=ne/Math.max(C.width,C.height)),ie<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ae=E?du:Math.floor,ee=ae(ie*C.width),te=ae(ie*C.height);d===void 0&&(d=_(ee,te));const Z=z?_(ee,te):d;return Z.width=ee,Z.height=te,Z.getContext("2d").drawImage(C,0,0,ee,te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+ee+"x"+te+")."),Z}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function p(C){return Pf(C.width)&&Pf(C.height)}function g(C){return a?!1:C.wrapS!==si||C.wrapT!==si||C.minFilter!==pn&&C.minFilter!==tn}function y(C,E){return C.generateMipmaps&&E&&C.minFilter!==pn&&C.minFilter!==tn}function v(C){i.generateMipmap(C)}function S(C,E,z,ne,ie=!1){if(a===!1)return E;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ae=E;if(E===i.RED&&(z===i.FLOAT&&(ae=i.R32F),z===i.HALF_FLOAT&&(ae=i.R16F),z===i.UNSIGNED_BYTE&&(ae=i.R8)),E===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(ae=i.R8UI),z===i.UNSIGNED_SHORT&&(ae=i.R16UI),z===i.UNSIGNED_INT&&(ae=i.R32UI),z===i.BYTE&&(ae=i.R8I),z===i.SHORT&&(ae=i.R16I),z===i.INT&&(ae=i.R32I)),E===i.RG&&(z===i.FLOAT&&(ae=i.RG32F),z===i.HALF_FLOAT&&(ae=i.RG16F),z===i.UNSIGNED_BYTE&&(ae=i.RG8)),E===i.RGBA){const ee=ie?ol:ht.getTransfer(ne);z===i.FLOAT&&(ae=i.RGBA32F),z===i.HALF_FLOAT&&(ae=i.RGBA16F),z===i.UNSIGNED_BYTE&&(ae=ee===xt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(ae=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(ae=i.RGB5_A1)}return(ae===i.R16F||ae===i.R32F||ae===i.RG16F||ae===i.RG32F||ae===i.RGBA16F||ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function w(C,E,z){return y(C,z)===!0||C.isFramebufferTexture&&C.minFilter!==pn&&C.minFilter!==tn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function b(C){return C===pn||C===ef||C===oa?i.NEAREST:i.LINEAR}function M(C){const E=C.target;E.removeEventListener("dispose",M),I(E),E.isVideoTexture&&u.delete(E)}function D(C){const E=C.target;E.removeEventListener("dispose",D),A(E)}function I(C){const E=n.get(C);if(E.__webglInit===void 0)return;const z=C.source,ne=h.get(z);if(ne){const ie=ne[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&x(C),Object.keys(ne).length===0&&h.delete(z)}n.remove(C)}function x(C){const E=n.get(C);i.deleteTexture(E.__webglTexture);const z=C.source,ne=h.get(z);delete ne[E.__cacheKey],o.memory.textures--}function A(C){const E=C.texture,z=n.get(C),ne=n.get(E);if(ne.__webglTexture!==void 0&&(i.deleteTexture(ne.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(z.__webglFramebuffer[ie]))for(let ae=0;ae<z.__webglFramebuffer[ie].length;ae++)i.deleteFramebuffer(z.__webglFramebuffer[ie][ae]);else i.deleteFramebuffer(z.__webglFramebuffer[ie]);z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer[ie])}else{if(Array.isArray(z.__webglFramebuffer))for(let ie=0;ie<z.__webglFramebuffer.length;ie++)i.deleteFramebuffer(z.__webglFramebuffer[ie]);else i.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let ie=0;ie<z.__webglColorRenderbuffer.length;ie++)z.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(z.__webglColorRenderbuffer[ie]);z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ie=0,ae=E.length;ie<ae;ie++){const ee=n.get(E[ie]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(E[ie])}n.remove(E),n.remove(C)}let U=0;function Y(){U=0}function L(){const C=U;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),U+=1,C}function N(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function O(C,E){const z=n.get(C);if(C.isVideoTexture&&V(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){const ne=C.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(z,C,E);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+E)}function k(C,E){const z=n.get(C);if(C.version>0&&z.__version!==C.version){J(z,C,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+E)}function W(C,E){const z=n.get(C);if(C.version>0&&z.__version!==C.version){J(z,C,E);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+E)}function q(C,E){const z=n.get(C);if(C.version>0&&z.__version!==C.version){he(z,C,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+E)}const R={[cu]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[uu]:i.MIRRORED_REPEAT},j={[pn]:i.NEAREST,[ef]:i.NEAREST_MIPMAP_NEAREST,[oa]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[Yl]:i.LINEAR_MIPMAP_NEAREST,[Ir]:i.LINEAR_MIPMAP_LINEAR},re={[l0]:i.NEVER,[p0]:i.ALWAYS,[c0]:i.LESS,[cm]:i.LEQUAL,[u0]:i.EQUAL,[d0]:i.GEQUAL,[h0]:i.GREATER,[f0]:i.NOTEQUAL};function ve(C,E,z){if(E.type===Li&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===tn||E.magFilter===Yl||E.magFilter===oa||E.magFilter===Ir||E.minFilter===tn||E.minFilter===Yl||E.minFilter===oa||E.minFilter===Ir)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),z?(i.texParameteri(C,i.TEXTURE_WRAP_S,R[E.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,R[E.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,R[E.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,j[E.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,j[E.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==si||E.wrapT!==si)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,b(E.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,b(E.minFilter)),E.minFilter!==pn&&E.minFilter!==tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,re[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===pn||E.minFilter!==oa&&E.minFilter!==Ir||E.type===Li&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Ba&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(C,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function H(C,E){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",M));const ne=E.source;let ie=h.get(ne);ie===void 0&&(ie={},h.set(ne,ie));const ae=N(E);if(ae!==C.__cacheKey){ie[ae]===void 0&&(ie[ae]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ie[ae].usedTimes++;const ee=ie[C.__cacheKey];ee!==void 0&&(ie[C.__cacheKey].usedTimes--,ee.usedTimes===0&&x(E)),C.__cacheKey=ae,C.__webglTexture=ie[ae].texture}return z}function J(C,E,z){let ne=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ne=i.TEXTURE_3D);const ie=H(C,E),ae=E.source;t.bindTexture(ne,C.__webglTexture,i.TEXTURE0+z);const ee=n.get(ae);if(ae.version!==ee.__version||ie===!0){t.activeTexture(i.TEXTURE0+z);const te=ht.getPrimaries(ht.workingColorSpace),Z=E.colorSpace===jn?null:ht.getPrimaries(E.colorSpace),ue=E.colorSpace===jn||te===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Re=g(E)&&p(E.image)===!1;let Q=m(E.image,Re,!1,r.maxTextureSize);Q=Oe(E,Q);const Ee=p(Q)||a,se=s.convert(E.format,E.colorSpace);let Ie=s.convert(E.type),Te=S(E.internalFormat,se,Ie,E.colorSpace,E.isVideoTexture);ve(ne,E,Ee);let ye;const We=E.mipmaps,Ze=a&&E.isVideoTexture!==!0&&Te!==am,st=ee.__version===void 0||ie===!0,ge=ae.dataReady,nt=w(E,Q,Ee);if(E.isDepthTexture)Te=i.DEPTH_COMPONENT,a?E.type===Li?Te=i.DEPTH_COMPONENT32F:E.type===Ki?Te=i.DEPTH_COMPONENT24:E.type===Br?Te=i.DEPTH24_STENCIL8:Te=i.DEPTH_COMPONENT16:E.type===Li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===zr&&Te===i.DEPTH_COMPONENT&&E.type!==Zu&&E.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Ki,Ie=s.convert(E.type)),E.format===Vs&&Te===i.DEPTH_COMPONENT&&(Te=i.DEPTH_STENCIL,E.type!==Br&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Br,Ie=s.convert(E.type))),st&&(Ze?t.texStorage2D(i.TEXTURE_2D,1,Te,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Te,Q.width,Q.height,0,se,Ie,null));else if(E.isDataTexture)if(We.length>0&&Ee){Ze&&st&&t.texStorage2D(i.TEXTURE_2D,nt,Te,We[0].width,We[0].height);for(let P=0,oe=We.length;P<oe;P++)ye=We[P],Ze?ge&&t.texSubImage2D(i.TEXTURE_2D,P,0,0,ye.width,ye.height,se,Ie,ye.data):t.texImage2D(i.TEXTURE_2D,P,Te,ye.width,ye.height,0,se,Ie,ye.data);E.generateMipmaps=!1}else Ze?(st&&t.texStorage2D(i.TEXTURE_2D,nt,Te,Q.width,Q.height),ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,se,Ie,Q.data)):t.texImage2D(i.TEXTURE_2D,0,Te,Q.width,Q.height,0,se,Ie,Q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ze&&st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,nt,Te,We[0].width,We[0].height,Q.depth);for(let P=0,oe=We.length;P<oe;P++)ye=We[P],E.format!==ai?se!==null?Ze?ge&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,P,0,0,0,ye.width,ye.height,Q.depth,se,ye.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,P,Te,ye.width,ye.height,Q.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,P,0,0,0,ye.width,ye.height,Q.depth,se,Ie,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,P,Te,ye.width,ye.height,Q.depth,0,se,Ie,ye.data)}else{Ze&&st&&t.texStorage2D(i.TEXTURE_2D,nt,Te,We[0].width,We[0].height);for(let P=0,oe=We.length;P<oe;P++)ye=We[P],E.format!==ai?se!==null?Ze?ge&&t.compressedTexSubImage2D(i.TEXTURE_2D,P,0,0,ye.width,ye.height,se,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,P,Te,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?ge&&t.texSubImage2D(i.TEXTURE_2D,P,0,0,ye.width,ye.height,se,Ie,ye.data):t.texImage2D(i.TEXTURE_2D,P,Te,ye.width,ye.height,0,se,Ie,ye.data)}else if(E.isDataArrayTexture)Ze?(st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,nt,Te,Q.width,Q.height,Q.depth),ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,se,Ie,Q.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,Q.width,Q.height,Q.depth,0,se,Ie,Q.data);else if(E.isData3DTexture)Ze?(st&&t.texStorage3D(i.TEXTURE_3D,nt,Te,Q.width,Q.height,Q.depth),ge&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,se,Ie,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Te,Q.width,Q.height,Q.depth,0,se,Ie,Q.data);else if(E.isFramebufferTexture){if(st)if(Ze)t.texStorage2D(i.TEXTURE_2D,nt,Te,Q.width,Q.height);else{let P=Q.width,oe=Q.height;for(let le=0;le<nt;le++)t.texImage2D(i.TEXTURE_2D,le,Te,P,oe,0,se,Ie,null),P>>=1,oe>>=1}}else if(We.length>0&&Ee){Ze&&st&&t.texStorage2D(i.TEXTURE_2D,nt,Te,We[0].width,We[0].height);for(let P=0,oe=We.length;P<oe;P++)ye=We[P],Ze?ge&&t.texSubImage2D(i.TEXTURE_2D,P,0,0,se,Ie,ye):t.texImage2D(i.TEXTURE_2D,P,Te,se,Ie,ye);E.generateMipmaps=!1}else Ze?(st&&t.texStorage2D(i.TEXTURE_2D,nt,Te,Q.width,Q.height),ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se,Ie,Q)):t.texImage2D(i.TEXTURE_2D,0,Te,se,Ie,Q);y(E,Ee)&&v(ne),ee.__version=ae.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function he(C,E,z){if(E.image.length!==6)return;const ne=H(C,E),ie=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+z);const ae=n.get(ie);if(ie.version!==ae.__version||ne===!0){t.activeTexture(i.TEXTURE0+z);const ee=ht.getPrimaries(ht.workingColorSpace),te=E.colorSpace===jn?null:ht.getPrimaries(E.colorSpace),Z=E.colorSpace===jn||ee===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const ue=E.isCompressedTexture||E.image[0].isCompressedTexture,Re=E.image[0]&&E.image[0].isDataTexture,Q=[];for(let P=0;P<6;P++)!ue&&!Re?Q[P]=m(E.image[P],!1,!0,r.maxCubemapSize):Q[P]=Re?E.image[P].image:E.image[P],Q[P]=Oe(E,Q[P]);const Ee=Q[0],se=p(Ee)||a,Ie=s.convert(E.format,E.colorSpace),Te=s.convert(E.type),ye=S(E.internalFormat,Ie,Te,E.colorSpace),We=a&&E.isVideoTexture!==!0,Ze=ae.__version===void 0||ne===!0,st=ie.dataReady;let ge=w(E,Ee,se);ve(i.TEXTURE_CUBE_MAP,E,se);let nt;if(ue){We&&Ze&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,ye,Ee.width,Ee.height);for(let P=0;P<6;P++){nt=Q[P].mipmaps;for(let oe=0;oe<nt.length;oe++){const le=nt[oe];E.format!==ai?Ie!==null?We?st&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,oe,0,0,le.width,le.height,Ie,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,oe,ye,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?st&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,oe,0,0,le.width,le.height,Ie,Te,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,oe,ye,le.width,le.height,0,Ie,Te,le.data)}}}else{nt=E.mipmaps,We&&Ze&&(nt.length>0&&ge++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,ye,Q[0].width,Q[0].height));for(let P=0;P<6;P++)if(Re){We?st&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,Q[P].width,Q[P].height,Ie,Te,Q[P].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,ye,Q[P].width,Q[P].height,0,Ie,Te,Q[P].data);for(let oe=0;oe<nt.length;oe++){const Me=nt[oe].image[P].image;We?st&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,oe+1,0,0,Me.width,Me.height,Ie,Te,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,oe+1,ye,Me.width,Me.height,0,Ie,Te,Me.data)}}else{We?st&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,Ie,Te,Q[P]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,ye,Ie,Te,Q[P]);for(let oe=0;oe<nt.length;oe++){const le=nt[oe];We?st&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,oe+1,0,0,Ie,Te,le.image[P]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,oe+1,ye,Ie,Te,le.image[P])}}}y(E,se)&&v(i.TEXTURE_CUBE_MAP),ae.__version=ie.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function _e(C,E,z,ne,ie,ae){const ee=s.convert(z.format,z.colorSpace),te=s.convert(z.type),Z=S(z.internalFormat,ee,te,z.colorSpace);if(!n.get(E).__hasExternalTextures){const Re=Math.max(1,E.width>>ae),Q=Math.max(1,E.height>>ae);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,ae,Z,Re,Q,E.depth,0,ee,te,null):t.texImage2D(ie,ae,Z,Re,Q,0,ee,te,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),xe(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,ie,n.get(z).__webglTexture,0,Pe(E)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,ie,n.get(z).__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(C,E,z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let ne=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(z||xe(E)){const ie=E.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Li?ne=i.DEPTH_COMPONENT32F:ie.type===Ki&&(ne=i.DEPTH_COMPONENT24));const ae=Pe(E);xe(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,ne,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,ne,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,ne,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){const ne=Pe(E);z&&xe(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,E.width,E.height):xe(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{const ne=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ie=0;ie<ne.length;ie++){const ae=ne[ie],ee=s.convert(ae.format,ae.colorSpace),te=s.convert(ae.type),Z=S(ae.internalFormat,ee,te,ae.colorSpace),ue=Pe(E);z&&xe(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,Z,E.width,E.height):xe(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,Z,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Z,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function de(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),O(E.depthTexture,0);const ne=n.get(E.depthTexture).__webglTexture,ie=Pe(E);if(E.depthTexture.format===zr)xe(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(E.depthTexture.format===Vs)xe(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Fe(C){const E=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");de(E.__webglFramebuffer,C)}else if(z){E.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ne]),E.__webglDepthbuffer[ne]=i.createRenderbuffer(),Se(E.__webglDepthbuffer[ne],C,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),Se(E.__webglDepthbuffer,C,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(C,E,z){const ne=n.get(C);E!==void 0&&_e(ne.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Fe(C)}function B(C){const E=C.texture,z=n.get(C),ne=n.get(E);C.addEventListener("dispose",D),C.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=E.version,o.memory.textures++);const ie=C.isWebGLCubeRenderTarget===!0,ae=C.isWebGLMultipleRenderTargets===!0,ee=p(C)||a;if(ie){z.__webglFramebuffer=[];for(let te=0;te<6;te++)if(a&&E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[te]=[];for(let Z=0;Z<E.mipmaps.length;Z++)z.__webglFramebuffer[te][Z]=i.createFramebuffer()}else z.__webglFramebuffer[te]=i.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let te=0;te<E.mipmaps.length;te++)z.__webglFramebuffer[te]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ae)if(r.drawBuffers){const te=C.texture;for(let Z=0,ue=te.length;Z<ue;Z++){const Re=n.get(te[Z]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&xe(C)===!1){const te=ae?E:[E];z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Z=0;Z<te.length;Z++){const ue=te[Z];z.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[Z]);const Re=s.convert(ue.format,ue.colorSpace),Q=s.convert(ue.type),Ee=S(ue.internalFormat,Re,Q,ue.colorSpace,C.isXRRenderTarget===!0),se=Pe(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,se,Ee,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,z.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Se(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),ve(i.TEXTURE_CUBE_MAP,E,ee);for(let te=0;te<6;te++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let Z=0;Z<E.mipmaps.length;Z++)_e(z.__webglFramebuffer[te][Z],C,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Z);else _e(z.__webglFramebuffer[te],C,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);y(E,ee)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){const te=C.texture;for(let Z=0,ue=te.length;Z<ue;Z++){const Re=te[Z],Q=n.get(Re);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),ve(i.TEXTURE_2D,Re,ee),_e(z.__webglFramebuffer,C,Re,i.COLOR_ATTACHMENT0+Z,i.TEXTURE_2D,0),y(Re,ee)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let te=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?te=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(te,ne.__webglTexture),ve(te,E,ee),a&&E.mipmaps&&E.mipmaps.length>0)for(let Z=0;Z<E.mipmaps.length;Z++)_e(z.__webglFramebuffer[Z],C,E,i.COLOR_ATTACHMENT0,te,Z);else _e(z.__webglFramebuffer,C,E,i.COLOR_ATTACHMENT0,te,0);y(E,ee)&&v(te),t.unbindTexture()}C.depthBuffer&&Fe(C)}function ke(C){const E=p(C)||a,z=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ne=0,ie=z.length;ne<ie;ne++){const ae=z[ne];if(y(ae,E)){const ee=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,te=n.get(ae).__webglTexture;t.bindTexture(ee,te),v(ee),t.unbindTexture()}}}function me(C){if(a&&C.samples>0&&xe(C)===!1){const E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],z=C.width,ne=C.height;let ie=i.COLOR_BUFFER_BIT;const ae=[],ee=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=n.get(C),Z=C.isWebGLMultipleRenderTargets===!0;if(Z)for(let ue=0;ue<E.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let ue=0;ue<E.length;ue++){ae.push(i.COLOR_ATTACHMENT0+ue),C.depthBuffer&&ae.push(ee);const Re=te.__ignoreDepthValues!==void 0?te.__ignoreDepthValues:!1;if(Re===!1&&(C.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),Z&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,te.__webglColorRenderbuffer[ue]),Re===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ee]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ee])),Z){const Q=n.get(E[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,z,ne,0,0,z,ne,ie,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ae)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let ue=0;ue<E.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,te.__webglColorRenderbuffer[ue]);const Re=n.get(E[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,Re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}}function Pe(C){return Math.min(r.maxSamples,C.samples)}function xe(C){const E=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function V(C){const E=o.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function Oe(C,E){const z=C.colorSpace,ne=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===hu||z!==Ni&&z!==jn&&(ht.getTransfer(z)===xt?a===!1?e.has("EXT_sRGB")===!0&&ne===ai?(C.format=hu,C.minFilter=tn,C.generateMipmaps=!1):E=hm.sRGBToLinear(E):(ne!==ai||ie!==rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),E}this.allocateTextureUnit=L,this.resetTextureUnits=Y,this.setTexture2D=O,this.setTexture2DArray=k,this.setTexture3D=W,this.setTextureCube=q,this.rebindTextures=De,this.setupRenderTarget=B,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=xe}function gE(i,e,t){const n=t.isWebGL2;function r(s,o=jn){let a;const l=ht.getTransfer(o);if(s===rr)return i.UNSIGNED_BYTE;if(s===tm)return i.UNSIGNED_SHORT_4_4_4_4;if(s===nm)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Zv)return i.BYTE;if(s===Jv)return i.SHORT;if(s===Zu)return i.UNSIGNED_SHORT;if(s===em)return i.INT;if(s===Ki)return i.UNSIGNED_INT;if(s===Li)return i.FLOAT;if(s===Ba)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Qv)return i.ALPHA;if(s===ai)return i.RGBA;if(s===e0)return i.LUMINANCE;if(s===t0)return i.LUMINANCE_ALPHA;if(s===zr)return i.DEPTH_COMPONENT;if(s===Vs)return i.DEPTH_STENCIL;if(s===hu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===n0)return i.RED;if(s===im)return i.RED_INTEGER;if(s===i0)return i.RG;if(s===rm)return i.RG_INTEGER;if(s===sm)return i.RGBA_INTEGER;if(s===jl||s===Kl||s===Zl||s===Jl)if(l===xt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===jl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Kl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Jl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===jl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Kl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Jl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===tf||s===nf||s===rf||s===sf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===tf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===nf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===rf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===sf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===am)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===af||s===of)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===af)return l===xt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===of)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===lf||s===cf||s===uf||s===hf||s===ff||s===df||s===pf||s===mf||s===_f||s===gf||s===vf||s===xf||s===yf||s===Sf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===lf)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===cf)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===uf)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===hf)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ff)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===df)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===pf)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===mf)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===_f)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===gf)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===vf)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xf)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===yf)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Sf)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ql||s===Mf||s===Ef)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ql)return l===xt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Mf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ef)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===r0||s===bf||s===Tf||s===wf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ql)return a.COMPRESSED_RED_RGTC1_EXT;if(s===bf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Tf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Br?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class vE extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ao extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xE={type:"move"};class bc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ao,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ao,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ao,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,n),g=this._getHandJoint(c,m);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&h>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ao;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const yE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ME{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new xn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new Fi({extensions:{fragDepth:!0},vertexShader:yE,fragmentShader:SE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new oi(new Qa(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class EE extends Zs{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,_=null;const m=new ME,p=t.getContextAttributes();let g=null,y=null;const v=[],S=[],w=new at;let b=null;const M=new $n;M.layers.enable(1),M.viewport=new Yt;const D=new $n;D.layers.enable(2),D.viewport=new Yt;const I=[M,D],x=new vE;x.layers.enable(1),x.layers.enable(2);let A=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let J=v[H];return J===void 0&&(J=new bc,v[H]=J),J.getTargetRaySpace()},this.getControllerGrip=function(H){let J=v[H];return J===void 0&&(J=new bc,v[H]=J),J.getGripSpace()},this.getHand=function(H){let J=v[H];return J===void 0&&(J=new bc,v[H]=J),J.getHandSpace()};function Y(H){const J=S.indexOf(H.inputSource);if(J===-1)return;const he=v[J];he!==void 0&&(he.update(H.inputSource,H.frame,c||o),he.dispatchEvent({type:H.type,data:H.inputSource}))}function L(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",N);for(let H=0;H<v.length;H++){const J=S[H];J!==null&&(S[H]=null,v[H].disconnect(J))}A=null,U=null,m.reset(),e.setRenderTarget(g),f=null,h=null,d=null,r=null,y=null,ve.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",L),r.addEventListener("inputsourceschange",N),p.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new jr(f.framebufferWidth,f.framebufferHeight,{format:ai,type:rr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let J=null,he=null,_e=null;p.depth&&(_e=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=p.stencil?Vs:zr,he=p.stencil?Br:Ki);const Se={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(Se),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new jr(h.textureWidth,h.textureHeight,{format:ai,type:rr,depthTexture:new bm(h.textureWidth,h.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const de=e.properties.get(y);de.__ignoreDepthValues=h.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ve.setContext(r),ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function N(H){for(let J=0;J<H.removed.length;J++){const he=H.removed[J],_e=S.indexOf(he);_e>=0&&(S[_e]=null,v[_e].disconnect(he))}for(let J=0;J<H.added.length;J++){const he=H.added[J];let _e=S.indexOf(he);if(_e===-1){for(let de=0;de<v.length;de++)if(de>=S.length){S.push(he),_e=de;break}else if(S[de]===null){S[de]=he,_e=de;break}if(_e===-1)break}const Se=v[_e];Se&&Se.connect(he)}}const O=new K,k=new K;function W(H,J,he){O.setFromMatrixPosition(J.matrixWorld),k.setFromMatrixPosition(he.matrixWorld);const _e=O.distanceTo(k),Se=J.projectionMatrix.elements,de=he.projectionMatrix.elements,Fe=Se[14]/(Se[10]-1),De=Se[14]/(Se[10]+1),B=(Se[9]+1)/Se[5],ke=(Se[9]-1)/Se[5],me=(Se[8]-1)/Se[0],Pe=(de[8]+1)/de[0],xe=Fe*me,V=Fe*Pe,Oe=_e/(-me+Pe),C=Oe*-me;J.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(C),H.translateZ(Oe),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const E=Fe+Oe,z=De+Oe,ne=xe-C,ie=V+(_e-C),ae=B*De/z*E,ee=ke*De/z*E;H.projectionMatrix.makePerspective(ne,ie,ae,ee,E,z),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function q(H,J){J===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(J.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;m.texture!==null&&(H.near=m.depthNear,H.far=m.depthFar),x.near=D.near=M.near=H.near,x.far=D.far=M.far=H.far,(A!==x.near||U!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,U=x.far,M.near=A,M.far=U,D.near=A,D.far=U,M.updateProjectionMatrix(),D.updateProjectionMatrix(),H.updateProjectionMatrix());const J=H.parent,he=x.cameras;q(x,J);for(let _e=0;_e<he.length;_e++)q(he[_e],J);he.length===2?W(x,M,D):x.projectionMatrix.copy(M.projectionMatrix),R(H,x,J)};function R(H,J,he){he===null?H.matrix.copy(J.matrixWorld):(H.matrix.copy(he.matrixWorld),H.matrix.invert(),H.matrix.multiply(J.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(J.projectionMatrix),H.projectionMatrixInverse.copy(J.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=fu*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null};let j=null;function re(H,J){if(u=J.getViewerPose(c||o),_=J,u!==null){const he=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let _e=!1;he.length!==x.cameras.length&&(x.cameras.length=0,_e=!0);for(let de=0;de<he.length;de++){const Fe=he[de];let De=null;if(f!==null)De=f.getViewport(Fe);else{const ke=d.getViewSubImage(h,Fe);De=ke.viewport,de===0&&(e.setRenderTargetTextures(y,ke.colorTexture,h.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(y))}let B=I[de];B===void 0&&(B=new $n,B.layers.enable(de),B.viewport=new Yt,I[de]=B),B.matrix.fromArray(Fe.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(Fe.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(De.x,De.y,De.width,De.height),de===0&&(x.matrix.copy(B.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),_e===!0&&x.cameras.push(B)}const Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")){const de=d.getDepthInformation(he[0]);de&&de.isValid&&de.texture&&m.init(e,de,r.renderState)}}for(let he=0;he<v.length;he++){const _e=S[he],Se=v[he];_e!==null&&Se!==void 0&&Se.update(_e,J,c||o)}m.render(e,x),j&&j(H,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),_=null}const ve=new Em;ve.setAnimationLoop(re),this.setAnimationLoop=function(H){j=H},this.dispose=function(){}}}function bE(i,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,xm(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function r(p,g,y,v,S){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(p,g):g.isMeshToonMaterial?(s(p,g),d(p,g)):g.isMeshPhongMaterial?(s(p,g),u(p,g)):g.isMeshStandardMaterial?(s(p,g),h(p,g),g.isMeshPhysicalMaterial&&f(p,g,S)):g.isMeshMatcapMaterial?(s(p,g),_(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),m(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,y,v):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Tn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Tn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const y=e.get(g).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap){p.lightMap.value=g.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=g.lightMapIntensity*v,t(g.lightMap,p.lightMapTransform)}g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,y,v){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*y,p.scale.value=v*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function h(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),e.get(g).envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,y){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Tn&&p.clearcoatNormalScale.value.negate())),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,g){g.matcap&&(p.matcap.value=g.matcap)}function m(p,g){const y=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function TE(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const S=v.program;n.uniformBlockBinding(y,S)}function c(y,v){let S=r[y.id];S===void 0&&(_(y),S=u(y),r[y.id]=S,y.addEventListener("dispose",p));const w=v.program;n.updateUBOMapping(y,w);const b=e.render.frame;s[y.id]!==b&&(h(y),s[y.id]=b)}function u(y){const v=d();y.__bindingPointIndex=v;const S=i.createBuffer(),w=y.__size,b=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,w,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const v=r[y.id],S=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let b=0,M=S.length;b<M;b++){const D=Array.isArray(S[b])?S[b]:[S[b]];for(let I=0,x=D.length;I<x;I++){const A=D[I];if(f(A,b,I,w)===!0){const U=A.__offset,Y=Array.isArray(A.value)?A.value:[A.value];let L=0;for(let N=0;N<Y.length;N++){const O=Y[N],k=m(O);typeof O=="number"||typeof O=="boolean"?(A.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,U+L,A.__data)):O.isMatrix3?(A.__data[0]=O.elements[0],A.__data[1]=O.elements[1],A.__data[2]=O.elements[2],A.__data[3]=0,A.__data[4]=O.elements[3],A.__data[5]=O.elements[4],A.__data[6]=O.elements[5],A.__data[7]=0,A.__data[8]=O.elements[6],A.__data[9]=O.elements[7],A.__data[10]=O.elements[8],A.__data[11]=0):(O.toArray(A.__data,L),L+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,v,S,w){const b=y.value,M=v+"_"+S;if(w[M]===void 0)return typeof b=="number"||typeof b=="boolean"?w[M]=b:w[M]=b.clone(),!0;{const D=w[M];if(typeof b=="number"||typeof b=="boolean"){if(D!==b)return w[M]=b,!0}else if(D.equals(b)===!1)return D.copy(b),!0}return!1}function _(y){const v=y.uniforms;let S=0;const w=16;for(let M=0,D=v.length;M<D;M++){const I=Array.isArray(v[M])?v[M]:[v[M]];for(let x=0,A=I.length;x<A;x++){const U=I[x],Y=Array.isArray(U.value)?U.value:[U.value];for(let L=0,N=Y.length;L<N;L++){const O=Y[L],k=m(O),W=S%w;W!==0&&w-W<k.boundary&&(S+=w-W),U.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=k.storage}}}const b=S%w;return b>0&&(S+=w-b),y.__size=S,y.__cache={},this}function m(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function g(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:g}}class Pm{constructor(e={}){const{canvas:t=_0(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;const f=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const g=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qt,this._useLegacyLights=!1,this.toneMapping=ir,this.toneMappingExposure=1;const v=this;let S=!1,w=0,b=0,M=null,D=-1,I=null;const x=new Yt,A=new Yt;let U=null;const Y=new ft(0);let L=0,N=t.width,O=t.height,k=1,W=null,q=null;const R=new Yt(0,0,N,O),j=new Yt(0,0,N,O);let re=!1;const ve=new Mm;let H=!1,J=!1,he=null;const _e=new Kt,Se=new at,de=new K,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return M===null?k:1}let B=n;function ke(T,F){for(let $=0;$<T.length;$++){const X=T[$],G=t.getContext(X,F);if(G!==null)return G}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ku}`),t.addEventListener("webglcontextlost",nt,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",oe,!1),B===null){const F=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&F.shift(),B=ke(F,T),B===null)throw ke(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let me,Pe,xe,V,Oe,C,E,z,ne,ie,ae,ee,te,Z,ue,Re,Q,Ee,se,Ie,Te,ye,We,Ze;function st(){me=new DS(B),Pe=new TS(B,me,e),me.init(Pe),ye=new gE(B,me,Pe),xe=new mE(B,me,Pe),V=new OS(B),Oe=new tE,C=new _E(B,me,xe,Oe,Pe,ye,V),E=new AS(v),z=new LS(v),ne=new H0(B,Pe),We=new ES(B,me,ne,Pe),ie=new IS(B,ne,V,We),ae=new zS(B,ie,ne,V),se=new BS(B,Pe,C),Re=new wS(Oe),ee=new eE(v,E,z,me,Pe,We,Re),te=new bE(v,Oe),Z=new iE,ue=new cE(me,Pe),Ee=new MS(v,E,z,xe,ae,h,l),Q=new pE(v,ae,Pe),Ze=new TE(B,V,Pe,xe),Ie=new bS(B,me,V,Pe),Te=new US(B,me,V,Pe),V.programs=ee.programs,v.capabilities=Pe,v.extensions=me,v.properties=Oe,v.renderLists=Z,v.shadowMap=Q,v.state=xe,v.info=V}st();const ge=new EE(v,B);this.xr=ge,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=me.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=me.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(T){T!==void 0&&(k=T,this.setSize(N,O,!1))},this.getSize=function(T){return T.set(N,O)},this.setSize=function(T,F,$=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=T,O=F,t.width=Math.floor(T*k),t.height=Math.floor(F*k),$===!0&&(t.style.width=T+"px",t.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(N*k,O*k).floor()},this.setDrawingBufferSize=function(T,F,$){N=T,O=F,k=$,t.width=Math.floor(T*$),t.height=Math.floor(F*$),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(R)},this.setViewport=function(T,F,$,X){T.isVector4?R.set(T.x,T.y,T.z,T.w):R.set(T,F,$,X),xe.viewport(x.copy(R).multiplyScalar(k).floor())},this.getScissor=function(T){return T.copy(j)},this.setScissor=function(T,F,$,X){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,F,$,X),xe.scissor(A.copy(j).multiplyScalar(k).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(T){xe.setScissorTest(re=T)},this.setOpaqueSort=function(T){W=T},this.setTransparentSort=function(T){q=T},this.getClearColor=function(T){return T.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(T=!0,F=!0,$=!0){let X=0;if(T){let G=!1;if(M!==null){const fe=M.texture.format;G=fe===sm||fe===rm||fe===im}if(G){const fe=M.texture.type,we=fe===rr||fe===Ki||fe===Zu||fe===Br||fe===tm||fe===nm,He=Ee.getClearColor(),Ce=Ee.getClearAlpha(),Ue=He.r,Ve=He.g,$e=He.b;we?(f[0]=Ue,f[1]=Ve,f[2]=$e,f[3]=Ce,B.clearBufferuiv(B.COLOR,0,f)):(_[0]=Ue,_[1]=Ve,_[2]=$e,_[3]=Ce,B.clearBufferiv(B.COLOR,0,_))}else X|=B.COLOR_BUFFER_BIT}F&&(X|=B.DEPTH_BUFFER_BIT),$&&(X|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",nt,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),Z.dispose(),ue.dispose(),Oe.dispose(),E.dispose(),z.dispose(),ae.dispose(),We.dispose(),Ze.dispose(),ee.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",Ae),ge.removeEventListener("sessionend",Ne),he&&(he.dispose(),he=null),ce.stop()};function nt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=V.autoReset,F=Q.enabled,$=Q.autoUpdate,X=Q.needsUpdate,G=Q.type;st(),V.autoReset=T,Q.enabled=F,Q.autoUpdate=$,Q.needsUpdate=X,Q.type=G}function oe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function le(T){const F=T.target;F.removeEventListener("dispose",le),Me(F)}function Me(T){Be(T),Oe.remove(T)}function Be(T){const F=Oe.get(T).programs;F!==void 0&&(F.forEach(function($){ee.releaseProgram($)}),T.isShaderMaterial&&ee.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,$,X,G,fe){F===null&&(F=Fe);const we=G.isMesh&&G.matrixWorld.determinant()<0,He=_t(T,F,$,X,G);xe.setMaterial(X,we);let Ce=$.index,Ue=1;if(X.wireframe===!0){if(Ce=ie.getWireframeAttribute($),Ce===void 0)return;Ue=2}const Ve=$.drawRange,$e=$.attributes.position;let Mt=Ve.start*Ue,Nt=(Ve.start+Ve.count)*Ue;fe!==null&&(Mt=Math.max(Mt,fe.start*Ue),Nt=Math.min(Nt,(fe.start+fe.count)*Ue)),Ce!==null?(Mt=Math.max(Mt,0),Nt=Math.min(Nt,Ce.count)):$e!=null&&(Mt=Math.max(Mt,0),Nt=Math.min(Nt,$e.count));const ct=Nt-Mt;if(ct<0||ct===1/0)return;We.setup(G,X,He,$,Ce);let on,ut=Ie;if(Ce!==null&&(on=ne.get(Ce),ut=Te,ut.setIndex(on)),G.isMesh)X.wireframe===!0?(xe.setLineWidth(X.wireframeLinewidth*De()),ut.setMode(B.LINES)):ut.setMode(B.TRIANGLES);else if(G.isLine){let qe=X.linewidth;qe===void 0&&(qe=1),xe.setLineWidth(qe*De()),G.isLineSegments?ut.setMode(B.LINES):G.isLineLoop?ut.setMode(B.LINE_LOOP):ut.setMode(B.LINE_STRIP)}else G.isPoints?ut.setMode(B.POINTS):G.isSprite&&ut.setMode(B.TRIANGLES);if(G.isBatchedMesh)ut.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)ut.renderInstances(Mt,ct,G.count);else if($.isInstancedBufferGeometry){const qe=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Wl=Math.min($.instanceCount,qe);ut.renderInstances(Mt,ct,Wl)}else ut.render(Mt,ct)};function Ke(T,F,$){T.transparent===!0&&T.side===Pi&&T.forceSinglePass===!1?(T.side=Tn,T.needsUpdate=!0,mt(T,F,$),T.side=lr,T.needsUpdate=!0,mt(T,F,$),T.side=Pi):mt(T,F,$)}this.compile=function(T,F,$=null){$===null&&($=T),p=ue.get($),p.init(),y.push(p),$.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),T!==$&&T.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights(v._useLegacyLights);const X=new Set;return T.traverse(function(G){const fe=G.material;if(fe)if(Array.isArray(fe))for(let we=0;we<fe.length;we++){const He=fe[we];Ke(He,$,G),X.add(He)}else Ke(fe,$,G),X.add(fe)}),y.pop(),p=null,X},this.compileAsync=function(T,F,$=null){const X=this.compile(T,F,$);return new Promise(G=>{function fe(){if(X.forEach(function(we){Oe.get(we).currentProgram.isReady()&&X.delete(we)}),X.size===0){G(T);return}setTimeout(fe,10)}me.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let ot=null;function Le(T){ot&&ot(T)}function Ae(){ce.stop()}function Ne(){ce.start()}const ce=new Em;ce.setAnimationLoop(Le),typeof self<"u"&&ce.setContext(self),this.setAnimationLoop=function(T){ot=T,ge.setAnimationLoop(T),T===null?ce.stop():ce.start()},ge.addEventListener("sessionstart",Ae),ge.addEventListener("sessionend",Ne),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(F),F=ge.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,F,M),p=ue.get(T,y.length),p.init(),y.push(p),_e.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ve.setFromProjectionMatrix(_e),J=this.localClippingEnabled,H=Re.init(this.clippingPlanes,J),m=Z.get(T,g.length),m.init(),g.push(m),Ge(T,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(W,q),this.info.render.frame++,H===!0&&Re.beginShadows();const $=p.state.shadowsArray;if(Q.render($,T,F),H===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1)&&Ee.render(m,T),p.setupLights(v._useLegacyLights),F.isArrayCamera){const X=F.cameras;for(let G=0,fe=X.length;G<fe;G++){const we=X[G];ze(m,T,we,we.viewport)}}else ze(m,T,F);M!==null&&(C.updateMultisampleRenderTarget(M),C.updateRenderTargetMipmap(M)),T.isScene===!0&&T.onAfterRender(v,T,F),We.resetDefaultState(),D=-1,I=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function Ge(T,F,$,X){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ve.intersectsSprite(T)){X&&de.setFromMatrixPosition(T.matrixWorld).applyMatrix4(_e);const we=ae.update(T),He=T.material;He.visible&&m.push(T,we,He,$,de.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ve.intersectsObject(T))){const we=ae.update(T),He=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),de.copy(T.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),de.copy(we.boundingSphere.center)),de.applyMatrix4(T.matrixWorld).applyMatrix4(_e)),Array.isArray(He)){const Ce=we.groups;for(let Ue=0,Ve=Ce.length;Ue<Ve;Ue++){const $e=Ce[Ue],Mt=He[$e.materialIndex];Mt&&Mt.visible&&m.push(T,we,Mt,$,de.z,$e)}}else He.visible&&m.push(T,we,He,$,de.z,null)}}const fe=T.children;for(let we=0,He=fe.length;we<He;we++)Ge(fe[we],F,$,X)}function ze(T,F,$,X){const G=T.opaque,fe=T.transmissive,we=T.transparent;p.setupLightsView($),H===!0&&Re.setGlobalState(v.clippingPlanes,$),fe.length>0&&Xe(G,fe,F,$),X&&xe.viewport(x.copy(X)),G.length>0&&bt(G,F,$),fe.length>0&&bt(fe,F,$),we.length>0&&bt(we,F,$),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Xe(T,F,$,X){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;const fe=Pe.isWebGL2;he===null&&(he=new jr(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")?Ba:rr,minFilter:Ir,samples:fe?4:0})),v.getDrawingBufferSize(Se),fe?he.setSize(Se.x,Se.y):he.setSize(du(Se.x),du(Se.y));const we=v.getRenderTarget();v.setRenderTarget(he),v.getClearColor(Y),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const He=v.toneMapping;v.toneMapping=ir,bt(T,$,X),C.updateMultisampleRenderTarget(he),C.updateRenderTargetMipmap(he);let Ce=!1;for(let Ue=0,Ve=F.length;Ue<Ve;Ue++){const $e=F[Ue],Mt=$e.object,Nt=$e.geometry,ct=$e.material,on=$e.group;if(ct.side===Pi&&Mt.layers.test(X.layers)){const ut=ct.side;ct.side=Tn,ct.needsUpdate=!0,Je(Mt,$,X,Nt,ct,on),ct.side=ut,ct.needsUpdate=!0,Ce=!0}}Ce===!0&&(C.updateMultisampleRenderTarget(he),C.updateRenderTargetMipmap(he)),v.setRenderTarget(we),v.setClearColor(Y,L),v.toneMapping=He}function bt(T,F,$){const X=F.isScene===!0?F.overrideMaterial:null;for(let G=0,fe=T.length;G<fe;G++){const we=T[G],He=we.object,Ce=we.geometry,Ue=X===null?we.material:X,Ve=we.group;He.layers.test($.layers)&&Je(He,F,$,Ce,Ue,Ve)}}function Je(T,F,$,X,G,fe){T.onBeforeRender(v,F,$,X,G,fe),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(v,F,$,X,T,fe),G.transparent===!0&&G.side===Pi&&G.forceSinglePass===!1?(G.side=Tn,G.needsUpdate=!0,v.renderBufferDirect($,F,X,G,T,fe),G.side=lr,G.needsUpdate=!0,v.renderBufferDirect($,F,X,G,T,fe),G.side=Pi):v.renderBufferDirect($,F,X,G,T,fe),T.onAfterRender(v,F,$,X,G,fe)}function mt(T,F,$){F.isScene!==!0&&(F=Fe);const X=Oe.get(T),G=p.state.lights,fe=p.state.shadowsArray,we=G.state.version,He=ee.getParameters(T,G.state,fe,F,$),Ce=ee.getProgramCacheKey(He);let Ue=X.programs;X.environment=T.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(T.isMeshStandardMaterial?z:E).get(T.envMap||X.environment),Ue===void 0&&(T.addEventListener("dispose",le),Ue=new Map,X.programs=Ue);let Ve=Ue.get(Ce);if(Ve!==void 0){if(X.currentProgram===Ve&&X.lightsStateVersion===we)return vt(T,He),Ve}else He.uniforms=ee.getUniforms(T),T.onBuild($,He,v),T.onBeforeCompile(He,v),Ve=ee.acquireProgram(He,Ce),Ue.set(Ce,Ve),X.uniforms=He.uniforms;const $e=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&($e.clippingPlanes=Re.uniform),vt(T,He),X.needsLights=Ln(T),X.lightsStateVersion=we,X.needsLights&&($e.ambientLightColor.value=G.state.ambient,$e.lightProbe.value=G.state.probe,$e.directionalLights.value=G.state.directional,$e.directionalLightShadows.value=G.state.directionalShadow,$e.spotLights.value=G.state.spot,$e.spotLightShadows.value=G.state.spotShadow,$e.rectAreaLights.value=G.state.rectArea,$e.ltc_1.value=G.state.rectAreaLTC1,$e.ltc_2.value=G.state.rectAreaLTC2,$e.pointLights.value=G.state.point,$e.pointLightShadows.value=G.state.pointShadow,$e.hemisphereLights.value=G.state.hemi,$e.directionalShadowMap.value=G.state.directionalShadowMap,$e.directionalShadowMatrix.value=G.state.directionalShadowMatrix,$e.spotShadowMap.value=G.state.spotShadowMap,$e.spotLightMatrix.value=G.state.spotLightMatrix,$e.spotLightMap.value=G.state.spotLightMap,$e.pointShadowMap.value=G.state.pointShadowMap,$e.pointShadowMatrix.value=G.state.pointShadowMatrix),X.currentProgram=Ve,X.uniformsList=null,Ve}function Ot(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=jo.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function vt(T,F){const $=Oe.get(T);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function _t(T,F,$,X,G){F.isScene!==!0&&(F=Fe),C.resetTextureUnits();const fe=F.fog,we=X.isMeshStandardMaterial?F.environment:null,He=M===null?v.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Ni,Ce=(X.isMeshStandardMaterial?z:E).get(X.envMap||we),Ue=X.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ve=!!$.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),$e=!!$.morphAttributes.position,Mt=!!$.morphAttributes.normal,Nt=!!$.morphAttributes.color;let ct=ir;X.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(ct=v.toneMapping);const on=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ut=on!==void 0?on.length:0,qe=Oe.get(X),Wl=p.state.lights;if(H===!0&&(J===!0||T!==I)){const Vn=T===I&&X.id===D;Re.setState(X,T,Vn)}let Ct=!1;X.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Wl.state.version||qe.outputColorSpace!==He||G.isBatchedMesh&&qe.batching===!1||!G.isBatchedMesh&&qe.batching===!0||G.isInstancedMesh&&qe.instancing===!1||!G.isInstancedMesh&&qe.instancing===!0||G.isSkinnedMesh&&qe.skinning===!1||!G.isSkinnedMesh&&qe.skinning===!0||G.isInstancedMesh&&qe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&qe.instancingColor===!1&&G.instanceColor!==null||qe.envMap!==Ce||X.fog===!0&&qe.fog!==fe||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Re.numPlanes||qe.numIntersection!==Re.numIntersection)||qe.vertexAlphas!==Ue||qe.vertexTangents!==Ve||qe.morphTargets!==$e||qe.morphNormals!==Mt||qe.morphColors!==Nt||qe.toneMapping!==ct||Pe.isWebGL2===!0&&qe.morphTargetsCount!==ut)&&(Ct=!0):(Ct=!0,qe.__version=X.version);let mr=qe.currentProgram;Ct===!0&&(mr=mt(X,F,G));let Hh=!1,aa=!1,Xl=!1;const Zt=mr.getUniforms(),_r=qe.uniforms;if(xe.useProgram(mr.program)&&(Hh=!0,aa=!0,Xl=!0),X.id!==D&&(D=X.id,aa=!0),Hh||I!==T){Zt.setValue(B,"projectionMatrix",T.projectionMatrix),Zt.setValue(B,"viewMatrix",T.matrixWorldInverse);const Vn=Zt.map.cameraPosition;Vn!==void 0&&Vn.setValue(B,de.setFromMatrixPosition(T.matrixWorld)),Pe.logarithmicDepthBuffer&&Zt.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Zt.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),I!==T&&(I=T,aa=!0,Xl=!0)}if(G.isSkinnedMesh){Zt.setOptional(B,G,"bindMatrix"),Zt.setOptional(B,G,"bindMatrixInverse");const Vn=G.skeleton;Vn&&(Pe.floatVertexTextures?(Vn.boneTexture===null&&Vn.computeBoneTexture(),Zt.setValue(B,"boneTexture",Vn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Zt.setOptional(B,G,"batchingTexture"),Zt.setValue(B,"batchingTexture",G._matricesTexture,C));const $l=$.morphAttributes;if(($l.position!==void 0||$l.normal!==void 0||$l.color!==void 0&&Pe.isWebGL2===!0)&&se.update(G,$,mr),(aa||qe.receiveShadow!==G.receiveShadow)&&(qe.receiveShadow=G.receiveShadow,Zt.setValue(B,"receiveShadow",G.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(_r.envMap.value=Ce,_r.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),aa&&(Zt.setValue(B,"toneMappingExposure",v.toneMappingExposure),qe.needsLights&&lt(_r,Xl),fe&&X.fog===!0&&te.refreshFogUniforms(_r,fe),te.refreshMaterialUniforms(_r,X,k,O,he),jo.upload(B,Ot(qe),_r,C)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(jo.upload(B,Ot(qe),_r,C),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Zt.setValue(B,"center",G.center),Zt.setValue(B,"modelViewMatrix",G.modelViewMatrix),Zt.setValue(B,"normalMatrix",G.normalMatrix),Zt.setValue(B,"modelMatrix",G.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Vn=X.uniformsGroups;for(let ql=0,iv=Vn.length;ql<iv;ql++)if(Pe.isWebGL2){const Vh=Vn[ql];Ze.update(Vh,mr),Ze.bind(Vh,mr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mr}function lt(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Ln(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(T,F,$){Oe.get(T.texture).__webglTexture=F,Oe.get(T.depthTexture).__webglTexture=$;const X=Oe.get(T);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=$===void 0,X.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,F){const $=Oe.get(T);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,$=0){M=T,w=F,b=$;let X=!0,G=null,fe=!1,we=!1;if(T){const Ce=Oe.get(T);Ce.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(B.FRAMEBUFFER,null),X=!1):Ce.__webglFramebuffer===void 0?C.setupRenderTarget(T):Ce.__hasExternalTextures&&C.rebindTextures(T,Oe.get(T.texture).__webglTexture,Oe.get(T.depthTexture).__webglTexture);const Ue=T.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(we=!0);const Ve=Oe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ve[F])?G=Ve[F][$]:G=Ve[F],fe=!0):Pe.isWebGL2&&T.samples>0&&C.useMultisampledRTT(T)===!1?G=Oe.get(T).__webglMultisampledFramebuffer:Array.isArray(Ve)?G=Ve[$]:G=Ve,x.copy(T.viewport),A.copy(T.scissor),U=T.scissorTest}else x.copy(R).multiplyScalar(k).floor(),A.copy(j).multiplyScalar(k).floor(),U=re;if(xe.bindFramebuffer(B.FRAMEBUFFER,G)&&Pe.drawBuffers&&X&&xe.drawBuffers(T,G),xe.viewport(x),xe.scissor(A),xe.setScissorTest(U),fe){const Ce=Oe.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ce.__webglTexture,$)}else if(we){const Ce=Oe.get(T.texture),Ue=F||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ce.__webglTexture,$||0,Ue)}D=-1},this.readRenderTargetPixels=function(T,F,$,X,G,fe,we){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(He=He[we]),He){xe.bindFramebuffer(B.FRAMEBUFFER,He);try{const Ce=T.texture,Ue=Ce.format,Ve=Ce.type;if(Ue!==ai&&ye.convert(Ue)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $e=Ve===Ba&&(me.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&me.has("EXT_color_buffer_float"));if(Ve!==rr&&ye.convert(Ve)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===Li&&(Pe.isWebGL2||me.has("OES_texture_float")||me.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-X&&$>=0&&$<=T.height-G&&B.readPixels(F,$,X,G,ye.convert(Ue),ye.convert(Ve),fe)}finally{const Ce=M!==null?Oe.get(M).__webglFramebuffer:null;xe.bindFramebuffer(B.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(T,F,$=0){const X=Math.pow(2,-$),G=Math.floor(F.image.width*X),fe=Math.floor(F.image.height*X);C.setTexture2D(F,0),B.copyTexSubImage2D(B.TEXTURE_2D,$,0,0,T.x,T.y,G,fe),xe.unbindTexture()},this.copyTextureToTexture=function(T,F,$,X=0){const G=F.image.width,fe=F.image.height,we=ye.convert($.format),He=ye.convert($.type);C.setTexture2D($,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,$.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,$.unpackAlignment),F.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,X,T.x,T.y,G,fe,we,He,F.image.data):F.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,X,T.x,T.y,F.mipmaps[0].width,F.mipmaps[0].height,we,F.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,X,T.x,T.y,we,He,F.image),X===0&&$.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(T,F,$,X,G=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=T.max.x-T.min.x+1,we=T.max.y-T.min.y+1,He=T.max.z-T.min.z+1,Ce=ye.convert(X.format),Ue=ye.convert(X.type);let Ve;if(X.isData3DTexture)C.setTexture3D(X,0),Ve=B.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)C.setTexture2DArray(X,0),Ve=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const $e=B.getParameter(B.UNPACK_ROW_LENGTH),Mt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Nt=B.getParameter(B.UNPACK_SKIP_PIXELS),ct=B.getParameter(B.UNPACK_SKIP_ROWS),on=B.getParameter(B.UNPACK_SKIP_IMAGES),ut=$.isCompressedTexture?$.mipmaps[G]:$.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,ut.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ut.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,T.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,T.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,T.min.z),$.isDataTexture||$.isData3DTexture?B.texSubImage3D(Ve,G,F.x,F.y,F.z,fe,we,He,Ce,Ue,ut.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Ve,G,F.x,F.y,F.z,fe,we,He,Ce,ut.data)):B.texSubImage3D(Ve,G,F.x,F.y,F.z,fe,we,He,Ce,Ue,ut),B.pixelStorei(B.UNPACK_ROW_LENGTH,$e),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Mt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Nt),B.pixelStorei(B.UNPACK_SKIP_ROWS,ct),B.pixelStorei(B.UNPACK_SKIP_IMAGES,on),G===0&&X.generateMipmaps&&B.generateMipmap(Ve),xe.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),xe.unbindTexture()},this.resetState=function(){w=0,b=0,M=null,xe.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ju?"display-p3":"srgb",t.unpackColorSpace=ht.workingColorSpace===Rl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===qt?kr:om}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===kr?qt:Ni}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class wE extends Pm{}wE.prototype.isWebGL1Renderer=!0;class AE extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class CE extends Fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class RE extends Ja{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lm,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}const gd={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class PE{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],_=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null}}}const LE=new PE;class th{constructor(e){this.manager=e!==void 0?e:LE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}th.DEFAULT_MATERIAL_NAME="__DEFAULT";class DE extends th{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=gd.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=za("img");function l(){u(),gd.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class IE extends th{constructor(e){super(e)}load(e,t,n,r){const s=new xn,o=new DE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class UE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=vd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function vd(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ku}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ku);function Ci(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Lm(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Gn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Xs={duration:.5,overwrite:!1,delay:0},nh,sn,Et,Kn=1e8,gt=1/Kn,mu=Math.PI*2,OE=mu/4,NE=0,Dm=Math.sqrt,FE=Math.cos,BE=Math.sin,$t=function(e){return typeof e=="string"},Rt=function(e){return typeof e=="function"},Bi=function(e){return typeof e=="number"},ih=function(e){return typeof e>"u"},yi=function(e){return typeof e=="object"},wn=function(e){return e!==!1},rh=function(){return typeof window<"u"},Co=function(e){return Rt(e)||$t(e)},Im=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},an=Array.isArray,_u=/(?:-?\.?\d|\.)+/gi,Um=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Cs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Tc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Om=/[+-]=-?[.\d]+/,Nm=/[^,'"\[\]\s]+/gi,zE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,wt,ci,gu,sh,Hn={},hl={},Fm,Bm=function(e){return(hl=Kr(e,Hn))&&Pn},ah=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ka=function(e,t){return!t&&console.warn(e)},zm=function(e,t){return e&&(Hn[e]=t)&&hl&&(hl[e]=t)||Hn},Ga=function(){return 0},kE={suppressEvents:!0,isStart:!0,kill:!1},Ko={suppressEvents:!0,kill:!1},GE={suppressEvents:!0},oh={},sr=[],vu={},km,Nn={},wc={},xd=30,Zo=[],lh="",ch=function(e){var t=e[0],n,r;if(yi(t)||Rt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Zo.length;r--&&!Zo[r].targetTest(t););n=Zo[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new u_(e[r],n)))||e.splice(r,1);return e},Hr=function(e){return e._gsap||ch(Zn(e))[0]._gsap},Gm=function(e,t,n){return(n=e[t])&&Rt(n)?e[t]():ih(n)&&e.getAttribute&&e.getAttribute(t)||n},An=function(e,t){return(e=e.split(",")).forEach(t)||e},Pt=function(e){return Math.round(e*1e5)/1e5||0},Xt=function(e){return Math.round(e*1e7)/1e7||0},Us=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},HE=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},fl=function(){var e=sr.length,t=sr.slice(0),n,r;for(vu={},sr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Hm=function(e,t,n,r){sr.length&&!sn&&fl(),e.render(t,n,r||sn&&t<0&&(e._initted||e._startAt)),sr.length&&!sn&&fl()},Vm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Nm).length<2?t:$t(e)?e.trim():e},Wm=function(e){return e},Qn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},VE=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Kr=function(e,t){for(var n in t)e[n]=t[n];return e},yd=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=yi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},dl=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Ta=function(e){var t=e.parent||wt,n=e.keyframes?VE(an(e.keyframes)):Qn;if(wn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},WE=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Xm=function(e,t,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Dl=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},cr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Vr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},XE=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},xu=function(e,t,n,r){return e._startAt&&(sn?e._startAt.revert(Ko):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},$E=function i(e){return!e||e._ts&&i(e.parent)},Sd=function(e){return e._repeat?$s(e._tTime,e=e.duration()+e._rDelay)*e:0},$s=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},pl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Il=function(e){return e._end=Xt(e._start+(e._tDur/Math.abs(e._ts||e._rts||gt)||0))},Ul=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Xt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Il(e),n._dirty||Vr(n,e)),e},$m=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=pl(e.rawTime(),t),(!t._dur||eo(0,t.totalDuration(),n)-t._tTime>gt)&&t.render(n,!0)),Vr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-gt}},di=function(e,t,n,r){return t.parent&&cr(t),t._start=Xt((Bi(n)?n:n||e!==wt?Xn(e,n,t):e._time)+t._delay),t._end=Xt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Xm(e,t,"_first","_last",e._sort?"_start":0),yu(t)||(e._recent=t),r||$m(e,t),e._ts<0&&Ul(e,e._tTime),e},qm=function(e,t){return(Hn.ScrollTrigger||ah("scrollTrigger",t))&&Hn.ScrollTrigger.create(t,e)},Ym=function(e,t,n,r,s){if(hh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!sn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&km!==Fn.frame)return sr.push(e),e._lazy=[s,r],1},qE=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},yu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},YE=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&qE(e)&&!(!e._initted&&yu(e))||(e._ts<0||e._dp._ts<0)&&!yu(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=eo(0,e._tDur,t),u=$s(l,a),e._yoyo&&u&1&&(o=1-o),u!==$s(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||sn||r||e._zTime===gt||!t&&e._zTime){if(!e._initted&&Ym(e,t,r,n,l))return;for(d=e._zTime,e._zTime=t||(n?gt:0),n||(n=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&xu(e,t,n,!0),e._onUpdate&&!n&&zn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&zn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&cr(e,1),!n&&!sn&&(zn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},jE=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},qs=function(e,t,n,r){var s=e._repeat,o=Xt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Xt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Ul(e,e._tTime=e._tDur*a),e.parent&&Il(e),n||Vr(e.parent,e),e},Md=function(e){return e instanceof _n?Vr(e):qs(e,e._dur)},KE={_start:0,endTime:Ga,totalDuration:Ga},Xn=function i(e,t,n){var r=e.labels,s=e._recent||KE,o=e.duration()>=Kn?s.endTime(!1):e._dur,a,l,c;return $t(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(an(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},wa=function(e,t,n){var r=Bi(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=wn(l.vars.inherit)&&l.parent;o.immediateRender=wn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Ut(t[0],o,t[s+1])},dr=function(e,t){return e||e===0?t(e):t},eo=function(e,t,n){return n<e?e:n>t?t:n},rn=function(e,t){return!$t(e)||!(t=zE.exec(e))?"":t[1]},ZE=function(e,t,n){return dr(n,function(r){return eo(e,t,r)})},Su=[].slice,jm=function(e,t){return e&&yi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&yi(e[0]))&&!e.nodeType&&e!==ci},JE=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return $t(r)&&!t||jm(r,1)?(s=n).push.apply(s,Zn(r)):n.push(r)})||n},Zn=function(e,t,n){return Et&&!t&&Et.selector?Et.selector(e):$t(e)&&!n&&(gu||!Ys())?Su.call((t||sh).querySelectorAll(e),0):an(e)?JE(e,n):jm(e)?Su.call(e,0):e?[e]:[]},Mu=function(e){return e=Zn(e)[0]||ka("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Zn(t,n.querySelectorAll?n:n===e?ka("Invalid scope")||sh.createElement("div"):e)}},Km=function(e){return e.sort(function(){return .5-Math.random()})},Zm=function(e){if(Rt(e))return e;var t=yi(e)?e:{each:e},n=Wr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,d=r;return $t(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],d=r[1]),function(h,f,_){var m=(_||t).length,p=o[m],g,y,v,S,w,b,M,D,I;if(!p){if(I=t.grid==="auto"?0:(t.grid||[1,Kn])[1],!I){for(M=-Kn;M<(M=_[I++].getBoundingClientRect().left)&&I<m;);I<m&&I--}for(p=o[m]=[],g=l?Math.min(I,m)*u-.5:r%I,y=I===Kn?0:l?m*d/I-.5:r/I|0,M=0,D=Kn,b=0;b<m;b++)v=b%I-g,S=y-(b/I|0),p[b]=w=c?Math.abs(c==="y"?S:v):Dm(v*v+S*S),w>M&&(M=w),w<D&&(D=w);r==="random"&&Km(p),p.max=M-D,p.min=D,p.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(I>m?m-1:c?c==="y"?m/I:I:Math.max(I,m/I))||0)*(r==="edges"?-1:1),p.b=m<0?s-m:s,p.u=rn(t.amount||t.each)||0,n=n&&m<0?o_(n):n}return m=(p[h]-p.min)/p.max||0,Xt(p.b+(n?n(m):m)*p.v)+p.u}},Eu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Xt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Bi(n)?0:rn(n))}},Jm=function(e,t){var n=an(e),r,s;return!n&&yi(e)&&(r=n=e.radius||Kn,e.values?(e=Zn(e.values),(s=!Bi(e[0]))&&(r*=r)):e=Eu(e.increment)),dr(t,n?Rt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Kn,u=0,d=e.length,h,f;d--;)s?(h=e[d].x-a,f=e[d].y-l,h=h*h+f*f):h=Math.abs(e[d]-a),h<c&&(c=h,u=d);return u=!r||c<=r?e[u]:o,s||u===o||Bi(o)?u:u+rn(o)}:Eu(e))},Qm=function(e,t,n,r){return dr(an(e)?!t:n===!0?!!(n=0):!r,function(){return an(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},QE=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},eb=function(e,t){return function(n){return e(parseFloat(n))+(t||rn(n))}},tb=function(e,t,n){return t_(e,t,0,1,n)},e_=function(e,t,n){return dr(n,function(r){return e[~~t(r)]})},nb=function i(e,t,n){var r=t-e;return an(e)?e_(e,i(0,e.length),t):dr(n,function(s){return(r+(s-e)%r)%r+e})},ib=function i(e,t,n){var r=t-e,s=r*2;return an(e)?e_(e,i(0,e.length-1),t):dr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Ha=function(e){for(var t=0,n="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?Nm:_u),n+=e.substr(t,r-t)+Qm(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},t_=function(e,t,n,r,s){var o=t-e,a=r-n;return dr(s,function(l){return n+((l-e)/o*a||0)})},rb=function i(e,t,n,r){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=$t(e),a={},l,c,u,d,h;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(an(e)&&!an(t)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(i(e[c-1],e[c]));d--,s=function(_){_*=d;var m=Math.min(h,~~_);return u[m](_-m)},n=t}else r||(e=Kr(an(e)?[]:{},e));if(!u){for(l in t)uh.call(a,e,l,"get",t[l]);s=function(_){return ph(_,a)||(o?e.p:e)}}}return dr(n,s)},Ed=function(e,t,n){var r=e.labels,s=Kn,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},zn=function(e,t,n){var r=e.vars,s=r[t],o=Et,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&sr.length&&fl(),a&&(Et=a),u=l?s.apply(c,l):s.call(c),Et=o,u},va=function(e){return cr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!sn),e.progress()<1&&zn(e,"onInterrupt"),e},Rs,n_=[],i_=function(e){if(e)if(e=!e.name&&e.default||e,rh()||e.headless){var t=e.name,n=Rt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ga,render:ph,add:uh,kill:yb,modifier:xb,rawVars:0},o={targetTest:0,get:0,getSetter:dh,aliases:{},register:0};if(Ys(),e!==r){if(Nn[t])return;Qn(r,Qn(dl(e,s),o)),Kr(r.prototype,Kr(s,dl(e,o))),Nn[r.prop=t]=r,e.targetTest&&(Zo.push(r),oh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}zm(t,r),e.register&&e.register(Pn,r,Cn)}else n_.push(e)},pt=255,xa={aqua:[0,pt,pt],lime:[0,pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,pt],navy:[0,0,128],white:[pt,pt,pt],olive:[128,128,0],yellow:[pt,pt,0],orange:[pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[pt,0,0],pink:[pt,192,203],cyan:[0,pt,pt],transparent:[pt,pt,pt,0]},Ac=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*pt+.5|0},r_=function(e,t,n){var r=e?Bi(e)?[e>>16,e>>8&pt,e&pt]:0:xa.black,s,o,a,l,c,u,d,h,f,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),xa[e])r=xa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&pt,r&pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&pt,e&pt]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(_u),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Ac(l+1/3,s,o),r[1]=Ac(l,s,o),r[2]=Ac(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Um),n&&r.length<4&&(r[3]=1),r}else r=e.match(_u)||xa.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/pt,o=r[1]/pt,a=r[2]/pt,d=Math.max(s,o,a),h=Math.min(s,o,a),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===s?(o-a)/f+(o<a?6:0):d===o?(a-s)/f+2:(s-o)/f+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},s_=function(e){var t=[],n=[],r=-1;return e.split(ar).forEach(function(s){var o=s.match(Cs)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},bd=function(e,t,n){var r="",s=(e+r).match(ar),o=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!s)return e;if(s=s.map(function(h){return(h=r_(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=s_(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(ar,"1").split(Cs),d=c.length-1;a<d;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(ar),d=c.length-1;a<d;a++)r+=c[a]+s[a];return r+c[d]},ar=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in xa)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),sb=/hsl[a]?\(/,a_=function(e){var t=e.join(" "),n;if(ar.lastIndex=0,ar.test(t))return n=sb.test(t),e[1]=bd(e[1],n),e[0]=bd(e[0],n,s_(e[1])),!0},Va,Fn=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,d,h,f,_=function m(p){var g=i()-r,y=p===!0,v,S,w,b;if((g>e||g<0)&&(n+=g-t),r+=g,w=r-n,v=w-o,(v>0||y)&&(b=++d.frame,h=w-d.time*1e3,d.time=w=w/1e3,o+=v+(v>=s?4:s-v),S=1),y||(l=c(m)),S)for(f=0;f<a.length;f++)a[f](w,h,b,p)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){Fm&&(!gu&&rh()&&(ci=gu=window,sh=ci.document||{},Hn.gsap=Pn,(ci.gsapVersions||(ci.gsapVersions=[])).push(Pn.version),Bm(hl||ci.GreenSockGlobals||!ci.gsap&&ci||{}),n_.forEach(i_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(p){return setTimeout(p,o-d.time*1e3+1|0)},Va=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Va=0,c=Ga},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){s=1e3/(p||240),o=d.time*1e3+s},add:function(p,g,y){var v=g?function(S,w,b,M){p(S,w,b,M),d.remove(v)}:p;return d.remove(p),a[y?"unshift":"push"](v),Ys(),v},remove:function(p,g){~(g=a.indexOf(p))&&a.splice(g,1)&&f>=g&&f--},_listeners:a},d}(),Ys=function(){return!Va&&Fn.wake()},rt={},ab=/^[\d.\-M][\d.\-,\s]/,ob=/["']/g,lb=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(ob,"").trim():+c,r=l.substr(a+1).trim();return t},cb=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},ub=function(e){var t=(e+"").split("("),n=rt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[lb(t[1])]:cb(e).split(",").map(Vm)):rt._CE&&ab.test(e)?rt._CE("",e):n},o_=function(e){return function(t){return 1-e(1-t)}},l_=function i(e,t){for(var n=e._first,r;n;)n instanceof _n?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},Wr=function(e,t){return e&&(Rt(e)?e:rt[e]||ub(e))||t},is=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return An(e,function(a){rt[a]=Hn[a]=s,rt[o=a.toLowerCase()]=n;for(var l in s)rt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=rt[a+"."+l]=s[l]}),s},c_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Cc=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/mu*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*BE((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:c_(a);return s=mu/s,l.config=function(c,u){return i(e,c,u)},l},Rc=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:c_(n);return r.config=function(s){return i(e,s)},r};An("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;is(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});rt.Linear.easeNone=rt.none=rt.Linear.easeIn;is("Elastic",Cc("in"),Cc("out"),Cc());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};is("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);is("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});is("Circ",function(i){return-(Dm(1-i*i)-1)});is("Sine",function(i){return i===1?1:-FE(i*OE)+1});is("Back",Rc("in"),Rc("out"),Rc());rt.SteppedEase=rt.steps=Hn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-gt;return function(a){return((r*eo(0,o,a)|0)+s)*n}}};Xs.ease=rt["quad.out"];An("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return lh+=i+","+i+"Params,"});var u_=function(e,t){this.id=NE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Gm,this.set=t?t.getSetter:dh},Wa=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,qs(this,+t.duration,1,1),this.data=t.data,Et&&(this._ctx=Et,Et.data.push(this)),Va||Fn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,qs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Ys(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ul(this,n),!s._dp||s.parent||$m(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&di(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===gt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Hm(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Sd(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Sd(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?$s(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-gt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?pl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-gt?0:this._rts,this.totalTime(eo(-Math.abs(this._delay),this._tDur,s),r!==!1),Il(this),XE(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ys(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==gt&&(this._tTime-=gt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&di(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(wn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?pl(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=GE);var r=sn;return sn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),sn=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Md(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Md(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Xn(this,n),wn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,wn(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-gt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-gt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-gt)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this;return new Promise(function(s){var o=Rt(n)?n:Wm,a=function(){var c=r.then;r.then=null,Rt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){va(this)},i}();Qn(Wa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-gt,_prom:0,_ps:!1,_rts:1});var _n=function(i){Lm(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=wn(n.sortChildren),wt&&di(n.parent||wt,Ci(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&qm(Ci(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return wa(0,arguments,this),this},t.from=function(r,s,o){return wa(1,arguments,this),this},t.fromTo=function(r,s,o,a){return wa(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Ta(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ut(r,s,Xn(this,o),1),this},t.call=function(r,s,o){return di(this,Ut.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ut(r,o,Xn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Ta(o).immediateRender=wn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,d){return a.startAt=o,Ta(a).immediateRender=wn(a.immediateRender),this.staggerTo(r,s,a,l,c,u,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Xt(r),d=this._zTime<0!=r<0&&(this._initted||!c),h,f,_,m,p,g,y,v,S,w,b,M;if(this!==wt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||d){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,S=this._start,v=this._ts,g=!v,d&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(b=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(h=Xt(u%p),u===l?(m=this._repeat,h=c):(m=~~(u/p),m&&m===u/p&&(h=c,m--),h>c&&(h=c)),w=$s(this._tTime,p),!a&&this._tTime&&w!==m&&this._tTime-w*p-this._dur<=0&&(w=m),b&&m&1&&(h=c-h,M=1),m!==w&&!this._lock){var D=b&&w&1,I=D===(b&&m&1);if(m<w&&(D=!D),a=D?0:u%c?c:u,this._lock=1,this.render(a||(M?0:Xt(m*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&zn(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,I&&(this._lock=2,a=D?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;l_(this,M)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=jE(this,Xt(a),Xt(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&!s&&!m&&(zn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(f=this._first;f;){if(_=f._next,(f._act||h>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(r,s,o);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,o),h!==this._time||!this._ts&&!g){y=0,_&&(u+=this._zTime=-gt);break}}f=_}else{f=this._last;for(var x=r<0?r:h;f;){if(_=f._prev,(f._act||x<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(r,s,o);if(f.render(f._ts>0?(x-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(x-f._start)*f._ts,s,o||sn&&(f._initted||f._startAt)),h!==this._time||!this._ts&&!g){y=0,_&&(u+=this._zTime=x?-gt:gt);break}}f=_}}if(y&&!s&&(this.pause(),y.render(h>=a?0:-gt)._zTime=h>=a?1:-1,this._ts))return this._start=S,Il(this),this.render(r,s,o);this._onUpdate&&!s&&zn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&cr(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(zn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Bi(s)||(s=Xn(this,s,r)),!(r instanceof Wa)){if(an(r))return r.forEach(function(a){return o.add(a,s)}),this;if($t(r))return this.addLabel(r,s);if(Rt(r))r=Ut.delayedCall(0,r);else return this}return this!==r?di(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Kn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ut?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return $t(r)?this.removeLabel(r):Rt(r)?this.killTweensOf(r):(Dl(this,r),r===this._recent&&(this._recent=this._last),Vr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Xt(Fn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Xn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Ut.delayedCall(0,s||Ga,o);return a.data="isPause",this._hasPause=1,di(this,a,Xn(this,r))},t.removePause=function(r){var s=this._first;for(r=Xn(this,r);s;)s._start===r&&s.data==="isPause"&&cr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Zi!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Zn(r),l=this._first,c=Bi(s),u;l;)l instanceof Ut?HE(l._targets,a)&&(c?(!Zi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Xn(o,r),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,_=Ut.to(o,Qn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||gt,onStart:function(){if(o.pause(),!f){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&qs(_,p,0,1).render(_._time,!0,!0),f=1}u&&u.apply(_,d||[])}},s));return h?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Qn({startAt:{time:Xn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Ed(this,Xn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Ed(this,Xn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+gt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Vr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Vr(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Kn,c,u,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,di(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;qs(o,o===wt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(wt._ts&&(Hm(wt,pl(r,wt)),km=Fn.frame),Fn.frame>=xd){xd+=Gn.autoSleep||120;var s=wt._first;if((!s||!s._ts)&&Gn.autoSleep&&Fn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Fn.sleep()}}},e}(Wa);Qn(_n.prototype,{_lock:0,_hasPause:0,_forcing:0});var hb=function(e,t,n,r,s,o,a){var l=new Cn(this._pt,e,t,0,1,__,null,s),c=0,u=0,d,h,f,_,m,p,g,y;for(l.b=n,l.e=r,n+="",r+="",(g=~r.indexOf("random("))&&(r=Ha(r)),o&&(y=[n,r],o(y,e,t),n=y[0],r=y[1]),h=n.match(Tc)||[];d=Tc.exec(r);)_=d[0],m=r.substring(c,d.index),f?f=(f+1)%5:m.substr(-5)==="rgba("&&(f=1),_!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:m||u===1?m:",",s:p,c:_.charAt(1)==="="?Us(p,_)-p:parseFloat(_)-p,m:f&&f<4?Math.round:0},c=Tc.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Om.test(r)||g)&&(l.e=0),this._pt=l,l},uh=function(e,t,n,r,s,o,a,l,c,u){Rt(r)&&(r=r(s||0,e,o));var d=e[t],h=n!=="get"?n:Rt(d)?c?e[t.indexOf("set")||!Rt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=Rt(d)?c?_b:p_:fh,_;if($t(r)&&(~r.indexOf("random(")&&(r=Ha(r)),r.charAt(1)==="="&&(_=Us(h,r)+(rn(h)||0),(_||_===0)&&(r=_))),!u||h!==r||bu)return!isNaN(h*r)&&r!==""?(_=new Cn(this._pt,e,t,+h||0,r-(h||0),typeof d=="boolean"?vb:m_,0,f),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!d&&!(t in e)&&ah(t,r),hb.call(this,e,t,h,r,f,l||Gn.stringFilter,c))},fb=function(e,t,n,r,s){if(Rt(e)&&(e=Aa(e,s,t,n,r)),!yi(e)||e.style&&e.nodeType||an(e)||Im(e))return $t(e)?Aa(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=Aa(e[a],s,t,n,r);return o},h_=function(e,t,n,r,s,o){var a,l,c,u;if(Nn[e]&&(a=new Nn[e]).init(s,a.rawVars?t[e]:fb(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new Cn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Rs))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Zi,bu,hh=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,h=r.keyframes,f=r.autoRevert,_=e._dur,m=e._startAt,p=e._targets,g=e.parent,y=g&&g.data==="nested"?g.vars.targets:p,v=e._overwrite==="auto"&&!nh,S=e.timeline,w,b,M,D,I,x,A,U,Y,L,N,O,k;if(S&&(!h||!s)&&(s="none"),e._ease=Wr(s,Xs.ease),e._yEase=d?o_(Wr(d===!0?s:d,Xs.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!S&&!!r.runBackwards,!S||h&&!r.stagger){if(U=p[0]?Hr(p[0]).harness:0,O=U&&r[U.prop],w=dl(r,oh),m&&(m._zTime<0&&m.progress(1),t<0&&u&&a&&!f?m.render(-1,!0):m.revert(u&&_?Ko:kE),m._lazy=0),o){if(cr(e._startAt=Ut.set(p,Qn({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!m&&wn(l),startAt:null,delay:0,onUpdate:c&&function(){return zn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(sn||!a&&!f)&&e._startAt.revert(Ko),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!m){if(t&&(a=!1),M=Qn({overwrite:!1,data:"isFromStart",lazy:a&&!m&&wn(l),immediateRender:a,stagger:0,parent:g},w),O&&(M[U.prop]=O),cr(e._startAt=Ut.set(p,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(sn?e._startAt.revert(Ko):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,gt,gt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&wn(l)||l&&!_,b=0;b<p.length;b++){if(I=p[b],A=I._gsap||ch(p)[b]._gsap,e._ptLookup[b]=L={},vu[A.id]&&sr.length&&fl(),N=y===p?b:y.indexOf(I),U&&(Y=new U).init(I,O||w,e,N,y)!==!1&&(e._pt=D=new Cn(e._pt,I,Y.name,0,1,Y.render,Y,0,Y.priority),Y._props.forEach(function(W){L[W]=D}),Y.priority&&(x=1)),!U||O)for(M in w)Nn[M]&&(Y=h_(M,w,e,N,I,y))?Y.priority&&(x=1):L[M]=D=uh.call(e,I,M,"get",w[M],N,y,0,r.stringFilter);e._op&&e._op[b]&&e.kill(I,e._op[b]),v&&e._pt&&(Zi=e,wt.killTweensOf(I,L,e.globalTime(t)),k=!e.parent,Zi=0),e._pt&&l&&(vu[A.id]=1)}x&&g_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!k,h&&t<=0&&S.render(Kn,!0,!0)},db=function(e,t,n,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,h,f;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return bu=1,e.vars[t]="+=0",hh(e,a),bu=0,l?ka(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,d.e&&(d.e=Pt(n)+rn(d.e)),d.b&&(d.b=u.s+rn(d.b))},pb=function(e,t){var n=e[0]?Hr(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=Kr({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},mb=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(an(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Aa=function(e,t,n,r,s){return Rt(e)?e.call(t,n,r,s):$t(e)&&~e.indexOf("random(")?Ha(e):e},f_=lh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",d_={};An(f_+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return d_[i]=1});var Ut=function(i){Lm(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:Ta(r))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,_=l.keyframes,m=l.defaults,p=l.scrollTrigger,g=l.yoyoEase,y=r.parent||wt,v=(an(n)||Im(n)?Bi(n[0]):"length"in r)?[n]:Zn(n),S,w,b,M,D,I,x,A;if(a._targets=v.length?ch(v):ka("GSAP target "+n+" not found. https://gsap.com",!Gn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||h||Co(c)||Co(u)){if(r=a.vars,S=a.timeline=new _n({data:"nested",defaults:m||{},targets:y&&y.data==="nested"?y.vars.targets:v}),S.kill(),S.parent=S._dp=Ci(a),S._start=0,h||Co(c)||Co(u)){if(M=v.length,x=h&&Zm(h),yi(h))for(D in h)~f_.indexOf(D)&&(A||(A={}),A[D]=h[D]);for(w=0;w<M;w++)b=dl(r,d_),b.stagger=0,g&&(b.yoyoEase=g),A&&Kr(b,A),I=v[w],b.duration=+Aa(c,Ci(a),w,I,v),b.delay=(+Aa(u,Ci(a),w,I,v)||0)-a._delay,!h&&M===1&&b.delay&&(a._delay=u=b.delay,a._start+=u,b.delay=0),S.to(I,b,x?x(w,I,v):0),S._ease=rt.none;S.duration()?c=u=0:a.timeline=0}else if(_){Ta(Qn(S.vars.defaults,{ease:"none"})),S._ease=Wr(_.ease||r.ease||"none");var U=0,Y,L,N;if(an(_))_.forEach(function(O){return S.to(v,O,">")}),S.duration();else{b={};for(D in _)D==="ease"||D==="easeEach"||mb(D,_[D],b,_.easeEach);for(D in b)for(Y=b[D].sort(function(O,k){return O.t-k.t}),U=0,w=0;w<Y.length;w++)L=Y[w],N={ease:L.e,duration:(L.t-(w?Y[w-1].t:0))/100*c},N[D]=L.v,S.to(v,N,U),U+=N.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return f===!0&&!nh&&(Zi=Ci(a),wt.killTweensOf(v),Zi=0),di(y,Ci(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!c&&!_&&a._start===Xt(y._time)&&wn(d)&&$E(Ci(a))&&y.data!=="nested")&&(a._tTime=-gt,a.render(Math.max(0,-u)||0)),p&&qm(Ci(a),p),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-gt&&!u?l:r<gt?0:r,h,f,_,m,p,g,y,v,S;if(!c)YE(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=d,v=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(m*100+r,s,o);if(h=Xt(d%m),d===l?(_=this._repeat,h=c):(_=~~(d/m),_&&_===Xt(d/m)&&(h=c,_--),h>c&&(h=c)),g=this._yoyo&&_&1,g&&(S=this._yEase,h=c-h),p=$s(this._tTime,m),h===a&&!o&&this._initted&&_===p)return this._tTime=d,this;_!==p&&(v&&this._yEase&&l_(v,g),this.vars.repeatRefresh&&!g&&!this._lock&&this._time!==m&&this._initted&&(this._lock=o=1,this.render(Xt(m*_),!0).invalidate()._lock=0))}if(!this._initted){if(Ym(this,u?r:h,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(S||this._ease)(h/c),this._from&&(this.ratio=y=1-y),h&&!a&&!s&&!_&&(zn(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;v&&v.render(r<0?r:v._dur*v._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&xu(this,r,s,o),zn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&zn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&xu(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&cr(this,1),!s&&!(u&&!a)&&(d||a||g)&&(zn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Va||Fn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||hh(this,c),u=this._ease(c/this._dur),db(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(Ul(this,0),this.parent||Xm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?va(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Zi&&Zi.vars.overwrite!==!0)._first||va(this),this.parent&&o!==this.timeline.totalDuration()&&qs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Zn(r):a,c=this._ptLookup,u=this._pt,d,h,f,_,m,p,g;if((!s||s==="all")&&WE(a,l))return s==="all"&&(this._pt=0),va(this);for(d=this._op=this._op||[],s!=="all"&&($t(s)&&(m={},An(s,function(y){return m[y]=1}),s=m),s=pb(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){h=c[g],s==="all"?(d[g]=s,_=h,f={}):(f=d[g]=d[g]||{},_=s);for(m in _)p=h&&h[m],p&&((!("kill"in p.d)||p.d.kill(m)===!0)&&Dl(this,p,"_pt"),delete h[m]),f!=="all"&&(f[m]=1)}return this._initted&&!this._pt&&u&&va(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return wa(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return wa(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return wt.killTweensOf(r,s,o)},e}(Wa);Qn(Ut.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});An("staggerTo,staggerFrom,staggerFromTo",function(i){Ut[i]=function(){var e=new _n,t=Su.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var fh=function(e,t,n){return e[t]=n},p_=function(e,t,n){return e[t](n)},_b=function(e,t,n,r){return e[t](r.fp,n)},gb=function(e,t,n){return e.setAttribute(t,n)},dh=function(e,t){return Rt(e[t])?p_:ih(e[t])&&e.setAttribute?gb:fh},m_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},vb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},__=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},ph=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},xb=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},yb=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Dl(this,t,"_pt"):t.dep||(n=1),t=r;return!n},Sb=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},g_=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},Cn=function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||m_,this.d=l||this,this.set=c||fh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=Sb,this.m=n,this.mt=s,this.tween=r},i}();An(lh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return oh[i]=1});Hn.TweenMax=Hn.TweenLite=Ut;Hn.TimelineLite=Hn.TimelineMax=_n;wt=new _n({sortChildren:!1,defaults:Xs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Gn.stringFilter=a_;var Xr=[],Jo={},Mb=[],Td=0,Eb=0,Pc=function(e){return(Jo[e]||Mb).map(function(t){return t()})},Tu=function(){var e=Date.now(),t=[];e-Td>2&&(Pc("matchMediaInit"),Xr.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=ci.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Pc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Td=e,Pc("matchMedia"))},v_=function(){function i(t,n){this.selector=n&&Mu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Eb++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Rt(n)&&(s=r,r=n,n=Rt);var o=this,a=function(){var c=Et,u=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=Mu(s)),Et=o,d=r.apply(o,arguments),Rt(d)&&o._r.push(d),Et=c,o.selector=u,o.isReverted=!1,d};return o.last=a,n===Rt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var r=Et;Et=null,n(this),Et=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Ut&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof _n?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ut)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Xr.length;o--;)Xr[o].id===this.id&&Xr.splice(o,1)},e.revert=function(n){this.kill(n||{})},i}(),bb=function(){function i(t){this.contexts=[],this.scope=t,Et&&Et.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){yi(n)||(n={matches:n});var o=new v_(0,s||this.scope),a=o.conditions={},l,c,u;Et&&!o.selector&&(o.selector=Et.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=ci.matchMedia(n[c]),l&&(Xr.indexOf(o)<0&&Xr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Tu):l.addEventListener("change",Tu)));return u&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),ml={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return i_(r)})},timeline:function(e){return new _n(e)},getTweensOf:function(e,t){return wt.getTweensOf(e,t)},getProperty:function(e,t,n,r){$t(e)&&(e=Zn(e)[0]);var s=Hr(e||{}).get,o=n?Wm:Vm;return n==="native"&&(n=""),e&&(t?o((Nn[t]&&Nn[t].get||s)(e,t,n,r)):function(a,l,c){return o((Nn[a]&&Nn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Zn(e),e.length>1){var r=e.map(function(u){return Pn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var d=s;d--;)r[d](u)}}e=e[0]||{};var o=Nn[t],a=Hr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var d=new o;Rs._pt=0,d.init(e,n?u+n:u,Rs,0,[e]),d.render(1,d),Rs._pt&&ph(1,Rs)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=Pn.to(e,Kr((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return wt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Wr(e.ease,Xs.ease)),yd(Xs,e||{})},config:function(e){return yd(Gn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Nn[a]&&!Hn[a]&&ka(t+" effect requires "+a+" plugin.")}),wc[t]=function(a,l,c){return n(Zn(a),Qn(l||{},s),c)},o&&(_n.prototype[t]=function(a,l,c){return this.add(wc[t](a,yi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){rt[e]=Wr(t)},parseEase:function(e,t){return arguments.length?Wr(e,t):rt},getById:function(e){return wt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new _n(e),r,s;for(n.smoothChildTiming=wn(e.smoothChildTiming),wt.remove(n),n._dp=0,n._time=n._tTime=wt._time,r=wt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Ut&&r.vars.onComplete===r._targets[0]))&&di(n,r,r._start-r._delay),r=s;return di(wt,n,0),n},context:function(e,t){return e?new v_(e,t):Et},matchMedia:function(e){return new bb(e)},matchMediaRefresh:function(){return Xr.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Tu()},addEventListener:function(e,t){var n=Jo[e]||(Jo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Jo[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:nb,wrapYoyo:ib,distribute:Zm,random:Qm,snap:Jm,normalize:tb,getUnit:rn,clamp:ZE,splitColor:r_,toArray:Zn,selector:Mu,mapRange:t_,pipe:QE,unitize:eb,interpolate:rb,shuffle:Km},install:Bm,effects:wc,ticker:Fn,updateRoot:_n.updateRoot,plugins:Nn,globalTimeline:wt,core:{PropTween:Cn,globals:zm,Tween:Ut,Timeline:_n,Animation:Wa,getCache:Hr,_removeLinkedListItem:Dl,reverting:function(){return sn},context:function(e){return e&&Et&&(Et.data.push(e),e._ctx=Et),Et},suppressOverwrites:function(e){return nh=e}}};An("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return ml[i]=Ut[i]});Fn.add(_n.updateRoot);Rs=ml.to({},{duration:0});var Tb=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},wb=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=Tb(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},Lc=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if($t(s)&&(l={},An(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}wb(a,s)}}}},Pn=ml.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)sn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Lc("roundProps",Eu),Lc("modifiers"),Lc("snap",Jm))||ml;Ut.version=_n.version=Pn.version="3.12.5";Fm=1;rh()&&Ys();rt.Power0;rt.Power1;rt.Power2;rt.Power3;rt.Power4;rt.Linear;rt.Quad;rt.Cubic;rt.Quart;rt.Quint;rt.Strong;rt.Elastic;rt.Back;rt.SteppedEase;rt.Bounce;rt.Sine;rt.Expo;rt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var wd,Ji,Os,mh,Ur,Ad,_h,Ab=function(){return typeof window<"u"},zi={},Tr=180/Math.PI,Ns=Math.PI/180,ys=Math.atan2,Cd=1e8,gh=/([A-Z])/g,Cb=/(left|right|width|margin|padding|x)/i,Rb=/[\s,\(]\S/,pi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},wu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Pb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Lb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Db=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},x_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},y_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Ib=function(e,t,n){return e.style[t]=n},Ub=function(e,t,n){return e.style.setProperty(t,n)},Ob=function(e,t,n){return e._gsap[t]=n},Nb=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Fb=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Bb=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},At="transform",Rn=At+"Origin",zb=function i(e,t){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in zi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=pi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Ri(r,a)}):this.tfm[e]=o.x?o[e]:Ri(r,e),e===Rn&&(this.tfm.zOrigin=o.zOrigin);else return pi.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(At)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Rn,t,"")),e=At}(s||t)&&this.props.push(e,t,s[e])},S_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},kb=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(gh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=_h(),(!s||!s.isStart)&&!n[At]&&(S_(n),r.zOrigin&&n[Rn]&&(n[Rn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},M_=function(e,t){var n={target:e,props:[],revert:kb,save:zb};return e._gsap||Pn.core.getCache(e),t&&t.split(",").forEach(function(r){return n.save(r)}),n},E_,Au=function(e,t){var n=Ji.createElementNS?Ji.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ji.createElement(e);return n&&n.style?n:Ji.createElement(e)},vi=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(gh,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,js(t)||t,1)||""},Rd="O,Moz,ms,Ms,Webkit".split(","),js=function(e,t,n){var r=t||Ur,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Rd[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Rd[o]:"")+e},Cu=function(){Ab()&&window.document&&(wd=window,Ji=wd.document,Os=Ji.documentElement,Ur=Au("div")||{style:{}},Au("div"),At=js(At),Rn=At+"Origin",Ur.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",E_=!!js("perspective"),_h=Pn.core.reverting,mh=1)},Dc=function i(e){var t=Au("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(Os.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),Os.removeChild(t),this.style.cssText=s,o},Pd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},b_=function(e){var t;try{t=e.getBBox()}catch{t=Dc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Dc||(t=Dc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Pd(e,["x","cx","x1"])||0,y:+Pd(e,["y","cy","y1"])||0,width:0,height:0}:t},T_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&b_(e))},Zr=function(e,t){if(t){var n=e.style,r;t in zi&&t!==Rn&&(t=At),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(gh,"-$1").toLowerCase())):n.removeAttribute(t)}},Qi=function(e,t,n,r,s,o){var a=new Cn(e._pt,t,n,0,1,o?y_:x_);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},Ld={deg:1,rad:1,turn:1},Gb={grid:1,flex:1},ur=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Ur.style,l=Cb.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=r==="px",f=r==="%",_,m,p,g;if(r===o||!s||Ld[r]||Ld[o])return s;if(o!=="px"&&!h&&(s=i(e,t,n,"px")),g=e.getCTM&&T_(e),(f||o==="%")&&(zi[t]||~t.indexOf("adius")))return _=g?e.getBBox()[l?"width":"height"]:e[u],Pt(f?s/_*d:s/100*_);if(a[l?"width":"height"]=d+(h?o:r),m=~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===Ji||!m.appendChild)&&(m=Ji.body),p=m._gsap,p&&f&&p.width&&l&&p.time===Fn.time&&!p.uncache)return Pt(s/p.width*d);if(f&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=d+r,_=e[u],y?e.style[t]=y:Zr(e,t)}else(f||o==="%")&&!Gb[vi(m,"display")]&&(a.position=vi(e,"position")),m===e&&(a.position="static"),m.appendChild(Ur),_=Ur[u],m.removeChild(Ur),a.position="absolute";return l&&f&&(p=Hr(m),p.time=Fn.time,p.width=m[u]),Pt(h?_*s/d:_&&s?d/_*s:0)},Ri=function(e,t,n,r){var s;return mh||Cu(),t in pi&&t!=="transform"&&(t=pi[t],~t.indexOf(",")&&(t=t.split(",")[0])),zi[t]&&t!=="transform"?(s=$a(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:gl(vi(e,Rn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=_l[t]&&_l[t](e,t,n)||vi(e,t)||Gm(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ur(e,t,s,n)+n:s},Hb=function(e,t,n,r){if(!n||n==="none"){var s=js(t,e,1),o=s&&vi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=vi(e,"borderTopColor"))}var a=new Cn(this._pt,e.style,t,0,1,__),l=0,c=0,u,d,h,f,_,m,p,g,y,v,S,w;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(m=e.style[t],e.style[t]=r,r=vi(e,t)||r,m?e.style[t]=m:Zr(e,t)),u=[n,r],a_(u),n=u[0],r=u[1],h=n.match(Cs)||[],w=r.match(Cs)||[],w.length){for(;d=Cs.exec(r);)p=d[0],y=r.substring(l,d.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),p!==(m=h[c++]||"")&&(f=parseFloat(m)||0,S=m.substr((f+"").length),p.charAt(1)==="="&&(p=Us(f,p)+S),g=parseFloat(p),v=p.substr((g+"").length),l=Cs.lastIndex-v.length,v||(v=v||Gn.units[t]||S,l===r.length&&(r+=v,a.e+=v)),S!==v&&(f=ur(e,t,m,v)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:f,c:g-f,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?y_:x_;return Om.test(r)&&(a.e=0),this._pt=a,a},Dd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Vb=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Dd[n]||n,t[1]=Dd[r]||r,t.join(" ")},Wb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],zi[a]&&(l=1,a=a==="transformOrigin"?Rn:At),Zr(n,a);l&&(Zr(n,At),o&&(o.svg&&n.removeAttribute("transform"),$a(n,1),o.uncache=1,S_(r)))}},_l={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Cn(e._pt,t,n,0,0,Wb);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},Xa=[1,0,0,1,0,0],w_={},A_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Id=function(e){var t=vi(e,At);return A_(t)?Xa:t.substr(7).match(Um).map(Pt)},vh=function(e,t){var n=e._gsap||Hr(e),r=e.style,s=Id(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Xa:s):(s===Xa&&!e.offsetParent&&e!==Os&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,Os.appendChild(e)),s=Id(e),l?r.display=l:Zr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Os.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ru=function(e,t,n,r,s,o){var a=e._gsap,l=s||vh(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,f=l[0],_=l[1],m=l[2],p=l[3],g=l[4],y=l[5],v=t.split(" "),S=parseFloat(v[0])||0,w=parseFloat(v[1])||0,b,M,D,I;n?l!==Xa&&(M=f*p-_*m)&&(D=S*(p/M)+w*(-m/M)+(m*y-p*g)/M,I=S*(-_/M)+w*(f/M)-(f*y-_*g)/M,S=D,w=I):(b=b_(e),S=b.x+(~v[0].indexOf("%")?S/100*b.width:S),w=b.y+(~(v[1]||v[0]).indexOf("%")?w/100*b.height:w)),r||r!==!1&&a.smooth?(g=S-c,y=w-u,a.xOffset=d+(g*f+y*m)-g,a.yOffset=h+(g*_+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=w,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[Rn]="0px 0px",o&&(Qi(o,a,"xOrigin",c,S),Qi(o,a,"yOrigin",u,w),Qi(o,a,"xOffset",d,a.xOffset),Qi(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+w)},$a=function(e,t){var n=e._gsap||new u_(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=vi(e,Rn)||"0",u,d,h,f,_,m,p,g,y,v,S,w,b,M,D,I,x,A,U,Y,L,N,O,k,W,q,R,j,re,ve,H,J;return u=d=h=m=p=g=y=v=S=0,f=_=1,n.svg=!!(e.getCTM&&T_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[At]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[At]!=="none"?l[At]:"")),r.scale=r.rotate=r.translate="none"),M=vh(e,n.svg),n.svg&&(n.uncache?(W=e.getBBox(),c=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",k=""):k=!t&&e.getAttribute("data-svg-origin"),Ru(e,k||c,!!k||n.originIsAbsolute,n.smooth!==!1,M)),w=n.xOrigin||0,b=n.yOrigin||0,M!==Xa&&(A=M[0],U=M[1],Y=M[2],L=M[3],u=N=M[4],d=O=M[5],M.length===6?(f=Math.sqrt(A*A+U*U),_=Math.sqrt(L*L+Y*Y),m=A||U?ys(U,A)*Tr:0,y=Y||L?ys(Y,L)*Tr+m:0,y&&(_*=Math.abs(Math.cos(y*Ns))),n.svg&&(u-=w-(w*A+b*Y),d-=b-(w*U+b*L))):(J=M[6],ve=M[7],R=M[8],j=M[9],re=M[10],H=M[11],u=M[12],d=M[13],h=M[14],D=ys(J,re),p=D*Tr,D&&(I=Math.cos(-D),x=Math.sin(-D),k=N*I+R*x,W=O*I+j*x,q=J*I+re*x,R=N*-x+R*I,j=O*-x+j*I,re=J*-x+re*I,H=ve*-x+H*I,N=k,O=W,J=q),D=ys(-Y,re),g=D*Tr,D&&(I=Math.cos(-D),x=Math.sin(-D),k=A*I-R*x,W=U*I-j*x,q=Y*I-re*x,H=L*x+H*I,A=k,U=W,Y=q),D=ys(U,A),m=D*Tr,D&&(I=Math.cos(D),x=Math.sin(D),k=A*I+U*x,W=N*I+O*x,U=U*I-A*x,O=O*I-N*x,A=k,N=W),p&&Math.abs(p)+Math.abs(m)>359.9&&(p=m=0,g=180-g),f=Pt(Math.sqrt(A*A+U*U+Y*Y)),_=Pt(Math.sqrt(O*O+J*J)),D=ys(N,O),y=Math.abs(D)>2e-4?D*Tr:0,S=H?1/(H<0?-H:H):0),n.svg&&(k=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!A_(vi(e,At)),k&&e.setAttribute("transform",k))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(f*=-1,y+=m<=0?180:-180,m+=m<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=Pt(f),n.scaleY=Pt(_),n.rotation=Pt(m)+a,n.rotationX=Pt(p)+a,n.rotationY=Pt(g)+a,n.skewX=y+a,n.skewY=v+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Rn]=gl(c)),n.xOffset=n.yOffset=0,n.force3D=Gn.force3D,n.renderTransform=n.svg?$b:E_?C_:Xb,n.uncache=0,n},gl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ic=function(e,t,n){var r=rn(t);return Pt(parseFloat(t)+parseFloat(ur(e,"x",n+"px",r)))+r},Xb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,C_(e,t)},Sr="0deg",da="0px",Mr=") ",C_=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,_=n.scaleX,m=n.scaleY,p=n.transformPerspective,g=n.force3D,y=n.target,v=n.zOrigin,S="",w=g==="auto"&&e&&e!==1||g===!0;if(v&&(d!==Sr||u!==Sr)){var b=parseFloat(u)*Ns,M=Math.sin(b),D=Math.cos(b),I;b=parseFloat(d)*Ns,I=Math.cos(b),o=Ic(y,o,M*I*-v),a=Ic(y,a,-Math.sin(b)*-v),l=Ic(y,l,D*I*-v+v)}p!==da&&(S+="perspective("+p+Mr),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(w||o!==da||a!==da||l!==da)&&(S+=l!==da||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Mr),c!==Sr&&(S+="rotate("+c+Mr),u!==Sr&&(S+="rotateY("+u+Mr),d!==Sr&&(S+="rotateX("+d+Mr),(h!==Sr||f!==Sr)&&(S+="skew("+h+", "+f+Mr),(_!==1||m!==1)&&(S+="scale("+_+", "+m+Mr),y.style[At]=S||"translate(0, 0)"},$b=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,_=n.xOrigin,m=n.yOrigin,p=n.xOffset,g=n.yOffset,y=n.forceCSS,v=parseFloat(o),S=parseFloat(a),w,b,M,D,I;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ns,c*=Ns,w=Math.cos(l)*d,b=Math.sin(l)*d,M=Math.sin(l-c)*-h,D=Math.cos(l-c)*h,c&&(u*=Ns,I=Math.tan(c-u),I=Math.sqrt(1+I*I),M*=I,D*=I,u&&(I=Math.tan(u),I=Math.sqrt(1+I*I),w*=I,b*=I)),w=Pt(w),b=Pt(b),M=Pt(M),D=Pt(D)):(w=d,D=h,b=M=0),(v&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(v=ur(f,"x",o,"px"),S=ur(f,"y",a,"px")),(_||m||p||g)&&(v=Pt(v+_-(_*w+m*M)+p),S=Pt(S+m-(_*b+m*D)+g)),(r||s)&&(I=f.getBBox(),v=Pt(v+r/100*I.width),S=Pt(S+s/100*I.height)),I="matrix("+w+","+b+","+M+","+D+","+v+","+S+")",f.setAttribute("transform",I),y&&(f.style[At]=I)},qb=function(e,t,n,r,s){var o=360,a=$t(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Tr:1),c=l-r,u=r+c+"deg",d,h;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*Cd)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*Cd)%o-~~(c/o)*o)),e._pt=h=new Cn(e._pt,t,n,r,c,Pb),h.e=u,h.u="deg",e._props.push(n),h},Ud=function(e,t){for(var n in t)e[n]=t[n];return e},Yb=function(e,t,n){var r=Ud({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,d,h,f,_;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[At]=t,a=$a(n,1),Zr(n,At),n.setAttribute("transform",c)):(c=getComputedStyle(n)[At],o[At]=t,a=$a(n,1),o[At]=c);for(l in zi)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(f=rn(c),_=rn(u),d=f!==_?ur(n,l,c,_):parseFloat(c),h=parseFloat(u),e._pt=new Cn(e._pt,a,l,d,h-d,wu),e._pt.u=_||0,e._props.push(l));Ud(a,r)};An("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});_l[e>1?"border"+i:i]=function(a,l,c,u,d){var h,f;if(arguments.length<4)return h=o.map(function(_){return Ri(a,_,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},o.forEach(function(_,m){return f[_]=h[m]=h[m]||h[(m-1)/2|0]}),a.init(l,f,d)}});var R_={name:"css",register:Cu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,d,h,f,_,m,p,g,y,v,S,w,b,M,D;mh||Cu(),this.styles=this.styles||M_(e),D=this.styles.props,this.tween=n;for(m in t)if(m!=="autoRound"&&(u=t[m],!(Nn[m]&&h_(m,t,n,r,e,s)))){if(f=typeof u,_=_l[m],f==="function"&&(u=u.call(n,r,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Ha(u)),_)_(this,e,m,u,n)&&(M=1);else if(m.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(m)+"").trim(),u+="",ar.lastIndex=0,ar.test(c)||(p=rn(c),g=rn(u)),g?p!==g&&(c=ur(e,m,c,g)+g):p&&(u+=p),this.add(a,"setProperty",c,u,r,s,0,0,m),o.push(m),D.push(m,0,a[m]);else if(f!=="undefined"){if(l&&m in l?(c=typeof l[m]=="function"?l[m].call(n,r,e,s):l[m],$t(c)&&~c.indexOf("random(")&&(c=Ha(c)),rn(c+"")||c==="auto"||(c+=Gn.units[m]||rn(Ri(e,m))||""),(c+"").charAt(1)==="="&&(c=Ri(e,m))):c=Ri(e,m),h=parseFloat(c),y=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),d=parseFloat(u),m in pi&&(m==="autoAlpha"&&(h===1&&Ri(e,"visibility")==="hidden"&&d&&(h=0),D.push("visibility",0,a.visibility),Qi(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),m!=="scale"&&m!=="transform"&&(m=pi[m],~m.indexOf(",")&&(m=m.split(",")[0]))),v=m in zi,v){if(this.styles.save(m),S||(w=e._gsap,w.renderTransform&&!t.parseTransform||$a(e,t.parseTransform),b=t.smoothOrigin!==!1&&w.smooth,S=this._pt=new Cn(this._pt,a,At,0,1,w.renderTransform,w,0,-1),S.dep=1),m==="scale")this._pt=new Cn(this._pt,w,"scaleY",w.scaleY,(y?Us(w.scaleY,y+d):d)-w.scaleY||0,wu),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){D.push(Rn,0,a[Rn]),u=Vb(u),w.svg?Ru(e,u,0,b,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==w.zOrigin&&Qi(this,w,"zOrigin",w.zOrigin,g),Qi(this,a,m,gl(c),gl(u)));continue}else if(m==="svgOrigin"){Ru(e,u,1,b,0,this);continue}else if(m in w_){qb(this,w,m,h,y?Us(h,y+u):u);continue}else if(m==="smoothOrigin"){Qi(this,w,"smooth",w.smooth,u);continue}else if(m==="force3D"){w[m]=u;continue}else if(m==="transform"){Yb(this,u,e);continue}}else m in a||(m=js(m)||m);if(v||(d||d===0)&&(h||h===0)&&!Rb.test(u)&&m in a)p=(c+"").substr((h+"").length),d||(d=0),g=rn(u)||(m in Gn.units?Gn.units[m]:p),p!==g&&(h=ur(e,m,c,g)),this._pt=new Cn(this._pt,v?w:a,m,h,(y?Us(h,y+d):d)-h,!v&&(g==="px"||m==="zIndex")&&t.autoRound!==!1?Db:wu),this._pt.u=g||0,p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=Lb);else if(m in a)Hb.call(this,e,m,c,y?y+u:u);else if(m in e)this.add(e,m,c||e[m],y?y+u:u,r,s);else if(m!=="parseTransform"){ah(m,u);continue}v||(m in a?D.push(m,0,a[m]):D.push(m,1,c||e[m])),o.push(m)}}M&&g_(this)},render:function(e,t){if(t.tween._time||!_h())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ri,aliases:pi,getSetter:function(e,t,n){var r=pi[t];return r&&r.indexOf(",")<0&&(t=r),t in zi&&t!==Rn&&(e._gsap.x||Ri(e,"x"))?n&&Ad===n?t==="scale"?Nb:Ob:(Ad=n||{})&&(t==="scale"?Fb:Bb):e.style&&!ih(e.style[t])?Ib:~t.indexOf("-")?Ub:dh(e,t)},core:{_removeProperty:Zr,_getMatrix:vh}};Pn.utils.checkPrefix=js;Pn.core.getStyleSaver=M_;(function(i,e,t,n){var r=An(i+","+e+","+t,function(s){zi[s]=1});An(e,function(s){Gn.units[s]="deg",w_[s]=1}),pi[r[13]]=i+","+e,An(n,function(s){var o=s.split(":");pi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");An("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Gn.units[i]="px"});Pn.registerPlugin(R_);var zt=Pn.registerPlugin(R_)||Pn;zt.core.Tween;/*!
 * paths 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var jb=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,Kb=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,Zb=Math.PI/180,Ro=Math.sin,Po=Math.cos,Ca=Math.abs,pa=Math.sqrt,Jb=function(e){return typeof e=="number"},Od=1e5,qi=function(e){return Math.round(e*Od)/Od||0};function Qb(i,e,t,n,r,s,o){for(var a=i.length,l,c,u,d,h;--a>-1;)for(l=i[a],c=l.length,u=0;u<c;u+=2)d=l[u],h=l[u+1],l[u]=d*e+h*n+s,l[u+1]=d*t+h*r+o;return i._dirty=1,i}function eT(i,e,t,n,r,s,o,a,l){if(!(i===a&&e===l)){t=Ca(t),n=Ca(n);var c=r%360*Zb,u=Po(c),d=Ro(c),h=Math.PI,f=h*2,_=(i-a)/2,m=(e-l)/2,p=u*_+d*m,g=-d*_+u*m,y=p*p,v=g*g,S=y/(t*t)+v/(n*n);S>1&&(t=pa(S)*t,n=pa(S)*n);var w=t*t,b=n*n,M=(w*b-w*v-b*y)/(w*v+b*y);M<0&&(M=0);var D=(s===o?-1:1)*pa(M),I=D*(t*g/n),x=D*-(n*p/t),A=(i+a)/2,U=(e+l)/2,Y=A+(u*I-d*x),L=U+(d*I+u*x),N=(p-I)/t,O=(g-x)/n,k=(-p-I)/t,W=(-g-x)/n,q=N*N+O*O,R=(O<0?-1:1)*Math.acos(N/pa(q)),j=(N*W-O*k<0?-1:1)*Math.acos((N*k+O*W)/pa(q*(k*k+W*W)));isNaN(j)&&(j=h),!o&&j>0?j-=f:o&&j<0&&(j+=f),R%=f,j%=f;var re=Math.ceil(Ca(j)/(f/4)),ve=[],H=j/re,J=4/3*Ro(H/2)/(1+Po(H/2)),he=u*t,_e=d*t,Se=d*-n,de=u*n,Fe;for(Fe=0;Fe<re;Fe++)r=R+Fe*H,p=Po(r),g=Ro(r),N=Po(r+=H),O=Ro(r),ve.push(p-J*g,g+J*p,N+J*O,O-J*N,N,O);for(Fe=0;Fe<ve.length;Fe+=2)p=ve[Fe],g=ve[Fe+1],ve[Fe]=p*he+g*Se+Y,ve[Fe+1]=p*_e+g*de+L;return ve[Fe-2]=a,ve[Fe-1]=l,ve}}function tT(i){var e=(i+"").replace(Kb,function(I){var x=+I;return x<1e-4&&x>-1e-4?0:x}).match(jb)||[],t=[],n=0,r=0,s=2/3,o=e.length,a=0,l="ERROR: malformed path: "+i,c,u,d,h,f,_,m,p,g,y,v,S,w,b,M,D=function(x,A,U,Y){y=(U-x)/3,v=(Y-A)/3,m.push(x+y,A+v,U-y,Y-v,U,Y)};if(!i||!isNaN(e[0])||isNaN(e[1]))return console.log(l),t;for(c=0;c<o;c++)if(w=f,isNaN(e[c])?(f=e[c].toUpperCase(),_=f!==e[c]):c--,d=+e[c+1],h=+e[c+2],_&&(d+=n,h+=r),c||(p=d,g=h),f==="M")m&&(m.length<8?t.length-=1:a+=m.length),n=p=d,r=g=h,m=[d,h],t.push(m),c+=2,f="L";else if(f==="C")m||(m=[0,0]),_||(n=r=0),m.push(d,h,n+e[c+3]*1,r+e[c+4]*1,n+=e[c+5]*1,r+=e[c+6]*1),c+=6;else if(f==="S")y=n,v=r,(w==="C"||w==="S")&&(y+=n-m[m.length-4],v+=r-m[m.length-3]),_||(n=r=0),m.push(y,v,d,h,n+=e[c+3]*1,r+=e[c+4]*1),c+=4;else if(f==="Q")y=n+(d-n)*s,v=r+(h-r)*s,_||(n=r=0),n+=e[c+3]*1,r+=e[c+4]*1,m.push(y,v,n+(d-n)*s,r+(h-r)*s,n,r),c+=4;else if(f==="T")y=n-m[m.length-4],v=r-m[m.length-3],m.push(n+y,r+v,d+(n+y*1.5-d)*s,h+(r+v*1.5-h)*s,n=d,r=h),c+=2;else if(f==="H")D(n,r,n=d,r),c+=1;else if(f==="V")D(n,r,n,r=d+(_?r-n:0)),c+=1;else if(f==="L"||f==="Z")f==="Z"&&(d=p,h=g,m.closed=!0),(f==="L"||Ca(n-d)>.5||Ca(r-h)>.5)&&(D(n,r,d,h),f==="L"&&(c+=2)),n=d,r=h;else if(f==="A"){if(b=e[c+4],M=e[c+5],y=e[c+6],v=e[c+7],u=7,b.length>1&&(b.length<3?(v=y,y=M,u--):(v=M,y=b.substr(2),u-=2),M=b.charAt(1),b=b.charAt(0)),S=eT(n,r,+e[c+1],+e[c+2],+e[c+3],+b,+M,(_?n:0)+y*1,(_?r:0)+v*1),c+=u,S)for(u=0;u<S.length;u++)m.push(S[u]);n=m[m.length-2],r=m[m.length-1]}else console.log(l);return c=m.length,c<6?(t.pop(),c=0):m[0]===m[c-2]&&m[1]===m[c-1]&&(m.closed=!0),t.totalPoints=a+c,t}function nT(i){Jb(i[0])&&(i=[i]);var e="",t=i.length,n,r,s,o;for(r=0;r<t;r++){for(o=i[r],e+="M"+qi(o[0])+","+qi(o[1])+" C",n=o.length,s=2;s<n;s++)e+=qi(o[s++])+","+qi(o[s++])+" "+qi(o[s++])+","+qi(o[s++])+" "+qi(o[s++])+","+qi(o[s])+" ";o.closed&&(e+="z")}return e}/*!
 * CustomEase 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var bn,P_,L_=function(){return bn||typeof window<"u"&&(bn=window.gsap)&&bn.registerPlugin&&bn},Nd=function(){bn=L_(),bn?(bn.registerEase("_CE",pr.create),P_=1):console.warn("Please gsap.registerPlugin(CustomEase)")},iT=1e20,Lo=function(e){return~~(e*1e3+(e<0?-.5:.5))/1e3},rT=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,sT=/[cLlsSaAhHvVtTqQ]/g,aT=function(e){var t=e.length,n=iT,r;for(r=1;r<t;r+=6)+e[r]<n&&(n=+e[r]);return n},oT=function(e,t,n){!n&&n!==0&&(n=Math.max(+e[e.length-1],+e[1]));var r=+e[0]*-1,s=-n,o=e.length,a=1/(+e[o-2]+r),l=-t||(Math.abs(+e[o-1]-+e[1])<.01*(+e[o-2]-+e[0])?aT(e)+s:+e[o-1]+s),c;for(l?l=1/l:l=-a,c=0;c<o;c+=2)e[c]=(+e[c]+r)*a,e[c+1]=(+e[c+1]+s)*l},lT=function i(e,t,n,r,s,o,a,l,c,u,d){var h=(e+n)/2,f=(t+r)/2,_=(n+s)/2,m=(r+o)/2,p=(s+a)/2,g=(o+l)/2,y=(h+_)/2,v=(f+m)/2,S=(_+p)/2,w=(m+g)/2,b=(y+S)/2,M=(v+w)/2,D=a-e,I=l-t,x=Math.abs((n-a)*I-(r-l)*D),A=Math.abs((s-a)*I-(o-l)*D),U;return u||(u=[{x:e,y:t},{x:a,y:l}],d=1),u.splice(d||u.length-1,0,{x:b,y:M}),(x+A)*(x+A)>c*(D*D+I*I)&&(U=u.length,i(e,t,h,f,y,v,b,M,c,u,d),i(b,M,S,w,p,g,a,l,c,u,d+1+(u.length-U))),u},pr=function(){function i(t,n,r){P_||Nd(),this.id=t,this.setData(n,r)}var e=i.prototype;return e.setData=function(n,r){r=r||{},n=n||"0,0,1,1";var s=n.match(rT),o=1,a=[],l=[],c=r.precision||1,u=c<=1,d,h,f,_,m,p,g,y,v;if(this.data=n,(sT.test(n)||~n.indexOf("M")&&n.indexOf("C")<0)&&(s=tT(n)[0]),d=s.length,d===4)s.unshift(0,0),s.push(1,1),d=8;else if((d-2)%6)throw"Invalid CustomEase";for((+s[0]!=0||+s[d-2]!=1)&&oT(s,r.height,r.originY),this.segment=s,_=2;_<d;_+=6)h={x:+s[_-2],y:+s[_-1]},f={x:+s[_+4],y:+s[_+5]},a.push(h,f),lT(h.x,h.y,+s[_],+s[_+1],+s[_+2],+s[_+3],f.x,f.y,1/(c*2e5),a,a.length-1);for(d=a.length,_=0;_<d;_++)g=a[_],y=a[_-1]||g,(g.x>y.x||y.y!==g.y&&y.x===g.x||g===y)&&g.x<=1?(y.cx=g.x-y.x,y.cy=g.y-y.y,y.n=g,y.nx=g.x,u&&_>1&&Math.abs(y.cy/y.cx-a[_-2].cy/a[_-2].cx)>2&&(u=0),y.cx<o&&(y.cx?o=y.cx:(y.cx=.001,_===d-1&&(y.x-=.001,o=Math.min(o,.001),u=0)))):(a.splice(_--,1),d--);if(d=1/o+1|0,m=1/d,p=0,g=a[0],u){for(_=0;_<d;_++)v=_*m,g.nx<v&&(g=a[++p]),h=g.y+(v-g.x)/g.cx*g.cy,l[_]={x:v,cx:m,y:h,cy:0,nx:9},_&&(l[_-1].cy=h-l[_-1].y);l[d-1].cy=a[a.length-1].y-h}else{for(_=0;_<d;_++)g.nx<_*m&&(g=a[++p]),l[_]=g;p<a.length-1&&(l[_-1]=a[a.length-2])}return this.ease=function(S){var w=l[S*d|0]||l[d-1];return w.nx<S&&(w=w.n),w.y+(S-w.x)/w.cx*w.cy},this.ease.custom=this,this.id&&bn&&bn.registerEase(this.id,this.ease),this},e.getSVGData=function(n){return i.getSVGData(this,n)},i.create=function(n,r,s){return new i(n,r,s).ease},i.register=function(n){bn=n,Nd()},i.get=function(n){return bn.parseEase(n)},i.getSVGData=function(n,r){r=r||{};var s=r.width||100,o=r.height||100,a=r.x||0,l=(r.y||0)+o,c=bn.utils.toArray(r.path)[0],u,d,h,f,_,m,p,g,y,v;if(r.invert&&(o=-o,l=0),typeof n=="string"&&(n=bn.parseEase(n)),n.custom&&(n=n.custom),n instanceof i)u=nT(Qb([n.segment],s,0,0,-o,a,l));else{for(u=[a,l],p=Math.max(5,(r.precision||1)*200),f=1/p,p+=2,g=5/p,y=Lo(a+f*s),v=Lo(l+n(f)*-o),d=(v-l)/(y-a),h=2;h<p;h++)_=Lo(a+h*f*s),m=Lo(l+n(h*f)*-o),(Math.abs((m-v)/(_-y)-d)>g||h===p-1)&&(u.push(y,v),d=(m-v)/(_-y)),y=_,v=m;u="M"+u.join(",")}return c&&c.setAttribute("d",u),u},i}();L_()&&bn.registerPlugin(pr);pr.version="3.12.5";function Fd(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function cT(i,e,t){return e&&Fd(i.prototype,e),t&&Fd(i,t),i}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var jt,Qo,Bn,er,tr,Fs,D_,wr,Ra,I_,Ui,ii,U_,O_=function(){return jt||typeof window<"u"&&(jt=window.gsap)&&jt.registerPlugin&&jt},N_=1,Ps=[],tt=[],xi=[],Pa=Date.now,Pu=function(e,t){return t},uT=function(){var e=Ra.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,tt),r.push.apply(r,xi),tt=n,xi=r,Pu=function(o,a){return t[o](a)}},or=function(e,t){return~xi.indexOf(e)&&xi[xi.indexOf(e)+1][t]},La=function(e){return!!~I_.indexOf(e)},cn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:r!==!1,capture:!!s})},ln=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Do="scrollLeft",Io="scrollTop",Lu=function(){return Ui&&Ui.isPressed||tt.cache++},vl=function(e,t){var n=function r(s){if(s||s===0){N_&&(Bn.history.scrollRestoration="manual");var o=Ui&&Ui.isPressed;s=r.v=Math.round(s)||(Ui&&Ui.iOS?1:0),e(s),r.cacheID=tt.cache,o&&Pu("ss",s)}else(t||tt.cache!==r.cacheID||Pu("ref"))&&(r.cacheID=tt.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},gn={s:Do,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:vl(function(i){return arguments.length?Bn.scrollTo(i,Bt.sc()):Bn.pageXOffset||er[Do]||tr[Do]||Fs[Do]||0})},Bt={s:Io,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:gn,sc:vl(function(i){return arguments.length?Bn.scrollTo(gn.sc(),i):Bn.pageYOffset||er[Io]||tr[Io]||Fs[Io]||0})},Mn=function(e,t){return(t&&t._ctx&&t._ctx.selector||jt.utils.toArray)(e)[0]||(typeof e=="string"&&jt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},hr=function(e,t){var n=t.s,r=t.sc;La(e)&&(e=er.scrollingElement||tr);var s=tt.indexOf(e),o=r===Bt.sc?1:2;!~s&&(s=tt.push(e)-1),tt[s+o]||cn(e,"scroll",Lu);var a=tt[s+o],l=a||(tt[s+o]=vl(or(e,n),!0)||(La(e)?r:vl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=jt.getProperty(e,"scrollBehavior")==="smooth"),l},Du=function(e,t,n){var r=e,s=e,o=Pa(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,m){var p=Pa();m||p-o>l?(s=r,r=_,a=o,o=p):n?r+=_:r=s+(_-s)/(p-a)*(o-a)},d=function(){s=r=n?0:r,a=o=0},h=function(_){var m=a,p=s,g=Pa();return(_||_===0)&&_!==r&&u(_),o===a||g-a>c?0:(r+(n?p:-p))/((n?g:o)-m)*1e3};return{update:u,reset:d,getVelocity:h}},ma=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Bd=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},F_=function(){Ra=jt.core.globals().ScrollTrigger,Ra&&Ra.core&&uT()},B_=function(e){return jt=e||O_(),!Qo&&jt&&typeof document<"u"&&document.body&&(Bn=window,er=document,tr=er.documentElement,Fs=er.body,I_=[Bn,er,tr,Fs],jt.utils.clamp,U_=jt.core.context||function(){},wr="onpointerenter"in Fs?"pointer":"mouse",D_=Lt.isTouch=Bn.matchMedia&&Bn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Bn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ii=Lt.eventTypes=("ontouchstart"in tr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in tr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return N_=0},500),F_(),Qo=1),Qo};gn.op=Bt;tt.cache=0;var Lt=function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){Qo||B_(jt)||console.warn("Please gsap.registerPlugin(Observer)"),Ra||F_();var r=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,h=n.onStopDelay,f=n.ignore,_=n.wheelSpeed,m=n.event,p=n.onDragStart,g=n.onDragEnd,y=n.onDrag,v=n.onPress,S=n.onRelease,w=n.onRight,b=n.onLeft,M=n.onUp,D=n.onDown,I=n.onChangeX,x=n.onChangeY,A=n.onChange,U=n.onToggleX,Y=n.onToggleY,L=n.onHover,N=n.onHoverEnd,O=n.onMove,k=n.ignoreCheck,W=n.isNormalizer,q=n.onGestureStart,R=n.onGestureEnd,j=n.onWheel,re=n.onEnable,ve=n.onDisable,H=n.onClick,J=n.scrollSpeed,he=n.capture,_e=n.allowClicks,Se=n.lockAxis,de=n.onLockAxis;this.target=a=Mn(a)||tr,this.vars=n,f&&(f=jt.utils.toArray(f)),r=r||1e-9,s=s||0,_=_||1,J=J||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Bn.getComputedStyle(Fs).lineHeight)||22);var Fe,De,B,ke,me,Pe,xe,V=this,Oe=0,C=0,E=n.passive||!u,z=hr(a,gn),ne=hr(a,Bt),ie=z(),ae=ne(),ee=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ii[0]==="pointerdown",te=La(a),Z=a.ownerDocument||er,ue=[0,0,0],Re=[0,0,0],Q=0,Ee=function(){return Q=Pa()},se=function(Ae,Ne){return(V.event=Ae)&&f&&~f.indexOf(Ae.target)||Ne&&ee&&Ae.pointerType!=="touch"||k&&k(Ae,Ne)},Ie=function(){V._vx.reset(),V._vy.reset(),De.pause(),d&&d(V)},Te=function(){var Ae=V.deltaX=Bd(ue),Ne=V.deltaY=Bd(Re),ce=Math.abs(Ae)>=r,Ge=Math.abs(Ne)>=r;A&&(ce||Ge)&&A(V,Ae,Ne,ue,Re),ce&&(w&&V.deltaX>0&&w(V),b&&V.deltaX<0&&b(V),I&&I(V),U&&V.deltaX<0!=Oe<0&&U(V),Oe=V.deltaX,ue[0]=ue[1]=ue[2]=0),Ge&&(D&&V.deltaY>0&&D(V),M&&V.deltaY<0&&M(V),x&&x(V),Y&&V.deltaY<0!=C<0&&Y(V),C=V.deltaY,Re[0]=Re[1]=Re[2]=0),(ke||B)&&(O&&O(V),B&&(y(V),B=!1),ke=!1),Pe&&!(Pe=!1)&&de&&de(V),me&&(j(V),me=!1),Fe=0},ye=function(Ae,Ne,ce){ue[ce]+=Ae,Re[ce]+=Ne,V._vx.update(Ae),V._vy.update(Ne),c?Fe||(Fe=requestAnimationFrame(Te)):Te()},We=function(Ae,Ne){Se&&!xe&&(V.axis=xe=Math.abs(Ae)>Math.abs(Ne)?"x":"y",Pe=!0),xe!=="y"&&(ue[2]+=Ae,V._vx.update(Ae,!0)),xe!=="x"&&(Re[2]+=Ne,V._vy.update(Ne,!0)),c?Fe||(Fe=requestAnimationFrame(Te)):Te()},Ze=function(Ae){if(!se(Ae,1)){Ae=ma(Ae,u);var Ne=Ae.clientX,ce=Ae.clientY,Ge=Ne-V.x,ze=ce-V.y,Xe=V.isDragging;V.x=Ne,V.y=ce,(Xe||Math.abs(V.startX-Ne)>=s||Math.abs(V.startY-ce)>=s)&&(y&&(B=!0),Xe||(V.isDragging=!0),We(Ge,ze),Xe||p&&p(V))}},st=V.onPress=function(Le){se(Le,1)||Le&&Le.button||(V.axis=xe=null,De.pause(),V.isPressed=!0,Le=ma(Le),Oe=C=0,V.startX=V.x=Le.clientX,V.startY=V.y=Le.clientY,V._vx.reset(),V._vy.reset(),cn(W?a:Z,ii[1],Ze,E,!0),V.deltaX=V.deltaY=0,v&&v(V))},ge=V.onRelease=function(Le){if(!se(Le,1)){ln(W?a:Z,ii[1],Ze,!0);var Ae=!isNaN(V.y-V.startY),Ne=V.isDragging,ce=Ne&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),Ge=ma(Le);!ce&&Ae&&(V._vx.reset(),V._vy.reset(),u&&_e&&jt.delayedCall(.08,function(){if(Pa()-Q>300&&!Le.defaultPrevented){if(Le.target.click)Le.target.click();else if(Z.createEvent){var ze=Z.createEvent("MouseEvents");ze.initMouseEvent("click",!0,!0,Bn,1,Ge.screenX,Ge.screenY,Ge.clientX,Ge.clientY,!1,!1,!1,!1,0,null),Le.target.dispatchEvent(ze)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,d&&Ne&&!W&&De.restart(!0),g&&Ne&&g(V),S&&S(V,ce)}},nt=function(Ae){return Ae.touches&&Ae.touches.length>1&&(V.isGesturing=!0)&&q(Ae,V.isDragging)},P=function(){return(V.isGesturing=!1)||R(V)},oe=function(Ae){if(!se(Ae)){var Ne=z(),ce=ne();ye((Ne-ie)*J,(ce-ae)*J,1),ie=Ne,ae=ce,d&&De.restart(!0)}},le=function(Ae){if(!se(Ae)){Ae=ma(Ae,u),j&&(me=!0);var Ne=(Ae.deltaMode===1?l:Ae.deltaMode===2?Bn.innerHeight:1)*_;ye(Ae.deltaX*Ne,Ae.deltaY*Ne,0),d&&!W&&De.restart(!0)}},Me=function(Ae){if(!se(Ae)){var Ne=Ae.clientX,ce=Ae.clientY,Ge=Ne-V.x,ze=ce-V.y;V.x=Ne,V.y=ce,ke=!0,d&&De.restart(!0),(Ge||ze)&&We(Ge,ze)}},Be=function(Ae){V.event=Ae,L(V)},Ke=function(Ae){V.event=Ae,N(V)},ot=function(Ae){return se(Ae)||ma(Ae,u)&&H(V)};De=V._dc=jt.delayedCall(h||.25,Ie).pause(),V.deltaX=V.deltaY=0,V._vx=Du(0,50,!0),V._vy=Du(0,50,!0),V.scrollX=z,V.scrollY=ne,V.isDragging=V.isGesturing=V.isPressed=!1,U_(this),V.enable=function(Le){return V.isEnabled||(cn(te?Z:a,"scroll",Lu),o.indexOf("scroll")>=0&&cn(te?Z:a,"scroll",oe,E,he),o.indexOf("wheel")>=0&&cn(a,"wheel",le,E,he),(o.indexOf("touch")>=0&&D_||o.indexOf("pointer")>=0)&&(cn(a,ii[0],st,E,he),cn(Z,ii[2],ge),cn(Z,ii[3],ge),_e&&cn(a,"click",Ee,!0,!0),H&&cn(a,"click",ot),q&&cn(Z,"gesturestart",nt),R&&cn(Z,"gestureend",P),L&&cn(a,wr+"enter",Be),N&&cn(a,wr+"leave",Ke),O&&cn(a,wr+"move",Me)),V.isEnabled=!0,Le&&Le.type&&st(Le),re&&re(V)),V},V.disable=function(){V.isEnabled&&(Ps.filter(function(Le){return Le!==V&&La(Le.target)}).length||ln(te?Z:a,"scroll",Lu),V.isPressed&&(V._vx.reset(),V._vy.reset(),ln(W?a:Z,ii[1],Ze,!0)),ln(te?Z:a,"scroll",oe,he),ln(a,"wheel",le,he),ln(a,ii[0],st,he),ln(Z,ii[2],ge),ln(Z,ii[3],ge),ln(a,"click",Ee,!0),ln(a,"click",ot),ln(Z,"gesturestart",nt),ln(Z,"gestureend",P),ln(a,wr+"enter",Be),ln(a,wr+"leave",Ke),ln(a,wr+"move",Me),V.isEnabled=V.isPressed=V.isDragging=!1,ve&&ve(V))},V.kill=V.revert=function(){V.disable();var Le=Ps.indexOf(V);Le>=0&&Ps.splice(Le,1),Ui===V&&(Ui=0)},Ps.push(V),W&&La(a)&&(Ui=V),V.enable(m)},cT(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i}();Lt.version="3.12.5";Lt.create=function(i){return new Lt(i)};Lt.register=B_;Lt.getAll=function(){return Ps.slice()};Lt.getById=function(i){return Ps.filter(function(e){return e.vars.id===i})[0]};O_()&&jt.registerPlugin(Lt);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var be,bs,it,Tt,ri,St,z_,xl,qa,Da,ya,Uo,en,Ol,Iu,fn,zd,kd,Ts,k_,Uc,G_,hn,Uu,H_,V_,Yi,Ou,xh,Bs,yh,yl,Nu,Oc,Oo=1,nn=Date.now,Nc=nn(),Jn=0,Sa=0,Gd=function(e,t,n){var r=On(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Hd=function(e,t){return t&&(!On(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},hT=function i(){return Sa&&requestAnimationFrame(i)},Vd=function(){return Ol=1},Wd=function(){return Ol=0},ui=function(e){return e},Ma=function(e){return Math.round(e*1e5)/1e5||0},W_=function(){return typeof window<"u"},X_=function(){return be||W_()&&(be=window.gsap)&&be.registerPlugin&&be},Jr=function(e){return!!~z_.indexOf(e)},$_=function(e){return(e==="Height"?yh:it["inner"+e])||ri["client"+e]||St["client"+e]},q_=function(e){return or(e,"getBoundingClientRect")||(Jr(e)?function(){return rl.width=it.innerWidth,rl.height=yh,rl}:function(){return Di(e)})},fT=function(e,t,n){var r=n.d,s=n.d2,o=n.a;return(o=or(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?$_(s):e["client"+s])||0}},dT=function(e,t){return!t||~xi.indexOf(e)?q_(e):function(){return rl}},mi=function(e,t){var n=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+r)&&(o=or(e,n))?o()-q_(e)()[s]:Jr(e)?(ri[n]||St[n])-$_(r):e[n]-e["offset"+r])},No=function(e,t){for(var n=0;n<Ts.length;n+=3)(!t||~t.indexOf(Ts[n+1]))&&e(Ts[n],Ts[n+1],Ts[n+2])},On=function(e){return typeof e=="string"},vn=function(e){return typeof e=="function"},Ea=function(e){return typeof e=="number"},Ar=function(e){return typeof e=="object"},_a=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Fc=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Ss=Math.abs,Y_="left",j_="top",Sh="right",Mh="bottom",$r="width",qr="height",Ia="Right",Ua="Left",Oa="Top",Na="Bottom",It="padding",qn="margin",Ks="Width",Eh="Height",Ft="px",Yn=function(e){return it.getComputedStyle(e)},pT=function(e){var t=Yn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Xd=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Di=function(e,t){var n=t&&Yn(e)[Iu]!=="matrix(1, 0, 0, 1, 0, 0)"&&be.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},Sl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},K_=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},mT=function(e){return function(t){return be.utils.snap(K_(e),t)}},bh=function(e){var t=be.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<n.length;a++)if(n[a]>=r)return n[a];return n[a-1]}else for(a=n.length,r+=o;a--;)if(n[a]<=r)return n[a];return n[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},_T=function(e){return function(t,n){return bh(K_(e))(t,n.direction)}},Fo=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},Wt=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},Vt=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Bo=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},$d={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},zo={toggleActions:"play",anticipatePin:0},Ml={top:0,left:0,center:.5,bottom:1,right:1},el=function(e,t){if(On(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in Ml?Ml[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ko=function(e,t,n,r,s,o,a,l){var c=s.startColor,u=s.endColor,d=s.fontSize,h=s.indent,f=s.fontWeight,_=Tt.createElement("div"),m=Jr(n)||or(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,g=m?St:n,y=e.indexOf("start")!==-1,v=y?c:u,S="border-color:"+v+";font-size:"+d+";color:"+v+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((p||l)&&m?"fixed;":"absolute;"),(p||l||!m)&&(S+=(r===Bt?Sh:Mh)+":"+(o+parseFloat(h))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=y,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=S,_.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(_,g.children[0]):g.appendChild(_),_._offset=_["offset"+r.op.d2],tl(_,0,r,y),_},tl=function(e,t,n,r){var s={display:"block"},o=n[r?"os2":"p2"],a=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+o+Ks]=1,s["border"+a+Ks]=0,s[n.p]=t+"px",be.set(e,s)},Qe=[],Fu={},Ya,qd=function(){return nn()-Jn>34&&(Ya||(Ya=requestAnimationFrame(Oi)))},Ms=function(){(!hn||!hn.isPressed||hn.startX>St.clientWidth)&&(tt.cache++,hn?Ya||(Ya=requestAnimationFrame(Oi)):Oi(),Jn||es("scrollStart"),Jn=nn())},Bc=function(){V_=it.innerWidth,H_=it.innerHeight},ba=function(){tt.cache++,!en&&!G_&&!Tt.fullscreenElement&&!Tt.webkitFullscreenElement&&(!Uu||V_!==it.innerWidth||Math.abs(it.innerHeight-H_)>it.innerHeight*.25)&&xl.restart(!0)},Qr={},gT=[],Z_=function i(){return Vt(je,"scrollEnd",i)||Or(!0)},es=function(e){return Qr[e]&&Qr[e].map(function(t){return t()})||gT},Un=[],J_=function(e){for(var t=0;t<Un.length;t+=5)(!e||Un[t+4]&&Un[t+4].query===e)&&(Un[t].style.cssText=Un[t+1],Un[t].getBBox&&Un[t].setAttribute("transform",Un[t+2]||""),Un[t+3].uncache=1)},Th=function(e,t){var n;for(fn=0;fn<Qe.length;fn++)n=Qe[fn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));yl=!0,t&&J_(t),t||es("revert")},Q_=function(e,t){tt.cache++,(t||!dn)&&tt.forEach(function(n){return vn(n)&&n.cacheID++&&(n.rec=0)}),On(e)&&(it.history.scrollRestoration=xh=e)},dn,Yr=0,Yd,vT=function(){if(Yd!==Yr){var e=Yd=Yr;requestAnimationFrame(function(){return e===Yr&&Or(!0)})}},eg=function(){St.appendChild(Bs),yh=!hn&&Bs.offsetHeight||it.innerHeight,St.removeChild(Bs)},jd=function(e){return qa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Or=function(e,t){if(Jn&&!e&&!yl){Wt(je,"scrollEnd",Z_);return}eg(),dn=je.isRefreshing=!0,tt.forEach(function(r){return vn(r)&&++r.cacheID&&(r.rec=r())});var n=es("refreshInit");k_&&je.sort(),t||Th(),tt.forEach(function(r){vn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Qe.slice(0).forEach(function(r){return r.refresh()}),yl=!1,Qe.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Nu=1,jd(!0),Qe.forEach(function(r){var s=mi(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),jd(!1),Nu=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),tt.forEach(function(r){vn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Q_(xh,1),xl.pause(),Yr++,dn=2,Oi(2),Qe.forEach(function(r){return vn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),dn=je.isRefreshing=!1,es("refresh")},Bu=0,nl=1,Fa,Oi=function(e){if(e===2||!dn&&!yl){je.isUpdating=!0,Fa&&Fa.update(0);var t=Qe.length,n=nn(),r=n-Nc>=50,s=t&&Qe[0].scroll();if(nl=Bu>s?-1:1,dn||(Bu=s),r&&(Jn&&!Ol&&n-Jn>200&&(Jn=0,es("scrollEnd")),ya=Nc,Nc=n),nl<0){for(fn=t;fn-- >0;)Qe[fn]&&Qe[fn].update(0,r);nl=1}else for(fn=0;fn<t;fn++)Qe[fn]&&Qe[fn].update(0,r);je.isUpdating=!1}Ya=0},zu=[Y_,j_,Mh,Sh,qn+Na,qn+Ia,qn+Oa,qn+Ua,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],il=zu.concat([$r,qr,"boxSizing","max"+Ks,"max"+Eh,"position",qn,It,It+Oa,It+Ia,It+Na,It+Ua]),xT=function(e,t,n){zs(n);var r=e._gsap;if(r.spacerIsNative)zs(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},zc=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=zu.length,o=t.style,a=e.style,l;s--;)l=zu[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Mh]=a[Sh]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[$r]=Sl(e,gn)+Ft,o[qr]=Sl(e,Bt)+Ft,o[It]=a[qn]=a[j_]=a[Y_]="0",zs(r),a[$r]=a["max"+Ks]=n[$r],a[qr]=a["max"+Eh]=n[qr],a[It]=n[It],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},yT=/([A-Z])/g,zs=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,o;for((e.t._gsap||be.core.getCache(e.t)).uncache=1;r<n;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(yT,"-$1").toLowerCase())}},Go=function(e){for(var t=il.length,n=e.style,r=[],s=0;s<t;s++)r.push(il[s],n[il[s]]);return r.t=e,r},ST=function(e,t,n){for(var r=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},rl={left:0,top:0},Kd=function(e,t,n,r,s,o,a,l,c,u,d,h,f,_){vn(e)&&(e=e(l)),On(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?el("0"+e.substr(3),n):0));var m=f?f.time():0,p,g,y;if(f&&f.seek(0),isNaN(e)||(e=+e),Ea(e))f&&(e=be.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,h,e)),a&&tl(a,n,r,!0);else{vn(t)&&(t=t(l));var v=(e||"0").split(" "),S,w,b,M;y=Mn(t,l)||St,S=Di(y)||{},(!S||!S.left&&!S.top)&&Yn(y).display==="none"&&(M=y.style.display,y.style.display="block",S=Di(y),M?y.style.display=M:y.style.removeProperty("display")),w=el(v[0],S[r.d]),b=el(v[1]||"0",n),e=S[r.p]-c[r.p]-u+w+s-b,a&&tl(a,b,r,n-b<20||a._isStart&&b>20),n-=n-b}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var D=e+n,I=o._isStart;p="scroll"+r.d2,tl(o,D,r,I&&D>20||!I&&(d?Math.max(St[p],ri[p]):o.parentNode[p])<=D+1),d&&(c=Di(a),d&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+Ft))}return f&&y&&(p=Di(y),f.seek(h),g=Di(y),f._caScrollDist=p[r.p]-g[r.p],e=e/f._caScrollDist*h),f&&f.seek(m),f?e:Math.round(e)},MT=/(webkit|moz|length|cssText|inset)/i,Zd=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===St){e._stOrig=s.cssText,a=Yn(e);for(o in a)!+o&&!MT.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=r}else s.cssText=e._stOrig;be.core.getCache(e).uncache=1,t.appendChild(e)}},tg=function(e,t,n){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=r,r=o,o}},Ho=function(e,t,n){var r={};r[t.p]="+="+n,be.set(e,r)},Jd=function(e,t){var n=hr(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,d){var h=o.tween,f=l.onComplete,_={};c=c||n();var m=tg(n,c,function(){h.kill(),o.tween=0});return d=u&&d||0,u=u||a-c,h&&h.kill(),l[r]=a,l.inherit=!1,l.modifiers=_,_[r]=function(){return m(c+u*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){tt.cache++,o.tween&&Oi()},l.onComplete=function(){o.tween=0,f&&f.call(h)},h=o.tween=be.to(e,l),h};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Wt(e,"wheel",n.wheelHandler),je.isTouch&&Wt(e,"touchmove",n.wheelHandler),s},je=function(){function i(t,n){bs||i.register(be)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Ou(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Sa){this.update=this.refresh=this.kill=ui;return}n=Xd(On(n)||Ea(n)||n.nodeType?{trigger:n}:n,zo);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,h=s.trigger,f=s.pin,_=s.pinSpacing,m=s.invalidateOnRefresh,p=s.anticipatePin,g=s.onScrubComplete,y=s.onSnapComplete,v=s.once,S=s.snap,w=s.pinReparent,b=s.pinSpacer,M=s.containerAnimation,D=s.fastScrollEnd,I=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?gn:Bt,A=!d&&d!==0,U=Mn(n.scroller||it),Y=be.core.getCache(U),L=Jr(U),N=("pinType"in n?n.pinType:or(U,"pinType")||L&&"fixed")==="fixed",O=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],k=A&&n.toggleActions.split(" "),W="markers"in n?n.markers:zo.markers,q=L?0:parseFloat(Yn(U)["border"+x.p2+Ks])||0,R=this,j=n.onRefreshInit&&function(){return n.onRefreshInit(R)},re=fT(U,L,x),ve=dT(U,L),H=0,J=0,he=0,_e=hr(U,x),Se,de,Fe,De,B,ke,me,Pe,xe,V,Oe,C,E,z,ne,ie,ae,ee,te,Z,ue,Re,Q,Ee,se,Ie,Te,ye,We,Ze,st,ge,nt,P,oe,le,Me,Be,Ke;if(R._startClamp=R._endClamp=!1,R._dir=x,p*=45,R.scroller=U,R.scroll=M?M.time.bind(M):_e,De=_e(),R.vars=n,r=r||n.animation,"refreshPriority"in n&&(k_=1,n.refreshPriority===-9999&&(Fa=R)),Y.tweenScroll=Y.tweenScroll||{top:Jd(U,Bt),left:Jd(U,gn)},R.tweenTo=Se=Y.tweenScroll[x.p],R.scrubDuration=function(ce){nt=Ea(ce)&&ce,nt?ge?ge.duration(ce):ge=be.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:nt,paused:!0,onComplete:function(){return g&&g(R)}}):(ge&&ge.progress(1).kill(),ge=0)},r&&(r.vars.lazy=!1,r._initted&&!R.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),R.animation=r.pause(),r.scrollTrigger=R,R.scrubDuration(d),Ze=0,l||(l=r.vars.id)),S&&((!Ar(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in St.style&&be.set(L?[St,ri]:U,{scrollBehavior:"auto"}),tt.forEach(function(ce){return vn(ce)&&ce.target===(L?Tt.scrollingElement||ri:U)&&(ce.smooth=!1)}),Fe=vn(S.snapTo)?S.snapTo:S.snapTo==="labels"?mT(r):S.snapTo==="labelsDirectional"?_T(r):S.directional!==!1?function(ce,Ge){return bh(S.snapTo)(ce,nn()-J<500?0:Ge.direction)}:be.utils.snap(S.snapTo),P=S.duration||{min:.1,max:2},P=Ar(P)?Da(P.min,P.max):Da(P,P),oe=be.delayedCall(S.delay||nt/2||.1,function(){var ce=_e(),Ge=nn()-J<500,ze=Se.tween;if((Ge||Math.abs(R.getVelocity())<10)&&!ze&&!Ol&&H!==ce){var Xe=(ce-ke)/z,bt=r&&!A?r.totalProgress():Xe,Je=Ge?0:(bt-st)/(nn()-ya)*1e3||0,mt=be.utils.clamp(-Xe,1-Xe,Ss(Je/2)*Je/.185),Ot=Xe+(S.inertia===!1?0:mt),vt,_t,lt=S,Ln=lt.onStart,T=lt.onInterrupt,F=lt.onComplete;if(vt=Fe(Ot,R),Ea(vt)||(vt=Ot),_t=Math.round(ke+vt*z),ce<=me&&ce>=ke&&_t!==ce){if(ze&&!ze._initted&&ze.data<=Ss(_t-ce))return;S.inertia===!1&&(mt=vt-Xe),Se(_t,{duration:P(Ss(Math.max(Ss(Ot-bt),Ss(vt-bt))*.185/Je/.05||0)),ease:S.ease||"power3",data:Ss(_t-ce),onInterrupt:function(){return oe.restart(!0)&&T&&T(R)},onComplete:function(){R.update(),H=_e(),r&&(ge?ge.resetTo("totalProgress",vt,r._tTime/r._tDur):r.progress(vt)),Ze=st=r&&!A?r.totalProgress():R.progress,y&&y(R),F&&F(R)}},ce,mt*z,_t-ce-mt*z),Ln&&Ln(R,Se.tween)}}else R.isActive&&H!==ce&&oe.restart(!0)}).pause()),l&&(Fu[l]=R),h=R.trigger=Mn(h||f!==!0&&f),Ke=h&&h._gsap&&h._gsap.stRevert,Ke&&(Ke=Ke(R)),f=f===!0?h:Mn(f),On(a)&&(a={targets:h,className:a}),f&&(_===!1||_===qn||(_=!_&&f.parentNode&&f.parentNode.style&&Yn(f.parentNode).display==="flex"?!1:It),R.pin=f,de=be.core.getCache(f),de.spacer?ne=de.pinState:(b&&(b=Mn(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),de.spacerIsNative=!!b,b&&(de.spacerState=Go(b))),de.spacer=ee=b||Tt.createElement("div"),ee.classList.add("pin-spacer"),l&&ee.classList.add("pin-spacer-"+l),de.pinState=ne=Go(f)),n.force3D!==!1&&be.set(f,{force3D:!0}),R.spacer=ee=de.spacer,We=Yn(f),Ee=We[_+x.os2],Z=be.getProperty(f),ue=be.quickSetter(f,x.a,Ft),zc(f,ee,We),ae=Go(f)),W){C=Ar(W)?Xd(W,$d):$d,V=ko("scroller-start",l,U,x,C,0),Oe=ko("scroller-end",l,U,x,C,0,V),te=V["offset"+x.op.d2];var ot=Mn(or(U,"content")||U);Pe=this.markerStart=ko("start",l,ot,x,C,te,0,M),xe=this.markerEnd=ko("end",l,ot,x,C,te,0,M),M&&(Be=be.quickSetter([Pe,xe],x.a,Ft)),!N&&!(xi.length&&or(U,"fixedMarkers")===!0)&&(pT(L?St:U),be.set([V,Oe],{force3D:!0}),Ie=be.quickSetter(V,x.a,Ft),ye=be.quickSetter(Oe,x.a,Ft))}if(M){var Le=M.vars.onUpdate,Ae=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){R.update(0,0,1),Le&&Le.apply(M,Ae||[])})}if(R.previous=function(){return Qe[Qe.indexOf(R)-1]},R.next=function(){return Qe[Qe.indexOf(R)+1]},R.revert=function(ce,Ge){if(!Ge)return R.kill(!0);var ze=ce!==!1||!R.enabled,Xe=en;ze!==R.isReverted&&(ze&&(le=Math.max(_e(),R.scroll.rec||0),he=R.progress,Me=r&&r.progress()),Pe&&[Pe,xe,V,Oe].forEach(function(bt){return bt.style.display=ze?"none":"block"}),ze&&(en=R,R.update(ze)),f&&(!w||!R.isActive)&&(ze?xT(f,ee,ne):zc(f,ee,Yn(f),se)),ze||R.update(ze),en=Xe,R.isReverted=ze)},R.refresh=function(ce,Ge,ze,Xe){if(!((en||!R.enabled)&&!Ge)){if(f&&ce&&Jn){Wt(i,"scrollEnd",Z_);return}!dn&&j&&j(R),en=R,Se.tween&&!ze&&(Se.tween.kill(),Se.tween=0),ge&&ge.pause(),m&&r&&r.revert({kill:!1}).invalidate(),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var bt=re(),Je=ve(),mt=M?M.duration():mi(U,x),Ot=z<=.01,vt=0,_t=Xe||0,lt=Ar(ze)?ze.end:n.end,Ln=n.endTrigger||h,T=Ar(ze)?ze.start:n.start||(n.start===0||!h?0:f?"0 0":"0 100%"),F=R.pinnedContainer=n.pinnedContainer&&Mn(n.pinnedContainer,R),$=h&&Math.max(0,Qe.indexOf(R))||0,X=$,G,fe,we,He,Ce,Ue,Ve,$e,Mt,Nt,ct,on,ut;for(W&&Ar(ze)&&(on=be.getProperty(V,x.p),ut=be.getProperty(Oe,x.p));X--;)Ue=Qe[X],Ue.end||Ue.refresh(0,1)||(en=R),Ve=Ue.pin,Ve&&(Ve===h||Ve===f||Ve===F)&&!Ue.isReverted&&(Nt||(Nt=[]),Nt.unshift(Ue),Ue.revert(!0,!0)),Ue!==Qe[X]&&($--,X--);for(vn(T)&&(T=T(R)),T=Gd(T,"start",R),ke=Kd(T,h,bt,x,_e(),Pe,V,R,Je,q,N,mt,M,R._startClamp&&"_startClamp")||(f?-.001:0),vn(lt)&&(lt=lt(R)),On(lt)&&!lt.indexOf("+=")&&(~lt.indexOf(" ")?lt=(On(T)?T.split(" ")[0]:"")+lt:(vt=el(lt.substr(2),bt),lt=On(T)?T:(M?be.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,ke):ke)+vt,Ln=h)),lt=Gd(lt,"end",R),me=Math.max(ke,Kd(lt||(Ln?"100% 0":mt),Ln,bt,x,_e()+vt,xe,Oe,R,Je,q,N,mt,M,R._endClamp&&"_endClamp"))||-.001,vt=0,X=$;X--;)Ue=Qe[X],Ve=Ue.pin,Ve&&Ue.start-Ue._pinPush<=ke&&!M&&Ue.end>0&&(G=Ue.end-(R._startClamp?Math.max(0,Ue.start):Ue.start),(Ve===h&&Ue.start-Ue._pinPush<ke||Ve===F)&&isNaN(T)&&(vt+=G*(1-Ue.progress)),Ve===f&&(_t+=G));if(ke+=vt,me+=vt,R._startClamp&&(R._startClamp+=vt),R._endClamp&&!dn&&(R._endClamp=me||-.001,me=Math.min(me,mi(U,x))),z=me-ke||(ke-=.01)&&.001,Ot&&(he=be.utils.clamp(0,1,be.utils.normalize(ke,me,le))),R._pinPush=_t,Pe&&vt&&(G={},G[x.a]="+="+vt,F&&(G[x.p]="-="+_e()),be.set([Pe,xe],G)),f&&!(Nu&&R.end>=mi(U,x)))G=Yn(f),He=x===Bt,we=_e(),Re=parseFloat(Z(x.a))+_t,!mt&&me>1&&(ct=(L?Tt.scrollingElement||ri:U).style,ct={style:ct,value:ct["overflow"+x.a.toUpperCase()]},L&&Yn(St)["overflow"+x.a.toUpperCase()]!=="scroll"&&(ct.style["overflow"+x.a.toUpperCase()]="scroll")),zc(f,ee,G),ae=Go(f),fe=Di(f,!0),$e=N&&hr(U,He?gn:Bt)(),_?(se=[_+x.os2,z+_t+Ft],se.t=ee,X=_===It?Sl(f,x)+z+_t:0,X&&(se.push(x.d,X+Ft),ee.style.flexBasis!=="auto"&&(ee.style.flexBasis=X+Ft)),zs(se),F&&Qe.forEach(function(qe){qe.pin===F&&qe.vars.pinSpacing!==!1&&(qe._subPinOffset=!0)}),N&&_e(le)):(X=Sl(f,x),X&&ee.style.flexBasis!=="auto"&&(ee.style.flexBasis=X+Ft)),N&&(Ce={top:fe.top+(He?we-ke:$e)+Ft,left:fe.left+(He?$e:we-ke)+Ft,boxSizing:"border-box",position:"fixed"},Ce[$r]=Ce["max"+Ks]=Math.ceil(fe.width)+Ft,Ce[qr]=Ce["max"+Eh]=Math.ceil(fe.height)+Ft,Ce[qn]=Ce[qn+Oa]=Ce[qn+Ia]=Ce[qn+Na]=Ce[qn+Ua]="0",Ce[It]=G[It],Ce[It+Oa]=G[It+Oa],Ce[It+Ia]=G[It+Ia],Ce[It+Na]=G[It+Na],Ce[It+Ua]=G[It+Ua],ie=ST(ne,Ce,w),dn&&_e(0)),r?(Mt=r._initted,Uc(1),r.render(r.duration(),!0,!0),Q=Z(x.a)-Re+z+_t,Te=Math.abs(z-Q)>1,N&&Te&&ie.splice(ie.length-2,2),r.render(0,!0,!0),Mt||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Uc(0)):Q=z,ct&&(ct.value?ct.style["overflow"+x.a.toUpperCase()]=ct.value:ct.style.removeProperty("overflow-"+x.a));else if(h&&_e()&&!M)for(fe=h.parentNode;fe&&fe!==St;)fe._pinOffset&&(ke-=fe._pinOffset,me-=fe._pinOffset),fe=fe.parentNode;Nt&&Nt.forEach(function(qe){return qe.revert(!1,!0)}),R.start=ke,R.end=me,De=B=dn?le:_e(),!M&&!dn&&(De<le&&_e(le),R.scroll.rec=0),R.revert(!1,!0),J=nn(),oe&&(H=-1,oe.restart(!0)),en=0,r&&A&&(r._initted||Me)&&r.progress()!==Me&&r.progress(Me||0,!0).render(r.time(),!0,!0),(Ot||he!==R.progress||M||m)&&(r&&!A&&r.totalProgress(M&&ke<-.001&&!he?be.utils.normalize(ke,me,0):he,!0),R.progress=Ot||(De-ke)/z===he?0:he),f&&_&&(ee._pinOffset=Math.round(R.progress*Q)),ge&&ge.invalidate(),isNaN(on)||(on-=be.getProperty(V,x.p),ut-=be.getProperty(Oe,x.p),Ho(V,x,on),Ho(Pe,x,on-(Xe||0)),Ho(Oe,x,ut),Ho(xe,x,ut-(Xe||0))),Ot&&!dn&&R.update(),u&&!dn&&!E&&(E=!0,u(R),E=!1)}},R.getVelocity=function(){return(_e()-B)/(nn()-ya)*1e3||0},R.endAnimation=function(){_a(R.callbackAnimation),r&&(ge?ge.progress(1):r.paused()?A||_a(r,R.direction<0,1):_a(r,r.reversed()))},R.labelToScroll=function(ce){return r&&r.labels&&(ke||R.refresh()||ke)+r.labels[ce]/r.duration()*z||0},R.getTrailing=function(ce){var Ge=Qe.indexOf(R),ze=R.direction>0?Qe.slice(0,Ge).reverse():Qe.slice(Ge+1);return(On(ce)?ze.filter(function(Xe){return Xe.vars.preventOverlaps===ce}):ze).filter(function(Xe){return R.direction>0?Xe.end<=ke:Xe.start>=me})},R.update=function(ce,Ge,ze){if(!(M&&!ze&&!ce)){var Xe=dn===!0?le:R.scroll(),bt=ce?0:(Xe-ke)/z,Je=bt<0?0:bt>1?1:bt||0,mt=R.progress,Ot,vt,_t,lt,Ln,T,F,$;if(Ge&&(B=De,De=M?_e():Xe,S&&(st=Ze,Ze=r&&!A?r.totalProgress():Je)),p&&f&&!en&&!Oo&&Jn&&(!Je&&ke<Xe+(Xe-B)/(nn()-ya)*p?Je=1e-4:Je===1&&me>Xe+(Xe-B)/(nn()-ya)*p&&(Je=.9999)),Je!==mt&&R.enabled){if(Ot=R.isActive=!!Je&&Je<1,vt=!!mt&&mt<1,T=Ot!==vt,Ln=T||!!Je!=!!mt,R.direction=Je>mt?1:-1,R.progress=Je,Ln&&!en&&(_t=Je&&!mt?0:Je===1?1:mt===1?2:3,A&&(lt=!T&&k[_t+1]!=="none"&&k[_t+1]||k[_t],$=r&&(lt==="complete"||lt==="reset"||lt in r))),I&&(T||$)&&($||d||!r)&&(vn(I)?I(R):R.getTrailing(I).forEach(function(we){return we.endAnimation()})),A||(ge&&!en&&!Oo?(ge._dp._time-ge._start!==ge._time&&ge.render(ge._dp._time-ge._start),ge.resetTo?ge.resetTo("totalProgress",Je,r._tTime/r._tDur):(ge.vars.totalProgress=Je,ge.invalidate().restart())):r&&r.totalProgress(Je,!!(en&&(J||ce)))),f){if(ce&&_&&(ee.style[_+x.os2]=Ee),!N)ue(Ma(Re+Q*Je));else if(Ln){if(F=!ce&&Je>mt&&me+1>Xe&&Xe+1>=mi(U,x),w)if(!ce&&(Ot||F)){var X=Di(f,!0),G=Xe-ke;Zd(f,St,X.top+(x===Bt?G:0)+Ft,X.left+(x===Bt?0:G)+Ft)}else Zd(f,ee);zs(Ot||F?ie:ae),Te&&Je<1&&Ot||ue(Re+(Je===1&&!F?Q:0))}}S&&!Se.tween&&!en&&!Oo&&oe.restart(!0),a&&(T||v&&Je&&(Je<1||!Oc))&&qa(a.targets).forEach(function(we){return we.classList[Ot||v?"add":"remove"](a.className)}),o&&!A&&!ce&&o(R),Ln&&!en?(A&&($&&(lt==="complete"?r.pause().totalProgress(1):lt==="reset"?r.restart(!0).pause():lt==="restart"?r.restart(!0):r[lt]()),o&&o(R)),(T||!Oc)&&(c&&T&&Fc(R,c),O[_t]&&Fc(R,O[_t]),v&&(Je===1?R.kill(!1,1):O[_t]=0),T||(_t=Je===1?1:3,O[_t]&&Fc(R,O[_t]))),D&&!Ot&&Math.abs(R.getVelocity())>(Ea(D)?D:2500)&&(_a(R.callbackAnimation),ge?ge.progress(1):_a(r,lt==="reverse"?1:!Je,1))):A&&o&&!en&&o(R)}if(ye){var fe=M?Xe/M.duration()*(M._caScrollDist||0):Xe;Ie(fe+(V._isFlipped?1:0)),ye(fe)}Be&&Be(-Xe/M.duration()*(M._caScrollDist||0))}},R.enable=function(ce,Ge){R.enabled||(R.enabled=!0,Wt(U,"resize",ba),L||Wt(U,"scroll",Ms),j&&Wt(i,"refreshInit",j),ce!==!1&&(R.progress=he=0,De=B=H=_e()),Ge!==!1&&R.refresh())},R.getTween=function(ce){return ce&&Se?Se.tween:ge},R.setPositions=function(ce,Ge,ze,Xe){if(M){var bt=M.scrollTrigger,Je=M.duration(),mt=bt.end-bt.start;ce=bt.start+mt*ce/Je,Ge=bt.start+mt*Ge/Je}R.refresh(!1,!1,{start:Hd(ce,ze&&!!R._startClamp),end:Hd(Ge,ze&&!!R._endClamp)},Xe),R.update()},R.adjustPinSpacing=function(ce){if(se&&ce){var Ge=se.indexOf(x.d)+1;se[Ge]=parseFloat(se[Ge])+ce+Ft,se[1]=parseFloat(se[1])+ce+Ft,zs(se)}},R.disable=function(ce,Ge){if(R.enabled&&(ce!==!1&&R.revert(!0,!0),R.enabled=R.isActive=!1,Ge||ge&&ge.pause(),le=0,de&&(de.uncache=1),j&&Vt(i,"refreshInit",j),oe&&(oe.pause(),Se.tween&&Se.tween.kill()&&(Se.tween=0)),!L)){for(var ze=Qe.length;ze--;)if(Qe[ze].scroller===U&&Qe[ze]!==R)return;Vt(U,"resize",ba),L||Vt(U,"scroll",Ms)}},R.kill=function(ce,Ge){R.disable(ce,Ge),ge&&!Ge&&ge.kill(),l&&delete Fu[l];var ze=Qe.indexOf(R);ze>=0&&Qe.splice(ze,1),ze===fn&&nl>0&&fn--,ze=0,Qe.forEach(function(Xe){return Xe.scroller===R.scroller&&(ze=1)}),ze||dn||(R.scroll.rec=0),r&&(r.scrollTrigger=null,ce&&r.revert({kill:!1}),Ge||r.kill()),Pe&&[Pe,xe,V,Oe].forEach(function(Xe){return Xe.parentNode&&Xe.parentNode.removeChild(Xe)}),Fa===R&&(Fa=0),f&&(de&&(de.uncache=1),ze=0,Qe.forEach(function(Xe){return Xe.pin===f&&ze++}),ze||(de.spacer=0)),n.onKill&&n.onKill(R)},Qe.push(R),R.enable(!1,!1),Ke&&Ke(R),r&&r.add&&!z){var Ne=R.update;R.update=function(){R.update=Ne,ke||me||R.refresh()},be.delayedCall(.01,R.update),z=.01,ke=me=0}else R.refresh();f&&vT()},i.register=function(n){return bs||(be=n||X_(),W_()&&window.document&&i.enable(),bs=Sa),bs},i.defaults=function(n){if(n)for(var r in n)zo[r]=n[r];return zo},i.disable=function(n,r){Sa=0,Qe.forEach(function(o){return o[r?"kill":"disable"](n)}),Vt(it,"wheel",Ms),Vt(Tt,"scroll",Ms),clearInterval(Uo),Vt(Tt,"touchcancel",ui),Vt(St,"touchstart",ui),Fo(Vt,Tt,"pointerdown,touchstart,mousedown",Vd),Fo(Vt,Tt,"pointerup,touchend,mouseup",Wd),xl.kill(),No(Vt);for(var s=0;s<tt.length;s+=3)Bo(Vt,tt[s],tt[s+1]),Bo(Vt,tt[s],tt[s+2])},i.enable=function(){if(it=window,Tt=document,ri=Tt.documentElement,St=Tt.body,be&&(qa=be.utils.toArray,Da=be.utils.clamp,Ou=be.core.context||ui,Uc=be.core.suppressOverwrites||ui,xh=it.history.scrollRestoration||"auto",Bu=it.pageYOffset,be.core.globals("ScrollTrigger",i),St)){Sa=1,Bs=document.createElement("div"),Bs.style.height="100vh",Bs.style.position="absolute",eg(),hT(),Lt.register(be),i.isTouch=Lt.isTouch,Yi=Lt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Uu=Lt.isTouch===1,Wt(it,"wheel",Ms),z_=[it,Tt,ri,St],be.matchMedia?(i.matchMedia=function(l){var c=be.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},be.addEventListener("matchMediaInit",function(){return Th()}),be.addEventListener("matchMediaRevert",function(){return J_()}),be.addEventListener("matchMedia",function(){Or(0,1),es("matchMedia")}),be.matchMedia("(orientation: portrait)",function(){return Bc(),Bc})):console.warn("Requires GSAP 3.11.0 or later"),Bc(),Wt(Tt,"scroll",Ms);var n=St.style,r=n.borderTopStyle,s=be.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=Di(St),Bt.m=Math.round(o.top+Bt.sc())||0,gn.m=Math.round(o.left+gn.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),Uo=setInterval(qd,250),be.delayedCall(.5,function(){return Oo=0}),Wt(Tt,"touchcancel",ui),Wt(St,"touchstart",ui),Fo(Wt,Tt,"pointerdown,touchstart,mousedown",Vd),Fo(Wt,Tt,"pointerup,touchend,mouseup",Wd),Iu=be.utils.checkPrefix("transform"),il.push(Iu),bs=nn(),xl=be.delayedCall(.2,Or).pause(),Ts=[Tt,"visibilitychange",function(){var l=it.innerWidth,c=it.innerHeight;Tt.hidden?(zd=l,kd=c):(zd!==l||kd!==c)&&ba()},Tt,"DOMContentLoaded",Or,it,"load",Or,it,"resize",ba],No(Wt),Qe.forEach(function(l){return l.enable(0,1)}),a=0;a<tt.length;a+=3)Bo(Vt,tt[a],tt[a+1]),Bo(Vt,tt[a],tt[a+2])}},i.config=function(n){"limitCallbacks"in n&&(Oc=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Uo)||(Uo=r)&&setInterval(qd,r),"ignoreMobileResize"in n&&(Uu=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(No(Vt)||No(Wt,n.autoRefreshEvents||"none"),G_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=Mn(n),o=tt.indexOf(s),a=Jr(s);~o&&tt.splice(o,a?6:2),r&&(a?xi.unshift(it,r,St,r,ri,r):xi.unshift(s,r))},i.clearMatchMedia=function(n){Qe.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var o=(On(n)?Mn(n):n).getBoundingClientRect(),a=o[s?$r:qr]*r||0;return s?o.right-a>0&&o.left+a<it.innerWidth:o.bottom-a>0&&o.top+a<it.innerHeight},i.positionInViewport=function(n,r,s){On(n)&&(n=Mn(n));var o=n.getBoundingClientRect(),a=o[s?$r:qr],l=r==null?a/2:r in Ml?Ml[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/it.innerWidth:(o.top+l)/it.innerHeight},i.killAll=function(n){if(Qe.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=Qr.killAll||[];Qr={},r.forEach(function(s){return s()})}},i}();je.version="3.12.5";je.saveStyles=function(i){return i?qa(i).forEach(function(e){if(e&&e.style){var t=Un.indexOf(e);t>=0&&Un.splice(t,5),Un.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),be.core.getCache(e),Ou())}}):Un};je.revert=function(i,e){return Th(!i,e)};je.create=function(i,e){return new je(i,e)};je.refresh=function(i){return i?ba():(bs||je.register())&&Or(!0)};je.update=function(i){return++tt.cache&&Oi(i===!0?2:0)};je.clearScrollMemory=Q_;je.maxScroll=function(i,e){return mi(i,e?gn:Bt)};je.getScrollFunc=function(i,e){return hr(Mn(i),e?gn:Bt)};je.getById=function(i){return Fu[i]};je.getAll=function(){return Qe.filter(function(i){return i.vars.id!=="ScrollSmoother"})};je.isScrolling=function(){return!!Jn};je.snapDirectional=bh;je.addEventListener=function(i,e){var t=Qr[i]||(Qr[i]=[]);~t.indexOf(e)||t.push(e)};je.removeEventListener=function(i,e){var t=Qr[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};je.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var d=[],h=[],f=be.delayedCall(r,function(){u(d,h),d=[],h=[]}).pause();return function(_){d.length||f.restart(!0),d.push(_.trigger),h.push(_),s<=d.length&&f.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&vn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return vn(s)&&(s=s(),Wt(je,"refresh",function(){return s=e.batchMax()})),qa(i).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(je.create(c))}),t};var Qd=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},kc=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Lt.isTouch?" pinch-zoom":""):"none",e===ri&&i(St,t)},Vo={auto:1,scroll:1},ET=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||be.core.getCache(s),a=nn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==St&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Vo[(l=Yn(s)).overflowY]||Vo[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Jr(s)&&(Vo[(l=Yn(s)).overflowY]||Vo[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},ng=function(e,t,n,r){return Lt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&ET,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&Wt(Tt,Lt.eventTypes[0],tp,!1,!0)},onDisable:function(){return Vt(Tt,Lt.eventTypes[0],tp,!0)}})},bT=/(input|label|select|textarea)/i,ep,tp=function(e){var t=bT.test(e.target.tagName);(t||ep)&&(e._gsapAllow=!0,ep=t)},TT=function(e){Ar(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Mn(e.target)||ri,u=be.core.globals().ScrollSmoother,d=u&&u.get(),h=Yi&&(e.content&&Mn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),f=hr(c,Bt),_=hr(c,gn),m=1,p=(Lt.isTouch&&it.visualViewport?it.visualViewport.scale*it.visualViewport.width:it.outerWidth)/it.innerWidth,g=0,y=vn(r)?function(){return r(a)}:function(){return r||2.8},v,S,w=ng(c,e.type,!0,s),b=function(){return S=!1},M=ui,D=ui,I=function(){l=mi(c,Bt),D=Da(Yi?1:0,l),n&&(M=Da(0,mi(c,gn))),v=Yr},x=function(){h._gsap.y=Ma(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},A=function(){if(S){requestAnimationFrame(b);var W=Ma(a.deltaY/2),q=D(f.v-W);if(h&&q!==f.v+f.offset){f.offset=q-f.v;var R=Ma((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",h._gsap.y=R+"px",f.cacheID=tt.cache,Oi()}return!0}f.offset&&x(),S=!0},U,Y,L,N,O=function(){I(),U.isActive()&&U.vars.scrollY>l&&(f()>l?U.progress(1)&&f(l):U.resetTo("scrollY",l))};return h&&be.set(h,{y:"+=0"}),e.ignoreCheck=function(k){return Yi&&k.type==="touchmove"&&A()||m>1.05&&k.type!=="touchstart"||a.isGesturing||k.touches&&k.touches.length>1},e.onPress=function(){S=!1;var k=m;m=Ma((it.visualViewport&&it.visualViewport.scale||1)/p),U.pause(),k!==m&&kc(c,m>1.01?!0:n?!1:"x"),Y=_(),L=f(),I(),v=Yr},e.onRelease=e.onGestureStart=function(k,W){if(f.offset&&x(),!W)N.restart(!0);else{tt.cache++;var q=y(),R,j;n&&(R=_(),j=R+q*.05*-k.velocityX/.227,q*=Qd(_,R,j,mi(c,gn)),U.vars.scrollX=M(j)),R=f(),j=R+q*.05*-k.velocityY/.227,q*=Qd(f,R,j,mi(c,Bt)),U.vars.scrollY=D(j),U.invalidate().duration(q).play(.01),(Yi&&U.vars.scrollY>=l||R>=l-1)&&be.to({},{onUpdate:O,duration:q})}o&&o(k)},e.onWheel=function(){U._ts&&U.pause(),nn()-g>1e3&&(v=0,g=nn())},e.onChange=function(k,W,q,R,j){if(Yr!==v&&I(),W&&n&&_(M(R[2]===W?Y+(k.startX-k.x):_()+W-R[1])),q){f.offset&&x();var re=j[2]===q,ve=re?L+k.startY-k.y:f()+q-j[1],H=D(ve);re&&ve!==H&&(L+=H-ve),f(H)}(q||W)&&Oi()},e.onEnable=function(){kc(c,n?!1:"x"),je.addEventListener("refresh",O),Wt(it,"resize",O),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=_.smooth=!1),w.enable()},e.onDisable=function(){kc(c,!0),Vt(it,"resize",O),je.removeEventListener("refresh",O),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new Lt(e),a.iOS=Yi,Yi&&!f()&&f(1),Yi&&be.ticker.add(ui),N=a._dc,U=be.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:tg(f,f(),function(){return U.pause()})},onUpdate:Oi,onComplete:N.vars.onComplete}),a};je.sort=function(i){return Qe.sort(i||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};je.observe=function(i){return new Lt(i)};je.normalizeScroll=function(i){if(typeof i>"u")return hn;if(i===!0&&hn)return hn.enable();if(i===!1){hn&&hn.kill(),hn=i;return}var e=i instanceof Lt?i:TT(i);return hn&&hn.target===e.target&&hn.kill(),Jr(e.target)&&(hn=e),e};je.core={_getVelocityProp:Du,_inputObserver:ng,_scrollers:tt,_proxies:xi,bridge:{ss:function(){Jn||es("scrollStart"),Jn=nn()},ref:function(){return en}}};X_()&&be.registerPlugin(je);const wT=`precision mediump float;
#define GLSLIFY 1

uniform sampler2D uTexture;
uniform vec2 uResolution;
uniform vec2 uImageResolution;
uniform float uAlpha;

varying vec2 vUv;

vec2 getCorrectUv (vec2 resolution, vec2 textureResolution){
  vec2 ratio = vec2(
    min((resolution.x / resolution.y) / (textureResolution.x / textureResolution.y), 1.0),
    min((resolution.y / resolution.x) / (textureResolution.y / textureResolution.x), 1.0)
  );

  return vec2(
    vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
    vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
  );
}

void main(){
  vec2 uv = getCorrectUv(uResolution, uImageResolution);

  vec4 texture = texture2D(uTexture, uv);

  gl_FragColor = vec4(texture.rgb, uAlpha);
}`,AT=`#define GLSLIFY 1
attribute vec3 position;
attribute vec2 uv;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

varying vec2 vUv;

void main(){
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}`;class CT{constructor({element:e,scene:t,geometry:n,screen:r,viewport:s}){this.element=e,this.scene=t,this.geometry=n,this.screen=r,this.viewport=s,this.scroll=0,this.isVisible=!1,this.createMaterial(),this.createMesh(),this.onResize({viewport:s,screen:r})}createMaterial(){const e=window.TEXTURES["texture.jpeg"];this.material=new CE({fragmentShader:wT,vertexShader:AT,uniforms:{uAlpha:{value:0},uTexture:{value:e},uResolution:{value:new at(this.screen.width,this.screen.height)},uImageResolution:{value:new at(e.image.width,e.image.height)}},depthTest:!1,depthWrite:!1,transparent:!0})}createMesh(){this.mesh=new oi(this.geometry,this.material),this.scene.add(this.mesh)}createBounds(){const e=this.element.getBoundingClientRect();this.bounds={top:e.top+this.scroll,left:e.left,width:e.width,height:e.height},this.updateScale(),this.updateX(),this.updateY(this.scroll)}updateScale(){this.mesh.scale.x=this.viewport.width*this.bounds.width/this.screen.width,this.mesh.scale.y=this.viewport.height*this.bounds.height/this.screen.height}updateX(e=0){this.mesh.position.x=-this.viewport.width/2+this.mesh.scale.x/2+(this.bounds.left-e)/this.screen.width*this.viewport.width}updateY(e=0){this.mesh.position.y=this.viewport.height/2-this.mesh.scale.y/2-(this.bounds.top-e)/this.screen.height*this.viewport.height}show(){this.isVisible=!0,zt.fromTo(this.material.uniforms.uAlpha,{value:0},{value:1})}hide(){this.isVisible=!1,zt.to(this.material.uniforms.uAlpha,{value:0})}onResize({screen:e,viewport:t}){this.screen=e,this.viewport=t,this.material.uniforms.uResolution.value.set(this.screen.width,this.screen.height),this.createBounds()}update(e){this.isVisible&&(this.updateY(e),this.scroll=e)}destroyGeometry(){this.geometry&&this.geometry.dispose()}destroyMaterial(){this.material&&this.material.dispose()}destroyMesh(){this.mesh&&this.scene.remove(this.mesh)}destroy(){this.destroyGeometry(),this.destroyMaterial(),this.destroyMesh()}}let RT=class{constructor({scene:e,screen:t,viewport:n}){this.scene=e,this.screen=t,this.viewport=n,this.geometry=new Qa(1,1,16,16),this.createMedia(),this.show()}createMedia(){this.media=new CT({element:document.querySelector(".home__media"),scene:this.scene,geometry:this.geometry,screen:this.screen,viewport:this.viewport})}show(){this.media&&this.media.show&&this.media.show()}hide(){this.media&&this.media.hide&&this.media.hide()}onResize({screen:e,viewport:t}){this.media&&this.media.onResize&&this.media.onResize({screen:e,viewport:t})}update(e){this.media&&this.media.update&&this.media.update(e)}destroy(){this.media&&this.media.destroy()&&this.media.destroy()}};class PT{constructor({element:e,scene:t,screen:n,viewport:r}){this.element=e,this.scene=t,this.screen=n,this.viewport=r,this.scroll=0,this.isVisible=!1,this.createMesh(),this.onResize({viewport:r,screen:n})}createMesh(){this.geometry=new Js(1,1,1),this.material=new RE({opacity:0,transparent:!0}),this.mesh=new oi(this.geometry,this.material),this.scene.add(this.mesh)}createBounds(){const e=this.element.getBoundingClientRect();this.bounds={top:e.top+this.scroll,left:e.left,width:e.width,height:e.height},this.updateScale(),this.updateY(this.scroll)}updateScale(){this.scale=this.viewport.width*this.bounds.width/this.screen.width/2,this.mesh.scale.set(this.scale,this.scale,this.scale)}updateY(e=0){this.mesh.position.y=this.viewport.height/2-this.scale-(this.bounds.top-e)/this.screen.height*this.viewport.height}show(){this.isVisible=!0,zt.fromTo(this.material,{opacity:0},{opacity:1})}hide(){this.isVisible=!1,zt.to(this.material,{opacity:0})}onResize({screen:e,viewport:t}){this.screen=e,this.viewport=t,this.createBounds()}update(e,t){this.isVisible&&(this.updateY(e),this.mesh.rotation.x+=t*.5,this.mesh.rotation.y+=t*.5,this.scroll=e)}destroyGeometry(){this.geometry&&this.geometry.dispose()}destroyMaterial(){this.material&&this.material.dispose()}destroyMesh(){this.mesh&&this.scene.remove(this.mesh)}destroy(){this.destroyGeometry(),this.destroyMaterial(),this.destroyMesh()}}let LT=class{constructor({scene:e,screen:t,viewport:n}){this.scene=e,this.screen=t,this.viewport=n,this.createCube(),this.show()}createCube(){this.cube=new PT({element:document.querySelector(".about__media"),scene:this.scene,screen:this.screen,viewport:this.viewport})}show(){this.cube&&this.cube.show&&this.cube.show()}hide(){this.cube&&this.cube.hide&&this.cube.hide()}onResize({screen:e,viewport:t}){this.screen=e,this.viewport=t,this.cube&&this.cube.onResize&&this.cube.onResize({screen:e,viewport:t})}update(e,t){this.cube&&this.cube.update&&this.cube.update(e,t)}destroy(){this.cube&&this.cube.destroy&&this.cube.destroy()}};class DT{constructor({template:e}){this.template=e,this.createScene(),this.createCamera(),this.createRender(),this.onResize()}createScene(){this.scene=new AE}createCamera(){this.camera=new $n(45,window.innerWidth/window.innerHeight,.1,100),this.camera.position.z=5}createRender(){this.renderer=new Pm({alpha:!0,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),document.body.appendChild(this.renderer.domElement)}createHome(){this.home=new RT({scene:this.scene,screen:this.screen,viewport:this.viewport})}destroyHome(){this.home&&(this.home.destroy(),this.home=null)}createAbout(){this.about=new LT({scene:this.scene,screen:this.screen,viewport:this.viewport})}destroyAbout(){this.about&&(this.about.destroy(),this.about=null)}onPreloaded(){this.onChangeEnd(this.template)}onLoaded(e){this.onChangeEnd(e)}onChangeStart(){this.home&&this.home.hide(),this.about&&this.about.hide()}onChangeEnd(e){this.home&&this.destroyHome(),this.about&&this.destroyAbout(),e==="home"&&this.createHome(),e==="about"&&this.createAbout(),this.template=e}onResize(){this.screen={width:window.innerWidth,height:window.innerHeight},this.renderer.setSize(this.screen.width,this.screen.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.camera.aspect=this.screen.width/this.screen.height,this.camera.updateProjectionMatrix();const e=this.camera.fov*(Math.PI/180),t=2*Math.tan(e/2)*this.camera.position.z,n=t*this.camera.aspect;this.viewport={width:n,height:t},this.home&&this.home.onResize&&this.home.onResize({screen:this.screen,viewport:this.viewport}),this.about&&this.about.onResize&&this.about.onResize({screen:this.screen,viewport:this.viewport})}onTouchDown(e){}onTouchMove(e){}onTouchUp(){}onWheel(e){}update(e,t){this.home&&this.home.update&&this.home.update(e),this.about&&this.about.update&&this.about.update(e,t),this.renderer.render(this.scene,this.camera)}}var ig={exports:{}},Gc={exports:{}},np;function IT(){return np||(np=1,function(i){(function(e,t){i.exports?i.exports=t():e.EvEmitter=t()})(typeof window<"u"?window:Dr,function(){function e(){}let t=e.prototype;return t.on=function(n,r){if(!n||!r)return this;let s=this._events=this._events||{},o=s[n]=s[n]||[];return o.includes(r)||o.push(r),this},t.once=function(n,r){if(!n||!r)return this;this.on(n,r);let s=this._onceEvents=this._onceEvents||{},o=s[n]=s[n]||{};return o[r]=!0,this},t.off=function(n,r){let s=this._events&&this._events[n];if(!s||!s.length)return this;let o=s.indexOf(r);return o!=-1&&s.splice(o,1),this},t.emitEvent=function(n,r){let s=this._events&&this._events[n];if(!s||!s.length)return this;s=s.slice(0),r=r||[];let o=this._onceEvents&&this._onceEvents[n];for(let a of s)o&&o[a]&&(this.off(n,a),delete o[a]),a.apply(this,r);return this},t.allOff=function(){return delete this._events,delete this._onceEvents,this},e})}(Gc)),Gc.exports}/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */(function(i){(function(e,t){i.exports?i.exports=t(e,IT()):e.imagesLoaded=t(e,e.EvEmitter)})(typeof window<"u"?window:Dr,function(t,n){let r=t.jQuery,s=t.console;function o(h){return Array.isArray(h)?h:typeof h=="object"&&typeof h.length=="number"?[...h]:[h]}function a(h,f,_){if(!(this instanceof a))return new a(h,f,_);let m=h;if(typeof h=="string"&&(m=document.querySelectorAll(h)),!m){s.error(`Bad element for imagesLoaded ${m||h}`);return}this.elements=o(m),this.options={},typeof f=="function"?_=f:Object.assign(this.options,f),_&&this.on("always",_),this.getImages(),r&&(this.jqDeferred=new r.Deferred),setTimeout(this.check.bind(this))}a.prototype=Object.create(n.prototype),a.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)};const l=[1,9,11];a.prototype.addElementImages=function(h){h.nodeName==="IMG"&&this.addImage(h),this.options.background===!0&&this.addElementBackgroundImages(h);let{nodeType:f}=h;if(!f||!l.includes(f))return;let _=h.querySelectorAll("img");for(let m of _)this.addImage(m);if(typeof this.options.background=="string"){let m=h.querySelectorAll(this.options.background);for(let p of m)this.addElementBackgroundImages(p)}};const c=/url\((['"])?(.*?)\1\)/gi;a.prototype.addElementBackgroundImages=function(h){let f=getComputedStyle(h);if(!f)return;let _=c.exec(f.backgroundImage);for(;_!==null;){let m=_&&_[2];m&&this.addBackground(m,h),_=c.exec(f.backgroundImage)}},a.prototype.addImage=function(h){let f=new u(h);this.images.push(f)},a.prototype.addBackground=function(h,f){let _=new d(h,f);this.images.push(_)},a.prototype.check=function(){if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length){this.complete();return}let h=(f,_,m)=>{setTimeout(()=>{this.progress(f,_,m)})};this.images.forEach(function(f){f.once("progress",h),f.check()})},a.prototype.progress=function(h,f,_){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!h.isLoaded,this.emitEvent("progress",[this,h,f]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,h),this.progressedCount===this.images.length&&this.complete(),this.options.debug&&s&&s.log(`progress: ${_}`,h,f)},a.prototype.complete=function(){let h=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(h,[this]),this.emitEvent("always",[this]),this.jqDeferred){let f=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[f](this)}};function u(h){this.img=h}u.prototype=Object.create(n.prototype),u.prototype.check=function(){if(this.getIsImageComplete()){this.confirm(this.img.naturalWidth!==0,"naturalWidth");return}this.proxyImage=new Image,this.img.crossOrigin&&(this.proxyImage.crossOrigin=this.img.crossOrigin),this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.currentSrc||this.img.src},u.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},u.prototype.confirm=function(h,f){this.isLoaded=h;let{parentNode:_}=this.img,m=_.nodeName==="PICTURE"?_:this.img;this.emitEvent("progress",[this,m,f])},u.prototype.handleEvent=function(h){let f="on"+h.type;this[f]&&this[f](h)},u.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},u.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},u.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)};function d(h,f){this.url=h,this.element=f,this.img=new Image}return d.prototype=Object.create(u.prototype),d.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(this.img.naturalWidth!==0,"naturalWidth"),this.unbindEvents())},d.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},d.prototype.confirm=function(h,f){this.isLoaded=h,this.emitEvent("progress",[this,this.element,f])},a.makeJQueryPlugin=function(h){h=h||t.jQuery,h&&(r=h,r.fn.imagesLoaded=function(f,_){return new a(this,f,_).jqDeferred.promise(r(this))})},a.makeJQueryPlugin(),a})})(ig);var UT=ig.exports;const Hc=fr(UT);var wh={exports:{}},ks=typeof Reflect=="object"?Reflect:null,ip=ks&&typeof ks.apply=="function"?ks.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)},sl;ks&&typeof ks.ownKeys=="function"?sl=ks.ownKeys:Object.getOwnPropertySymbols?sl=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:sl=function(e){return Object.getOwnPropertyNames(e)};function OT(i){console&&console.warn&&console.warn(i)}var rg=Number.isNaN||function(e){return e!==e};function dt(){dt.init.call(this)}wh.exports=dt;wh.exports.once=zT;dt.EventEmitter=dt;dt.prototype._events=void 0;dt.prototype._eventsCount=0;dt.prototype._maxListeners=void 0;var rp=10;function Nl(i){if(typeof i!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof i)}Object.defineProperty(dt,"defaultMaxListeners",{enumerable:!0,get:function(){return rp},set:function(i){if(typeof i!="number"||i<0||rg(i))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+i+".");rp=i}});dt.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};dt.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||rg(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function sg(i){return i._maxListeners===void 0?dt.defaultMaxListeners:i._maxListeners}dt.prototype.getMaxListeners=function(){return sg(this)};dt.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r=e==="error",s=this._events;if(s!==void 0)r=r&&s.error===void 0;else if(!r)return!1;if(r){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var l=s[e];if(l===void 0)return!1;if(typeof l=="function")ip(l,this,t);else for(var c=l.length,u=ug(l,c),n=0;n<c;++n)ip(u[n],this,t);return!0};function ag(i,e,t,n){var r,s,o;if(Nl(t),s=i._events,s===void 0?(s=i._events=Object.create(null),i._eventsCount=0):(s.newListener!==void 0&&(i.emit("newListener",e,t.listener?t.listener:t),s=i._events),o=s[e]),o===void 0)o=s[e]=t,++i._eventsCount;else if(typeof o=="function"?o=s[e]=n?[t,o]:[o,t]:n?o.unshift(t):o.push(t),r=sg(i),r>0&&o.length>r&&!o.warned){o.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=i,a.type=e,a.count=o.length,OT(a)}return i}dt.prototype.addListener=function(e,t){return ag(this,e,t,!1)};dt.prototype.on=dt.prototype.addListener;dt.prototype.prependListener=function(e,t){return ag(this,e,t,!0)};function NT(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function og(i,e,t){var n={fired:!1,wrapFn:void 0,target:i,type:e,listener:t},r=NT.bind(n);return r.listener=t,n.wrapFn=r,r}dt.prototype.once=function(e,t){return Nl(t),this.on(e,og(this,e,t)),this};dt.prototype.prependOnceListener=function(e,t){return Nl(t),this.prependListener(e,og(this,e,t)),this};dt.prototype.removeListener=function(e,t){var n,r,s,o,a;if(Nl(t),r=this._events,r===void 0)return this;if(n=r[e],n===void 0)return this;if(n===t||n.listener===t)--this._eventsCount===0?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if(typeof n!="function"){for(s=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){a=n[o].listener,s=o;break}if(s<0)return this;s===0?n.shift():FT(n,s),n.length===1&&(r[e]=n[0]),r.removeListener!==void 0&&this.emit("removeListener",e,a||t)}return this};dt.prototype.off=dt.prototype.removeListener;dt.prototype.removeAllListeners=function(e){var t,n,r;if(n=this._events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.length===0){var s=Object.keys(n),o;for(r=0;r<s.length;++r)o=s[r],o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(t=n[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this};function lg(i,e,t){var n=i._events;if(n===void 0)return[];var r=n[e];return r===void 0?[]:typeof r=="function"?t?[r.listener||r]:[r]:t?BT(r):ug(r,r.length)}dt.prototype.listeners=function(e){return lg(this,e,!0)};dt.prototype.rawListeners=function(e){return lg(this,e,!1)};dt.listenerCount=function(i,e){return typeof i.listenerCount=="function"?i.listenerCount(e):cg.call(i,e)};dt.prototype.listenerCount=cg;function cg(i){var e=this._events;if(e!==void 0){var t=e[i];if(typeof t=="function")return 1;if(t!==void 0)return t.length}return 0}dt.prototype.eventNames=function(){return this._eventsCount>0?sl(this._events):[]};function ug(i,e){for(var t=new Array(e),n=0;n<e;++n)t[n]=i[n];return t}function FT(i,e){for(;e+1<i.length;e++)i[e]=i[e+1];i.pop()}function BT(i){for(var e=new Array(i.length),t=0;t<e.length;++t)e[t]=i[t].listener||i[t];return e}function zT(i,e){return new Promise(function(t,n){function r(o){i.removeListener(e,s),n(o)}function s(){typeof i.removeListener=="function"&&i.removeListener("error",r),t([].slice.call(arguments))}hg(i,e,s,{once:!0}),e!=="error"&&kT(i,r,{once:!0})})}function kT(i,e,t){typeof i.on=="function"&&hg(i,"error",e,t)}function hg(i,e,t,n){if(typeof i.on=="function")n.once?i.once(e,t):i.on(e,t);else if(typeof i.addEventListener=="function")i.addEventListener(e,function r(s){n.once&&i.removeEventListener(e,r),t(s)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof i)}var GT=wh.exports;const fg=fr(GT);function HT(i,e){for(var t=-1,n=i==null?0:i.length,r=Array(n);++t<n;)r[t]=e(i[t],t,i);return r}var dg=HT;function VT(){this.__data__=[],this.size=0}var WT=VT;function XT(i,e){return i===e||i!==i&&e!==e}var pg=XT,$T=pg;function qT(i,e){for(var t=i.length;t--;)if($T(i[t][0],e))return t;return-1}var Fl=qT,YT=Fl,jT=Array.prototype,KT=jT.splice;function ZT(i){var e=this.__data__,t=YT(e,i);if(t<0)return!1;var n=e.length-1;return t==n?e.pop():KT.call(e,t,1),--this.size,!0}var JT=ZT,QT=Fl;function ew(i){var e=this.__data__,t=QT(e,i);return t<0?void 0:e[t][1]}var tw=ew,nw=Fl;function iw(i){return nw(this.__data__,i)>-1}var rw=iw,sw=Fl;function aw(i,e){var t=this.__data__,n=sw(t,i);return n<0?(++this.size,t.push([i,e])):t[n][1]=e,this}var ow=aw,lw=WT,cw=JT,uw=tw,hw=rw,fw=ow;function ea(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}ea.prototype.clear=lw;ea.prototype.delete=cw;ea.prototype.get=uw;ea.prototype.has=hw;ea.prototype.set=fw;var Bl=ea,dw=Bl;function pw(){this.__data__=new dw,this.size=0}var mw=pw;function _w(i){var e=this.__data__,t=e.delete(i);return this.size=e.size,t}var gw=_w;function vw(i){return this.__data__.get(i)}var xw=vw;function yw(i){return this.__data__.has(i)}var Sw=yw,Mw=typeof Dr=="object"&&Dr&&Dr.Object===Object&&Dr,mg=Mw,Ew=mg,bw=typeof self=="object"&&self&&self.Object===Object&&self,Tw=Ew||bw||Function("return this")(),ki=Tw,ww=ki,Aw=ww.Symbol,zl=Aw,sp=zl,_g=Object.prototype,Cw=_g.hasOwnProperty,Rw=_g.toString,ga=sp?sp.toStringTag:void 0;function Pw(i){var e=Cw.call(i,ga),t=i[ga];try{i[ga]=void 0;var n=!0}catch{}var r=Rw.call(i);return n&&(e?i[ga]=t:delete i[ga]),r}var Lw=Pw,Dw=Object.prototype,Iw=Dw.toString;function Uw(i){return Iw.call(i)}var Ow=Uw,ap=zl,Nw=Lw,Fw=Ow,Bw="[object Null]",zw="[object Undefined]",op=ap?ap.toStringTag:void 0;function kw(i){return i==null?i===void 0?zw:Bw:op&&op in Object(i)?Nw(i):Fw(i)}var to=kw;function Gw(i){var e=typeof i;return i!=null&&(e=="object"||e=="function")}var Ah=Gw,Hw=to,Vw=Ah,Ww="[object AsyncFunction]",Xw="[object Function]",$w="[object GeneratorFunction]",qw="[object Proxy]";function Yw(i){if(!Vw(i))return!1;var e=Hw(i);return e==Xw||e==$w||e==Ww||e==qw}var gg=Yw,jw=ki,Kw=jw["__core-js_shared__"],Zw=Kw,Vc=Zw,lp=function(){var i=/[^.]+$/.exec(Vc&&Vc.keys&&Vc.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}();function Jw(i){return!!lp&&lp in i}var Qw=Jw,e1=Function.prototype,t1=e1.toString;function n1(i){if(i!=null){try{return t1.call(i)}catch{}try{return i+""}catch{}}return""}var vg=n1,i1=gg,r1=Qw,s1=Ah,a1=vg,o1=/[\\^$.*+?()[\]{}|]/g,l1=/^\[object .+?Constructor\]$/,c1=Function.prototype,u1=Object.prototype,h1=c1.toString,f1=u1.hasOwnProperty,d1=RegExp("^"+h1.call(f1).replace(o1,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function p1(i){if(!s1(i)||r1(i))return!1;var e=i1(i)?d1:l1;return e.test(a1(i))}var m1=p1;function _1(i,e){return i==null?void 0:i[e]}var g1=_1,v1=m1,x1=g1;function y1(i,e){var t=x1(i,e);return v1(t)?t:void 0}var ta=y1,S1=ta,M1=ki,E1=S1(M1,"Map"),Ch=E1,b1=ta,T1=b1(Object,"create"),kl=T1,cp=kl;function w1(){this.__data__=cp?cp(null):{},this.size=0}var A1=w1;function C1(i){var e=this.has(i)&&delete this.__data__[i];return this.size-=e?1:0,e}var R1=C1,P1=kl,L1="__lodash_hash_undefined__",D1=Object.prototype,I1=D1.hasOwnProperty;function U1(i){var e=this.__data__;if(P1){var t=e[i];return t===L1?void 0:t}return I1.call(e,i)?e[i]:void 0}var O1=U1,N1=kl,F1=Object.prototype,B1=F1.hasOwnProperty;function z1(i){var e=this.__data__;return N1?e[i]!==void 0:B1.call(e,i)}var k1=z1,G1=kl,H1="__lodash_hash_undefined__";function V1(i,e){var t=this.__data__;return this.size+=this.has(i)?0:1,t[i]=G1&&e===void 0?H1:e,this}var W1=V1,X1=A1,$1=R1,q1=O1,Y1=k1,j1=W1;function na(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}na.prototype.clear=X1;na.prototype.delete=$1;na.prototype.get=q1;na.prototype.has=Y1;na.prototype.set=j1;var K1=na,up=K1,Z1=Bl,J1=Ch;function Q1(){this.size=0,this.__data__={hash:new up,map:new(J1||Z1),string:new up}}var eA=Q1;function tA(i){var e=typeof i;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?i!=="__proto__":i===null}var nA=tA,iA=nA;function rA(i,e){var t=i.__data__;return iA(e)?t[typeof e=="string"?"string":"hash"]:t.map}var Gl=rA,sA=Gl;function aA(i){var e=sA(this,i).delete(i);return this.size-=e?1:0,e}var oA=aA,lA=Gl;function cA(i){return lA(this,i).get(i)}var uA=cA,hA=Gl;function fA(i){return hA(this,i).has(i)}var dA=fA,pA=Gl;function mA(i,e){var t=pA(this,i),n=t.size;return t.set(i,e),this.size+=t.size==n?0:1,this}var _A=mA,gA=eA,vA=oA,xA=uA,yA=dA,SA=_A;function ia(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}ia.prototype.clear=gA;ia.prototype.delete=vA;ia.prototype.get=xA;ia.prototype.has=yA;ia.prototype.set=SA;var Rh=ia,MA=Bl,EA=Ch,bA=Rh,TA=200;function wA(i,e){var t=this.__data__;if(t instanceof MA){var n=t.__data__;if(!EA||n.length<TA-1)return n.push([i,e]),this.size=++t.size,this;t=this.__data__=new bA(n)}return t.set(i,e),this.size=t.size,this}var AA=wA,CA=Bl,RA=mw,PA=gw,LA=xw,DA=Sw,IA=AA;function ra(i){var e=this.__data__=new CA(i);this.size=e.size}ra.prototype.clear=RA;ra.prototype.delete=PA;ra.prototype.get=LA;ra.prototype.has=DA;ra.prototype.set=IA;var xg=ra,UA="__lodash_hash_undefined__";function OA(i){return this.__data__.set(i,UA),this}var NA=OA;function FA(i){return this.__data__.has(i)}var BA=FA,zA=Rh,kA=NA,GA=BA;function El(i){var e=-1,t=i==null?0:i.length;for(this.__data__=new zA;++e<t;)this.add(i[e])}El.prototype.add=El.prototype.push=kA;El.prototype.has=GA;var HA=El;function VA(i,e){for(var t=-1,n=i==null?0:i.length;++t<n;)if(e(i[t],t,i))return!0;return!1}var WA=VA;function XA(i,e){return i.has(e)}var $A=XA,qA=HA,YA=WA,jA=$A,KA=1,ZA=2;function JA(i,e,t,n,r,s){var o=t&KA,a=i.length,l=e.length;if(a!=l&&!(o&&l>a))return!1;var c=s.get(i),u=s.get(e);if(c&&u)return c==e&&u==i;var d=-1,h=!0,f=t&ZA?new qA:void 0;for(s.set(i,e),s.set(e,i);++d<a;){var _=i[d],m=e[d];if(n)var p=o?n(m,_,d,e,i,s):n(_,m,d,i,e,s);if(p!==void 0){if(p)continue;h=!1;break}if(f){if(!YA(e,function(g,y){if(!jA(f,y)&&(_===g||r(_,g,t,n,s)))return f.push(y)})){h=!1;break}}else if(!(_===m||r(_,m,t,n,s))){h=!1;break}}return s.delete(i),s.delete(e),h}var yg=JA,QA=ki,eC=QA.Uint8Array,tC=eC;function nC(i){var e=-1,t=Array(i.size);return i.forEach(function(n,r){t[++e]=[r,n]}),t}var iC=nC;function rC(i){var e=-1,t=Array(i.size);return i.forEach(function(n){t[++e]=n}),t}var sC=rC,hp=zl,fp=tC,aC=pg,oC=yg,lC=iC,cC=sC,uC=1,hC=2,fC="[object Boolean]",dC="[object Date]",pC="[object Error]",mC="[object Map]",_C="[object Number]",gC="[object RegExp]",vC="[object Set]",xC="[object String]",yC="[object Symbol]",SC="[object ArrayBuffer]",MC="[object DataView]",dp=hp?hp.prototype:void 0,Wc=dp?dp.valueOf:void 0;function EC(i,e,t,n,r,s,o){switch(t){case MC:if(i.byteLength!=e.byteLength||i.byteOffset!=e.byteOffset)return!1;i=i.buffer,e=e.buffer;case SC:return!(i.byteLength!=e.byteLength||!s(new fp(i),new fp(e)));case fC:case dC:case _C:return aC(+i,+e);case pC:return i.name==e.name&&i.message==e.message;case gC:case xC:return i==e+"";case mC:var a=lC;case vC:var l=n&uC;if(a||(a=cC),i.size!=e.size&&!l)return!1;var c=o.get(i);if(c)return c==e;n|=hC,o.set(i,e);var u=oC(a(i),a(e),n,r,s,o);return o.delete(i),u;case yC:if(Wc)return Wc.call(i)==Wc.call(e)}return!1}var bC=EC;function TC(i,e){for(var t=-1,n=e.length,r=i.length;++t<n;)i[r+t]=e[t];return i}var wC=TC,AC=Array.isArray,Si=AC,CC=wC,RC=Si;function PC(i,e,t){var n=e(i);return RC(i)?n:CC(n,t(i))}var LC=PC;function DC(i,e){for(var t=-1,n=i==null?0:i.length,r=0,s=[];++t<n;){var o=i[t];e(o,t,i)&&(s[r++]=o)}return s}var IC=DC;function UC(){return[]}var OC=UC,NC=IC,FC=OC,BC=Object.prototype,zC=BC.propertyIsEnumerable,pp=Object.getOwnPropertySymbols,kC=pp?function(i){return i==null?[]:(i=Object(i),NC(pp(i),function(e){return zC.call(i,e)}))}:FC,GC=kC;function HC(i,e){for(var t=-1,n=Array(i);++t<i;)n[t]=e(t);return n}var VC=HC;function WC(i){return i!=null&&typeof i=="object"}var no=WC,XC=to,$C=no,qC="[object Arguments]";function YC(i){return $C(i)&&XC(i)==qC}var jC=YC,mp=jC,KC=no,Sg=Object.prototype,ZC=Sg.hasOwnProperty,JC=Sg.propertyIsEnumerable,QC=mp(function(){return arguments}())?mp:function(i){return KC(i)&&ZC.call(i,"callee")&&!JC.call(i,"callee")},Mg=QC,bl={exports:{}};function eR(){return!1}var tR=eR;bl.exports;(function(i,e){var t=ki,n=tR,r=e&&!e.nodeType&&e,s=r&&!0&&i&&!i.nodeType&&i,o=s&&s.exports===r,a=o?t.Buffer:void 0,l=a?a.isBuffer:void 0,c=l||n;i.exports=c})(bl,bl.exports);var Eg=bl.exports,nR=9007199254740991,iR=/^(?:0|[1-9]\d*)$/;function rR(i,e){var t=typeof i;return e=e??nR,!!e&&(t=="number"||t!="symbol"&&iR.test(i))&&i>-1&&i%1==0&&i<e}var bg=rR,sR=9007199254740991;function aR(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=sR}var Ph=aR,oR=to,lR=Ph,cR=no,uR="[object Arguments]",hR="[object Array]",fR="[object Boolean]",dR="[object Date]",pR="[object Error]",mR="[object Function]",_R="[object Map]",gR="[object Number]",vR="[object Object]",xR="[object RegExp]",yR="[object Set]",SR="[object String]",MR="[object WeakMap]",ER="[object ArrayBuffer]",bR="[object DataView]",TR="[object Float32Array]",wR="[object Float64Array]",AR="[object Int8Array]",CR="[object Int16Array]",RR="[object Int32Array]",PR="[object Uint8Array]",LR="[object Uint8ClampedArray]",DR="[object Uint16Array]",IR="[object Uint32Array]",yt={};yt[TR]=yt[wR]=yt[AR]=yt[CR]=yt[RR]=yt[PR]=yt[LR]=yt[DR]=yt[IR]=!0;yt[uR]=yt[hR]=yt[ER]=yt[fR]=yt[bR]=yt[dR]=yt[pR]=yt[mR]=yt[_R]=yt[gR]=yt[vR]=yt[xR]=yt[yR]=yt[SR]=yt[MR]=!1;function UR(i){return cR(i)&&lR(i.length)&&!!yt[oR(i)]}var OR=UR;function NR(i){return function(e){return i(e)}}var FR=NR,Tl={exports:{}};Tl.exports;(function(i,e){var t=mg,n=e&&!e.nodeType&&e,r=n&&!0&&i&&!i.nodeType&&i,s=r&&r.exports===n,o=s&&t.process,a=function(){try{var l=r&&r.require&&r.require("util").types;return l||o&&o.binding&&o.binding("util")}catch{}}();i.exports=a})(Tl,Tl.exports);var BR=Tl.exports,zR=OR,kR=FR,_p=BR,gp=_p&&_p.isTypedArray,GR=gp?kR(gp):zR,Tg=GR,HR=VC,VR=Mg,WR=Si,XR=Eg,$R=bg,qR=Tg,YR=Object.prototype,jR=YR.hasOwnProperty;function KR(i,e){var t=WR(i),n=!t&&VR(i),r=!t&&!n&&XR(i),s=!t&&!n&&!r&&qR(i),o=t||n||r||s,a=o?HR(i.length,String):[],l=a.length;for(var c in i)(e||jR.call(i,c))&&!(o&&(c=="length"||r&&(c=="offset"||c=="parent")||s&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||$R(c,l)))&&a.push(c);return a}var ZR=KR,JR=Object.prototype;function QR(i){var e=i&&i.constructor,t=typeof e=="function"&&e.prototype||JR;return i===t}var eP=QR;function tP(i,e){return function(t){return i(e(t))}}var nP=tP,iP=nP,rP=iP(Object.keys,Object),sP=rP,aP=eP,oP=sP,lP=Object.prototype,cP=lP.hasOwnProperty;function uP(i){if(!aP(i))return oP(i);var e=[];for(var t in Object(i))cP.call(i,t)&&t!="constructor"&&e.push(t);return e}var hP=uP,fP=gg,dP=Ph;function pP(i){return i!=null&&dP(i.length)&&!fP(i)}var Lh=pP,mP=ZR,_P=hP,gP=Lh;function vP(i){return gP(i)?mP(i):_P(i)}var Dh=vP,xP=LC,yP=GC,SP=Dh;function MP(i){return xP(i,SP,yP)}var EP=MP,vp=EP,bP=1,TP=Object.prototype,wP=TP.hasOwnProperty;function AP(i,e,t,n,r,s){var o=t&bP,a=vp(i),l=a.length,c=vp(e),u=c.length;if(l!=u&&!o)return!1;for(var d=l;d--;){var h=a[d];if(!(o?h in e:wP.call(e,h)))return!1}var f=s.get(i),_=s.get(e);if(f&&_)return f==e&&_==i;var m=!0;s.set(i,e),s.set(e,i);for(var p=o;++d<l;){h=a[d];var g=i[h],y=e[h];if(n)var v=o?n(y,g,h,e,i,s):n(g,y,h,i,e,s);if(!(v===void 0?g===y||r(g,y,t,n,s):v)){m=!1;break}p||(p=h=="constructor")}if(m&&!p){var S=i.constructor,w=e.constructor;S!=w&&"constructor"in i&&"constructor"in e&&!(typeof S=="function"&&S instanceof S&&typeof w=="function"&&w instanceof w)&&(m=!1)}return s.delete(i),s.delete(e),m}var CP=AP,RP=ta,PP=ki,LP=RP(PP,"DataView"),DP=LP,IP=ta,UP=ki,OP=IP(UP,"Promise"),NP=OP,FP=ta,BP=ki,zP=FP(BP,"Set"),kP=zP,GP=ta,HP=ki,VP=GP(HP,"WeakMap"),WP=VP,ku=DP,Gu=Ch,Hu=NP,Vu=kP,Wu=WP,wg=to,sa=vg,xp="[object Map]",XP="[object Object]",yp="[object Promise]",Sp="[object Set]",Mp="[object WeakMap]",Ep="[object DataView]",$P=sa(ku),qP=sa(Gu),YP=sa(Hu),jP=sa(Vu),KP=sa(Wu),Cr=wg;(ku&&Cr(new ku(new ArrayBuffer(1)))!=Ep||Gu&&Cr(new Gu)!=xp||Hu&&Cr(Hu.resolve())!=yp||Vu&&Cr(new Vu)!=Sp||Wu&&Cr(new Wu)!=Mp)&&(Cr=function(i){var e=wg(i),t=e==XP?i.constructor:void 0,n=t?sa(t):"";if(n)switch(n){case $P:return Ep;case qP:return xp;case YP:return yp;case jP:return Sp;case KP:return Mp}return e});var ZP=Cr,Xc=xg,JP=yg,QP=bC,eL=CP,bp=ZP,Tp=Si,wp=Eg,tL=Tg,nL=1,Ap="[object Arguments]",Cp="[object Array]",Wo="[object Object]",iL=Object.prototype,Rp=iL.hasOwnProperty;function rL(i,e,t,n,r,s){var o=Tp(i),a=Tp(e),l=o?Cp:bp(i),c=a?Cp:bp(e);l=l==Ap?Wo:l,c=c==Ap?Wo:c;var u=l==Wo,d=c==Wo,h=l==c;if(h&&wp(i)){if(!wp(e))return!1;o=!0,u=!1}if(h&&!u)return s||(s=new Xc),o||tL(i)?JP(i,e,t,n,r,s):QP(i,e,l,t,n,r,s);if(!(t&nL)){var f=u&&Rp.call(i,"__wrapped__"),_=d&&Rp.call(e,"__wrapped__");if(f||_){var m=f?i.value():i,p=_?e.value():e;return s||(s=new Xc),r(m,p,t,n,s)}}return h?(s||(s=new Xc),eL(i,e,t,n,r,s)):!1}var sL=rL,aL=sL,Pp=no;function Ag(i,e,t,n,r){return i===e?!0:i==null||e==null||!Pp(i)&&!Pp(e)?i!==i&&e!==e:aL(i,e,t,n,Ag,r)}var Cg=Ag,oL=xg,lL=Cg,cL=1,uL=2;function hL(i,e,t,n){var r=t.length,s=r,o=!n;if(i==null)return!s;for(i=Object(i);r--;){var a=t[r];if(o&&a[2]?a[1]!==i[a[0]]:!(a[0]in i))return!1}for(;++r<s;){a=t[r];var l=a[0],c=i[l],u=a[1];if(o&&a[2]){if(c===void 0&&!(l in i))return!1}else{var d=new oL;if(n)var h=n(c,u,l,i,e,d);if(!(h===void 0?lL(u,c,cL|uL,n,d):h))return!1}}return!0}var fL=hL,dL=Ah;function pL(i){return i===i&&!dL(i)}var Rg=pL,mL=Rg,_L=Dh;function gL(i){for(var e=_L(i),t=e.length;t--;){var n=e[t],r=i[n];e[t]=[n,r,mL(r)]}return e}var vL=gL;function xL(i,e){return function(t){return t==null?!1:t[i]===e&&(e!==void 0||i in Object(t))}}var Pg=xL,yL=fL,SL=vL,ML=Pg;function EL(i){var e=SL(i);return e.length==1&&e[0][2]?ML(e[0][0],e[0][1]):function(t){return t===i||yL(t,i,e)}}var bL=EL,TL=to,wL=no,AL="[object Symbol]";function CL(i){return typeof i=="symbol"||wL(i)&&TL(i)==AL}var Ih=CL,RL=Si,PL=Ih,LL=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,DL=/^\w*$/;function IL(i,e){if(RL(i))return!1;var t=typeof i;return t=="number"||t=="symbol"||t=="boolean"||i==null||PL(i)?!0:DL.test(i)||!LL.test(i)||e!=null&&i in Object(e)}var Uh=IL,Lg=Rh,UL="Expected a function";function Oh(i,e){if(typeof i!="function"||e!=null&&typeof e!="function")throw new TypeError(UL);var t=function(){var n=arguments,r=e?e.apply(this,n):n[0],s=t.cache;if(s.has(r))return s.get(r);var o=i.apply(this,n);return t.cache=s.set(r,o)||s,o};return t.cache=new(Oh.Cache||Lg),t}Oh.Cache=Lg;var OL=Oh,NL=OL,FL=500;function BL(i){var e=NL(i,function(n){return t.size===FL&&t.clear(),n}),t=e.cache;return e}var zL=BL,kL=zL,GL=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,HL=/\\(\\)?/g,VL=kL(function(i){var e=[];return i.charCodeAt(0)===46&&e.push(""),i.replace(GL,function(t,n,r,s){e.push(r?s.replace(HL,"$1"):n||t)}),e}),WL=VL,Lp=zl,XL=dg,$L=Si,qL=Ih,YL=1/0,Dp=Lp?Lp.prototype:void 0,Ip=Dp?Dp.toString:void 0;function Dg(i){if(typeof i=="string")return i;if($L(i))return XL(i,Dg)+"";if(qL(i))return Ip?Ip.call(i):"";var e=i+"";return e=="0"&&1/i==-YL?"-0":e}var jL=Dg,KL=jL;function ZL(i){return i==null?"":KL(i)}var JL=ZL,QL=Si,e2=Uh,t2=WL,n2=JL;function i2(i,e){return QL(i)?i:e2(i,e)?[i]:t2(n2(i))}var Ig=i2,r2=Ih,s2=1/0;function a2(i){if(typeof i=="string"||r2(i))return i;var e=i+"";return e=="0"&&1/i==-s2?"-0":e}var Hl=a2,o2=Ig,l2=Hl;function c2(i,e){e=o2(e,i);for(var t=0,n=e.length;i!=null&&t<n;)i=i[l2(e[t++])];return t&&t==n?i:void 0}var Ug=c2,u2=Ug;function h2(i,e,t){var n=i==null?void 0:u2(i,e);return n===void 0?t:n}var f2=h2;function d2(i,e){return i!=null&&e in Object(i)}var p2=d2,m2=Ig,_2=Mg,g2=Si,v2=bg,x2=Ph,y2=Hl;function S2(i,e,t){e=m2(e,i);for(var n=-1,r=e.length,s=!1;++n<r;){var o=y2(e[n]);if(!(s=i!=null&&t(i,o)))break;i=i[o]}return s||++n!=r?s:(r=i==null?0:i.length,!!r&&x2(r)&&v2(o,r)&&(g2(i)||_2(i)))}var M2=S2,E2=p2,b2=M2;function T2(i,e){return i!=null&&b2(i,e,E2)}var w2=T2,A2=Cg,C2=f2,R2=w2,P2=Uh,L2=Rg,D2=Pg,I2=Hl,U2=1,O2=2;function N2(i,e){return P2(i)&&L2(e)?D2(I2(i),e):function(t){var n=C2(t,i);return n===void 0&&n===e?R2(t,i):A2(e,n,U2|O2)}}var F2=N2;function B2(i){return i}var Og=B2;function z2(i){return function(e){return e==null?void 0:e[i]}}var k2=z2,G2=Ug;function H2(i){return function(e){return G2(e,i)}}var V2=H2,W2=k2,X2=V2,$2=Uh,q2=Hl;function Y2(i){return $2(i)?W2(q2(i)):X2(i)}var j2=Y2,K2=bL,Z2=F2,J2=Og,Q2=Si,eD=j2;function tD(i){return typeof i=="function"?i:i==null?J2:typeof i=="object"?Q2(i)?Z2(i[0],i[1]):K2(i):eD(i)}var nD=tD;function iD(i){return function(e,t,n){for(var r=-1,s=Object(e),o=n(e),a=o.length;a--;){var l=o[i?a:++r];if(t(s[l],l,s)===!1)break}return e}}var rD=iD,sD=rD,aD=sD(),oD=aD,lD=oD,cD=Dh;function uD(i,e){return i&&lD(i,e,cD)}var hD=uD,fD=Lh;function dD(i,e){return function(t,n){if(t==null)return t;if(!fD(t))return i(t,n);for(var r=t.length,s=e?r:-1,o=Object(t);(e?s--:++s<r)&&n(o[s],s,o)!==!1;);return t}}var pD=dD,mD=hD,_D=pD,gD=_D(mD),Ng=gD,vD=Ng,xD=Lh;function yD(i,e){var t=-1,n=xD(i)?Array(i.length):[];return vD(i,function(r,s,o){n[++t]=e(r,s,o)}),n}var SD=yD,MD=dg,ED=nD,bD=SD,TD=Si;function wD(i,e){var t=TD(i)?MD:bD;return t(i,ED(e))}var AD=wD;const CD=fr(AD);function RD(i,e){for(var t=-1,n=i==null?0:i.length;++t<n&&e(i[t],t,i)!==!1;);return i}var PD=RD,LD=Og;function DD(i){return typeof i=="function"?i:LD}var ID=DD,UD=PD,OD=Ng,ND=ID,FD=Si;function BD(i,e){var t=FD(i)?UD:OD;return t(i,ND(e))}var zD=BD,kD=zD;const GD=fr(kD);function $c(i,e){return i instanceof window.HTMLElement?[e(i)]:CD(i,e)}function ji(i,e){return i instanceof window.HTMLElement?[e(i)]:GD(i,e)}class Fg extends fg{constructor({classes:e,element:t,elements:n}){super(),Al(this),this.classes=e,this.selector=t,this.selectorChildren={...n},this.create(),this.addEventListeners()}create(){this.selector instanceof window.HTMLElement?this.element=this.selector:this.element=document.querySelector(this.selector),this.elements={},ji(this.selectorChildren,(e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=this.element.querySelectorAll(e),this.elements[t].length===0?this.elements[t]=null:this.elements[t].length===1&&(this.elements[t]=this.element.querySelector(e)))})}addEventListeners(){}removeEventListeners(){}}class HD extends Fg{constructor(){super({element:".preloader"}),this.loadedTextureUrl=[],window.TEXTURES={},this.textureLoader=new IE}preload(e){this.loadedTextureUrl.push(window.location.pathname);const t=e.querySelectorAll("data-src"),n=new Promise(s=>{Hc(e,{background:!0},s)}),r=Promise.all([...t,"texture.jpeg"].map(s=>new Promise(o=>{this.textureLoader.load(s,a=>{a.generateMipmaps=!1,a.minFilter=tn,a.needsUpdate=!0,window.TEXTURES[s]=a,o()})})));Promise.all([n,r]).then(()=>{this.emit("preloaded")})}async load(e){const t=e.querySelectorAll("data-src");if(this.loadedTextureUrl.includes(window.location.pathname)){const n=Hc(e);return new Promise(r=>{n.on("done",()=>{r()})})}else{this.loadedTextureUrl.push(window.location.pathname);const n=new Promise(s=>{Hc(e,{background:!0},s)}),r=Promise.all([...t].map(s=>new Promise(o=>{this.textureLoader.load(s.src,a=>{a.generateMipmaps=!1,a.minFilter=tn,a.needsUpdate=!0,window.TEXTURES[s.src]=a,o()})})));return new Promise(s=>{Promise.all([n,r]).then(()=>{s()})})}}}var Nh={exports:{}},Up=typeof document<"u"?document.createElement("p").style:{},Op=["O","ms","Moz","Webkit"],qc=/([A-Z])/g,Yc={};function Bg(i){if(i=i.replace(/-([a-z])/g,function(r,s){return s.toUpperCase()}),Up[i]!==void 0)return i;for(var e=i.charAt(0).toUpperCase()+i.slice(1),t=Op.length;t--;){var n=Op[t]+e;if(Up[n]!==void 0)return n}return i}function VD(i){return i in Yc?Yc[i]:Yc[i]=Bg(i)}function WD(i){return i=Bg(i),qc.test(i)&&(i="-"+i.replace(qc,"-$1"),qc.lastIndex=0),i.toLowerCase()}Nh.exports=VD;Nh.exports.dash=WD;var XD=Nh.exports;const zg=fr(XD);class $D extends Fg{constructor({element:e}){super({element:e}),this.element=e,this.src=this.element.getAttribute("lazy-src"),this.createObserver()}createObserver(){this.observer=new window.IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&!this.element.src&&this.src&&(this.element.src=this.src,this.element.onload=()=>{this.observer.unobserve(this.element)})})}),this.observer.observe(this.element)}}var Xu={exports:{}};(function(i,e){(function(t,n){var r="1.0.37",s="",o="?",a="function",l="undefined",c="object",u="string",d="major",h="model",f="name",_="type",m="vendor",p="version",g="architecture",y="console",v="mobile",S="tablet",w="smarttv",b="wearable",M="embedded",D=500,I="Amazon",x="Apple",A="ASUS",U="BlackBerry",Y="Browser",L="Chrome",N="Edge",O="Firefox",k="Google",W="Huawei",q="LG",R="Microsoft",j="Motorola",re="Opera",ve="Samsung",H="Sharp",J="Sony",he="Xiaomi",_e="Zebra",Se="Facebook",de="Chromium OS",Fe="Mac OS",De=function(ee,te){var Z={};for(var ue in ee)te[ue]&&te[ue].length%2===0?Z[ue]=te[ue].concat(ee[ue]):Z[ue]=ee[ue];return Z},B=function(ee){for(var te={},Z=0;Z<ee.length;Z++)te[ee[Z].toUpperCase()]=ee[Z];return te},ke=function(ee,te){return typeof ee===u?me(te).indexOf(me(ee))!==-1:!1},me=function(ee){return ee.toLowerCase()},Pe=function(ee){return typeof ee===u?ee.replace(/[^\d\.]/g,s).split(".")[0]:n},xe=function(ee,te){if(typeof ee===u)return ee=ee.replace(/^\s\s*/,s),typeof te===l?ee:ee.substring(0,D)},V=function(ee,te){for(var Z=0,ue,Re,Q,Ee,se,Ie;Z<te.length&&!se;){var Te=te[Z],ye=te[Z+1];for(ue=Re=0;ue<Te.length&&!se&&Te[ue];)if(se=Te[ue++].exec(ee),se)for(Q=0;Q<ye.length;Q++)Ie=se[++Re],Ee=ye[Q],typeof Ee===c&&Ee.length>0?Ee.length===2?typeof Ee[1]==a?this[Ee[0]]=Ee[1].call(this,Ie):this[Ee[0]]=Ee[1]:Ee.length===3?typeof Ee[1]===a&&!(Ee[1].exec&&Ee[1].test)?this[Ee[0]]=Ie?Ee[1].call(this,Ie,Ee[2]):n:this[Ee[0]]=Ie?Ie.replace(Ee[1],Ee[2]):n:Ee.length===4&&(this[Ee[0]]=Ie?Ee[3].call(this,Ie.replace(Ee[1],Ee[2])):n):this[Ee]=Ie||n;Z+=2}},Oe=function(ee,te){for(var Z in te)if(typeof te[Z]===c&&te[Z].length>0){for(var ue=0;ue<te[Z].length;ue++)if(ke(te[Z][ue],ee))return Z===o?n:Z}else if(ke(te[Z],ee))return Z===o?n:Z;return ee},C={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},E={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},z={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[p,[f,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[p,[f,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[f,p],[/opios[\/ ]+([\w\.]+)/i],[p,[f,re+" Mini"]],[/\bopr\/([\w\.]+)/i],[p,[f,re]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[p,[f,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[f,p],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[p,[f,"UC"+Y]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[p,[f,"WeChat"]],[/konqueror\/([\w\.]+)/i],[p,[f,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[p,[f,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[p,[f,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[p,[f,"Smart Lenovo "+Y]],[/(avast|avg)\/([\w\.]+)/i],[[f,/(.+)/,"$1 Secure "+Y],p],[/\bfocus\/([\w\.]+)/i],[p,[f,O+" Focus"]],[/\bopt\/([\w\.]+)/i],[p,[f,re+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[p,[f,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[p,[f,"Dolphin"]],[/coast\/([\w\.]+)/i],[p,[f,re+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[p,[f,"MIUI "+Y]],[/fxios\/([-\w\.]+)/i],[p,[f,O]],[/\bqihu|(qi?ho?o?|360)browser/i],[[f,"360 "+Y]],[/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],[[f,/(.+)/,"$1 "+Y],p],[/samsungbrowser\/([\w\.]+)/i],[p,[f,ve+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[f,/_/g," "],p],[/metasr[\/ ]?([\d\.]+)/i],[p,[f,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[f,"Sogou Mobile"],p],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[f,p],[/(lbbrowser)/i,/\[(linkedin)app\]/i],[f],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[f,Se],p],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[f,p],[/\bgsa\/([\w\.]+) .*safari\//i],[p,[f,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[p,[f,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[p,[f,L+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[f,L+" WebView"],p],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[p,[f,"Android "+Y]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[f,p],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[p,[f,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[p,f],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[f,[p,Oe,C]],[/(webkit|khtml)\/([\w\.]+)/i],[f,p],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[f,"Netscape"],p],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[p,[f,O+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[f,p],[/(cobalt)\/([\w\.]+)/i],[f,[p,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[g,"amd64"]],[/(ia32(?=;))/i],[[g,me]],[/((?:i[346]|x)86)[;\)]/i],[[g,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[g,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[g,"armhf"]],[/windows (ce|mobile); ppc;/i],[[g,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[g,/ower/,s,me]],[/(sun4\w)[;\)]/i],[[g,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[g,me]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[h,[m,ve],[_,S]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[h,[m,ve],[_,v]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[h,[m,x],[_,v]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[h,[m,x],[_,S]],[/(macintosh);/i],[h,[m,x]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[h,[m,H],[_,v]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[h,[m,W],[_,S]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[h,[m,W],[_,v]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[h,/_/g," "],[m,he],[_,v]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[h,/_/g," "],[m,he],[_,S]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[h,[m,"OPPO"],[_,v]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[h,[m,"Vivo"],[_,v]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[h,[m,"Realme"],[_,v]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[h,[m,j],[_,v]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[h,[m,j],[_,S]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[h,[m,q],[_,S]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[h,[m,q],[_,v]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[h,[m,"Lenovo"],[_,S]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[h,/_/g," "],[m,"Nokia"],[_,v]],[/(pixel c)\b/i],[h,[m,k],[_,S]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[h,[m,k],[_,v]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[h,[m,J],[_,v]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[h,"Xperia Tablet"],[m,J],[_,S]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[h,[m,"OnePlus"],[_,v]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[h,[m,I],[_,S]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[h,/(.+)/g,"Fire Phone $1"],[m,I],[_,v]],[/(playbook);[-\w\),; ]+(rim)/i],[h,m,[_,S]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[h,[m,U],[_,v]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[h,[m,A],[_,S]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[h,[m,A],[_,v]],[/(nexus 9)/i],[h,[m,"HTC"],[_,S]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[m,[h,/_/g," "],[_,v]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[h,[m,"Acer"],[_,S]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[h,[m,"Meizu"],[_,v]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[h,[m,"Ulefone"],[_,v]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[m,h,[_,v]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[m,h,[_,S]],[/(surface duo)/i],[h,[m,R],[_,S]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[h,[m,"Fairphone"],[_,v]],[/(u304aa)/i],[h,[m,"AT&T"],[_,v]],[/\bsie-(\w*)/i],[h,[m,"Siemens"],[_,v]],[/\b(rct\w+) b/i],[h,[m,"RCA"],[_,S]],[/\b(venue[\d ]{2,7}) b/i],[h,[m,"Dell"],[_,S]],[/\b(q(?:mv|ta)\w+) b/i],[h,[m,"Verizon"],[_,S]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[h,[m,"Barnes & Noble"],[_,S]],[/\b(tm\d{3}\w+) b/i],[h,[m,"NuVision"],[_,S]],[/\b(k88) b/i],[h,[m,"ZTE"],[_,S]],[/\b(nx\d{3}j) b/i],[h,[m,"ZTE"],[_,v]],[/\b(gen\d{3}) b.+49h/i],[h,[m,"Swiss"],[_,v]],[/\b(zur\d{3}) b/i],[h,[m,"Swiss"],[_,S]],[/\b((zeki)?tb.*\b) b/i],[h,[m,"Zeki"],[_,S]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[m,"Dragon Touch"],h,[_,S]],[/\b(ns-?\w{0,9}) b/i],[h,[m,"Insignia"],[_,S]],[/\b((nxa|next)-?\w{0,9}) b/i],[h,[m,"NextBook"],[_,S]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[m,"Voice"],h,[_,v]],[/\b(lvtel\-)?(v1[12]) b/i],[[m,"LvTel"],h,[_,v]],[/\b(ph-1) /i],[h,[m,"Essential"],[_,v]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[h,[m,"Envizen"],[_,S]],[/\b(trio[-\w\. ]+) b/i],[h,[m,"MachSpeed"],[_,S]],[/\btu_(1491) b/i],[h,[m,"Rotor"],[_,S]],[/(shield[\w ]+) b/i],[h,[m,"Nvidia"],[_,S]],[/(sprint) (\w+)/i],[m,h,[_,v]],[/(kin\.[onetw]{3})/i],[[h,/\./g," "],[m,R],[_,v]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[h,[m,_e],[_,S]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[h,[m,_e],[_,v]],[/smart-tv.+(samsung)/i],[m,[_,w]],[/hbbtv.+maple;(\d+)/i],[[h,/^/,"SmartTV"],[m,ve],[_,w]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[m,q],[_,w]],[/(apple) ?tv/i],[m,[h,x+" TV"],[_,w]],[/crkey/i],[[h,L+"cast"],[m,k],[_,w]],[/droid.+aft(\w+)( bui|\))/i],[h,[m,I],[_,w]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[h,[m,H],[_,w]],[/(bravia[\w ]+)( bui|\))/i],[h,[m,J],[_,w]],[/(mitv-\w{5}) bui/i],[h,[m,he],[_,w]],[/Hbbtv.*(technisat) (.*);/i],[m,h,[_,w]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[m,xe],[h,xe],[_,w]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[_,w]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[m,h,[_,y]],[/droid.+; (shield) bui/i],[h,[m,"Nvidia"],[_,y]],[/(playstation [345portablevi]+)/i],[h,[m,J],[_,y]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[h,[m,R],[_,y]],[/((pebble))app/i],[m,h,[_,b]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[h,[m,x],[_,b]],[/droid.+; (glass) \d/i],[h,[m,k],[_,b]],[/droid.+; (wt63?0{2,3})\)/i],[h,[m,_e],[_,b]],[/(quest( 2| pro)?)/i],[h,[m,Se],[_,b]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[m,[_,M]],[/(aeobc)\b/i],[h,[m,I],[_,M]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[h,[_,v]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[h,[_,S]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[_,S]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[_,v]],[/(android[-\w\. ]{0,9});.+buil/i],[h,[m,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[p,[f,N+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[p,[f,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[f,p],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[p,f]],os:[[/microsoft (windows) (vista|xp)/i],[f,p],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[f,[p,Oe,E]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[p,Oe,E],[f,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[p,/_/g,"."],[f,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[f,Fe],[p,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[p,f],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[f,p],[/\(bb(10);/i],[p,[f,U]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[p,[f,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[p,[f,O+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[p,[f,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[p,[f,"watchOS"]],[/crkey\/([\d\.]+)/i],[p,[f,L+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[f,de],p],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[f,p],[/(sunos) ?([\w\.\d]*)/i],[[f,"Solaris"],p],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[f,p]]},ne=function(ee,te){if(typeof ee===c&&(te=ee,ee=n),!(this instanceof ne))return new ne(ee,te).getResult();var Z=typeof t!==l&&t.navigator?t.navigator:n,ue=ee||(Z&&Z.userAgent?Z.userAgent:s),Re=Z&&Z.userAgentData?Z.userAgentData:n,Q=te?De(z,te):z,Ee=Z&&Z.userAgent==ue;return this.getBrowser=function(){var se={};return se[f]=n,se[p]=n,V.call(se,ue,Q.browser),se[d]=Pe(se[p]),Ee&&Z&&Z.brave&&typeof Z.brave.isBrave==a&&(se[f]="Brave"),se},this.getCPU=function(){var se={};return se[g]=n,V.call(se,ue,Q.cpu),se},this.getDevice=function(){var se={};return se[m]=n,se[h]=n,se[_]=n,V.call(se,ue,Q.device),Ee&&!se[_]&&Re&&Re.mobile&&(se[_]=v),Ee&&se[h]=="Macintosh"&&Z&&typeof Z.standalone!==l&&Z.maxTouchPoints&&Z.maxTouchPoints>2&&(se[h]="iPad",se[_]=S),se},this.getEngine=function(){var se={};return se[f]=n,se[p]=n,V.call(se,ue,Q.engine),se},this.getOS=function(){var se={};return se[f]=n,se[p]=n,V.call(se,ue,Q.os),Ee&&!se[f]&&Re&&Re.platform!="Unknown"&&(se[f]=Re.platform.replace(/chrome os/i,de).replace(/macos/i,Fe)),se},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return ue},this.setUA=function(se){return ue=typeof se===u&&se.length>D?xe(se,D):se,this},this.setUA(ue),this};ne.VERSION=r,ne.BROWSER=B([f,p,d]),ne.CPU=B([g]),ne.DEVICE=B([h,m,_,y,v,w,S,b,M]),ne.ENGINE=ne.OS=B([f,p]),i.exports&&(e=i.exports=ne),e.UAParser=ne;var ie=typeof t!==l&&(t.jQuery||t.Zepto);if(ie&&!ie.ua){var ae=new ne;ie.ua=ae.getResult(),ie.ua.get=function(){return ae.getUA()},ie.ua.set=function(ee){ae.setUA(ee);var te=ae.getResult();for(var Z in te)ie.ua[Z]=te[Z]}}})(typeof window=="object"?window:Dr)})(Xu,Xu.exports);var qD=Xu.exports;const YD=fr(qD);class jD{constructor(){this.parser=new YD,this.type=this.determineDeviceType(this.parser.getDevice().type),this.isMobile=this.type!=="desktop",this.isPhone=this.type==="phone",this.isTablet=this.type==="tablet",this.isDesktop=this.type==="desktop",this.isMixBlendModeUnsupported=typeof window.getComputedStyle(document.body).mixBlendMode>"u",this.setHTMLClass()}determineDeviceType(e){return e==="mobile"?"phone":["desktop","phone","tablet"].includes(e)?e:"desktop"}setHTMLClass(){document.documentElement.classList.add(this.isMobile?"mobile":"desktop")}isWebGLAvailable(){if(!this.webGLAvailable){const e=document.createElement("canvas");this.webGLAvailable=!!window.WebGLRenderingContext&&!!(e.getContext("webgl")||e.getContext("experimental-webgl"))}return this.webGLAvailable}isWebPSupported(){if(this.webPSupported===!1){const e=document.createElement("canvas");e.getContext("2d")?this.webPSupported=e.toDataURL("image/webp").startsWith("data:image/webp"):this.webPSupported=!1}return this.webPSupported}isAppBrowser(){const e=navigator.userAgent;return/FBAN|FBAV|Twitter/.test(e)}check({onErrorWebGL:e,onSuccess:t}){this.isWebGLAvailable()?t():e()}}const jc=new jD;function KD(i,e,t){return zt.utils.interpolate(i,e,t)}function ZD(i,e,t){return zt.utils.clamp(i,e,t)}zt.registerPlugin(pr);const JD=pr.create("easeInOut","0.7, 0, 0.3, 1");pr.create("expoInOut",".9, 0, .1, 1");const Kc=pr.create("easeOut","0.39, 0.575, 0.565, 1"),kg=pr.create("expoOut","0.19, 1, 0.22, 1");class Fh{constructor({element:e,elements:t}){Al(this);const{delay:n,target:r}=e.dataset;this.element=e,this.elements=t,this.delay=isNaN(Number(n))?0:Number(n),this.target=r?e.closest(r):e,this.transformPrefix=zg("transform"),this.isVisible=!1,this.isAnimated=!1}createAnimation(){"IntersectionObserver"in window?(this.animateOut(),this.createObserver()):this.animateIn()}destroyAnimation(){this.observer&&this.observer.disconnect()}hideAnimation(){this.animateOut()}createObserver(){this.observer=new window.IntersectionObserver(e=>{e.forEach(t=>{!this.isVisible&&t.isIntersecting?(this.animateIn(),this.observer.unobserve(this.target)):!t.isIntersecting&&this.isVisible&&this.animateOut()})}),this.observer.observe(this.target)}animateIn(){this.isVisible=!0,this.isAnimated=!0}animateOut(){this.isVisible=!1,this.isAnimated=!1}}class QD extends Fh{constructor({element:e}){super({element:e,elements:{}})}animateIn(){zt.to(this.element,{opacity:1,delay:this.delay,duration:1,ease:JD}),super.animateIn()}animateOut(){zt.set(this.element,{opacity:0}),super.animateOut()}}(function(){function i(){for(var n=arguments.length,r=0;r<n;r++){var s=r<0||arguments.length<=r?void 0:arguments[r];s.nodeType===1||s.nodeType===11?this.appendChild(s):this.appendChild(document.createTextNode(String(s)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function t(){for(var n=this.parentNode,r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];var a=s.length;if(n)for(a||n.removeChild(this);a--;){var l=s[a];typeof l!="object"?l=this.ownerDocument.createTextNode(l):l.parentNode&&l.parentNode.removeChild(l),a?n.insertBefore(this.previousSibling,l):n.replaceChild(l,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=i,DocumentFragment.prototype.append=i),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=t,DocumentFragment.prototype.replaceWith=t))})();function eI(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function Np(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function Fp(i,e,t){return e&&Np(i.prototype,e),t&&Np(i,t),i}function tI(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function Bp(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function zp(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Bp(Object(t),!0).forEach(function(n){tI(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):Bp(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function Gg(i,e){return iI(i)||sI(i,e)||Hg(i,e)||oI()}function mn(i){return nI(i)||rI(i)||Hg(i)||aI()}function nI(i){if(Array.isArray(i))return $u(i)}function iI(i){if(Array.isArray(i))return i}function rI(i){if(typeof Symbol<"u"&&Symbol.iterator in Object(i))return Array.from(i)}function sI(i,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(i)))){var t=[],n=!0,r=!1,s=void 0;try{for(var o=i[Symbol.iterator](),a;!(n=(a=o.next()).done)&&(t.push(a.value),!(e&&t.length===e));n=!0);}catch(l){r=!0,s=l}finally{try{!n&&o.return!=null&&o.return()}finally{if(r)throw s}}return t}}function Hg(i,e){if(i){if(typeof i=="string")return $u(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return $u(i,e)}}function $u(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function aI(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oI(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Nr(i,e){return Object.getOwnPropertyNames(Object(i)).reduce(function(t,n){var r=Object.getOwnPropertyDescriptor(Object(i),n),s=Object.getOwnPropertyDescriptor(Object(e),n);return Object.defineProperty(t,n,s||r)},{})}function io(i){return typeof i=="string"}function Bh(i){return Array.isArray(i)}function Xo(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=Nr(i),t;return e.types!==void 0?t=e.types:e.split!==void 0&&(t=e.split),t!==void 0&&(e.types=(io(t)||Bh(t)?String(t):"").split(",").map(function(n){return String(n).trim()}).filter(function(n){return/((line)|(word)|(char))/i.test(n)})),(e.absolute||e.position)&&(e.absolute=e.absolute||/absolute/.test(i.position)),e}function zh(i){var e=io(i)||Bh(i)?String(i):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function Vl(i){return i!==null&&typeof i=="object"}function lI(i){return Vl(i)&&/^(1|3|11)$/.test(i.nodeType)}function cI(i){return typeof i=="number"&&i>-1&&i%1===0}function uI(i){return Vl(i)&&cI(i.length)}function ts(i){return Bh(i)?i:i==null?[]:uI(i)?Array.prototype.slice.call(i):[i]}function kp(i){var e=i;return io(i)&&(/^(#[a-z]\w+)$/.test(i.trim())?e=document.getElementById(i.trim().slice(1)):e=document.querySelectorAll(i)),ts(e).reduce(function(t,n){return[].concat(mn(t),mn(ts(n).filter(lI)))},[])}var hI=Object.entries,wl="_splittype",li={},fI=0;function _i(i,e,t){if(!Vl(i))return console.warn("[data.set] owner is not an object"),null;var n=i[wl]||(i[wl]=++fI),r=li[n]||(li[n]={});return t===void 0?e&&Object.getPrototypeOf(e)===Object.prototype&&(li[n]=zp(zp({},r),e)):e!==void 0&&(r[e]=t),t}function Fr(i,e){var t=Vl(i)?i[wl]:null,n=t&&li[t]||{};return e===void 0?n:n[e]}function Vg(i){var e=i&&i[wl];e&&(delete i[e],delete li[e])}function dI(){Object.keys(li).forEach(function(i){delete li[i]})}function pI(){hI(li).forEach(function(i){var e=Gg(i,2),t=e[0],n=e[1],r=n.isRoot,s=n.isSplit;(!r||!s)&&(li[t]=null,delete li[t])})}function mI(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",t=i?String(i):"";return t.trim().replace(/\s+/g," ").split(e)}var kh="\\ud800-\\udfff",Wg="\\u0300-\\u036f\\ufe20-\\ufe23",Xg="\\u20d0-\\u20f0",$g="\\ufe0e\\ufe0f",_I="[".concat(kh,"]"),qu="[".concat(Wg).concat(Xg,"]"),Yu="\\ud83c[\\udffb-\\udfff]",gI="(?:".concat(qu,"|").concat(Yu,")"),qg="[^".concat(kh,"]"),Yg="(?:\\ud83c[\\udde6-\\uddff]){2}",jg="[\\ud800-\\udbff][\\udc00-\\udfff]",Kg="\\u200d",Zg="".concat(gI,"?"),Jg="[".concat($g,"]?"),vI="(?:"+Kg+"(?:"+[qg,Yg,jg].join("|")+")"+Jg+Zg+")*",xI=Jg+Zg+vI,yI="(?:".concat(["".concat(qg).concat(qu,"?"),qu,Yg,jg,_I].join("|"),`
)`),SI=RegExp("".concat(Yu,"(?=").concat(Yu,")|").concat(yI).concat(xI),"g"),MI=[Kg,kh,Wg,Xg,$g],EI=RegExp("[".concat(MI.join(""),"]"));function bI(i){return i.split("")}function Qg(i){return EI.test(i)}function TI(i){return i.match(SI)||[]}function wI(i){return Qg(i)?TI(i):bI(i)}function AI(i){return i==null?"":String(i)}function CI(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return i=AI(i),i&&io(i)&&!e&&Qg(i)?wI(i):i.split(e)}function ju(i,e){var t=document.createElement(i);return e&&Object.keys(e).forEach(function(n){var r=e[n],s=io(r)?r.trim():r;s===null||s===""||(n==="children"?t.append.apply(t,mn(ts(s))):t.setAttribute(n,s))}),t}var Gh={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function RI(i,e){e=Nr(Gh,e);var t=zh(e.types),n=e.tagName,r=i.nodeValue,s=document.createDocumentFragment(),o=[],a=[];return/^\s/.test(r)&&s.append(" "),o=mI(r).reduce(function(l,c,u,d){var h,f;return t.chars&&(f=CI(c).map(function(_){var m=ju(n,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:_});return _i(m,"isChar",!0),a=[].concat(mn(a),[m]),m})),t.words||t.lines?(h=ju(n,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(t.words&&e.absolute?"position: relative;":""),children:t.chars?f:c}),_i(h,{isWord:!0,isWordStart:!0,isWordEnd:!0}),s.appendChild(h)):f.forEach(function(_){s.appendChild(_)}),u<d.length-1&&s.append(" "),t.words?l.concat(h):l},[]),/\s$/.test(r)&&s.append(" "),i.replaceWith(s),{words:o,chars:a}}function ev(i,e){var t=i.nodeType,n={words:[],chars:[]};if(!/(1|3|11)/.test(t))return n;if(t===3&&/\S/.test(i.nodeValue))return RI(i,e);var r=ts(i.childNodes);if(r.length&&(_i(i,"isSplit",!0),!Fr(i).isRoot)){i.style.display="inline-block",i.style.position="relative";var s=i.nextSibling,o=i.previousSibling,a=i.textContent||"",l=s?s.textContent:" ",c=o?o.textContent:" ";_i(i,{isWordEnd:/\s$/.test(a)||/^\s/.test(l),isWordStart:/^\s/.test(a)||/\s$/.test(c)})}return r.reduce(function(u,d){var h=ev(d,e),f=h.words,_=h.chars;return{words:[].concat(mn(u.words),mn(f)),chars:[].concat(mn(u.chars),mn(_))}},n)}function PI(i,e,t,n){if(!t.absolute)return{top:e?i.offsetTop:null};var r=i.offsetParent,s=Gg(n,2),o=s[0],a=s[1],l=0,c=0;if(r&&r!==document.body){var u=r.getBoundingClientRect();l=u.x+o,c=u.y+a}var d=i.getBoundingClientRect(),h=d.width,f=d.height,_=d.x,m=d.y,p=m+a-c,g=_+o-l;return{width:h,height:f,top:p,left:g}}function tv(i){Fr(i).isWord?(Vg(i),i.replaceWith.apply(i,mn(i.childNodes))):ts(i.children).forEach(function(e){return tv(e)})}var LI=function(){return document.createDocumentFragment()};function DI(i,e,t){var n=zh(e.types),r=e.tagName,s=i.getElementsByTagName("*"),o=[],a=[],l=null,c,u,d,h=[],f=i.parentElement,_=i.nextElementSibling,m=LI(),p=window.getComputedStyle(i),g=p.textAlign,y=parseFloat(p.fontSize),v=y*.2;return e.absolute&&(d={left:i.offsetLeft,top:i.offsetTop,width:i.offsetWidth},u=i.offsetWidth,c=i.offsetHeight,_i(i,{cssWidth:i.style.width,cssHeight:i.style.height})),ts(s).forEach(function(S){var w=S.parentElement===i,b=PI(S,w,e,t),M=b.width,D=b.height,I=b.top,x=b.left;/^br$/i.test(S.nodeName)||(n.lines&&w&&((l===null||I-l>=v)&&(l=I,o.push(a=[])),a.push(S)),e.absolute&&_i(S,{top:I,left:x,width:M,height:D}))}),f&&f.removeChild(i),n.lines&&(h=o.map(function(S){var w=ju(r,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(g,"; width: 100%;")});_i(w,"isLine",!0);var b={height:0,top:1e4};return m.appendChild(w),S.forEach(function(M,D,I){var x=Fr(M),A=x.isWordEnd,U=x.top,Y=x.height,L=I[D+1];b.height=Math.max(b.height,Y),b.top=Math.min(b.top,U),w.appendChild(M),A&&Fr(L).isWordStart&&w.append(" ")}),e.absolute&&_i(w,{height:b.height,top:b.top}),w}),n.words||tv(m),i.replaceChildren(m)),e.absolute&&(i.style.width="".concat(i.style.width||u,"px"),i.style.height="".concat(c,"px"),ts(s).forEach(function(S){var w=Fr(S),b=w.isLine,M=w.top,D=w.left,I=w.width,x=w.height,A=Fr(S.parentElement),U=!b&&A.isLine;S.style.top="".concat(U?M-A.top:M,"px"),S.style.left=b?"".concat(d.left,"px"):"".concat(D-(U?d.left:0),"px"),S.style.height="".concat(x,"px"),S.style.width=b?"".concat(d.width,"px"):"".concat(I,"px"),S.style.position="absolute"})),f&&(_?f.insertBefore(i,_):f.appendChild(i)),h}var Es=Nr(Gh,{}),II=function(){Fp(i,null,[{key:"clearData",value:function(){dI()}},{key:"setDefaults",value:function(t){return Es=Nr(Es,Xo(t)),Gh}},{key:"revert",value:function(t){kp(t).forEach(function(n){var r=Fr(n),s=r.isSplit,o=r.html,a=r.cssWidth,l=r.cssHeight;s&&(n.innerHTML=o,n.style.width=a||"",n.style.height=l||"",Vg(n))})}},{key:"create",value:function(t,n){return new i(t,n)}},{key:"data",get:function(){return li}},{key:"defaults",get:function(){return Es},set:function(t){Es=Nr(Es,Xo(t))}}]);function i(e,t){eI(this,i),this.isSplit=!1,this.settings=Nr(Es,Xo(t)),this.elements=kp(e),this.split()}return Fp(i,[{key:"split",value:function(t){var n=this;this.revert(),this.elements.forEach(function(o){_i(o,"html",o.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var r=[window.pageXOffset,window.pageYOffset];t!==void 0&&(this.settings=Nr(this.settings,Xo(t)));var s=zh(this.settings.types);s.none||(this.elements.forEach(function(o){_i(o,"isRoot",!0);var a=ev(o,n.settings),l=a.words,c=a.chars;n.words=[].concat(mn(n.words),mn(l)),n.chars=[].concat(mn(n.chars),mn(c))}),this.elements.forEach(function(o){if(s.lines||n.settings.absolute){var a=DI(o,n.settings,r);n.lines=[].concat(mn(n.lines),mn(a))}}),this.isSplit=!0,window.scrollTo(r[0],r[1]),pI())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),i.revert(this.elements)}}]),i}();const Gp=(i,e,t)=>{i.forEach(n=>{const r=document.createElement(e);t&&(r.classList=t),n.parentNode.appendChild(r),r.appendChild(n)})},UI=(i,e,t)=>{const n=document.createElement(e);t&&(n.classList=t),n.textContent=i.textContent,i.textContent="",i.appendChild(n)};class OI extends Fh{constructor({element:e}){super({element:e,elements:{}}),this.elements.spans=new II(this.element,{types:"lines",tagName:"span",lineClass:""}),Gp(this.elements.spans.lines,"span"),zt.set(this.elements.spans.lines,{yPercent:125})}animateIn(){zt.to(this.elements.spans.lines,{yPercent:0,ease:kg,duration:1.5,stagger:.1,delay:this.delay}),super.animateIn()}animateOut(){zt.set(this.elements.spans.lines,{yPercent:125}),super.animateOut()}onResize(){this.elements.spans.split(),Gp(this.elements.spans.lines,"span"),this.isAnimated||zt.set(this.elements.spans.lines,{yPercent:125})}}class NI extends Fh{constructor({element:e}){super({element:e,elements:{span:null}}),UI(this.element,"span"),this.elements.span=e.querySelector("span"),this.rotate=e.dataset.rotate}animateIn(){zt.to(this.elements.span,{yPercent:0,rotate:0,ease:kg,duration:1.5,delay:this.delay}),super.animateIn()}animateOut(){zt.set(this.elements.span,{yPercent:125,rotate:this.rotate?"5deg":0}),super.animateOut()}}class nv extends fg{constructor({classes:e,id:t,element:n,elements:r,isScrollable:s=!0}){super(),Al(this),this.classes={...e},this.id=t,this.selectors={element:n,elements:{lazyLoaders:"[lazy-src]",animationsAppears:'[data-animation="appear"]',animationsTexts:'[data-animation="text"]',animationsTitles:'[data-animation="title"]',...r}},this.isScrollable=s,this.scroll={position:0,current:0,target:0,limit:0,ease:.1},this.transformPrefix=zg("transform"),this.isVisible=!1}create(){this.animations=[],this.element=document.querySelector(this.selectors.element),this.elements={},ji(this.selectors.elements,(e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList?this.elements[t]=e:Array.isArray(e)?this.elements[t]=e:(this.elements[t]=this.element.querySelectorAll(e),this.elements[t].length===0?this.elements[t]=null:this.elements[t].length===1&&(this.elements[t]=this.element.querySelector(e)))}),this.isScrollable&&(this.scroll={position:0,current:0,target:0,limit:this.elements.wrapper.clientHeight-window.innerHeight,ease:.1}),this.createAnimations(),this.createObserver(),this.createLazyLoader()}createAnimations(){this.animationsAppear=$c(this.elements.animationsAppears,e=>new QD({element:e})),this.animations.push(...this.animationsAppear),this.animationsText=$c(this.elements.animationsTexts,e=>new OI({element:e})),this.animations.push(...this.animationsText),this.animationsTitle=$c(this.elements.animationsTitles,e=>new NI({element:e})),this.animations.push(...this.animationsTitle)}createObserver(){this.observer=new window.ResizeObserver(e=>{let t=!1;for(const n of e)if(n.target===this.elements.wrapper){t=!0;break}t&&window.requestAnimationFrame(()=>{this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight})}),this.observer.observe(this.elements.wrapper)}createLazyLoader(){ji(this.elements.lazyLoaders,e=>new $D({element:e}))}reset(){this.scroll={position:0,current:0,target:0,limit:0,ease:.1}}set(e){this.scroll.current=this.scroll.target=this.scroll.last=e,this.transform(this.elements.wrapper,this.scroll.current)}show(){this.reset(),ji(this.animations,t=>t.createAnimation()),this.isVisible=!0,this.addEventListeners(),zt.timeline().to(document.documentElement,{backgroundColor:this.element.getAttribute("data-background"),color:this.element.getAttribute("data-color"),ease:Kc}).fromTo(this.element,{autoAlpha:0},{autoAlpha:1,ease:Kc},0)}hide(){return this.isVisible=!1,this.removeEventListeners(),ji(this.animations,e=>e.destroyAnimation()),new Promise(e=>{zt.timeline().to(this.element,{autoAlpha:0,ease:Kc}).call(()=>e())})}transform(e,t){e.style[this.transformPrefix]=`translate3d(0, ${-Math.round(t)}px, 0)`}onResize(){this.elements.wrapper&&window.requestAnimationFrame(()=>{this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight,ji(this.animations,e=>{e.onResize&&e.onResize()})})}onTouchDown(e){!jc.isMobile||!this.isVisible||(this.isDown=!0,this.scroll.position=this.scroll.current,this.start=e.touches?e.touches[0].clientY:e.clientY)}onTouchMove(e){if(!jc.isMobile||!this.isDown||!this.isVisible)return;const t=e.touches?e.touches[0].clientY:e.clientY,n=(this.start-t)*3;this.scroll.target=this.scroll.position+n}onTouchUp(){!jc.isMobile||!this.isVisible||(this.isDown=!1)}onWheel(e){if(!this.isVisible)return;const t=e.pixelY;return this.scroll.target+=t,t}addEventListeners(){}removeEventListeners(){}update(){!this.isScrollable||!this.isVisible||(this.scroll.target=ZD(0,this.scroll.limit,this.scroll.target),this.scroll.current=KD(this.scroll.current,this.scroll.target,this.scroll.ease),this.scroll.target===0?this.scroll.current=Math.floor(this.scroll.current):this.scroll.current=Math.ceil(this.scroll.current),this.scroll.current<.1&&(this.scroll.current=0),this.elements.wrapper&&this.transform(this.elements.wrapper,this.scroll.current),ji(this.animations,e=>{e.update&&e.update(this.scroll)}),this.scroll.last=this.scroll.current)}}class FI extends nv{constructor(){super({id:"home",classes:{},element:".home",elements:{wrapper:".home__wrapper"}})}async show(){return super.show()}async hide(){return super.hide()}}class BI extends nv{constructor(){super({id:"about",classes:{},element:".about",elements:{wrapper:".about__wrapper"}})}async show(){return super.show()}async hide(){return super.hide()}}zt.registerPlugin(je);class Hp{constructor(){Al(this),this.url=window.location.href,this.isLoading=!1,this.clock=new UE,this.odlElapsedTime=0,this.init()}init(){this.createContent(),this.createCanvas(),this.createPages(),this.createPreloader(),this.addEventsListeners(),this.addLinkListeners(),this.update()}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={home:new FI,about:new BI},this.page=this.pages[this.template],this.page.create(!0)}createCanvas(){this.canvas=new DT({template:this.template})}createPreloader(){this.preloader=new HD,this.preloader.preload(this.content),this.preloader.on("preloaded",()=>this.onPreloaded())}createScrollTrigger(){je.scrollerProxy("#wrapper",{scrollTop:e=>(arguments.length&&(this.page.scroll.current=e),this.page.scroll.current),getBoundingClientRect(){return{top:0,left:0,width:window.innerWidth,height:window.innerHeight}}}),je.defaults({scroller:"#wrapper"})}onPreloaded(){this.onResize(),this.createScrollTrigger(),this.canvas.onPreloaded(),this.page.show()}onPopState(){this.onChange({url:window.location.pathname,push:!1})}async onChange({url:e,push:t}){if(e===this.url||this.isLoading)return;je.getAll().forEach(r=>r.kill()),this.url=e,this.isLoading=!0,this.canvas.onChangeStart(this.template,e),await this.page.hide();const n=await window.fetch(e);if(n.status===200){const r=await n.text(),s=document.createElement("div");s.innerHTML=r,t&&window.history.pushState({},"",e);const o=s.querySelector(".content");this.template=o.getAttribute("data-template"),this.content.innerHTML=o.innerHTML,this.content.setAttribute("data-template",this.template),this.createScrollTrigger(),this.page=this.pages[this.template],this.page.create(),await this.preloader.load(this.content),this.onResize(),this.canvas.onLoaded(this.template),this.page.show(),this.addLinkListeners(),this.isLoading=!1}else console.log("error")}onResize(){this.page&&this.page.onResize&&this.page.onResize(),window.requestAnimationFrame(()=>{this.canvas&&this.canvas.onResize&&this.canvas.onResize()})}onTouchDown(e){this.canvas&&this.canvas.onTouchDown&&this.canvas.onTouchDown(e),this.page&&this.page.onTouchDown&&this.page.onTouchDown(e)}onTouchMove(e){this.canvas&&this.canvas.onTouchMove&&this.canvas.onTouchMove(e),this.page&&this.page.onTouchMove&&this.page.onTouchMove(e)}onTouchUp(e){this.canvas&&this.canvas.onTouchUp&&this.canvas.onTouchUp(e),this.page&&this.page.onTouchUp&&this.page.onTouchUp(e)}onWheel(e){const t=pv(e);this.canvas&&this.canvas.onWheel&&this.canvas.onWheel(t),this.page&&this.page.onWheel&&this.page.onWheel(t)}update(){const e=this.clock.getElapsedTime(),t=e-this.odlElapsedTime;this.odlElapsedTime=e,this.page&&this.page.update&&this.page.update(),this.canvas&&this.canvas.update&&this.canvas.update(this.page.scroll.current,t),je.update(),window.requestAnimationFrame(this.update.bind(this))}addEventsListeners(){window.addEventListener("popstate",this.onPopState,{passive:!0}),window.addEventListener("resize",this.onResize,{passive:!0}),window.addEventListener("mousedown",this.onTouchDown,{passive:!0}),window.addEventListener("mousemove",this.onTouchMove,{passive:!0}),window.addEventListener("mouseup",this.onTouchUp,{passive:!0}),window.addEventListener("touchstart",this.onTouchDown,{passive:!0}),window.addEventListener("touchmove",this.onTouchMove,{passive:!0}),window.addEventListener("touchend",this.onTouchUp,{passive:!0}),window.addEventListener("wheel",this.onWheel,{passive:!0})}addLinkListeners(){const e=document.querySelectorAll("a");ji(e,t=>{const n=t.href.indexOf(window.location.origin)>-1,r=t.href.indexOf("#")>-1,s=t.href.indexOf("mailto")===-1,o=t.href.indexOf("tel")===-1;n?t.onclick=a=>{a.preventDefault(),r||this.onChange({url:t.href,push:!0})}:s&&o&&(t.rel="noopener",t.target="_blank")})}}const zI=new _v("Satoshi");Promise.all([zI.load()]).then(()=>new Hp).catch(()=>new Hp);
