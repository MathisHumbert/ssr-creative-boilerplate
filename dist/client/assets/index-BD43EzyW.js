(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();var Ei=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Os(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Nw={exports:{}};(function(i){(function(){function e(g,m){document.addEventListener?g.addEventListener("scroll",m,!1):g.attachEvent("scroll",m)}function t(g){document.body?g():document.addEventListener?document.addEventListener("DOMContentLoaded",function m(){document.removeEventListener("DOMContentLoaded",m),g()}):document.attachEvent("onreadystatechange",function m(){(document.readyState=="interactive"||document.readyState=="complete")&&(document.detachEvent("onreadystatechange",m),g())})}function n(g){this.g=document.createElement("div"),this.g.setAttribute("aria-hidden","true"),this.g.appendChild(document.createTextNode(g)),this.h=document.createElement("span"),this.i=document.createElement("span"),this.m=document.createElement("span"),this.j=document.createElement("span"),this.l=-1,this.h.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.i.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.j.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.m.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.h.appendChild(this.m),this.i.appendChild(this.j),this.g.appendChild(this.h),this.g.appendChild(this.i)}function r(g,m){g.g.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+m+";"}function a(g){var m=g.g.offsetWidth,x=m+100;return g.j.style.width=x+"px",g.i.scrollLeft=x,g.h.scrollLeft=g.h.scrollWidth+100,g.l!==m?(g.l=m,!0):!1}function l(g,m){function x(){var y=T;a(y)&&y.g.parentNode!==null&&m(y.l)}var T=g;e(g.h,x),e(g.i,x),a(g)}function c(g,m,x){m=m||{},x=x||window,this.family=g,this.style=m.style||"normal",this.weight=m.weight||"normal",this.stretch=m.stretch||"normal",this.context=x}var u=null,h=null,d=null,_=null;function p(g){return h===null&&(v(g)&&/Apple/.test(window.navigator.vendor)?(g=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent),h=!!g&&603>parseInt(g[1],10)):h=!1),h}function v(g){return _===null&&(_=!!g.document.fonts),_}function S(g,m){var x=g.style,T=g.weight;if(d===null){var y=document.createElement("div");try{y.style.font="condensed 100px sans-serif"}catch{}d=y.style.font!==""}return[x,T,d?g.stretch:"","100px",m].join(" ")}c.prototype.load=function(g,m){var x=this,T=g||"BESbswy",y=0,w=m||3e3,P=new Date().getTime();return new Promise(function(I,L){if(v(x.context)&&!p(x.context)){var G=new Promise(function(b,O){function K(){new Date().getTime()-P>=w?O(Error(""+w+"ms timeout exceeded")):x.context.document.fonts.load(S(x,'"'+x.family+'"'),T).then(function(ne){1<=ne.length?b():setTimeout(K,25)},O)}K()}),k=new Promise(function(b,O){y=setTimeout(function(){O(Error(""+w+"ms timeout exceeded"))},w)});Promise.race([k,G]).then(function(){clearTimeout(y),I(x)},L)}else t(function(){function b(){var he;(he=$!=-1&&V!=-1||$!=-1&&j!=-1||V!=-1&&j!=-1)&&((he=$!=V&&$!=j&&V!=j)||(u===null&&(he=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),u=!!he&&(536>parseInt(he[1],10)||parseInt(he[1],10)===536&&11>=parseInt(he[2],10))),he=u&&($==Q&&V==Q&&j==Q||$==le&&V==le&&j==le||$==oe&&V==oe&&j==oe)),he=!he),he&&(se.parentNode!==null&&se.parentNode.removeChild(se),clearTimeout(y),I(x))}function O(){if(new Date().getTime()-P>=w)se.parentNode!==null&&se.parentNode.removeChild(se),L(Error(""+w+"ms timeout exceeded"));else{var he=x.context.document.hidden;(he===!0||he===void 0)&&($=K.g.offsetWidth,V=ne.g.offsetWidth,j=z.g.offsetWidth,b()),y=setTimeout(O,50)}}var K=new n(T),ne=new n(T),z=new n(T),$=-1,V=-1,j=-1,Q=-1,le=-1,oe=-1,se=document.createElement("div");se.dir="ltr",r(K,S(x,"sans-serif")),r(ne,S(x,"serif")),r(z,S(x,"monospace")),se.appendChild(K.g),se.appendChild(ne.g),se.appendChild(z.g),x.context.document.body.appendChild(se),Q=K.g.offsetWidth,le=ne.g.offsetWidth,oe=z.g.offsetWidth,O(),l(K,function(he){$=he,b()}),r(K,S(x,'"'+x.family+'",sans-serif')),l(ne,function(he){V=he,b()}),r(ne,S(x,'"'+x.family+'",serif')),l(z,function(he){j=he,b()}),r(z,S(x,'"'+x.family+'",monospace'))})})},i.exports=c})()})(Nw);window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(i,e){e=e||window;for(var t=0;t<this.length;t++)i.call(e,this[t],t,this)});window.history.scrollRestoration&&(window.history.scrollRestoration="manual");const Fw=i=>{const e=new Set;do for(const t of Reflect.ownKeys(i))e.add([i,t]);while((i=Reflect.getPrototypeOf(i))&&i!==Object.prototype);return e};function Nc(i,{include:e,exclude:t}={}){const n=r=>{const a=l=>typeof l=="string"?r===l:l.test(r);return e?e.some(a):t?!t.some(a):!0};for(const[r,a]of Fw(i.constructor.prototype)){if(a==="constructor"||!n(a))continue;const l=Reflect.getOwnPropertyDescriptor(r,a);l&&typeof l.value=="function"&&(i[a]=i[a].bind(i))}return i}function Bw(i,e){for(var t=-1,n=i==null?0:i.length;++t<n&&e(i[t],t,i)!==!1;);return i}var zw=Bw;function Gw(i){return function(e,t,n){for(var r=-1,a=Object(e),l=n(e),c=l.length;c--;){var u=l[i?c:++r];if(t(a[u],u,a)===!1)break}return e}}var Hw=Gw,kw=Hw,Vw=kw(),Ww=Vw;function Xw(i,e){for(var t=-1,n=Array(i);++t<i;)n[t]=e(t);return n}var $w=Xw,qw=typeof Ei=="object"&&Ei&&Ei.Object===Object&&Ei,fv=qw,Yw=fv,Kw=typeof self=="object"&&self&&self.Object===Object&&self,Zw=Yw||Kw||Function("return this")(),br=Zw,jw=br,Jw=jw.Symbol,Fc=Jw,zm=Fc,hv=Object.prototype,Qw=hv.hasOwnProperty,e1=hv.toString,mo=zm?zm.toStringTag:void 0;function t1(i){var e=Qw.call(i,mo),t=i[mo];try{i[mo]=void 0;var n=!0}catch{}var r=e1.call(i);return n&&(e?i[mo]=t:delete i[mo]),r}var n1=t1,i1=Object.prototype,r1=i1.toString;function s1(i){return r1.call(i)}var a1=s1,Gm=Fc,o1=n1,l1=a1,c1="[object Null]",u1="[object Undefined]",Hm=Gm?Gm.toStringTag:void 0;function f1(i){return i==null?i===void 0?u1:c1:Hm&&Hm in Object(i)?o1(i):l1(i)}var Go=f1;function h1(i){return i!=null&&typeof i=="object"}var Ho=h1,d1=Go,p1=Ho,m1="[object Arguments]";function _1(i){return p1(i)&&d1(i)==m1}var g1=_1,km=g1,v1=Ho,dv=Object.prototype,x1=dv.hasOwnProperty,S1=dv.propertyIsEnumerable,M1=km(function(){return arguments}())?km:function(i){return v1(i)&&x1.call(i,"callee")&&!S1.call(i,"callee")},pv=M1,y1=Array.isArray,ji=y1,Sc={exports:{}};function E1(){return!1}var b1=E1;Sc.exports;(function(i,e){var t=br,n=b1,r=e&&!e.nodeType&&e,a=r&&!0&&i&&!i.nodeType&&i,l=a&&a.exports===r,c=l?t.Buffer:void 0,u=c?c.isBuffer:void 0,h=u||n;i.exports=h})(Sc,Sc.exports);var mv=Sc.exports,T1=9007199254740991,w1=/^(?:0|[1-9]\d*)$/;function A1(i,e){var t=typeof i;return e=e??T1,!!e&&(t=="number"||t!="symbol"&&w1.test(i))&&i>-1&&i%1==0&&i<e}var _v=A1,R1=9007199254740991;function C1(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=R1}var Wh=C1,L1=Go,P1=Wh,D1=Ho,I1="[object Arguments]",U1="[object Array]",O1="[object Boolean]",N1="[object Date]",F1="[object Error]",B1="[object Function]",z1="[object Map]",G1="[object Number]",H1="[object Object]",k1="[object RegExp]",V1="[object Set]",W1="[object String]",X1="[object WeakMap]",$1="[object ArrayBuffer]",q1="[object DataView]",Y1="[object Float32Array]",K1="[object Float64Array]",Z1="[object Int8Array]",j1="[object Int16Array]",J1="[object Int32Array]",Q1="[object Uint8Array]",eA="[object Uint8ClampedArray]",tA="[object Uint16Array]",nA="[object Uint32Array]",zt={};zt[Y1]=zt[K1]=zt[Z1]=zt[j1]=zt[J1]=zt[Q1]=zt[eA]=zt[tA]=zt[nA]=!0;zt[I1]=zt[U1]=zt[$1]=zt[O1]=zt[q1]=zt[N1]=zt[F1]=zt[B1]=zt[z1]=zt[G1]=zt[H1]=zt[k1]=zt[V1]=zt[W1]=zt[X1]=!1;function iA(i){return D1(i)&&P1(i.length)&&!!zt[L1(i)]}var rA=iA;function sA(i){return function(e){return i(e)}}var aA=sA,Mc={exports:{}};Mc.exports;(function(i,e){var t=fv,n=e&&!e.nodeType&&e,r=n&&!0&&i&&!i.nodeType&&i,a=r&&r.exports===n,l=a&&t.process,c=function(){try{var u=r&&r.require&&r.require("util").types;return u||l&&l.binding&&l.binding("util")}catch{}}();i.exports=c})(Mc,Mc.exports);var oA=Mc.exports,lA=rA,cA=aA,Vm=oA,Wm=Vm&&Vm.isTypedArray,uA=Wm?cA(Wm):lA,gv=uA,fA=$w,hA=pv,dA=ji,pA=mv,mA=_v,_A=gv,gA=Object.prototype,vA=gA.hasOwnProperty;function xA(i,e){var t=dA(i),n=!t&&hA(i),r=!t&&!n&&pA(i),a=!t&&!n&&!r&&_A(i),l=t||n||r||a,c=l?fA(i.length,String):[],u=c.length;for(var h in i)(e||vA.call(i,h))&&!(l&&(h=="length"||r&&(h=="offset"||h=="parent")||a&&(h=="buffer"||h=="byteLength"||h=="byteOffset")||mA(h,u)))&&c.push(h);return c}var SA=xA,MA=Object.prototype;function yA(i){var e=i&&i.constructor,t=typeof e=="function"&&e.prototype||MA;return i===t}var EA=yA;function bA(i,e){return function(t){return i(e(t))}}var TA=bA,wA=TA,AA=wA(Object.keys,Object),RA=AA,CA=EA,LA=RA,PA=Object.prototype,DA=PA.hasOwnProperty;function IA(i){if(!CA(i))return LA(i);var e=[];for(var t in Object(i))DA.call(i,t)&&t!="constructor"&&e.push(t);return e}var UA=IA;function OA(i){var e=typeof i;return i!=null&&(e=="object"||e=="function")}var Xh=OA,NA=Go,FA=Xh,BA="[object AsyncFunction]",zA="[object Function]",GA="[object GeneratorFunction]",HA="[object Proxy]";function kA(i){if(!FA(i))return!1;var e=NA(i);return e==zA||e==GA||e==BA||e==HA}var vv=kA,VA=vv,WA=Wh;function XA(i){return i!=null&&WA(i.length)&&!VA(i)}var $h=XA,$A=SA,qA=UA,YA=$h;function KA(i){return YA(i)?$A(i):qA(i)}var qh=KA,ZA=Ww,jA=qh;function JA(i,e){return i&&ZA(i,e,jA)}var QA=JA,eR=$h;function tR(i,e){return function(t,n){if(t==null)return t;if(!eR(t))return i(t,n);for(var r=t.length,a=e?r:-1,l=Object(t);(e?a--:++a<r)&&n(l[a],a,l)!==!1;);return t}}var nR=tR,iR=QA,rR=nR,sR=rR(iR),xv=sR;function aR(i){return i}var Sv=aR,oR=Sv;function lR(i){return typeof i=="function"?i:oR}var cR=lR,uR=zw,fR=xv,hR=cR,dR=ji;function pR(i,e){var t=dR(i)?uR:fR;return t(i,hR(e))}var mR=pR,_R=mR;const Mv=Os(_R);var Xm=!1,xs,sh,ah,hc,dc,yv,pc,oh,lh,ch,Ev,uh,fh,bv,Tv;function zn(){if(!Xm){Xm=!0;var i=navigator.userAgent,e=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(i),t=/(Mac OS X)|(Windows)|(Linux)/.exec(i);if(uh=/\b(iPhone|iP[ao]d)/.exec(i),fh=/\b(iP[ao]d)/.exec(i),ch=/Android/i.exec(i),bv=/FBAN\/\w+;/i.exec(i),Tv=/Mobile/i.exec(i),Ev=!!/Win64/.exec(i),e){xs=e[1]?parseFloat(e[1]):e[5]?parseFloat(e[5]):NaN,xs&&document&&document.documentMode&&(xs=document.documentMode);var n=/(?:Trident\/(\d+.\d+))/.exec(i);yv=n?parseFloat(n[1])+4:xs,sh=e[2]?parseFloat(e[2]):NaN,ah=e[3]?parseFloat(e[3]):NaN,hc=e[4]?parseFloat(e[4]):NaN,hc?(e=/(?:Chrome\/(\d+\.\d+))/.exec(i),dc=e&&e[1]?parseFloat(e[1]):NaN):dc=NaN}else xs=sh=ah=dc=hc=NaN;if(t){if(t[1]){var r=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(i);pc=r?parseFloat(r[1].replace("_",".")):!0}else pc=!1;oh=!!t[2],lh=!!t[3]}else pc=oh=lh=!1}}var hh={ie:function(){return zn()||xs},ieCompatibilityMode:function(){return zn()||yv>xs},ie64:function(){return hh.ie()&&Ev},firefox:function(){return zn()||sh},opera:function(){return zn()||ah},webkit:function(){return zn()||hc},safari:function(){return hh.webkit()},chrome:function(){return zn()||dc},windows:function(){return zn()||oh},osx:function(){return zn()||pc},linux:function(){return zn()||lh},iphone:function(){return zn()||uh},mobile:function(){return zn()||uh||fh||ch||Tv},nativeApp:function(){return zn()||bv},android:function(){return zn()||ch},ipad:function(){return zn()||fh}},gR=hh,Bl=!!(typeof window<"u"&&window.document&&window.document.createElement),vR={canUseDOM:Bl,canUseWorkers:typeof Worker<"u",canUseEventListeners:Bl&&!!(window.addEventListener||window.attachEvent),canUseViewport:Bl&&!!window.screen,isInWorker:!Bl},xR=vR,wv=xR,Av;wv.canUseDOM&&(Av=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);/**
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
 */function SR(i,e){if(!wv.canUseDOM||e&&!("addEventListener"in document))return!1;var t="on"+i,n=t in document;if(!n){var r=document.createElement("div");r.setAttribute(t,"return;"),n=typeof r[t]=="function"}return!n&&Av&&i==="wheel"&&(n=document.implementation.hasFeature("Events.wheel","3.0")),n}var MR=SR,yR=gR,ER=MR,$m=10,qm=40,Ym=800;function Rv(i){var e=0,t=0,n=0,r=0;return"detail"in i&&(t=i.detail),"wheelDelta"in i&&(t=-i.wheelDelta/120),"wheelDeltaY"in i&&(t=-i.wheelDeltaY/120),"wheelDeltaX"in i&&(e=-i.wheelDeltaX/120),"axis"in i&&i.axis===i.HORIZONTAL_AXIS&&(e=t,t=0),n=e*$m,r=t*$m,"deltaY"in i&&(r=i.deltaY),"deltaX"in i&&(n=i.deltaX),(n||r)&&i.deltaMode&&(i.deltaMode==1?(n*=qm,r*=qm):(n*=Ym,r*=Ym)),n&&!e&&(e=n<1?-1:1),r&&!t&&(t=r<1?-1:1),{spinX:e,spinY:t,pixelX:n,pixelY:r}}Rv.getEventType=function(){return yR.firefox()?"DOMMouseScroll":ER("wheel")?"wheel":"mousewheel"};var bR=Rv,TR=bR;const wR=Os(TR);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yh="161",AR=0,Km=1,RR=2,Cv=1,CR=2,dr=3,Zr=0,Wn=1,_r=2,Xr=0,Ta=1,Zm=2,jm=3,Jm=4,LR=5,Ss=100,PR=101,DR=102,Qm=103,e_=104,IR=200,UR=201,OR=202,NR=203,dh=204,ph=205,FR=206,BR=207,zR=208,GR=209,HR=210,kR=211,VR=212,WR=213,XR=214,$R=0,qR=1,YR=2,yc=3,KR=4,ZR=5,jR=6,JR=7,Lv=0,QR=1,eC=2,$r=0,tC=1,nC=2,iC=3,rC=4,sC=5,aC=6,Pv=300,Da=301,Ia=302,mh=303,_h=304,Bc=306,gh=1e3,Ni=1001,vh=1002,Ln=1003,t_=1004,_o=1005,Hn=1006,uf=1007,ys=1008,qr=1009,oC=1010,lC=1011,Kh=1012,Dv=1013,Hr=1014,gr=1015,Po=1016,Iv=1017,Uv=1018,bs=1020,cC=1021,Fi=1023,uC=1024,fC=1025,Ts=1026,Ua=1027,hC=1028,Ov=1029,dC=1030,Nv=1031,Fv=1033,ff=33776,hf=33777,df=33778,pf=33779,n_=35840,i_=35841,r_=35842,s_=35843,Bv=36196,a_=37492,o_=37496,l_=37808,c_=37809,u_=37810,f_=37811,h_=37812,d_=37813,p_=37814,m_=37815,__=37816,g_=37817,v_=37818,x_=37819,S_=37820,M_=37821,mf=36492,y_=36494,E_=36495,pC=36283,b_=36284,T_=36285,w_=36286,zv=3e3,ws=3001,mC=3200,_C=3201,gC=0,vC=1,bi="",mn="srgb",xr="srgb-linear",Zh="display-p3",zc="display-p3-linear",Ec="linear",Bt="srgb",bc="rec709",Tc="p3",ra=7680,A_=519,xC=512,SC=513,MC=514,Gv=515,yC=516,EC=517,bC=518,TC=519,R_=35044,C_="300 es",xh=1035,vr=2e3,wc=2001;class Ha{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,l=r.length;a<l;a++)r[a].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_f=Math.PI/180,Sh=180/Math.PI;function ko(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function kn(i,e,t){return Math.max(e,Math.min(t,i))}function wC(i,e){return(i%e+e)%e}function gf(i,e,t){return(1-t)*i+t*e}function L_(i){return(i&i-1)===0&&i!==0}function Mh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function go(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Gn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class yt{constructor(e=0,t=0){yt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*r+e.x,this.y=a*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,t,n,r,a,l,c,u,h){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,c,u,h)}set(e,t,n,r,a,l,c,u,h){const d=this.elements;return d[0]=e,d[1]=r,d[2]=c,d[3]=t,d[4]=a,d[5]=u,d[6]=n,d[7]=l,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],c=n[3],u=n[6],h=n[1],d=n[4],_=n[7],p=n[2],v=n[5],S=n[8],g=r[0],m=r[3],x=r[6],T=r[1],y=r[4],w=r[7],P=r[2],I=r[5],L=r[8];return a[0]=l*g+c*T+u*P,a[3]=l*m+c*y+u*I,a[6]=l*x+c*w+u*L,a[1]=h*g+d*T+_*P,a[4]=h*m+d*y+_*I,a[7]=h*x+d*w+_*L,a[2]=p*g+v*T+S*P,a[5]=p*m+v*y+S*I,a[8]=p*x+v*w+S*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],u=e[6],h=e[7],d=e[8];return t*l*d-t*c*h-n*a*d+n*c*u+r*a*h-r*l*u}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],u=e[6],h=e[7],d=e[8],_=d*l-c*h,p=c*u-d*a,v=h*a-l*u,S=t*_+n*p+r*v;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/S;return e[0]=_*g,e[1]=(r*h-d*n)*g,e[2]=(c*n-r*l)*g,e[3]=p*g,e[4]=(d*t-r*u)*g,e[5]=(r*a-c*t)*g,e[6]=v*g,e[7]=(n*u-h*t)*g,e[8]=(l*t-n*a)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,l,c){const u=Math.cos(a),h=Math.sin(a);return this.set(n*u,n*h,-n*(u*l+h*c)+l+e,-r*h,r*u,-r*(-h*l+u*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(vf.makeScale(e,t)),this}rotate(e){return this.premultiply(vf.makeRotation(-e)),this}translate(e,t){return this.premultiply(vf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vf=new dt;function Hv(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Do(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function AC(){const i=Do("canvas");return i.style.display="block",i}const P_={};function wa(i){i in P_||(P_[i]=!0,console.warn(i))}const D_=new dt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),I_=new dt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zl={[xr]:{transfer:Ec,primaries:bc,toReference:i=>i,fromReference:i=>i},[mn]:{transfer:Bt,primaries:bc,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[zc]:{transfer:Ec,primaries:Tc,toReference:i=>i.applyMatrix3(I_),fromReference:i=>i.applyMatrix3(D_)},[Zh]:{transfer:Bt,primaries:Tc,toReference:i=>i.convertSRGBToLinear().applyMatrix3(I_),fromReference:i=>i.applyMatrix3(D_).convertLinearToSRGB()}},RC=new Set([xr,zc]),At={enabled:!0,_workingColorSpace:xr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!RC.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=zl[e].toReference,r=zl[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return zl[i].primaries},getTransfer:function(i){return i===bi?Ec:zl[i].transfer}};function Aa(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xf(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let sa;class kv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{sa===void 0&&(sa=Do("canvas")),sa.width=e.width,sa.height=e.height;const n=sa.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=sa}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Do("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let l=0;l<a.length;l++)a[l]=Aa(a[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Aa(t[n]/255)*255):t[n]=Aa(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let CC=0;class Vv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:CC++}),this.uuid=ko(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let l=0,c=r.length;l<c;l++)r[l].isDataTexture?a.push(Sf(r[l].image)):a.push(Sf(r[l]))}else a=Sf(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Sf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?kv.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let LC=0;class Dn extends Ha{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,n=Ni,r=Ni,a=Hn,l=ys,c=Fi,u=qr,h=Dn.DEFAULT_ANISOTROPY,d=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:LC++}),this.uuid=ko(),this.name="",this.source=new Vv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=l,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=u,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(wa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===ws?mn:bi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gh:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case vh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gh:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case vh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return wa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===mn?ws:zv}set encoding(e){wa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ws?mn:bi}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Pv;Dn.DEFAULT_ANISOTROPY=1;class _n{constructor(e=0,t=0,n=0,r=1){_n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const u=e.elements,h=u[0],d=u[4],_=u[8],p=u[1],v=u[5],S=u[9],g=u[2],m=u[6],x=u[10];if(Math.abs(d-p)<.01&&Math.abs(_-g)<.01&&Math.abs(S-m)<.01){if(Math.abs(d+p)<.1&&Math.abs(_+g)<.1&&Math.abs(S+m)<.1&&Math.abs(h+v+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(h+1)/2,w=(v+1)/2,P=(x+1)/2,I=(d+p)/4,L=(_+g)/4,G=(S+m)/4;return y>w&&y>P?y<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(y),r=I/n,a=L/n):w>P?w<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(w),n=I/r,a=G/r):P<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(P),n=L/a,r=G/a),this.set(n,r,a,t),this}let T=Math.sqrt((m-S)*(m-S)+(_-g)*(_-g)+(p-d)*(p-d));return Math.abs(T)<.001&&(T=1),this.x=(m-S)/T,this.y=(_-g)/T,this.z=(p-d)/T,this.w=Math.acos((h+v+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class PC extends Ha{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _n(0,0,e,t),this.scissorTest=!1,this.viewport=new _n(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(wa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ws?mn:bi),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Dn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ds extends PC{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Wv extends Dn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class DC extends Dn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vo{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,l,c){let u=n[r+0],h=n[r+1],d=n[r+2],_=n[r+3];const p=a[l+0],v=a[l+1],S=a[l+2],g=a[l+3];if(c===0){e[t+0]=u,e[t+1]=h,e[t+2]=d,e[t+3]=_;return}if(c===1){e[t+0]=p,e[t+1]=v,e[t+2]=S,e[t+3]=g;return}if(_!==g||u!==p||h!==v||d!==S){let m=1-c;const x=u*p+h*v+d*S+_*g,T=x>=0?1:-1,y=1-x*x;if(y>Number.EPSILON){const P=Math.sqrt(y),I=Math.atan2(P,x*T);m=Math.sin(m*I)/P,c=Math.sin(c*I)/P}const w=c*T;if(u=u*m+p*w,h=h*m+v*w,d=d*m+S*w,_=_*m+g*w,m===1-c){const P=1/Math.sqrt(u*u+h*h+d*d+_*_);u*=P,h*=P,d*=P,_*=P}}e[t]=u,e[t+1]=h,e[t+2]=d,e[t+3]=_}static multiplyQuaternionsFlat(e,t,n,r,a,l){const c=n[r],u=n[r+1],h=n[r+2],d=n[r+3],_=a[l],p=a[l+1],v=a[l+2],S=a[l+3];return e[t]=c*S+d*_+u*v-h*p,e[t+1]=u*S+d*p+h*_-c*v,e[t+2]=h*S+d*v+c*p-u*_,e[t+3]=d*S-c*_-u*p-h*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,l=e._order,c=Math.cos,u=Math.sin,h=c(n/2),d=c(r/2),_=c(a/2),p=u(n/2),v=u(r/2),S=u(a/2);switch(l){case"XYZ":this._x=p*d*_+h*v*S,this._y=h*v*_-p*d*S,this._z=h*d*S+p*v*_,this._w=h*d*_-p*v*S;break;case"YXZ":this._x=p*d*_+h*v*S,this._y=h*v*_-p*d*S,this._z=h*d*S-p*v*_,this._w=h*d*_+p*v*S;break;case"ZXY":this._x=p*d*_-h*v*S,this._y=h*v*_+p*d*S,this._z=h*d*S+p*v*_,this._w=h*d*_-p*v*S;break;case"ZYX":this._x=p*d*_-h*v*S,this._y=h*v*_+p*d*S,this._z=h*d*S-p*v*_,this._w=h*d*_+p*v*S;break;case"YZX":this._x=p*d*_+h*v*S,this._y=h*v*_+p*d*S,this._z=h*d*S-p*v*_,this._w=h*d*_-p*v*S;break;case"XZY":this._x=p*d*_-h*v*S,this._y=h*v*_-p*d*S,this._z=h*d*S+p*v*_,this._w=h*d*_+p*v*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],l=t[1],c=t[5],u=t[9],h=t[2],d=t[6],_=t[10],p=n+c+_;if(p>0){const v=.5/Math.sqrt(p+1);this._w=.25/v,this._x=(d-u)*v,this._y=(a-h)*v,this._z=(l-r)*v}else if(n>c&&n>_){const v=2*Math.sqrt(1+n-c-_);this._w=(d-u)/v,this._x=.25*v,this._y=(r+l)/v,this._z=(a+h)/v}else if(c>_){const v=2*Math.sqrt(1+c-n-_);this._w=(a-h)/v,this._x=(r+l)/v,this._y=.25*v,this._z=(u+d)/v}else{const v=2*Math.sqrt(1+_-n-c);this._w=(l-r)/v,this._x=(a+h)/v,this._y=(u+d)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,l=e._w,c=t._x,u=t._y,h=t._z,d=t._w;return this._x=n*d+l*c+r*h-a*u,this._y=r*d+l*u+a*c-n*h,this._z=a*d+l*h+n*u-r*c,this._w=l*d-n*c-r*u-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,l=this._w;let c=l*e._w+n*e._x+r*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=l,this._x=n,this._y=r,this._z=a,this;const u=1-c*c;if(u<=Number.EPSILON){const v=1-t;return this._w=v*l+t*this._w,this._x=v*n+t*this._x,this._y=v*r+t*this._y,this._z=v*a+t*this._z,this.normalize(),this}const h=Math.sqrt(u),d=Math.atan2(h,c),_=Math.sin((1-t)*d)/h,p=Math.sin(t*d)/h;return this._w=l*_+this._w*p,this._x=n*_+this._x*p,this._y=r*_+this._y*p,this._z=a*_+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(a),n*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,t=0,n=0){ie.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(U_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(U_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,l=e.y,c=e.z,u=e.w,h=2*(l*r-c*n),d=2*(c*t-a*r),_=2*(a*n-l*t);return this.x=t+u*h+l*_-c*d,this.y=n+u*d+c*h-a*_,this.z=r+u*_+a*d-l*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,l=t.x,c=t.y,u=t.z;return this.x=r*u-a*c,this.y=a*l-n*u,this.z=n*c-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mf.copy(this).projectOnVector(e),this.sub(Mf)}reflect(e){return this.sub(Mf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mf=new ie,U_=new Vo;class Wo{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let l=0,c=a.count;l<c;l++)e.isMesh===!0?e.getVertexPosition(l,Ii):Ii.fromBufferAttribute(a,l),Ii.applyMatrix4(e.matrixWorld),this.expandByPoint(Ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gl.copy(n.boundingBox)),Gl.applyMatrix4(e.matrixWorld),this.union(Gl)}const r=e.children;for(let a=0,l=r.length;a<l;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ii),Ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vo),Hl.subVectors(this.max,vo),aa.subVectors(e.a,vo),oa.subVectors(e.b,vo),la.subVectors(e.c,vo),Ur.subVectors(oa,aa),Or.subVectors(la,oa),cs.subVectors(aa,la);let t=[0,-Ur.z,Ur.y,0,-Or.z,Or.y,0,-cs.z,cs.y,Ur.z,0,-Ur.x,Or.z,0,-Or.x,cs.z,0,-cs.x,-Ur.y,Ur.x,0,-Or.y,Or.x,0,-cs.y,cs.x,0];return!yf(t,aa,oa,la,Hl)||(t=[1,0,0,0,1,0,0,0,1],!yf(t,aa,oa,la,Hl))?!1:(kl.crossVectors(Ur,Or),t=[kl.x,kl.y,kl.z],yf(t,aa,oa,la,Hl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(lr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const lr=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Ii=new ie,Gl=new Wo,aa=new ie,oa=new ie,la=new ie,Ur=new ie,Or=new ie,cs=new ie,vo=new ie,Hl=new ie,kl=new ie,us=new ie;function yf(i,e,t,n,r){for(let a=0,l=i.length-3;a<=l;a+=3){us.fromArray(i,a);const c=r.x*Math.abs(us.x)+r.y*Math.abs(us.y)+r.z*Math.abs(us.z),u=e.dot(us),h=t.dot(us),d=n.dot(us);if(Math.max(-Math.max(u,h,d),Math.min(u,h,d))>c)return!1}return!0}const IC=new Wo,xo=new ie,Ef=new ie;class jh{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):IC.setFromPoints(e).getCenter(n);let r=0;for(let a=0,l=e.length;a<l;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xo.subVectors(e,this.center);const t=xo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(xo,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ef.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xo.copy(e.center).add(Ef)),this.expandByPoint(xo.copy(e.center).sub(Ef))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cr=new ie,bf=new ie,Vl=new ie,Nr=new ie,Tf=new ie,Wl=new ie,wf=new ie;class UC{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cr.copy(this.origin).addScaledVector(this.direction,t),cr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){bf.copy(e).add(t).multiplyScalar(.5),Vl.copy(t).sub(e).normalize(),Nr.copy(this.origin).sub(bf);const a=e.distanceTo(t)*.5,l=-this.direction.dot(Vl),c=Nr.dot(this.direction),u=-Nr.dot(Vl),h=Nr.lengthSq(),d=Math.abs(1-l*l);let _,p,v,S;if(d>0)if(_=l*u-c,p=l*c-u,S=a*d,_>=0)if(p>=-S)if(p<=S){const g=1/d;_*=g,p*=g,v=_*(_+l*p+2*c)+p*(l*_+p+2*u)+h}else p=a,_=Math.max(0,-(l*p+c)),v=-_*_+p*(p+2*u)+h;else p=-a,_=Math.max(0,-(l*p+c)),v=-_*_+p*(p+2*u)+h;else p<=-S?(_=Math.max(0,-(-l*a+c)),p=_>0?-a:Math.min(Math.max(-a,-u),a),v=-_*_+p*(p+2*u)+h):p<=S?(_=0,p=Math.min(Math.max(-a,-u),a),v=p*(p+2*u)+h):(_=Math.max(0,-(l*a+c)),p=_>0?a:Math.min(Math.max(-a,-u),a),v=-_*_+p*(p+2*u)+h);else p=l>0?-a:a,_=Math.max(0,-(l*p+c)),v=-_*_+p*(p+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(bf).addScaledVector(Vl,p),v}intersectSphere(e,t){cr.subVectors(e.center,this.origin);const n=cr.dot(this.direction),r=cr.dot(cr)-n*n,a=e.radius*e.radius;if(r>a)return null;const l=Math.sqrt(a-r),c=n-l,u=n+l;return u<0?null:c<0?this.at(u,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,l,c,u;const h=1/this.direction.x,d=1/this.direction.y,_=1/this.direction.z,p=this.origin;return h>=0?(n=(e.min.x-p.x)*h,r=(e.max.x-p.x)*h):(n=(e.max.x-p.x)*h,r=(e.min.x-p.x)*h),d>=0?(a=(e.min.y-p.y)*d,l=(e.max.y-p.y)*d):(a=(e.max.y-p.y)*d,l=(e.min.y-p.y)*d),n>l||a>r||((a>n||isNaN(n))&&(n=a),(l<r||isNaN(r))&&(r=l),_>=0?(c=(e.min.z-p.z)*_,u=(e.max.z-p.z)*_):(c=(e.max.z-p.z)*_,u=(e.min.z-p.z)*_),n>u||c>r)||((c>n||n!==n)&&(n=c),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,cr)!==null}intersectTriangle(e,t,n,r,a){Tf.subVectors(t,e),Wl.subVectors(n,e),wf.crossVectors(Tf,Wl);let l=this.direction.dot(wf),c;if(l>0){if(r)return null;c=1}else if(l<0)c=-1,l=-l;else return null;Nr.subVectors(this.origin,e);const u=c*this.direction.dot(Wl.crossVectors(Nr,Wl));if(u<0)return null;const h=c*this.direction.dot(Tf.cross(Nr));if(h<0||u+h>l)return null;const d=-c*Nr.dot(wf);return d<0?null:this.at(d/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gn{constructor(e,t,n,r,a,l,c,u,h,d,_,p,v,S,g,m){gn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,c,u,h,d,_,p,v,S,g,m)}set(e,t,n,r,a,l,c,u,h,d,_,p,v,S,g,m){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=r,x[1]=a,x[5]=l,x[9]=c,x[13]=u,x[2]=h,x[6]=d,x[10]=_,x[14]=p,x[3]=v,x[7]=S,x[11]=g,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gn().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ca.setFromMatrixColumn(e,0).length(),a=1/ca.setFromMatrixColumn(e,1).length(),l=1/ca.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,l=Math.cos(n),c=Math.sin(n),u=Math.cos(r),h=Math.sin(r),d=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const p=l*d,v=l*_,S=c*d,g=c*_;t[0]=u*d,t[4]=-u*_,t[8]=h,t[1]=v+S*h,t[5]=p-g*h,t[9]=-c*u,t[2]=g-p*h,t[6]=S+v*h,t[10]=l*u}else if(e.order==="YXZ"){const p=u*d,v=u*_,S=h*d,g=h*_;t[0]=p+g*c,t[4]=S*c-v,t[8]=l*h,t[1]=l*_,t[5]=l*d,t[9]=-c,t[2]=v*c-S,t[6]=g+p*c,t[10]=l*u}else if(e.order==="ZXY"){const p=u*d,v=u*_,S=h*d,g=h*_;t[0]=p-g*c,t[4]=-l*_,t[8]=S+v*c,t[1]=v+S*c,t[5]=l*d,t[9]=g-p*c,t[2]=-l*h,t[6]=c,t[10]=l*u}else if(e.order==="ZYX"){const p=l*d,v=l*_,S=c*d,g=c*_;t[0]=u*d,t[4]=S*h-v,t[8]=p*h+g,t[1]=u*_,t[5]=g*h+p,t[9]=v*h-S,t[2]=-h,t[6]=c*u,t[10]=l*u}else if(e.order==="YZX"){const p=l*u,v=l*h,S=c*u,g=c*h;t[0]=u*d,t[4]=g-p*_,t[8]=S*_+v,t[1]=_,t[5]=l*d,t[9]=-c*d,t[2]=-h*d,t[6]=v*_+S,t[10]=p-g*_}else if(e.order==="XZY"){const p=l*u,v=l*h,S=c*u,g=c*h;t[0]=u*d,t[4]=-_,t[8]=h*d,t[1]=p*_+g,t[5]=l*d,t[9]=v*_-S,t[2]=S*_-v,t[6]=c*d,t[10]=g*_+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(OC,e,NC)}lookAt(e,t,n){const r=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Fr.crossVectors(n,ni),Fr.lengthSq()===0&&(Math.abs(n.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Fr.crossVectors(n,ni)),Fr.normalize(),Xl.crossVectors(ni,Fr),r[0]=Fr.x,r[4]=Xl.x,r[8]=ni.x,r[1]=Fr.y,r[5]=Xl.y,r[9]=ni.y,r[2]=Fr.z,r[6]=Xl.z,r[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],c=n[4],u=n[8],h=n[12],d=n[1],_=n[5],p=n[9],v=n[13],S=n[2],g=n[6],m=n[10],x=n[14],T=n[3],y=n[7],w=n[11],P=n[15],I=r[0],L=r[4],G=r[8],k=r[12],b=r[1],O=r[5],K=r[9],ne=r[13],z=r[2],$=r[6],V=r[10],j=r[14],Q=r[3],le=r[7],oe=r[11],se=r[15];return a[0]=l*I+c*b+u*z+h*Q,a[4]=l*L+c*O+u*$+h*le,a[8]=l*G+c*K+u*V+h*oe,a[12]=l*k+c*ne+u*j+h*se,a[1]=d*I+_*b+p*z+v*Q,a[5]=d*L+_*O+p*$+v*le,a[9]=d*G+_*K+p*V+v*oe,a[13]=d*k+_*ne+p*j+v*se,a[2]=S*I+g*b+m*z+x*Q,a[6]=S*L+g*O+m*$+x*le,a[10]=S*G+g*K+m*V+x*oe,a[14]=S*k+g*ne+m*j+x*se,a[3]=T*I+y*b+w*z+P*Q,a[7]=T*L+y*O+w*$+P*le,a[11]=T*G+y*K+w*V+P*oe,a[15]=T*k+y*ne+w*j+P*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],l=e[1],c=e[5],u=e[9],h=e[13],d=e[2],_=e[6],p=e[10],v=e[14],S=e[3],g=e[7],m=e[11],x=e[15];return S*(+a*u*_-r*h*_-a*c*p+n*h*p+r*c*v-n*u*v)+g*(+t*u*v-t*h*p+a*l*p-r*l*v+r*h*d-a*u*d)+m*(+t*h*_-t*c*v-a*l*_+n*l*v+a*c*d-n*h*d)+x*(-r*c*d-t*u*_+t*c*p+r*l*_-n*l*p+n*u*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],u=e[6],h=e[7],d=e[8],_=e[9],p=e[10],v=e[11],S=e[12],g=e[13],m=e[14],x=e[15],T=_*m*h-g*p*h+g*u*v-c*m*v-_*u*x+c*p*x,y=S*p*h-d*m*h-S*u*v+l*m*v+d*u*x-l*p*x,w=d*g*h-S*_*h+S*c*v-l*g*v-d*c*x+l*_*x,P=S*_*u-d*g*u-S*c*p+l*g*p+d*c*m-l*_*m,I=t*T+n*y+r*w+a*P;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/I;return e[0]=T*L,e[1]=(g*p*a-_*m*a-g*r*v+n*m*v+_*r*x-n*p*x)*L,e[2]=(c*m*a-g*u*a+g*r*h-n*m*h-c*r*x+n*u*x)*L,e[3]=(_*u*a-c*p*a-_*r*h+n*p*h+c*r*v-n*u*v)*L,e[4]=y*L,e[5]=(d*m*a-S*p*a+S*r*v-t*m*v-d*r*x+t*p*x)*L,e[6]=(S*u*a-l*m*a-S*r*h+t*m*h+l*r*x-t*u*x)*L,e[7]=(l*p*a-d*u*a+d*r*h-t*p*h-l*r*v+t*u*v)*L,e[8]=w*L,e[9]=(S*_*a-d*g*a-S*n*v+t*g*v+d*n*x-t*_*x)*L,e[10]=(l*g*a-S*c*a+S*n*h-t*g*h-l*n*x+t*c*x)*L,e[11]=(d*c*a-l*_*a-d*n*h+t*_*h+l*n*v-t*c*v)*L,e[12]=P*L,e[13]=(d*g*r-S*_*r+S*n*p-t*g*p-d*n*m+t*_*m)*L,e[14]=(S*c*r-l*g*r-S*n*u+t*g*u+l*n*m-t*c*m)*L,e[15]=(l*_*r-d*c*r+d*n*u-t*_*u-l*n*p+t*c*p)*L,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,l=e.x,c=e.y,u=e.z,h=a*l,d=a*c;return this.set(h*l+n,h*c-r*u,h*u+r*c,0,h*c+r*u,d*c+n,d*u-r*l,0,h*u-r*c,d*u+r*l,a*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,l){return this.set(1,n,a,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,l=t._y,c=t._z,u=t._w,h=a+a,d=l+l,_=c+c,p=a*h,v=a*d,S=a*_,g=l*d,m=l*_,x=c*_,T=u*h,y=u*d,w=u*_,P=n.x,I=n.y,L=n.z;return r[0]=(1-(g+x))*P,r[1]=(v+w)*P,r[2]=(S-y)*P,r[3]=0,r[4]=(v-w)*I,r[5]=(1-(p+x))*I,r[6]=(m+T)*I,r[7]=0,r[8]=(S+y)*L,r[9]=(m-T)*L,r[10]=(1-(p+g))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=ca.set(r[0],r[1],r[2]).length();const l=ca.set(r[4],r[5],r[6]).length(),c=ca.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Ui.copy(this);const h=1/a,d=1/l,_=1/c;return Ui.elements[0]*=h,Ui.elements[1]*=h,Ui.elements[2]*=h,Ui.elements[4]*=d,Ui.elements[5]*=d,Ui.elements[6]*=d,Ui.elements[8]*=_,Ui.elements[9]*=_,Ui.elements[10]*=_,t.setFromRotationMatrix(Ui),n.x=a,n.y=l,n.z=c,this}makePerspective(e,t,n,r,a,l,c=vr){const u=this.elements,h=2*a/(t-e),d=2*a/(n-r),_=(t+e)/(t-e),p=(n+r)/(n-r);let v,S;if(c===vr)v=-(l+a)/(l-a),S=-2*l*a/(l-a);else if(c===wc)v=-l/(l-a),S=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=h,u[4]=0,u[8]=_,u[12]=0,u[1]=0,u[5]=d,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=S,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,a,l,c=vr){const u=this.elements,h=1/(t-e),d=1/(n-r),_=1/(l-a),p=(t+e)*h,v=(n+r)*d;let S,g;if(c===vr)S=(l+a)*_,g=-2*_;else if(c===wc)S=a*_,g=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=2*h,u[4]=0,u[8]=0,u[12]=-p,u[1]=0,u[5]=2*d,u[9]=0,u[13]=-v,u[2]=0,u[6]=0,u[10]=g,u[14]=-S,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ca=new ie,Ui=new gn,OC=new ie(0,0,0),NC=new ie(1,1,1),Fr=new ie,Xl=new ie,ni=new ie,O_=new gn,N_=new Vo;class Gc{constructor(e=0,t=0,n=0,r=Gc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],l=r[4],c=r[8],u=r[1],h=r[5],d=r[9],_=r[2],p=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(kn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,v),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-kn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,v),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(kn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-_,v),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(u,a));break;case"ZYX":this._y=Math.asin(-kn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(p,v),this._z=Math.atan2(u,a)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(kn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(c,v));break;case"XZY":this._z=Math.asin(-kn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-d,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return O_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(O_,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return N_.setFromEuler(this),this.setFromQuaternion(N_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gc.DEFAULT_ORDER="XYZ";class Xv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let FC=0;const F_=new ie,ua=new Vo,ur=new gn,$l=new ie,So=new ie,BC=new ie,zC=new Vo,B_=new ie(1,0,0),z_=new ie(0,1,0),G_=new ie(0,0,1),GC={type:"added"},HC={type:"removed"};class oi extends Ha{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FC++}),this.uuid=ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=oi.DEFAULT_UP.clone();const e=new ie,t=new Gc,n=new Vo,r=new ie(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gn},normalMatrix:{value:new dt}}),this.matrix=new gn,this.matrixWorld=new gn,this.matrixAutoUpdate=oi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ua.setFromAxisAngle(e,t),this.quaternion.multiply(ua),this}rotateOnWorldAxis(e,t){return ua.setFromAxisAngle(e,t),this.quaternion.premultiply(ua),this}rotateX(e){return this.rotateOnAxis(B_,e)}rotateY(e){return this.rotateOnAxis(z_,e)}rotateZ(e){return this.rotateOnAxis(G_,e)}translateOnAxis(e,t){return F_.copy(e).applyQuaternion(this.quaternion),this.position.add(F_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(B_,e)}translateY(e){return this.translateOnAxis(z_,e)}translateZ(e){return this.translateOnAxis(G_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ur.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$l.copy(e):$l.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),So.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ur.lookAt(So,$l,this.up):ur.lookAt($l,So,this.up),this.quaternion.setFromRotationMatrix(ur),r&&(ur.extractRotation(r.matrixWorld),ua.setFromRotationMatrix(ur),this.quaternion.premultiply(ua.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(GC)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(HC)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ur.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ur.multiply(e.parent.matrixWorld)),e.applyMatrix4(ur),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,e,BC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,zC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,l=r.length;a<l;a++){const c=r[a];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const u=c.shapes;if(Array.isArray(u))for(let h=0,d=u.length;h<d;h++){const _=u[h];a(e.shapes,_)}else a(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let u=0,h=this.material.length;u<h;u++)c.push(a(e.materials,this.material[u]));r.material=c}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const u=this.animations[c];r.animations.push(a(e.animations,u))}}if(t){const c=l(e.geometries),u=l(e.materials),h=l(e.textures),d=l(e.images),_=l(e.shapes),p=l(e.skeletons),v=l(e.animations),S=l(e.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),_.length>0&&(n.shapes=_),p.length>0&&(n.skeletons=p),v.length>0&&(n.animations=v),S.length>0&&(n.nodes=S)}return n.object=r,n;function l(c){const u=[];for(const h in c){const d=c[h];delete d.metadata,u.push(d)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}oi.DEFAULT_UP=new ie(0,1,0);oi.DEFAULT_MATRIX_AUTO_UPDATE=!0;oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Oi=new ie,fr=new ie,Af=new ie,hr=new ie,fa=new ie,ha=new ie,H_=new ie,Rf=new ie,Cf=new ie,Lf=new ie;class Wi{constructor(e=new ie,t=new ie,n=new ie){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Oi.subVectors(e,t),r.cross(Oi);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Oi.subVectors(r,t),fr.subVectors(n,t),Af.subVectors(e,t);const l=Oi.dot(Oi),c=Oi.dot(fr),u=Oi.dot(Af),h=fr.dot(fr),d=fr.dot(Af),_=l*h-c*c;if(_===0)return a.set(0,0,0),null;const p=1/_,v=(h*u-c*d)*p,S=(l*d-c*u)*p;return a.set(1-v-S,S,v)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,hr)===null?!1:hr.x>=0&&hr.y>=0&&hr.x+hr.y<=1}static getInterpolation(e,t,n,r,a,l,c,u){return this.getBarycoord(e,t,n,r,hr)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(a,hr.x),u.addScaledVector(l,hr.y),u.addScaledVector(c,hr.z),u)}static isFrontFacing(e,t,n,r){return Oi.subVectors(n,t),fr.subVectors(e,t),Oi.cross(fr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),fr.subVectors(this.a,this.b),Oi.cross(fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return Wi.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return Wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let l,c;fa.subVectors(r,n),ha.subVectors(a,n),Rf.subVectors(e,n);const u=fa.dot(Rf),h=ha.dot(Rf);if(u<=0&&h<=0)return t.copy(n);Cf.subVectors(e,r);const d=fa.dot(Cf),_=ha.dot(Cf);if(d>=0&&_<=d)return t.copy(r);const p=u*_-d*h;if(p<=0&&u>=0&&d<=0)return l=u/(u-d),t.copy(n).addScaledVector(fa,l);Lf.subVectors(e,a);const v=fa.dot(Lf),S=ha.dot(Lf);if(S>=0&&v<=S)return t.copy(a);const g=v*h-u*S;if(g<=0&&h>=0&&S<=0)return c=h/(h-S),t.copy(n).addScaledVector(ha,c);const m=d*S-v*_;if(m<=0&&_-d>=0&&v-S>=0)return H_.subVectors(a,r),c=(_-d)/(_-d+(v-S)),t.copy(r).addScaledVector(H_,c);const x=1/(m+g+p);return l=g*x,c=p*x,t.copy(n).addScaledVector(fa,l).addScaledVector(ha,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $v={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Br={h:0,s:0,l:0},ql={h:0,s:0,l:0};function Pf(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Rt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=At.workingColorSpace){return this.r=e,this.g=t,this.b=n,At.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=At.workingColorSpace){if(e=wC(e,1),t=kn(t,0,1),n=kn(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=Pf(l,a,e+1/3),this.g=Pf(l,a,e),this.b=Pf(l,a,e-1/3)}return At.toWorkingColorSpace(this,r),this}setStyle(e,t=mn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=r[1],c=r[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mn){const n=$v[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Aa(e.r),this.g=Aa(e.g),this.b=Aa(e.b),this}copyLinearToSRGB(e){return this.r=xf(e.r),this.g=xf(e.g),this.b=xf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return At.fromWorkingColorSpace(yn.copy(this),e),Math.round(kn(yn.r*255,0,255))*65536+Math.round(kn(yn.g*255,0,255))*256+Math.round(kn(yn.b*255,0,255))}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.fromWorkingColorSpace(yn.copy(this),t);const n=yn.r,r=yn.g,a=yn.b,l=Math.max(n,r,a),c=Math.min(n,r,a);let u,h;const d=(c+l)/2;if(c===l)u=0,h=0;else{const _=l-c;switch(h=d<=.5?_/(l+c):_/(2-l-c),l){case n:u=(r-a)/_+(r<a?6:0);break;case r:u=(a-n)/_+2;break;case a:u=(n-r)/_+4;break}u/=6}return e.h=u,e.s=h,e.l=d,e}getRGB(e,t=At.workingColorSpace){return At.fromWorkingColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=mn){At.fromWorkingColorSpace(yn.copy(this),e);const t=yn.r,n=yn.g,r=yn.b;return e!==mn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Br),this.setHSL(Br.h+e,Br.s+t,Br.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Br),e.getHSL(ql);const n=gf(Br.h,ql.h,t),r=gf(Br.s,ql.s,t),a=gf(Br.l,ql.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new Rt;Rt.NAMES=$v;let kC=0;class Hc extends Ha{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kC++}),this.uuid=ko(),this.name="",this.type="Material",this.blending=Ta,this.side=Zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dh,this.blendDst=ph,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=yc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=A_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ra,this.stencilZFail=ra,this.stencilZPass=ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ta&&(n.blending=this.blending),this.side!==Zr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dh&&(n.blendSrc=this.blendSrc),this.blendDst!==ph&&(n.blendDst=this.blendDst),this.blendEquation!==Ss&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==A_&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ra&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ra&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ra&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}if(t){const a=r(e.textures),l=r(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qv extends Hc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Lv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new ie,Yl=new yt;class Yi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=R_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return wa("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Yl.fromBufferAttribute(this,t),Yl.applyMatrix3(e),this.setXY(t,Yl.x,Yl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=go(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=go(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=go(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=go(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=go(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),n=Gn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),n=Gn(n,this.array),r=Gn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),n=Gn(n,this.array),r=Gn(r,this.array),a=Gn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==R_&&(e.usage=this.usage),e}}class Yv extends Yi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Kv extends Yi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class As extends Yi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let VC=0;const Si=new gn,Df=new oi,da=new ie,ii=new Wo,Mo=new Wo,un=new ie;class Ns extends Ha{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VC++}),this.uuid=ko(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hv(e)?Kv:Yv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new dt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,t,n){return Si.makeTranslation(e,t,n),this.applyMatrix4(Si),this}scale(e,t,n){return Si.makeScale(e,t,n),this.applyMatrix4(Si),this}lookAt(e){return Df.lookAt(e),Df.updateMatrix(),this.applyMatrix4(Df.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(da).negate(),this.translate(da.x,da.y,da.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new As(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];ii.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ie,1/0);return}if(e){const n=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const c=t[a];Mo.setFromBufferAttribute(c),this.morphTargetsRelative?(un.addVectors(ii.min,Mo.min),ii.expandByPoint(un),un.addVectors(ii.max,Mo.max),ii.expandByPoint(un)):(ii.expandByPoint(Mo.min),ii.expandByPoint(Mo.max))}ii.getCenter(n);let r=0;for(let a=0,l=e.count;a<l;a++)un.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(un));if(t)for(let a=0,l=t.length;a<l;a++){const c=t[a],u=this.morphTargetsRelative;for(let h=0,d=c.count;h<d;h++)un.fromBufferAttribute(c,h),u&&(da.fromBufferAttribute(e,h),un.add(da)),r=Math.max(r,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,a=t.normal.array,l=t.uv.array,c=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yi(new Float32Array(4*c),4));const u=this.getAttribute("tangent").array,h=[],d=[];for(let b=0;b<c;b++)h[b]=new ie,d[b]=new ie;const _=new ie,p=new ie,v=new ie,S=new yt,g=new yt,m=new yt,x=new ie,T=new ie;function y(b,O,K){_.fromArray(r,b*3),p.fromArray(r,O*3),v.fromArray(r,K*3),S.fromArray(l,b*2),g.fromArray(l,O*2),m.fromArray(l,K*2),p.sub(_),v.sub(_),g.sub(S),m.sub(S);const ne=1/(g.x*m.y-m.x*g.y);isFinite(ne)&&(x.copy(p).multiplyScalar(m.y).addScaledVector(v,-g.y).multiplyScalar(ne),T.copy(v).multiplyScalar(g.x).addScaledVector(p,-m.x).multiplyScalar(ne),h[b].add(x),h[O].add(x),h[K].add(x),d[b].add(T),d[O].add(T),d[K].add(T))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let b=0,O=w.length;b<O;++b){const K=w[b],ne=K.start,z=K.count;for(let $=ne,V=ne+z;$<V;$+=3)y(n[$+0],n[$+1],n[$+2])}const P=new ie,I=new ie,L=new ie,G=new ie;function k(b){L.fromArray(a,b*3),G.copy(L);const O=h[b];P.copy(O),P.sub(L.multiplyScalar(L.dot(O))).normalize(),I.crossVectors(G,O);const ne=I.dot(d[b])<0?-1:1;u[b*4]=P.x,u[b*4+1]=P.y,u[b*4+2]=P.z,u[b*4+3]=ne}for(let b=0,O=w.length;b<O;++b){const K=w[b],ne=K.start,z=K.count;for(let $=ne,V=ne+z;$<V;$+=3)k(n[$+0]),k(n[$+1]),k(n[$+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,v=n.count;p<v;p++)n.setXYZ(p,0,0,0);const r=new ie,a=new ie,l=new ie,c=new ie,u=new ie,h=new ie,d=new ie,_=new ie;if(e)for(let p=0,v=e.count;p<v;p+=3){const S=e.getX(p+0),g=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,g),l.fromBufferAttribute(t,m),d.subVectors(l,a),_.subVectors(r,a),d.cross(_),c.fromBufferAttribute(n,S),u.fromBufferAttribute(n,g),h.fromBufferAttribute(n,m),c.add(d),u.add(d),h.add(d),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(g,u.x,u.y,u.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let p=0,v=t.count;p<v;p+=3)r.fromBufferAttribute(t,p+0),a.fromBufferAttribute(t,p+1),l.fromBufferAttribute(t,p+2),d.subVectors(l,a),_.subVectors(r,a),d.cross(_),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(c,u){const h=c.array,d=c.itemSize,_=c.normalized,p=new h.constructor(u.length*d);let v=0,S=0;for(let g=0,m=u.length;g<m;g++){c.isInterleavedBufferAttribute?v=u[g]*c.data.stride+c.offset:v=u[g]*d;for(let x=0;x<d;x++)p[S++]=h[v++]}return new Yi(p,d,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ns,n=this.index.array,r=this.attributes;for(const c in r){const u=r[c],h=e(u,n);t.setAttribute(c,h)}const a=this.morphAttributes;for(const c in a){const u=[],h=a[c];for(let d=0,_=h.length;d<_;d++){const p=h[d],v=e(p,n);u.push(v)}t.morphAttributes[c]=u}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,u=l.length;c<u;c++){const h=l[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const h=n[u];e.data.attributes[u]=h.toJSON(e.data)}const r={};let a=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],d=[];for(let _=0,p=h.length;_<p;_++){const v=h[_];d.push(v.toJSON(e.data))}d.length>0&&(r[u]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const h in r){const d=r[h];this.setAttribute(h,d.clone(t))}const a=e.morphAttributes;for(const h in a){const d=[],_=a[h];for(let p=0,v=_.length;p<v;p++)d.push(_[p].clone(t));this.morphAttributes[h]=d}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let h=0,d=l.length;h<d;h++){const _=l[h];this.addGroup(_.start,_.count,_.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const k_=new gn,fs=new UC,Kl=new jh,V_=new ie,pa=new ie,ma=new ie,_a=new ie,If=new ie,Zl=new ie,jl=new yt,Jl=new yt,Ql=new yt,W_=new ie,X_=new ie,$_=new ie,ec=new ie,tc=new ie;class $i extends oi{constructor(e=new Ns,t=new qv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(a&&c){Zl.set(0,0,0);for(let u=0,h=a.length;u<h;u++){const d=c[u],_=a[u];d!==0&&(If.fromBufferAttribute(_,e),l?Zl.addScaledVector(If,d):Zl.addScaledVector(If.sub(t),d))}t.add(Zl)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kl.copy(n.boundingSphere),Kl.applyMatrix4(a),fs.copy(e.ray).recast(e.near),!(Kl.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Kl,V_)===null||fs.origin.distanceToSquared(V_)>(e.far-e.near)**2))&&(k_.copy(a).invert(),fs.copy(e.ray).applyMatrix4(k_),!(n.boundingBox!==null&&fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,n){let r;const a=this.geometry,l=this.material,c=a.index,u=a.attributes.position,h=a.attributes.uv,d=a.attributes.uv1,_=a.attributes.normal,p=a.groups,v=a.drawRange;if(c!==null)if(Array.isArray(l))for(let S=0,g=p.length;S<g;S++){const m=p[S],x=l[m.materialIndex],T=Math.max(m.start,v.start),y=Math.min(c.count,Math.min(m.start+m.count,v.start+v.count));for(let w=T,P=y;w<P;w+=3){const I=c.getX(w),L=c.getX(w+1),G=c.getX(w+2);r=nc(this,x,e,n,h,d,_,I,L,G),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const S=Math.max(0,v.start),g=Math.min(c.count,v.start+v.count);for(let m=S,x=g;m<x;m+=3){const T=c.getX(m),y=c.getX(m+1),w=c.getX(m+2);r=nc(this,l,e,n,h,d,_,T,y,w),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(u!==void 0)if(Array.isArray(l))for(let S=0,g=p.length;S<g;S++){const m=p[S],x=l[m.materialIndex],T=Math.max(m.start,v.start),y=Math.min(u.count,Math.min(m.start+m.count,v.start+v.count));for(let w=T,P=y;w<P;w+=3){const I=w,L=w+1,G=w+2;r=nc(this,x,e,n,h,d,_,I,L,G),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const S=Math.max(0,v.start),g=Math.min(u.count,v.start+v.count);for(let m=S,x=g;m<x;m+=3){const T=m,y=m+1,w=m+2;r=nc(this,l,e,n,h,d,_,T,y,w),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function WC(i,e,t,n,r,a,l,c){let u;if(e.side===Wn?u=n.intersectTriangle(l,a,r,!0,c):u=n.intersectTriangle(r,a,l,e.side===Zr,c),u===null)return null;tc.copy(c),tc.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(tc);return h<t.near||h>t.far?null:{distance:h,point:tc.clone(),object:i}}function nc(i,e,t,n,r,a,l,c,u,h){i.getVertexPosition(c,pa),i.getVertexPosition(u,ma),i.getVertexPosition(h,_a);const d=WC(i,e,t,n,pa,ma,_a,ec);if(d){r&&(jl.fromBufferAttribute(r,c),Jl.fromBufferAttribute(r,u),Ql.fromBufferAttribute(r,h),d.uv=Wi.getInterpolation(ec,pa,ma,_a,jl,Jl,Ql,new yt)),a&&(jl.fromBufferAttribute(a,c),Jl.fromBufferAttribute(a,u),Ql.fromBufferAttribute(a,h),d.uv1=Wi.getInterpolation(ec,pa,ma,_a,jl,Jl,Ql,new yt),d.uv2=d.uv1),l&&(W_.fromBufferAttribute(l,c),X_.fromBufferAttribute(l,u),$_.fromBufferAttribute(l,h),d.normal=Wi.getInterpolation(ec,pa,ma,_a,W_,X_,$_,new ie),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const _={a:c,b:u,c:h,normal:new ie,materialIndex:0};Wi.getNormal(pa,ma,_a,_.normal),d.face=_}return d}class Xo extends Ns{constructor(e=1,t=1,n=1,r=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:l};const c=this;r=Math.floor(r),a=Math.floor(a),l=Math.floor(l);const u=[],h=[],d=[],_=[];let p=0,v=0;S("z","y","x",-1,-1,n,t,e,l,a,0),S("z","y","x",1,-1,n,t,-e,l,a,1),S("x","z","y",1,1,e,n,t,r,l,2),S("x","z","y",1,-1,e,n,-t,r,l,3),S("x","y","z",1,-1,e,t,n,r,a,4),S("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(u),this.setAttribute("position",new As(h,3)),this.setAttribute("normal",new As(d,3)),this.setAttribute("uv",new As(_,2));function S(g,m,x,T,y,w,P,I,L,G,k){const b=w/L,O=P/G,K=w/2,ne=P/2,z=I/2,$=L+1,V=G+1;let j=0,Q=0;const le=new ie;for(let oe=0;oe<V;oe++){const se=oe*O-ne;for(let he=0;he<$;he++){const Ie=he*b-K;le[g]=Ie*T,le[m]=se*y,le[x]=z,h.push(le.x,le.y,le.z),le[g]=0,le[m]=0,le[x]=I>0?1:-1,d.push(le.x,le.y,le.z),_.push(he/L),_.push(1-oe/G),j+=1}}for(let oe=0;oe<G;oe++)for(let se=0;se<L;se++){const he=p+se+$*oe,Ie=p+se+$*(oe+1),Z=p+(se+1)+$*(oe+1),ce=p+(se+1)+$*oe;u.push(he,Ie,ce),u.push(Ie,Z,ce),Q+=6}c.addGroup(v,Q,k),v+=Q,p+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Oa(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Cn(i){const e={};for(let t=0;t<i.length;t++){const n=Oa(i[t]);for(const r in n)e[r]=n[r]}return e}function XC(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Zv(i){return i.getRenderTarget()===null?i.outputColorSpace:At.workingColorSpace}const $C={clone:Oa,merge:Cn};var qC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sr extends Hc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qC,this.fragmentShader=YC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oa(e.uniforms),this.uniformsGroups=XC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class jv extends oi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gn,this.projectionMatrix=new gn,this.projectionMatrixInverse=new gn,this.coordinateSystem=vr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zr=new ie,q_=new yt,Y_=new yt;class yi extends jv{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_f*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sh*2*Math.atan(Math.tan(_f*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zr.x,zr.y).multiplyScalar(-e/zr.z),zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zr.x,zr.y).multiplyScalar(-e/zr.z)}getViewSize(e,t){return this.getViewBounds(e,q_,Y_),t.subVectors(Y_,q_)}setViewOffset(e,t,n,r,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_f*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const u=l.fullWidth,h=l.fullHeight;a+=l.offsetX*r/u,t-=l.offsetY*n/h,r*=l.width/u,n*=l.height/h}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ga=-90,va=1;class KC extends oi{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yi(ga,va,e,t);r.layers=this.layers,this.add(r);const a=new yi(ga,va,e,t);a.layers=this.layers,this.add(a);const l=new yi(ga,va,e,t);l.layers=this.layers,this.add(l);const c=new yi(ga,va,e,t);c.layers=this.layers,this.add(c);const u=new yi(ga,va,e,t);u.layers=this.layers,this.add(u);const h=new yi(ga,va,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,l,c,u]=t;for(const h of t)this.remove(h);if(e===vr)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===wc)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,l,c,u,h,d]=this.children,_=e.getRenderTarget(),p=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,l),e.setRenderTarget(n,2,r),e.render(t,c),e.setRenderTarget(n,3,r),e.render(t,u),e.setRenderTarget(n,4,r),e.render(t,h),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(_,p,v),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class Jv extends Dn{constructor(e,t,n,r,a,l,c,u,h,d){e=e!==void 0?e:[],t=t!==void 0?t:Da,super(e,t,n,r,a,l,c,u,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ZC extends Ds{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(wa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ws?mn:bi),this.texture=new Jv(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xo(5,5,5),a=new Sr({name:"CubemapFromEquirect",uniforms:Oa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wn,blending:Xr});a.uniforms.tEquirect.value=t;const l=new $i(r,a),c=t.minFilter;return t.minFilter===ys&&(t.minFilter=Hn),new KC(1,10,this).update(e,l),t.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,r);e.setRenderTarget(a)}}const Uf=new ie,jC=new ie,JC=new dt;class ms{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Uf.subVectors(n,t).cross(jC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Uf),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||JC.getNormalMatrix(e),r=this.coplanarPoint(Uf).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new jh,ic=new ie;class Qv{constructor(e=new ms,t=new ms,n=new ms,r=new ms,a=new ms,l=new ms){this.planes=[e,t,n,r,a,l]}set(e,t,n,r,a,l){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(r),c[4].copy(a),c[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vr){const n=this.planes,r=e.elements,a=r[0],l=r[1],c=r[2],u=r[3],h=r[4],d=r[5],_=r[6],p=r[7],v=r[8],S=r[9],g=r[10],m=r[11],x=r[12],T=r[13],y=r[14],w=r[15];if(n[0].setComponents(u-a,p-h,m-v,w-x).normalize(),n[1].setComponents(u+a,p+h,m+v,w+x).normalize(),n[2].setComponents(u+l,p+d,m+S,w+T).normalize(),n[3].setComponents(u-l,p-d,m-S,w-T).normalize(),n[4].setComponents(u-c,p-_,m-g,w-y).normalize(),t===vr)n[5].setComponents(u+c,p+_,m+g,w+y).normalize();else if(t===wc)n[5].setComponents(c,_,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){return hs.center.set(0,0,0),hs.radius=.7071067811865476,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ic.x=r.normal.x>0?e.max.x:e.min.x,ic.y=r.normal.y>0?e.max.y:e.min.y,ic.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ic)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function e0(){let i=null,e=!1,t=null,n=null;function r(a,l){t(a,l),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function QC(i,e){const t=e.isWebGL2,n=new WeakMap;function r(h,d){const _=h.array,p=h.usage,v=_.byteLength,S=i.createBuffer();i.bindBuffer(d,S),i.bufferData(d,_,p),h.onUploadCallback();let g;if(_ instanceof Float32Array)g=i.FLOAT;else if(_ instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(_ instanceof Int16Array)g=i.SHORT;else if(_ instanceof Uint32Array)g=i.UNSIGNED_INT;else if(_ instanceof Int32Array)g=i.INT;else if(_ instanceof Int8Array)g=i.BYTE;else if(_ instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:S,type:g,bytesPerElement:_.BYTES_PER_ELEMENT,version:h.version,size:v}}function a(h,d,_){const p=d.array,v=d._updateRange,S=d.updateRanges;if(i.bindBuffer(_,h),v.count===-1&&S.length===0&&i.bufferSubData(_,0,p),S.length!==0){for(let g=0,m=S.length;g<m;g++){const x=S[g];t?i.bufferSubData(_,x.start*p.BYTES_PER_ELEMENT,p,x.start,x.count):i.bufferSubData(_,x.start*p.BYTES_PER_ELEMENT,p.subarray(x.start,x.start+x.count))}d.clearUpdateRanges()}v.count!==-1&&(t?i.bufferSubData(_,v.offset*p.BYTES_PER_ELEMENT,p,v.offset,v.count):i.bufferSubData(_,v.offset*p.BYTES_PER_ELEMENT,p.subarray(v.offset,v.offset+v.count)),v.count=-1),d.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=n.get(h);d&&(i.deleteBuffer(d.buffer),n.delete(h))}function u(h,d){if(h.isGLBufferAttribute){const p=n.get(h);(!p||p.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const _=n.get(h);if(_===void 0)n.set(h,r(h,d));else if(_.version<h.version){if(_.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(_.buffer,h,d),_.version=h.version}}return{get:l,remove:c,update:u}}class $o extends Ns{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,l=t/2,c=Math.floor(n),u=Math.floor(r),h=c+1,d=u+1,_=e/c,p=t/u,v=[],S=[],g=[],m=[];for(let x=0;x<d;x++){const T=x*p-l;for(let y=0;y<h;y++){const w=y*_-a;S.push(w,-T,0),g.push(0,0,1),m.push(y/c),m.push(1-x/u)}}for(let x=0;x<u;x++)for(let T=0;T<c;T++){const y=T+h*x,w=T+h*(x+1),P=T+1+h*(x+1),I=T+1+h*x;v.push(y,w,I),v.push(w,P,I)}this.setIndex(v),this.setAttribute("position",new As(S,3)),this.setAttribute("normal",new As(g,3)),this.setAttribute("uv",new As(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.width,e.height,e.widthSegments,e.heightSegments)}}var eL=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tL=`#ifdef USE_ALPHAHASH
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
#endif`,nL=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iL=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rL=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sL=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aL=`#ifdef USE_AOMAP
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
#endif`,oL=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lL=`#ifdef USE_BATCHING
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
#endif`,cL=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,uL=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fL=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hL=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dL=`#ifdef USE_IRIDESCENCE
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
#endif`,pL=`#ifdef USE_BUMPMAP
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
#endif`,mL=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_L=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vL=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xL=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,SL=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ML=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yL=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,EL=`#define PI 3.141592653589793
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
} // validated`,bL=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,TL=`vec3 transformedNormal = objectNormal;
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
#endif`,wL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RL=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CL=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,LL="gl_FragColor = linearToOutputTexel( gl_FragColor );",PL=`
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
}`,DL=`#ifdef USE_ENVMAP
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
#endif`,IL=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,UL=`#ifdef USE_ENVMAP
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
#endif`,OL=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NL=`#ifdef USE_ENVMAP
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
#endif`,FL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GL=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HL=`#ifdef USE_GRADIENTMAP
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
}`,kL=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,VL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,WL=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$L=`uniform bool receiveShadow;
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
#endif`,qL=`#ifdef USE_ENVMAP
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
#endif`,YL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,KL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZL=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JL=`PhysicalMaterial material;
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
#endif`,QL=`struct PhysicalMaterial {
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
}`,eP=`
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
#endif`,tP=`#if defined( RE_IndirectDiffuse )
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
#endif`,nP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iP=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rP=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sP=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,aP=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,oP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uP=`#if defined( USE_POINTS_UV )
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
#endif`,fP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dP=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pP=`#ifdef USE_MORPHNORMALS
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
#endif`,mP=`#ifdef USE_MORPHTARGETS
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
#endif`,_P=`#ifdef USE_MORPHTARGETS
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
#endif`,gP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vP=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yP=`#ifdef USE_NORMALMAP
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
#endif`,EP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RP=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,CP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,BP=`float getShadowMask() {
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
}`,zP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GP=`#ifdef USE_SKINNING
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
#endif`,HP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kP=`#ifdef USE_SKINNING
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
#endif`,VP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$P=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qP=`#ifdef USE_TRANSMISSION
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
#endif`,YP=`#ifdef USE_TRANSMISSION
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
#endif`,KP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e2=`uniform sampler2D t2D;
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
}`,t2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,i2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s2=`#include <common>
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
}`,a2=`#if DEPTH_PACKING == 3200
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
}`,o2=`#define DISTANCE
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
}`,l2=`#define DISTANCE
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
}`,c2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f2=`uniform float scale;
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
}`,h2=`uniform vec3 diffuse;
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
}`,d2=`#include <common>
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
}`,p2=`uniform vec3 diffuse;
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
}`,m2=`#define LAMBERT
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
}`,_2=`#define LAMBERT
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
}`,g2=`#define MATCAP
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
}`,v2=`#define MATCAP
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
}`,x2=`#define NORMAL
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
}`,S2=`#define NORMAL
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
}`,M2=`#define PHONG
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
}`,y2=`#define PHONG
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
}`,E2=`#define STANDARD
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
}`,b2=`#define STANDARD
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
}`,T2=`#define TOON
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
}`,w2=`#define TOON
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
}`,A2=`uniform float size;
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
}`,R2=`uniform vec3 diffuse;
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
}`,C2=`#include <common>
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
}`,L2=`uniform vec3 color;
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
}`,P2=`uniform float rotation;
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
}`,D2=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:eL,alphahash_pars_fragment:tL,alphamap_fragment:nL,alphamap_pars_fragment:iL,alphatest_fragment:rL,alphatest_pars_fragment:sL,aomap_fragment:aL,aomap_pars_fragment:oL,batching_pars_vertex:lL,batching_vertex:cL,begin_vertex:uL,beginnormal_vertex:fL,bsdfs:hL,iridescence_fragment:dL,bumpmap_pars_fragment:pL,clipping_planes_fragment:mL,clipping_planes_pars_fragment:_L,clipping_planes_pars_vertex:gL,clipping_planes_vertex:vL,color_fragment:xL,color_pars_fragment:SL,color_pars_vertex:ML,color_vertex:yL,common:EL,cube_uv_reflection_fragment:bL,defaultnormal_vertex:TL,displacementmap_pars_vertex:wL,displacementmap_vertex:AL,emissivemap_fragment:RL,emissivemap_pars_fragment:CL,colorspace_fragment:LL,colorspace_pars_fragment:PL,envmap_fragment:DL,envmap_common_pars_fragment:IL,envmap_pars_fragment:UL,envmap_pars_vertex:OL,envmap_physical_pars_fragment:qL,envmap_vertex:NL,fog_vertex:FL,fog_pars_vertex:BL,fog_fragment:zL,fog_pars_fragment:GL,gradientmap_pars_fragment:HL,lightmap_fragment:kL,lightmap_pars_fragment:VL,lights_lambert_fragment:WL,lights_lambert_pars_fragment:XL,lights_pars_begin:$L,lights_toon_fragment:YL,lights_toon_pars_fragment:KL,lights_phong_fragment:ZL,lights_phong_pars_fragment:jL,lights_physical_fragment:JL,lights_physical_pars_fragment:QL,lights_fragment_begin:eP,lights_fragment_maps:tP,lights_fragment_end:nP,logdepthbuf_fragment:iP,logdepthbuf_pars_fragment:rP,logdepthbuf_pars_vertex:sP,logdepthbuf_vertex:aP,map_fragment:oP,map_pars_fragment:lP,map_particle_fragment:cP,map_particle_pars_fragment:uP,metalnessmap_fragment:fP,metalnessmap_pars_fragment:hP,morphcolor_vertex:dP,morphnormal_vertex:pP,morphtarget_pars_vertex:mP,morphtarget_vertex:_P,normal_fragment_begin:gP,normal_fragment_maps:vP,normal_pars_fragment:xP,normal_pars_vertex:SP,normal_vertex:MP,normalmap_pars_fragment:yP,clearcoat_normal_fragment_begin:EP,clearcoat_normal_fragment_maps:bP,clearcoat_pars_fragment:TP,iridescence_pars_fragment:wP,opaque_fragment:AP,packing:RP,premultiplied_alpha_fragment:CP,project_vertex:LP,dithering_fragment:PP,dithering_pars_fragment:DP,roughnessmap_fragment:IP,roughnessmap_pars_fragment:UP,shadowmap_pars_fragment:OP,shadowmap_pars_vertex:NP,shadowmap_vertex:FP,shadowmask_pars_fragment:BP,skinbase_vertex:zP,skinning_pars_vertex:GP,skinning_vertex:HP,skinnormal_vertex:kP,specularmap_fragment:VP,specularmap_pars_fragment:WP,tonemapping_fragment:XP,tonemapping_pars_fragment:$P,transmission_fragment:qP,transmission_pars_fragment:YP,uv_pars_fragment:KP,uv_pars_vertex:ZP,uv_vertex:jP,worldpos_vertex:JP,background_vert:QP,background_frag:e2,backgroundCube_vert:t2,backgroundCube_frag:n2,cube_vert:i2,cube_frag:r2,depth_vert:s2,depth_frag:a2,distanceRGBA_vert:o2,distanceRGBA_frag:l2,equirect_vert:c2,equirect_frag:u2,linedashed_vert:f2,linedashed_frag:h2,meshbasic_vert:d2,meshbasic_frag:p2,meshlambert_vert:m2,meshlambert_frag:_2,meshmatcap_vert:g2,meshmatcap_frag:v2,meshnormal_vert:x2,meshnormal_frag:S2,meshphong_vert:M2,meshphong_frag:y2,meshphysical_vert:E2,meshphysical_frag:b2,meshtoon_vert:T2,meshtoon_frag:w2,points_vert:A2,points_frag:R2,shadow_vert:C2,shadow_frag:L2,sprite_vert:P2,sprite_frag:D2},Te={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Vi={basic:{uniforms:Cn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Cn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Rt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Cn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Cn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Cn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Rt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Cn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Cn([Te.points,Te.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Cn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Cn([Te.common,Te.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Cn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Cn([Te.sprite,Te.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Cn([Te.common,Te.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Cn([Te.lights,Te.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Vi.physical={uniforms:Cn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const rc={r:0,b:0,g:0};function I2(i,e,t,n,r,a,l){const c=new Rt(0);let u=a===!0?0:1,h,d,_=null,p=0,v=null;function S(m,x){let T=!1,y=x.isScene===!0?x.background:null;y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y===null?g(c,u):y&&y.isColor&&(g(y,1),T=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,l):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(i.autoClear||T)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Bc)?(d===void 0&&(d=new $i(new Xo(1,1,1),new Sr({name:"BackgroundCubeMaterial",uniforms:Oa(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.toneMapped=At.getTransfer(y.colorSpace)!==Bt,(_!==y||p!==y.version||v!==i.toneMapping)&&(d.material.needsUpdate=!0,_=y,p=y.version,v=i.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new $i(new $o(2,2),new Sr({name:"BackgroundMaterial",uniforms:Oa(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:Zr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.toneMapped=At.getTransfer(y.colorSpace)!==Bt,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(_!==y||p!==y.version||v!==i.toneMapping)&&(h.material.needsUpdate=!0,_=y,p=y.version,v=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function g(m,x){m.getRGB(rc,Zv(i)),n.buffers.color.setClear(rc.r,rc.g,rc.b,x,l)}return{getClearColor:function(){return c},setClearColor:function(m,x=1){c.set(m),u=x,g(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(m){u=m,g(c,u)},render:S}}function U2(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),l=n.isWebGL2||a!==null,c={},u=m(null);let h=u,d=!1;function _(z,$,V,j,Q){let le=!1;if(l){const oe=g(j,V,$);h!==oe&&(h=oe,v(h.object)),le=x(z,j,V,Q),le&&T(z,j,V,Q)}else{const oe=$.wireframe===!0;(h.geometry!==j.id||h.program!==V.id||h.wireframe!==oe)&&(h.geometry=j.id,h.program=V.id,h.wireframe=oe,le=!0)}Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),(le||d)&&(d=!1,G(z,$,V,j),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function p(){return n.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function v(z){return n.isWebGL2?i.bindVertexArray(z):a.bindVertexArrayOES(z)}function S(z){return n.isWebGL2?i.deleteVertexArray(z):a.deleteVertexArrayOES(z)}function g(z,$,V){const j=V.wireframe===!0;let Q=c[z.id];Q===void 0&&(Q={},c[z.id]=Q);let le=Q[$.id];le===void 0&&(le={},Q[$.id]=le);let oe=le[j];return oe===void 0&&(oe=m(p()),le[j]=oe),oe}function m(z){const $=[],V=[],j=[];for(let Q=0;Q<r;Q++)$[Q]=0,V[Q]=0,j[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:V,attributeDivisors:j,object:z,attributes:{},index:null}}function x(z,$,V,j){const Q=h.attributes,le=$.attributes;let oe=0;const se=V.getAttributes();for(const he in se)if(se[he].location>=0){const Z=Q[he];let ce=le[he];if(ce===void 0&&(he==="instanceMatrix"&&z.instanceMatrix&&(ce=z.instanceMatrix),he==="instanceColor"&&z.instanceColor&&(ce=z.instanceColor)),Z===void 0||Z.attribute!==ce||ce&&Z.data!==ce.data)return!0;oe++}return h.attributesNum!==oe||h.index!==j}function T(z,$,V,j){const Q={},le=$.attributes;let oe=0;const se=V.getAttributes();for(const he in se)if(se[he].location>=0){let Z=le[he];Z===void 0&&(he==="instanceMatrix"&&z.instanceMatrix&&(Z=z.instanceMatrix),he==="instanceColor"&&z.instanceColor&&(Z=z.instanceColor));const ce={};ce.attribute=Z,Z&&Z.data&&(ce.data=Z.data),Q[he]=ce,oe++}h.attributes=Q,h.attributesNum=oe,h.index=j}function y(){const z=h.newAttributes;for(let $=0,V=z.length;$<V;$++)z[$]=0}function w(z){P(z,0)}function P(z,$){const V=h.newAttributes,j=h.enabledAttributes,Q=h.attributeDivisors;V[z]=1,j[z]===0&&(i.enableVertexAttribArray(z),j[z]=1),Q[z]!==$&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,$),Q[z]=$)}function I(){const z=h.newAttributes,$=h.enabledAttributes;for(let V=0,j=$.length;V<j;V++)$[V]!==z[V]&&(i.disableVertexAttribArray(V),$[V]=0)}function L(z,$,V,j,Q,le,oe){oe===!0?i.vertexAttribIPointer(z,$,V,Q,le):i.vertexAttribPointer(z,$,V,j,Q,le)}function G(z,$,V,j){if(n.isWebGL2===!1&&(z.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const Q=j.attributes,le=V.getAttributes(),oe=$.defaultAttributeValues;for(const se in le){const he=le[se];if(he.location>=0){let Ie=Q[se];if(Ie===void 0&&(se==="instanceMatrix"&&z.instanceMatrix&&(Ie=z.instanceMatrix),se==="instanceColor"&&z.instanceColor&&(Ie=z.instanceColor)),Ie!==void 0){const Z=Ie.normalized,ce=Ie.itemSize,Ae=t.get(Ie);if(Ae===void 0)continue;const ke=Ae.buffer,Be=Ae.type,Ce=Ae.bytesPerElement,qe=n.isWebGL2===!0&&(Be===i.INT||Be===i.UNSIGNED_INT||Ie.gpuType===Dv);if(Ie.isInterleavedBufferAttribute){const Je=Ie.data,X=Je.stride,Vt=Ie.offset;if(Je.isInstancedInterleavedBuffer){for(let Le=0;Le<he.locationSize;Le++)P(he.location+Le,Je.meshPerAttribute);z.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Je.meshPerAttribute*Je.count)}else for(let Le=0;Le<he.locationSize;Le++)w(he.location+Le);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let Le=0;Le<he.locationSize;Le++)L(he.location+Le,ce/he.locationSize,Be,Z,X*Ce,(Vt+ce/he.locationSize*Le)*Ce,qe)}else{if(Ie.isInstancedBufferAttribute){for(let Je=0;Je<he.locationSize;Je++)P(he.location+Je,Ie.meshPerAttribute);z.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let Je=0;Je<he.locationSize;Je++)w(he.location+Je);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let Je=0;Je<he.locationSize;Je++)L(he.location+Je,ce/he.locationSize,Be,Z,ce*Ce,ce/he.locationSize*Je*Ce,qe)}}else if(oe!==void 0){const Z=oe[se];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(he.location,Z);break;case 3:i.vertexAttrib3fv(he.location,Z);break;case 4:i.vertexAttrib4fv(he.location,Z);break;default:i.vertexAttrib1fv(he.location,Z)}}}}I()}function k(){K();for(const z in c){const $=c[z];for(const V in $){const j=$[V];for(const Q in j)S(j[Q].object),delete j[Q];delete $[V]}delete c[z]}}function b(z){if(c[z.id]===void 0)return;const $=c[z.id];for(const V in $){const j=$[V];for(const Q in j)S(j[Q].object),delete j[Q];delete $[V]}delete c[z.id]}function O(z){for(const $ in c){const V=c[$];if(V[z.id]===void 0)continue;const j=V[z.id];for(const Q in j)S(j[Q].object),delete j[Q];delete V[z.id]}}function K(){ne(),d=!0,h!==u&&(h=u,v(h.object))}function ne(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:_,reset:K,resetDefaultState:ne,dispose:k,releaseStatesOfGeometry:b,releaseStatesOfProgram:O,initAttributes:y,enableAttribute:w,disableUnusedAttributes:I}}function O2(i,e,t,n){const r=n.isWebGL2;let a;function l(d){a=d}function c(d,_){i.drawArrays(a,d,_),t.update(_,a,1)}function u(d,_,p){if(p===0)return;let v,S;if(r)v=i,S="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[S](a,d,_,p),t.update(_,a,p)}function h(d,_,p){if(p===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let S=0;S<p;S++)this.render(d[S],_[S]);else{v.multiDrawArraysWEBGL(a,d,0,_,0,p);let S=0;for(let g=0;g<p;g++)S+=_[g];t.update(S,a,1)}}this.setMode=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function N2(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const u=a(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=l||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,w=l||e.has("OES_texture_float"),P=y&&w,I=l?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:h,getMaxAnisotropy:r,getMaxPrecision:a,precision:c,logarithmicDepthBuffer:d,maxTextures:_,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:T,vertexTextures:y,floatFragmentTextures:w,floatVertexTextures:P,maxSamples:I}}function F2(i){const e=this;let t=null,n=0,r=!1,a=!1;const l=new ms,c=new dt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(_,p){const v=_.length!==0||p||n!==0||r;return r=p,n=_.length,v},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,p){t=d(_,p,0)},this.setState=function(_,p,v){const S=_.clippingPlanes,g=_.clipIntersection,m=_.clipShadows,x=i.get(_);if(!r||S===null||S.length===0||a&&!m)a?d(null):h();else{const T=a?0:n,y=T*4;let w=x.clippingState||null;u.value=w,w=d(S,p,y,v);for(let P=0;P!==y;++P)w[P]=t[P];x.clippingState=w,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(_,p,v,S){const g=_!==null?_.length:0;let m=null;if(g!==0){if(m=u.value,S!==!0||m===null){const x=v+g*4,T=p.matrixWorldInverse;c.getNormalMatrix(T),(m===null||m.length<x)&&(m=new Float32Array(x));for(let y=0,w=v;y!==g;++y,w+=4)l.copy(_[y]).applyMatrix4(T,c),l.normal.toArray(m,w),m[w+3]=l.constant}u.value=m,u.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function B2(i){let e=new WeakMap;function t(l,c){return c===mh?l.mapping=Da:c===_h&&(l.mapping=Ia),l}function n(l){if(l&&l.isTexture){const c=l.mapping;if(c===mh||c===_h)if(e.has(l)){const u=e.get(l).texture;return t(u,l.mapping)}else{const u=l.image;if(u&&u.height>0){const h=new ZC(u.height);return h.fromEquirectangularTexture(i,l),e.set(l,h),l.addEventListener("dispose",r),t(h.texture,l.mapping)}else return null}}return l}function r(l){const c=l.target;c.removeEventListener("dispose",r);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class z2 extends jv{constructor(e=-1,t=1,n=1,r=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,l=n+e,c=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,l=a+h*this.view.width,c-=d*this.view.offsetY,u=c-d*this.view.height}this.projectionMatrix.makeOrthographic(a,l,c,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ma=4,K_=[.125,.215,.35,.446,.526,.582],Ms=20,Of=new z2,Z_=new Rt;let Nf=null,Ff=0,Bf=0;const _s=(1+Math.sqrt(5))/2,xa=1/_s,j_=[new ie(1,1,1),new ie(-1,1,1),new ie(1,1,-1),new ie(-1,1,-1),new ie(0,_s,xa),new ie(0,_s,-xa),new ie(xa,0,_s),new ie(-xa,0,_s),new ie(_s,xa,0),new ie(-_s,xa,0)];class J_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Nf=this._renderer.getRenderTarget(),Ff=this._renderer.getActiveCubeFace(),Bf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nf,Ff,Bf),e.scissorTest=!1,sc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Da||e.mapping===Ia?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nf=this._renderer.getRenderTarget(),Ff=this._renderer.getActiveCubeFace(),Bf=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Po,format:Fi,colorSpace:xr,depthBuffer:!1},r=Q_(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Q_(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=G2(a)),this._blurMaterial=H2(a,e,t)}return r}_compileMaterial(e){const t=new $i(this._lodPlanes[0],e);this._renderer.compile(t,Of)}_sceneToCubeUV(e,t,n,r){const c=new yi(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,_=d.autoClear,p=d.toneMapping;d.getClearColor(Z_),d.toneMapping=$r,d.autoClear=!1;const v=new qv({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),S=new $i(new Xo,v);let g=!1;const m=e.background;m?m.isColor&&(v.color.copy(m),e.background=null,g=!0):(v.color.copy(Z_),g=!0);for(let x=0;x<6;x++){const T=x%3;T===0?(c.up.set(0,u[x],0),c.lookAt(h[x],0,0)):T===1?(c.up.set(0,0,u[x]),c.lookAt(0,h[x],0)):(c.up.set(0,u[x],0),c.lookAt(0,0,h[x]));const y=this._cubeSize;sc(r,T*y,x>2?y:0,y,y),d.setRenderTarget(r),g&&d.render(S,c),d.render(e,c)}S.geometry.dispose(),S.material.dispose(),d.toneMapping=p,d.autoClear=_,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Da||e.mapping===Ia;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eg());const a=r?this._cubemapMaterial:this._equirectMaterial,l=new $i(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const u=this._cubeSize;sc(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(l,Of)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=j_[(r-1)%j_.length];this._blur(e,r-1,r,a,l)}t.autoClear=n}_blur(e,t,n,r,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,r,"latitudinal",a),this._halfBlur(l,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,l,c){const u=this._renderer,h=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,_=new $i(this._lodPlanes[r],h),p=h.uniforms,v=this._sizeLods[n]-1,S=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*Ms-1),g=a/S,m=isFinite(a)?1+Math.floor(d*g):Ms;m>Ms&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ms}`);const x=[];let T=0;for(let L=0;L<Ms;++L){const G=L/g,k=Math.exp(-G*G/2);x.push(k),L===0?T+=k:L<m&&(T+=2*k)}for(let L=0;L<x.length;L++)x[L]=x[L]/T;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=x,p.latitudinal.value=l==="latitudinal",c&&(p.poleAxis.value=c);const{_lodMax:y}=this;p.dTheta.value=S,p.mipInt.value=y-n;const w=this._sizeLods[r],P=3*w*(r>y-Ma?r-y+Ma:0),I=4*(this._cubeSize-w);sc(t,P,I,3*w,2*w),u.setRenderTarget(t),u.render(_,Of)}}function G2(i){const e=[],t=[],n=[];let r=i;const a=i-Ma+1+K_.length;for(let l=0;l<a;l++){const c=Math.pow(2,r);t.push(c);let u=1/c;l>i-Ma?u=K_[l-i+Ma-1]:l===0&&(u=0),n.push(u);const h=1/(c-2),d=-h,_=1+h,p=[d,d,_,d,_,_,d,d,_,_,d,_],v=6,S=6,g=3,m=2,x=1,T=new Float32Array(g*S*v),y=new Float32Array(m*S*v),w=new Float32Array(x*S*v);for(let I=0;I<v;I++){const L=I%3*2/3-1,G=I>2?0:-1,k=[L,G,0,L+2/3,G,0,L+2/3,G+1,0,L,G,0,L+2/3,G+1,0,L,G+1,0];T.set(k,g*S*I),y.set(p,m*S*I);const b=[I,I,I,I,I,I];w.set(b,x*S*I)}const P=new Ns;P.setAttribute("position",new Yi(T,g)),P.setAttribute("uv",new Yi(y,m)),P.setAttribute("faceIndex",new Yi(w,x)),e.push(P),r>Ma&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Q_(i,e,t){const n=new Ds(i,e,t);return n.texture.mapping=Bc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sc(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function H2(i,e,t){const n=new Float32Array(Ms),r=new ie(0,1,0);return new Sr({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jh(),fragmentShader:`

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
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function eg(){return new Sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jh(),fragmentShader:`

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
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function tg(){return new Sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function Jh(){return`

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
	`}function k2(i){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const u=c.mapping,h=u===mh||u===_h,d=u===Da||u===Ia;if(h||d)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let _=e.get(c);return t===null&&(t=new J_(i)),_=h?t.fromEquirectangular(c,_):t.fromCubemap(c,_),e.set(c,_),_.texture}else{if(e.has(c))return e.get(c).texture;{const _=c.image;if(h&&_&&_.height>0||d&&_&&r(_)){t===null&&(t=new J_(i));const p=h?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,p),c.addEventListener("dispose",a),p.texture}else return null}}}return c}function r(c){let u=0;const h=6;for(let d=0;d<h;d++)c[d]!==void 0&&u++;return u===h}function a(c){const u=c.target;u.removeEventListener("dispose",a);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function V2(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function W2(i,e,t,n){const r={},a=new WeakMap;function l(_){const p=_.target;p.index!==null&&e.remove(p.index);for(const S in p.attributes)e.remove(p.attributes[S]);for(const S in p.morphAttributes){const g=p.morphAttributes[S];for(let m=0,x=g.length;m<x;m++)e.remove(g[m])}p.removeEventListener("dispose",l),delete r[p.id];const v=a.get(p);v&&(e.remove(v),a.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(_,p){return r[p.id]===!0||(p.addEventListener("dispose",l),r[p.id]=!0,t.memory.geometries++),p}function u(_){const p=_.attributes;for(const S in p)e.update(p[S],i.ARRAY_BUFFER);const v=_.morphAttributes;for(const S in v){const g=v[S];for(let m=0,x=g.length;m<x;m++)e.update(g[m],i.ARRAY_BUFFER)}}function h(_){const p=[],v=_.index,S=_.attributes.position;let g=0;if(v!==null){const T=v.array;g=v.version;for(let y=0,w=T.length;y<w;y+=3){const P=T[y+0],I=T[y+1],L=T[y+2];p.push(P,I,I,L,L,P)}}else if(S!==void 0){const T=S.array;g=S.version;for(let y=0,w=T.length/3-1;y<w;y+=3){const P=y+0,I=y+1,L=y+2;p.push(P,I,I,L,L,P)}}else return;const m=new(Hv(p)?Kv:Yv)(p,1);m.version=g;const x=a.get(_);x&&e.remove(x),a.set(_,m)}function d(_){const p=a.get(_);if(p){const v=_.index;v!==null&&p.version<v.version&&h(_)}else h(_);return a.get(_)}return{get:c,update:u,getWireframeAttribute:d}}function X2(i,e,t,n){const r=n.isWebGL2;let a;function l(v){a=v}let c,u;function h(v){c=v.type,u=v.bytesPerElement}function d(v,S){i.drawElements(a,S,c,v*u),t.update(S,a,1)}function _(v,S,g){if(g===0)return;let m,x;if(r)m=i,x="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](a,S,c,v*u,g),t.update(S,a,g)}function p(v,S,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<g;x++)this.render(v[x]/u,S[x]);else{m.multiDrawElementsWEBGL(a,S,0,c,v,0,g);let x=0;for(let T=0;T<g;T++)x+=S[T];t.update(x,a,1)}}this.setMode=l,this.setIndex=h,this.render=d,this.renderInstances=_,this.renderMultiDraw=p}function $2(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,c){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=c*(a/3);break;case i.LINES:t.lines+=c*(a/2);break;case i.LINE_STRIP:t.lines+=c*(a-1);break;case i.LINE_LOOP:t.lines+=c*a;break;case i.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function q2(i,e){return i[0]-e[0]}function Y2(i,e){return Math.abs(e[1])-Math.abs(i[1])}function K2(i,e,t){const n={},r=new Float32Array(8),a=new WeakMap,l=new _n,c=[];for(let h=0;h<8;h++)c[h]=[h,0];function u(h,d,_){const p=h.morphTargetInfluences;if(e.isWebGL2===!0){const S=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=S!==void 0?S.length:0;let m=a.get(d);if(m===void 0||m.count!==g){let $=function(){ne.dispose(),a.delete(d),d.removeEventListener("dispose",$)};var v=$;m!==void 0&&m.texture.dispose();const y=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,P=d.morphAttributes.color!==void 0,I=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],G=d.morphAttributes.color||[];let k=0;y===!0&&(k=1),w===!0&&(k=2),P===!0&&(k=3);let b=d.attributes.position.count*k,O=1;b>e.maxTextureSize&&(O=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const K=new Float32Array(b*O*4*g),ne=new Wv(K,b,O,g);ne.type=gr,ne.needsUpdate=!0;const z=k*4;for(let V=0;V<g;V++){const j=I[V],Q=L[V],le=G[V],oe=b*O*4*V;for(let se=0;se<j.count;se++){const he=se*z;y===!0&&(l.fromBufferAttribute(j,se),K[oe+he+0]=l.x,K[oe+he+1]=l.y,K[oe+he+2]=l.z,K[oe+he+3]=0),w===!0&&(l.fromBufferAttribute(Q,se),K[oe+he+4]=l.x,K[oe+he+5]=l.y,K[oe+he+6]=l.z,K[oe+he+7]=0),P===!0&&(l.fromBufferAttribute(le,se),K[oe+he+8]=l.x,K[oe+he+9]=l.y,K[oe+he+10]=l.z,K[oe+he+11]=le.itemSize===4?l.w:1)}}m={count:g,texture:ne,size:new yt(b,O)},a.set(d,m),d.addEventListener("dispose",$)}let x=0;for(let y=0;y<p.length;y++)x+=p[y];const T=d.morphTargetsRelative?1:1-x;_.getUniforms().setValue(i,"morphTargetBaseInfluence",T),_.getUniforms().setValue(i,"morphTargetInfluences",p),_.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),_.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const S=p===void 0?0:p.length;let g=n[d.id];if(g===void 0||g.length!==S){g=[];for(let w=0;w<S;w++)g[w]=[w,0];n[d.id]=g}for(let w=0;w<S;w++){const P=g[w];P[0]=w,P[1]=p[w]}g.sort(Y2);for(let w=0;w<8;w++)w<S&&g[w][1]?(c[w][0]=g[w][0],c[w][1]=g[w][1]):(c[w][0]=Number.MAX_SAFE_INTEGER,c[w][1]=0);c.sort(q2);const m=d.morphAttributes.position,x=d.morphAttributes.normal;let T=0;for(let w=0;w<8;w++){const P=c[w],I=P[0],L=P[1];I!==Number.MAX_SAFE_INTEGER&&L?(m&&d.getAttribute("morphTarget"+w)!==m[I]&&d.setAttribute("morphTarget"+w,m[I]),x&&d.getAttribute("morphNormal"+w)!==x[I]&&d.setAttribute("morphNormal"+w,x[I]),r[w]=L,T+=L):(m&&d.hasAttribute("morphTarget"+w)===!0&&d.deleteAttribute("morphTarget"+w),x&&d.hasAttribute("morphNormal"+w)===!0&&d.deleteAttribute("morphNormal"+w),r[w]=0)}const y=d.morphTargetsRelative?1:1-T;_.getUniforms().setValue(i,"morphTargetBaseInfluence",y),_.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:u}}function Z2(i,e,t,n){let r=new WeakMap;function a(u){const h=n.render.frame,d=u.geometry,_=e.get(u,d);if(r.get(_)!==h&&(e.update(_),r.set(_,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),r.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,h))),u.isSkinnedMesh){const p=u.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return _}function l(){r=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:l}}class t0 extends Dn{constructor(e,t,n,r,a,l,c,u,h,d){if(d=d!==void 0?d:Ts,d!==Ts&&d!==Ua)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Ts&&(n=Hr),n===void 0&&d===Ua&&(n=bs),super(null,r,a,l,c,u,d,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Ln,this.minFilter=u!==void 0?u:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const n0=new Dn,i0=new t0(1,1);i0.compareFunction=Gv;const r0=new Wv,s0=new DC,a0=new Jv,ng=[],ig=[],rg=new Float32Array(16),sg=new Float32Array(9),ag=new Float32Array(4);function ka(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=ng[r];if(a===void 0&&(a=new Float32Array(r),ng[r]=a),e!==0){n.toArray(a,0);for(let l=1,c=0;l!==e;++l)c+=t,i[l].toArray(a,c)}return a}function on(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ln(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function kc(i,e){let t=ig[e];t===void 0&&(t=new Int32Array(e),ig[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function j2(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function J2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2fv(this.addr,e),ln(t,e)}}function Q2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;i.uniform3fv(this.addr,e),ln(t,e)}}function eD(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4fv(this.addr,e),ln(t,e)}}function tD(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;ag.set(n),i.uniformMatrix2fv(this.addr,!1,ag),ln(t,n)}}function nD(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;sg.set(n),i.uniformMatrix3fv(this.addr,!1,sg),ln(t,n)}}function iD(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;rg.set(n),i.uniformMatrix4fv(this.addr,!1,rg),ln(t,n)}}function rD(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function sD(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2iv(this.addr,e),ln(t,e)}}function aD(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3iv(this.addr,e),ln(t,e)}}function oD(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4iv(this.addr,e),ln(t,e)}}function lD(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function cD(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2uiv(this.addr,e),ln(t,e)}}function uD(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3uiv(this.addr,e),ln(t,e)}}function fD(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4uiv(this.addr,e),ln(t,e)}}function hD(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const a=this.type===i.SAMPLER_2D_SHADOW?i0:n0;t.setTexture2D(e||a,r)}function dD(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||s0,r)}function pD(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||a0,r)}function mD(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||r0,r)}function _D(i){switch(i){case 5126:return j2;case 35664:return J2;case 35665:return Q2;case 35666:return eD;case 35674:return tD;case 35675:return nD;case 35676:return iD;case 5124:case 35670:return rD;case 35667:case 35671:return sD;case 35668:case 35672:return aD;case 35669:case 35673:return oD;case 5125:return lD;case 36294:return cD;case 36295:return uD;case 36296:return fD;case 35678:case 36198:case 36298:case 36306:case 35682:return hD;case 35679:case 36299:case 36307:return dD;case 35680:case 36300:case 36308:case 36293:return pD;case 36289:case 36303:case 36311:case 36292:return mD}}function gD(i,e){i.uniform1fv(this.addr,e)}function vD(i,e){const t=ka(e,this.size,2);i.uniform2fv(this.addr,t)}function xD(i,e){const t=ka(e,this.size,3);i.uniform3fv(this.addr,t)}function SD(i,e){const t=ka(e,this.size,4);i.uniform4fv(this.addr,t)}function MD(i,e){const t=ka(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function yD(i,e){const t=ka(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ED(i,e){const t=ka(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function bD(i,e){i.uniform1iv(this.addr,e)}function TD(i,e){i.uniform2iv(this.addr,e)}function wD(i,e){i.uniform3iv(this.addr,e)}function AD(i,e){i.uniform4iv(this.addr,e)}function RD(i,e){i.uniform1uiv(this.addr,e)}function CD(i,e){i.uniform2uiv(this.addr,e)}function LD(i,e){i.uniform3uiv(this.addr,e)}function PD(i,e){i.uniform4uiv(this.addr,e)}function DD(i,e,t){const n=this.cache,r=e.length,a=kc(t,r);on(n,a)||(i.uniform1iv(this.addr,a),ln(n,a));for(let l=0;l!==r;++l)t.setTexture2D(e[l]||n0,a[l])}function ID(i,e,t){const n=this.cache,r=e.length,a=kc(t,r);on(n,a)||(i.uniform1iv(this.addr,a),ln(n,a));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||s0,a[l])}function UD(i,e,t){const n=this.cache,r=e.length,a=kc(t,r);on(n,a)||(i.uniform1iv(this.addr,a),ln(n,a));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||a0,a[l])}function OD(i,e,t){const n=this.cache,r=e.length,a=kc(t,r);on(n,a)||(i.uniform1iv(this.addr,a),ln(n,a));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||r0,a[l])}function ND(i){switch(i){case 5126:return gD;case 35664:return vD;case 35665:return xD;case 35666:return SD;case 35674:return MD;case 35675:return yD;case 35676:return ED;case 5124:case 35670:return bD;case 35667:case 35671:return TD;case 35668:case 35672:return wD;case 35669:case 35673:return AD;case 5125:return RD;case 36294:return CD;case 36295:return LD;case 36296:return PD;case 35678:case 36198:case 36298:case 36306:case 35682:return DD;case 35679:case 36299:case 36307:return ID;case 35680:case 36300:case 36308:case 36293:return UD;case 36289:case 36303:case 36311:case 36292:return OD}}class FD{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_D(t.type)}}class BD{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ND(t.type)}}class zD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,l=r.length;a!==l;++a){const c=r[a];c.setValue(e,t[c.id],n)}}}const zf=/(\w+)(\])?(\[|\.)?/g;function og(i,e){i.seq.push(e),i.map[e.id]=e}function GD(i,e,t){const n=i.name,r=n.length;for(zf.lastIndex=0;;){const a=zf.exec(n),l=zf.lastIndex;let c=a[1];const u=a[2]==="]",h=a[3];if(u&&(c=c|0),h===void 0||h==="["&&l+2===r){og(t,h===void 0?new FD(c,i,e):new BD(c,i,e));break}else{let _=t.map[c];_===void 0&&(_=new zD(c),og(t,_)),t=_}}}class mc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),l=e.getUniformLocation(t,a.name);GD(a,l,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,l=t.length;a!==l;++a){const c=t[a],u=n[c.id];u.needsUpdate!==!1&&c.setValue(e,u.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const l=e[r];l.id in t&&n.push(l)}return n}}function lg(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const HD=37297;let kD=0;function VD(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=r;l<a;l++){const c=l+1;n.push(`${c===e?">":" "} ${c}: ${t[l]}`)}return n.join(`
`)}function WD(i){const e=At.getPrimaries(At.workingColorSpace),t=At.getPrimaries(i);let n;switch(e===t?n="":e===Tc&&t===bc?n="LinearDisplayP3ToLinearSRGB":e===bc&&t===Tc&&(n="LinearSRGBToLinearDisplayP3"),i){case xr:case zc:return[n,"LinearTransferOETF"];case mn:case Zh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function cg(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+VD(i.getShaderSource(e),l)}else return r}function XD(i,e){const t=WD(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function $D(i,e){let t;switch(e){case tC:t="Linear";break;case nC:t="Reinhard";break;case iC:t="OptimizedCineon";break;case rC:t="ACESFilmic";break;case aC:t="AgX";break;case sC:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function qD(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ya).join(`
`)}function YD(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ya).join(`
`)}function KD(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ZD(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),l=a.name;let c=1;a.type===i.FLOAT_MAT2&&(c=2),a.type===i.FLOAT_MAT3&&(c=3),a.type===i.FLOAT_MAT4&&(c=4),t[l]={type:a.type,location:i.getAttribLocation(e,l),locationSize:c}}return t}function ya(i){return i!==""}function ug(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jD=/^[ \t]*#include +<([\w\d./]+)>/gm;function yh(i){return i.replace(jD,QD)}const JD=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function QD(i,e){let t=ct[e];if(t===void 0){const n=JD.get(e);if(n!==void 0)t=ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return yh(t)}const eI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hg(i){return i.replace(eI,tI)}function tI(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function dg(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function nI(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cv?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===CR?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===dr&&(e="SHADOWMAP_TYPE_VSM"),e}function iI(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Da:case Ia:e="ENVMAP_TYPE_CUBE";break;case Bc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rI(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ia:e="ENVMAP_MODE_REFRACTION";break}return e}function sI(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Lv:e="ENVMAP_BLENDING_MULTIPLY";break;case QR:e="ENVMAP_BLENDING_MIX";break;case eC:e="ENVMAP_BLENDING_ADD";break}return e}function aI(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function oI(i,e,t,n){const r=i.getContext(),a=t.defines;let l=t.vertexShader,c=t.fragmentShader;const u=nI(t),h=iI(t),d=rI(t),_=sI(t),p=aI(t),v=t.isWebGL2?"":qD(t),S=YD(t),g=KD(a),m=r.createProgram();let x,T,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ya).join(`
`),x.length>0&&(x+=`
`),T=[v,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ya).join(`
`),T.length>0&&(T+=`
`)):(x=[dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),T=[v,dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMap?"#define "+_:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$r?"#define TONE_MAPPING":"",t.toneMapping!==$r?ct.tonemapping_pars_fragment:"",t.toneMapping!==$r?$D("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,XD("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ya).join(`
`)),l=yh(l),l=ug(l,t),l=fg(l,t),c=yh(c),c=ug(c,t),c=fg(c,t),l=hg(l),c=hg(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,x=[S,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,T=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===C_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===C_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);const w=y+x+l,P=y+T+c,I=lg(r,r.VERTEX_SHADER,w),L=lg(r,r.FRAGMENT_SHADER,P);r.attachShader(m,I),r.attachShader(m,L),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function G(K){if(i.debug.checkShaderErrors){const ne=r.getProgramInfoLog(m).trim(),z=r.getShaderInfoLog(I).trim(),$=r.getShaderInfoLog(L).trim();let V=!0,j=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,m,I,L);else{const Q=cg(r,I,"vertex"),le=cg(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+K.name+`
Material Type: `+K.type+`

Program Info Log: `+ne+`
`+Q+`
`+le)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(z===""||$==="")&&(j=!1);j&&(K.diagnostics={runnable:V,programLog:ne,vertexShader:{log:z,prefix:x},fragmentShader:{log:$,prefix:T}})}r.deleteShader(I),r.deleteShader(L),k=new mc(r,m),b=ZD(r,m)}let k;this.getUniforms=function(){return k===void 0&&G(this),k};let b;this.getAttributes=function(){return b===void 0&&G(this),b};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(m,HD)),O},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kD++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=I,this.fragmentShader=L,this}let lI=0;class cI{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new uI(e),t.set(e,n)),n}}class uI{constructor(e){this.id=lI++,this.code=e,this.usedTimes=0}}function fI(i,e,t,n,r,a,l){const c=new Xv,u=new cI,h=new Set,d=[],_=r.isWebGL2,p=r.logarithmicDepthBuffer,v=r.vertexTextures;let S=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b){return h.add(b),b===0?"uv":`uv${b}`}function x(b,O,K,ne,z){const $=ne.fog,V=z.geometry,j=b.isMeshStandardMaterial?ne.environment:null,Q=(b.isMeshStandardMaterial?t:e).get(b.envMap||j),le=Q&&Q.mapping===Bc?Q.image.height:null,oe=g[b.type];b.precision!==null&&(S=r.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const se=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,he=se!==void 0?se.length:0;let Ie=0;V.morphAttributes.position!==void 0&&(Ie=1),V.morphAttributes.normal!==void 0&&(Ie=2),V.morphAttributes.color!==void 0&&(Ie=3);let Z,ce,Ae,ke;if(oe){const bt=Vi[oe];Z=bt.vertexShader,ce=bt.fragmentShader}else Z=b.vertexShader,ce=b.fragmentShader,u.update(b),Ae=u.getVertexShaderID(b),ke=u.getFragmentShaderID(b);const Be=i.getRenderTarget(),Ce=z.isInstancedMesh===!0,qe=z.isBatchedMesh===!0,Je=!!b.map,X=!!b.matcap,Vt=!!Q,Le=!!b.aoMap,Xe=!!b.lightMap,ze=!!b.bumpMap,ut=!!b.normalMap,Qe=!!b.displacementMap,U=!!b.emissiveMap,R=!!b.metalnessMap,Y=!!b.roughnessMap,me=b.anisotropy>0,_e=b.clearcoat>0,Se=b.iridescence>0,xe=b.sheen>0,ge=b.transmission>0,de=me&&!!b.anisotropyMap,be=_e&&!!b.clearcoatMap,Ve=_e&&!!b.clearcoatNormalMap,pe=_e&&!!b.clearcoatRoughnessMap,Ue=Se&&!!b.iridescenceMap,Me=Se&&!!b.iridescenceThicknessMap,He=xe&&!!b.sheenColorMap,Ge=xe&&!!b.sheenRoughnessMap,Pe=!!b.specularMap,et=!!b.specularColorMap,vt=!!b.specularIntensityMap,Lt=ge&&!!b.transmissionMap,ht=ge&&!!b.thicknessMap,Et=!!b.gradientMap,N=!!b.alphaMap,ye=b.alphaTest>0,Ee=!!b.alphaHash,Oe=!!b.extensions;let We=$r;b.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(We=i.toneMapping);const xt={isWebGL2:_,shaderID:oe,shaderType:b.type,shaderName:b.name,vertexShader:Z,fragmentShader:ce,defines:b.defines,customVertexShaderID:Ae,customFragmentShaderID:ke,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:qe,instancing:Ce,instancingColor:Ce&&z.instanceColor!==null,supportsVertexTextures:v,outputColorSpace:Be===null?i.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:xr,alphaToCoverage:!!b.alphaToCoverage,map:Je,matcap:X,envMap:Vt,envMapMode:Vt&&Q.mapping,envMapCubeUVHeight:le,aoMap:Le,lightMap:Xe,bumpMap:ze,normalMap:ut,displacementMap:v&&Qe,emissiveMap:U,normalMapObjectSpace:ut&&b.normalMapType===vC,normalMapTangentSpace:ut&&b.normalMapType===gC,metalnessMap:R,roughnessMap:Y,anisotropy:me,anisotropyMap:de,clearcoat:_e,clearcoatMap:be,clearcoatNormalMap:Ve,clearcoatRoughnessMap:pe,iridescence:Se,iridescenceMap:Ue,iridescenceThicknessMap:Me,sheen:xe,sheenColorMap:He,sheenRoughnessMap:Ge,specularMap:Pe,specularColorMap:et,specularIntensityMap:vt,transmission:ge,transmissionMap:Lt,thicknessMap:ht,gradientMap:Et,opaque:b.transparent===!1&&b.blending===Ta&&b.alphaToCoverage===!1,alphaMap:N,alphaTest:ye,alphaHash:Ee,combine:b.combine,mapUv:Je&&m(b.map.channel),aoMapUv:Le&&m(b.aoMap.channel),lightMapUv:Xe&&m(b.lightMap.channel),bumpMapUv:ze&&m(b.bumpMap.channel),normalMapUv:ut&&m(b.normalMap.channel),displacementMapUv:Qe&&m(b.displacementMap.channel),emissiveMapUv:U&&m(b.emissiveMap.channel),metalnessMapUv:R&&m(b.metalnessMap.channel),roughnessMapUv:Y&&m(b.roughnessMap.channel),anisotropyMapUv:de&&m(b.anisotropyMap.channel),clearcoatMapUv:be&&m(b.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&m(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&m(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&m(b.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&m(b.iridescenceThicknessMap.channel),sheenColorMapUv:He&&m(b.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&m(b.sheenRoughnessMap.channel),specularMapUv:Pe&&m(b.specularMap.channel),specularColorMapUv:et&&m(b.specularColorMap.channel),specularIntensityMapUv:vt&&m(b.specularIntensityMap.channel),transmissionMapUv:Lt&&m(b.transmissionMap.channel),thicknessMapUv:ht&&m(b.thicknessMap.channel),alphaMapUv:N&&m(b.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ut||me),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!V.attributes.uv&&(Je||N),fog:!!$,useFog:b.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:z.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Ie,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&K.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Je&&b.map.isVideoTexture===!0&&At.getTransfer(b.map.colorSpace)===Bt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===_r,flipSided:b.side===Wn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:Oe&&b.extensions.derivatives===!0,extensionFragDepth:Oe&&b.extensions.fragDepth===!0,extensionDrawBuffers:Oe&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:Oe&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Oe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Oe&&b.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:_||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:_||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:_||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return xt.vertexUv1s=h.has(1),xt.vertexUv2s=h.has(2),xt.vertexUv3s=h.has(3),h.clear(),xt}function T(b){const O=[];if(b.shaderID?O.push(b.shaderID):(O.push(b.customVertexShaderID),O.push(b.customFragmentShaderID)),b.defines!==void 0)for(const K in b.defines)O.push(K),O.push(b.defines[K]);return b.isRawShaderMaterial===!1&&(y(O,b),w(O,b),O.push(i.outputColorSpace)),O.push(b.customProgramCacheKey),O.join()}function y(b,O){b.push(O.precision),b.push(O.outputColorSpace),b.push(O.envMapMode),b.push(O.envMapCubeUVHeight),b.push(O.mapUv),b.push(O.alphaMapUv),b.push(O.lightMapUv),b.push(O.aoMapUv),b.push(O.bumpMapUv),b.push(O.normalMapUv),b.push(O.displacementMapUv),b.push(O.emissiveMapUv),b.push(O.metalnessMapUv),b.push(O.roughnessMapUv),b.push(O.anisotropyMapUv),b.push(O.clearcoatMapUv),b.push(O.clearcoatNormalMapUv),b.push(O.clearcoatRoughnessMapUv),b.push(O.iridescenceMapUv),b.push(O.iridescenceThicknessMapUv),b.push(O.sheenColorMapUv),b.push(O.sheenRoughnessMapUv),b.push(O.specularMapUv),b.push(O.specularColorMapUv),b.push(O.specularIntensityMapUv),b.push(O.transmissionMapUv),b.push(O.thicknessMapUv),b.push(O.combine),b.push(O.fogExp2),b.push(O.sizeAttenuation),b.push(O.morphTargetsCount),b.push(O.morphAttributeCount),b.push(O.numDirLights),b.push(O.numPointLights),b.push(O.numSpotLights),b.push(O.numSpotLightMaps),b.push(O.numHemiLights),b.push(O.numRectAreaLights),b.push(O.numDirLightShadows),b.push(O.numPointLightShadows),b.push(O.numSpotLightShadows),b.push(O.numSpotLightShadowsWithMaps),b.push(O.numLightProbes),b.push(O.shadowMapType),b.push(O.toneMapping),b.push(O.numClippingPlanes),b.push(O.numClipIntersection),b.push(O.depthPacking)}function w(b,O){c.disableAll(),O.isWebGL2&&c.enable(0),O.supportsVertexTextures&&c.enable(1),O.instancing&&c.enable(2),O.instancingColor&&c.enable(3),O.matcap&&c.enable(4),O.envMap&&c.enable(5),O.normalMapObjectSpace&&c.enable(6),O.normalMapTangentSpace&&c.enable(7),O.clearcoat&&c.enable(8),O.iridescence&&c.enable(9),O.alphaTest&&c.enable(10),O.vertexColors&&c.enable(11),O.vertexAlphas&&c.enable(12),O.vertexUv1s&&c.enable(13),O.vertexUv2s&&c.enable(14),O.vertexUv3s&&c.enable(15),O.vertexTangents&&c.enable(16),O.anisotropy&&c.enable(17),O.alphaHash&&c.enable(18),O.batching&&c.enable(19),b.push(c.mask),c.disableAll(),O.fog&&c.enable(0),O.useFog&&c.enable(1),O.flatShading&&c.enable(2),O.logarithmicDepthBuffer&&c.enable(3),O.skinning&&c.enable(4),O.morphTargets&&c.enable(5),O.morphNormals&&c.enable(6),O.morphColors&&c.enable(7),O.premultipliedAlpha&&c.enable(8),O.shadowMapEnabled&&c.enable(9),O.useLegacyLights&&c.enable(10),O.doubleSided&&c.enable(11),O.flipSided&&c.enable(12),O.useDepthPacking&&c.enable(13),O.dithering&&c.enable(14),O.transmission&&c.enable(15),O.sheen&&c.enable(16),O.opaque&&c.enable(17),O.pointsUvs&&c.enable(18),O.decodeVideoTexture&&c.enable(19),O.alphaToCoverage&&c.enable(20),b.push(c.mask)}function P(b){const O=g[b.type];let K;if(O){const ne=Vi[O];K=$C.clone(ne.uniforms)}else K=b.uniforms;return K}function I(b,O){let K;for(let ne=0,z=d.length;ne<z;ne++){const $=d[ne];if($.cacheKey===O){K=$,++K.usedTimes;break}}return K===void 0&&(K=new oI(i,O,b,a),d.push(K)),K}function L(b){if(--b.usedTimes===0){const O=d.indexOf(b);d[O]=d[d.length-1],d.pop(),b.destroy()}}function G(b){u.remove(b)}function k(){u.dispose()}return{getParameters:x,getProgramCacheKey:T,getUniforms:P,acquireProgram:I,releaseProgram:L,releaseShaderCache:G,programs:d,dispose:k}}function hI(){let i=new WeakMap;function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function t(a){i.delete(a)}function n(a,l,c){i.get(a)[l]=c}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function dI(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function pg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function mg(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function l(_,p,v,S,g,m){let x=i[e];return x===void 0?(x={id:_.id,object:_,geometry:p,material:v,groupOrder:S,renderOrder:_.renderOrder,z:g,group:m},i[e]=x):(x.id=_.id,x.object=_,x.geometry=p,x.material=v,x.groupOrder=S,x.renderOrder=_.renderOrder,x.z=g,x.group=m),e++,x}function c(_,p,v,S,g,m){const x=l(_,p,v,S,g,m);v.transmission>0?n.push(x):v.transparent===!0?r.push(x):t.push(x)}function u(_,p,v,S,g,m){const x=l(_,p,v,S,g,m);v.transmission>0?n.unshift(x):v.transparent===!0?r.unshift(x):t.unshift(x)}function h(_,p){t.length>1&&t.sort(_||dI),n.length>1&&n.sort(p||pg),r.length>1&&r.sort(p||pg)}function d(){for(let _=e,p=i.length;_<p;_++){const v=i[_];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:c,unshift:u,finish:d,sort:h}}function pI(){let i=new WeakMap;function e(n,r){const a=i.get(n);let l;return a===void 0?(l=new mg,i.set(n,[l])):r>=a.length?(l=new mg,a.push(l)):l=a[r],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function mI(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new Rt};break;case"SpotLight":t={position:new ie,direction:new ie,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":t={color:new Rt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return i[e.id]=t,t}}}function _I(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let gI=0;function vI(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function xI(i,e){const t=new mI,n=_I(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new ie);const a=new ie,l=new gn,c=new gn;function u(d,_){let p=0,v=0,S=0;for(let K=0;K<9;K++)r.probe[K].set(0,0,0);let g=0,m=0,x=0,T=0,y=0,w=0,P=0,I=0,L=0,G=0,k=0;d.sort(vI);const b=_===!0?Math.PI:1;for(let K=0,ne=d.length;K<ne;K++){const z=d[K],$=z.color,V=z.intensity,j=z.distance,Q=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)p+=$.r*V*b,v+=$.g*V*b,S+=$.b*V*b;else if(z.isLightProbe){for(let le=0;le<9;le++)r.probe[le].addScaledVector(z.sh.coefficients[le],V);k++}else if(z.isDirectionalLight){const le=t.get(z);if(le.color.copy(z.color).multiplyScalar(z.intensity*b),z.castShadow){const oe=z.shadow,se=n.get(z);se.shadowBias=oe.bias,se.shadowNormalBias=oe.normalBias,se.shadowRadius=oe.radius,se.shadowMapSize=oe.mapSize,r.directionalShadow[g]=se,r.directionalShadowMap[g]=Q,r.directionalShadowMatrix[g]=z.shadow.matrix,w++}r.directional[g]=le,g++}else if(z.isSpotLight){const le=t.get(z);le.position.setFromMatrixPosition(z.matrixWorld),le.color.copy($).multiplyScalar(V*b),le.distance=j,le.coneCos=Math.cos(z.angle),le.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),le.decay=z.decay,r.spot[x]=le;const oe=z.shadow;if(z.map&&(r.spotLightMap[L]=z.map,L++,oe.updateMatrices(z),z.castShadow&&G++),r.spotLightMatrix[x]=oe.matrix,z.castShadow){const se=n.get(z);se.shadowBias=oe.bias,se.shadowNormalBias=oe.normalBias,se.shadowRadius=oe.radius,se.shadowMapSize=oe.mapSize,r.spotShadow[x]=se,r.spotShadowMap[x]=Q,I++}x++}else if(z.isRectAreaLight){const le=t.get(z);le.color.copy($).multiplyScalar(V),le.halfWidth.set(z.width*.5,0,0),le.halfHeight.set(0,z.height*.5,0),r.rectArea[T]=le,T++}else if(z.isPointLight){const le=t.get(z);if(le.color.copy(z.color).multiplyScalar(z.intensity*b),le.distance=z.distance,le.decay=z.decay,z.castShadow){const oe=z.shadow,se=n.get(z);se.shadowBias=oe.bias,se.shadowNormalBias=oe.normalBias,se.shadowRadius=oe.radius,se.shadowMapSize=oe.mapSize,se.shadowCameraNear=oe.camera.near,se.shadowCameraFar=oe.camera.far,r.pointShadow[m]=se,r.pointShadowMap[m]=Q,r.pointShadowMatrix[m]=z.shadow.matrix,P++}r.point[m]=le,m++}else if(z.isHemisphereLight){const le=t.get(z);le.skyColor.copy(z.color).multiplyScalar(V*b),le.groundColor.copy(z.groundColor).multiplyScalar(V*b),r.hemi[y]=le,y++}}T>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_FLOAT_1,r.rectAreaLTC2=Te.LTC_FLOAT_2):(r.rectAreaLTC1=Te.LTC_HALF_1,r.rectAreaLTC2=Te.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_FLOAT_1,r.rectAreaLTC2=Te.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_HALF_1,r.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=v,r.ambient[2]=S;const O=r.hash;(O.directionalLength!==g||O.pointLength!==m||O.spotLength!==x||O.rectAreaLength!==T||O.hemiLength!==y||O.numDirectionalShadows!==w||O.numPointShadows!==P||O.numSpotShadows!==I||O.numSpotMaps!==L||O.numLightProbes!==k)&&(r.directional.length=g,r.spot.length=x,r.rectArea.length=T,r.point.length=m,r.hemi.length=y,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=I,r.spotShadowMap.length=I,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=I+L-G,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=k,O.directionalLength=g,O.pointLength=m,O.spotLength=x,O.rectAreaLength=T,O.hemiLength=y,O.numDirectionalShadows=w,O.numPointShadows=P,O.numSpotShadows=I,O.numSpotMaps=L,O.numLightProbes=k,r.version=gI++)}function h(d,_){let p=0,v=0,S=0,g=0,m=0;const x=_.matrixWorldInverse;for(let T=0,y=d.length;T<y;T++){const w=d[T];if(w.isDirectionalLight){const P=r.directional[p];P.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(x),p++}else if(w.isSpotLight){const P=r.spot[S];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(x),P.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(x),S++}else if(w.isRectAreaLight){const P=r.rectArea[g];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(x),c.identity(),l.copy(w.matrixWorld),l.premultiply(x),c.extractRotation(l),P.halfWidth.set(w.width*.5,0,0),P.halfHeight.set(0,w.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),g++}else if(w.isPointLight){const P=r.point[v];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(x),v++}else if(w.isHemisphereLight){const P=r.hemi[m];P.direction.setFromMatrixPosition(w.matrixWorld),P.direction.transformDirection(x),m++}}}return{setup:u,setupView:h,state:r}}function _g(i,e){const t=new xI(i,e),n=[],r=[];function a(){n.length=0,r.length=0}function l(_){n.push(_)}function c(_){r.push(_)}function u(_){t.setup(n,_)}function h(_){t.setupView(n,_)}return{init:a,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:u,setupLightsView:h,pushLight:l,pushShadow:c}}function SI(i,e){let t=new WeakMap;function n(a,l=0){const c=t.get(a);let u;return c===void 0?(u=new _g(i,e),t.set(a,[u])):l>=c.length?(u=new _g(i,e),c.push(u)):u=c[l],u}function r(){t=new WeakMap}return{get:n,dispose:r}}class MI extends Hc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yI extends Hc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const EI=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bI=`uniform sampler2D shadow_pass;
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
}`;function TI(i,e,t){let n=new Qv;const r=new yt,a=new yt,l=new _n,c=new MI({depthPacking:_C}),u=new yI,h={},d=t.maxTextureSize,_={[Zr]:Wn,[Wn]:Zr,[_r]:_r},p=new Sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:EI,fragmentShader:bI}),v=p.clone();v.defines.HORIZONTAL_PASS=1;const S=new Ns;S.setAttribute("position",new Yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new $i(S,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cv;let x=this.type;this.render=function(I,L,G){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const k=i.getRenderTarget(),b=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),K=i.state;K.setBlending(Xr),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ne=x!==dr&&this.type===dr,z=x===dr&&this.type!==dr;for(let $=0,V=I.length;$<V;$++){const j=I[$],Q=j.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;r.copy(Q.mapSize);const le=Q.getFrameExtents();if(r.multiply(le),a.copy(Q.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/le.x),r.x=a.x*le.x,Q.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/le.y),r.y=a.y*le.y,Q.mapSize.y=a.y)),Q.map===null||ne===!0||z===!0){const se=this.type!==dr?{minFilter:Ln,magFilter:Ln}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Ds(r.x,r.y,se),Q.map.texture.name=j.name+".shadowMap",Q.camera.updateProjectionMatrix()}i.setRenderTarget(Q.map),i.clear();const oe=Q.getViewportCount();for(let se=0;se<oe;se++){const he=Q.getViewport(se);l.set(a.x*he.x,a.y*he.y,a.x*he.z,a.y*he.w),K.viewport(l),Q.updateMatrices(j,se),n=Q.getFrustum(),w(L,G,Q.camera,j,this.type)}Q.isPointLightShadow!==!0&&this.type===dr&&T(Q,G),Q.needsUpdate=!1}x=this.type,m.needsUpdate=!1,i.setRenderTarget(k,b,O)};function T(I,L){const G=e.update(g);p.defines.VSM_SAMPLES!==I.blurSamples&&(p.defines.VSM_SAMPLES=I.blurSamples,v.defines.VSM_SAMPLES=I.blurSamples,p.needsUpdate=!0,v.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ds(r.x,r.y)),p.uniforms.shadow_pass.value=I.map.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(L,null,G,p,g,null),v.uniforms.shadow_pass.value=I.mapPass.texture,v.uniforms.resolution.value=I.mapSize,v.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(L,null,G,v,g,null)}function y(I,L,G,k){let b=null;const O=G.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(O!==void 0)b=O;else if(b=G.isPointLight===!0?u:c,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const K=b.uuid,ne=L.uuid;let z=h[K];z===void 0&&(z={},h[K]=z);let $=z[ne];$===void 0&&($=b.clone(),z[ne]=$,L.addEventListener("dispose",P)),b=$}if(b.visible=L.visible,b.wireframe=L.wireframe,k===dr?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:_[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,G.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const K=i.properties.get(b);K.light=G}return b}function w(I,L,G,k,b){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&b===dr)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,I.matrixWorld);const ne=e.update(I),z=I.material;if(Array.isArray(z)){const $=ne.groups;for(let V=0,j=$.length;V<j;V++){const Q=$[V],le=z[Q.materialIndex];if(le&&le.visible){const oe=y(I,le,k,b);I.onBeforeShadow(i,I,L,G,ne,oe,Q),i.renderBufferDirect(G,null,ne,oe,I,Q),I.onAfterShadow(i,I,L,G,ne,oe,Q)}}}else if(z.visible){const $=y(I,z,k,b);I.onBeforeShadow(i,I,L,G,ne,$,null),i.renderBufferDirect(G,null,ne,$,I,null),I.onAfterShadow(i,I,L,G,ne,$,null)}}const K=I.children;for(let ne=0,z=K.length;ne<z;ne++)w(K[ne],L,G,k,b)}function P(I){I.target.removeEventListener("dispose",P);for(const G in h){const k=h[G],b=I.target.uuid;b in k&&(k[b].dispose(),delete k[b])}}}function wI(i,e,t){const n=t.isWebGL2;function r(){let N=!1;const ye=new _n;let Ee=null;const Oe=new _n(0,0,0,0);return{setMask:function(We){Ee!==We&&!N&&(i.colorMask(We,We,We,We),Ee=We)},setLocked:function(We){N=We},setClear:function(We,xt,bt,tn,In){In===!0&&(We*=tn,xt*=tn,bt*=tn),ye.set(We,xt,bt,tn),Oe.equals(ye)===!1&&(i.clearColor(We,xt,bt,tn),Oe.copy(ye))},reset:function(){N=!1,Ee=null,Oe.set(-1,0,0,0)}}}function a(){let N=!1,ye=null,Ee=null,Oe=null;return{setTest:function(We){We?Ce(i.DEPTH_TEST):qe(i.DEPTH_TEST)},setMask:function(We){ye!==We&&!N&&(i.depthMask(We),ye=We)},setFunc:function(We){if(Ee!==We){switch(We){case $R:i.depthFunc(i.NEVER);break;case qR:i.depthFunc(i.ALWAYS);break;case YR:i.depthFunc(i.LESS);break;case yc:i.depthFunc(i.LEQUAL);break;case KR:i.depthFunc(i.EQUAL);break;case ZR:i.depthFunc(i.GEQUAL);break;case jR:i.depthFunc(i.GREATER);break;case JR:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=We}},setLocked:function(We){N=We},setClear:function(We){Oe!==We&&(i.clearDepth(We),Oe=We)},reset:function(){N=!1,ye=null,Ee=null,Oe=null}}}function l(){let N=!1,ye=null,Ee=null,Oe=null,We=null,xt=null,bt=null,tn=null,In=null;return{setTest:function(wt){N||(wt?Ce(i.STENCIL_TEST):qe(i.STENCIL_TEST))},setMask:function(wt){ye!==wt&&!N&&(i.stencilMask(wt),ye=wt)},setFunc:function(wt,nn,ui){(Ee!==wt||Oe!==nn||We!==ui)&&(i.stencilFunc(wt,nn,ui),Ee=wt,Oe=nn,We=ui)},setOp:function(wt,nn,ui){(xt!==wt||bt!==nn||tn!==ui)&&(i.stencilOp(wt,nn,ui),xt=wt,bt=nn,tn=ui)},setLocked:function(wt){N=wt},setClear:function(wt){In!==wt&&(i.clearStencil(wt),In=wt)},reset:function(){N=!1,ye=null,Ee=null,Oe=null,We=null,xt=null,bt=null,tn=null,In=null}}}const c=new r,u=new a,h=new l,d=new WeakMap,_=new WeakMap;let p={},v={},S=new WeakMap,g=[],m=null,x=!1,T=null,y=null,w=null,P=null,I=null,L=null,G=null,k=new Rt(0,0,0),b=0,O=!1,K=null,ne=null,z=null,$=null,V=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,le=0;const oe=i.getParameter(i.VERSION);oe.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(oe)[1]),Q=le>=1):oe.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),Q=le>=2);let se=null,he={};const Ie=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),ce=new _n().fromArray(Ie),Ae=new _n().fromArray(Z);function ke(N,ye,Ee,Oe){const We=new Uint8Array(4),xt=i.createTexture();i.bindTexture(N,xt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let bt=0;bt<Ee;bt++)n&&(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)?i.texImage3D(ye,0,i.RGBA,1,1,Oe,0,i.RGBA,i.UNSIGNED_BYTE,We):i.texImage2D(ye+bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,We);return xt}const Be={};Be[i.TEXTURE_2D]=ke(i.TEXTURE_2D,i.TEXTURE_2D,1),Be[i.TEXTURE_CUBE_MAP]=ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Be[i.TEXTURE_2D_ARRAY]=ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Be[i.TEXTURE_3D]=ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),Ce(i.DEPTH_TEST),u.setFunc(yc),Qe(!1),U(Km),Ce(i.CULL_FACE),ze(Xr);function Ce(N){p[N]!==!0&&(i.enable(N),p[N]=!0)}function qe(N){p[N]!==!1&&(i.disable(N),p[N]=!1)}function Je(N,ye){return v[N]!==ye?(i.bindFramebuffer(N,ye),v[N]=ye,n&&(N===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=ye),N===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=ye)),!0):!1}function X(N,ye){let Ee=g,Oe=!1;if(N)if(Ee=S.get(ye),Ee===void 0&&(Ee=[],S.set(ye,Ee)),N.isWebGLMultipleRenderTargets){const We=N.texture;if(Ee.length!==We.length||Ee[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,bt=We.length;xt<bt;xt++)Ee[xt]=i.COLOR_ATTACHMENT0+xt;Ee.length=We.length,Oe=!0}}else Ee[0]!==i.COLOR_ATTACHMENT0&&(Ee[0]=i.COLOR_ATTACHMENT0,Oe=!0);else Ee[0]!==i.BACK&&(Ee[0]=i.BACK,Oe=!0);Oe&&(t.isWebGL2?i.drawBuffers(Ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ee))}function Vt(N){return m!==N?(i.useProgram(N),m=N,!0):!1}const Le={[Ss]:i.FUNC_ADD,[PR]:i.FUNC_SUBTRACT,[DR]:i.FUNC_REVERSE_SUBTRACT};if(n)Le[Qm]=i.MIN,Le[e_]=i.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(Le[Qm]=N.MIN_EXT,Le[e_]=N.MAX_EXT)}const Xe={[IR]:i.ZERO,[UR]:i.ONE,[OR]:i.SRC_COLOR,[dh]:i.SRC_ALPHA,[HR]:i.SRC_ALPHA_SATURATE,[zR]:i.DST_COLOR,[FR]:i.DST_ALPHA,[NR]:i.ONE_MINUS_SRC_COLOR,[ph]:i.ONE_MINUS_SRC_ALPHA,[GR]:i.ONE_MINUS_DST_COLOR,[BR]:i.ONE_MINUS_DST_ALPHA,[kR]:i.CONSTANT_COLOR,[VR]:i.ONE_MINUS_CONSTANT_COLOR,[WR]:i.CONSTANT_ALPHA,[XR]:i.ONE_MINUS_CONSTANT_ALPHA};function ze(N,ye,Ee,Oe,We,xt,bt,tn,In,wt){if(N===Xr){x===!0&&(qe(i.BLEND),x=!1);return}if(x===!1&&(Ce(i.BLEND),x=!0),N!==LR){if(N!==T||wt!==O){if((y!==Ss||I!==Ss)&&(i.blendEquation(i.FUNC_ADD),y=Ss,I=Ss),wt)switch(N){case Ta:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zm:i.blendFunc(i.ONE,i.ONE);break;case jm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jm:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ta:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zm:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case jm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jm:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}w=null,P=null,L=null,G=null,k.set(0,0,0),b=0,T=N,O=wt}return}We=We||ye,xt=xt||Ee,bt=bt||Oe,(ye!==y||We!==I)&&(i.blendEquationSeparate(Le[ye],Le[We]),y=ye,I=We),(Ee!==w||Oe!==P||xt!==L||bt!==G)&&(i.blendFuncSeparate(Xe[Ee],Xe[Oe],Xe[xt],Xe[bt]),w=Ee,P=Oe,L=xt,G=bt),(tn.equals(k)===!1||In!==b)&&(i.blendColor(tn.r,tn.g,tn.b,In),k.copy(tn),b=In),T=N,O=!1}function ut(N,ye){N.side===_r?qe(i.CULL_FACE):Ce(i.CULL_FACE);let Ee=N.side===Wn;ye&&(Ee=!Ee),Qe(Ee),N.blending===Ta&&N.transparent===!1?ze(Xr):ze(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),u.setFunc(N.depthFunc),u.setTest(N.depthTest),u.setMask(N.depthWrite),c.setMask(N.colorWrite);const Oe=N.stencilWrite;h.setTest(Oe),Oe&&(h.setMask(N.stencilWriteMask),h.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),h.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Y(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Ce(i.SAMPLE_ALPHA_TO_COVERAGE):qe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(N){K!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),K=N)}function U(N){N!==AR?(Ce(i.CULL_FACE),N!==ne&&(N===Km?i.cullFace(i.BACK):N===RR?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):qe(i.CULL_FACE),ne=N}function R(N){N!==z&&(Q&&i.lineWidth(N),z=N)}function Y(N,ye,Ee){N?(Ce(i.POLYGON_OFFSET_FILL),($!==ye||V!==Ee)&&(i.polygonOffset(ye,Ee),$=ye,V=Ee)):qe(i.POLYGON_OFFSET_FILL)}function me(N){N?Ce(i.SCISSOR_TEST):qe(i.SCISSOR_TEST)}function _e(N){N===void 0&&(N=i.TEXTURE0+j-1),se!==N&&(i.activeTexture(N),se=N)}function Se(N,ye,Ee){Ee===void 0&&(se===null?Ee=i.TEXTURE0+j-1:Ee=se);let Oe=he[Ee];Oe===void 0&&(Oe={type:void 0,texture:void 0},he[Ee]=Oe),(Oe.type!==N||Oe.texture!==ye)&&(se!==Ee&&(i.activeTexture(Ee),se=Ee),i.bindTexture(N,ye||Be[N]),Oe.type=N,Oe.texture=ye)}function xe(){const N=he[se];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ge(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ve(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function He(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ge(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(N){ce.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ce.copy(N))}function vt(N){Ae.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Ae.copy(N))}function Lt(N,ye){let Ee=_.get(ye);Ee===void 0&&(Ee=new WeakMap,_.set(ye,Ee));let Oe=Ee.get(N);Oe===void 0&&(Oe=i.getUniformBlockIndex(ye,N.name),Ee.set(N,Oe))}function ht(N,ye){const Oe=_.get(ye).get(N);d.get(ye)!==Oe&&(i.uniformBlockBinding(ye,Oe,N.__bindingPointIndex),d.set(ye,Oe))}function Et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},se=null,he={},v={},S=new WeakMap,g=[],m=null,x=!1,T=null,y=null,w=null,P=null,I=null,L=null,G=null,k=new Rt(0,0,0),b=0,O=!1,K=null,ne=null,z=null,$=null,V=null,ce.set(0,0,i.canvas.width,i.canvas.height),Ae.set(0,0,i.canvas.width,i.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:Ce,disable:qe,bindFramebuffer:Je,drawBuffers:X,useProgram:Vt,setBlending:ze,setMaterial:ut,setFlipSided:Qe,setCullFace:U,setLineWidth:R,setPolygonOffset:Y,setScissorTest:me,activeTexture:_e,bindTexture:Se,unbindTexture:xe,compressedTexImage2D:ge,compressedTexImage3D:de,texImage2D:Ge,texImage3D:Pe,updateUBOMapping:Lt,uniformBlockBinding:ht,texStorage2D:Me,texStorage3D:He,texSubImage2D:be,texSubImage3D:Ve,compressedTexSubImage2D:pe,compressedTexSubImage3D:Ue,scissor:et,viewport:vt,reset:Et}}function AI(i,e,t,n,r,a,l){const c=r.isWebGL2,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let _;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(U,R){return v?new OffscreenCanvas(U,R):Do("canvas")}function g(U,R,Y,me){let _e=1;if((U.width>me||U.height>me)&&(_e=me/Math.max(U.width,U.height)),_e<1||R===!0)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap){const Se=R?Mh:Math.floor,xe=Se(_e*U.width),ge=Se(_e*U.height);_===void 0&&(_=S(xe,ge));const de=Y?S(xe,ge):_;return de.width=xe,de.height=ge,de.getContext("2d").drawImage(U,0,0,xe,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+xe+"x"+ge+")."),de}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),U;return U}function m(U){return L_(U.width)&&L_(U.height)}function x(U){return c?!1:U.wrapS!==Ni||U.wrapT!==Ni||U.minFilter!==Ln&&U.minFilter!==Hn}function T(U,R){return U.generateMipmaps&&R&&U.minFilter!==Ln&&U.minFilter!==Hn}function y(U){i.generateMipmap(U)}function w(U,R,Y,me,_e=!1){if(c===!1)return R;if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Se=R;if(R===i.RED&&(Y===i.FLOAT&&(Se=i.R32F),Y===i.HALF_FLOAT&&(Se=i.R16F),Y===i.UNSIGNED_BYTE&&(Se=i.R8)),R===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(Se=i.R8UI),Y===i.UNSIGNED_SHORT&&(Se=i.R16UI),Y===i.UNSIGNED_INT&&(Se=i.R32UI),Y===i.BYTE&&(Se=i.R8I),Y===i.SHORT&&(Se=i.R16I),Y===i.INT&&(Se=i.R32I)),R===i.RG&&(Y===i.FLOAT&&(Se=i.RG32F),Y===i.HALF_FLOAT&&(Se=i.RG16F),Y===i.UNSIGNED_BYTE&&(Se=i.RG8)),R===i.RGBA){const xe=_e?Ec:At.getTransfer(me);Y===i.FLOAT&&(Se=i.RGBA32F),Y===i.HALF_FLOAT&&(Se=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(Se=xe===Bt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(Se=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(Se=i.RGB5_A1)}return(Se===i.R16F||Se===i.R32F||Se===i.RG16F||Se===i.RG32F||Se===i.RGBA16F||Se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Se}function P(U,R,Y){return T(U,Y)===!0||U.isFramebufferTexture&&U.minFilter!==Ln&&U.minFilter!==Hn?Math.log2(Math.max(R.width,R.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?R.mipmaps.length:1}function I(U){return U===Ln||U===t_||U===_o?i.NEAREST:i.LINEAR}function L(U){const R=U.target;R.removeEventListener("dispose",L),k(R),R.isVideoTexture&&d.delete(R)}function G(U){const R=U.target;R.removeEventListener("dispose",G),O(R)}function k(U){const R=n.get(U);if(R.__webglInit===void 0)return;const Y=U.source,me=p.get(Y);if(me){const _e=me[R.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&b(U),Object.keys(me).length===0&&p.delete(Y)}n.remove(U)}function b(U){const R=n.get(U);i.deleteTexture(R.__webglTexture);const Y=U.source,me=p.get(Y);delete me[R.__cacheKey],l.memory.textures--}function O(U){const R=U.texture,Y=n.get(U),me=n.get(R);if(me.__webglTexture!==void 0&&(i.deleteTexture(me.__webglTexture),l.memory.textures--),U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(Y.__webglFramebuffer[_e]))for(let Se=0;Se<Y.__webglFramebuffer[_e].length;Se++)i.deleteFramebuffer(Y.__webglFramebuffer[_e][Se]);else i.deleteFramebuffer(Y.__webglFramebuffer[_e]);Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer[_e])}else{if(Array.isArray(Y.__webglFramebuffer))for(let _e=0;_e<Y.__webglFramebuffer.length;_e++)i.deleteFramebuffer(Y.__webglFramebuffer[_e]);else i.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let _e=0;_e<Y.__webglColorRenderbuffer.length;_e++)Y.__webglColorRenderbuffer[_e]&&i.deleteRenderbuffer(Y.__webglColorRenderbuffer[_e]);Y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(U.isWebGLMultipleRenderTargets)for(let _e=0,Se=R.length;_e<Se;_e++){const xe=n.get(R[_e]);xe.__webglTexture&&(i.deleteTexture(xe.__webglTexture),l.memory.textures--),n.remove(R[_e])}n.remove(R),n.remove(U)}let K=0;function ne(){K=0}function z(){const U=K;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),K+=1,U}function $(U){const R=[];return R.push(U.wrapS),R.push(U.wrapT),R.push(U.wrapR||0),R.push(U.magFilter),R.push(U.minFilter),R.push(U.anisotropy),R.push(U.internalFormat),R.push(U.format),R.push(U.type),R.push(U.generateMipmaps),R.push(U.premultiplyAlpha),R.push(U.flipY),R.push(U.unpackAlignment),R.push(U.colorSpace),R.join()}function V(U,R){const Y=n.get(U);if(U.isVideoTexture&&ut(U),U.isRenderTargetTexture===!1&&U.version>0&&Y.__version!==U.version){const me=U.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(Y,U,R);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+R)}function j(U,R){const Y=n.get(U);if(U.version>0&&Y.__version!==U.version){ce(Y,U,R);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+R)}function Q(U,R){const Y=n.get(U);if(U.version>0&&Y.__version!==U.version){ce(Y,U,R);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+R)}function le(U,R){const Y=n.get(U);if(U.version>0&&Y.__version!==U.version){Ae(Y,U,R);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+R)}const oe={[gh]:i.REPEAT,[Ni]:i.CLAMP_TO_EDGE,[vh]:i.MIRRORED_REPEAT},se={[Ln]:i.NEAREST,[t_]:i.NEAREST_MIPMAP_NEAREST,[_o]:i.NEAREST_MIPMAP_LINEAR,[Hn]:i.LINEAR,[uf]:i.LINEAR_MIPMAP_NEAREST,[ys]:i.LINEAR_MIPMAP_LINEAR},he={[xC]:i.NEVER,[TC]:i.ALWAYS,[SC]:i.LESS,[Gv]:i.LEQUAL,[MC]:i.EQUAL,[bC]:i.GEQUAL,[yC]:i.GREATER,[EC]:i.NOTEQUAL};function Ie(U,R,Y){if(R.type===gr&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Hn||R.magFilter===uf||R.magFilter===_o||R.magFilter===ys||R.minFilter===Hn||R.minFilter===uf||R.minFilter===_o||R.minFilter===ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Y?(i.texParameteri(U,i.TEXTURE_WRAP_S,oe[R.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,oe[R.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,oe[R.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,se[R.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,se[R.minFilter])):(i.texParameteri(U,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(U,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(R.wrapS!==Ni||R.wrapT!==Ni)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(U,i.TEXTURE_MAG_FILTER,I(R.magFilter)),i.texParameteri(U,i.TEXTURE_MIN_FILTER,I(R.minFilter)),R.minFilter!==Ln&&R.minFilter!==Hn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),R.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,he[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const me=e.get("EXT_texture_filter_anisotropic");if(R.magFilter===Ln||R.minFilter!==_o&&R.minFilter!==ys||R.type===gr&&e.has("OES_texture_float_linear")===!1||c===!1&&R.type===Po&&e.has("OES_texture_half_float_linear")===!1)return;(R.anisotropy>1||n.get(R).__currentAnisotropy)&&(i.texParameterf(U,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy)}}function Z(U,R){let Y=!1;U.__webglInit===void 0&&(U.__webglInit=!0,R.addEventListener("dispose",L));const me=R.source;let _e=p.get(me);_e===void 0&&(_e={},p.set(me,_e));const Se=$(R);if(Se!==U.__cacheKey){_e[Se]===void 0&&(_e[Se]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,Y=!0),_e[Se].usedTimes++;const xe=_e[U.__cacheKey];xe!==void 0&&(_e[U.__cacheKey].usedTimes--,xe.usedTimes===0&&b(R)),U.__cacheKey=Se,U.__webglTexture=_e[Se].texture}return Y}function ce(U,R,Y){let me=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(me=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(me=i.TEXTURE_3D);const _e=Z(U,R),Se=R.source;t.bindTexture(me,U.__webglTexture,i.TEXTURE0+Y);const xe=n.get(Se);if(Se.version!==xe.__version||_e===!0){t.activeTexture(i.TEXTURE0+Y);const ge=At.getPrimaries(At.workingColorSpace),de=R.colorSpace===bi?null:At.getPrimaries(R.colorSpace),be=R.colorSpace===bi||ge===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ve=x(R)&&m(R.image)===!1;let pe=g(R.image,Ve,!1,r.maxTextureSize);pe=Qe(R,pe);const Ue=m(pe)||c,Me=a.convert(R.format,R.colorSpace);let He=a.convert(R.type),Ge=w(R.internalFormat,Me,He,R.colorSpace,R.isVideoTexture);Ie(me,R,Ue);let Pe;const et=R.mipmaps,vt=c&&R.isVideoTexture!==!0&&Ge!==Bv,Lt=xe.__version===void 0||_e===!0,ht=Se.dataReady,Et=P(R,pe,Ue);if(R.isDepthTexture)Ge=i.DEPTH_COMPONENT,c?R.type===gr?Ge=i.DEPTH_COMPONENT32F:R.type===Hr?Ge=i.DEPTH_COMPONENT24:R.type===bs?Ge=i.DEPTH24_STENCIL8:Ge=i.DEPTH_COMPONENT16:R.type===gr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),R.format===Ts&&Ge===i.DEPTH_COMPONENT&&R.type!==Kh&&R.type!==Hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),R.type=Hr,He=a.convert(R.type)),R.format===Ua&&Ge===i.DEPTH_COMPONENT&&(Ge=i.DEPTH_STENCIL,R.type!==bs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),R.type=bs,He=a.convert(R.type))),Lt&&(vt?t.texStorage2D(i.TEXTURE_2D,1,Ge,pe.width,pe.height):t.texImage2D(i.TEXTURE_2D,0,Ge,pe.width,pe.height,0,Me,He,null));else if(R.isDataTexture)if(et.length>0&&Ue){vt&&Lt&&t.texStorage2D(i.TEXTURE_2D,Et,Ge,et[0].width,et[0].height);for(let N=0,ye=et.length;N<ye;N++)Pe=et[N],vt?ht&&t.texSubImage2D(i.TEXTURE_2D,N,0,0,Pe.width,Pe.height,Me,He,Pe.data):t.texImage2D(i.TEXTURE_2D,N,Ge,Pe.width,Pe.height,0,Me,He,Pe.data);R.generateMipmaps=!1}else vt?(Lt&&t.texStorage2D(i.TEXTURE_2D,Et,Ge,pe.width,pe.height),ht&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe.width,pe.height,Me,He,pe.data)):t.texImage2D(i.TEXTURE_2D,0,Ge,pe.width,pe.height,0,Me,He,pe.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){vt&&Lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Ge,et[0].width,et[0].height,pe.depth);for(let N=0,ye=et.length;N<ye;N++)Pe=et[N],R.format!==Fi?Me!==null?vt?ht&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,N,0,0,0,Pe.width,Pe.height,pe.depth,Me,Pe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,N,Ge,Pe.width,Pe.height,pe.depth,0,Pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?ht&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,N,0,0,0,Pe.width,Pe.height,pe.depth,Me,He,Pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,N,Ge,Pe.width,Pe.height,pe.depth,0,Me,He,Pe.data)}else{vt&&Lt&&t.texStorage2D(i.TEXTURE_2D,Et,Ge,et[0].width,et[0].height);for(let N=0,ye=et.length;N<ye;N++)Pe=et[N],R.format!==Fi?Me!==null?vt?ht&&t.compressedTexSubImage2D(i.TEXTURE_2D,N,0,0,Pe.width,Pe.height,Me,Pe.data):t.compressedTexImage2D(i.TEXTURE_2D,N,Ge,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?ht&&t.texSubImage2D(i.TEXTURE_2D,N,0,0,Pe.width,Pe.height,Me,He,Pe.data):t.texImage2D(i.TEXTURE_2D,N,Ge,Pe.width,Pe.height,0,Me,He,Pe.data)}else if(R.isDataArrayTexture)vt?(Lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Ge,pe.width,pe.height,pe.depth),ht&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Me,He,pe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ge,pe.width,pe.height,pe.depth,0,Me,He,pe.data);else if(R.isData3DTexture)vt?(Lt&&t.texStorage3D(i.TEXTURE_3D,Et,Ge,pe.width,pe.height,pe.depth),ht&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Me,He,pe.data)):t.texImage3D(i.TEXTURE_3D,0,Ge,pe.width,pe.height,pe.depth,0,Me,He,pe.data);else if(R.isFramebufferTexture){if(Lt)if(vt)t.texStorage2D(i.TEXTURE_2D,Et,Ge,pe.width,pe.height);else{let N=pe.width,ye=pe.height;for(let Ee=0;Ee<Et;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,Ge,N,ye,0,Me,He,null),N>>=1,ye>>=1}}else if(et.length>0&&Ue){vt&&Lt&&t.texStorage2D(i.TEXTURE_2D,Et,Ge,et[0].width,et[0].height);for(let N=0,ye=et.length;N<ye;N++)Pe=et[N],vt?ht&&t.texSubImage2D(i.TEXTURE_2D,N,0,0,Me,He,Pe):t.texImage2D(i.TEXTURE_2D,N,Ge,Me,He,Pe);R.generateMipmaps=!1}else vt?(Lt&&t.texStorage2D(i.TEXTURE_2D,Et,Ge,pe.width,pe.height),ht&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,He,pe)):t.texImage2D(i.TEXTURE_2D,0,Ge,Me,He,pe);T(R,Ue)&&y(me),xe.__version=Se.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function Ae(U,R,Y){if(R.image.length!==6)return;const me=Z(U,R),_e=R.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+Y);const Se=n.get(_e);if(_e.version!==Se.__version||me===!0){t.activeTexture(i.TEXTURE0+Y);const xe=At.getPrimaries(At.workingColorSpace),ge=R.colorSpace===bi?null:At.getPrimaries(R.colorSpace),de=R.colorSpace===bi||xe===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const be=R.isCompressedTexture||R.image[0].isCompressedTexture,Ve=R.image[0]&&R.image[0].isDataTexture,pe=[];for(let N=0;N<6;N++)!be&&!Ve?pe[N]=g(R.image[N],!1,!0,r.maxCubemapSize):pe[N]=Ve?R.image[N].image:R.image[N],pe[N]=Qe(R,pe[N]);const Ue=pe[0],Me=m(Ue)||c,He=a.convert(R.format,R.colorSpace),Ge=a.convert(R.type),Pe=w(R.internalFormat,He,Ge,R.colorSpace),et=c&&R.isVideoTexture!==!0,vt=Se.__version===void 0||me===!0,Lt=_e.dataReady;let ht=P(R,Ue,Me);Ie(i.TEXTURE_CUBE_MAP,R,Me);let Et;if(be){et&&vt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Pe,Ue.width,Ue.height);for(let N=0;N<6;N++){Et=pe[N].mipmaps;for(let ye=0;ye<Et.length;ye++){const Ee=Et[ye];R.format!==Fi?He!==null?et?Lt&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,ye,0,0,Ee.width,Ee.height,He,Ee.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,ye,Pe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?Lt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,ye,0,0,Ee.width,Ee.height,He,Ge,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,ye,Pe,Ee.width,Ee.height,0,He,Ge,Ee.data)}}}else{Et=R.mipmaps,et&&vt&&(Et.length>0&&ht++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Pe,pe[0].width,pe[0].height));for(let N=0;N<6;N++)if(Ve){et?Lt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,pe[N].width,pe[N].height,He,Ge,pe[N].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,Pe,pe[N].width,pe[N].height,0,He,Ge,pe[N].data);for(let ye=0;ye<Et.length;ye++){const Oe=Et[ye].image[N].image;et?Lt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,ye+1,0,0,Oe.width,Oe.height,He,Ge,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,ye+1,Pe,Oe.width,Oe.height,0,He,Ge,Oe.data)}}else{et?Lt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,He,Ge,pe[N]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,Pe,He,Ge,pe[N]);for(let ye=0;ye<Et.length;ye++){const Ee=Et[ye];et?Lt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,ye+1,0,0,He,Ge,Ee.image[N]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,ye+1,Pe,He,Ge,Ee.image[N])}}}T(R,Me)&&y(i.TEXTURE_CUBE_MAP),Se.__version=_e.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function ke(U,R,Y,me,_e,Se){const xe=a.convert(Y.format,Y.colorSpace),ge=a.convert(Y.type),de=w(Y.internalFormat,xe,ge,Y.colorSpace);if(!n.get(R).__hasExternalTextures){const Ve=Math.max(1,R.width>>Se),pe=Math.max(1,R.height>>Se);_e===i.TEXTURE_3D||_e===i.TEXTURE_2D_ARRAY?t.texImage3D(_e,Se,de,Ve,pe,R.depth,0,xe,ge,null):t.texImage2D(_e,Se,de,Ve,pe,0,xe,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),ze(R)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,_e,n.get(Y).__webglTexture,0,Xe(R)):(_e===i.TEXTURE_2D||_e>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,me,_e,n.get(Y).__webglTexture,Se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(U,R,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,U),R.depthBuffer&&!R.stencilBuffer){let me=c===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Y||ze(R)){const _e=R.depthTexture;_e&&_e.isDepthTexture&&(_e.type===gr?me=i.DEPTH_COMPONENT32F:_e.type===Hr&&(me=i.DEPTH_COMPONENT24));const Se=Xe(R);ze(R)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,me,R.width,R.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,me,R.width,R.height)}else i.renderbufferStorage(i.RENDERBUFFER,me,R.width,R.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,U)}else if(R.depthBuffer&&R.stencilBuffer){const me=Xe(R);Y&&ze(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,i.DEPTH24_STENCIL8,R.width,R.height):ze(R)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,i.DEPTH24_STENCIL8,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,U)}else{const me=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let _e=0;_e<me.length;_e++){const Se=me[_e],xe=a.convert(Se.format,Se.colorSpace),ge=a.convert(Se.type),de=w(Se.internalFormat,xe,ge,Se.colorSpace),be=Xe(R);Y&&ze(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,de,R.width,R.height):ze(R)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,de,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,de,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(U,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),V(R.depthTexture,0);const me=n.get(R.depthTexture).__webglTexture,_e=Xe(R);if(R.depthTexture.format===Ts)ze(R)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,me,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,me,0);else if(R.depthTexture.format===Ua)ze(R)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,me,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function qe(U){const R=n.get(U),Y=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!R.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Ce(R.__webglFramebuffer,U)}else if(Y){R.__webglDepthbuffer=[];for(let me=0;me<6;me++)t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[me]),R.__webglDepthbuffer[me]=i.createRenderbuffer(),Be(R.__webglDepthbuffer[me],U,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=i.createRenderbuffer(),Be(R.__webglDepthbuffer,U,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(U,R,Y){const me=n.get(U);R!==void 0&&ke(me.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&qe(U)}function X(U){const R=U.texture,Y=n.get(U),me=n.get(R);U.addEventListener("dispose",G),U.isWebGLMultipleRenderTargets!==!0&&(me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture()),me.__version=R.version,l.memory.textures++);const _e=U.isWebGLCubeRenderTarget===!0,Se=U.isWebGLMultipleRenderTargets===!0,xe=m(U)||c;if(_e){Y.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(c&&R.mipmaps&&R.mipmaps.length>0){Y.__webglFramebuffer[ge]=[];for(let de=0;de<R.mipmaps.length;de++)Y.__webglFramebuffer[ge][de]=i.createFramebuffer()}else Y.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(c&&R.mipmaps&&R.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ge=0;ge<R.mipmaps.length;ge++)Y.__webglFramebuffer[ge]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Se)if(r.drawBuffers){const ge=U.texture;for(let de=0,be=ge.length;de<be;de++){const Ve=n.get(ge[de]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=i.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&U.samples>0&&ze(U)===!1){const ge=Se?R:[R];Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let de=0;de<ge.length;de++){const be=ge[de];Y.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[de]);const Ve=a.convert(be.format,be.colorSpace),pe=a.convert(be.type),Ue=w(be.internalFormat,Ve,pe,be.colorSpace,U.isXRRenderTarget===!0),Me=Xe(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,Ue,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,Y.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Be(Y.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_e){t.bindTexture(i.TEXTURE_CUBE_MAP,me.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,R,xe);for(let ge=0;ge<6;ge++)if(c&&R.mipmaps&&R.mipmaps.length>0)for(let de=0;de<R.mipmaps.length;de++)ke(Y.__webglFramebuffer[ge][de],U,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,de);else ke(Y.__webglFramebuffer[ge],U,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);T(R,xe)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){const ge=U.texture;for(let de=0,be=ge.length;de<be;de++){const Ve=ge[de],pe=n.get(Ve);t.bindTexture(i.TEXTURE_2D,pe.__webglTexture),Ie(i.TEXTURE_2D,Ve,xe),ke(Y.__webglFramebuffer,U,Ve,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),T(Ve,xe)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(c?ge=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ge,me.__webglTexture),Ie(ge,R,xe),c&&R.mipmaps&&R.mipmaps.length>0)for(let de=0;de<R.mipmaps.length;de++)ke(Y.__webglFramebuffer[de],U,R,i.COLOR_ATTACHMENT0,ge,de);else ke(Y.__webglFramebuffer,U,R,i.COLOR_ATTACHMENT0,ge,0);T(R,xe)&&y(ge),t.unbindTexture()}U.depthBuffer&&qe(U)}function Vt(U){const R=m(U)||c,Y=U.isWebGLMultipleRenderTargets===!0?U.texture:[U.texture];for(let me=0,_e=Y.length;me<_e;me++){const Se=Y[me];if(T(Se,R)){const xe=U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ge=n.get(Se).__webglTexture;t.bindTexture(xe,ge),y(xe),t.unbindTexture()}}}function Le(U){if(c&&U.samples>0&&ze(U)===!1){const R=U.isWebGLMultipleRenderTargets?U.texture:[U.texture],Y=U.width,me=U.height;let _e=i.COLOR_BUFFER_BIT;const Se=[],xe=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(U),de=U.isWebGLMultipleRenderTargets===!0;if(de)for(let be=0;be<R.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let be=0;be<R.length;be++){Se.push(i.COLOR_ATTACHMENT0+be),U.depthBuffer&&Se.push(xe);const Ve=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(Ve===!1&&(U.depthBuffer&&(_e|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&(_e|=i.STENCIL_BUFFER_BIT)),de&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[be]),Ve===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[xe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[xe])),de){const pe=n.get(R[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pe,0)}i.blitFramebuffer(0,0,Y,me,0,0,Y,me,_e,i.NEAREST),h&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Se)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let be=0;be<R.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,ge.__webglColorRenderbuffer[be]);const Ve=n.get(R[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,Ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function Xe(U){return Math.min(r.maxSamples,U.samples)}function ze(U){const R=n.get(U);return c&&U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function ut(U){const R=l.render.frame;d.get(U)!==R&&(d.set(U,R),U.update())}function Qe(U,R){const Y=U.colorSpace,me=U.format,_e=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||U.format===xh||Y!==xr&&Y!==bi&&(At.getTransfer(Y)===Bt?c===!1?e.has("EXT_sRGB")===!0&&me===Fi?(U.format=xh,U.minFilter=Hn,U.generateMipmaps=!1):R=kv.sRGBToLinear(R):(me!==Fi||_e!==qr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),R}this.allocateTextureUnit=z,this.resetTextureUnits=ne,this.setTexture2D=V,this.setTexture2DArray=j,this.setTexture3D=Q,this.setTextureCube=le,this.rebindTextures=Je,this.setupRenderTarget=X,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=ze}function RI(i,e,t){const n=t.isWebGL2;function r(a,l=bi){let c;const u=At.getTransfer(l);if(a===qr)return i.UNSIGNED_BYTE;if(a===Iv)return i.UNSIGNED_SHORT_4_4_4_4;if(a===Uv)return i.UNSIGNED_SHORT_5_5_5_1;if(a===oC)return i.BYTE;if(a===lC)return i.SHORT;if(a===Kh)return i.UNSIGNED_SHORT;if(a===Dv)return i.INT;if(a===Hr)return i.UNSIGNED_INT;if(a===gr)return i.FLOAT;if(a===Po)return n?i.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(a===cC)return i.ALPHA;if(a===Fi)return i.RGBA;if(a===uC)return i.LUMINANCE;if(a===fC)return i.LUMINANCE_ALPHA;if(a===Ts)return i.DEPTH_COMPONENT;if(a===Ua)return i.DEPTH_STENCIL;if(a===xh)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(a===hC)return i.RED;if(a===Ov)return i.RED_INTEGER;if(a===dC)return i.RG;if(a===Nv)return i.RG_INTEGER;if(a===Fv)return i.RGBA_INTEGER;if(a===ff||a===hf||a===df||a===pf)if(u===Bt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===ff)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===hf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===df)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===pf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===ff)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===hf)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===df)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===pf)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===n_||a===i_||a===r_||a===s_)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===n_)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===i_)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===r_)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===s_)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Bv)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===a_||a===o_)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===a_)return u===Bt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===o_)return u===Bt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===l_||a===c_||a===u_||a===f_||a===h_||a===d_||a===p_||a===m_||a===__||a===g_||a===v_||a===x_||a===S_||a===M_)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===l_)return u===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===c_)return u===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===u_)return u===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===f_)return u===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===h_)return u===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===d_)return u===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===p_)return u===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===m_)return u===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===__)return u===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===g_)return u===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===v_)return u===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===x_)return u===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===S_)return u===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===M_)return u===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===mf||a===y_||a===E_)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===mf)return u===Bt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===y_)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===E_)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===pC||a===b_||a===T_||a===w_)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===mf)return c.COMPRESSED_RED_RGTC1_EXT;if(a===b_)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===T_)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===w_)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===bs?n?i.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:r}}class CI extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ac extends oi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const LI={type:"move"};class Gf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ac,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ac,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ac,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,l=null;const c=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){l=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),x=this._getHandJoint(h,g);m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=m.radius),x.visible=m!==null}const d=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],p=d.position.distanceTo(_.position),v=.02,S=.005;h.inputState.pinching&&p>v+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&p<=v-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1));c!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(LI)))}return c!==null&&(c.visible=r!==null),u!==null&&(u.visible=a!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ac;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const PI=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DI=`
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

}`;class II{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Dn,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new Sr({extensions:{fragDepth:!0},vertexShader:PI,fragmentShader:DI,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $i(new $o(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class UI extends Ha{constructor(e,t){super();const n=this;let r=null,a=1,l=null,c="local-floor",u=1,h=null,d=null,_=null,p=null,v=null,S=null;const g=new II,m=t.getContextAttributes();let x=null,T=null;const y=[],w=[],P=new yt;let I=null;const L=new yi;L.layers.enable(1),L.viewport=new _n;const G=new yi;G.layers.enable(2),G.viewport=new _n;const k=[L,G],b=new CI;b.layers.enable(1),b.layers.enable(2);let O=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ce=y[Z];return ce===void 0&&(ce=new Gf,y[Z]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Z){let ce=y[Z];return ce===void 0&&(ce=new Gf,y[Z]=ce),ce.getGripSpace()},this.getHand=function(Z){let ce=y[Z];return ce===void 0&&(ce=new Gf,y[Z]=ce),ce.getHandSpace()};function ne(Z){const ce=w.indexOf(Z.inputSource);if(ce===-1)return;const Ae=y[ce];Ae!==void 0&&(Ae.update(Z.inputSource,Z.frame,h||l),Ae.dispatchEvent({type:Z.type,data:Z.inputSource}))}function z(){r.removeEventListener("select",ne),r.removeEventListener("selectstart",ne),r.removeEventListener("selectend",ne),r.removeEventListener("squeeze",ne),r.removeEventListener("squeezestart",ne),r.removeEventListener("squeezeend",ne),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",$);for(let Z=0;Z<y.length;Z++){const ce=w[Z];ce!==null&&(w[Z]=null,y[Z].disconnect(ce))}O=null,K=null,g.reset(),e.setRenderTarget(x),v=null,p=null,_=null,r=null,T=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){c=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(Z){h=Z},this.getBaseLayer=function(){return p!==null?p:v},this.getBinding=function(){return _},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",ne),r.addEventListener("selectstart",ne),r.addEventListener("selectend",ne),r.addEventListener("squeeze",ne),r.addEventListener("squeezestart",ne),r.addEventListener("squeezeend",ne),r.addEventListener("end",z),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ce={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),T=new Ds(v.framebufferWidth,v.framebufferHeight,{format:Fi,type:qr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ce=null,Ae=null,ke=null;m.depth&&(ke=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=m.stencil?Ua:Ts,Ae=m.stencil?bs:Hr);const Be={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:a};_=new XRWebGLBinding(r,t),p=_.createProjectionLayer(Be),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),T=new Ds(p.textureWidth,p.textureHeight,{format:Fi,type:qr,depthTexture:new t0(p.textureWidth,p.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const Ce=e.properties.get(T);Ce.__ignoreDepthValues=p.ignoreDepthValues}T.isXRRenderTarget=!0,this.setFoveation(u),h=null,l=await r.requestReferenceSpace(c),Ie.setContext(r),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function $(Z){for(let ce=0;ce<Z.removed.length;ce++){const Ae=Z.removed[ce],ke=w.indexOf(Ae);ke>=0&&(w[ke]=null,y[ke].disconnect(Ae))}for(let ce=0;ce<Z.added.length;ce++){const Ae=Z.added[ce];let ke=w.indexOf(Ae);if(ke===-1){for(let Ce=0;Ce<y.length;Ce++)if(Ce>=w.length){w.push(Ae),ke=Ce;break}else if(w[Ce]===null){w[Ce]=Ae,ke=Ce;break}if(ke===-1)break}const Be=y[ke];Be&&Be.connect(Ae)}}const V=new ie,j=new ie;function Q(Z,ce,Ae){V.setFromMatrixPosition(ce.matrixWorld),j.setFromMatrixPosition(Ae.matrixWorld);const ke=V.distanceTo(j),Be=ce.projectionMatrix.elements,Ce=Ae.projectionMatrix.elements,qe=Be[14]/(Be[10]-1),Je=Be[14]/(Be[10]+1),X=(Be[9]+1)/Be[5],Vt=(Be[9]-1)/Be[5],Le=(Be[8]-1)/Be[0],Xe=(Ce[8]+1)/Ce[0],ze=qe*Le,ut=qe*Xe,Qe=ke/(-Le+Xe),U=Qe*-Le;ce.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(U),Z.translateZ(Qe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const R=qe+Qe,Y=Je+Qe,me=ze-U,_e=ut+(ke-U),Se=X*Je/Y*R,xe=Vt*Je/Y*R;Z.projectionMatrix.makePerspective(me,_e,Se,xe,R,Y),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function le(Z,ce){ce===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ce.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;g.texture!==null&&(Z.near=g.depthNear,Z.far=g.depthFar),b.near=G.near=L.near=Z.near,b.far=G.far=L.far=Z.far,(O!==b.near||K!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),O=b.near,K=b.far,L.near=O,L.far=K,G.near=O,G.far=K,L.updateProjectionMatrix(),G.updateProjectionMatrix(),Z.updateProjectionMatrix());const ce=Z.parent,Ae=b.cameras;le(b,ce);for(let ke=0;ke<Ae.length;ke++)le(Ae[ke],ce);Ae.length===2?Q(b,L,G):b.projectionMatrix.copy(L.projectionMatrix),oe(Z,b,ce)};function oe(Z,ce,Ae){Ae===null?Z.matrix.copy(ce.matrixWorld):(Z.matrix.copy(Ae.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ce.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Sh*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&v===null))return u},this.setFoveation=function(Z){u=Z,p!==null&&(p.fixedFoveation=Z),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null};let se=null;function he(Z,ce){if(d=ce.getViewerPose(h||l),S=ce,d!==null){const Ae=d.views;v!==null&&(e.setRenderTargetFramebuffer(T,v.framebuffer),e.setRenderTarget(T));let ke=!1;Ae.length!==b.cameras.length&&(b.cameras.length=0,ke=!0);for(let Ce=0;Ce<Ae.length;Ce++){const qe=Ae[Ce];let Je=null;if(v!==null)Je=v.getViewport(qe);else{const Vt=_.getViewSubImage(p,qe);Je=Vt.viewport,Ce===0&&(e.setRenderTargetTextures(T,Vt.colorTexture,p.ignoreDepthValues?void 0:Vt.depthStencilTexture),e.setRenderTarget(T))}let X=k[Ce];X===void 0&&(X=new yi,X.layers.enable(Ce),X.viewport=new _n,k[Ce]=X),X.matrix.fromArray(qe.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(qe.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(Je.x,Je.y,Je.width,Je.height),Ce===0&&(b.matrix.copy(X.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ke===!0&&b.cameras.push(X)}const Be=r.enabledFeatures;if(Be&&Be.includes("depth-sensing")){const Ce=_.getDepthInformation(Ae[0]);Ce&&Ce.isValid&&Ce.texture&&g.init(e,Ce,r.renderState)}}for(let Ae=0;Ae<y.length;Ae++){const ke=w[Ae],Be=y[Ae];ke!==null&&Be!==void 0&&Be.update(ke,ce,h||l)}g.render(e,b),se&&se(Z,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),S=null}const Ie=new e0;Ie.setAnimationLoop(he),this.setAnimationLoop=function(Z){se=Z},this.dispose=function(){}}}function OI(i,e){function t(m,x){m.matrixAutoUpdate===!0&&m.updateMatrix(),x.value.copy(m.matrix)}function n(m,x){x.color.getRGB(m.fogColor.value,Zv(i)),x.isFog?(m.fogNear.value=x.near,m.fogFar.value=x.far):x.isFogExp2&&(m.fogDensity.value=x.density)}function r(m,x,T,y,w){x.isMeshBasicMaterial||x.isMeshLambertMaterial?a(m,x):x.isMeshToonMaterial?(a(m,x),_(m,x)):x.isMeshPhongMaterial?(a(m,x),d(m,x)):x.isMeshStandardMaterial?(a(m,x),p(m,x),x.isMeshPhysicalMaterial&&v(m,x,w)):x.isMeshMatcapMaterial?(a(m,x),S(m,x)):x.isMeshDepthMaterial?a(m,x):x.isMeshDistanceMaterial?(a(m,x),g(m,x)):x.isMeshNormalMaterial?a(m,x):x.isLineBasicMaterial?(l(m,x),x.isLineDashedMaterial&&c(m,x)):x.isPointsMaterial?u(m,x,T,y):x.isSpriteMaterial?h(m,x):x.isShadowMaterial?(m.color.value.copy(x.color),m.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(m,x){m.opacity.value=x.opacity,x.color&&m.diffuse.value.copy(x.color),x.emissive&&m.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(m.map.value=x.map,t(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.bumpMap&&(m.bumpMap.value=x.bumpMap,t(x.bumpMap,m.bumpMapTransform),m.bumpScale.value=x.bumpScale,x.side===Wn&&(m.bumpScale.value*=-1)),x.normalMap&&(m.normalMap.value=x.normalMap,t(x.normalMap,m.normalMapTransform),m.normalScale.value.copy(x.normalScale),x.side===Wn&&m.normalScale.value.negate()),x.displacementMap&&(m.displacementMap.value=x.displacementMap,t(x.displacementMap,m.displacementMapTransform),m.displacementScale.value=x.displacementScale,m.displacementBias.value=x.displacementBias),x.emissiveMap&&(m.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,m.emissiveMapTransform)),x.specularMap&&(m.specularMap.value=x.specularMap,t(x.specularMap,m.specularMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest);const T=e.get(x).envMap;if(T&&(m.envMap.value=T,m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=x.reflectivity,m.ior.value=x.ior,m.refractionRatio.value=x.refractionRatio),x.lightMap){m.lightMap.value=x.lightMap;const y=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=x.lightMapIntensity*y,t(x.lightMap,m.lightMapTransform)}x.aoMap&&(m.aoMap.value=x.aoMap,m.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,m.aoMapTransform))}function l(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,x.map&&(m.map.value=x.map,t(x.map,m.mapTransform))}function c(m,x){m.dashSize.value=x.dashSize,m.totalSize.value=x.dashSize+x.gapSize,m.scale.value=x.scale}function u(m,x,T,y){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.size.value=x.size*T,m.scale.value=y*.5,x.map&&(m.map.value=x.map,t(x.map,m.uvTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function h(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.rotation.value=x.rotation,x.map&&(m.map.value=x.map,t(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function d(m,x){m.specular.value.copy(x.specular),m.shininess.value=Math.max(x.shininess,1e-4)}function _(m,x){x.gradientMap&&(m.gradientMap.value=x.gradientMap)}function p(m,x){m.metalness.value=x.metalness,x.metalnessMap&&(m.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,m.metalnessMapTransform)),m.roughness.value=x.roughness,x.roughnessMap&&(m.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,m.roughnessMapTransform)),e.get(x).envMap&&(m.envMapIntensity.value=x.envMapIntensity)}function v(m,x,T){m.ior.value=x.ior,x.sheen>0&&(m.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),m.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(m.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,m.sheenColorMapTransform)),x.sheenRoughnessMap&&(m.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,m.sheenRoughnessMapTransform))),x.clearcoat>0&&(m.clearcoat.value=x.clearcoat,m.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(m.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,m.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(m.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Wn&&m.clearcoatNormalScale.value.negate())),x.iridescence>0&&(m.iridescence.value=x.iridescence,m.iridescenceIOR.value=x.iridescenceIOR,m.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(m.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,m.iridescenceMapTransform)),x.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),x.transmission>0&&(m.transmission.value=x.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),x.transmissionMap&&(m.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,m.transmissionMapTransform)),m.thickness.value=x.thickness,x.thicknessMap&&(m.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=x.attenuationDistance,m.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(m.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(m.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=x.specularIntensity,m.specularColor.value.copy(x.specularColor),x.specularColorMap&&(m.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,m.specularColorMapTransform)),x.specularIntensityMap&&(m.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,m.specularIntensityMapTransform))}function S(m,x){x.matcap&&(m.matcap.value=x.matcap)}function g(m,x){const T=e.get(x).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function NI(i,e,t,n){let r={},a={},l=[];const c=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function u(T,y){const w=y.program;n.uniformBlockBinding(T,w)}function h(T,y){let w=r[T.id];w===void 0&&(S(T),w=d(T),r[T.id]=w,T.addEventListener("dispose",m));const P=y.program;n.updateUBOMapping(T,P);const I=e.render.frame;a[T.id]!==I&&(p(T),a[T.id]=I)}function d(T){const y=_();T.__bindingPointIndex=y;const w=i.createBuffer(),P=T.__size,I=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,P,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,w),w}function _(){for(let T=0;T<c;T++)if(l.indexOf(T)===-1)return l.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(T){const y=r[T.id],w=T.uniforms,P=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let I=0,L=w.length;I<L;I++){const G=Array.isArray(w[I])?w[I]:[w[I]];for(let k=0,b=G.length;k<b;k++){const O=G[k];if(v(O,I,k,P)===!0){const K=O.__offset,ne=Array.isArray(O.value)?O.value:[O.value];let z=0;for(let $=0;$<ne.length;$++){const V=ne[$],j=g(V);typeof V=="number"||typeof V=="boolean"?(O.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,K+z,O.__data)):V.isMatrix3?(O.__data[0]=V.elements[0],O.__data[1]=V.elements[1],O.__data[2]=V.elements[2],O.__data[3]=0,O.__data[4]=V.elements[3],O.__data[5]=V.elements[4],O.__data[6]=V.elements[5],O.__data[7]=0,O.__data[8]=V.elements[6],O.__data[9]=V.elements[7],O.__data[10]=V.elements[8],O.__data[11]=0):(V.toArray(O.__data,z),z+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,K,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(T,y,w,P){const I=T.value,L=y+"_"+w;if(P[L]===void 0)return typeof I=="number"||typeof I=="boolean"?P[L]=I:P[L]=I.clone(),!0;{const G=P[L];if(typeof I=="number"||typeof I=="boolean"){if(G!==I)return P[L]=I,!0}else if(G.equals(I)===!1)return G.copy(I),!0}return!1}function S(T){const y=T.uniforms;let w=0;const P=16;for(let L=0,G=y.length;L<G;L++){const k=Array.isArray(y[L])?y[L]:[y[L]];for(let b=0,O=k.length;b<O;b++){const K=k[b],ne=Array.isArray(K.value)?K.value:[K.value];for(let z=0,$=ne.length;z<$;z++){const V=ne[z],j=g(V),Q=w%P;Q!==0&&P-Q<j.boundary&&(w+=P-Q),K.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=w,w+=j.storage}}}const I=w%P;return I>0&&(w+=P-I),T.__size=w,T.__cache={},this}function g(T){const y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function m(T){const y=T.target;y.removeEventListener("dispose",m);const w=l.indexOf(y.__bindingPointIndex);l.splice(w,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete a[y.id]}function x(){for(const T in r)i.deleteBuffer(r[T]);l=[],r={},a={}}return{bind:u,update:h,dispose:x}}class o0{constructor(e={}){const{canvas:t=AC(),context:n=null,depth:r=!0,stencil:a=!0,alpha:l=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=l;const v=new Uint32Array(4),S=new Int32Array(4);let g=null,m=null;const x=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this._useLegacyLights=!1,this.toneMapping=$r,this.toneMappingExposure=1;const y=this;let w=!1,P=0,I=0,L=null,G=-1,k=null;const b=new _n,O=new _n;let K=null;const ne=new Rt(0);let z=0,$=t.width,V=t.height,j=1,Q=null,le=null;const oe=new _n(0,0,$,V),se=new _n(0,0,$,V);let he=!1;const Ie=new Qv;let Z=!1,ce=!1,Ae=null;const ke=new gn,Be=new yt,Ce=new ie,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Je(){return L===null?j:1}let X=n;function Vt(D,q){for(let ee=0;ee<D.length;ee++){const re=D[ee],J=t.getContext(re,q);if(J!==null)return J}return null}try{const D={alpha:!0,depth:r,stencil:a,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yh}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",ye,!1),X===null){const q=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&q.shift(),X=Vt(q,D),X===null)throw Vt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Le,Xe,ze,ut,Qe,U,R,Y,me,_e,Se,xe,ge,de,be,Ve,pe,Ue,Me,He,Ge,Pe,et,vt;function Lt(){Le=new V2(X),Xe=new N2(X,Le,e),Le.init(Xe),Pe=new RI(X,Le,Xe),ze=new wI(X,Le,Xe),ut=new $2(X),Qe=new hI,U=new AI(X,Le,ze,Qe,Xe,Pe,ut),R=new B2(y),Y=new k2(y),me=new QC(X,Xe),et=new U2(X,Le,me,Xe),_e=new W2(X,me,ut,et),Se=new Z2(X,_e,me,ut),Me=new K2(X,Xe,U),Ve=new F2(Qe),xe=new fI(y,R,Y,Le,Xe,et,Ve),ge=new OI(y,Qe),de=new pI,be=new SI(Le,Xe),Ue=new I2(y,R,Y,ze,Se,p,u),pe=new TI(y,Se,Xe),vt=new NI(X,ut,Xe,ze),He=new O2(X,Le,ut,Xe),Ge=new X2(X,Le,ut,Xe),ut.programs=xe.programs,y.capabilities=Xe,y.extensions=Le,y.properties=Qe,y.renderLists=de,y.shadowMap=pe,y.state=ze,y.info=ut}Lt();const ht=new UI(y,X);this.xr=ht,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const D=Le.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Le.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(D){D!==void 0&&(j=D,this.setSize($,V,!1))},this.getSize=function(D){return D.set($,V)},this.setSize=function(D,q,ee=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=D,V=q,t.width=Math.floor(D*j),t.height=Math.floor(q*j),ee===!0&&(t.style.width=D+"px",t.style.height=q+"px"),this.setViewport(0,0,D,q)},this.getDrawingBufferSize=function(D){return D.set($*j,V*j).floor()},this.setDrawingBufferSize=function(D,q,ee){$=D,V=q,j=ee,t.width=Math.floor(D*ee),t.height=Math.floor(q*ee),this.setViewport(0,0,D,q)},this.getCurrentViewport=function(D){return D.copy(b)},this.getViewport=function(D){return D.copy(oe)},this.setViewport=function(D,q,ee,re){D.isVector4?oe.set(D.x,D.y,D.z,D.w):oe.set(D,q,ee,re),ze.viewport(b.copy(oe).multiplyScalar(j).floor())},this.getScissor=function(D){return D.copy(se)},this.setScissor=function(D,q,ee,re){D.isVector4?se.set(D.x,D.y,D.z,D.w):se.set(D,q,ee,re),ze.scissor(O.copy(se).multiplyScalar(j).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(D){ze.setScissorTest(he=D)},this.setOpaqueSort=function(D){Q=D},this.setTransparentSort=function(D){le=D},this.getClearColor=function(D){return D.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(D=!0,q=!0,ee=!0){let re=0;if(D){let J=!1;if(L!==null){const Re=L.texture.format;J=Re===Fv||Re===Nv||Re===Ov}if(J){const Re=L.texture.type,Ne=Re===qr||Re===Hr||Re===Kh||Re===bs||Re===Iv||Re===Uv,Ye=Ue.getClearColor(),Ke=Ue.getClearAlpha(),st=Ye.r,tt=Ye.g,it=Ye.b;Ne?(v[0]=st,v[1]=tt,v[2]=it,v[3]=Ke,X.clearBufferuiv(X.COLOR,0,v)):(S[0]=st,S[1]=tt,S[2]=it,S[3]=Ke,X.clearBufferiv(X.COLOR,0,S))}else re|=X.COLOR_BUFFER_BIT}q&&(re|=X.DEPTH_BUFFER_BIT),ee&&(re|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),de.dispose(),be.dispose(),Qe.dispose(),R.dispose(),Y.dispose(),Se.dispose(),et.dispose(),vt.dispose(),xe.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",In),ht.removeEventListener("sessionend",wt),Ae&&(Ae.dispose(),Ae=null),nn.stop()};function Et(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const D=ut.autoReset,q=pe.enabled,ee=pe.autoUpdate,re=pe.needsUpdate,J=pe.type;Lt(),ut.autoReset=D,pe.enabled=q,pe.autoUpdate=ee,pe.needsUpdate=re,pe.type=J}function ye(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Ee(D){const q=D.target;q.removeEventListener("dispose",Ee),Oe(q)}function Oe(D){We(D),Qe.remove(D)}function We(D){const q=Qe.get(D).programs;q!==void 0&&(q.forEach(function(ee){xe.releaseProgram(ee)}),D.isShaderMaterial&&xe.releaseShaderCache(D))}this.renderBufferDirect=function(D,q,ee,re,J,Re){q===null&&(q=qe);const Ne=J.isMesh&&J.matrixWorld.determinant()<0,Ye=Qc(D,q,ee,re,J);ze.setMaterial(re,Ne);let Ke=ee.index,st=1;if(re.wireframe===!0){if(Ke=_e.getWireframeAttribute(ee),Ke===void 0)return;st=2}const tt=ee.drawRange,it=ee.attributes.position;let Gt=tt.start*st,vn=(tt.start+tt.count)*st;Re!==null&&(Gt=Math.max(Gt,Re.start*st),vn=Math.min(vn,(Re.start+Re.count)*st)),Ke!==null?(Gt=Math.max(Gt,0),vn=Math.min(vn,Ke.count)):it!=null&&(Gt=Math.max(Gt,0),vn=Math.min(vn,it.count));const Kt=vn-Gt;if(Kt<0||Kt===1/0)return;et.setup(J,re,Ye,ee,Ke);let Ri,Ot=He;if(Ke!==null&&(Ri=me.get(Ke),Ot=Ge,Ot.setIndex(Ri)),J.isMesh)re.wireframe===!0?(ze.setLineWidth(re.wireframeLinewidth*Je()),Ot.setMode(X.LINES)):Ot.setMode(X.TRIANGLES);else if(J.isLine){let ot=re.linewidth;ot===void 0&&(ot=1),ze.setLineWidth(ot*Je()),J.isLineSegments?Ot.setMode(X.LINES):J.isLineLoop?Ot.setMode(X.LINE_LOOP):Ot.setMode(X.LINE_STRIP)}else J.isPoints?Ot.setMode(X.POINTS):J.isSprite&&Ot.setMode(X.TRIANGLES);if(J.isBatchedMesh)Ot.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)Ot.renderInstances(Gt,Kt,J.count);else if(ee.isInstancedBufferGeometry){const ot=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Za=Math.min(ee.instanceCount,ot);Ot.renderInstances(Gt,Kt,Za)}else Ot.render(Gt,Kt)};function xt(D,q,ee){D.transparent===!0&&D.side===_r&&D.forceSinglePass===!1?(D.side=Wn,D.needsUpdate=!0,Gs(D,q,ee),D.side=Zr,D.needsUpdate=!0,Gs(D,q,ee),D.side=_r):Gs(D,q,ee)}this.compile=function(D,q,ee=null){ee===null&&(ee=D),m=be.get(ee),m.init(),T.push(m),ee.traverseVisible(function(J){J.isLight&&J.layers.test(q.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),D!==ee&&D.traverseVisible(function(J){J.isLight&&J.layers.test(q.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),m.setupLights(y._useLegacyLights);const re=new Set;return D.traverse(function(J){const Re=J.material;if(Re)if(Array.isArray(Re))for(let Ne=0;Ne<Re.length;Ne++){const Ye=Re[Ne];xt(Ye,ee,J),re.add(Ye)}else xt(Re,ee,J),re.add(Re)}),T.pop(),m=null,re},this.compileAsync=function(D,q,ee=null){const re=this.compile(D,q,ee);return new Promise(J=>{function Re(){if(re.forEach(function(Ne){Qe.get(Ne).currentProgram.isReady()&&re.delete(Ne)}),re.size===0){J(D);return}setTimeout(Re,10)}Le.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let bt=null;function tn(D){bt&&bt(D)}function In(){nn.stop()}function wt(){nn.start()}const nn=new e0;nn.setAnimationLoop(tn),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(D){bt=D,ht.setAnimationLoop(D),D===null?nn.stop():nn.start()},ht.addEventListener("sessionstart",In),ht.addEventListener("sessionend",wt),this.render=function(D,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(q),q=ht.getCamera()),D.isScene===!0&&D.onBeforeRender(y,D,q,L),m=be.get(D,T.length),m.init(),T.push(m),ke.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ie.setFromProjectionMatrix(ke),ce=this.localClippingEnabled,Z=Ve.init(this.clippingPlanes,ce),g=de.get(D,x.length),g.init(),x.push(g),ui(D,q,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(Q,le),this.info.render.frame++,Z===!0&&Ve.beginShadows();const ee=m.state.shadowsArray;if(pe.render(ee,D,q),Z===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1)&&Ue.render(g,D),m.setupLights(y._useLegacyLights),q.isArrayCamera){const re=q.cameras;for(let J=0,Re=re.length;J<Re;J++){const Ne=re[J];Bs(g,D,Ne,Ne.viewport)}}else Bs(g,D,q);L!==null&&(U.updateMultisampleRenderTarget(L),U.updateRenderTargetMipmap(L)),D.isScene===!0&&D.onAfterRender(y,D,q),et.resetDefaultState(),G=-1,k=null,T.pop(),T.length>0?m=T[T.length-1]:m=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function ui(D,q,ee,re){if(D.visible===!1)return;if(D.layers.test(q.layers)){if(D.isGroup)ee=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(q);else if(D.isLight)m.pushLight(D),D.castShadow&&m.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Ie.intersectsSprite(D)){re&&Ce.setFromMatrixPosition(D.matrixWorld).applyMatrix4(ke);const Ne=Se.update(D),Ye=D.material;Ye.visible&&g.push(D,Ne,Ye,ee,Ce.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Ie.intersectsObject(D))){const Ne=Se.update(D),Ye=D.material;if(re&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Ce.copy(D.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Ce.copy(Ne.boundingSphere.center)),Ce.applyMatrix4(D.matrixWorld).applyMatrix4(ke)),Array.isArray(Ye)){const Ke=Ne.groups;for(let st=0,tt=Ke.length;st<tt;st++){const it=Ke[st],Gt=Ye[it.materialIndex];Gt&&Gt.visible&&g.push(D,Ne,Gt,ee,Ce.z,it)}}else Ye.visible&&g.push(D,Ne,Ye,ee,Ce.z,null)}}const Re=D.children;for(let Ne=0,Ye=Re.length;Ne<Ye;Ne++)ui(Re[Ne],q,ee,re)}function Bs(D,q,ee,re){const J=D.opaque,Re=D.transmissive,Ne=D.transparent;m.setupLightsView(ee),Z===!0&&Ve.setGlobalState(y.clippingPlanes,ee),Re.length>0&&Jc(J,Re,q,ee),re&&ze.viewport(b.copy(re)),J.length>0&&zs(J,q,ee),Re.length>0&&zs(Re,q,ee),Ne.length>0&&zs(Ne,q,ee),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function Jc(D,q,ee,re){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;const Re=Xe.isWebGL2;Ae===null&&(Ae=new Ds(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")?Po:qr,minFilter:ys,samples:Re?4:0})),y.getDrawingBufferSize(Be),Re?Ae.setSize(Be.x,Be.y):Ae.setSize(Mh(Be.x),Mh(Be.y));const Ne=y.getRenderTarget();y.setRenderTarget(Ae),y.getClearColor(ne),z=y.getClearAlpha(),z<1&&y.setClearColor(16777215,.5),y.clear();const Ye=y.toneMapping;y.toneMapping=$r,zs(D,ee,re),U.updateMultisampleRenderTarget(Ae),U.updateRenderTargetMipmap(Ae);let Ke=!1;for(let st=0,tt=q.length;st<tt;st++){const it=q[st],Gt=it.object,vn=it.geometry,Kt=it.material,Ri=it.group;if(Kt.side===_r&&Gt.layers.test(re.layers)){const Ot=Kt.side;Kt.side=Wn,Kt.needsUpdate=!0,Yo(Gt,ee,re,vn,Kt,Ri),Kt.side=Ot,Kt.needsUpdate=!0,Ke=!0}}Ke===!0&&(U.updateMultisampleRenderTarget(Ae),U.updateRenderTargetMipmap(Ae)),y.setRenderTarget(Ne),y.setClearColor(ne,z),y.toneMapping=Ye}function zs(D,q,ee){const re=q.isScene===!0?q.overrideMaterial:null;for(let J=0,Re=D.length;J<Re;J++){const Ne=D[J],Ye=Ne.object,Ke=Ne.geometry,st=re===null?Ne.material:re,tt=Ne.group;Ye.layers.test(ee.layers)&&Yo(Ye,q,ee,Ke,st,tt)}}function Yo(D,q,ee,re,J,Re){D.onBeforeRender(y,q,ee,re,J,Re),D.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),J.onBeforeRender(y,q,ee,re,D,Re),J.transparent===!0&&J.side===_r&&J.forceSinglePass===!1?(J.side=Wn,J.needsUpdate=!0,y.renderBufferDirect(ee,q,re,J,D,Re),J.side=Zr,J.needsUpdate=!0,y.renderBufferDirect(ee,q,re,J,D,Re),J.side=_r):y.renderBufferDirect(ee,q,re,J,D,Re),D.onAfterRender(y,q,ee,re,J,Re)}function Gs(D,q,ee){q.isScene!==!0&&(q=qe);const re=Qe.get(D),J=m.state.lights,Re=m.state.shadowsArray,Ne=J.state.version,Ye=xe.getParameters(D,J.state,Re,q,ee),Ke=xe.getProgramCacheKey(Ye);let st=re.programs;re.environment=D.isMeshStandardMaterial?q.environment:null,re.fog=q.fog,re.envMap=(D.isMeshStandardMaterial?Y:R).get(D.envMap||re.environment),st===void 0&&(D.addEventListener("dispose",Ee),st=new Map,re.programs=st);let tt=st.get(Ke);if(tt!==void 0){if(re.currentProgram===tt&&re.lightsStateVersion===Ne)return Zo(D,Ye),tt}else Ye.uniforms=xe.getUniforms(D),D.onBuild(ee,Ye,y),D.onBeforeCompile(Ye,y),tt=xe.acquireProgram(Ye,Ke),st.set(Ke,tt),re.uniforms=Ye.uniforms;const it=re.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(it.clippingPlanes=Ve.uniform),Zo(D,Ye),re.needsLights=jo(D),re.lightsStateVersion=Ne,re.needsLights&&(it.ambientLightColor.value=J.state.ambient,it.lightProbe.value=J.state.probe,it.directionalLights.value=J.state.directional,it.directionalLightShadows.value=J.state.directionalShadow,it.spotLights.value=J.state.spot,it.spotLightShadows.value=J.state.spotShadow,it.rectAreaLights.value=J.state.rectArea,it.ltc_1.value=J.state.rectAreaLTC1,it.ltc_2.value=J.state.rectAreaLTC2,it.pointLights.value=J.state.point,it.pointLightShadows.value=J.state.pointShadow,it.hemisphereLights.value=J.state.hemi,it.directionalShadowMap.value=J.state.directionalShadowMap,it.directionalShadowMatrix.value=J.state.directionalShadowMatrix,it.spotShadowMap.value=J.state.spotShadowMap,it.spotLightMatrix.value=J.state.spotLightMatrix,it.spotLightMap.value=J.state.spotLightMap,it.pointShadowMap.value=J.state.pointShadowMap,it.pointShadowMatrix.value=J.state.pointShadowMatrix),re.currentProgram=tt,re.uniformsList=null,tt}function Ko(D){if(D.uniformsList===null){const q=D.currentProgram.getUniforms();D.uniformsList=mc.seqWithValue(q.seq,D.uniforms)}return D.uniformsList}function Zo(D,q){const ee=Qe.get(D);ee.outputColorSpace=q.outputColorSpace,ee.batching=q.batching,ee.instancing=q.instancing,ee.instancingColor=q.instancingColor,ee.skinning=q.skinning,ee.morphTargets=q.morphTargets,ee.morphNormals=q.morphNormals,ee.morphColors=q.morphColors,ee.morphTargetsCount=q.morphTargetsCount,ee.numClippingPlanes=q.numClippingPlanes,ee.numIntersection=q.numClipIntersection,ee.vertexAlphas=q.vertexAlphas,ee.vertexTangents=q.vertexTangents,ee.toneMapping=q.toneMapping}function Qc(D,q,ee,re,J){q.isScene!==!0&&(q=qe),U.resetTextureUnits();const Re=q.fog,Ne=re.isMeshStandardMaterial?q.environment:null,Ye=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:xr,Ke=(re.isMeshStandardMaterial?Y:R).get(re.envMap||Ne),st=re.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,tt=!!ee.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),it=!!ee.morphAttributes.position,Gt=!!ee.morphAttributes.normal,vn=!!ee.morphAttributes.color;let Kt=$r;re.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Kt=y.toneMapping);const Ri=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Ot=Ri!==void 0?Ri.length:0,ot=Qe.get(re),Za=m.state.lights;if(Z===!0&&(ce===!0||D!==k)){const Un=D===k&&re.id===G;Ve.setState(re,D,Un)}let Nt=!1;re.version===ot.__version?(ot.needsLights&&ot.lightsStateVersion!==Za.state.version||ot.outputColorSpace!==Ye||J.isBatchedMesh&&ot.batching===!1||!J.isBatchedMesh&&ot.batching===!0||J.isInstancedMesh&&ot.instancing===!1||!J.isInstancedMesh&&ot.instancing===!0||J.isSkinnedMesh&&ot.skinning===!1||!J.isSkinnedMesh&&ot.skinning===!0||J.isInstancedMesh&&ot.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&ot.instancingColor===!1&&J.instanceColor!==null||ot.envMap!==Ke||re.fog===!0&&ot.fog!==Re||ot.numClippingPlanes!==void 0&&(ot.numClippingPlanes!==Ve.numPlanes||ot.numIntersection!==Ve.numIntersection)||ot.vertexAlphas!==st||ot.vertexTangents!==tt||ot.morphTargets!==it||ot.morphNormals!==Gt||ot.morphColors!==vn||ot.toneMapping!==Kt||Xe.isWebGL2===!0&&ot.morphTargetsCount!==Ot)&&(Nt=!0):(Nt=!0,ot.__version=re.version);let Bi=ot.currentProgram;Nt===!0&&(Bi=Gs(re,q,J));let ja=!1,Ji=!1,Ja=!1;const rn=Bi.getUniforms(),fi=ot.uniforms;if(ze.useProgram(Bi.program)&&(ja=!0,Ji=!0,Ja=!0),re.id!==G&&(G=re.id,Ji=!0),ja||k!==D){rn.setValue(X,"projectionMatrix",D.projectionMatrix),rn.setValue(X,"viewMatrix",D.matrixWorldInverse);const Un=rn.map.cameraPosition;Un!==void 0&&Un.setValue(X,Ce.setFromMatrixPosition(D.matrixWorld)),Xe.logarithmicDepthBuffer&&rn.setValue(X,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&rn.setValue(X,"isOrthographic",D.isOrthographicCamera===!0),k!==D&&(k=D,Ji=!0,Ja=!0)}if(J.isSkinnedMesh){rn.setOptional(X,J,"bindMatrix"),rn.setOptional(X,J,"bindMatrixInverse");const Un=J.skeleton;Un&&(Xe.floatVertexTextures?(Un.boneTexture===null&&Un.computeBoneTexture(),rn.setValue(X,"boneTexture",Un.boneTexture,U)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}J.isBatchedMesh&&(rn.setOptional(X,J,"batchingTexture"),rn.setValue(X,"batchingTexture",J._matricesTexture,U));const Hs=ee.morphAttributes;if((Hs.position!==void 0||Hs.normal!==void 0||Hs.color!==void 0&&Xe.isWebGL2===!0)&&Me.update(J,ee,Bi),(Ji||ot.receiveShadow!==J.receiveShadow)&&(ot.receiveShadow=J.receiveShadow,rn.setValue(X,"receiveShadow",J.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(fi.envMap.value=Ke,fi.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),Ji&&(rn.setValue(X,"toneMappingExposure",y.toneMappingExposure),ot.needsLights&&eu(fi,Ja),Re&&re.fog===!0&&ge.refreshFogUniforms(fi,Re),ge.refreshMaterialUniforms(fi,re,j,V,Ae),mc.upload(X,Ko(ot),fi,U)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(mc.upload(X,Ko(ot),fi,U),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&rn.setValue(X,"center",J.center),rn.setValue(X,"modelViewMatrix",J.modelViewMatrix),rn.setValue(X,"normalMatrix",J.normalMatrix),rn.setValue(X,"modelMatrix",J.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const Un=re.uniformsGroups;for(let ks=0,Jo=Un.length;ks<Jo;ks++)if(Xe.isWebGL2){const Vs=Un[ks];vt.update(Vs,Bi),vt.bind(Vs,Bi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bi}function eu(D,q){D.ambientLightColor.needsUpdate=q,D.lightProbe.needsUpdate=q,D.directionalLights.needsUpdate=q,D.directionalLightShadows.needsUpdate=q,D.pointLights.needsUpdate=q,D.pointLightShadows.needsUpdate=q,D.spotLights.needsUpdate=q,D.spotLightShadows.needsUpdate=q,D.rectAreaLights.needsUpdate=q,D.hemisphereLights.needsUpdate=q}function jo(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(D,q,ee){Qe.get(D.texture).__webglTexture=q,Qe.get(D.depthTexture).__webglTexture=ee;const re=Qe.get(D);re.__hasExternalTextures=!0,re.__hasExternalTextures&&(re.__autoAllocateDepthBuffer=ee===void 0,re.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,q){const ee=Qe.get(D);ee.__webglFramebuffer=q,ee.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(D,q=0,ee=0){L=D,P=q,I=ee;let re=!0,J=null,Re=!1,Ne=!1;if(D){const Ke=Qe.get(D);Ke.__useDefaultFramebuffer!==void 0?(ze.bindFramebuffer(X.FRAMEBUFFER,null),re=!1):Ke.__webglFramebuffer===void 0?U.setupRenderTarget(D):Ke.__hasExternalTextures&&U.rebindTextures(D,Qe.get(D.texture).__webglTexture,Qe.get(D.depthTexture).__webglTexture);const st=D.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(Ne=!0);const tt=Qe.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(tt[q])?J=tt[q][ee]:J=tt[q],Re=!0):Xe.isWebGL2&&D.samples>0&&U.useMultisampledRTT(D)===!1?J=Qe.get(D).__webglMultisampledFramebuffer:Array.isArray(tt)?J=tt[ee]:J=tt,b.copy(D.viewport),O.copy(D.scissor),K=D.scissorTest}else b.copy(oe).multiplyScalar(j).floor(),O.copy(se).multiplyScalar(j).floor(),K=he;if(ze.bindFramebuffer(X.FRAMEBUFFER,J)&&Xe.drawBuffers&&re&&ze.drawBuffers(D,J),ze.viewport(b),ze.scissor(O),ze.setScissorTest(K),Re){const Ke=Qe.get(D.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ke.__webglTexture,ee)}else if(Ne){const Ke=Qe.get(D.texture),st=q||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ke.__webglTexture,ee||0,st)}G=-1},this.readRenderTargetPixels=function(D,q,ee,re,J,Re,Ne){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=Qe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ye=Ye[Ne]),Ye){ze.bindFramebuffer(X.FRAMEBUFFER,Ye);try{const Ke=D.texture,st=Ke.format,tt=Ke.type;if(st!==Fi&&Pe.convert(st)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const it=tt===Po&&(Le.has("EXT_color_buffer_half_float")||Xe.isWebGL2&&Le.has("EXT_color_buffer_float"));if(tt!==qr&&Pe.convert(tt)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(tt===gr&&(Xe.isWebGL2||Le.has("OES_texture_float")||Le.has("WEBGL_color_buffer_float")))&&!it){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=D.width-re&&ee>=0&&ee<=D.height-J&&X.readPixels(q,ee,re,J,Pe.convert(st),Pe.convert(tt),Re)}finally{const Ke=L!==null?Qe.get(L).__webglFramebuffer:null;ze.bindFramebuffer(X.FRAMEBUFFER,Ke)}}},this.copyFramebufferToTexture=function(D,q,ee=0){const re=Math.pow(2,-ee),J=Math.floor(q.image.width*re),Re=Math.floor(q.image.height*re);U.setTexture2D(q,0),X.copyTexSubImage2D(X.TEXTURE_2D,ee,0,0,D.x,D.y,J,Re),ze.unbindTexture()},this.copyTextureToTexture=function(D,q,ee,re=0){const J=q.image.width,Re=q.image.height,Ne=Pe.convert(ee.format),Ye=Pe.convert(ee.type);U.setTexture2D(ee,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,ee.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,ee.unpackAlignment),q.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,re,D.x,D.y,J,Re,Ne,Ye,q.image.data):q.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,re,D.x,D.y,q.mipmaps[0].width,q.mipmaps[0].height,Ne,q.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,re,D.x,D.y,Ne,Ye,q.image),re===0&&ee.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),ze.unbindTexture()},this.copyTextureToTexture3D=function(D,q,ee,re,J=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=D.max.x-D.min.x+1,Ne=D.max.y-D.min.y+1,Ye=D.max.z-D.min.z+1,Ke=Pe.convert(re.format),st=Pe.convert(re.type);let tt;if(re.isData3DTexture)U.setTexture3D(re,0),tt=X.TEXTURE_3D;else if(re.isDataArrayTexture||re.isCompressedArrayTexture)U.setTexture2DArray(re,0),tt=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,re.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,re.unpackAlignment);const it=X.getParameter(X.UNPACK_ROW_LENGTH),Gt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),vn=X.getParameter(X.UNPACK_SKIP_PIXELS),Kt=X.getParameter(X.UNPACK_SKIP_ROWS),Ri=X.getParameter(X.UNPACK_SKIP_IMAGES),Ot=ee.isCompressedTexture?ee.mipmaps[J]:ee.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,Ot.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ot.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,D.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,D.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,D.min.z),ee.isDataTexture||ee.isData3DTexture?X.texSubImage3D(tt,J,q.x,q.y,q.z,Re,Ne,Ye,Ke,st,Ot.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(tt,J,q.x,q.y,q.z,Re,Ne,Ye,Ke,Ot.data)):X.texSubImage3D(tt,J,q.x,q.y,q.z,Re,Ne,Ye,Ke,st,Ot),X.pixelStorei(X.UNPACK_ROW_LENGTH,it),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Gt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,vn),X.pixelStorei(X.UNPACK_SKIP_ROWS,Kt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Ri),J===0&&re.generateMipmaps&&X.generateMipmap(tt),ze.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?U.setTextureCube(D,0):D.isData3DTexture?U.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?U.setTexture2DArray(D,0):U.setTexture2D(D,0),ze.unbindTexture()},this.resetState=function(){P=0,I=0,L=null,ze.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Zh?"display-p3":"srgb",t.unpackColorSpace=At.workingColorSpace===zc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===mn?ws:zv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ws?mn:xr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class FI extends o0{}FI.prototype.isWebGL1Renderer=!0;class BI extends oi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class zI extends Sr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}const gg={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class GI{constructor(e,t,n){const r=this;let a=!1,l=0,c=0,u;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){c++,a===!1&&r.onStart!==void 0&&r.onStart(d,l,c),a=!0},this.itemEnd=function(d){l++,r.onProgress!==void 0&&r.onProgress(d,l,c),l===c&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return u?u(d):d},this.setURLModifier=function(d){return u=d,this},this.addHandler=function(d,_){return h.push(d,_),this},this.removeHandler=function(d){const _=h.indexOf(d);return _!==-1&&h.splice(_,2),this},this.getHandler=function(d){for(let _=0,p=h.length;_<p;_+=2){const v=h[_],S=h[_+1];if(v.global&&(v.lastIndex=0),v.test(d))return S}return null}}}const HI=new GI;class Qh{constructor(e){this.manager=e!==void 0?e:HI,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Qh.DEFAULT_MATERIAL_NAME="__DEFAULT";class kI extends Qh{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,l=gg.get(e);if(l!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(l),a.manager.itemEnd(e)},0),l;const c=Do("img");function u(){d(),gg.add(e,this),t&&t(this),a.manager.itemEnd(e)}function h(_){d(),r&&r(_),a.manager.itemError(e),a.manager.itemEnd(e)}function d(){c.removeEventListener("load",u,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",u,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),a.manager.itemStart(e),c.src=e,c}}class Hf extends Qh{constructor(e){super(e)}load(e,t,n,r){const a=new Dn,l=new kI(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(c){a.image=c,a.needsUpdate=!0,t!==void 0&&t(a)},n,r),a}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yh);function pr(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function l0(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var li={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Na={duration:.5,overwrite:!1,delay:0},ed,bn,kt,Ti=1e8,Ut=1/Ti,Eh=Math.PI*2,VI=Eh/4,WI=0,c0=Math.sqrt,XI=Math.cos,$I=Math.sin,hn=function(e){return typeof e=="string"},Yt=function(e){return typeof e=="function"},Mr=function(e){return typeof e=="number"},td=function(e){return typeof e>"u"},Zi=function(e){return typeof e=="object"},Xn=function(e){return e!==!1},nd=function(){return typeof window<"u"},oc=function(e){return Yt(e)||hn(e)},u0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Tn=Array.isArray,bh=/(?:-?\.?\d|\.)+/gi,f0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ea=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,kf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,h0=/[+-]=-?[.\d]+/,d0=/[^,'"\[\]\s]+/gi,qI=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Xt,ki,Th,id,ci={},Ac={},p0,m0=function(e){return(Ac=Is(e,ci))&&Kn},rd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Io=function(e,t){return!t&&console.warn(e)},_0=function(e,t){return e&&(ci[e]=t)&&Ac&&(Ac[e]=t)||ci},Uo=function(){return 0},YI={suppressEvents:!0,isStart:!0,kill:!1},_c={suppressEvents:!0,kill:!1},KI={suppressEvents:!0},sd={},Yr=[],wh={},g0,ri={},Vf={},vg=30,gc=[],ad="",od=function(e){var t=e[0],n,r;if(Zi(t)||Yt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=gc.length;r--&&!gc[r].targetTest(t););n=gc[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new H0(e[r],n)))||e.splice(r,1);return e},Rs=function(e){return e._gsap||od(wi(e))[0]._gsap},v0=function(e,t,n){return(n=e[t])&&Yt(n)?e[t]():td(n)&&e.getAttribute&&e.getAttribute(t)||n},$n=function(e,t){return(e=e.split(",")).forEach(t)||e},Jt=function(e){return Math.round(e*1e5)/1e5||0},fn=function(e){return Math.round(e*1e7)/1e7||0},Ra=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},ZI=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Rc=function(){var e=Yr.length,t=Yr.slice(0),n,r;for(wh={},Yr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},x0=function(e,t,n,r){Yr.length&&!bn&&Rc(),e.render(t,n,r||bn&&t<0&&(e._initted||e._startAt)),Yr.length&&!bn&&Rc()},S0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(d0).length<2?t:hn(e)?e.trim():e},M0=function(e){return e},Ai=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},jI=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Is=function(e,t){for(var n in t)e[n]=t[n];return e},xg=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Zi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Cc=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Ao=function(e){var t=e.parent||Xt,n=e.keyframes?jI(Tn(e.keyframes)):Ai;if(Xn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},JI=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},y0=function(e,t,n,r,a){n===void 0&&(n="_first"),r===void 0&&(r="_last");var l=e[r],c;if(a)for(c=t[a];l&&l[a]>c;)l=l._prev;return l?(t._next=l._next,l._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=l,t.parent=t._dp=e,t},Vc=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var a=t._prev,l=t._next;a?a._next=l:e[n]===t&&(e[n]=l),l?l._prev=a:e[r]===t&&(e[r]=a),t._next=t._prev=t.parent=null},jr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Cs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},QI=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ah=function(e,t,n,r){return e._startAt&&(bn?e._startAt.revert(_c):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},eU=function i(e){return!e||e._ts&&i(e.parent)},Sg=function(e){return e._repeat?Fa(e._tTime,e=e.duration()+e._rDelay)*e:0},Fa=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Lc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Wc=function(e){return e._end=fn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ut)||0))},Xc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=fn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Wc(e),n._dirty||Cs(n,e)),e},E0=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Lc(e.rawTime(),t),(!t._dur||qo(0,t.totalDuration(),n)-t._tTime>Ut)&&t.render(n,!0)),Cs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ut}},Xi=function(e,t,n,r){return t.parent&&jr(t),t._start=fn((Mr(n)?n:n||e!==Xt?Mi(e,n,t):e._time)+t._delay),t._end=fn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),y0(e,t,"_first","_last",e._sort?"_start":0),Rh(t)||(e._recent=t),r||E0(e,t),e._ts<0&&Xc(e,e._tTime),e},b0=function(e,t){return(ci.ScrollTrigger||rd("scrollTrigger",t))&&ci.ScrollTrigger.create(t,e)},T0=function(e,t,n,r,a){if(cd(e,t,a),!e._initted)return 1;if(!n&&e._pt&&!bn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&g0!==si.frame)return Yr.push(e),e._lazy=[a,r],1},tU=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Rh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},nU=function(e,t,n,r){var a=e.ratio,l=t<0||!t&&(!e._start&&tU(e)&&!(!e._initted&&Rh(e))||(e._ts<0||e._dp._ts<0)&&!Rh(e))?0:1,c=e._rDelay,u=0,h,d,_;if(c&&e._repeat&&(u=qo(0,e._tDur,t),d=Fa(u,c),e._yoyo&&d&1&&(l=1-l),d!==Fa(e._tTime,c)&&(a=1-l,e.vars.repeatRefresh&&e._initted&&e.invalidate())),l!==a||bn||r||e._zTime===Ut||!t&&e._zTime){if(!e._initted&&T0(e,t,r,n,u))return;for(_=e._zTime,e._zTime=t||(n?Ut:0),n||(n=t&&!_),e.ratio=l,e._from&&(l=1-l),e._time=0,e._tTime=u,h=e._pt;h;)h.r(l,h.d),h=h._next;t<0&&Ah(e,t,n,!0),e._onUpdate&&!n&&ai(e,"onUpdate"),u&&e._repeat&&!n&&e.parent&&ai(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===l&&(l&&jr(e,1),!n&&!bn&&(ai(e,l?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},iU=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ba=function(e,t,n,r){var a=e._repeat,l=fn(t)||0,c=e._tTime/e._tDur;return c&&!r&&(e._time*=l/e._dur),e._dur=l,e._tDur=a?a<0?1e10:fn(l*(a+1)+e._rDelay*a):l,c>0&&!r&&Xc(e,e._tTime=e._tDur*c),e.parent&&Wc(e),n||Cs(e.parent,e),e},Mg=function(e){return e instanceof Pn?Cs(e):Ba(e,e._dur)},rU={_start:0,endTime:Uo,totalDuration:Uo},Mi=function i(e,t,n){var r=e.labels,a=e._recent||rU,l=e.duration()>=Ti?a.endTime(!1):e._dur,c,u,h;return hn(t)&&(isNaN(t)||t in r)?(u=t.charAt(0),h=t.substr(-1)==="%",c=t.indexOf("="),u==="<"||u===">"?(c>=0&&(t=t.replace(/=/,"")),(u==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(c<0?a:n).totalDuration()/100:1)):c<0?(t in r||(r[t]=l),r[t]):(u=parseFloat(t.charAt(c-1)+t.substr(c+1)),h&&n&&(u=u/100*(Tn(n)?n[0]:n).totalDuration()),c>1?i(e,t.substr(0,c-1),n)+u:l+u)):t==null?l:+t},Ro=function(e,t,n){var r=Mr(t[1]),a=(r?2:1)+(e<2?0:1),l=t[a],c,u;if(r&&(l.duration=t[1]),l.parent=n,e){for(c=l,u=n;u&&!("immediateRender"in c);)c=u.vars.defaults||{},u=Xn(u.vars.inherit)&&u.parent;l.immediateRender=Xn(c.immediateRender),e<2?l.runBackwards=1:l.startAt=t[a-1]}return new en(t[0],l,t[a+1])},Qr=function(e,t){return e||e===0?t(e):t},qo=function(e,t,n){return n<e?e:n>t?t:n},En=function(e,t){return!hn(e)||!(t=qI.exec(e))?"":t[1]},sU=function(e,t,n){return Qr(n,function(r){return qo(e,t,r)})},Ch=[].slice,w0=function(e,t){return e&&Zi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Zi(e[0]))&&!e.nodeType&&e!==ki},aU=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var a;return hn(r)&&!t||w0(r,1)?(a=n).push.apply(a,wi(r)):n.push(r)})||n},wi=function(e,t,n){return kt&&!t&&kt.selector?kt.selector(e):hn(e)&&!n&&(Th||!za())?Ch.call((t||id).querySelectorAll(e),0):Tn(e)?aU(e,n):w0(e)?Ch.call(e,0):e?[e]:[]},Lh=function(e){return e=wi(e)[0]||Io("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return wi(t,n.querySelectorAll?n:n===e?Io("Invalid scope")||id.createElement("div"):e)}},A0=function(e){return e.sort(function(){return .5-Math.random()})},R0=function(e){if(Yt(e))return e;var t=Zi(e)?e:{each:e},n=Ls(t.ease),r=t.from||0,a=parseFloat(t.base)||0,l={},c=r>0&&r<1,u=isNaN(r)||c,h=t.axis,d=r,_=r;return hn(r)?d=_={center:.5,edges:.5,end:1}[r]||0:!c&&u&&(d=r[0],_=r[1]),function(p,v,S){var g=(S||t).length,m=l[g],x,T,y,w,P,I,L,G,k;if(!m){if(k=t.grid==="auto"?0:(t.grid||[1,Ti])[1],!k){for(L=-Ti;L<(L=S[k++].getBoundingClientRect().left)&&k<g;);k<g&&k--}for(m=l[g]=[],x=u?Math.min(k,g)*d-.5:r%k,T=k===Ti?0:u?g*_/k-.5:r/k|0,L=0,G=Ti,I=0;I<g;I++)y=I%k-x,w=T-(I/k|0),m[I]=P=h?Math.abs(h==="y"?w:y):c0(y*y+w*w),P>L&&(L=P),P<G&&(G=P);r==="random"&&A0(m),m.max=L-G,m.min=G,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(k>g?g-1:h?h==="y"?g/k:k:Math.max(k,g/k))||0)*(r==="edges"?-1:1),m.b=g<0?a-g:a,m.u=En(t.amount||t.each)||0,n=n&&g<0?B0(n):n}return g=(m[p]-m.min)/m.max||0,fn(m.b+(n?n(g):g)*m.v)+m.u}},Ph=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=fn(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Mr(n)?0:En(n))}},C0=function(e,t){var n=Tn(e),r,a;return!n&&Zi(e)&&(r=n=e.radius||Ti,e.values?(e=wi(e.values),(a=!Mr(e[0]))&&(r*=r)):e=Ph(e.increment)),Qr(t,n?Yt(e)?function(l){return a=e(l),Math.abs(a-l)<=r?a:l}:function(l){for(var c=parseFloat(a?l.x:l),u=parseFloat(a?l.y:0),h=Ti,d=0,_=e.length,p,v;_--;)a?(p=e[_].x-c,v=e[_].y-u,p=p*p+v*v):p=Math.abs(e[_]-c),p<h&&(h=p,d=_);return d=!r||h<=r?e[d]:l,a||d===l||Mr(l)?d:d+En(l)}:Ph(e))},L0=function(e,t,n,r){return Qr(Tn(e)?!t:n===!0?!!(n=0):!r,function(){return Tn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},oU=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(a,l){return l(a)},r)}},lU=function(e,t){return function(n){return e(parseFloat(n))+(t||En(n))}},cU=function(e,t,n){return D0(e,t,0,1,n)},P0=function(e,t,n){return Qr(n,function(r){return e[~~t(r)]})},uU=function i(e,t,n){var r=t-e;return Tn(e)?P0(e,i(0,e.length),t):Qr(n,function(a){return(r+(a-e)%r)%r+e})},fU=function i(e,t,n){var r=t-e,a=r*2;return Tn(e)?P0(e,i(0,e.length-1),t):Qr(n,function(l){return l=(a+(l-e)%a)%a||0,e+(l>r?a-l:l)})},Oo=function(e){for(var t=0,n="",r,a,l,c;~(r=e.indexOf("random(",t));)l=e.indexOf(")",r),c=e.charAt(r+7)==="[",a=e.substr(r+7,l-r-7).match(c?d0:bh),n+=e.substr(t,r-t)+L0(c?a:+a[0],c?0:+a[1],+a[2]||1e-5),t=l+1;return n+e.substr(t,e.length-t)},D0=function(e,t,n,r,a){var l=t-e,c=r-n;return Qr(a,function(u){return n+((u-e)/l*c||0)})},hU=function i(e,t,n,r){var a=isNaN(e+t)?0:function(v){return(1-v)*e+v*t};if(!a){var l=hn(e),c={},u,h,d,_,p;if(n===!0&&(r=1)&&(n=null),l)e={p:e},t={p:t};else if(Tn(e)&&!Tn(t)){for(d=[],_=e.length,p=_-2,h=1;h<_;h++)d.push(i(e[h-1],e[h]));_--,a=function(S){S*=_;var g=Math.min(p,~~S);return d[g](S-g)},n=t}else r||(e=Is(Tn(e)?[]:{},e));if(!d){for(u in t)ld.call(c,e,u,"get",t[u]);a=function(S){return hd(S,c)||(l?e.p:e)}}}return Qr(n,a)},yg=function(e,t,n){var r=e.labels,a=Ti,l,c,u;for(l in r)c=r[l]-t,c<0==!!n&&c&&a>(c=Math.abs(c))&&(u=l,a=c);return u},ai=function(e,t,n){var r=e.vars,a=r[t],l=kt,c=e._ctx,u,h,d;if(a)return u=r[t+"Params"],h=r.callbackScope||e,n&&Yr.length&&Rc(),c&&(kt=c),d=u?a.apply(h,u):a.call(h),kt=l,d},To=function(e){return jr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!bn),e.progress()<1&&ai(e,"onInterrupt"),e},ba,I0=[],U0=function(e){if(e)if(e=!e.name&&e.default||e,nd()||e.headless){var t=e.name,n=Yt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,a={init:Uo,render:hd,add:ld,kill:RU,modifier:AU,rawVars:0},l={targetTest:0,get:0,getSetter:fd,aliases:{},register:0};if(za(),e!==r){if(ri[t])return;Ai(r,Ai(Cc(e,a),l)),Is(r.prototype,Is(a,Cc(e,l))),ri[r.prop=t]=r,e.targetTest&&(gc.push(r),sd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}_0(t,r),e.register&&e.register(Kn,r,qn)}else I0.push(e)},Dt=255,wo={aqua:[0,Dt,Dt],lime:[0,Dt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Dt],navy:[0,0,128],white:[Dt,Dt,Dt],olive:[128,128,0],yellow:[Dt,Dt,0],orange:[Dt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Dt,0,0],pink:[Dt,192,203],cyan:[0,Dt,Dt],transparent:[Dt,Dt,Dt,0]},Wf=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Dt+.5|0},O0=function(e,t,n){var r=e?Mr(e)?[e>>16,e>>8&Dt,e&Dt]:0:wo.black,a,l,c,u,h,d,_,p,v,S;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),wo[e])r=wo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),l=e.charAt(2),c=e.charAt(3),e="#"+a+a+l+l+c+c+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Dt,r&Dt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Dt,e&Dt]}else if(e.substr(0,3)==="hsl"){if(r=S=e.match(bh),!t)u=+r[0]%360/360,h=+r[1]/100,d=+r[2]/100,l=d<=.5?d*(h+1):d+h-d*h,a=d*2-l,r.length>3&&(r[3]*=1),r[0]=Wf(u+1/3,a,l),r[1]=Wf(u,a,l),r[2]=Wf(u-1/3,a,l);else if(~e.indexOf("="))return r=e.match(f0),n&&r.length<4&&(r[3]=1),r}else r=e.match(bh)||wo.transparent;r=r.map(Number)}return t&&!S&&(a=r[0]/Dt,l=r[1]/Dt,c=r[2]/Dt,_=Math.max(a,l,c),p=Math.min(a,l,c),d=(_+p)/2,_===p?u=h=0:(v=_-p,h=d>.5?v/(2-_-p):v/(_+p),u=_===a?(l-c)/v+(l<c?6:0):_===l?(c-a)/v+2:(a-l)/v+4,u*=60),r[0]=~~(u+.5),r[1]=~~(h*100+.5),r[2]=~~(d*100+.5)),n&&r.length<4&&(r[3]=1),r},N0=function(e){var t=[],n=[],r=-1;return e.split(Kr).forEach(function(a){var l=a.match(Ea)||[];t.push.apply(t,l),n.push(r+=l.length+1)}),t.c=n,t},Eg=function(e,t,n){var r="",a=(e+r).match(Kr),l=t?"hsla(":"rgba(",c=0,u,h,d,_;if(!a)return e;if(a=a.map(function(p){return(p=O0(p,t,1))&&l+(t?p[0]+","+p[1]+"%,"+p[2]+"%,"+p[3]:p.join(","))+")"}),n&&(d=N0(e),u=n.c,u.join(r)!==d.c.join(r)))for(h=e.replace(Kr,"1").split(Ea),_=h.length-1;c<_;c++)r+=h[c]+(~u.indexOf(c)?a.shift()||l+"0,0,0,0)":(d.length?d:a.length?a:n).shift());if(!h)for(h=e.split(Kr),_=h.length-1;c<_;c++)r+=h[c]+a[c];return r+h[_]},Kr=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in wo)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),dU=/hsl[a]?\(/,F0=function(e){var t=e.join(" "),n;if(Kr.lastIndex=0,Kr.test(t))return n=dU.test(t),e[1]=Eg(e[1],n),e[0]=Eg(e[0],n,N0(e[1])),!0},No,si=function(){var i=Date.now,e=500,t=33,n=i(),r=n,a=1e3/240,l=a,c=[],u,h,d,_,p,v,S=function g(m){var x=i()-r,T=m===!0,y,w,P,I;if((x>e||x<0)&&(n+=x-t),r+=x,P=r-n,y=P-l,(y>0||T)&&(I=++_.frame,p=P-_.time*1e3,_.time=P=P/1e3,l+=y+(y>=a?4:a-y),w=1),T||(u=h(g)),w)for(v=0;v<c.length;v++)c[v](P,p,I,m)};return _={time:0,frame:0,tick:function(){S(!0)},deltaRatio:function(m){return p/(1e3/(m||60))},wake:function(){p0&&(!Th&&nd()&&(ki=Th=window,id=ki.document||{},ci.gsap=Kn,(ki.gsapVersions||(ki.gsapVersions=[])).push(Kn.version),m0(Ac||ki.GreenSockGlobals||!ki.gsap&&ki||{}),I0.forEach(U0)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,u&&_.sleep(),h=d||function(m){return setTimeout(m,l-_.time*1e3+1|0)},No=1,S(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(u),No=0,h=Uo},lagSmoothing:function(m,x){e=m||1/0,t=Math.min(x||33,e)},fps:function(m){a=1e3/(m||240),l=_.time*1e3+a},add:function(m,x,T){var y=x?function(w,P,I,L){m(w,P,I,L),_.remove(y)}:m;return _.remove(m),c[T?"unshift":"push"](y),za(),y},remove:function(m,x){~(x=c.indexOf(m))&&c.splice(x,1)&&v>=x&&v--},_listeners:c},_}(),za=function(){return!No&&si.wake()},gt={},pU=/^[\d.\-M][\d.\-,\s]/,mU=/["']/g,_U=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],a=1,l=n.length,c,u,h;a<l;a++)u=n[a],c=a!==l-1?u.lastIndexOf(","):u.length,h=u.substr(0,c),t[r]=isNaN(h)?h.replace(mU,"").trim():+h,r=u.substr(c+1).trim();return t},gU=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},vU=function(e){var t=(e+"").split("("),n=gt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[_U(t[1])]:gU(e).split(",").map(S0)):gt._CE&&pU.test(e)?gt._CE("",e):n},B0=function(e){return function(t){return 1-e(1-t)}},z0=function i(e,t){for(var n=e._first,r;n;)n instanceof Pn?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},Ls=function(e,t){return e&&(Yt(e)?e:gt[e]||vU(e))||t},Fs=function(e,t,n,r){n===void 0&&(n=function(u){return 1-t(1-u)}),r===void 0&&(r=function(u){return u<.5?t(u*2)/2:1-t((1-u)*2)/2});var a={easeIn:t,easeOut:n,easeInOut:r},l;return $n(e,function(c){gt[c]=ci[c]=a,gt[l=c.toLowerCase()]=n;for(var u in a)gt[l+(u==="easeIn"?".in":u==="easeOut"?".out":".inOut")]=gt[c+"."+u]=a[u]}),a},G0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Xf=function i(e,t,n){var r=t>=1?t:1,a=(n||(e?.3:.45))/(t<1?t:1),l=a/Eh*(Math.asin(1/r)||0),c=function(d){return d===1?1:r*Math.pow(2,-10*d)*$I((d-l)*a)+1},u=e==="out"?c:e==="in"?function(h){return 1-c(1-h)}:G0(c);return a=Eh/a,u.config=function(h,d){return i(e,h,d)},u},$f=function i(e,t){t===void 0&&(t=1.70158);var n=function(l){return l?--l*l*((t+1)*l+t)+1:0},r=e==="out"?n:e==="in"?function(a){return 1-n(1-a)}:G0(n);return r.config=function(a){return i(e,a)},r};$n("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Fs(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});gt.Linear.easeNone=gt.none=gt.Linear.easeIn;Fs("Elastic",Xf("in"),Xf("out"),Xf());(function(i,e){var t=1/e,n=2*t,r=2.5*t,a=function(c){return c<t?i*c*c:c<n?i*Math.pow(c-1.5/e,2)+.75:c<r?i*(c-=2.25/e)*c+.9375:i*Math.pow(c-2.625/e,2)+.984375};Fs("Bounce",function(l){return 1-a(1-l)},a)})(7.5625,2.75);Fs("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});Fs("Circ",function(i){return-(c0(1-i*i)-1)});Fs("Sine",function(i){return i===1?1:-XI(i*VI)+1});Fs("Back",$f("in"),$f("out"),$f());gt.SteppedEase=gt.steps=ci.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),a=t?1:0,l=1-Ut;return function(c){return((r*qo(0,l,c)|0)+a)*n}}};Na.ease=gt["quad.out"];$n("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return ad+=i+","+i+"Params,"});var H0=function(e,t){this.id=WI++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:v0,this.set=t?t.getSetter:fd},Fo=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ba(this,+t.duration,1,1),this.data=t.data,kt&&(this._ctx=kt,kt.data.push(this)),No||si.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ba(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(za(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Xc(this,n),!a._dp||a.parent||E0(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Xi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ut||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),x0(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Sg(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Sg(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*a,r):this._repeat?Fa(this._tTime,a)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-Ut?0:this._rts;if(this._rts===n)return this;var a=this.parent&&this._ts?Lc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ut?0:this._rts,this.totalTime(qo(-Math.abs(this._delay),this._tDur,a),r!==!1),Wc(this),QI(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(za(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ut&&(this._tTime-=Ut)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Xi(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Xn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Lc(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=KI);var r=bn;return bn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),bn=r,this},e.globalTime=function(n){for(var r=this,a=arguments.length?n:r.rawTime();r;)a=r._start+a/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):a},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Mg(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Mg(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Mi(this,n),Xn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Xn(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ut:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ut,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,a;return!!(!n||this._ts&&this._initted&&n.isActive()&&(a=n.rawTime(!0))>=r&&a<this.endTime(!0)-Ut)},e.eventCallback=function(n,r,a){var l=this.vars;return arguments.length>1?(r?(l[n]=r,a&&(l[n+"Params"]=a),n==="onUpdate"&&(this._onUpdate=r)):delete l[n],this):l[n]},e.then=function(n){var r=this;return new Promise(function(a){var l=Yt(n)?n:M0,c=function(){var h=r.then;r.then=null,Yt(l)&&(l=l(r))&&(l.then||l===r)&&(r.then=h),a(l),r.then=h};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?c():r._prom=c})},e.kill=function(){To(this)},i}();Ai(Fo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ut,_prom:0,_ps:!1,_rts:1});var Pn=function(i){l0(e,i);function e(n,r){var a;return n===void 0&&(n={}),a=i.call(this,n)||this,a.labels={},a.smoothChildTiming=!!n.smoothChildTiming,a.autoRemoveChildren=!!n.autoRemoveChildren,a._sort=Xn(n.sortChildren),Xt&&Xi(n.parent||Xt,pr(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),n.scrollTrigger&&b0(pr(a),n.scrollTrigger),a}var t=e.prototype;return t.to=function(r,a,l){return Ro(0,arguments,this),this},t.from=function(r,a,l){return Ro(1,arguments,this),this},t.fromTo=function(r,a,l,c){return Ro(2,arguments,this),this},t.set=function(r,a,l){return a.duration=0,a.parent=this,Ao(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new en(r,a,Mi(this,l),1),this},t.call=function(r,a,l){return Xi(this,en.delayedCall(0,r,a),l)},t.staggerTo=function(r,a,l,c,u,h,d){return l.duration=a,l.stagger=l.stagger||c,l.onComplete=h,l.onCompleteParams=d,l.parent=this,new en(r,l,Mi(this,u)),this},t.staggerFrom=function(r,a,l,c,u,h,d){return l.runBackwards=1,Ao(l).immediateRender=Xn(l.immediateRender),this.staggerTo(r,a,l,c,u,h,d)},t.staggerFromTo=function(r,a,l,c,u,h,d,_){return c.startAt=l,Ao(c).immediateRender=Xn(c.immediateRender),this.staggerTo(r,a,c,u,h,d,_)},t.render=function(r,a,l){var c=this._time,u=this._dirty?this.totalDuration():this._tDur,h=this._dur,d=r<=0?0:fn(r),_=this._zTime<0!=r<0&&(this._initted||!h),p,v,S,g,m,x,T,y,w,P,I,L;if(this!==Xt&&d>u&&r>=0&&(d=u),d!==this._tTime||l||_){if(c!==this._time&&h&&(d+=this._time-c,r+=this._time-c),p=d,w=this._start,y=this._ts,x=!y,_&&(h||(c=this._zTime),(r||!a)&&(this._zTime=r)),this._repeat){if(I=this._yoyo,m=h+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,a,l);if(p=fn(d%m),d===u?(g=this._repeat,p=h):(g=~~(d/m),g&&g===d/m&&(p=h,g--),p>h&&(p=h)),P=Fa(this._tTime,m),!c&&this._tTime&&P!==g&&this._tTime-P*m-this._dur<=0&&(P=g),I&&g&1&&(p=h-p,L=1),g!==P&&!this._lock){var G=I&&P&1,k=G===(I&&g&1);if(g<P&&(G=!G),c=G?0:d%h?h:d,this._lock=1,this.render(c||(L?0:fn(g*m)),a,!h)._lock=0,this._tTime=d,!a&&this.parent&&ai(this,"onRepeat"),this.vars.repeatRefresh&&!L&&(this.invalidate()._lock=1),c&&c!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,u=this._tDur,k&&(this._lock=2,c=G?h:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!L&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;z0(this,L)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=iU(this,fn(c),fn(p)),T&&(d-=p-(p=T._start))),this._tTime=d,this._time=p,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,c=0),!c&&p&&!a&&!g&&(ai(this,"onStart"),this._tTime!==d))return this;if(p>=c&&r>=0)for(v=this._first;v;){if(S=v._next,(v._act||p>=v._start)&&v._ts&&T!==v){if(v.parent!==this)return this.render(r,a,l);if(v.render(v._ts>0?(p-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(p-v._start)*v._ts,a,l),p!==this._time||!this._ts&&!x){T=0,S&&(d+=this._zTime=-Ut);break}}v=S}else{v=this._last;for(var b=r<0?r:p;v;){if(S=v._prev,(v._act||b<=v._end)&&v._ts&&T!==v){if(v.parent!==this)return this.render(r,a,l);if(v.render(v._ts>0?(b-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(b-v._start)*v._ts,a,l||bn&&(v._initted||v._startAt)),p!==this._time||!this._ts&&!x){T=0,S&&(d+=this._zTime=b?-Ut:Ut);break}}v=S}}if(T&&!a&&(this.pause(),T.render(p>=c?0:-Ut)._zTime=p>=c?1:-1,this._ts))return this._start=w,Wc(this),this.render(r,a,l);this._onUpdate&&!a&&ai(this,"onUpdate",!0),(d===u&&this._tTime>=this.totalDuration()||!d&&c)&&(w===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((r||!h)&&(d===u&&this._ts>0||!d&&this._ts<0)&&jr(this,1),!a&&!(r<0&&!c)&&(d||c||!u)&&(ai(this,d===u&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<u&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,a){var l=this;if(Mr(a)||(a=Mi(this,a,r)),!(r instanceof Fo)){if(Tn(r))return r.forEach(function(c){return l.add(c,a)}),this;if(hn(r))return this.addLabel(r,a);if(Yt(r))r=en.delayedCall(0,r);else return this}return this!==r?Xi(this,r,a):this},t.getChildren=function(r,a,l,c){r===void 0&&(r=!0),a===void 0&&(a=!0),l===void 0&&(l=!0),c===void 0&&(c=-Ti);for(var u=[],h=this._first;h;)h._start>=c&&(h instanceof en?a&&u.push(h):(l&&u.push(h),r&&u.push.apply(u,h.getChildren(!0,a,l)))),h=h._next;return u},t.getById=function(r){for(var a=this.getChildren(1,1,1),l=a.length;l--;)if(a[l].vars.id===r)return a[l]},t.remove=function(r){return hn(r)?this.removeLabel(r):Yt(r)?this.killTweensOf(r):(Vc(this,r),r===this._recent&&(this._recent=this._last),Cs(this))},t.totalTime=function(r,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=fn(si.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,a),this._forcing=0,this):this._tTime},t.addLabel=function(r,a){return this.labels[r]=Mi(this,a),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,a,l){var c=en.delayedCall(0,a||Uo,l);return c.data="isPause",this._hasPause=1,Xi(this,c,Mi(this,r))},t.removePause=function(r){var a=this._first;for(r=Mi(this,r);a;)a._start===r&&a.data==="isPause"&&jr(a),a=a._next},t.killTweensOf=function(r,a,l){for(var c=this.getTweensOf(r,l),u=c.length;u--;)kr!==c[u]&&c[u].kill(r,a);return this},t.getTweensOf=function(r,a){for(var l=[],c=wi(r),u=this._first,h=Mr(a),d;u;)u instanceof en?ZI(u._targets,c)&&(h?(!kr||u._initted&&u._ts)&&u.globalTime(0)<=a&&u.globalTime(u.totalDuration())>a:!a||u.isActive())&&l.push(u):(d=u.getTweensOf(c,a)).length&&l.push.apply(l,d),u=u._next;return l},t.tweenTo=function(r,a){a=a||{};var l=this,c=Mi(l,r),u=a,h=u.startAt,d=u.onStart,_=u.onStartParams,p=u.immediateRender,v,S=en.to(l,Ai({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:c,overwrite:"auto",duration:a.duration||Math.abs((c-(h&&"time"in h?h.time:l._time))/l.timeScale())||Ut,onStart:function(){if(l.pause(),!v){var m=a.duration||Math.abs((c-(h&&"time"in h?h.time:l._time))/l.timeScale());S._dur!==m&&Ba(S,m,0,1).render(S._time,!0,!0),v=1}d&&d.apply(S,_||[])}},a));return p?S.render(0):S},t.tweenFromTo=function(r,a,l){return this.tweenTo(a,Ai({startAt:{time:Mi(this,r)}},l))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),yg(this,Mi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),yg(this,Mi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ut)},t.shiftChildren=function(r,a,l){l===void 0&&(l=0);for(var c=this._first,u=this.labels,h;c;)c._start>=l&&(c._start+=r,c._end+=r),c=c._next;if(a)for(h in u)u[h]>=l&&(u[h]+=r);return Cs(this)},t.invalidate=function(r){var a=this._first;for(this._lock=0;a;)a.invalidate(r),a=a._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var a=this._first,l;a;)l=a._next,this.remove(a),a=l;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Cs(this)},t.totalDuration=function(r){var a=0,l=this,c=l._last,u=Ti,h,d,_;if(arguments.length)return l.timeScale((l._repeat<0?l.duration():l.totalDuration())/(l.reversed()?-r:r));if(l._dirty){for(_=l.parent;c;)h=c._prev,c._dirty&&c.totalDuration(),d=c._start,d>u&&l._sort&&c._ts&&!l._lock?(l._lock=1,Xi(l,c,d-c._delay,1)._lock=0):u=d,d<0&&c._ts&&(a-=d,(!_&&!l._dp||_&&_.smoothChildTiming)&&(l._start+=d/l._ts,l._time-=d,l._tTime-=d),l.shiftChildren(-d,!1,-1/0),u=0),c._end>a&&c._ts&&(a=c._end),c=h;Ba(l,l===Xt&&l._time>a?l._time:a,1,1),l._dirty=0}return l._tDur},e.updateRoot=function(r){if(Xt._ts&&(x0(Xt,Lc(r,Xt)),g0=si.frame),si.frame>=vg){vg+=li.autoSleep||120;var a=Xt._first;if((!a||!a._ts)&&li.autoSleep&&si._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||si.sleep()}}},e}(Fo);Ai(Pn.prototype,{_lock:0,_hasPause:0,_forcing:0});var xU=function(e,t,n,r,a,l,c){var u=new qn(this._pt,e,t,0,1,q0,null,a),h=0,d=0,_,p,v,S,g,m,x,T;for(u.b=n,u.e=r,n+="",r+="",(x=~r.indexOf("random("))&&(r=Oo(r)),l&&(T=[n,r],l(T,e,t),n=T[0],r=T[1]),p=n.match(kf)||[];_=kf.exec(r);)S=_[0],g=r.substring(h,_.index),v?v=(v+1)%5:g.substr(-5)==="rgba("&&(v=1),S!==p[d++]&&(m=parseFloat(p[d-1])||0,u._pt={_next:u._pt,p:g||d===1?g:",",s:m,c:S.charAt(1)==="="?Ra(m,S)-m:parseFloat(S)-m,m:v&&v<4?Math.round:0},h=kf.lastIndex);return u.c=h<r.length?r.substring(h,r.length):"",u.fp=c,(h0.test(r)||x)&&(u.e=0),this._pt=u,u},ld=function(e,t,n,r,a,l,c,u,h,d){Yt(r)&&(r=r(a||0,e,l));var _=e[t],p=n!=="get"?n:Yt(_)?h?e[t.indexOf("set")||!Yt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():_,v=Yt(_)?h?bU:X0:ud,S;if(hn(r)&&(~r.indexOf("random(")&&(r=Oo(r)),r.charAt(1)==="="&&(S=Ra(p,r)+(En(p)||0),(S||S===0)&&(r=S))),!d||p!==r||Dh)return!isNaN(p*r)&&r!==""?(S=new qn(this._pt,e,t,+p||0,r-(p||0),typeof _=="boolean"?wU:$0,0,v),h&&(S.fp=h),c&&S.modifier(c,this,e),this._pt=S):(!_&&!(t in e)&&rd(t,r),xU.call(this,e,t,p,r,v,u||li.stringFilter,h))},SU=function(e,t,n,r,a){if(Yt(e)&&(e=Co(e,a,t,n,r)),!Zi(e)||e.style&&e.nodeType||Tn(e)||u0(e))return hn(e)?Co(e,a,t,n,r):e;var l={},c;for(c in e)l[c]=Co(e[c],a,t,n,r);return l},k0=function(e,t,n,r,a,l){var c,u,h,d;if(ri[e]&&(c=new ri[e]).init(a,c.rawVars?t[e]:SU(t[e],r,a,l,n),n,r,l)!==!1&&(n._pt=u=new qn(n._pt,a,e,0,1,c.render,c,0,c.priority),n!==ba))for(h=n._ptLookup[n._targets.indexOf(a)],d=c._props.length;d--;)h[c._props[d]]=u;return c},kr,Dh,cd=function i(e,t,n){var r=e.vars,a=r.ease,l=r.startAt,c=r.immediateRender,u=r.lazy,h=r.onUpdate,d=r.runBackwards,_=r.yoyoEase,p=r.keyframes,v=r.autoRevert,S=e._dur,g=e._startAt,m=e._targets,x=e.parent,T=x&&x.data==="nested"?x.vars.targets:m,y=e._overwrite==="auto"&&!ed,w=e.timeline,P,I,L,G,k,b,O,K,ne,z,$,V,j;if(w&&(!p||!a)&&(a="none"),e._ease=Ls(a,Na.ease),e._yEase=_?B0(Ls(_===!0?a:_,Na.ease)):0,_&&e._yoyo&&!e._repeat&&(_=e._yEase,e._yEase=e._ease,e._ease=_),e._from=!w&&!!r.runBackwards,!w||p&&!r.stagger){if(K=m[0]?Rs(m[0]).harness:0,V=K&&r[K.prop],P=Cc(r,sd),g&&(g._zTime<0&&g.progress(1),t<0&&d&&c&&!v?g.render(-1,!0):g.revert(d&&S?_c:YI),g._lazy=0),l){if(jr(e._startAt=en.set(m,Ai({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!g&&Xn(u),startAt:null,delay:0,onUpdate:h&&function(){return ai(e,"onUpdate")},stagger:0},l))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(bn||!c&&!v)&&e._startAt.revert(_c),c&&S&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(d&&S&&!g){if(t&&(c=!1),L=Ai({overwrite:!1,data:"isFromStart",lazy:c&&!g&&Xn(u),immediateRender:c,stagger:0,parent:x},P),V&&(L[K.prop]=V),jr(e._startAt=en.set(m,L)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(bn?e._startAt.revert(_c):e._startAt.render(-1,!0)),e._zTime=t,!c)i(e._startAt,Ut,Ut);else if(!t)return}for(e._pt=e._ptCache=0,u=S&&Xn(u)||u&&!S,I=0;I<m.length;I++){if(k=m[I],O=k._gsap||od(m)[I]._gsap,e._ptLookup[I]=z={},wh[O.id]&&Yr.length&&Rc(),$=T===m?I:T.indexOf(k),K&&(ne=new K).init(k,V||P,e,$,T)!==!1&&(e._pt=G=new qn(e._pt,k,ne.name,0,1,ne.render,ne,0,ne.priority),ne._props.forEach(function(Q){z[Q]=G}),ne.priority&&(b=1)),!K||V)for(L in P)ri[L]&&(ne=k0(L,P,e,$,k,T))?ne.priority&&(b=1):z[L]=G=ld.call(e,k,L,"get",P[L],$,T,0,r.stringFilter);e._op&&e._op[I]&&e.kill(k,e._op[I]),y&&e._pt&&(kr=e,Xt.killTweensOf(k,z,e.globalTime(t)),j=!e.parent,kr=0),e._pt&&u&&(wh[O.id]=1)}b&&Y0(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!j,p&&t<=0&&w.render(Ti,!0,!0)},MU=function(e,t,n,r,a,l,c,u){var h=(e._pt&&e._ptCache||(e._ptCache={}))[t],d,_,p,v;if(!h)for(h=e._ptCache[t]=[],p=e._ptLookup,v=e._targets.length;v--;){if(d=p[v][t],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==t&&d.fp!==t;)d=d._next;if(!d)return Dh=1,e.vars[t]="+=0",cd(e,c),Dh=0,u?Io(t+" not eligible for reset"):1;h.push(d)}for(v=h.length;v--;)_=h[v],d=_._pt||_,d.s=(r||r===0)&&!a?r:d.s+(r||0)+l*d.c,d.c=n-d.s,_.e&&(_.e=Jt(n)+En(_.e)),_.b&&(_.b=d.s+En(_.b))},yU=function(e,t){var n=e[0]?Rs(e[0]).harness:0,r=n&&n.aliases,a,l,c,u;if(!r)return t;a=Is({},t);for(l in r)if(l in a)for(u=r[l].split(","),c=u.length;c--;)a[u[c]]=a[l];return a},EU=function(e,t,n,r){var a=t.ease||r||"power1.inOut",l,c;if(Tn(t))c=n[e]||(n[e]=[]),t.forEach(function(u,h){return c.push({t:h/(t.length-1)*100,v:u,e:a})});else for(l in t)c=n[l]||(n[l]=[]),l==="ease"||c.push({t:parseFloat(e),v:t[l],e:a})},Co=function(e,t,n,r,a){return Yt(e)?e.call(t,n,r,a):hn(e)&&~e.indexOf("random(")?Oo(e):e},V0=ad+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",W0={};$n(V0+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return W0[i]=1});var en=function(i){l0(e,i);function e(n,r,a,l){var c;typeof r=="number"&&(a.duration=r,r=a,a=null),c=i.call(this,l?r:Ao(r))||this;var u=c.vars,h=u.duration,d=u.delay,_=u.immediateRender,p=u.stagger,v=u.overwrite,S=u.keyframes,g=u.defaults,m=u.scrollTrigger,x=u.yoyoEase,T=r.parent||Xt,y=(Tn(n)||u0(n)?Mr(n[0]):"length"in r)?[n]:wi(n),w,P,I,L,G,k,b,O;if(c._targets=y.length?od(y):Io("GSAP target "+n+" not found. https://gsap.com",!li.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=v,S||p||oc(h)||oc(d)){if(r=c.vars,w=c.timeline=new Pn({data:"nested",defaults:g||{},targets:T&&T.data==="nested"?T.vars.targets:y}),w.kill(),w.parent=w._dp=pr(c),w._start=0,p||oc(h)||oc(d)){if(L=y.length,b=p&&R0(p),Zi(p))for(G in p)~V0.indexOf(G)&&(O||(O={}),O[G]=p[G]);for(P=0;P<L;P++)I=Cc(r,W0),I.stagger=0,x&&(I.yoyoEase=x),O&&Is(I,O),k=y[P],I.duration=+Co(h,pr(c),P,k,y),I.delay=(+Co(d,pr(c),P,k,y)||0)-c._delay,!p&&L===1&&I.delay&&(c._delay=d=I.delay,c._start+=d,I.delay=0),w.to(k,I,b?b(P,k,y):0),w._ease=gt.none;w.duration()?h=d=0:c.timeline=0}else if(S){Ao(Ai(w.vars.defaults,{ease:"none"})),w._ease=Ls(S.ease||r.ease||"none");var K=0,ne,z,$;if(Tn(S))S.forEach(function(V){return w.to(y,V,">")}),w.duration();else{I={};for(G in S)G==="ease"||G==="easeEach"||EU(G,S[G],I,S.easeEach);for(G in I)for(ne=I[G].sort(function(V,j){return V.t-j.t}),K=0,P=0;P<ne.length;P++)z=ne[P],$={ease:z.e,duration:(z.t-(P?ne[P-1].t:0))/100*h},$[G]=z.v,w.to(y,$,K),K+=$.duration;w.duration()<h&&w.to({},{duration:h-w.duration()})}}h||c.duration(h=w.duration())}else c.timeline=0;return v===!0&&!ed&&(kr=pr(c),Xt.killTweensOf(y),kr=0),Xi(T,pr(c),a),r.reversed&&c.reverse(),r.paused&&c.paused(!0),(_||!h&&!S&&c._start===fn(T._time)&&Xn(_)&&eU(pr(c))&&T.data!=="nested")&&(c._tTime=-Ut,c.render(Math.max(0,-d)||0)),m&&b0(pr(c),m),c}var t=e.prototype;return t.render=function(r,a,l){var c=this._time,u=this._tDur,h=this._dur,d=r<0,_=r>u-Ut&&!d?u:r<Ut?0:r,p,v,S,g,m,x,T,y,w;if(!h)nU(this,r,a,l);else if(_!==this._tTime||!r||l||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d){if(p=_,y=this.timeline,this._repeat){if(g=h+this._rDelay,this._repeat<-1&&d)return this.totalTime(g*100+r,a,l);if(p=fn(_%g),_===u?(S=this._repeat,p=h):(S=~~(_/g),S&&S===fn(_/g)&&(p=h,S--),p>h&&(p=h)),x=this._yoyo&&S&1,x&&(w=this._yEase,p=h-p),m=Fa(this._tTime,g),p===c&&!l&&this._initted&&S===m)return this._tTime=_,this;S!==m&&(y&&this._yEase&&z0(y,x),this.vars.repeatRefresh&&!x&&!this._lock&&this._time!==g&&this._initted&&(this._lock=l=1,this.render(fn(g*S),!0).invalidate()._lock=0))}if(!this._initted){if(T0(this,d?r:p,l,a,_))return this._tTime=0,this;if(c!==this._time&&!(l&&this.vars.repeatRefresh&&S!==m))return this;if(h!==this._dur)return this.render(r,a,l)}if(this._tTime=_,this._time=p,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=T=(w||this._ease)(p/h),this._from&&(this.ratio=T=1-T),p&&!c&&!a&&!S&&(ai(this,"onStart"),this._tTime!==_))return this;for(v=this._pt;v;)v.r(T,v.d),v=v._next;y&&y.render(r<0?r:y._dur*y._ease(p/this._dur),a,l)||this._startAt&&(this._zTime=r),this._onUpdate&&!a&&(d&&Ah(this,r,a,l),ai(this,"onUpdate")),this._repeat&&S!==m&&this.vars.onRepeat&&!a&&this.parent&&ai(this,"onRepeat"),(_===this._tDur||!_)&&this._tTime===_&&(d&&!this._onUpdate&&Ah(this,r,!0,!0),(r||!h)&&(_===this._tDur&&this._ts>0||!_&&this._ts<0)&&jr(this,1),!a&&!(d&&!c)&&(_||c||x)&&(ai(this,_===u?"onComplete":"onReverseComplete",!0),this._prom&&!(_<u&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,a,l,c,u){No||si.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||cd(this,h),d=this._ease(h/this._dur),MU(this,r,a,l,c,d,h,u)?this.resetTo(r,a,l,c,1):(Xc(this,0),this.parent||y0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,a){if(a===void 0&&(a="all"),!r&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?To(this):this;if(this.timeline){var l=this.timeline.totalDuration();return this.timeline.killTweensOf(r,a,kr&&kr.vars.overwrite!==!0)._first||To(this),this.parent&&l!==this.timeline.totalDuration()&&Ba(this,this._dur*this.timeline._tDur/l,0,1),this}var c=this._targets,u=r?wi(r):c,h=this._ptLookup,d=this._pt,_,p,v,S,g,m,x;if((!a||a==="all")&&JI(c,u))return a==="all"&&(this._pt=0),To(this);for(_=this._op=this._op||[],a!=="all"&&(hn(a)&&(g={},$n(a,function(T){return g[T]=1}),a=g),a=yU(c,a)),x=c.length;x--;)if(~u.indexOf(c[x])){p=h[x],a==="all"?(_[x]=a,S=p,v={}):(v=_[x]=_[x]||{},S=a);for(g in S)m=p&&p[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Vc(this,m,"_pt"),delete p[g]),v!=="all"&&(v[g]=1)}return this._initted&&!this._pt&&d&&To(this),this},e.to=function(r,a){return new e(r,a,arguments[2])},e.from=function(r,a){return Ro(1,arguments)},e.delayedCall=function(r,a,l,c){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:a,onReverseComplete:a,onCompleteParams:l,onReverseCompleteParams:l,callbackScope:c})},e.fromTo=function(r,a,l){return Ro(2,arguments)},e.set=function(r,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(r,a)},e.killTweensOf=function(r,a,l){return Xt.killTweensOf(r,a,l)},e}(Fo);Ai(en.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});$n("staggerTo,staggerFrom,staggerFromTo",function(i){en[i]=function(){var e=new Pn,t=Ch.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var ud=function(e,t,n){return e[t]=n},X0=function(e,t,n){return e[t](n)},bU=function(e,t,n,r){return e[t](r.fp,n)},TU=function(e,t,n){return e.setAttribute(t,n)},fd=function(e,t){return Yt(e[t])?X0:td(e[t])&&e.setAttribute?TU:ud},$0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},wU=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},q0=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},hd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},AU=function(e,t,n,r){for(var a=this._pt,l;a;)l=a._next,a.p===r&&a.modifier(e,t,n),a=l},RU=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Vc(this,t,"_pt"):t.dep||(n=1),t=r;return!n},CU=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Y0=function(e){for(var t=e._pt,n,r,a,l;t;){for(n=t._next,r=a;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:l)?t._prev._next=t:a=t,(t._next=r)?r._prev=t:l=t,t=n}e._pt=a},qn=function(){function i(t,n,r,a,l,c,u,h,d){this.t=n,this.s=a,this.c=l,this.p=r,this.r=c||$0,this.d=u||this,this.set=h||ud,this.pr=d||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,a){this.mSet=this.mSet||this.set,this.set=CU,this.m=n,this.mt=a,this.tween=r},i}();$n(ad+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return sd[i]=1});ci.TweenMax=ci.TweenLite=en;ci.TimelineLite=ci.TimelineMax=Pn;Xt=new Pn({sortChildren:!1,defaults:Na,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});li.stringFilter=F0;var Ps=[],vc={},LU=[],bg=0,PU=0,qf=function(e){return(vc[e]||LU).map(function(t){return t()})},Ih=function(){var e=Date.now(),t=[];e-bg>2&&(qf("matchMediaInit"),Ps.forEach(function(n){var r=n.queries,a=n.conditions,l,c,u,h;for(c in r)l=ki.matchMedia(r[c]).matches,l&&(u=1),l!==a[c]&&(a[c]=l,h=1);h&&(n.revert(),u&&t.push(n))}),qf("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),bg=e,qf("matchMedia"))},K0=function(){function i(t,n){this.selector=n&&Lh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=PU++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,a){Yt(n)&&(a=r,r=n,n=Yt);var l=this,c=function(){var h=kt,d=l.selector,_;return h&&h!==l&&h.data.push(l),a&&(l.selector=Lh(a)),kt=l,_=r.apply(l,arguments),Yt(_)&&l._r.push(_),kt=h,l.selector=d,l.isReverted=!1,_};return l.last=c,n===Yt?c(l,function(u){return l.add(null,u)}):n?l[n]=c:c},e.ignore=function(n){var r=kt;kt=null,n(this),kt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof en&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var a=this;if(n?function(){for(var c=a.getTweens(),u=a.data.length,h;u--;)h=a.data[u],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(d){return c.splice(c.indexOf(d),1)}));for(c.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,_){return _.g-d.g||-1/0}).forEach(function(d){return d.t.revert(n)}),u=a.data.length;u--;)h=a.data[u],h instanceof Pn?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof en)&&h.revert&&h.revert(n);a._r.forEach(function(d){return d(n,a)}),a.isReverted=!0}():this.data.forEach(function(c){return c.kill&&c.kill()}),this.clear(),r)for(var l=Ps.length;l--;)Ps[l].id===this.id&&Ps.splice(l,1)},e.revert=function(n){this.kill(n||{})},i}(),DU=function(){function i(t){this.contexts=[],this.scope=t,kt&&kt.data.push(this)}var e=i.prototype;return e.add=function(n,r,a){Zi(n)||(n={matches:n});var l=new K0(0,a||this.scope),c=l.conditions={},u,h,d;kt&&!l.selector&&(l.selector=kt.selector),this.contexts.push(l),r=l.add("onMatch",r),l.queries=n;for(h in n)h==="all"?d=1:(u=ki.matchMedia(n[h]),u&&(Ps.indexOf(l)<0&&Ps.push(l),(c[h]=u.matches)&&(d=1),u.addListener?u.addListener(Ih):u.addEventListener("change",Ih)));return d&&r(l,function(_){return l.add(null,_)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),Pc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return U0(r)})},timeline:function(e){return new Pn(e)},getTweensOf:function(e,t){return Xt.getTweensOf(e,t)},getProperty:function(e,t,n,r){hn(e)&&(e=wi(e)[0]);var a=Rs(e||{}).get,l=n?M0:S0;return n==="native"&&(n=""),e&&(t?l((ri[t]&&ri[t].get||a)(e,t,n,r)):function(c,u,h){return l((ri[c]&&ri[c].get||a)(e,c,u,h))})},quickSetter:function(e,t,n){if(e=wi(e),e.length>1){var r=e.map(function(d){return Kn.quickSetter(d,t,n)}),a=r.length;return function(d){for(var _=a;_--;)r[_](d)}}e=e[0]||{};var l=ri[t],c=Rs(e),u=c.harness&&(c.harness.aliases||{})[t]||t,h=l?function(d){var _=new l;ba._pt=0,_.init(e,n?d+n:d,ba,0,[e]),_.render(1,_),ba._pt&&hd(1,ba)}:c.set(e,u);return l?h:function(d){return h(e,u,n?d+n:d,c,1)}},quickTo:function(e,t,n){var r,a=Kn.to(e,Is((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),l=function(u,h,d){return a.resetTo(t,u,h,d)};return l.tween=a,l},isTweening:function(e){return Xt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ls(e.ease,Na.ease)),xg(Na,e||{})},config:function(e){return xg(li,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,a=e.defaults,l=e.extendTimeline;(r||"").split(",").forEach(function(c){return c&&!ri[c]&&!ci[c]&&Io(t+" effect requires "+c+" plugin.")}),Vf[t]=function(c,u,h){return n(wi(c),Ai(u||{},a),h)},l&&(Pn.prototype[t]=function(c,u,h){return this.add(Vf[t](c,Zi(u)?u:(h=u)&&{},this),h)})},registerEase:function(e,t){gt[e]=Ls(t)},parseEase:function(e,t){return arguments.length?Ls(e,t):gt},getById:function(e){return Xt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Pn(e),r,a;for(n.smoothChildTiming=Xn(e.smoothChildTiming),Xt.remove(n),n._dp=0,n._time=n._tTime=Xt._time,r=Xt._first;r;)a=r._next,(t||!(!r._dur&&r instanceof en&&r.vars.onComplete===r._targets[0]))&&Xi(n,r,r._start-r._delay),r=a;return Xi(Xt,n,0),n},context:function(e,t){return e?new K0(e,t):kt},matchMedia:function(e){return new DU(e)},matchMediaRefresh:function(){return Ps.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Ih()},addEventListener:function(e,t){var n=vc[e]||(vc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=vc[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:uU,wrapYoyo:fU,distribute:R0,random:L0,snap:C0,normalize:cU,getUnit:En,clamp:sU,splitColor:O0,toArray:wi,selector:Lh,mapRange:D0,pipe:oU,unitize:lU,interpolate:hU,shuffle:A0},install:m0,effects:Vf,ticker:si,updateRoot:Pn.updateRoot,plugins:ri,globalTimeline:Xt,core:{PropTween:qn,globals:_0,Tween:en,Timeline:Pn,Animation:Fo,getCache:Rs,_removeLinkedListItem:Vc,reverting:function(){return bn},context:function(e){return e&&kt&&(kt.data.push(e),e._ctx=kt),kt},suppressOverwrites:function(e){return ed=e}}};$n("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Pc[i]=en[i]});si.add(Pn.updateRoot);ba=Pc.to({},{duration:0});var IU=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},UU=function(e,t){var n=e._targets,r,a,l;for(r in t)for(a=n.length;a--;)l=e._ptLookup[a][r],l&&(l=l.d)&&(l._pt&&(l=IU(l,r)),l&&l.modifier&&l.modifier(t[r],e,n[a],r))},Yf=function(e,t){return{name:e,rawVars:1,init:function(r,a,l){l._onInit=function(c){var u,h;if(hn(a)&&(u={},$n(a,function(d){return u[d]=1}),a=u),t){u={};for(h in a)u[h]=t(a[h]);a=u}UU(c,a)}}}},Kn=Pc.registerPlugin({name:"attr",init:function(e,t,n,r,a){var l,c,u;this.tween=n;for(l in t)u=e.getAttribute(l)||"",c=this.add(e,"setAttribute",(u||0)+"",t[l],r,a,0,0,l),c.op=l,c.b=u,this._props.push(l)},render:function(e,t){for(var n=t._pt;n;)bn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Yf("roundProps",Ph),Yf("modifiers"),Yf("snap",C0))||Pc;en.version=Pn.version=Kn.version="3.12.5";p0=1;nd()&&za();gt.Power0;gt.Power1;gt.Power2;gt.Power3;gt.Power4;gt.Linear;gt.Quad;gt.Cubic;gt.Quart;gt.Quint;gt.Strong;gt.Elastic;gt.Back;gt.SteppedEase;gt.Bounce;gt.Sine;gt.Expo;gt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Tg,Vr,Ca,dd,Es,wg,pd,OU=function(){return typeof window<"u"},yr={},gs=180/Math.PI,La=Math.PI/180,Sa=Math.atan2,Ag=1e8,md=/([A-Z])/g,NU=/(left|right|width|margin|padding|x)/i,FU=/[\s,\(]\S/,qi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Uh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},BU=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},zU=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},GU=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Z0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},j0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},HU=function(e,t,n){return e.style[t]=n},kU=function(e,t,n){return e.style.setProperty(t,n)},VU=function(e,t,n){return e._gsap[t]=n},WU=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},XU=function(e,t,n,r,a){var l=e._gsap;l.scaleX=l.scaleY=n,l.renderTransform(a,l)},$U=function(e,t,n,r,a){var l=e._gsap;l[t]=n,l.renderTransform(a,l)},$t="transform",Yn=$t+"Origin",qU=function i(e,t){var n=this,r=this.target,a=r.style,l=r._gsap;if(e in yr&&a){if(this.tfm=this.tfm||{},e!=="transform")e=qi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(c){return n.tfm[c]=mr(r,c)}):this.tfm[e]=l.x?l[e]:mr(r,e),e===Yn&&(this.tfm.zOrigin=l.zOrigin);else return qi.transform.split(",").forEach(function(c){return i.call(n,c,t)});if(this.props.indexOf($t)>=0)return;l.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Yn,t,"")),e=$t}(a||t)&&this.props.push(e,t,a[e])},J0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},YU=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,a,l;for(a=0;a<e.length;a+=3)e[a+1]?t[e[a]]=e[a+2]:e[a+2]?n[e[a]]=e[a+2]:n.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(md,"-$1").toLowerCase());if(this.tfm){for(l in this.tfm)r[l]=this.tfm[l];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=pd(),(!a||!a.isStart)&&!n[$t]&&(J0(n),r.zOrigin&&n[Yn]&&(n[Yn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Q0=function(e,t){var n={target:e,props:[],revert:YU,save:qU};return e._gsap||Kn.core.getCache(e),t&&t.split(",").forEach(function(r){return n.save(r)}),n},ex,Oh=function(e,t){var n=Vr.createElementNS?Vr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Vr.createElement(e);return n&&n.style?n:Vr.createElement(e)},Ki=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(md,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Ga(t)||t,1)||""},Rg="O,Moz,ms,Ms,Webkit".split(","),Ga=function(e,t,n){var r=t||Es,a=r.style,l=5;if(e in a&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);l--&&!(Rg[l]+e in a););return l<0?null:(l===3?"ms":l>=0?Rg[l]:"")+e},Nh=function(){OU()&&window.document&&(Tg=window,Vr=Tg.document,Ca=Vr.documentElement,Es=Oh("div")||{style:{}},Oh("div"),$t=Ga($t),Yn=$t+"Origin",Es.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ex=!!Ga("perspective"),pd=Kn.core.reverting,dd=1)},Kf=function i(e){var t=Oh("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,a=this.style.cssText,l;if(Ca.appendChild(t),t.appendChild(this),this.style.display="block",e)try{l=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(l=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),Ca.removeChild(t),this.style.cssText=a,l},Cg=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},tx=function(e){var t;try{t=e.getBBox()}catch{t=Kf.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Kf||(t=Kf.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Cg(e,["x","cx","x1"])||0,y:+Cg(e,["y","cy","y1"])||0,width:0,height:0}:t},nx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&tx(e))},Us=function(e,t){if(t){var n=e.style,r;t in yr&&t!==Yn&&(t=$t),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(md,"-$1").toLowerCase())):n.removeAttribute(t)}},Wr=function(e,t,n,r,a,l){var c=new qn(e._pt,t,n,0,1,l?j0:Z0);return e._pt=c,c.b=r,c.e=a,e._props.push(n),c},Lg={deg:1,rad:1,turn:1},KU={grid:1,flex:1},Jr=function i(e,t,n,r){var a=parseFloat(n)||0,l=(n+"").trim().substr((a+"").length)||"px",c=Es.style,u=NU.test(t),h=e.tagName.toLowerCase()==="svg",d=(h?"client":"offset")+(u?"Width":"Height"),_=100,p=r==="px",v=r==="%",S,g,m,x;if(r===l||!a||Lg[r]||Lg[l])return a;if(l!=="px"&&!p&&(a=i(e,t,n,"px")),x=e.getCTM&&nx(e),(v||l==="%")&&(yr[t]||~t.indexOf("adius")))return S=x?e.getBBox()[u?"width":"height"]:e[d],Jt(v?a/S*_:a/100*S);if(c[u?"width":"height"]=_+(p?l:r),g=~t.indexOf("adius")||r==="em"&&e.appendChild&&!h?e:e.parentNode,x&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Vr||!g.appendChild)&&(g=Vr.body),m=g._gsap,m&&v&&m.width&&u&&m.time===si.time&&!m.uncache)return Jt(a/m.width*_);if(v&&(t==="height"||t==="width")){var T=e.style[t];e.style[t]=_+r,S=e[d],T?e.style[t]=T:Us(e,t)}else(v||l==="%")&&!KU[Ki(g,"display")]&&(c.position=Ki(e,"position")),g===e&&(c.position="static"),g.appendChild(Es),S=Es[d],g.removeChild(Es),c.position="absolute";return u&&v&&(m=Rs(g),m.time=si.time,m.width=g[d]),Jt(p?S*a/_:S&&a?_/S*a:0)},mr=function(e,t,n,r){var a;return dd||Nh(),t in qi&&t!=="transform"&&(t=qi[t],~t.indexOf(",")&&(t=t.split(",")[0])),yr[t]&&t!=="transform"?(a=zo(e,r),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:Ic(Ki(e,Yn))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||r||~(a+"").indexOf("calc("))&&(a=Dc[t]&&Dc[t](e,t,n)||Ki(e,t)||v0(e,t)||(t==="opacity"?1:0))),n&&!~(a+"").trim().indexOf(" ")?Jr(e,t,a,n)+n:a},ZU=function(e,t,n,r){if(!n||n==="none"){var a=Ga(t,e,1),l=a&&Ki(e,a,1);l&&l!==n?(t=a,n=l):t==="borderColor"&&(n=Ki(e,"borderTopColor"))}var c=new qn(this._pt,e.style,t,0,1,q0),u=0,h=0,d,_,p,v,S,g,m,x,T,y,w,P;if(c.b=n,c.e=r,n+="",r+="",r==="auto"&&(g=e.style[t],e.style[t]=r,r=Ki(e,t)||r,g?e.style[t]=g:Us(e,t)),d=[n,r],F0(d),n=d[0],r=d[1],p=n.match(Ea)||[],P=r.match(Ea)||[],P.length){for(;_=Ea.exec(r);)m=_[0],T=r.substring(u,_.index),S?S=(S+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(S=1),m!==(g=p[h++]||"")&&(v=parseFloat(g)||0,w=g.substr((v+"").length),m.charAt(1)==="="&&(m=Ra(v,m)+w),x=parseFloat(m),y=m.substr((x+"").length),u=Ea.lastIndex-y.length,y||(y=y||li.units[t]||w,u===r.length&&(r+=y,c.e+=y)),w!==y&&(v=Jr(e,t,g,y)||0),c._pt={_next:c._pt,p:T||h===1?T:",",s:v,c:x-v,m:S&&S<4||t==="zIndex"?Math.round:0});c.c=u<r.length?r.substring(u,r.length):""}else c.r=t==="display"&&r==="none"?j0:Z0;return h0.test(r)&&(c.e=0),this._pt=c,c},Pg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},jU=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Pg[n]||n,t[1]=Pg[r]||r,t.join(" ")},JU=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,a=t.u,l=n._gsap,c,u,h;if(a==="all"||a===!0)r.cssText="",u=1;else for(a=a.split(","),h=a.length;--h>-1;)c=a[h],yr[c]&&(u=1,c=c==="transformOrigin"?Yn:$t),Us(n,c);u&&(Us(n,$t),l&&(l.svg&&n.removeAttribute("transform"),zo(n,1),l.uncache=1,J0(r)))}},Dc={clearProps:function(e,t,n,r,a){if(a.data!=="isFromStart"){var l=e._pt=new qn(e._pt,t,n,0,0,JU);return l.u=r,l.pr=-10,l.tween=a,e._props.push(n),1}}},Bo=[1,0,0,1,0,0],ix={},rx=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Dg=function(e){var t=Ki(e,$t);return rx(t)?Bo:t.substr(7).match(f0).map(Jt)},_d=function(e,t){var n=e._gsap||Rs(e),r=e.style,a=Dg(e),l,c,u,h;return n.svg&&e.getAttribute("transform")?(u=e.transform.baseVal.consolidate().matrix,a=[u.a,u.b,u.c,u.d,u.e,u.f],a.join(",")==="1,0,0,1,0,0"?Bo:a):(a===Bo&&!e.offsetParent&&e!==Ca&&!n.svg&&(u=r.display,r.display="block",l=e.parentNode,(!l||!e.offsetParent)&&(h=1,c=e.nextElementSibling,Ca.appendChild(e)),a=Dg(e),u?r.display=u:Us(e,"display"),h&&(c?l.insertBefore(e,c):l?l.appendChild(e):Ca.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},Fh=function(e,t,n,r,a,l){var c=e._gsap,u=a||_d(e,!0),h=c.xOrigin||0,d=c.yOrigin||0,_=c.xOffset||0,p=c.yOffset||0,v=u[0],S=u[1],g=u[2],m=u[3],x=u[4],T=u[5],y=t.split(" "),w=parseFloat(y[0])||0,P=parseFloat(y[1])||0,I,L,G,k;n?u!==Bo&&(L=v*m-S*g)&&(G=w*(m/L)+P*(-g/L)+(g*T-m*x)/L,k=w*(-S/L)+P*(v/L)-(v*T-S*x)/L,w=G,P=k):(I=tx(e),w=I.x+(~y[0].indexOf("%")?w/100*I.width:w),P=I.y+(~(y[1]||y[0]).indexOf("%")?P/100*I.height:P)),r||r!==!1&&c.smooth?(x=w-h,T=P-d,c.xOffset=_+(x*v+T*g)-x,c.yOffset=p+(x*S+T*m)-T):c.xOffset=c.yOffset=0,c.xOrigin=w,c.yOrigin=P,c.smooth=!!r,c.origin=t,c.originIsAbsolute=!!n,e.style[Yn]="0px 0px",l&&(Wr(l,c,"xOrigin",h,w),Wr(l,c,"yOrigin",d,P),Wr(l,c,"xOffset",_,c.xOffset),Wr(l,c,"yOffset",p,c.yOffset)),e.setAttribute("data-svg-origin",w+" "+P)},zo=function(e,t){var n=e._gsap||new H0(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,a=n.scaleX<0,l="px",c="deg",u=getComputedStyle(e),h=Ki(e,Yn)||"0",d,_,p,v,S,g,m,x,T,y,w,P,I,L,G,k,b,O,K,ne,z,$,V,j,Q,le,oe,se,he,Ie,Z,ce;return d=_=p=g=m=x=T=y=w=0,v=S=1,n.svg=!!(e.getCTM&&nx(e)),u.translate&&((u.translate!=="none"||u.scale!=="none"||u.rotate!=="none")&&(r[$t]=(u.translate!=="none"?"translate3d("+(u.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(u.rotate!=="none"?"rotate("+u.rotate+") ":"")+(u.scale!=="none"?"scale("+u.scale.split(" ").join(",")+") ":"")+(u[$t]!=="none"?u[$t]:"")),r.scale=r.rotate=r.translate="none"),L=_d(e,n.svg),n.svg&&(n.uncache?(Q=e.getBBox(),h=n.xOrigin-Q.x+"px "+(n.yOrigin-Q.y)+"px",j=""):j=!t&&e.getAttribute("data-svg-origin"),Fh(e,j||h,!!j||n.originIsAbsolute,n.smooth!==!1,L)),P=n.xOrigin||0,I=n.yOrigin||0,L!==Bo&&(O=L[0],K=L[1],ne=L[2],z=L[3],d=$=L[4],_=V=L[5],L.length===6?(v=Math.sqrt(O*O+K*K),S=Math.sqrt(z*z+ne*ne),g=O||K?Sa(K,O)*gs:0,T=ne||z?Sa(ne,z)*gs+g:0,T&&(S*=Math.abs(Math.cos(T*La))),n.svg&&(d-=P-(P*O+I*ne),_-=I-(P*K+I*z))):(ce=L[6],Ie=L[7],oe=L[8],se=L[9],he=L[10],Z=L[11],d=L[12],_=L[13],p=L[14],G=Sa(ce,he),m=G*gs,G&&(k=Math.cos(-G),b=Math.sin(-G),j=$*k+oe*b,Q=V*k+se*b,le=ce*k+he*b,oe=$*-b+oe*k,se=V*-b+se*k,he=ce*-b+he*k,Z=Ie*-b+Z*k,$=j,V=Q,ce=le),G=Sa(-ne,he),x=G*gs,G&&(k=Math.cos(-G),b=Math.sin(-G),j=O*k-oe*b,Q=K*k-se*b,le=ne*k-he*b,Z=z*b+Z*k,O=j,K=Q,ne=le),G=Sa(K,O),g=G*gs,G&&(k=Math.cos(G),b=Math.sin(G),j=O*k+K*b,Q=$*k+V*b,K=K*k-O*b,V=V*k-$*b,O=j,$=Q),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,x=180-x),v=Jt(Math.sqrt(O*O+K*K+ne*ne)),S=Jt(Math.sqrt(V*V+ce*ce)),G=Sa($,V),T=Math.abs(G)>2e-4?G*gs:0,w=Z?1/(Z<0?-Z:Z):0),n.svg&&(j=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!rx(Ki(e,$t)),j&&e.setAttribute("transform",j))),Math.abs(T)>90&&Math.abs(T)<270&&(a?(v*=-1,T+=g<=0?180:-180,g+=g<=0?180:-180):(S*=-1,T+=T<=0?180:-180)),t=t||n.uncache,n.x=d-((n.xPercent=d&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+l,n.y=_-((n.yPercent=_&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-_)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+l,n.z=p+l,n.scaleX=Jt(v),n.scaleY=Jt(S),n.rotation=Jt(g)+c,n.rotationX=Jt(m)+c,n.rotationY=Jt(x)+c,n.skewX=T+c,n.skewY=y+c,n.transformPerspective=w+l,(n.zOrigin=parseFloat(h.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Yn]=Ic(h)),n.xOffset=n.yOffset=0,n.force3D=li.force3D,n.renderTransform=n.svg?eO:ex?sx:QU,n.uncache=0,n},Ic=function(e){return(e=e.split(" "))[0]+" "+e[1]},Zf=function(e,t,n){var r=En(t);return Jt(parseFloat(t)+parseFloat(Jr(e,"x",n+"px",r)))+r},QU=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,sx(e,t)},ds="0deg",yo="0px",ps=") ",sx=function(e,t){var n=t||this,r=n.xPercent,a=n.yPercent,l=n.x,c=n.y,u=n.z,h=n.rotation,d=n.rotationY,_=n.rotationX,p=n.skewX,v=n.skewY,S=n.scaleX,g=n.scaleY,m=n.transformPerspective,x=n.force3D,T=n.target,y=n.zOrigin,w="",P=x==="auto"&&e&&e!==1||x===!0;if(y&&(_!==ds||d!==ds)){var I=parseFloat(d)*La,L=Math.sin(I),G=Math.cos(I),k;I=parseFloat(_)*La,k=Math.cos(I),l=Zf(T,l,L*k*-y),c=Zf(T,c,-Math.sin(I)*-y),u=Zf(T,u,G*k*-y+y)}m!==yo&&(w+="perspective("+m+ps),(r||a)&&(w+="translate("+r+"%, "+a+"%) "),(P||l!==yo||c!==yo||u!==yo)&&(w+=u!==yo||P?"translate3d("+l+", "+c+", "+u+") ":"translate("+l+", "+c+ps),h!==ds&&(w+="rotate("+h+ps),d!==ds&&(w+="rotateY("+d+ps),_!==ds&&(w+="rotateX("+_+ps),(p!==ds||v!==ds)&&(w+="skew("+p+", "+v+ps),(S!==1||g!==1)&&(w+="scale("+S+", "+g+ps),T.style[$t]=w||"translate(0, 0)"},eO=function(e,t){var n=t||this,r=n.xPercent,a=n.yPercent,l=n.x,c=n.y,u=n.rotation,h=n.skewX,d=n.skewY,_=n.scaleX,p=n.scaleY,v=n.target,S=n.xOrigin,g=n.yOrigin,m=n.xOffset,x=n.yOffset,T=n.forceCSS,y=parseFloat(l),w=parseFloat(c),P,I,L,G,k;u=parseFloat(u),h=parseFloat(h),d=parseFloat(d),d&&(d=parseFloat(d),h+=d,u+=d),u||h?(u*=La,h*=La,P=Math.cos(u)*_,I=Math.sin(u)*_,L=Math.sin(u-h)*-p,G=Math.cos(u-h)*p,h&&(d*=La,k=Math.tan(h-d),k=Math.sqrt(1+k*k),L*=k,G*=k,d&&(k=Math.tan(d),k=Math.sqrt(1+k*k),P*=k,I*=k)),P=Jt(P),I=Jt(I),L=Jt(L),G=Jt(G)):(P=_,G=p,I=L=0),(y&&!~(l+"").indexOf("px")||w&&!~(c+"").indexOf("px"))&&(y=Jr(v,"x",l,"px"),w=Jr(v,"y",c,"px")),(S||g||m||x)&&(y=Jt(y+S-(S*P+g*L)+m),w=Jt(w+g-(S*I+g*G)+x)),(r||a)&&(k=v.getBBox(),y=Jt(y+r/100*k.width),w=Jt(w+a/100*k.height)),k="matrix("+P+","+I+","+L+","+G+","+y+","+w+")",v.setAttribute("transform",k),T&&(v.style[$t]=k)},tO=function(e,t,n,r,a){var l=360,c=hn(a),u=parseFloat(a)*(c&&~a.indexOf("rad")?gs:1),h=u-r,d=r+h+"deg",_,p;return c&&(_=a.split("_")[1],_==="short"&&(h%=l,h!==h%(l/2)&&(h+=h<0?l:-l)),_==="cw"&&h<0?h=(h+l*Ag)%l-~~(h/l)*l:_==="ccw"&&h>0&&(h=(h-l*Ag)%l-~~(h/l)*l)),e._pt=p=new qn(e._pt,t,n,r,h,BU),p.e=d,p.u="deg",e._props.push(n),p},Ig=function(e,t){for(var n in t)e[n]=t[n];return e},nO=function(e,t,n){var r=Ig({},n._gsap),a="perspective,force3D,transformOrigin,svgOrigin",l=n.style,c,u,h,d,_,p,v,S;r.svg?(h=n.getAttribute("transform"),n.setAttribute("transform",""),l[$t]=t,c=zo(n,1),Us(n,$t),n.setAttribute("transform",h)):(h=getComputedStyle(n)[$t],l[$t]=t,c=zo(n,1),l[$t]=h);for(u in yr)h=r[u],d=c[u],h!==d&&a.indexOf(u)<0&&(v=En(h),S=En(d),_=v!==S?Jr(n,u,h,S):parseFloat(h),p=parseFloat(d),e._pt=new qn(e._pt,c,u,_,p-_,Uh),e._pt.u=S||0,e._props.push(u));Ig(c,r)};$n("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",a="Left",l=(e<3?[t,n,r,a]:[t+a,t+n,r+n,r+a]).map(function(c){return e<2?i+c:"border"+c+i});Dc[e>1?"border"+i:i]=function(c,u,h,d,_){var p,v;if(arguments.length<4)return p=l.map(function(S){return mr(c,S,h)}),v=p.join(" "),v.split(p[0]).length===5?p[0]:v;p=(d+"").split(" "),v={},l.forEach(function(S,g){return v[S]=p[g]=p[g]||p[(g-1)/2|0]}),c.init(u,v,_)}});var ax={name:"css",register:Nh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,a){var l=this._props,c=e.style,u=n.vars.startAt,h,d,_,p,v,S,g,m,x,T,y,w,P,I,L,G;dd||Nh(),this.styles=this.styles||Q0(e),G=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(d=t[g],!(ri[g]&&k0(g,t,n,r,e,a)))){if(v=typeof d,S=Dc[g],v==="function"&&(d=d.call(n,r,e,a),v=typeof d),v==="string"&&~d.indexOf("random(")&&(d=Oo(d)),S)S(this,e,g,d,n)&&(L=1);else if(g.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(g)+"").trim(),d+="",Kr.lastIndex=0,Kr.test(h)||(m=En(h),x=En(d)),x?m!==x&&(h=Jr(e,g,h,x)+x):m&&(d+=m),this.add(c,"setProperty",h,d,r,a,0,0,g),l.push(g),G.push(g,0,c[g]);else if(v!=="undefined"){if(u&&g in u?(h=typeof u[g]=="function"?u[g].call(n,r,e,a):u[g],hn(h)&&~h.indexOf("random(")&&(h=Oo(h)),En(h+"")||h==="auto"||(h+=li.units[g]||En(mr(e,g))||""),(h+"").charAt(1)==="="&&(h=mr(e,g))):h=mr(e,g),p=parseFloat(h),T=v==="string"&&d.charAt(1)==="="&&d.substr(0,2),T&&(d=d.substr(2)),_=parseFloat(d),g in qi&&(g==="autoAlpha"&&(p===1&&mr(e,"visibility")==="hidden"&&_&&(p=0),G.push("visibility",0,c.visibility),Wr(this,c,"visibility",p?"inherit":"hidden",_?"inherit":"hidden",!_)),g!=="scale"&&g!=="transform"&&(g=qi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in yr,y){if(this.styles.save(g),w||(P=e._gsap,P.renderTransform&&!t.parseTransform||zo(e,t.parseTransform),I=t.smoothOrigin!==!1&&P.smooth,w=this._pt=new qn(this._pt,c,$t,0,1,P.renderTransform,P,0,-1),w.dep=1),g==="scale")this._pt=new qn(this._pt,P,"scaleY",P.scaleY,(T?Ra(P.scaleY,T+_):_)-P.scaleY||0,Uh),this._pt.u=0,l.push("scaleY",g),g+="X";else if(g==="transformOrigin"){G.push(Yn,0,c[Yn]),d=jU(d),P.svg?Fh(e,d,0,I,0,this):(x=parseFloat(d.split(" ")[2])||0,x!==P.zOrigin&&Wr(this,P,"zOrigin",P.zOrigin,x),Wr(this,c,g,Ic(h),Ic(d)));continue}else if(g==="svgOrigin"){Fh(e,d,1,I,0,this);continue}else if(g in ix){tO(this,P,g,p,T?Ra(p,T+d):d);continue}else if(g==="smoothOrigin"){Wr(this,P,"smooth",P.smooth,d);continue}else if(g==="force3D"){P[g]=d;continue}else if(g==="transform"){nO(this,d,e);continue}}else g in c||(g=Ga(g)||g);if(y||(_||_===0)&&(p||p===0)&&!FU.test(d)&&g in c)m=(h+"").substr((p+"").length),_||(_=0),x=En(d)||(g in li.units?li.units[g]:m),m!==x&&(p=Jr(e,g,h,x)),this._pt=new qn(this._pt,y?P:c,g,p,(T?Ra(p,T+_):_)-p,!y&&(x==="px"||g==="zIndex")&&t.autoRound!==!1?GU:Uh),this._pt.u=x||0,m!==x&&x!=="%"&&(this._pt.b=h,this._pt.r=zU);else if(g in c)ZU.call(this,e,g,h,T?T+d:d);else if(g in e)this.add(e,g,h||e[g],T?T+d:d,r,a);else if(g!=="parseTransform"){rd(g,d);continue}y||(g in c?G.push(g,0,c[g]):G.push(g,1,h||e[g])),l.push(g)}}L&&Y0(this)},render:function(e,t){if(t.tween._time||!pd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:mr,aliases:qi,getSetter:function(e,t,n){var r=qi[t];return r&&r.indexOf(",")<0&&(t=r),t in yr&&t!==Yn&&(e._gsap.x||mr(e,"x"))?n&&wg===n?t==="scale"?WU:VU:(wg=n||{})&&(t==="scale"?XU:$U):e.style&&!td(e.style[t])?HU:~t.indexOf("-")?kU:fd(e,t)},core:{_removeProperty:Us,_getMatrix:_d}};Kn.utils.checkPrefix=Ga;Kn.core.getStyleSaver=Q0;(function(i,e,t,n){var r=$n(i+","+e+","+t,function(a){yr[a]=1});$n(e,function(a){li.units[a]="deg",ix[a]=1}),qi[r[13]]=i+","+e,$n(n,function(a){var l=a.split(":");qi[l[1]]=r[l[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");$n("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){li.units[i]="px"});Kn.registerPlugin(ax);var Er=Kn.registerPlugin(ax)||Kn;Er.core.Tween;const iO=`precision mediump float;
#define GLSLIFY 1

uniform float uAlpha;
uniform vec3 uColor;

varying vec2 vUv;

void main(){
  gl_FragColor = vec4(1., 1., 1., uAlpha);
}`,rO=`#define GLSLIFY 1
attribute vec3 position;
attribute vec2 uv;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

varying vec2 vUv;

void main(){
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}`;class ox{constructor({element:e,scene:t,geometry:n,screen:r,viewport:a}){this.element=e,this.scene=t,this.geometry=n,this.screen=r,this.viewport=a,this.scroll=0,this.isVisible=!1,this.createTexture(),this.createMaterial(),this.createMesh(),this.onResize({viewport:a,screen:r})}createTexture(){}createMaterial(){this.material=new zI({fragmentShader:iO,vertexShader:rO,uniforms:{uAlpha:{value:0}},transparent:!0,wireframe:!0})}createMesh(){this.mesh=new $i(this.geometry,this.material),this.scene.add(this.mesh)}createBounds(){const e=this.element.getBoundingClientRect();this.bounds={top:e.top+this.scroll,left:e.left,width:e.width,height:e.height},this.updateScale(),this.updateX(),this.updateY(this.scroll)}updateScale(){this.mesh.scale.x=this.viewport.width*this.bounds.width/this.screen.width,this.mesh.scale.y=this.viewport.height*this.bounds.height/this.screen.height}updateX(e=0){this.mesh.position.x=-this.viewport.width/2+this.mesh.scale.x/2+(this.bounds.left-e)/this.screen.width*this.viewport.width}updateY(e=0){this.mesh.position.y=this.viewport.height/2-this.mesh.scale.y/2-(this.bounds.top-e)/this.screen.height*this.viewport.height}show(){this.isVisible=!0,Er.fromTo(this.material.uniforms.uAlpha,{value:0},{value:1})}hide(){this.isVisible=!1,Er.to(this.material.uniforms.uAlpha,{value:0})}onResize({screen:e,viewport:t}){this.screen=e,this.viewport=t,this.createBounds()}update(e){this.isVisible&&(this.updateY(e),this.scroll=e)}}let sO=class{constructor({scene:e,geometry:t,screen:n,viewport:r}){this.scene=e,this.geometry=t,this.screen=n,this.viewport=r,this.createMedia(),this.show()}createMedia(){this.media=new ox({element:document.querySelector(".home__media"),scene:this.scene,geometry:this.geometry,screen:this.screen,viewport:this.viewport})}show(){this.media.show()}hide(){this.media.hide()}onResize({screen:e,viewport:t}){this.media&&this.media.onResize&&this.media.onResize({screen:e,viewport:t})}update(e){this.media&&this.media.update&&this.media.update(e)}destroy(){this.media&&this.media.mesh.removeFromParent()}},aO=class{constructor({scene:e,geometry:t,screen:n,viewport:r}){this.scene=e,this.geometry=t,this.screen=n,this.viewport=r,this.createMedia(),this.show()}createMedia(){this.media=new ox({element:document.querySelector(".about__media"),scene:this.scene,geometry:this.geometry,screen:this.screen,viewport:this.viewport})}show(){this.media.show()}hide(){this.media.hide()}onResize({screen:e,viewport:t}){this.media&&this.media.onResize&&this.media.onResize({screen:e,viewport:t})}update(e){this.media&&this.media.update&&this.media.update(e)}destroy(){this.media&&this.media.mesh.removeFromParent()}};class oO{constructor({template:e}){this.template=e,this.createScene(),this.createCamera(),this.createRender(),this.createGeometry(),this.onResize()}createScene(){this.scene=new BI}createCamera(){this.camera=new yi(45,window.innerWidth/window.innerHeight,.1,100),this.camera.position.z=5}createRender(){this.renderer=new o0({alpha:!0,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),document.body.appendChild(this.renderer.domElement)}createGeometry(){this.geometry=new $o(1,1,16,16)}createHome(){this.home=new sO({scene:this.scene,geometry:this.geometry,screen:this.screen,viewport:this.viewport})}destroyHome(){this.home&&(this.home.destroy(),this.home=null)}createAbout(){this.about=new aO({scene:this.scene,geometry:this.geometry,screen:this.screen,viewport:this.viewport})}destroyAbout(){this.about&&(this.about.destroy(),this.about=null)}onPreloaded(){this.onChangeEnd(this.template)}onLoaded(e){this.onChangeEnd(e)}onChangeStart(){this.home&&this.home.hide(),this.about&&this.about.hide()}onChangeEnd(e){this.home&&this.destroyHome(),this.about&&this.destroyAbout(),e==="home"&&this.createHome(),e==="about"&&this.createAbout(),this.template=e}onResize(){this.screen={width:window.innerWidth,height:window.innerHeight},this.renderer.setSize(this.screen.width,this.screen.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.camera.aspect=this.screen.width/this.screen.height,this.camera.updateProjectionMatrix();const e=this.camera.fov*(Math.PI/180),t=2*Math.tan(e/2)*this.camera.position.z,n=t*this.camera.aspect;this.viewport={width:n,height:t},this.home&&this.home.onResize&&this.home.onResize({screen:this.screen,viewport:this.viewport}),this.about&&this.about.onResize&&this.about.onResize({screen:this.screen,viewport:this.viewport})}onTouchDown(e){}onTouchMove(e){}onTouchUp(){}onWheel(e){}update(e){this.home&&this.home.update&&this.home.update(e),this.about&&this.about.update&&this.about.update(e),this.renderer.render(this.scene,this.camera)}}var lx={exports:{}},jf={exports:{}},Ug;function lO(){return Ug||(Ug=1,function(i){(function(e,t){i.exports?i.exports=t():e.EvEmitter=t()})(typeof window<"u"?window:Ei,function(){function e(){}let t=e.prototype;return t.on=function(n,r){if(!n||!r)return this;let a=this._events=this._events||{},l=a[n]=a[n]||[];return l.includes(r)||l.push(r),this},t.once=function(n,r){if(!n||!r)return this;this.on(n,r);let a=this._onceEvents=this._onceEvents||{},l=a[n]=a[n]||{};return l[r]=!0,this},t.off=function(n,r){let a=this._events&&this._events[n];if(!a||!a.length)return this;let l=a.indexOf(r);return l!=-1&&a.splice(l,1),this},t.emitEvent=function(n,r){let a=this._events&&this._events[n];if(!a||!a.length)return this;a=a.slice(0),r=r||[];let l=this._onceEvents&&this._onceEvents[n];for(let c of a)l&&l[c]&&(this.off(n,c),delete l[c]),c.apply(this,r);return this},t.allOff=function(){return delete this._events,delete this._onceEvents,this},e})}(jf)),jf.exports}/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */(function(i){(function(e,t){i.exports?i.exports=t(e,lO()):e.imagesLoaded=t(e,e.EvEmitter)})(typeof window<"u"?window:Ei,function(t,n){let r=t.jQuery,a=t.console;function l(p){return Array.isArray(p)?p:typeof p=="object"&&typeof p.length=="number"?[...p]:[p]}function c(p,v,S){if(!(this instanceof c))return new c(p,v,S);let g=p;if(typeof p=="string"&&(g=document.querySelectorAll(p)),!g){a.error(`Bad element for imagesLoaded ${g||p}`);return}this.elements=l(g),this.options={},typeof v=="function"?S=v:Object.assign(this.options,v),S&&this.on("always",S),this.getImages(),r&&(this.jqDeferred=new r.Deferred),setTimeout(this.check.bind(this))}c.prototype=Object.create(n.prototype),c.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)};const u=[1,9,11];c.prototype.addElementImages=function(p){p.nodeName==="IMG"&&this.addImage(p),this.options.background===!0&&this.addElementBackgroundImages(p);let{nodeType:v}=p;if(!v||!u.includes(v))return;let S=p.querySelectorAll("img");for(let g of S)this.addImage(g);if(typeof this.options.background=="string"){let g=p.querySelectorAll(this.options.background);for(let m of g)this.addElementBackgroundImages(m)}};const h=/url\((['"])?(.*?)\1\)/gi;c.prototype.addElementBackgroundImages=function(p){let v=getComputedStyle(p);if(!v)return;let S=h.exec(v.backgroundImage);for(;S!==null;){let g=S&&S[2];g&&this.addBackground(g,p),S=h.exec(v.backgroundImage)}},c.prototype.addImage=function(p){let v=new d(p);this.images.push(v)},c.prototype.addBackground=function(p,v){let S=new _(p,v);this.images.push(S)},c.prototype.check=function(){if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length){this.complete();return}let p=(v,S,g)=>{setTimeout(()=>{this.progress(v,S,g)})};this.images.forEach(function(v){v.once("progress",p),v.check()})},c.prototype.progress=function(p,v,S){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!p.isLoaded,this.emitEvent("progress",[this,p,v]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,p),this.progressedCount===this.images.length&&this.complete(),this.options.debug&&a&&a.log(`progress: ${S}`,p,v)},c.prototype.complete=function(){let p=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(p,[this]),this.emitEvent("always",[this]),this.jqDeferred){let v=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[v](this)}};function d(p){this.img=p}d.prototype=Object.create(n.prototype),d.prototype.check=function(){if(this.getIsImageComplete()){this.confirm(this.img.naturalWidth!==0,"naturalWidth");return}this.proxyImage=new Image,this.img.crossOrigin&&(this.proxyImage.crossOrigin=this.img.crossOrigin),this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.currentSrc||this.img.src},d.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},d.prototype.confirm=function(p,v){this.isLoaded=p;let{parentNode:S}=this.img,g=S.nodeName==="PICTURE"?S:this.img;this.emitEvent("progress",[this,g,v])},d.prototype.handleEvent=function(p){let v="on"+p.type;this[v]&&this[v](p)},d.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},d.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},d.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)};function _(p,v){this.url=p,this.element=v,this.img=new Image}return _.prototype=Object.create(d.prototype),_.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(this.img.naturalWidth!==0,"naturalWidth"),this.unbindEvents())},_.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},_.prototype.confirm=function(p,v){this.isLoaded=p,this.emitEvent("progress",[this,this.element,v])},c.makeJQueryPlugin=function(p){p=p||t.jQuery,p&&(r=p,r.fn.imagesLoaded=function(v,S){return new c(this,v,S).jqDeferred.promise(r(this))})},c.makeJQueryPlugin(),c})})(lx);var cO=lx.exports;const Jf=Os(cO);var gd={exports:{}},Pa=typeof Reflect=="object"?Reflect:null,Og=Pa&&typeof Pa.apply=="function"?Pa.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)},xc;Pa&&typeof Pa.ownKeys=="function"?xc=Pa.ownKeys:Object.getOwnPropertySymbols?xc=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:xc=function(e){return Object.getOwnPropertyNames(e)};function uO(i){console&&console.warn&&console.warn(i)}var cx=Number.isNaN||function(e){return e!==e};function Ct(){Ct.init.call(this)}gd.exports=Ct;gd.exports.once=pO;Ct.EventEmitter=Ct;Ct.prototype._events=void 0;Ct.prototype._eventsCount=0;Ct.prototype._maxListeners=void 0;var Ng=10;function $c(i){if(typeof i!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof i)}Object.defineProperty(Ct,"defaultMaxListeners",{enumerable:!0,get:function(){return Ng},set:function(i){if(typeof i!="number"||i<0||cx(i))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+i+".");Ng=i}});Ct.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};Ct.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||cx(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function ux(i){return i._maxListeners===void 0?Ct.defaultMaxListeners:i._maxListeners}Ct.prototype.getMaxListeners=function(){return ux(this)};Ct.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r=e==="error",a=this._events;if(a!==void 0)r=r&&a.error===void 0;else if(!r)return!1;if(r){var l;if(t.length>0&&(l=t[0]),l instanceof Error)throw l;var c=new Error("Unhandled error."+(l?" ("+l.message+")":""));throw c.context=l,c}var u=a[e];if(u===void 0)return!1;if(typeof u=="function")Og(u,this,t);else for(var h=u.length,d=mx(u,h),n=0;n<h;++n)Og(d[n],this,t);return!0};function fx(i,e,t,n){var r,a,l;if($c(t),a=i._events,a===void 0?(a=i._events=Object.create(null),i._eventsCount=0):(a.newListener!==void 0&&(i.emit("newListener",e,t.listener?t.listener:t),a=i._events),l=a[e]),l===void 0)l=a[e]=t,++i._eventsCount;else if(typeof l=="function"?l=a[e]=n?[t,l]:[l,t]:n?l.unshift(t):l.push(t),r=ux(i),r>0&&l.length>r&&!l.warned){l.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+l.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=i,c.type=e,c.count=l.length,uO(c)}return i}Ct.prototype.addListener=function(e,t){return fx(this,e,t,!1)};Ct.prototype.on=Ct.prototype.addListener;Ct.prototype.prependListener=function(e,t){return fx(this,e,t,!0)};function fO(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function hx(i,e,t){var n={fired:!1,wrapFn:void 0,target:i,type:e,listener:t},r=fO.bind(n);return r.listener=t,n.wrapFn=r,r}Ct.prototype.once=function(e,t){return $c(t),this.on(e,hx(this,e,t)),this};Ct.prototype.prependOnceListener=function(e,t){return $c(t),this.prependListener(e,hx(this,e,t)),this};Ct.prototype.removeListener=function(e,t){var n,r,a,l,c;if($c(t),r=this._events,r===void 0)return this;if(n=r[e],n===void 0)return this;if(n===t||n.listener===t)--this._eventsCount===0?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if(typeof n!="function"){for(a=-1,l=n.length-1;l>=0;l--)if(n[l]===t||n[l].listener===t){c=n[l].listener,a=l;break}if(a<0)return this;a===0?n.shift():hO(n,a),n.length===1&&(r[e]=n[0]),r.removeListener!==void 0&&this.emit("removeListener",e,c||t)}return this};Ct.prototype.off=Ct.prototype.removeListener;Ct.prototype.removeAllListeners=function(e){var t,n,r;if(n=this._events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.length===0){var a=Object.keys(n),l;for(r=0;r<a.length;++r)l=a[r],l!=="removeListener"&&this.removeAllListeners(l);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(t=n[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this};function dx(i,e,t){var n=i._events;if(n===void 0)return[];var r=n[e];return r===void 0?[]:typeof r=="function"?t?[r.listener||r]:[r]:t?dO(r):mx(r,r.length)}Ct.prototype.listeners=function(e){return dx(this,e,!0)};Ct.prototype.rawListeners=function(e){return dx(this,e,!1)};Ct.listenerCount=function(i,e){return typeof i.listenerCount=="function"?i.listenerCount(e):px.call(i,e)};Ct.prototype.listenerCount=px;function px(i){var e=this._events;if(e!==void 0){var t=e[i];if(typeof t=="function")return 1;if(t!==void 0)return t.length}return 0}Ct.prototype.eventNames=function(){return this._eventsCount>0?xc(this._events):[]};function mx(i,e){for(var t=new Array(e),n=0;n<e;++n)t[n]=i[n];return t}function hO(i,e){for(;e+1<i.length;e++)i[e]=i[e+1];i.pop()}function dO(i){for(var e=new Array(i.length),t=0;t<e.length;++t)e[t]=i[t].listener||i[t];return e}function pO(i,e){return new Promise(function(t,n){function r(l){i.removeListener(e,a),n(l)}function a(){typeof i.removeListener=="function"&&i.removeListener("error",r),t([].slice.call(arguments))}_x(i,e,a,{once:!0}),e!=="error"&&mO(i,r,{once:!0})})}function mO(i,e,t){typeof i.on=="function"&&_x(i,"error",e,t)}function _x(i,e,t,n){if(typeof i.on=="function")n.once?i.once(e,t):i.on(e,t);else if(typeof i.addEventListener=="function")i.addEventListener(e,function r(a){n.once&&i.removeEventListener(e,r),t(a)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof i)}var _O=gd.exports;const gx=Os(_O);class vx extends gx{constructor({classes:e,element:t,elements:n}){super(),Nc(this),this.classes=e,this.selector=t,this.selectorChildren={...n},this.create(),this.addEventListeners()}create(){this.selector instanceof window.HTMLElement?this.element=this.selector:this.element=document.querySelector(this.selector),this.elements={},Mv(this.selectorChildren,(e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=this.element.querySelectorAll(e),this.elements[t].length===0?this.elements[t]=null:this.elements[t].length===1&&(this.elements[t]=this.element.querySelector(e)))})}addEventListeners(){}removeEventListeners(){}}class gO extends vx{constructor(){super({element:".preloader"}),this.loadedTextureUrl=[],window.TEXTURES={},this.textureLoader=new Hf}preload(e){this.loadedTextureUrl.push(window.location.pathname);const t=e.querySelectorAll("img"),n=new Promise(l=>{Jf(e,{background:!0},l)}),r=new Hf,a=Promise.all([...t].map(l=>new Promise(c=>{r.load(l,u=>{window.TEXTURES[l]=u,c()})})));Promise.all([n,a]).then(()=>{this.onPreloaded()})}load(e){const t=e.querySelectorAll("img");if(this.loadedTextureUrl.includes(window.location.pathname))Jf(e).on("done",()=>{this.onLoaded()});else{this.loadedTextureUrl.push(window.location.pathname);const n=new Promise(l=>{Jf(e,{background:!0},l)}),r=new Hf,a=Promise.all([...t].map(l=>new Promise(c=>{r.load(l,u=>{window.TEXTURES[l]=u,c()})})));Promise.all([n,a]).then(()=>{this.onLoaded()})}}onPreloaded(){this.emit("preloaded")}onLoaded(){this.emit("loaded")}}var Uc={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Uc.exports;(function(i,e){(function(){var t,n="4.17.21",r=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",c="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",h=500,d="__lodash_placeholder__",_=1,p=2,v=4,S=1,g=2,m=1,x=2,T=4,y=8,w=16,P=32,I=64,L=128,G=256,k=512,b=30,O="...",K=800,ne=16,z=1,$=2,V=3,j=1/0,Q=9007199254740991,le=17976931348623157e292,oe=NaN,se=4294967295,he=se-1,Ie=se>>>1,Z=[["ary",L],["bind",m],["bindKey",x],["curry",y],["curryRight",w],["flip",k],["partial",P],["partialRight",I],["rearg",G]],ce="[object Arguments]",Ae="[object Array]",ke="[object AsyncFunction]",Be="[object Boolean]",Ce="[object Date]",qe="[object DOMException]",Je="[object Error]",X="[object Function]",Vt="[object GeneratorFunction]",Le="[object Map]",Xe="[object Number]",ze="[object Null]",ut="[object Object]",Qe="[object Promise]",U="[object Proxy]",R="[object RegExp]",Y="[object Set]",me="[object String]",_e="[object Symbol]",Se="[object Undefined]",xe="[object WeakMap]",ge="[object WeakSet]",de="[object ArrayBuffer]",be="[object DataView]",Ve="[object Float32Array]",pe="[object Float64Array]",Ue="[object Int8Array]",Me="[object Int16Array]",He="[object Int32Array]",Ge="[object Uint8Array]",Pe="[object Uint8ClampedArray]",et="[object Uint16Array]",vt="[object Uint32Array]",Lt=/\b__p \+= '';/g,ht=/\b(__p \+=) '' \+/g,Et=/(__e\(.*?\)|\b__t\)) \+\n'';/g,N=/&(?:amp|lt|gt|quot|#39);/g,ye=/[&<>"']/g,Ee=RegExp(N.source),Oe=RegExp(ye.source),We=/<%-([\s\S]+?)%>/g,xt=/<%([\s\S]+?)%>/g,bt=/<%=([\s\S]+?)%>/g,tn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,In=/^\w*$/,wt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,nn=/[\\^$.*+?()[\]{}|]/g,ui=RegExp(nn.source),Bs=/^\s+/,Jc=/\s/,zs=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Yo=/\{\n\/\* \[wrapped with (.+)\] \*/,Gs=/,? & /,Ko=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Zo=/[()=,{}\[\]\/\s]/,Qc=/\\(\\)?/g,eu=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,jo=/\w*$/,D=/^[-+]0x[0-9a-f]+$/i,q=/^0b[01]+$/i,ee=/^\[object .+?Constructor\]$/,re=/^0o[0-7]+$/i,J=/^(?:0|[1-9]\d*)$/,Re=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ne=/($^)/,Ye=/['\n\r\u2028\u2029\\]/g,Ke="\\ud800-\\udfff",st="\\u0300-\\u036f",tt="\\ufe20-\\ufe2f",it="\\u20d0-\\u20ff",Gt=st+tt+it,vn="\\u2700-\\u27bf",Kt="a-z\\xdf-\\xf6\\xf8-\\xff",Ri="\\xac\\xb1\\xd7\\xf7",Ot="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ot="\\u2000-\\u206f",Za=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Nt="A-Z\\xc0-\\xd6\\xd8-\\xde",Bi="\\ufe0e\\ufe0f",ja=Ri+Ot+ot+Za,Ji="['’]",Ja="["+Ke+"]",rn="["+ja+"]",fi="["+Gt+"]",Hs="\\d+",Un="["+vn+"]",ks="["+Kt+"]",Jo="[^"+Ke+ja+Hs+vn+Kt+Nt+"]",Vs="\\ud83c[\\udffb-\\udfff]",Bx="(?:"+fi+"|"+Vs+")",bd="[^"+Ke+"]",tu="(?:\\ud83c[\\udde6-\\uddff]){2}",nu="[\\ud800-\\udbff][\\udc00-\\udfff]",Ws="["+Nt+"]",Td="\\u200d",wd="(?:"+ks+"|"+Jo+")",zx="(?:"+Ws+"|"+Jo+")",Ad="(?:"+Ji+"(?:d|ll|m|re|s|t|ve))?",Rd="(?:"+Ji+"(?:D|LL|M|RE|S|T|VE))?",Cd=Bx+"?",Ld="["+Bi+"]?",Gx="(?:"+Td+"(?:"+[bd,tu,nu].join("|")+")"+Ld+Cd+")*",Hx="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",kx="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Pd=Ld+Cd+Gx,Vx="(?:"+[Un,tu,nu].join("|")+")"+Pd,Wx="(?:"+[bd+fi+"?",fi,tu,nu,Ja].join("|")+")",Xx=RegExp(Ji,"g"),$x=RegExp(fi,"g"),iu=RegExp(Vs+"(?="+Vs+")|"+Wx+Pd,"g"),qx=RegExp([Ws+"?"+ks+"+"+Ad+"(?="+[rn,Ws,"$"].join("|")+")",zx+"+"+Rd+"(?="+[rn,Ws+wd,"$"].join("|")+")",Ws+"?"+wd+"+"+Ad,Ws+"+"+Rd,kx,Hx,Hs,Vx].join("|"),"g"),Yx=RegExp("["+Td+Ke+Gt+Bi+"]"),Kx=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Zx=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],jx=-1,Ft={};Ft[Ve]=Ft[pe]=Ft[Ue]=Ft[Me]=Ft[He]=Ft[Ge]=Ft[Pe]=Ft[et]=Ft[vt]=!0,Ft[ce]=Ft[Ae]=Ft[de]=Ft[Be]=Ft[be]=Ft[Ce]=Ft[Je]=Ft[X]=Ft[Le]=Ft[Xe]=Ft[ut]=Ft[R]=Ft[Y]=Ft[me]=Ft[xe]=!1;var It={};It[ce]=It[Ae]=It[de]=It[be]=It[Be]=It[Ce]=It[Ve]=It[pe]=It[Ue]=It[Me]=It[He]=It[Le]=It[Xe]=It[ut]=It[R]=It[Y]=It[me]=It[_e]=It[Ge]=It[Pe]=It[et]=It[vt]=!0,It[Je]=It[X]=It[xe]=!1;var Jx={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Qx={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},eS={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},tS={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},nS=parseFloat,iS=parseInt,Dd=typeof Ei=="object"&&Ei&&Ei.Object===Object&&Ei,rS=typeof self=="object"&&self&&self.Object===Object&&self,dn=Dd||rS||Function("return this")(),ru=e&&!e.nodeType&&e,es=ru&&!0&&i&&!i.nodeType&&i,Id=es&&es.exports===ru,su=Id&&Dd.process,hi=function(){try{var H=es&&es.require&&es.require("util").types;return H||su&&su.binding&&su.binding("util")}catch{}}(),Ud=hi&&hi.isArrayBuffer,Od=hi&&hi.isDate,Nd=hi&&hi.isMap,Fd=hi&&hi.isRegExp,Bd=hi&&hi.isSet,zd=hi&&hi.isTypedArray;function Zn(H,ae,te){switch(te.length){case 0:return H.call(ae);case 1:return H.call(ae,te[0]);case 2:return H.call(ae,te[0],te[1]);case 3:return H.call(ae,te[0],te[1],te[2])}return H.apply(ae,te)}function sS(H,ae,te,De){for(var nt=-1,St=H==null?0:H.length;++nt<St;){var sn=H[nt];ae(De,sn,te(sn),H)}return De}function di(H,ae){for(var te=-1,De=H==null?0:H.length;++te<De&&ae(H[te],te,H)!==!1;);return H}function aS(H,ae){for(var te=H==null?0:H.length;te--&&ae(H[te],te,H)!==!1;);return H}function Gd(H,ae){for(var te=-1,De=H==null?0:H.length;++te<De;)if(!ae(H[te],te,H))return!1;return!0}function Tr(H,ae){for(var te=-1,De=H==null?0:H.length,nt=0,St=[];++te<De;){var sn=H[te];ae(sn,te,H)&&(St[nt++]=sn)}return St}function Qo(H,ae){var te=H==null?0:H.length;return!!te&&Xs(H,ae,0)>-1}function au(H,ae,te){for(var De=-1,nt=H==null?0:H.length;++De<nt;)if(te(ae,H[De]))return!0;return!1}function Ht(H,ae){for(var te=-1,De=H==null?0:H.length,nt=Array(De);++te<De;)nt[te]=ae(H[te],te,H);return nt}function wr(H,ae){for(var te=-1,De=ae.length,nt=H.length;++te<De;)H[nt+te]=ae[te];return H}function ou(H,ae,te,De){var nt=-1,St=H==null?0:H.length;for(De&&St&&(te=H[++nt]);++nt<St;)te=ae(te,H[nt],nt,H);return te}function oS(H,ae,te,De){var nt=H==null?0:H.length;for(De&&nt&&(te=H[--nt]);nt--;)te=ae(te,H[nt],nt,H);return te}function lu(H,ae){for(var te=-1,De=H==null?0:H.length;++te<De;)if(ae(H[te],te,H))return!0;return!1}var lS=cu("length");function cS(H){return H.split("")}function uS(H){return H.match(Ko)||[]}function Hd(H,ae,te){var De;return te(H,function(nt,St,sn){if(ae(nt,St,sn))return De=St,!1}),De}function el(H,ae,te,De){for(var nt=H.length,St=te+(De?1:-1);De?St--:++St<nt;)if(ae(H[St],St,H))return St;return-1}function Xs(H,ae,te){return ae===ae?yS(H,ae,te):el(H,kd,te)}function fS(H,ae,te,De){for(var nt=te-1,St=H.length;++nt<St;)if(De(H[nt],ae))return nt;return-1}function kd(H){return H!==H}function Vd(H,ae){var te=H==null?0:H.length;return te?fu(H,ae)/te:oe}function cu(H){return function(ae){return ae==null?t:ae[H]}}function uu(H){return function(ae){return H==null?t:H[ae]}}function Wd(H,ae,te,De,nt){return nt(H,function(St,sn,Pt){te=De?(De=!1,St):ae(te,St,sn,Pt)}),te}function hS(H,ae){var te=H.length;for(H.sort(ae);te--;)H[te]=H[te].value;return H}function fu(H,ae){for(var te,De=-1,nt=H.length;++De<nt;){var St=ae(H[De]);St!==t&&(te=te===t?St:te+St)}return te}function hu(H,ae){for(var te=-1,De=Array(H);++te<H;)De[te]=ae(te);return De}function dS(H,ae){return Ht(ae,function(te){return[te,H[te]]})}function Xd(H){return H&&H.slice(0,Kd(H)+1).replace(Bs,"")}function jn(H){return function(ae){return H(ae)}}function du(H,ae){return Ht(ae,function(te){return H[te]})}function Qa(H,ae){return H.has(ae)}function $d(H,ae){for(var te=-1,De=H.length;++te<De&&Xs(ae,H[te],0)>-1;);return te}function qd(H,ae){for(var te=H.length;te--&&Xs(ae,H[te],0)>-1;);return te}function pS(H,ae){for(var te=H.length,De=0;te--;)H[te]===ae&&++De;return De}var mS=uu(Jx),_S=uu(Qx);function gS(H){return"\\"+tS[H]}function vS(H,ae){return H==null?t:H[ae]}function $s(H){return Yx.test(H)}function xS(H){return Kx.test(H)}function SS(H){for(var ae,te=[];!(ae=H.next()).done;)te.push(ae.value);return te}function pu(H){var ae=-1,te=Array(H.size);return H.forEach(function(De,nt){te[++ae]=[nt,De]}),te}function Yd(H,ae){return function(te){return H(ae(te))}}function Ar(H,ae){for(var te=-1,De=H.length,nt=0,St=[];++te<De;){var sn=H[te];(sn===ae||sn===d)&&(H[te]=d,St[nt++]=te)}return St}function tl(H){var ae=-1,te=Array(H.size);return H.forEach(function(De){te[++ae]=De}),te}function MS(H){var ae=-1,te=Array(H.size);return H.forEach(function(De){te[++ae]=[De,De]}),te}function yS(H,ae,te){for(var De=te-1,nt=H.length;++De<nt;)if(H[De]===ae)return De;return-1}function ES(H,ae,te){for(var De=te+1;De--;)if(H[De]===ae)return De;return De}function qs(H){return $s(H)?TS(H):lS(H)}function Ci(H){return $s(H)?wS(H):cS(H)}function Kd(H){for(var ae=H.length;ae--&&Jc.test(H.charAt(ae)););return ae}var bS=uu(eS);function TS(H){for(var ae=iu.lastIndex=0;iu.test(H);)++ae;return ae}function wS(H){return H.match(iu)||[]}function AS(H){return H.match(qx)||[]}var RS=function H(ae){ae=ae==null?dn:Ys.defaults(dn.Object(),ae,Ys.pick(dn,Zx));var te=ae.Array,De=ae.Date,nt=ae.Error,St=ae.Function,sn=ae.Math,Pt=ae.Object,mu=ae.RegExp,CS=ae.String,pi=ae.TypeError,nl=te.prototype,LS=St.prototype,Ks=Pt.prototype,il=ae["__core-js_shared__"],rl=LS.toString,Tt=Ks.hasOwnProperty,PS=0,Zd=function(){var s=/[^.]+$/.exec(il&&il.keys&&il.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),sl=Ks.toString,DS=rl.call(Pt),IS=dn._,US=mu("^"+rl.call(Tt).replace(nn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),al=Id?ae.Buffer:t,Rr=ae.Symbol,ol=ae.Uint8Array,jd=al?al.allocUnsafe:t,ll=Yd(Pt.getPrototypeOf,Pt),Jd=Pt.create,Qd=Ks.propertyIsEnumerable,cl=nl.splice,ep=Rr?Rr.isConcatSpreadable:t,eo=Rr?Rr.iterator:t,ts=Rr?Rr.toStringTag:t,ul=function(){try{var s=as(Pt,"defineProperty");return s({},"",{}),s}catch{}}(),OS=ae.clearTimeout!==dn.clearTimeout&&ae.clearTimeout,NS=De&&De.now!==dn.Date.now&&De.now,FS=ae.setTimeout!==dn.setTimeout&&ae.setTimeout,fl=sn.ceil,hl=sn.floor,_u=Pt.getOwnPropertySymbols,BS=al?al.isBuffer:t,tp=ae.isFinite,zS=nl.join,GS=Yd(Pt.keys,Pt),an=sn.max,xn=sn.min,HS=De.now,kS=ae.parseInt,np=sn.random,VS=nl.reverse,gu=as(ae,"DataView"),to=as(ae,"Map"),vu=as(ae,"Promise"),Zs=as(ae,"Set"),no=as(ae,"WeakMap"),io=as(Pt,"create"),dl=no&&new no,js={},WS=os(gu),XS=os(to),$S=os(vu),qS=os(Zs),YS=os(no),pl=Rr?Rr.prototype:t,ro=pl?pl.valueOf:t,ip=pl?pl.toString:t;function A(s){if(qt(s)&&!rt(s)&&!(s instanceof mt)){if(s instanceof mi)return s;if(Tt.call(s,"__wrapped__"))return rm(s)}return new mi(s)}var Js=function(){function s(){}return function(o){if(!Wt(o))return{};if(Jd)return Jd(o);s.prototype=o;var f=new s;return s.prototype=t,f}}();function ml(){}function mi(s,o){this.__wrapped__=s,this.__actions__=[],this.__chain__=!!o,this.__index__=0,this.__values__=t}A.templateSettings={escape:We,evaluate:xt,interpolate:bt,variable:"",imports:{_:A}},A.prototype=ml.prototype,A.prototype.constructor=A,mi.prototype=Js(ml.prototype),mi.prototype.constructor=mi;function mt(s){this.__wrapped__=s,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=se,this.__views__=[]}function KS(){var s=new mt(this.__wrapped__);return s.__actions__=On(this.__actions__),s.__dir__=this.__dir__,s.__filtered__=this.__filtered__,s.__iteratees__=On(this.__iteratees__),s.__takeCount__=this.__takeCount__,s.__views__=On(this.__views__),s}function ZS(){if(this.__filtered__){var s=new mt(this);s.__dir__=-1,s.__filtered__=!0}else s=this.clone(),s.__dir__*=-1;return s}function jS(){var s=this.__wrapped__.value(),o=this.__dir__,f=rt(s),M=o<0,E=f?s.length:0,C=cy(0,E,this.__views__),F=C.start,B=C.end,W=B-F,ue=M?B:F-1,fe=this.__iteratees__,ve=fe.length,we=0,Fe=xn(W,this.__takeCount__);if(!f||!M&&E==W&&Fe==W)return Ap(s,this.__actions__);var Ze=[];e:for(;W--&&we<Fe;){ue+=o;for(var lt=-1,je=s[ue];++lt<ve;){var pt=fe[lt],_t=pt.iteratee,ei=pt.type,Rn=_t(je);if(ei==$)je=Rn;else if(!Rn){if(ei==z)continue e;break e}}Ze[we++]=je}return Ze}mt.prototype=Js(ml.prototype),mt.prototype.constructor=mt;function ns(s){var o=-1,f=s==null?0:s.length;for(this.clear();++o<f;){var M=s[o];this.set(M[0],M[1])}}function JS(){this.__data__=io?io(null):{},this.size=0}function QS(s){var o=this.has(s)&&delete this.__data__[s];return this.size-=o?1:0,o}function eM(s){var o=this.__data__;if(io){var f=o[s];return f===u?t:f}return Tt.call(o,s)?o[s]:t}function tM(s){var o=this.__data__;return io?o[s]!==t:Tt.call(o,s)}function nM(s,o){var f=this.__data__;return this.size+=this.has(s)?0:1,f[s]=io&&o===t?u:o,this}ns.prototype.clear=JS,ns.prototype.delete=QS,ns.prototype.get=eM,ns.prototype.has=tM,ns.prototype.set=nM;function Qi(s){var o=-1,f=s==null?0:s.length;for(this.clear();++o<f;){var M=s[o];this.set(M[0],M[1])}}function iM(){this.__data__=[],this.size=0}function rM(s){var o=this.__data__,f=_l(o,s);if(f<0)return!1;var M=o.length-1;return f==M?o.pop():cl.call(o,f,1),--this.size,!0}function sM(s){var o=this.__data__,f=_l(o,s);return f<0?t:o[f][1]}function aM(s){return _l(this.__data__,s)>-1}function oM(s,o){var f=this.__data__,M=_l(f,s);return M<0?(++this.size,f.push([s,o])):f[M][1]=o,this}Qi.prototype.clear=iM,Qi.prototype.delete=rM,Qi.prototype.get=sM,Qi.prototype.has=aM,Qi.prototype.set=oM;function er(s){var o=-1,f=s==null?0:s.length;for(this.clear();++o<f;){var M=s[o];this.set(M[0],M[1])}}function lM(){this.size=0,this.__data__={hash:new ns,map:new(to||Qi),string:new ns}}function cM(s){var o=Rl(this,s).delete(s);return this.size-=o?1:0,o}function uM(s){return Rl(this,s).get(s)}function fM(s){return Rl(this,s).has(s)}function hM(s,o){var f=Rl(this,s),M=f.size;return f.set(s,o),this.size+=f.size==M?0:1,this}er.prototype.clear=lM,er.prototype.delete=cM,er.prototype.get=uM,er.prototype.has=fM,er.prototype.set=hM;function is(s){var o=-1,f=s==null?0:s.length;for(this.__data__=new er;++o<f;)this.add(s[o])}function dM(s){return this.__data__.set(s,u),this}function pM(s){return this.__data__.has(s)}is.prototype.add=is.prototype.push=dM,is.prototype.has=pM;function Li(s){var o=this.__data__=new Qi(s);this.size=o.size}function mM(){this.__data__=new Qi,this.size=0}function _M(s){var o=this.__data__,f=o.delete(s);return this.size=o.size,f}function gM(s){return this.__data__.get(s)}function vM(s){return this.__data__.has(s)}function xM(s,o){var f=this.__data__;if(f instanceof Qi){var M=f.__data__;if(!to||M.length<r-1)return M.push([s,o]),this.size=++f.size,this;f=this.__data__=new er(M)}return f.set(s,o),this.size=f.size,this}Li.prototype.clear=mM,Li.prototype.delete=_M,Li.prototype.get=gM,Li.prototype.has=vM,Li.prototype.set=xM;function rp(s,o){var f=rt(s),M=!f&&ls(s),E=!f&&!M&&Ir(s),C=!f&&!M&&!E&&na(s),F=f||M||E||C,B=F?hu(s.length,CS):[],W=B.length;for(var ue in s)(o||Tt.call(s,ue))&&!(F&&(ue=="length"||E&&(ue=="offset"||ue=="parent")||C&&(ue=="buffer"||ue=="byteLength"||ue=="byteOffset")||rr(ue,W)))&&B.push(ue);return B}function sp(s){var o=s.length;return o?s[Cu(0,o-1)]:t}function SM(s,o){return Cl(On(s),rs(o,0,s.length))}function MM(s){return Cl(On(s))}function xu(s,o,f){(f!==t&&!Pi(s[o],f)||f===t&&!(o in s))&&tr(s,o,f)}function so(s,o,f){var M=s[o];(!(Tt.call(s,o)&&Pi(M,f))||f===t&&!(o in s))&&tr(s,o,f)}function _l(s,o){for(var f=s.length;f--;)if(Pi(s[f][0],o))return f;return-1}function yM(s,o,f,M){return Cr(s,function(E,C,F){o(M,E,f(E),F)}),M}function ap(s,o){return s&&Gi(o,cn(o),s)}function EM(s,o){return s&&Gi(o,Fn(o),s)}function tr(s,o,f){o=="__proto__"&&ul?ul(s,o,{configurable:!0,enumerable:!0,value:f,writable:!0}):s[o]=f}function Su(s,o){for(var f=-1,M=o.length,E=te(M),C=s==null;++f<M;)E[f]=C?t:ef(s,o[f]);return E}function rs(s,o,f){return s===s&&(f!==t&&(s=s<=f?s:f),o!==t&&(s=s>=o?s:o)),s}function _i(s,o,f,M,E,C){var F,B=o&_,W=o&p,ue=o&v;if(f&&(F=E?f(s,M,E,C):f(s)),F!==t)return F;if(!Wt(s))return s;var fe=rt(s);if(fe){if(F=fy(s),!B)return On(s,F)}else{var ve=Sn(s),we=ve==X||ve==Vt;if(Ir(s))return Lp(s,B);if(ve==ut||ve==ce||we&&!E){if(F=W||we?{}:Kp(s),!B)return W?ey(s,EM(F,s)):QM(s,ap(F,s))}else{if(!It[ve])return E?s:{};F=hy(s,ve,B)}}C||(C=new Li);var Fe=C.get(s);if(Fe)return Fe;C.set(s,F),bm(s)?s.forEach(function(je){F.add(_i(je,o,f,je,s,C))}):ym(s)&&s.forEach(function(je,pt){F.set(pt,_i(je,o,f,pt,s,C))});var Ze=ue?W?Gu:zu:W?Fn:cn,lt=fe?t:Ze(s);return di(lt||s,function(je,pt){lt&&(pt=je,je=s[pt]),so(F,pt,_i(je,o,f,pt,s,C))}),F}function bM(s){var o=cn(s);return function(f){return op(f,s,o)}}function op(s,o,f){var M=f.length;if(s==null)return!M;for(s=Pt(s);M--;){var E=f[M],C=o[E],F=s[E];if(F===t&&!(E in s)||!C(F))return!1}return!0}function lp(s,o,f){if(typeof s!="function")throw new pi(l);return ho(function(){s.apply(t,f)},o)}function ao(s,o,f,M){var E=-1,C=Qo,F=!0,B=s.length,W=[],ue=o.length;if(!B)return W;f&&(o=Ht(o,jn(f))),M?(C=au,F=!1):o.length>=r&&(C=Qa,F=!1,o=new is(o));e:for(;++E<B;){var fe=s[E],ve=f==null?fe:f(fe);if(fe=M||fe!==0?fe:0,F&&ve===ve){for(var we=ue;we--;)if(o[we]===ve)continue e;W.push(fe)}else C(o,ve,M)||W.push(fe)}return W}var Cr=Op(zi),cp=Op(yu,!0);function TM(s,o){var f=!0;return Cr(s,function(M,E,C){return f=!!o(M,E,C),f}),f}function gl(s,o,f){for(var M=-1,E=s.length;++M<E;){var C=s[M],F=o(C);if(F!=null&&(B===t?F===F&&!Qn(F):f(F,B)))var B=F,W=C}return W}function wM(s,o,f,M){var E=s.length;for(f=at(f),f<0&&(f=-f>E?0:E+f),M=M===t||M>E?E:at(M),M<0&&(M+=E),M=f>M?0:wm(M);f<M;)s[f++]=o;return s}function up(s,o){var f=[];return Cr(s,function(M,E,C){o(M,E,C)&&f.push(M)}),f}function pn(s,o,f,M,E){var C=-1,F=s.length;for(f||(f=py),E||(E=[]);++C<F;){var B=s[C];o>0&&f(B)?o>1?pn(B,o-1,f,M,E):wr(E,B):M||(E[E.length]=B)}return E}var Mu=Np(),fp=Np(!0);function zi(s,o){return s&&Mu(s,o,cn)}function yu(s,o){return s&&fp(s,o,cn)}function vl(s,o){return Tr(o,function(f){return sr(s[f])})}function ss(s,o){o=Pr(o,s);for(var f=0,M=o.length;s!=null&&f<M;)s=s[Hi(o[f++])];return f&&f==M?s:t}function hp(s,o,f){var M=o(s);return rt(s)?M:wr(M,f(s))}function wn(s){return s==null?s===t?Se:ze:ts&&ts in Pt(s)?ly(s):My(s)}function Eu(s,o){return s>o}function AM(s,o){return s!=null&&Tt.call(s,o)}function RM(s,o){return s!=null&&o in Pt(s)}function CM(s,o,f){return s>=xn(o,f)&&s<an(o,f)}function bu(s,o,f){for(var M=f?au:Qo,E=s[0].length,C=s.length,F=C,B=te(C),W=1/0,ue=[];F--;){var fe=s[F];F&&o&&(fe=Ht(fe,jn(o))),W=xn(fe.length,W),B[F]=!f&&(o||E>=120&&fe.length>=120)?new is(F&&fe):t}fe=s[0];var ve=-1,we=B[0];e:for(;++ve<E&&ue.length<W;){var Fe=fe[ve],Ze=o?o(Fe):Fe;if(Fe=f||Fe!==0?Fe:0,!(we?Qa(we,Ze):M(ue,Ze,f))){for(F=C;--F;){var lt=B[F];if(!(lt?Qa(lt,Ze):M(s[F],Ze,f)))continue e}we&&we.push(Ze),ue.push(Fe)}}return ue}function LM(s,o,f,M){return zi(s,function(E,C,F){o(M,f(E),C,F)}),M}function oo(s,o,f){o=Pr(o,s),s=Qp(s,o);var M=s==null?s:s[Hi(vi(o))];return M==null?t:Zn(M,s,f)}function dp(s){return qt(s)&&wn(s)==ce}function PM(s){return qt(s)&&wn(s)==de}function DM(s){return qt(s)&&wn(s)==Ce}function lo(s,o,f,M,E){return s===o?!0:s==null||o==null||!qt(s)&&!qt(o)?s!==s&&o!==o:IM(s,o,f,M,lo,E)}function IM(s,o,f,M,E,C){var F=rt(s),B=rt(o),W=F?Ae:Sn(s),ue=B?Ae:Sn(o);W=W==ce?ut:W,ue=ue==ce?ut:ue;var fe=W==ut,ve=ue==ut,we=W==ue;if(we&&Ir(s)){if(!Ir(o))return!1;F=!0,fe=!1}if(we&&!fe)return C||(C=new Li),F||na(s)?$p(s,o,f,M,E,C):ay(s,o,W,f,M,E,C);if(!(f&S)){var Fe=fe&&Tt.call(s,"__wrapped__"),Ze=ve&&Tt.call(o,"__wrapped__");if(Fe||Ze){var lt=Fe?s.value():s,je=Ze?o.value():o;return C||(C=new Li),E(lt,je,f,M,C)}}return we?(C||(C=new Li),oy(s,o,f,M,E,C)):!1}function UM(s){return qt(s)&&Sn(s)==Le}function Tu(s,o,f,M){var E=f.length,C=E,F=!M;if(s==null)return!C;for(s=Pt(s);E--;){var B=f[E];if(F&&B[2]?B[1]!==s[B[0]]:!(B[0]in s))return!1}for(;++E<C;){B=f[E];var W=B[0],ue=s[W],fe=B[1];if(F&&B[2]){if(ue===t&&!(W in s))return!1}else{var ve=new Li;if(M)var we=M(ue,fe,W,s,o,ve);if(!(we===t?lo(fe,ue,S|g,M,ve):we))return!1}}return!0}function pp(s){if(!Wt(s)||_y(s))return!1;var o=sr(s)?US:ee;return o.test(os(s))}function OM(s){return qt(s)&&wn(s)==R}function NM(s){return qt(s)&&Sn(s)==Y}function FM(s){return qt(s)&&Ol(s.length)&&!!Ft[wn(s)]}function mp(s){return typeof s=="function"?s:s==null?Bn:typeof s=="object"?rt(s)?vp(s[0],s[1]):gp(s):Fm(s)}function wu(s){if(!fo(s))return GS(s);var o=[];for(var f in Pt(s))Tt.call(s,f)&&f!="constructor"&&o.push(f);return o}function BM(s){if(!Wt(s))return Sy(s);var o=fo(s),f=[];for(var M in s)M=="constructor"&&(o||!Tt.call(s,M))||f.push(M);return f}function Au(s,o){return s<o}function _p(s,o){var f=-1,M=Nn(s)?te(s.length):[];return Cr(s,function(E,C,F){M[++f]=o(E,C,F)}),M}function gp(s){var o=ku(s);return o.length==1&&o[0][2]?jp(o[0][0],o[0][1]):function(f){return f===s||Tu(f,s,o)}}function vp(s,o){return Wu(s)&&Zp(o)?jp(Hi(s),o):function(f){var M=ef(f,s);return M===t&&M===o?tf(f,s):lo(o,M,S|g)}}function xl(s,o,f,M,E){s!==o&&Mu(o,function(C,F){if(E||(E=new Li),Wt(C))zM(s,o,F,f,xl,M,E);else{var B=M?M($u(s,F),C,F+"",s,o,E):t;B===t&&(B=C),xu(s,F,B)}},Fn)}function zM(s,o,f,M,E,C,F){var B=$u(s,f),W=$u(o,f),ue=F.get(W);if(ue){xu(s,f,ue);return}var fe=C?C(B,W,f+"",s,o,F):t,ve=fe===t;if(ve){var we=rt(W),Fe=!we&&Ir(W),Ze=!we&&!Fe&&na(W);fe=W,we||Fe||Ze?rt(B)?fe=B:Zt(B)?fe=On(B):Fe?(ve=!1,fe=Lp(W,!0)):Ze?(ve=!1,fe=Pp(W,!0)):fe=[]:po(W)||ls(W)?(fe=B,ls(B)?fe=Am(B):(!Wt(B)||sr(B))&&(fe=Kp(W))):ve=!1}ve&&(F.set(W,fe),E(fe,W,M,C,F),F.delete(W)),xu(s,f,fe)}function xp(s,o){var f=s.length;if(f)return o+=o<0?f:0,rr(o,f)?s[o]:t}function Sp(s,o,f){o.length?o=Ht(o,function(C){return rt(C)?function(F){return ss(F,C.length===1?C[0]:C)}:C}):o=[Bn];var M=-1;o=Ht(o,jn($e()));var E=_p(s,function(C,F,B){var W=Ht(o,function(ue){return ue(C)});return{criteria:W,index:++M,value:C}});return hS(E,function(C,F){return JM(C,F,f)})}function GM(s,o){return Mp(s,o,function(f,M){return tf(s,M)})}function Mp(s,o,f){for(var M=-1,E=o.length,C={};++M<E;){var F=o[M],B=ss(s,F);f(B,F)&&co(C,Pr(F,s),B)}return C}function HM(s){return function(o){return ss(o,s)}}function Ru(s,o,f,M){var E=M?fS:Xs,C=-1,F=o.length,B=s;for(s===o&&(o=On(o)),f&&(B=Ht(s,jn(f)));++C<F;)for(var W=0,ue=o[C],fe=f?f(ue):ue;(W=E(B,fe,W,M))>-1;)B!==s&&cl.call(B,W,1),cl.call(s,W,1);return s}function yp(s,o){for(var f=s?o.length:0,M=f-1;f--;){var E=o[f];if(f==M||E!==C){var C=E;rr(E)?cl.call(s,E,1):Du(s,E)}}return s}function Cu(s,o){return s+hl(np()*(o-s+1))}function kM(s,o,f,M){for(var E=-1,C=an(fl((o-s)/(f||1)),0),F=te(C);C--;)F[M?C:++E]=s,s+=f;return F}function Lu(s,o){var f="";if(!s||o<1||o>Q)return f;do o%2&&(f+=s),o=hl(o/2),o&&(s+=s);while(o);return f}function ft(s,o){return qu(Jp(s,o,Bn),s+"")}function VM(s){return sp(ia(s))}function WM(s,o){var f=ia(s);return Cl(f,rs(o,0,f.length))}function co(s,o,f,M){if(!Wt(s))return s;o=Pr(o,s);for(var E=-1,C=o.length,F=C-1,B=s;B!=null&&++E<C;){var W=Hi(o[E]),ue=f;if(W==="__proto__"||W==="constructor"||W==="prototype")return s;if(E!=F){var fe=B[W];ue=M?M(fe,W,B):t,ue===t&&(ue=Wt(fe)?fe:rr(o[E+1])?[]:{})}so(B,W,ue),B=B[W]}return s}var Ep=dl?function(s,o){return dl.set(s,o),s}:Bn,XM=ul?function(s,o){return ul(s,"toString",{configurable:!0,enumerable:!1,value:rf(o),writable:!0})}:Bn;function $M(s){return Cl(ia(s))}function gi(s,o,f){var M=-1,E=s.length;o<0&&(o=-o>E?0:E+o),f=f>E?E:f,f<0&&(f+=E),E=o>f?0:f-o>>>0,o>>>=0;for(var C=te(E);++M<E;)C[M]=s[M+o];return C}function qM(s,o){var f;return Cr(s,function(M,E,C){return f=o(M,E,C),!f}),!!f}function Sl(s,o,f){var M=0,E=s==null?M:s.length;if(typeof o=="number"&&o===o&&E<=Ie){for(;M<E;){var C=M+E>>>1,F=s[C];F!==null&&!Qn(F)&&(f?F<=o:F<o)?M=C+1:E=C}return E}return Pu(s,o,Bn,f)}function Pu(s,o,f,M){var E=0,C=s==null?0:s.length;if(C===0)return 0;o=f(o);for(var F=o!==o,B=o===null,W=Qn(o),ue=o===t;E<C;){var fe=hl((E+C)/2),ve=f(s[fe]),we=ve!==t,Fe=ve===null,Ze=ve===ve,lt=Qn(ve);if(F)var je=M||Ze;else ue?je=Ze&&(M||we):B?je=Ze&&we&&(M||!Fe):W?je=Ze&&we&&!Fe&&(M||!lt):Fe||lt?je=!1:je=M?ve<=o:ve<o;je?E=fe+1:C=fe}return xn(C,he)}function bp(s,o){for(var f=-1,M=s.length,E=0,C=[];++f<M;){var F=s[f],B=o?o(F):F;if(!f||!Pi(B,W)){var W=B;C[E++]=F===0?0:F}}return C}function Tp(s){return typeof s=="number"?s:Qn(s)?oe:+s}function Jn(s){if(typeof s=="string")return s;if(rt(s))return Ht(s,Jn)+"";if(Qn(s))return ip?ip.call(s):"";var o=s+"";return o=="0"&&1/s==-j?"-0":o}function Lr(s,o,f){var M=-1,E=Qo,C=s.length,F=!0,B=[],W=B;if(f)F=!1,E=au;else if(C>=r){var ue=o?null:ry(s);if(ue)return tl(ue);F=!1,E=Qa,W=new is}else W=o?[]:B;e:for(;++M<C;){var fe=s[M],ve=o?o(fe):fe;if(fe=f||fe!==0?fe:0,F&&ve===ve){for(var we=W.length;we--;)if(W[we]===ve)continue e;o&&W.push(ve),B.push(fe)}else E(W,ve,f)||(W!==B&&W.push(ve),B.push(fe))}return B}function Du(s,o){return o=Pr(o,s),s=Qp(s,o),s==null||delete s[Hi(vi(o))]}function wp(s,o,f,M){return co(s,o,f(ss(s,o)),M)}function Ml(s,o,f,M){for(var E=s.length,C=M?E:-1;(M?C--:++C<E)&&o(s[C],C,s););return f?gi(s,M?0:C,M?C+1:E):gi(s,M?C+1:0,M?E:C)}function Ap(s,o){var f=s;return f instanceof mt&&(f=f.value()),ou(o,function(M,E){return E.func.apply(E.thisArg,wr([M],E.args))},f)}function Iu(s,o,f){var M=s.length;if(M<2)return M?Lr(s[0]):[];for(var E=-1,C=te(M);++E<M;)for(var F=s[E],B=-1;++B<M;)B!=E&&(C[E]=ao(C[E]||F,s[B],o,f));return Lr(pn(C,1),o,f)}function Rp(s,o,f){for(var M=-1,E=s.length,C=o.length,F={};++M<E;){var B=M<C?o[M]:t;f(F,s[M],B)}return F}function Uu(s){return Zt(s)?s:[]}function Ou(s){return typeof s=="function"?s:Bn}function Pr(s,o){return rt(s)?s:Wu(s,o)?[s]:im(Mt(s))}var YM=ft;function Dr(s,o,f){var M=s.length;return f=f===t?M:f,!o&&f>=M?s:gi(s,o,f)}var Cp=OS||function(s){return dn.clearTimeout(s)};function Lp(s,o){if(o)return s.slice();var f=s.length,M=jd?jd(f):new s.constructor(f);return s.copy(M),M}function Nu(s){var o=new s.constructor(s.byteLength);return new ol(o).set(new ol(s)),o}function KM(s,o){var f=o?Nu(s.buffer):s.buffer;return new s.constructor(f,s.byteOffset,s.byteLength)}function ZM(s){var o=new s.constructor(s.source,jo.exec(s));return o.lastIndex=s.lastIndex,o}function jM(s){return ro?Pt(ro.call(s)):{}}function Pp(s,o){var f=o?Nu(s.buffer):s.buffer;return new s.constructor(f,s.byteOffset,s.length)}function Dp(s,o){if(s!==o){var f=s!==t,M=s===null,E=s===s,C=Qn(s),F=o!==t,B=o===null,W=o===o,ue=Qn(o);if(!B&&!ue&&!C&&s>o||C&&F&&W&&!B&&!ue||M&&F&&W||!f&&W||!E)return 1;if(!M&&!C&&!ue&&s<o||ue&&f&&E&&!M&&!C||B&&f&&E||!F&&E||!W)return-1}return 0}function JM(s,o,f){for(var M=-1,E=s.criteria,C=o.criteria,F=E.length,B=f.length;++M<F;){var W=Dp(E[M],C[M]);if(W){if(M>=B)return W;var ue=f[M];return W*(ue=="desc"?-1:1)}}return s.index-o.index}function Ip(s,o,f,M){for(var E=-1,C=s.length,F=f.length,B=-1,W=o.length,ue=an(C-F,0),fe=te(W+ue),ve=!M;++B<W;)fe[B]=o[B];for(;++E<F;)(ve||E<C)&&(fe[f[E]]=s[E]);for(;ue--;)fe[B++]=s[E++];return fe}function Up(s,o,f,M){for(var E=-1,C=s.length,F=-1,B=f.length,W=-1,ue=o.length,fe=an(C-B,0),ve=te(fe+ue),we=!M;++E<fe;)ve[E]=s[E];for(var Fe=E;++W<ue;)ve[Fe+W]=o[W];for(;++F<B;)(we||E<C)&&(ve[Fe+f[F]]=s[E++]);return ve}function On(s,o){var f=-1,M=s.length;for(o||(o=te(M));++f<M;)o[f]=s[f];return o}function Gi(s,o,f,M){var E=!f;f||(f={});for(var C=-1,F=o.length;++C<F;){var B=o[C],W=M?M(f[B],s[B],B,f,s):t;W===t&&(W=s[B]),E?tr(f,B,W):so(f,B,W)}return f}function QM(s,o){return Gi(s,Vu(s),o)}function ey(s,o){return Gi(s,qp(s),o)}function yl(s,o){return function(f,M){var E=rt(f)?sS:yM,C=o?o():{};return E(f,s,$e(M,2),C)}}function Qs(s){return ft(function(o,f){var M=-1,E=f.length,C=E>1?f[E-1]:t,F=E>2?f[2]:t;for(C=s.length>3&&typeof C=="function"?(E--,C):t,F&&An(f[0],f[1],F)&&(C=E<3?t:C,E=1),o=Pt(o);++M<E;){var B=f[M];B&&s(o,B,M,C)}return o})}function Op(s,o){return function(f,M){if(f==null)return f;if(!Nn(f))return s(f,M);for(var E=f.length,C=o?E:-1,F=Pt(f);(o?C--:++C<E)&&M(F[C],C,F)!==!1;);return f}}function Np(s){return function(o,f,M){for(var E=-1,C=Pt(o),F=M(o),B=F.length;B--;){var W=F[s?B:++E];if(f(C[W],W,C)===!1)break}return o}}function ty(s,o,f){var M=o&m,E=uo(s);function C(){var F=this&&this!==dn&&this instanceof C?E:s;return F.apply(M?f:this,arguments)}return C}function Fp(s){return function(o){o=Mt(o);var f=$s(o)?Ci(o):t,M=f?f[0]:o.charAt(0),E=f?Dr(f,1).join(""):o.slice(1);return M[s]()+E}}function ea(s){return function(o){return ou(Om(Um(o).replace(Xx,"")),s,"")}}function uo(s){return function(){var o=arguments;switch(o.length){case 0:return new s;case 1:return new s(o[0]);case 2:return new s(o[0],o[1]);case 3:return new s(o[0],o[1],o[2]);case 4:return new s(o[0],o[1],o[2],o[3]);case 5:return new s(o[0],o[1],o[2],o[3],o[4]);case 6:return new s(o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return new s(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}var f=Js(s.prototype),M=s.apply(f,o);return Wt(M)?M:f}}function ny(s,o,f){var M=uo(s);function E(){for(var C=arguments.length,F=te(C),B=C,W=ta(E);B--;)F[B]=arguments[B];var ue=C<3&&F[0]!==W&&F[C-1]!==W?[]:Ar(F,W);if(C-=ue.length,C<f)return kp(s,o,El,E.placeholder,t,F,ue,t,t,f-C);var fe=this&&this!==dn&&this instanceof E?M:s;return Zn(fe,this,F)}return E}function Bp(s){return function(o,f,M){var E=Pt(o);if(!Nn(o)){var C=$e(f,3);o=cn(o),f=function(B){return C(E[B],B,E)}}var F=s(o,f,M);return F>-1?E[C?o[F]:F]:t}}function zp(s){return ir(function(o){var f=o.length,M=f,E=mi.prototype.thru;for(s&&o.reverse();M--;){var C=o[M];if(typeof C!="function")throw new pi(l);if(E&&!F&&Al(C)=="wrapper")var F=new mi([],!0)}for(M=F?M:f;++M<f;){C=o[M];var B=Al(C),W=B=="wrapper"?Hu(C):t;W&&Xu(W[0])&&W[1]==(L|y|P|G)&&!W[4].length&&W[9]==1?F=F[Al(W[0])].apply(F,W[3]):F=C.length==1&&Xu(C)?F[B]():F.thru(C)}return function(){var ue=arguments,fe=ue[0];if(F&&ue.length==1&&rt(fe))return F.plant(fe).value();for(var ve=0,we=f?o[ve].apply(this,ue):fe;++ve<f;)we=o[ve].call(this,we);return we}})}function El(s,o,f,M,E,C,F,B,W,ue){var fe=o&L,ve=o&m,we=o&x,Fe=o&(y|w),Ze=o&k,lt=we?t:uo(s);function je(){for(var pt=arguments.length,_t=te(pt),ei=pt;ei--;)_t[ei]=arguments[ei];if(Fe)var Rn=ta(je),ti=pS(_t,Rn);if(M&&(_t=Ip(_t,M,E,Fe)),C&&(_t=Up(_t,C,F,Fe)),pt-=ti,Fe&&pt<ue){var jt=Ar(_t,Rn);return kp(s,o,El,je.placeholder,f,_t,jt,B,W,ue-pt)}var Di=ve?f:this,or=we?Di[s]:s;return pt=_t.length,B?_t=yy(_t,B):Ze&&pt>1&&_t.reverse(),fe&&W<pt&&(_t.length=W),this&&this!==dn&&this instanceof je&&(or=lt||uo(or)),or.apply(Di,_t)}return je}function Gp(s,o){return function(f,M){return LM(f,s,o(M),{})}}function bl(s,o){return function(f,M){var E;if(f===t&&M===t)return o;if(f!==t&&(E=f),M!==t){if(E===t)return M;typeof f=="string"||typeof M=="string"?(f=Jn(f),M=Jn(M)):(f=Tp(f),M=Tp(M)),E=s(f,M)}return E}}function Fu(s){return ir(function(o){return o=Ht(o,jn($e())),ft(function(f){var M=this;return s(o,function(E){return Zn(E,M,f)})})})}function Tl(s,o){o=o===t?" ":Jn(o);var f=o.length;if(f<2)return f?Lu(o,s):o;var M=Lu(o,fl(s/qs(o)));return $s(o)?Dr(Ci(M),0,s).join(""):M.slice(0,s)}function iy(s,o,f,M){var E=o&m,C=uo(s);function F(){for(var B=-1,W=arguments.length,ue=-1,fe=M.length,ve=te(fe+W),we=this&&this!==dn&&this instanceof F?C:s;++ue<fe;)ve[ue]=M[ue];for(;W--;)ve[ue++]=arguments[++B];return Zn(we,E?f:this,ve)}return F}function Hp(s){return function(o,f,M){return M&&typeof M!="number"&&An(o,f,M)&&(f=M=t),o=ar(o),f===t?(f=o,o=0):f=ar(f),M=M===t?o<f?1:-1:ar(M),kM(o,f,M,s)}}function wl(s){return function(o,f){return typeof o=="string"&&typeof f=="string"||(o=xi(o),f=xi(f)),s(o,f)}}function kp(s,o,f,M,E,C,F,B,W,ue){var fe=o&y,ve=fe?F:t,we=fe?t:F,Fe=fe?C:t,Ze=fe?t:C;o|=fe?P:I,o&=~(fe?I:P),o&T||(o&=~(m|x));var lt=[s,o,E,Fe,ve,Ze,we,B,W,ue],je=f.apply(t,lt);return Xu(s)&&em(je,lt),je.placeholder=M,tm(je,s,o)}function Bu(s){var o=sn[s];return function(f,M){if(f=xi(f),M=M==null?0:xn(at(M),292),M&&tp(f)){var E=(Mt(f)+"e").split("e"),C=o(E[0]+"e"+(+E[1]+M));return E=(Mt(C)+"e").split("e"),+(E[0]+"e"+(+E[1]-M))}return o(f)}}var ry=Zs&&1/tl(new Zs([,-0]))[1]==j?function(s){return new Zs(s)}:of;function Vp(s){return function(o){var f=Sn(o);return f==Le?pu(o):f==Y?MS(o):dS(o,s(o))}}function nr(s,o,f,M,E,C,F,B){var W=o&x;if(!W&&typeof s!="function")throw new pi(l);var ue=M?M.length:0;if(ue||(o&=~(P|I),M=E=t),F=F===t?F:an(at(F),0),B=B===t?B:at(B),ue-=E?E.length:0,o&I){var fe=M,ve=E;M=E=t}var we=W?t:Hu(s),Fe=[s,o,f,M,E,fe,ve,C,F,B];if(we&&xy(Fe,we),s=Fe[0],o=Fe[1],f=Fe[2],M=Fe[3],E=Fe[4],B=Fe[9]=Fe[9]===t?W?0:s.length:an(Fe[9]-ue,0),!B&&o&(y|w)&&(o&=~(y|w)),!o||o==m)var Ze=ty(s,o,f);else o==y||o==w?Ze=ny(s,o,B):(o==P||o==(m|P))&&!E.length?Ze=iy(s,o,f,M):Ze=El.apply(t,Fe);var lt=we?Ep:em;return tm(lt(Ze,Fe),s,o)}function Wp(s,o,f,M){return s===t||Pi(s,Ks[f])&&!Tt.call(M,f)?o:s}function Xp(s,o,f,M,E,C){return Wt(s)&&Wt(o)&&(C.set(o,s),xl(s,o,t,Xp,C),C.delete(o)),s}function sy(s){return po(s)?t:s}function $p(s,o,f,M,E,C){var F=f&S,B=s.length,W=o.length;if(B!=W&&!(F&&W>B))return!1;var ue=C.get(s),fe=C.get(o);if(ue&&fe)return ue==o&&fe==s;var ve=-1,we=!0,Fe=f&g?new is:t;for(C.set(s,o),C.set(o,s);++ve<B;){var Ze=s[ve],lt=o[ve];if(M)var je=F?M(lt,Ze,ve,o,s,C):M(Ze,lt,ve,s,o,C);if(je!==t){if(je)continue;we=!1;break}if(Fe){if(!lu(o,function(pt,_t){if(!Qa(Fe,_t)&&(Ze===pt||E(Ze,pt,f,M,C)))return Fe.push(_t)})){we=!1;break}}else if(!(Ze===lt||E(Ze,lt,f,M,C))){we=!1;break}}return C.delete(s),C.delete(o),we}function ay(s,o,f,M,E,C,F){switch(f){case be:if(s.byteLength!=o.byteLength||s.byteOffset!=o.byteOffset)return!1;s=s.buffer,o=o.buffer;case de:return!(s.byteLength!=o.byteLength||!C(new ol(s),new ol(o)));case Be:case Ce:case Xe:return Pi(+s,+o);case Je:return s.name==o.name&&s.message==o.message;case R:case me:return s==o+"";case Le:var B=pu;case Y:var W=M&S;if(B||(B=tl),s.size!=o.size&&!W)return!1;var ue=F.get(s);if(ue)return ue==o;M|=g,F.set(s,o);var fe=$p(B(s),B(o),M,E,C,F);return F.delete(s),fe;case _e:if(ro)return ro.call(s)==ro.call(o)}return!1}function oy(s,o,f,M,E,C){var F=f&S,B=zu(s),W=B.length,ue=zu(o),fe=ue.length;if(W!=fe&&!F)return!1;for(var ve=W;ve--;){var we=B[ve];if(!(F?we in o:Tt.call(o,we)))return!1}var Fe=C.get(s),Ze=C.get(o);if(Fe&&Ze)return Fe==o&&Ze==s;var lt=!0;C.set(s,o),C.set(o,s);for(var je=F;++ve<W;){we=B[ve];var pt=s[we],_t=o[we];if(M)var ei=F?M(_t,pt,we,o,s,C):M(pt,_t,we,s,o,C);if(!(ei===t?pt===_t||E(pt,_t,f,M,C):ei)){lt=!1;break}je||(je=we=="constructor")}if(lt&&!je){var Rn=s.constructor,ti=o.constructor;Rn!=ti&&"constructor"in s&&"constructor"in o&&!(typeof Rn=="function"&&Rn instanceof Rn&&typeof ti=="function"&&ti instanceof ti)&&(lt=!1)}return C.delete(s),C.delete(o),lt}function ir(s){return qu(Jp(s,t,om),s+"")}function zu(s){return hp(s,cn,Vu)}function Gu(s){return hp(s,Fn,qp)}var Hu=dl?function(s){return dl.get(s)}:of;function Al(s){for(var o=s.name+"",f=js[o],M=Tt.call(js,o)?f.length:0;M--;){var E=f[M],C=E.func;if(C==null||C==s)return E.name}return o}function ta(s){var o=Tt.call(A,"placeholder")?A:s;return o.placeholder}function $e(){var s=A.iteratee||sf;return s=s===sf?mp:s,arguments.length?s(arguments[0],arguments[1]):s}function Rl(s,o){var f=s.__data__;return my(o)?f[typeof o=="string"?"string":"hash"]:f.map}function ku(s){for(var o=cn(s),f=o.length;f--;){var M=o[f],E=s[M];o[f]=[M,E,Zp(E)]}return o}function as(s,o){var f=vS(s,o);return pp(f)?f:t}function ly(s){var o=Tt.call(s,ts),f=s[ts];try{s[ts]=t;var M=!0}catch{}var E=sl.call(s);return M&&(o?s[ts]=f:delete s[ts]),E}var Vu=_u?function(s){return s==null?[]:(s=Pt(s),Tr(_u(s),function(o){return Qd.call(s,o)}))}:lf,qp=_u?function(s){for(var o=[];s;)wr(o,Vu(s)),s=ll(s);return o}:lf,Sn=wn;(gu&&Sn(new gu(new ArrayBuffer(1)))!=be||to&&Sn(new to)!=Le||vu&&Sn(vu.resolve())!=Qe||Zs&&Sn(new Zs)!=Y||no&&Sn(new no)!=xe)&&(Sn=function(s){var o=wn(s),f=o==ut?s.constructor:t,M=f?os(f):"";if(M)switch(M){case WS:return be;case XS:return Le;case $S:return Qe;case qS:return Y;case YS:return xe}return o});function cy(s,o,f){for(var M=-1,E=f.length;++M<E;){var C=f[M],F=C.size;switch(C.type){case"drop":s+=F;break;case"dropRight":o-=F;break;case"take":o=xn(o,s+F);break;case"takeRight":s=an(s,o-F);break}}return{start:s,end:o}}function uy(s){var o=s.match(Yo);return o?o[1].split(Gs):[]}function Yp(s,o,f){o=Pr(o,s);for(var M=-1,E=o.length,C=!1;++M<E;){var F=Hi(o[M]);if(!(C=s!=null&&f(s,F)))break;s=s[F]}return C||++M!=E?C:(E=s==null?0:s.length,!!E&&Ol(E)&&rr(F,E)&&(rt(s)||ls(s)))}function fy(s){var o=s.length,f=new s.constructor(o);return o&&typeof s[0]=="string"&&Tt.call(s,"index")&&(f.index=s.index,f.input=s.input),f}function Kp(s){return typeof s.constructor=="function"&&!fo(s)?Js(ll(s)):{}}function hy(s,o,f){var M=s.constructor;switch(o){case de:return Nu(s);case Be:case Ce:return new M(+s);case be:return KM(s,f);case Ve:case pe:case Ue:case Me:case He:case Ge:case Pe:case et:case vt:return Pp(s,f);case Le:return new M;case Xe:case me:return new M(s);case R:return ZM(s);case Y:return new M;case _e:return jM(s)}}function dy(s,o){var f=o.length;if(!f)return s;var M=f-1;return o[M]=(f>1?"& ":"")+o[M],o=o.join(f>2?", ":" "),s.replace(zs,`{
/* [wrapped with `+o+`] */
`)}function py(s){return rt(s)||ls(s)||!!(ep&&s&&s[ep])}function rr(s,o){var f=typeof s;return o=o??Q,!!o&&(f=="number"||f!="symbol"&&J.test(s))&&s>-1&&s%1==0&&s<o}function An(s,o,f){if(!Wt(f))return!1;var M=typeof o;return(M=="number"?Nn(f)&&rr(o,f.length):M=="string"&&o in f)?Pi(f[o],s):!1}function Wu(s,o){if(rt(s))return!1;var f=typeof s;return f=="number"||f=="symbol"||f=="boolean"||s==null||Qn(s)?!0:In.test(s)||!tn.test(s)||o!=null&&s in Pt(o)}function my(s){var o=typeof s;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?s!=="__proto__":s===null}function Xu(s){var o=Al(s),f=A[o];if(typeof f!="function"||!(o in mt.prototype))return!1;if(s===f)return!0;var M=Hu(f);return!!M&&s===M[0]}function _y(s){return!!Zd&&Zd in s}var gy=il?sr:cf;function fo(s){var o=s&&s.constructor,f=typeof o=="function"&&o.prototype||Ks;return s===f}function Zp(s){return s===s&&!Wt(s)}function jp(s,o){return function(f){return f==null?!1:f[s]===o&&(o!==t||s in Pt(f))}}function vy(s){var o=Il(s,function(M){return f.size===h&&f.clear(),M}),f=o.cache;return o}function xy(s,o){var f=s[1],M=o[1],E=f|M,C=E<(m|x|L),F=M==L&&f==y||M==L&&f==G&&s[7].length<=o[8]||M==(L|G)&&o[7].length<=o[8]&&f==y;if(!(C||F))return s;M&m&&(s[2]=o[2],E|=f&m?0:T);var B=o[3];if(B){var W=s[3];s[3]=W?Ip(W,B,o[4]):B,s[4]=W?Ar(s[3],d):o[4]}return B=o[5],B&&(W=s[5],s[5]=W?Up(W,B,o[6]):B,s[6]=W?Ar(s[5],d):o[6]),B=o[7],B&&(s[7]=B),M&L&&(s[8]=s[8]==null?o[8]:xn(s[8],o[8])),s[9]==null&&(s[9]=o[9]),s[0]=o[0],s[1]=E,s}function Sy(s){var o=[];if(s!=null)for(var f in Pt(s))o.push(f);return o}function My(s){return sl.call(s)}function Jp(s,o,f){return o=an(o===t?s.length-1:o,0),function(){for(var M=arguments,E=-1,C=an(M.length-o,0),F=te(C);++E<C;)F[E]=M[o+E];E=-1;for(var B=te(o+1);++E<o;)B[E]=M[E];return B[o]=f(F),Zn(s,this,B)}}function Qp(s,o){return o.length<2?s:ss(s,gi(o,0,-1))}function yy(s,o){for(var f=s.length,M=xn(o.length,f),E=On(s);M--;){var C=o[M];s[M]=rr(C,f)?E[C]:t}return s}function $u(s,o){if(!(o==="constructor"&&typeof s[o]=="function")&&o!="__proto__")return s[o]}var em=nm(Ep),ho=FS||function(s,o){return dn.setTimeout(s,o)},qu=nm(XM);function tm(s,o,f){var M=o+"";return qu(s,dy(M,Ey(uy(M),f)))}function nm(s){var o=0,f=0;return function(){var M=HS(),E=ne-(M-f);if(f=M,E>0){if(++o>=K)return arguments[0]}else o=0;return s.apply(t,arguments)}}function Cl(s,o){var f=-1,M=s.length,E=M-1;for(o=o===t?M:o;++f<o;){var C=Cu(f,E),F=s[C];s[C]=s[f],s[f]=F}return s.length=o,s}var im=vy(function(s){var o=[];return s.charCodeAt(0)===46&&o.push(""),s.replace(wt,function(f,M,E,C){o.push(E?C.replace(Qc,"$1"):M||f)}),o});function Hi(s){if(typeof s=="string"||Qn(s))return s;var o=s+"";return o=="0"&&1/s==-j?"-0":o}function os(s){if(s!=null){try{return rl.call(s)}catch{}try{return s+""}catch{}}return""}function Ey(s,o){return di(Z,function(f){var M="_."+f[0];o&f[1]&&!Qo(s,M)&&s.push(M)}),s.sort()}function rm(s){if(s instanceof mt)return s.clone();var o=new mi(s.__wrapped__,s.__chain__);return o.__actions__=On(s.__actions__),o.__index__=s.__index__,o.__values__=s.__values__,o}function by(s,o,f){(f?An(s,o,f):o===t)?o=1:o=an(at(o),0);var M=s==null?0:s.length;if(!M||o<1)return[];for(var E=0,C=0,F=te(fl(M/o));E<M;)F[C++]=gi(s,E,E+=o);return F}function Ty(s){for(var o=-1,f=s==null?0:s.length,M=0,E=[];++o<f;){var C=s[o];C&&(E[M++]=C)}return E}function wy(){var s=arguments.length;if(!s)return[];for(var o=te(s-1),f=arguments[0],M=s;M--;)o[M-1]=arguments[M];return wr(rt(f)?On(f):[f],pn(o,1))}var Ay=ft(function(s,o){return Zt(s)?ao(s,pn(o,1,Zt,!0)):[]}),Ry=ft(function(s,o){var f=vi(o);return Zt(f)&&(f=t),Zt(s)?ao(s,pn(o,1,Zt,!0),$e(f,2)):[]}),Cy=ft(function(s,o){var f=vi(o);return Zt(f)&&(f=t),Zt(s)?ao(s,pn(o,1,Zt,!0),t,f):[]});function Ly(s,o,f){var M=s==null?0:s.length;return M?(o=f||o===t?1:at(o),gi(s,o<0?0:o,M)):[]}function Py(s,o,f){var M=s==null?0:s.length;return M?(o=f||o===t?1:at(o),o=M-o,gi(s,0,o<0?0:o)):[]}function Dy(s,o){return s&&s.length?Ml(s,$e(o,3),!0,!0):[]}function Iy(s,o){return s&&s.length?Ml(s,$e(o,3),!0):[]}function Uy(s,o,f,M){var E=s==null?0:s.length;return E?(f&&typeof f!="number"&&An(s,o,f)&&(f=0,M=E),wM(s,o,f,M)):[]}function sm(s,o,f){var M=s==null?0:s.length;if(!M)return-1;var E=f==null?0:at(f);return E<0&&(E=an(M+E,0)),el(s,$e(o,3),E)}function am(s,o,f){var M=s==null?0:s.length;if(!M)return-1;var E=M-1;return f!==t&&(E=at(f),E=f<0?an(M+E,0):xn(E,M-1)),el(s,$e(o,3),E,!0)}function om(s){var o=s==null?0:s.length;return o?pn(s,1):[]}function Oy(s){var o=s==null?0:s.length;return o?pn(s,j):[]}function Ny(s,o){var f=s==null?0:s.length;return f?(o=o===t?1:at(o),pn(s,o)):[]}function Fy(s){for(var o=-1,f=s==null?0:s.length,M={};++o<f;){var E=s[o];M[E[0]]=E[1]}return M}function lm(s){return s&&s.length?s[0]:t}function By(s,o,f){var M=s==null?0:s.length;if(!M)return-1;var E=f==null?0:at(f);return E<0&&(E=an(M+E,0)),Xs(s,o,E)}function zy(s){var o=s==null?0:s.length;return o?gi(s,0,-1):[]}var Gy=ft(function(s){var o=Ht(s,Uu);return o.length&&o[0]===s[0]?bu(o):[]}),Hy=ft(function(s){var o=vi(s),f=Ht(s,Uu);return o===vi(f)?o=t:f.pop(),f.length&&f[0]===s[0]?bu(f,$e(o,2)):[]}),ky=ft(function(s){var o=vi(s),f=Ht(s,Uu);return o=typeof o=="function"?o:t,o&&f.pop(),f.length&&f[0]===s[0]?bu(f,t,o):[]});function Vy(s,o){return s==null?"":zS.call(s,o)}function vi(s){var o=s==null?0:s.length;return o?s[o-1]:t}function Wy(s,o,f){var M=s==null?0:s.length;if(!M)return-1;var E=M;return f!==t&&(E=at(f),E=E<0?an(M+E,0):xn(E,M-1)),o===o?ES(s,o,E):el(s,kd,E,!0)}function Xy(s,o){return s&&s.length?xp(s,at(o)):t}var $y=ft(cm);function cm(s,o){return s&&s.length&&o&&o.length?Ru(s,o):s}function qy(s,o,f){return s&&s.length&&o&&o.length?Ru(s,o,$e(f,2)):s}function Yy(s,o,f){return s&&s.length&&o&&o.length?Ru(s,o,t,f):s}var Ky=ir(function(s,o){var f=s==null?0:s.length,M=Su(s,o);return yp(s,Ht(o,function(E){return rr(E,f)?+E:E}).sort(Dp)),M});function Zy(s,o){var f=[];if(!(s&&s.length))return f;var M=-1,E=[],C=s.length;for(o=$e(o,3);++M<C;){var F=s[M];o(F,M,s)&&(f.push(F),E.push(M))}return yp(s,E),f}function Yu(s){return s==null?s:VS.call(s)}function jy(s,o,f){var M=s==null?0:s.length;return M?(f&&typeof f!="number"&&An(s,o,f)?(o=0,f=M):(o=o==null?0:at(o),f=f===t?M:at(f)),gi(s,o,f)):[]}function Jy(s,o){return Sl(s,o)}function Qy(s,o,f){return Pu(s,o,$e(f,2))}function eE(s,o){var f=s==null?0:s.length;if(f){var M=Sl(s,o);if(M<f&&Pi(s[M],o))return M}return-1}function tE(s,o){return Sl(s,o,!0)}function nE(s,o,f){return Pu(s,o,$e(f,2),!0)}function iE(s,o){var f=s==null?0:s.length;if(f){var M=Sl(s,o,!0)-1;if(Pi(s[M],o))return M}return-1}function rE(s){return s&&s.length?bp(s):[]}function sE(s,o){return s&&s.length?bp(s,$e(o,2)):[]}function aE(s){var o=s==null?0:s.length;return o?gi(s,1,o):[]}function oE(s,o,f){return s&&s.length?(o=f||o===t?1:at(o),gi(s,0,o<0?0:o)):[]}function lE(s,o,f){var M=s==null?0:s.length;return M?(o=f||o===t?1:at(o),o=M-o,gi(s,o<0?0:o,M)):[]}function cE(s,o){return s&&s.length?Ml(s,$e(o,3),!1,!0):[]}function uE(s,o){return s&&s.length?Ml(s,$e(o,3)):[]}var fE=ft(function(s){return Lr(pn(s,1,Zt,!0))}),hE=ft(function(s){var o=vi(s);return Zt(o)&&(o=t),Lr(pn(s,1,Zt,!0),$e(o,2))}),dE=ft(function(s){var o=vi(s);return o=typeof o=="function"?o:t,Lr(pn(s,1,Zt,!0),t,o)});function pE(s){return s&&s.length?Lr(s):[]}function mE(s,o){return s&&s.length?Lr(s,$e(o,2)):[]}function _E(s,o){return o=typeof o=="function"?o:t,s&&s.length?Lr(s,t,o):[]}function Ku(s){if(!(s&&s.length))return[];var o=0;return s=Tr(s,function(f){if(Zt(f))return o=an(f.length,o),!0}),hu(o,function(f){return Ht(s,cu(f))})}function um(s,o){if(!(s&&s.length))return[];var f=Ku(s);return o==null?f:Ht(f,function(M){return Zn(o,t,M)})}var gE=ft(function(s,o){return Zt(s)?ao(s,o):[]}),vE=ft(function(s){return Iu(Tr(s,Zt))}),xE=ft(function(s){var o=vi(s);return Zt(o)&&(o=t),Iu(Tr(s,Zt),$e(o,2))}),SE=ft(function(s){var o=vi(s);return o=typeof o=="function"?o:t,Iu(Tr(s,Zt),t,o)}),ME=ft(Ku);function yE(s,o){return Rp(s||[],o||[],so)}function EE(s,o){return Rp(s||[],o||[],co)}var bE=ft(function(s){var o=s.length,f=o>1?s[o-1]:t;return f=typeof f=="function"?(s.pop(),f):t,um(s,f)});function fm(s){var o=A(s);return o.__chain__=!0,o}function TE(s,o){return o(s),s}function Ll(s,o){return o(s)}var wE=ir(function(s){var o=s.length,f=o?s[0]:0,M=this.__wrapped__,E=function(C){return Su(C,s)};return o>1||this.__actions__.length||!(M instanceof mt)||!rr(f)?this.thru(E):(M=M.slice(f,+f+(o?1:0)),M.__actions__.push({func:Ll,args:[E],thisArg:t}),new mi(M,this.__chain__).thru(function(C){return o&&!C.length&&C.push(t),C}))});function AE(){return fm(this)}function RE(){return new mi(this.value(),this.__chain__)}function CE(){this.__values__===t&&(this.__values__=Tm(this.value()));var s=this.__index__>=this.__values__.length,o=s?t:this.__values__[this.__index__++];return{done:s,value:o}}function LE(){return this}function PE(s){for(var o,f=this;f instanceof ml;){var M=rm(f);M.__index__=0,M.__values__=t,o?E.__wrapped__=M:o=M;var E=M;f=f.__wrapped__}return E.__wrapped__=s,o}function DE(){var s=this.__wrapped__;if(s instanceof mt){var o=s;return this.__actions__.length&&(o=new mt(this)),o=o.reverse(),o.__actions__.push({func:Ll,args:[Yu],thisArg:t}),new mi(o,this.__chain__)}return this.thru(Yu)}function IE(){return Ap(this.__wrapped__,this.__actions__)}var UE=yl(function(s,o,f){Tt.call(s,f)?++s[f]:tr(s,f,1)});function OE(s,o,f){var M=rt(s)?Gd:TM;return f&&An(s,o,f)&&(o=t),M(s,$e(o,3))}function NE(s,o){var f=rt(s)?Tr:up;return f(s,$e(o,3))}var FE=Bp(sm),BE=Bp(am);function zE(s,o){return pn(Pl(s,o),1)}function GE(s,o){return pn(Pl(s,o),j)}function HE(s,o,f){return f=f===t?1:at(f),pn(Pl(s,o),f)}function hm(s,o){var f=rt(s)?di:Cr;return f(s,$e(o,3))}function dm(s,o){var f=rt(s)?aS:cp;return f(s,$e(o,3))}var kE=yl(function(s,o,f){Tt.call(s,f)?s[f].push(o):tr(s,f,[o])});function VE(s,o,f,M){s=Nn(s)?s:ia(s),f=f&&!M?at(f):0;var E=s.length;return f<0&&(f=an(E+f,0)),Nl(s)?f<=E&&s.indexOf(o,f)>-1:!!E&&Xs(s,o,f)>-1}var WE=ft(function(s,o,f){var M=-1,E=typeof o=="function",C=Nn(s)?te(s.length):[];return Cr(s,function(F){C[++M]=E?Zn(o,F,f):oo(F,o,f)}),C}),XE=yl(function(s,o,f){tr(s,f,o)});function Pl(s,o){var f=rt(s)?Ht:_p;return f(s,$e(o,3))}function $E(s,o,f,M){return s==null?[]:(rt(o)||(o=o==null?[]:[o]),f=M?t:f,rt(f)||(f=f==null?[]:[f]),Sp(s,o,f))}var qE=yl(function(s,o,f){s[f?0:1].push(o)},function(){return[[],[]]});function YE(s,o,f){var M=rt(s)?ou:Wd,E=arguments.length<3;return M(s,$e(o,4),f,E,Cr)}function KE(s,o,f){var M=rt(s)?oS:Wd,E=arguments.length<3;return M(s,$e(o,4),f,E,cp)}function ZE(s,o){var f=rt(s)?Tr:up;return f(s,Ul($e(o,3)))}function jE(s){var o=rt(s)?sp:VM;return o(s)}function JE(s,o,f){(f?An(s,o,f):o===t)?o=1:o=at(o);var M=rt(s)?SM:WM;return M(s,o)}function QE(s){var o=rt(s)?MM:$M;return o(s)}function eb(s){if(s==null)return 0;if(Nn(s))return Nl(s)?qs(s):s.length;var o=Sn(s);return o==Le||o==Y?s.size:wu(s).length}function tb(s,o,f){var M=rt(s)?lu:qM;return f&&An(s,o,f)&&(o=t),M(s,$e(o,3))}var nb=ft(function(s,o){if(s==null)return[];var f=o.length;return f>1&&An(s,o[0],o[1])?o=[]:f>2&&An(o[0],o[1],o[2])&&(o=[o[0]]),Sp(s,pn(o,1),[])}),Dl=NS||function(){return dn.Date.now()};function ib(s,o){if(typeof o!="function")throw new pi(l);return s=at(s),function(){if(--s<1)return o.apply(this,arguments)}}function pm(s,o,f){return o=f?t:o,o=s&&o==null?s.length:o,nr(s,L,t,t,t,t,o)}function mm(s,o){var f;if(typeof o!="function")throw new pi(l);return s=at(s),function(){return--s>0&&(f=o.apply(this,arguments)),s<=1&&(o=t),f}}var Zu=ft(function(s,o,f){var M=m;if(f.length){var E=Ar(f,ta(Zu));M|=P}return nr(s,M,o,f,E)}),_m=ft(function(s,o,f){var M=m|x;if(f.length){var E=Ar(f,ta(_m));M|=P}return nr(o,M,s,f,E)});function gm(s,o,f){o=f?t:o;var M=nr(s,y,t,t,t,t,t,o);return M.placeholder=gm.placeholder,M}function vm(s,o,f){o=f?t:o;var M=nr(s,w,t,t,t,t,t,o);return M.placeholder=vm.placeholder,M}function xm(s,o,f){var M,E,C,F,B,W,ue=0,fe=!1,ve=!1,we=!0;if(typeof s!="function")throw new pi(l);o=xi(o)||0,Wt(f)&&(fe=!!f.leading,ve="maxWait"in f,C=ve?an(xi(f.maxWait)||0,o):C,we="trailing"in f?!!f.trailing:we);function Fe(jt){var Di=M,or=E;return M=E=t,ue=jt,F=s.apply(or,Di),F}function Ze(jt){return ue=jt,B=ho(pt,o),fe?Fe(jt):F}function lt(jt){var Di=jt-W,or=jt-ue,Bm=o-Di;return ve?xn(Bm,C-or):Bm}function je(jt){var Di=jt-W,or=jt-ue;return W===t||Di>=o||Di<0||ve&&or>=C}function pt(){var jt=Dl();if(je(jt))return _t(jt);B=ho(pt,lt(jt))}function _t(jt){return B=t,we&&M?Fe(jt):(M=E=t,F)}function ei(){B!==t&&Cp(B),ue=0,M=W=E=B=t}function Rn(){return B===t?F:_t(Dl())}function ti(){var jt=Dl(),Di=je(jt);if(M=arguments,E=this,W=jt,Di){if(B===t)return Ze(W);if(ve)return Cp(B),B=ho(pt,o),Fe(W)}return B===t&&(B=ho(pt,o)),F}return ti.cancel=ei,ti.flush=Rn,ti}var rb=ft(function(s,o){return lp(s,1,o)}),sb=ft(function(s,o,f){return lp(s,xi(o)||0,f)});function ab(s){return nr(s,k)}function Il(s,o){if(typeof s!="function"||o!=null&&typeof o!="function")throw new pi(l);var f=function(){var M=arguments,E=o?o.apply(this,M):M[0],C=f.cache;if(C.has(E))return C.get(E);var F=s.apply(this,M);return f.cache=C.set(E,F)||C,F};return f.cache=new(Il.Cache||er),f}Il.Cache=er;function Ul(s){if(typeof s!="function")throw new pi(l);return function(){var o=arguments;switch(o.length){case 0:return!s.call(this);case 1:return!s.call(this,o[0]);case 2:return!s.call(this,o[0],o[1]);case 3:return!s.call(this,o[0],o[1],o[2])}return!s.apply(this,o)}}function ob(s){return mm(2,s)}var lb=YM(function(s,o){o=o.length==1&&rt(o[0])?Ht(o[0],jn($e())):Ht(pn(o,1),jn($e()));var f=o.length;return ft(function(M){for(var E=-1,C=xn(M.length,f);++E<C;)M[E]=o[E].call(this,M[E]);return Zn(s,this,M)})}),ju=ft(function(s,o){var f=Ar(o,ta(ju));return nr(s,P,t,o,f)}),Sm=ft(function(s,o){var f=Ar(o,ta(Sm));return nr(s,I,t,o,f)}),cb=ir(function(s,o){return nr(s,G,t,t,t,o)});function ub(s,o){if(typeof s!="function")throw new pi(l);return o=o===t?o:at(o),ft(s,o)}function fb(s,o){if(typeof s!="function")throw new pi(l);return o=o==null?0:an(at(o),0),ft(function(f){var M=f[o],E=Dr(f,0,o);return M&&wr(E,M),Zn(s,this,E)})}function hb(s,o,f){var M=!0,E=!0;if(typeof s!="function")throw new pi(l);return Wt(f)&&(M="leading"in f?!!f.leading:M,E="trailing"in f?!!f.trailing:E),xm(s,o,{leading:M,maxWait:o,trailing:E})}function db(s){return pm(s,1)}function pb(s,o){return ju(Ou(o),s)}function mb(){if(!arguments.length)return[];var s=arguments[0];return rt(s)?s:[s]}function _b(s){return _i(s,v)}function gb(s,o){return o=typeof o=="function"?o:t,_i(s,v,o)}function vb(s){return _i(s,_|v)}function xb(s,o){return o=typeof o=="function"?o:t,_i(s,_|v,o)}function Sb(s,o){return o==null||op(s,o,cn(o))}function Pi(s,o){return s===o||s!==s&&o!==o}var Mb=wl(Eu),yb=wl(function(s,o){return s>=o}),ls=dp(function(){return arguments}())?dp:function(s){return qt(s)&&Tt.call(s,"callee")&&!Qd.call(s,"callee")},rt=te.isArray,Eb=Ud?jn(Ud):PM;function Nn(s){return s!=null&&Ol(s.length)&&!sr(s)}function Zt(s){return qt(s)&&Nn(s)}function bb(s){return s===!0||s===!1||qt(s)&&wn(s)==Be}var Ir=BS||cf,Tb=Od?jn(Od):DM;function wb(s){return qt(s)&&s.nodeType===1&&!po(s)}function Ab(s){if(s==null)return!0;if(Nn(s)&&(rt(s)||typeof s=="string"||typeof s.splice=="function"||Ir(s)||na(s)||ls(s)))return!s.length;var o=Sn(s);if(o==Le||o==Y)return!s.size;if(fo(s))return!wu(s).length;for(var f in s)if(Tt.call(s,f))return!1;return!0}function Rb(s,o){return lo(s,o)}function Cb(s,o,f){f=typeof f=="function"?f:t;var M=f?f(s,o):t;return M===t?lo(s,o,t,f):!!M}function Ju(s){if(!qt(s))return!1;var o=wn(s);return o==Je||o==qe||typeof s.message=="string"&&typeof s.name=="string"&&!po(s)}function Lb(s){return typeof s=="number"&&tp(s)}function sr(s){if(!Wt(s))return!1;var o=wn(s);return o==X||o==Vt||o==ke||o==U}function Mm(s){return typeof s=="number"&&s==at(s)}function Ol(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=Q}function Wt(s){var o=typeof s;return s!=null&&(o=="object"||o=="function")}function qt(s){return s!=null&&typeof s=="object"}var ym=Nd?jn(Nd):UM;function Pb(s,o){return s===o||Tu(s,o,ku(o))}function Db(s,o,f){return f=typeof f=="function"?f:t,Tu(s,o,ku(o),f)}function Ib(s){return Em(s)&&s!=+s}function Ub(s){if(gy(s))throw new nt(a);return pp(s)}function Ob(s){return s===null}function Nb(s){return s==null}function Em(s){return typeof s=="number"||qt(s)&&wn(s)==Xe}function po(s){if(!qt(s)||wn(s)!=ut)return!1;var o=ll(s);if(o===null)return!0;var f=Tt.call(o,"constructor")&&o.constructor;return typeof f=="function"&&f instanceof f&&rl.call(f)==DS}var Qu=Fd?jn(Fd):OM;function Fb(s){return Mm(s)&&s>=-Q&&s<=Q}var bm=Bd?jn(Bd):NM;function Nl(s){return typeof s=="string"||!rt(s)&&qt(s)&&wn(s)==me}function Qn(s){return typeof s=="symbol"||qt(s)&&wn(s)==_e}var na=zd?jn(zd):FM;function Bb(s){return s===t}function zb(s){return qt(s)&&Sn(s)==xe}function Gb(s){return qt(s)&&wn(s)==ge}var Hb=wl(Au),kb=wl(function(s,o){return s<=o});function Tm(s){if(!s)return[];if(Nn(s))return Nl(s)?Ci(s):On(s);if(eo&&s[eo])return SS(s[eo]());var o=Sn(s),f=o==Le?pu:o==Y?tl:ia;return f(s)}function ar(s){if(!s)return s===0?s:0;if(s=xi(s),s===j||s===-j){var o=s<0?-1:1;return o*le}return s===s?s:0}function at(s){var o=ar(s),f=o%1;return o===o?f?o-f:o:0}function wm(s){return s?rs(at(s),0,se):0}function xi(s){if(typeof s=="number")return s;if(Qn(s))return oe;if(Wt(s)){var o=typeof s.valueOf=="function"?s.valueOf():s;s=Wt(o)?o+"":o}if(typeof s!="string")return s===0?s:+s;s=Xd(s);var f=q.test(s);return f||re.test(s)?iS(s.slice(2),f?2:8):D.test(s)?oe:+s}function Am(s){return Gi(s,Fn(s))}function Vb(s){return s?rs(at(s),-Q,Q):s===0?s:0}function Mt(s){return s==null?"":Jn(s)}var Wb=Qs(function(s,o){if(fo(o)||Nn(o)){Gi(o,cn(o),s);return}for(var f in o)Tt.call(o,f)&&so(s,f,o[f])}),Rm=Qs(function(s,o){Gi(o,Fn(o),s)}),Fl=Qs(function(s,o,f,M){Gi(o,Fn(o),s,M)}),Xb=Qs(function(s,o,f,M){Gi(o,cn(o),s,M)}),$b=ir(Su);function qb(s,o){var f=Js(s);return o==null?f:ap(f,o)}var Yb=ft(function(s,o){s=Pt(s);var f=-1,M=o.length,E=M>2?o[2]:t;for(E&&An(o[0],o[1],E)&&(M=1);++f<M;)for(var C=o[f],F=Fn(C),B=-1,W=F.length;++B<W;){var ue=F[B],fe=s[ue];(fe===t||Pi(fe,Ks[ue])&&!Tt.call(s,ue))&&(s[ue]=C[ue])}return s}),Kb=ft(function(s){return s.push(t,Xp),Zn(Cm,t,s)});function Zb(s,o){return Hd(s,$e(o,3),zi)}function jb(s,o){return Hd(s,$e(o,3),yu)}function Jb(s,o){return s==null?s:Mu(s,$e(o,3),Fn)}function Qb(s,o){return s==null?s:fp(s,$e(o,3),Fn)}function eT(s,o){return s&&zi(s,$e(o,3))}function tT(s,o){return s&&yu(s,$e(o,3))}function nT(s){return s==null?[]:vl(s,cn(s))}function iT(s){return s==null?[]:vl(s,Fn(s))}function ef(s,o,f){var M=s==null?t:ss(s,o);return M===t?f:M}function rT(s,o){return s!=null&&Yp(s,o,AM)}function tf(s,o){return s!=null&&Yp(s,o,RM)}var sT=Gp(function(s,o,f){o!=null&&typeof o.toString!="function"&&(o=sl.call(o)),s[o]=f},rf(Bn)),aT=Gp(function(s,o,f){o!=null&&typeof o.toString!="function"&&(o=sl.call(o)),Tt.call(s,o)?s[o].push(f):s[o]=[f]},$e),oT=ft(oo);function cn(s){return Nn(s)?rp(s):wu(s)}function Fn(s){return Nn(s)?rp(s,!0):BM(s)}function lT(s,o){var f={};return o=$e(o,3),zi(s,function(M,E,C){tr(f,o(M,E,C),M)}),f}function cT(s,o){var f={};return o=$e(o,3),zi(s,function(M,E,C){tr(f,E,o(M,E,C))}),f}var uT=Qs(function(s,o,f){xl(s,o,f)}),Cm=Qs(function(s,o,f,M){xl(s,o,f,M)}),fT=ir(function(s,o){var f={};if(s==null)return f;var M=!1;o=Ht(o,function(C){return C=Pr(C,s),M||(M=C.length>1),C}),Gi(s,Gu(s),f),M&&(f=_i(f,_|p|v,sy));for(var E=o.length;E--;)Du(f,o[E]);return f});function hT(s,o){return Lm(s,Ul($e(o)))}var dT=ir(function(s,o){return s==null?{}:GM(s,o)});function Lm(s,o){if(s==null)return{};var f=Ht(Gu(s),function(M){return[M]});return o=$e(o),Mp(s,f,function(M,E){return o(M,E[0])})}function pT(s,o,f){o=Pr(o,s);var M=-1,E=o.length;for(E||(E=1,s=t);++M<E;){var C=s==null?t:s[Hi(o[M])];C===t&&(M=E,C=f),s=sr(C)?C.call(s):C}return s}function mT(s,o,f){return s==null?s:co(s,o,f)}function _T(s,o,f,M){return M=typeof M=="function"?M:t,s==null?s:co(s,o,f,M)}var Pm=Vp(cn),Dm=Vp(Fn);function gT(s,o,f){var M=rt(s),E=M||Ir(s)||na(s);if(o=$e(o,4),f==null){var C=s&&s.constructor;E?f=M?new C:[]:Wt(s)?f=sr(C)?Js(ll(s)):{}:f={}}return(E?di:zi)(s,function(F,B,W){return o(f,F,B,W)}),f}function vT(s,o){return s==null?!0:Du(s,o)}function xT(s,o,f){return s==null?s:wp(s,o,Ou(f))}function ST(s,o,f,M){return M=typeof M=="function"?M:t,s==null?s:wp(s,o,Ou(f),M)}function ia(s){return s==null?[]:du(s,cn(s))}function MT(s){return s==null?[]:du(s,Fn(s))}function yT(s,o,f){return f===t&&(f=o,o=t),f!==t&&(f=xi(f),f=f===f?f:0),o!==t&&(o=xi(o),o=o===o?o:0),rs(xi(s),o,f)}function ET(s,o,f){return o=ar(o),f===t?(f=o,o=0):f=ar(f),s=xi(s),CM(s,o,f)}function bT(s,o,f){if(f&&typeof f!="boolean"&&An(s,o,f)&&(o=f=t),f===t&&(typeof o=="boolean"?(f=o,o=t):typeof s=="boolean"&&(f=s,s=t)),s===t&&o===t?(s=0,o=1):(s=ar(s),o===t?(o=s,s=0):o=ar(o)),s>o){var M=s;s=o,o=M}if(f||s%1||o%1){var E=np();return xn(s+E*(o-s+nS("1e-"+((E+"").length-1))),o)}return Cu(s,o)}var TT=ea(function(s,o,f){return o=o.toLowerCase(),s+(f?Im(o):o)});function Im(s){return nf(Mt(s).toLowerCase())}function Um(s){return s=Mt(s),s&&s.replace(Re,mS).replace($x,"")}function wT(s,o,f){s=Mt(s),o=Jn(o);var M=s.length;f=f===t?M:rs(at(f),0,M);var E=f;return f-=o.length,f>=0&&s.slice(f,E)==o}function AT(s){return s=Mt(s),s&&Oe.test(s)?s.replace(ye,_S):s}function RT(s){return s=Mt(s),s&&ui.test(s)?s.replace(nn,"\\$&"):s}var CT=ea(function(s,o,f){return s+(f?"-":"")+o.toLowerCase()}),LT=ea(function(s,o,f){return s+(f?" ":"")+o.toLowerCase()}),PT=Fp("toLowerCase");function DT(s,o,f){s=Mt(s),o=at(o);var M=o?qs(s):0;if(!o||M>=o)return s;var E=(o-M)/2;return Tl(hl(E),f)+s+Tl(fl(E),f)}function IT(s,o,f){s=Mt(s),o=at(o);var M=o?qs(s):0;return o&&M<o?s+Tl(o-M,f):s}function UT(s,o,f){s=Mt(s),o=at(o);var M=o?qs(s):0;return o&&M<o?Tl(o-M,f)+s:s}function OT(s,o,f){return f||o==null?o=0:o&&(o=+o),kS(Mt(s).replace(Bs,""),o||0)}function NT(s,o,f){return(f?An(s,o,f):o===t)?o=1:o=at(o),Lu(Mt(s),o)}function FT(){var s=arguments,o=Mt(s[0]);return s.length<3?o:o.replace(s[1],s[2])}var BT=ea(function(s,o,f){return s+(f?"_":"")+o.toLowerCase()});function zT(s,o,f){return f&&typeof f!="number"&&An(s,o,f)&&(o=f=t),f=f===t?se:f>>>0,f?(s=Mt(s),s&&(typeof o=="string"||o!=null&&!Qu(o))&&(o=Jn(o),!o&&$s(s))?Dr(Ci(s),0,f):s.split(o,f)):[]}var GT=ea(function(s,o,f){return s+(f?" ":"")+nf(o)});function HT(s,o,f){return s=Mt(s),f=f==null?0:rs(at(f),0,s.length),o=Jn(o),s.slice(f,f+o.length)==o}function kT(s,o,f){var M=A.templateSettings;f&&An(s,o,f)&&(o=t),s=Mt(s),o=Fl({},o,M,Wp);var E=Fl({},o.imports,M.imports,Wp),C=cn(E),F=du(E,C),B,W,ue=0,fe=o.interpolate||Ne,ve="__p += '",we=mu((o.escape||Ne).source+"|"+fe.source+"|"+(fe===bt?eu:Ne).source+"|"+(o.evaluate||Ne).source+"|$","g"),Fe="//# sourceURL="+(Tt.call(o,"sourceURL")?(o.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++jx+"]")+`
`;s.replace(we,function(je,pt,_t,ei,Rn,ti){return _t||(_t=ei),ve+=s.slice(ue,ti).replace(Ye,gS),pt&&(B=!0,ve+=`' +
__e(`+pt+`) +
'`),Rn&&(W=!0,ve+=`';
`+Rn+`;
__p += '`),_t&&(ve+=`' +
((__t = (`+_t+`)) == null ? '' : __t) +
'`),ue=ti+je.length,je}),ve+=`';
`;var Ze=Tt.call(o,"variable")&&o.variable;if(!Ze)ve=`with (obj) {
`+ve+`
}
`;else if(Zo.test(Ze))throw new nt(c);ve=(W?ve.replace(Lt,""):ve).replace(ht,"$1").replace(Et,"$1;"),ve="function("+(Ze||"obj")+`) {
`+(Ze?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(B?", __e = _.escape":"")+(W?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ve+`return __p
}`;var lt=Nm(function(){return St(C,Fe+"return "+ve).apply(t,F)});if(lt.source=ve,Ju(lt))throw lt;return lt}function VT(s){return Mt(s).toLowerCase()}function WT(s){return Mt(s).toUpperCase()}function XT(s,o,f){if(s=Mt(s),s&&(f||o===t))return Xd(s);if(!s||!(o=Jn(o)))return s;var M=Ci(s),E=Ci(o),C=$d(M,E),F=qd(M,E)+1;return Dr(M,C,F).join("")}function $T(s,o,f){if(s=Mt(s),s&&(f||o===t))return s.slice(0,Kd(s)+1);if(!s||!(o=Jn(o)))return s;var M=Ci(s),E=qd(M,Ci(o))+1;return Dr(M,0,E).join("")}function qT(s,o,f){if(s=Mt(s),s&&(f||o===t))return s.replace(Bs,"");if(!s||!(o=Jn(o)))return s;var M=Ci(s),E=$d(M,Ci(o));return Dr(M,E).join("")}function YT(s,o){var f=b,M=O;if(Wt(o)){var E="separator"in o?o.separator:E;f="length"in o?at(o.length):f,M="omission"in o?Jn(o.omission):M}s=Mt(s);var C=s.length;if($s(s)){var F=Ci(s);C=F.length}if(f>=C)return s;var B=f-qs(M);if(B<1)return M;var W=F?Dr(F,0,B).join(""):s.slice(0,B);if(E===t)return W+M;if(F&&(B+=W.length-B),Qu(E)){if(s.slice(B).search(E)){var ue,fe=W;for(E.global||(E=mu(E.source,Mt(jo.exec(E))+"g")),E.lastIndex=0;ue=E.exec(fe);)var ve=ue.index;W=W.slice(0,ve===t?B:ve)}}else if(s.indexOf(Jn(E),B)!=B){var we=W.lastIndexOf(E);we>-1&&(W=W.slice(0,we))}return W+M}function KT(s){return s=Mt(s),s&&Ee.test(s)?s.replace(N,bS):s}var ZT=ea(function(s,o,f){return s+(f?" ":"")+o.toUpperCase()}),nf=Fp("toUpperCase");function Om(s,o,f){return s=Mt(s),o=f?t:o,o===t?xS(s)?AS(s):uS(s):s.match(o)||[]}var Nm=ft(function(s,o){try{return Zn(s,t,o)}catch(f){return Ju(f)?f:new nt(f)}}),jT=ir(function(s,o){return di(o,function(f){f=Hi(f),tr(s,f,Zu(s[f],s))}),s});function JT(s){var o=s==null?0:s.length,f=$e();return s=o?Ht(s,function(M){if(typeof M[1]!="function")throw new pi(l);return[f(M[0]),M[1]]}):[],ft(function(M){for(var E=-1;++E<o;){var C=s[E];if(Zn(C[0],this,M))return Zn(C[1],this,M)}})}function QT(s){return bM(_i(s,_))}function rf(s){return function(){return s}}function ew(s,o){return s==null||s!==s?o:s}var tw=zp(),nw=zp(!0);function Bn(s){return s}function sf(s){return mp(typeof s=="function"?s:_i(s,_))}function iw(s){return gp(_i(s,_))}function rw(s,o){return vp(s,_i(o,_))}var sw=ft(function(s,o){return function(f){return oo(f,s,o)}}),aw=ft(function(s,o){return function(f){return oo(s,f,o)}});function af(s,o,f){var M=cn(o),E=vl(o,M);f==null&&!(Wt(o)&&(E.length||!M.length))&&(f=o,o=s,s=this,E=vl(o,cn(o)));var C=!(Wt(f)&&"chain"in f)||!!f.chain,F=sr(s);return di(E,function(B){var W=o[B];s[B]=W,F&&(s.prototype[B]=function(){var ue=this.__chain__;if(C||ue){var fe=s(this.__wrapped__),ve=fe.__actions__=On(this.__actions__);return ve.push({func:W,args:arguments,thisArg:s}),fe.__chain__=ue,fe}return W.apply(s,wr([this.value()],arguments))})}),s}function ow(){return dn._===this&&(dn._=IS),this}function of(){}function lw(s){return s=at(s),ft(function(o){return xp(o,s)})}var cw=Fu(Ht),uw=Fu(Gd),fw=Fu(lu);function Fm(s){return Wu(s)?cu(Hi(s)):HM(s)}function hw(s){return function(o){return s==null?t:ss(s,o)}}var dw=Hp(),pw=Hp(!0);function lf(){return[]}function cf(){return!1}function mw(){return{}}function _w(){return""}function gw(){return!0}function vw(s,o){if(s=at(s),s<1||s>Q)return[];var f=se,M=xn(s,se);o=$e(o),s-=se;for(var E=hu(M,o);++f<s;)o(f);return E}function xw(s){return rt(s)?Ht(s,Hi):Qn(s)?[s]:On(im(Mt(s)))}function Sw(s){var o=++PS;return Mt(s)+o}var Mw=bl(function(s,o){return s+o},0),yw=Bu("ceil"),Ew=bl(function(s,o){return s/o},1),bw=Bu("floor");function Tw(s){return s&&s.length?gl(s,Bn,Eu):t}function ww(s,o){return s&&s.length?gl(s,$e(o,2),Eu):t}function Aw(s){return Vd(s,Bn)}function Rw(s,o){return Vd(s,$e(o,2))}function Cw(s){return s&&s.length?gl(s,Bn,Au):t}function Lw(s,o){return s&&s.length?gl(s,$e(o,2),Au):t}var Pw=bl(function(s,o){return s*o},1),Dw=Bu("round"),Iw=bl(function(s,o){return s-o},0);function Uw(s){return s&&s.length?fu(s,Bn):0}function Ow(s,o){return s&&s.length?fu(s,$e(o,2)):0}return A.after=ib,A.ary=pm,A.assign=Wb,A.assignIn=Rm,A.assignInWith=Fl,A.assignWith=Xb,A.at=$b,A.before=mm,A.bind=Zu,A.bindAll=jT,A.bindKey=_m,A.castArray=mb,A.chain=fm,A.chunk=by,A.compact=Ty,A.concat=wy,A.cond=JT,A.conforms=QT,A.constant=rf,A.countBy=UE,A.create=qb,A.curry=gm,A.curryRight=vm,A.debounce=xm,A.defaults=Yb,A.defaultsDeep=Kb,A.defer=rb,A.delay=sb,A.difference=Ay,A.differenceBy=Ry,A.differenceWith=Cy,A.drop=Ly,A.dropRight=Py,A.dropRightWhile=Dy,A.dropWhile=Iy,A.fill=Uy,A.filter=NE,A.flatMap=zE,A.flatMapDeep=GE,A.flatMapDepth=HE,A.flatten=om,A.flattenDeep=Oy,A.flattenDepth=Ny,A.flip=ab,A.flow=tw,A.flowRight=nw,A.fromPairs=Fy,A.functions=nT,A.functionsIn=iT,A.groupBy=kE,A.initial=zy,A.intersection=Gy,A.intersectionBy=Hy,A.intersectionWith=ky,A.invert=sT,A.invertBy=aT,A.invokeMap=WE,A.iteratee=sf,A.keyBy=XE,A.keys=cn,A.keysIn=Fn,A.map=Pl,A.mapKeys=lT,A.mapValues=cT,A.matches=iw,A.matchesProperty=rw,A.memoize=Il,A.merge=uT,A.mergeWith=Cm,A.method=sw,A.methodOf=aw,A.mixin=af,A.negate=Ul,A.nthArg=lw,A.omit=fT,A.omitBy=hT,A.once=ob,A.orderBy=$E,A.over=cw,A.overArgs=lb,A.overEvery=uw,A.overSome=fw,A.partial=ju,A.partialRight=Sm,A.partition=qE,A.pick=dT,A.pickBy=Lm,A.property=Fm,A.propertyOf=hw,A.pull=$y,A.pullAll=cm,A.pullAllBy=qy,A.pullAllWith=Yy,A.pullAt=Ky,A.range=dw,A.rangeRight=pw,A.rearg=cb,A.reject=ZE,A.remove=Zy,A.rest=ub,A.reverse=Yu,A.sampleSize=JE,A.set=mT,A.setWith=_T,A.shuffle=QE,A.slice=jy,A.sortBy=nb,A.sortedUniq=rE,A.sortedUniqBy=sE,A.split=zT,A.spread=fb,A.tail=aE,A.take=oE,A.takeRight=lE,A.takeRightWhile=cE,A.takeWhile=uE,A.tap=TE,A.throttle=hb,A.thru=Ll,A.toArray=Tm,A.toPairs=Pm,A.toPairsIn=Dm,A.toPath=xw,A.toPlainObject=Am,A.transform=gT,A.unary=db,A.union=fE,A.unionBy=hE,A.unionWith=dE,A.uniq=pE,A.uniqBy=mE,A.uniqWith=_E,A.unset=vT,A.unzip=Ku,A.unzipWith=um,A.update=xT,A.updateWith=ST,A.values=ia,A.valuesIn=MT,A.without=gE,A.words=Om,A.wrap=pb,A.xor=vE,A.xorBy=xE,A.xorWith=SE,A.zip=ME,A.zipObject=yE,A.zipObjectDeep=EE,A.zipWith=bE,A.entries=Pm,A.entriesIn=Dm,A.extend=Rm,A.extendWith=Fl,af(A,A),A.add=Mw,A.attempt=Nm,A.camelCase=TT,A.capitalize=Im,A.ceil=yw,A.clamp=yT,A.clone=_b,A.cloneDeep=vb,A.cloneDeepWith=xb,A.cloneWith=gb,A.conformsTo=Sb,A.deburr=Um,A.defaultTo=ew,A.divide=Ew,A.endsWith=wT,A.eq=Pi,A.escape=AT,A.escapeRegExp=RT,A.every=OE,A.find=FE,A.findIndex=sm,A.findKey=Zb,A.findLast=BE,A.findLastIndex=am,A.findLastKey=jb,A.floor=bw,A.forEach=hm,A.forEachRight=dm,A.forIn=Jb,A.forInRight=Qb,A.forOwn=eT,A.forOwnRight=tT,A.get=ef,A.gt=Mb,A.gte=yb,A.has=rT,A.hasIn=tf,A.head=lm,A.identity=Bn,A.includes=VE,A.indexOf=By,A.inRange=ET,A.invoke=oT,A.isArguments=ls,A.isArray=rt,A.isArrayBuffer=Eb,A.isArrayLike=Nn,A.isArrayLikeObject=Zt,A.isBoolean=bb,A.isBuffer=Ir,A.isDate=Tb,A.isElement=wb,A.isEmpty=Ab,A.isEqual=Rb,A.isEqualWith=Cb,A.isError=Ju,A.isFinite=Lb,A.isFunction=sr,A.isInteger=Mm,A.isLength=Ol,A.isMap=ym,A.isMatch=Pb,A.isMatchWith=Db,A.isNaN=Ib,A.isNative=Ub,A.isNil=Nb,A.isNull=Ob,A.isNumber=Em,A.isObject=Wt,A.isObjectLike=qt,A.isPlainObject=po,A.isRegExp=Qu,A.isSafeInteger=Fb,A.isSet=bm,A.isString=Nl,A.isSymbol=Qn,A.isTypedArray=na,A.isUndefined=Bb,A.isWeakMap=zb,A.isWeakSet=Gb,A.join=Vy,A.kebabCase=CT,A.last=vi,A.lastIndexOf=Wy,A.lowerCase=LT,A.lowerFirst=PT,A.lt=Hb,A.lte=kb,A.max=Tw,A.maxBy=ww,A.mean=Aw,A.meanBy=Rw,A.min=Cw,A.minBy=Lw,A.stubArray=lf,A.stubFalse=cf,A.stubObject=mw,A.stubString=_w,A.stubTrue=gw,A.multiply=Pw,A.nth=Xy,A.noConflict=ow,A.noop=of,A.now=Dl,A.pad=DT,A.padEnd=IT,A.padStart=UT,A.parseInt=OT,A.random=bT,A.reduce=YE,A.reduceRight=KE,A.repeat=NT,A.replace=FT,A.result=pT,A.round=Dw,A.runInContext=H,A.sample=jE,A.size=eb,A.snakeCase=BT,A.some=tb,A.sortedIndex=Jy,A.sortedIndexBy=Qy,A.sortedIndexOf=eE,A.sortedLastIndex=tE,A.sortedLastIndexBy=nE,A.sortedLastIndexOf=iE,A.startCase=GT,A.startsWith=HT,A.subtract=Iw,A.sum=Uw,A.sumBy=Ow,A.template=kT,A.times=vw,A.toFinite=ar,A.toInteger=at,A.toLength=wm,A.toLower=VT,A.toNumber=xi,A.toSafeInteger=Vb,A.toString=Mt,A.toUpper=WT,A.trim=XT,A.trimEnd=$T,A.trimStart=qT,A.truncate=YT,A.unescape=KT,A.uniqueId=Sw,A.upperCase=ZT,A.upperFirst=nf,A.each=hm,A.eachRight=dm,A.first=lm,af(A,function(){var s={};return zi(A,function(o,f){Tt.call(A.prototype,f)||(s[f]=o)}),s}(),{chain:!1}),A.VERSION=n,di(["bind","bindKey","curry","curryRight","partial","partialRight"],function(s){A[s].placeholder=A}),di(["drop","take"],function(s,o){mt.prototype[s]=function(f){f=f===t?1:an(at(f),0);var M=this.__filtered__&&!o?new mt(this):this.clone();return M.__filtered__?M.__takeCount__=xn(f,M.__takeCount__):M.__views__.push({size:xn(f,se),type:s+(M.__dir__<0?"Right":"")}),M},mt.prototype[s+"Right"]=function(f){return this.reverse()[s](f).reverse()}}),di(["filter","map","takeWhile"],function(s,o){var f=o+1,M=f==z||f==V;mt.prototype[s]=function(E){var C=this.clone();return C.__iteratees__.push({iteratee:$e(E,3),type:f}),C.__filtered__=C.__filtered__||M,C}}),di(["head","last"],function(s,o){var f="take"+(o?"Right":"");mt.prototype[s]=function(){return this[f](1).value()[0]}}),di(["initial","tail"],function(s,o){var f="drop"+(o?"":"Right");mt.prototype[s]=function(){return this.__filtered__?new mt(this):this[f](1)}}),mt.prototype.compact=function(){return this.filter(Bn)},mt.prototype.find=function(s){return this.filter(s).head()},mt.prototype.findLast=function(s){return this.reverse().find(s)},mt.prototype.invokeMap=ft(function(s,o){return typeof s=="function"?new mt(this):this.map(function(f){return oo(f,s,o)})}),mt.prototype.reject=function(s){return this.filter(Ul($e(s)))},mt.prototype.slice=function(s,o){s=at(s);var f=this;return f.__filtered__&&(s>0||o<0)?new mt(f):(s<0?f=f.takeRight(-s):s&&(f=f.drop(s)),o!==t&&(o=at(o),f=o<0?f.dropRight(-o):f.take(o-s)),f)},mt.prototype.takeRightWhile=function(s){return this.reverse().takeWhile(s).reverse()},mt.prototype.toArray=function(){return this.take(se)},zi(mt.prototype,function(s,o){var f=/^(?:filter|find|map|reject)|While$/.test(o),M=/^(?:head|last)$/.test(o),E=A[M?"take"+(o=="last"?"Right":""):o],C=M||/^find/.test(o);E&&(A.prototype[o]=function(){var F=this.__wrapped__,B=M?[1]:arguments,W=F instanceof mt,ue=B[0],fe=W||rt(F),ve=function(pt){var _t=E.apply(A,wr([pt],B));return M&&we?_t[0]:_t};fe&&f&&typeof ue=="function"&&ue.length!=1&&(W=fe=!1);var we=this.__chain__,Fe=!!this.__actions__.length,Ze=C&&!we,lt=W&&!Fe;if(!C&&fe){F=lt?F:new mt(this);var je=s.apply(F,B);return je.__actions__.push({func:Ll,args:[ve],thisArg:t}),new mi(je,we)}return Ze&&lt?s.apply(this,B):(je=this.thru(ve),Ze?M?je.value()[0]:je.value():je)})}),di(["pop","push","shift","sort","splice","unshift"],function(s){var o=nl[s],f=/^(?:push|sort|unshift)$/.test(s)?"tap":"thru",M=/^(?:pop|shift)$/.test(s);A.prototype[s]=function(){var E=arguments;if(M&&!this.__chain__){var C=this.value();return o.apply(rt(C)?C:[],E)}return this[f](function(F){return o.apply(rt(F)?F:[],E)})}}),zi(mt.prototype,function(s,o){var f=A[o];if(f){var M=f.name+"";Tt.call(js,M)||(js[M]=[]),js[M].push({name:o,func:f})}}),js[El(t,x).name]=[{name:"wrapper",func:t}],mt.prototype.clone=KS,mt.prototype.reverse=ZS,mt.prototype.value=jS,A.prototype.at=wE,A.prototype.chain=AE,A.prototype.commit=RE,A.prototype.next=CE,A.prototype.plant=PE,A.prototype.reverse=DE,A.prototype.toJSON=A.prototype.valueOf=A.prototype.value=IE,A.prototype.first=A.prototype.head,eo&&(A.prototype[eo]=LE),A},Ys=RS();es?((es.exports=Ys)._=Ys,ru._=Ys):dn._=Ys}).call(Ei)})(Uc,Uc.exports);var Eo=Uc.exports,vd={exports:{}},Fg=typeof document<"u"?document.createElement("p").style:{},Bg=["O","ms","Moz","Webkit"],Qf=/([A-Z])/g,eh={};function xx(i){if(i=i.replace(/-([a-z])/g,function(r,a){return a.toUpperCase()}),Fg[i]!==void 0)return i;for(var e=i.charAt(0).toUpperCase()+i.slice(1),t=Bg.length;t--;){var n=Bg[t]+e;if(Fg[n]!==void 0)return n}return i}function vO(i){return i in eh?eh[i]:eh[i]=xx(i)}function xO(i){return i=xx(i),Qf.test(i)&&(i="-"+i.replace(Qf,"-$1"),Qf.lastIndex=0),i.toLowerCase()}vd.exports=vO;vd.exports.dash=xO;var SO=vd.exports;const Sx=Os(SO);class MO extends vx{constructor({element:e}){super({element:e}),this.element=e,this.createObserver()}createObserver(){this.observer=new window.IntersectionObserver(e=>{e.forEach(t=>{if(t.isIntersecting){const n=this.element.getAttribute("data-src");!this.element.src&&n&&(this.element.src=n,this.element.onload=()=>{this.observer.unobserve(this.element)})}})}),this.observer.observe(this.element)}}var Bh={exports:{}};(function(i,e){(function(t,n){var r="1.0.37",a="",l="?",c="function",u="undefined",h="object",d="string",_="major",p="model",v="name",S="type",g="vendor",m="version",x="architecture",T="console",y="mobile",w="tablet",P="smarttv",I="wearable",L="embedded",G=500,k="Amazon",b="Apple",O="ASUS",K="BlackBerry",ne="Browser",z="Chrome",$="Edge",V="Firefox",j="Google",Q="Huawei",le="LG",oe="Microsoft",se="Motorola",he="Opera",Ie="Samsung",Z="Sharp",ce="Sony",Ae="Xiaomi",ke="Zebra",Be="Facebook",Ce="Chromium OS",qe="Mac OS",Je=function(xe,ge){var de={};for(var be in xe)ge[be]&&ge[be].length%2===0?de[be]=ge[be].concat(xe[be]):de[be]=xe[be];return de},X=function(xe){for(var ge={},de=0;de<xe.length;de++)ge[xe[de].toUpperCase()]=xe[de];return ge},Vt=function(xe,ge){return typeof xe===d?Le(ge).indexOf(Le(xe))!==-1:!1},Le=function(xe){return xe.toLowerCase()},Xe=function(xe){return typeof xe===d?xe.replace(/[^\d\.]/g,a).split(".")[0]:n},ze=function(xe,ge){if(typeof xe===d)return xe=xe.replace(/^\s\s*/,a),typeof ge===u?xe:xe.substring(0,G)},ut=function(xe,ge){for(var de=0,be,Ve,pe,Ue,Me,He;de<ge.length&&!Me;){var Ge=ge[de],Pe=ge[de+1];for(be=Ve=0;be<Ge.length&&!Me&&Ge[be];)if(Me=Ge[be++].exec(xe),Me)for(pe=0;pe<Pe.length;pe++)He=Me[++Ve],Ue=Pe[pe],typeof Ue===h&&Ue.length>0?Ue.length===2?typeof Ue[1]==c?this[Ue[0]]=Ue[1].call(this,He):this[Ue[0]]=Ue[1]:Ue.length===3?typeof Ue[1]===c&&!(Ue[1].exec&&Ue[1].test)?this[Ue[0]]=He?Ue[1].call(this,He,Ue[2]):n:this[Ue[0]]=He?He.replace(Ue[1],Ue[2]):n:Ue.length===4&&(this[Ue[0]]=He?Ue[3].call(this,He.replace(Ue[1],Ue[2])):n):this[Ue]=He||n;de+=2}},Qe=function(xe,ge){for(var de in ge)if(typeof ge[de]===h&&ge[de].length>0){for(var be=0;be<ge[de].length;be++)if(Vt(ge[de][be],xe))return de===l?n:de}else if(Vt(ge[de],xe))return de===l?n:de;return xe},U={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},R={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Y={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[m,[v,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[m,[v,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[v,m],[/opios[\/ ]+([\w\.]+)/i],[m,[v,he+" Mini"]],[/\bopr\/([\w\.]+)/i],[m,[v,he]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[m,[v,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[v,m],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[m,[v,"UC"+ne]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[m,[v,"WeChat"]],[/konqueror\/([\w\.]+)/i],[m,[v,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[m,[v,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[m,[v,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[m,[v,"Smart Lenovo "+ne]],[/(avast|avg)\/([\w\.]+)/i],[[v,/(.+)/,"$1 Secure "+ne],m],[/\bfocus\/([\w\.]+)/i],[m,[v,V+" Focus"]],[/\bopt\/([\w\.]+)/i],[m,[v,he+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[m,[v,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[m,[v,"Dolphin"]],[/coast\/([\w\.]+)/i],[m,[v,he+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[m,[v,"MIUI "+ne]],[/fxios\/([-\w\.]+)/i],[m,[v,V]],[/\bqihu|(qi?ho?o?|360)browser/i],[[v,"360 "+ne]],[/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],[[v,/(.+)/,"$1 "+ne],m],[/samsungbrowser\/([\w\.]+)/i],[m,[v,Ie+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[v,/_/g," "],m],[/metasr[\/ ]?([\d\.]+)/i],[m,[v,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[v,"Sogou Mobile"],m],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[v,m],[/(lbbrowser)/i,/\[(linkedin)app\]/i],[v],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[v,Be],m],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[v,m],[/\bgsa\/([\w\.]+) .*safari\//i],[m,[v,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[m,[v,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[m,[v,z+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[v,z+" WebView"],m],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[m,[v,"Android "+ne]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[v,m],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[m,[v,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[m,v],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[v,[m,Qe,U]],[/(webkit|khtml)\/([\w\.]+)/i],[v,m],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[v,"Netscape"],m],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[m,[v,V+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[v,m],[/(cobalt)\/([\w\.]+)/i],[v,[m,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[x,"amd64"]],[/(ia32(?=;))/i],[[x,Le]],[/((?:i[346]|x)86)[;\)]/i],[[x,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[x,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[x,"armhf"]],[/windows (ce|mobile); ppc;/i],[[x,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[x,/ower/,a,Le]],[/(sun4\w)[;\)]/i],[[x,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[x,Le]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[p,[g,Ie],[S,w]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[p,[g,Ie],[S,y]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[p,[g,b],[S,y]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[p,[g,b],[S,w]],[/(macintosh);/i],[p,[g,b]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[p,[g,Z],[S,y]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[p,[g,Q],[S,w]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[p,[g,Q],[S,y]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[p,/_/g," "],[g,Ae],[S,y]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[p,/_/g," "],[g,Ae],[S,w]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[p,[g,"OPPO"],[S,y]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[p,[g,"Vivo"],[S,y]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[p,[g,"Realme"],[S,y]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[p,[g,se],[S,y]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[p,[g,se],[S,w]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[p,[g,le],[S,w]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[p,[g,le],[S,y]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[p,[g,"Lenovo"],[S,w]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[p,/_/g," "],[g,"Nokia"],[S,y]],[/(pixel c)\b/i],[p,[g,j],[S,w]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[p,[g,j],[S,y]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[p,[g,ce],[S,y]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[p,"Xperia Tablet"],[g,ce],[S,w]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[p,[g,"OnePlus"],[S,y]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[p,[g,k],[S,w]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[p,/(.+)/g,"Fire Phone $1"],[g,k],[S,y]],[/(playbook);[-\w\),; ]+(rim)/i],[p,g,[S,w]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[p,[g,K],[S,y]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[p,[g,O],[S,w]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[p,[g,O],[S,y]],[/(nexus 9)/i],[p,[g,"HTC"],[S,w]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[g,[p,/_/g," "],[S,y]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[p,[g,"Acer"],[S,w]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[p,[g,"Meizu"],[S,y]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[p,[g,"Ulefone"],[S,y]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[g,p,[S,y]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[g,p,[S,w]],[/(surface duo)/i],[p,[g,oe],[S,w]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[p,[g,"Fairphone"],[S,y]],[/(u304aa)/i],[p,[g,"AT&T"],[S,y]],[/\bsie-(\w*)/i],[p,[g,"Siemens"],[S,y]],[/\b(rct\w+) b/i],[p,[g,"RCA"],[S,w]],[/\b(venue[\d ]{2,7}) b/i],[p,[g,"Dell"],[S,w]],[/\b(q(?:mv|ta)\w+) b/i],[p,[g,"Verizon"],[S,w]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[p,[g,"Barnes & Noble"],[S,w]],[/\b(tm\d{3}\w+) b/i],[p,[g,"NuVision"],[S,w]],[/\b(k88) b/i],[p,[g,"ZTE"],[S,w]],[/\b(nx\d{3}j) b/i],[p,[g,"ZTE"],[S,y]],[/\b(gen\d{3}) b.+49h/i],[p,[g,"Swiss"],[S,y]],[/\b(zur\d{3}) b/i],[p,[g,"Swiss"],[S,w]],[/\b((zeki)?tb.*\b) b/i],[p,[g,"Zeki"],[S,w]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[g,"Dragon Touch"],p,[S,w]],[/\b(ns-?\w{0,9}) b/i],[p,[g,"Insignia"],[S,w]],[/\b((nxa|next)-?\w{0,9}) b/i],[p,[g,"NextBook"],[S,w]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[g,"Voice"],p,[S,y]],[/\b(lvtel\-)?(v1[12]) b/i],[[g,"LvTel"],p,[S,y]],[/\b(ph-1) /i],[p,[g,"Essential"],[S,y]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[p,[g,"Envizen"],[S,w]],[/\b(trio[-\w\. ]+) b/i],[p,[g,"MachSpeed"],[S,w]],[/\btu_(1491) b/i],[p,[g,"Rotor"],[S,w]],[/(shield[\w ]+) b/i],[p,[g,"Nvidia"],[S,w]],[/(sprint) (\w+)/i],[g,p,[S,y]],[/(kin\.[onetw]{3})/i],[[p,/\./g," "],[g,oe],[S,y]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[p,[g,ke],[S,w]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[p,[g,ke],[S,y]],[/smart-tv.+(samsung)/i],[g,[S,P]],[/hbbtv.+maple;(\d+)/i],[[p,/^/,"SmartTV"],[g,Ie],[S,P]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[g,le],[S,P]],[/(apple) ?tv/i],[g,[p,b+" TV"],[S,P]],[/crkey/i],[[p,z+"cast"],[g,j],[S,P]],[/droid.+aft(\w+)( bui|\))/i],[p,[g,k],[S,P]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[p,[g,Z],[S,P]],[/(bravia[\w ]+)( bui|\))/i],[p,[g,ce],[S,P]],[/(mitv-\w{5}) bui/i],[p,[g,Ae],[S,P]],[/Hbbtv.*(technisat) (.*);/i],[g,p,[S,P]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[g,ze],[p,ze],[S,P]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[S,P]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[g,p,[S,T]],[/droid.+; (shield) bui/i],[p,[g,"Nvidia"],[S,T]],[/(playstation [345portablevi]+)/i],[p,[g,ce],[S,T]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[p,[g,oe],[S,T]],[/((pebble))app/i],[g,p,[S,I]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[p,[g,b],[S,I]],[/droid.+; (glass) \d/i],[p,[g,j],[S,I]],[/droid.+; (wt63?0{2,3})\)/i],[p,[g,ke],[S,I]],[/(quest( 2| pro)?)/i],[p,[g,Be],[S,I]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[g,[S,L]],[/(aeobc)\b/i],[p,[g,k],[S,L]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[p,[S,y]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[p,[S,w]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[S,w]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[S,y]],[/(android[-\w\. ]{0,9});.+buil/i],[p,[g,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[m,[v,$+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[m,[v,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[v,m],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[m,v]],os:[[/microsoft (windows) (vista|xp)/i],[v,m],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[v,[m,Qe,R]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[m,Qe,R],[v,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[m,/_/g,"."],[v,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[v,qe],[m,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[m,v],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[v,m],[/\(bb(10);/i],[m,[v,K]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[m,[v,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[m,[v,V+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[m,[v,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[m,[v,"watchOS"]],[/crkey\/([\d\.]+)/i],[m,[v,z+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[v,Ce],m],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[v,m],[/(sunos) ?([\w\.\d]*)/i],[[v,"Solaris"],m],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[v,m]]},me=function(xe,ge){if(typeof xe===h&&(ge=xe,xe=n),!(this instanceof me))return new me(xe,ge).getResult();var de=typeof t!==u&&t.navigator?t.navigator:n,be=xe||(de&&de.userAgent?de.userAgent:a),Ve=de&&de.userAgentData?de.userAgentData:n,pe=ge?Je(Y,ge):Y,Ue=de&&de.userAgent==be;return this.getBrowser=function(){var Me={};return Me[v]=n,Me[m]=n,ut.call(Me,be,pe.browser),Me[_]=Xe(Me[m]),Ue&&de&&de.brave&&typeof de.brave.isBrave==c&&(Me[v]="Brave"),Me},this.getCPU=function(){var Me={};return Me[x]=n,ut.call(Me,be,pe.cpu),Me},this.getDevice=function(){var Me={};return Me[g]=n,Me[p]=n,Me[S]=n,ut.call(Me,be,pe.device),Ue&&!Me[S]&&Ve&&Ve.mobile&&(Me[S]=y),Ue&&Me[p]=="Macintosh"&&de&&typeof de.standalone!==u&&de.maxTouchPoints&&de.maxTouchPoints>2&&(Me[p]="iPad",Me[S]=w),Me},this.getEngine=function(){var Me={};return Me[v]=n,Me[m]=n,ut.call(Me,be,pe.engine),Me},this.getOS=function(){var Me={};return Me[v]=n,Me[m]=n,ut.call(Me,be,pe.os),Ue&&!Me[v]&&Ve&&Ve.platform!="Unknown"&&(Me[v]=Ve.platform.replace(/chrome os/i,Ce).replace(/macos/i,qe)),Me},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return be},this.setUA=function(Me){return be=typeof Me===d&&Me.length>G?ze(Me,G):Me,this},this.setUA(be),this};me.VERSION=r,me.BROWSER=X([v,m,_]),me.CPU=X([x]),me.DEVICE=X([p,g,S,T,y,P,w,I,L]),me.ENGINE=me.OS=X([v,m]),i.exports&&(e=i.exports=me),e.UAParser=me;var _e=typeof t!==u&&(t.jQuery||t.Zepto);if(_e&&!_e.ua){var Se=new me;_e.ua=Se.getResult(),_e.ua.get=function(){return Se.getUA()},_e.ua.set=function(xe){Se.setUA(xe);var ge=Se.getResult();for(var de in ge)_e.ua[de]=ge[de]}}})(typeof window=="object"?window:Ei)})(Bh,Bh.exports);var yO=Bh.exports;const EO=Os(yO);class bO{constructor(){this.parser=new EO,this.type=this.determineDeviceType(this.parser.getDevice().type),this.isMobile=this.type!=="desktop",this.isPhone=this.type==="phone",this.isTablet=this.type==="tablet",this.isDesktop=this.type==="desktop",this.isMixBlendModeUnsupported=typeof window.getComputedStyle(document.body).mixBlendMode>"u",this.setHTMLClass()}determineDeviceType(e){return e==="mobile"?"phone":["desktop","phone","tablet"].includes(e)?e:"desktop"}setHTMLClass(){document.documentElement.classList.add(this.isMobile?"mobile":"desktop")}isWebGLAvailable(){if(!this.webGLAvailable){const e=document.createElement("canvas");this.webGLAvailable=!!window.WebGLRenderingContext&&!!(e.getContext("webgl")||e.getContext("experimental-webgl"))}return this.webGLAvailable}isWebPSupported(){if(this.webPSupported===!1){const e=document.createElement("canvas");e.getContext("2d")?this.webPSupported=e.toDataURL("image/webp").startsWith("data:image/webp"):this.webPSupported=!1}return this.webPSupported}isAppBrowser(){const e=navigator.userAgent;return/FBAN|FBAV|Twitter/.test(e)}check({onErrorWebGL:e,onSuccess:t}){this.isWebGLAvailable()?t():e()}}const th=new bO;class TO{constructor({element:e,elements:t}){Nc(this);const{delay:n,target:r}=e.dataset;this.element=e,this.elements=t,this.delay=isNaN(Number(n))?0:Number(n),this.target=r?e.closest(r):e,this.transformPrefix=Sx("transform"),this.isVisible=!1,this.isAnimated=!1}createAnimation(){"IntersectionObserver"in window?(this.animateOut(),this.createObserver()):this.animateIn()}destroyAnimation(){this.observer&&this.observer.disconnect()}hideAnimation(){this.animateOut()}createObserver(){this.observer=new window.IntersectionObserver(e=>{e.forEach(t=>{!this.isVisible&&t.isIntersecting?(this.animateIn(),this.observer.unobserve(this.target)):!t.isIntersecting&&this.isVisible&&this.animateOut()})}),this.observer.observe(this.target)}animateIn(){this.isVisible=!0,this.isAnimated=!0}animateOut(){this.isVisible=!1,this.isAnimated=!1}}/*!
 * paths 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var wO=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,AO=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,RO=Math.PI/180,lc=Math.sin,cc=Math.cos,Lo=Math.abs,bo=Math.sqrt,CO=function(e){return typeof e=="number"},zg=1e5,Gr=function(e){return Math.round(e*zg)/zg||0};function LO(i,e,t,n,r,a,l){for(var c=i.length,u,h,d,_,p;--c>-1;)for(u=i[c],h=u.length,d=0;d<h;d+=2)_=u[d],p=u[d+1],u[d]=_*e+p*n+a,u[d+1]=_*t+p*r+l;return i._dirty=1,i}function PO(i,e,t,n,r,a,l,c,u){if(!(i===c&&e===u)){t=Lo(t),n=Lo(n);var h=r%360*RO,d=cc(h),_=lc(h),p=Math.PI,v=p*2,S=(i-c)/2,g=(e-u)/2,m=d*S+_*g,x=-_*S+d*g,T=m*m,y=x*x,w=T/(t*t)+y/(n*n);w>1&&(t=bo(w)*t,n=bo(w)*n);var P=t*t,I=n*n,L=(P*I-P*y-I*T)/(P*y+I*T);L<0&&(L=0);var G=(a===l?-1:1)*bo(L),k=G*(t*x/n),b=G*-(n*m/t),O=(i+c)/2,K=(e+u)/2,ne=O+(d*k-_*b),z=K+(_*k+d*b),$=(m-k)/t,V=(x-b)/n,j=(-m-k)/t,Q=(-x-b)/n,le=$*$+V*V,oe=(V<0?-1:1)*Math.acos($/bo(le)),se=($*Q-V*j<0?-1:1)*Math.acos(($*j+V*Q)/bo(le*(j*j+Q*Q)));isNaN(se)&&(se=p),!l&&se>0?se-=v:l&&se<0&&(se+=v),oe%=v,se%=v;var he=Math.ceil(Lo(se)/(v/4)),Ie=[],Z=se/he,ce=4/3*lc(Z/2)/(1+cc(Z/2)),Ae=d*t,ke=_*t,Be=_*-n,Ce=d*n,qe;for(qe=0;qe<he;qe++)r=oe+qe*Z,m=cc(r),x=lc(r),$=cc(r+=Z),V=lc(r),Ie.push(m-ce*x,x+ce*m,$+ce*V,V-ce*$,$,V);for(qe=0;qe<Ie.length;qe+=2)m=Ie[qe],x=Ie[qe+1],Ie[qe]=m*Ae+x*Be+ne,Ie[qe+1]=m*ke+x*Ce+z;return Ie[qe-2]=c,Ie[qe-1]=u,Ie}}function DO(i){var e=(i+"").replace(AO,function(k){var b=+k;return b<1e-4&&b>-1e-4?0:b}).match(wO)||[],t=[],n=0,r=0,a=2/3,l=e.length,c=0,u="ERROR: malformed path: "+i,h,d,_,p,v,S,g,m,x,T,y,w,P,I,L,G=function(b,O,K,ne){T=(K-b)/3,y=(ne-O)/3,g.push(b+T,O+y,K-T,ne-y,K,ne)};if(!i||!isNaN(e[0])||isNaN(e[1]))return console.log(u),t;for(h=0;h<l;h++)if(P=v,isNaN(e[h])?(v=e[h].toUpperCase(),S=v!==e[h]):h--,_=+e[h+1],p=+e[h+2],S&&(_+=n,p+=r),h||(m=_,x=p),v==="M")g&&(g.length<8?t.length-=1:c+=g.length),n=m=_,r=x=p,g=[_,p],t.push(g),h+=2,v="L";else if(v==="C")g||(g=[0,0]),S||(n=r=0),g.push(_,p,n+e[h+3]*1,r+e[h+4]*1,n+=e[h+5]*1,r+=e[h+6]*1),h+=6;else if(v==="S")T=n,y=r,(P==="C"||P==="S")&&(T+=n-g[g.length-4],y+=r-g[g.length-3]),S||(n=r=0),g.push(T,y,_,p,n+=e[h+3]*1,r+=e[h+4]*1),h+=4;else if(v==="Q")T=n+(_-n)*a,y=r+(p-r)*a,S||(n=r=0),n+=e[h+3]*1,r+=e[h+4]*1,g.push(T,y,n+(_-n)*a,r+(p-r)*a,n,r),h+=4;else if(v==="T")T=n-g[g.length-4],y=r-g[g.length-3],g.push(n+T,r+y,_+(n+T*1.5-_)*a,p+(r+y*1.5-p)*a,n=_,r=p),h+=2;else if(v==="H")G(n,r,n=_,r),h+=1;else if(v==="V")G(n,r,n,r=_+(S?r-n:0)),h+=1;else if(v==="L"||v==="Z")v==="Z"&&(_=m,p=x,g.closed=!0),(v==="L"||Lo(n-_)>.5||Lo(r-p)>.5)&&(G(n,r,_,p),v==="L"&&(h+=2)),n=_,r=p;else if(v==="A"){if(I=e[h+4],L=e[h+5],T=e[h+6],y=e[h+7],d=7,I.length>1&&(I.length<3?(y=T,T=L,d--):(y=L,T=I.substr(2),d-=2),L=I.charAt(1),I=I.charAt(0)),w=PO(n,r,+e[h+1],+e[h+2],+e[h+3],+I,+L,(S?n:0)+T*1,(S?r:0)+y*1),h+=d,w)for(d=0;d<w.length;d++)g.push(w[d]);n=g[g.length-2],r=g[g.length-1]}else console.log(u);return h=g.length,h<6?(t.pop(),h=0):g[0]===g[h-2]&&g[1]===g[h-1]&&(g.closed=!0),t.totalPoints=c+h,t}function IO(i){CO(i[0])&&(i=[i]);var e="",t=i.length,n,r,a,l;for(r=0;r<t;r++){for(l=i[r],e+="M"+Gr(l[0])+","+Gr(l[1])+" C",n=l.length,a=2;a<n;a++)e+=Gr(l[a++])+","+Gr(l[a++])+" "+Gr(l[a++])+","+Gr(l[a++])+" "+Gr(l[a++])+","+Gr(l[a])+" ";l.closed&&(e+="z")}return e}/*!
 * CustomEase 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Vn,Mx,yx=function(){return Vn||typeof window<"u"&&(Vn=window.gsap)&&Vn.registerPlugin&&Vn},Gg=function(){Vn=yx(),Vn?(Vn.registerEase("_CE",Va.create),Mx=1):console.warn("Please gsap.registerPlugin(CustomEase)")},UO=1e20,uc=function(e){return~~(e*1e3+(e<0?-.5:.5))/1e3},OO=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,NO=/[cLlsSaAhHvVtTqQ]/g,FO=function(e){var t=e.length,n=UO,r;for(r=1;r<t;r+=6)+e[r]<n&&(n=+e[r]);return n},BO=function(e,t,n){!n&&n!==0&&(n=Math.max(+e[e.length-1],+e[1]));var r=+e[0]*-1,a=-n,l=e.length,c=1/(+e[l-2]+r),u=-t||(Math.abs(+e[l-1]-+e[1])<.01*(+e[l-2]-+e[0])?FO(e)+a:+e[l-1]+a),h;for(u?u=1/u:u=-c,h=0;h<l;h+=2)e[h]=(+e[h]+r)*c,e[h+1]=(+e[h+1]+a)*u},zO=function i(e,t,n,r,a,l,c,u,h,d,_){var p=(e+n)/2,v=(t+r)/2,S=(n+a)/2,g=(r+l)/2,m=(a+c)/2,x=(l+u)/2,T=(p+S)/2,y=(v+g)/2,w=(S+m)/2,P=(g+x)/2,I=(T+w)/2,L=(y+P)/2,G=c-e,k=u-t,b=Math.abs((n-c)*k-(r-u)*G),O=Math.abs((a-c)*k-(l-u)*G),K;return d||(d=[{x:e,y:t},{x:c,y:u}],_=1),d.splice(_||d.length-1,0,{x:I,y:L}),(b+O)*(b+O)>h*(G*G+k*k)&&(K=d.length,i(e,t,p,v,T,y,I,L,h,d,_),i(I,L,w,P,m,x,c,u,h,d,_+1+(d.length-K))),d},Va=function(){function i(t,n,r){Mx||Gg(),this.id=t,this.setData(n,r)}var e=i.prototype;return e.setData=function(n,r){r=r||{},n=n||"0,0,1,1";var a=n.match(OO),l=1,c=[],u=[],h=r.precision||1,d=h<=1,_,p,v,S,g,m,x,T,y;if(this.data=n,(NO.test(n)||~n.indexOf("M")&&n.indexOf("C")<0)&&(a=DO(n)[0]),_=a.length,_===4)a.unshift(0,0),a.push(1,1),_=8;else if((_-2)%6)throw"Invalid CustomEase";for((+a[0]!=0||+a[_-2]!=1)&&BO(a,r.height,r.originY),this.segment=a,S=2;S<_;S+=6)p={x:+a[S-2],y:+a[S-1]},v={x:+a[S+4],y:+a[S+5]},c.push(p,v),zO(p.x,p.y,+a[S],+a[S+1],+a[S+2],+a[S+3],v.x,v.y,1/(h*2e5),c,c.length-1);for(_=c.length,S=0;S<_;S++)x=c[S],T=c[S-1]||x,(x.x>T.x||T.y!==x.y&&T.x===x.x||x===T)&&x.x<=1?(T.cx=x.x-T.x,T.cy=x.y-T.y,T.n=x,T.nx=x.x,d&&S>1&&Math.abs(T.cy/T.cx-c[S-2].cy/c[S-2].cx)>2&&(d=0),T.cx<l&&(T.cx?l=T.cx:(T.cx=.001,S===_-1&&(T.x-=.001,l=Math.min(l,.001),d=0)))):(c.splice(S--,1),_--);if(_=1/l+1|0,g=1/_,m=0,x=c[0],d){for(S=0;S<_;S++)y=S*g,x.nx<y&&(x=c[++m]),p=x.y+(y-x.x)/x.cx*x.cy,u[S]={x:y,cx:g,y:p,cy:0,nx:9},S&&(u[S-1].cy=p-u[S-1].y);u[_-1].cy=c[c.length-1].y-p}else{for(S=0;S<_;S++)x.nx<S*g&&(x=c[++m]),u[S]=x;m<c.length-1&&(u[S-1]=c[c.length-2])}return this.ease=function(w){var P=u[w*_|0]||u[_-1];return P.nx<w&&(P=P.n),P.y+(w-P.x)/P.cx*P.cy},this.ease.custom=this,this.id&&Vn&&Vn.registerEase(this.id,this.ease),this},e.getSVGData=function(n){return i.getSVGData(this,n)},i.create=function(n,r,a){return new i(n,r,a).ease},i.register=function(n){Vn=n,Gg()},i.get=function(n){return Vn.parseEase(n)},i.getSVGData=function(n,r){r=r||{};var a=r.width||100,l=r.height||100,c=r.x||0,u=(r.y||0)+l,h=Vn.utils.toArray(r.path)[0],d,_,p,v,S,g,m,x,T,y;if(r.invert&&(l=-l,u=0),typeof n=="string"&&(n=Vn.parseEase(n)),n.custom&&(n=n.custom),n instanceof i)d=IO(LO([n.segment],a,0,0,-l,c,u));else{for(d=[c,u],m=Math.max(5,(r.precision||1)*200),v=1/m,m+=2,x=5/m,T=uc(c+v*a),y=uc(u+n(v)*-l),_=(y-u)/(T-c),p=2;p<m;p++)S=uc(c+p*v*a),g=uc(u+n(p*v)*-l),(Math.abs((g-y)/(S-T)-_)>x||p===m-1)&&(d.push(T,y),_=(g-y)/(S-T)),T=S,y=g;d="M"+d.join(",")}return h&&h.setAttribute("d",d),d},i}();yx()&&Vn.registerPlugin(Va);Va.version="3.12.5";Er.registerPlugin(Va);const GO=Va.create("smooth","0.7, 0, 0.3, 1");Va.create("translate",".9, 0, .1, 1");class HO extends TO{constructor({element:e}){super({element:e,elements:{}})}animateIn(){Er.to(this.element,{opacity:1,delay:this.delay,duration:1,ease:GO}),super.animateIn()}animateOut(){Er.set(this.element,{opacity:0}),super.animateOut()}}function kO(i,e,t){return Er.utils.interpolate(i,e,t)}function VO(i,e,t){return Er.utils.clamp(i,e,t)}function WO(i,e){for(var t=-1,n=i==null?0:i.length,r=Array(n);++t<n;)r[t]=e(i[t],t,i);return r}var Ex=WO;function XO(){this.__data__=[],this.size=0}var $O=XO;function qO(i,e){return i===e||i!==i&&e!==e}var bx=qO,YO=bx;function KO(i,e){for(var t=i.length;t--;)if(YO(i[t][0],e))return t;return-1}var qc=KO,ZO=qc,jO=Array.prototype,JO=jO.splice;function QO(i){var e=this.__data__,t=ZO(e,i);if(t<0)return!1;var n=e.length-1;return t==n?e.pop():JO.call(e,t,1),--this.size,!0}var e3=QO,t3=qc;function n3(i){var e=this.__data__,t=t3(e,i);return t<0?void 0:e[t][1]}var i3=n3,r3=qc;function s3(i){return r3(this.__data__,i)>-1}var a3=s3,o3=qc;function l3(i,e){var t=this.__data__,n=o3(t,i);return n<0?(++this.size,t.push([i,e])):t[n][1]=e,this}var c3=l3,u3=$O,f3=e3,h3=i3,d3=a3,p3=c3;function Wa(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}Wa.prototype.clear=u3;Wa.prototype.delete=f3;Wa.prototype.get=h3;Wa.prototype.has=d3;Wa.prototype.set=p3;var Yc=Wa,m3=Yc;function _3(){this.__data__=new m3,this.size=0}var g3=_3;function v3(i){var e=this.__data__,t=e.delete(i);return this.size=e.size,t}var x3=v3;function S3(i){return this.__data__.get(i)}var M3=S3;function y3(i){return this.__data__.has(i)}var E3=y3,b3=br,T3=b3["__core-js_shared__"],w3=T3,nh=w3,Hg=function(){var i=/[^.]+$/.exec(nh&&nh.keys&&nh.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}();function A3(i){return!!Hg&&Hg in i}var R3=A3,C3=Function.prototype,L3=C3.toString;function P3(i){if(i!=null){try{return L3.call(i)}catch{}try{return i+""}catch{}}return""}var Tx=P3,D3=vv,I3=R3,U3=Xh,O3=Tx,N3=/[\\^$.*+?()[\]{}|]/g,F3=/^\[object .+?Constructor\]$/,B3=Function.prototype,z3=Object.prototype,G3=B3.toString,H3=z3.hasOwnProperty,k3=RegExp("^"+G3.call(H3).replace(N3,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function V3(i){if(!U3(i)||I3(i))return!1;var e=D3(i)?k3:F3;return e.test(O3(i))}var W3=V3;function X3(i,e){return i==null?void 0:i[e]}var $3=X3,q3=W3,Y3=$3;function K3(i,e){var t=Y3(i,e);return q3(t)?t:void 0}var Xa=K3,Z3=Xa,j3=br,J3=Z3(j3,"Map"),xd=J3,Q3=Xa,eN=Q3(Object,"create"),Kc=eN,kg=Kc;function tN(){this.__data__=kg?kg(null):{},this.size=0}var nN=tN;function iN(i){var e=this.has(i)&&delete this.__data__[i];return this.size-=e?1:0,e}var rN=iN,sN=Kc,aN="__lodash_hash_undefined__",oN=Object.prototype,lN=oN.hasOwnProperty;function cN(i){var e=this.__data__;if(sN){var t=e[i];return t===aN?void 0:t}return lN.call(e,i)?e[i]:void 0}var uN=cN,fN=Kc,hN=Object.prototype,dN=hN.hasOwnProperty;function pN(i){var e=this.__data__;return fN?e[i]!==void 0:dN.call(e,i)}var mN=pN,_N=Kc,gN="__lodash_hash_undefined__";function vN(i,e){var t=this.__data__;return this.size+=this.has(i)?0:1,t[i]=_N&&e===void 0?gN:e,this}var xN=vN,SN=nN,MN=rN,yN=uN,EN=mN,bN=xN;function $a(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}$a.prototype.clear=SN;$a.prototype.delete=MN;$a.prototype.get=yN;$a.prototype.has=EN;$a.prototype.set=bN;var TN=$a,Vg=TN,wN=Yc,AN=xd;function RN(){this.size=0,this.__data__={hash:new Vg,map:new(AN||wN),string:new Vg}}var CN=RN;function LN(i){var e=typeof i;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?i!=="__proto__":i===null}var PN=LN,DN=PN;function IN(i,e){var t=i.__data__;return DN(e)?t[typeof e=="string"?"string":"hash"]:t.map}var Zc=IN,UN=Zc;function ON(i){var e=UN(this,i).delete(i);return this.size-=e?1:0,e}var NN=ON,FN=Zc;function BN(i){return FN(this,i).get(i)}var zN=BN,GN=Zc;function HN(i){return GN(this,i).has(i)}var kN=HN,VN=Zc;function WN(i,e){var t=VN(this,i),n=t.size;return t.set(i,e),this.size+=t.size==n?0:1,this}var XN=WN,$N=CN,qN=NN,YN=zN,KN=kN,ZN=XN;function qa(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}qa.prototype.clear=$N;qa.prototype.delete=qN;qa.prototype.get=YN;qa.prototype.has=KN;qa.prototype.set=ZN;var Sd=qa,jN=Yc,JN=xd,QN=Sd,eF=200;function tF(i,e){var t=this.__data__;if(t instanceof jN){var n=t.__data__;if(!JN||n.length<eF-1)return n.push([i,e]),this.size=++t.size,this;t=this.__data__=new QN(n)}return t.set(i,e),this.size=t.size,this}var nF=tF,iF=Yc,rF=g3,sF=x3,aF=M3,oF=E3,lF=nF;function Ya(i){var e=this.__data__=new iF(i);this.size=e.size}Ya.prototype.clear=rF;Ya.prototype.delete=sF;Ya.prototype.get=aF;Ya.prototype.has=oF;Ya.prototype.set=lF;var wx=Ya,cF="__lodash_hash_undefined__";function uF(i){return this.__data__.set(i,cF),this}var fF=uF;function hF(i){return this.__data__.has(i)}var dF=hF,pF=Sd,mF=fF,_F=dF;function Oc(i){var e=-1,t=i==null?0:i.length;for(this.__data__=new pF;++e<t;)this.add(i[e])}Oc.prototype.add=Oc.prototype.push=mF;Oc.prototype.has=_F;var gF=Oc;function vF(i,e){for(var t=-1,n=i==null?0:i.length;++t<n;)if(e(i[t],t,i))return!0;return!1}var xF=vF;function SF(i,e){return i.has(e)}var MF=SF,yF=gF,EF=xF,bF=MF,TF=1,wF=2;function AF(i,e,t,n,r,a){var l=t&TF,c=i.length,u=e.length;if(c!=u&&!(l&&u>c))return!1;var h=a.get(i),d=a.get(e);if(h&&d)return h==e&&d==i;var _=-1,p=!0,v=t&wF?new yF:void 0;for(a.set(i,e),a.set(e,i);++_<c;){var S=i[_],g=e[_];if(n)var m=l?n(g,S,_,e,i,a):n(S,g,_,i,e,a);if(m!==void 0){if(m)continue;p=!1;break}if(v){if(!EF(e,function(x,T){if(!bF(v,T)&&(S===x||r(S,x,t,n,a)))return v.push(T)})){p=!1;break}}else if(!(S===g||r(S,g,t,n,a))){p=!1;break}}return a.delete(i),a.delete(e),p}var Ax=AF,RF=br,CF=RF.Uint8Array,LF=CF;function PF(i){var e=-1,t=Array(i.size);return i.forEach(function(n,r){t[++e]=[r,n]}),t}var DF=PF;function IF(i){var e=-1,t=Array(i.size);return i.forEach(function(n){t[++e]=n}),t}var UF=IF,Wg=Fc,Xg=LF,OF=bx,NF=Ax,FF=DF,BF=UF,zF=1,GF=2,HF="[object Boolean]",kF="[object Date]",VF="[object Error]",WF="[object Map]",XF="[object Number]",$F="[object RegExp]",qF="[object Set]",YF="[object String]",KF="[object Symbol]",ZF="[object ArrayBuffer]",jF="[object DataView]",$g=Wg?Wg.prototype:void 0,ih=$g?$g.valueOf:void 0;function JF(i,e,t,n,r,a,l){switch(t){case jF:if(i.byteLength!=e.byteLength||i.byteOffset!=e.byteOffset)return!1;i=i.buffer,e=e.buffer;case ZF:return!(i.byteLength!=e.byteLength||!a(new Xg(i),new Xg(e)));case HF:case kF:case XF:return OF(+i,+e);case VF:return i.name==e.name&&i.message==e.message;case $F:case YF:return i==e+"";case WF:var c=FF;case qF:var u=n&zF;if(c||(c=BF),i.size!=e.size&&!u)return!1;var h=l.get(i);if(h)return h==e;n|=GF,l.set(i,e);var d=NF(c(i),c(e),n,r,a,l);return l.delete(i),d;case KF:if(ih)return ih.call(i)==ih.call(e)}return!1}var QF=JF;function eB(i,e){for(var t=-1,n=e.length,r=i.length;++t<n;)i[r+t]=e[t];return i}var tB=eB,nB=tB,iB=ji;function rB(i,e,t){var n=e(i);return iB(i)?n:nB(n,t(i))}var sB=rB;function aB(i,e){for(var t=-1,n=i==null?0:i.length,r=0,a=[];++t<n;){var l=i[t];e(l,t,i)&&(a[r++]=l)}return a}var oB=aB;function lB(){return[]}var cB=lB,uB=oB,fB=cB,hB=Object.prototype,dB=hB.propertyIsEnumerable,qg=Object.getOwnPropertySymbols,pB=qg?function(i){return i==null?[]:(i=Object(i),uB(qg(i),function(e){return dB.call(i,e)}))}:fB,mB=pB,_B=sB,gB=mB,vB=qh;function xB(i){return _B(i,vB,gB)}var SB=xB,Yg=SB,MB=1,yB=Object.prototype,EB=yB.hasOwnProperty;function bB(i,e,t,n,r,a){var l=t&MB,c=Yg(i),u=c.length,h=Yg(e),d=h.length;if(u!=d&&!l)return!1;for(var _=u;_--;){var p=c[_];if(!(l?p in e:EB.call(e,p)))return!1}var v=a.get(i),S=a.get(e);if(v&&S)return v==e&&S==i;var g=!0;a.set(i,e),a.set(e,i);for(var m=l;++_<u;){p=c[_];var x=i[p],T=e[p];if(n)var y=l?n(T,x,p,e,i,a):n(x,T,p,i,e,a);if(!(y===void 0?x===T||r(x,T,t,n,a):y)){g=!1;break}m||(m=p=="constructor")}if(g&&!m){var w=i.constructor,P=e.constructor;w!=P&&"constructor"in i&&"constructor"in e&&!(typeof w=="function"&&w instanceof w&&typeof P=="function"&&P instanceof P)&&(g=!1)}return a.delete(i),a.delete(e),g}var TB=bB,wB=Xa,AB=br,RB=wB(AB,"DataView"),CB=RB,LB=Xa,PB=br,DB=LB(PB,"Promise"),IB=DB,UB=Xa,OB=br,NB=UB(OB,"Set"),FB=NB,BB=Xa,zB=br,GB=BB(zB,"WeakMap"),HB=GB,zh=CB,Gh=xd,Hh=IB,kh=FB,Vh=HB,Rx=Go,Ka=Tx,Kg="[object Map]",kB="[object Object]",Zg="[object Promise]",jg="[object Set]",Jg="[object WeakMap]",Qg="[object DataView]",VB=Ka(zh),WB=Ka(Gh),XB=Ka(Hh),$B=Ka(kh),qB=Ka(Vh),vs=Rx;(zh&&vs(new zh(new ArrayBuffer(1)))!=Qg||Gh&&vs(new Gh)!=Kg||Hh&&vs(Hh.resolve())!=Zg||kh&&vs(new kh)!=jg||Vh&&vs(new Vh)!=Jg)&&(vs=function(i){var e=Rx(i),t=e==kB?i.constructor:void 0,n=t?Ka(t):"";if(n)switch(n){case VB:return Qg;case WB:return Kg;case XB:return Zg;case $B:return jg;case qB:return Jg}return e});var YB=vs,rh=wx,KB=Ax,ZB=QF,jB=TB,ev=YB,tv=ji,nv=mv,JB=gv,QB=1,iv="[object Arguments]",rv="[object Array]",fc="[object Object]",ez=Object.prototype,sv=ez.hasOwnProperty;function tz(i,e,t,n,r,a){var l=tv(i),c=tv(e),u=l?rv:ev(i),h=c?rv:ev(e);u=u==iv?fc:u,h=h==iv?fc:h;var d=u==fc,_=h==fc,p=u==h;if(p&&nv(i)){if(!nv(e))return!1;l=!0,d=!1}if(p&&!d)return a||(a=new rh),l||JB(i)?KB(i,e,t,n,r,a):ZB(i,e,u,t,n,r,a);if(!(t&QB)){var v=d&&sv.call(i,"__wrapped__"),S=_&&sv.call(e,"__wrapped__");if(v||S){var g=v?i.value():i,m=S?e.value():e;return a||(a=new rh),r(g,m,t,n,a)}}return p?(a||(a=new rh),jB(i,e,t,n,r,a)):!1}var nz=tz,iz=nz,av=Ho;function Cx(i,e,t,n,r){return i===e?!0:i==null||e==null||!av(i)&&!av(e)?i!==i&&e!==e:iz(i,e,t,n,Cx,r)}var Lx=Cx,rz=wx,sz=Lx,az=1,oz=2;function lz(i,e,t,n){var r=t.length,a=r,l=!n;if(i==null)return!a;for(i=Object(i);r--;){var c=t[r];if(l&&c[2]?c[1]!==i[c[0]]:!(c[0]in i))return!1}for(;++r<a;){c=t[r];var u=c[0],h=i[u],d=c[1];if(l&&c[2]){if(h===void 0&&!(u in i))return!1}else{var _=new rz;if(n)var p=n(h,d,u,i,e,_);if(!(p===void 0?sz(d,h,az|oz,n,_):p))return!1}}return!0}var cz=lz,uz=Xh;function fz(i){return i===i&&!uz(i)}var Px=fz,hz=Px,dz=qh;function pz(i){for(var e=dz(i),t=e.length;t--;){var n=e[t],r=i[n];e[t]=[n,r,hz(r)]}return e}var mz=pz;function _z(i,e){return function(t){return t==null?!1:t[i]===e&&(e!==void 0||i in Object(t))}}var Dx=_z,gz=cz,vz=mz,xz=Dx;function Sz(i){var e=vz(i);return e.length==1&&e[0][2]?xz(e[0][0],e[0][1]):function(t){return t===i||gz(t,i,e)}}var Mz=Sz,yz=Go,Ez=Ho,bz="[object Symbol]";function Tz(i){return typeof i=="symbol"||Ez(i)&&yz(i)==bz}var Md=Tz,wz=ji,Az=Md,Rz=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Cz=/^\w*$/;function Lz(i,e){if(wz(i))return!1;var t=typeof i;return t=="number"||t=="symbol"||t=="boolean"||i==null||Az(i)?!0:Cz.test(i)||!Rz.test(i)||e!=null&&i in Object(e)}var yd=Lz,Ix=Sd,Pz="Expected a function";function Ed(i,e){if(typeof i!="function"||e!=null&&typeof e!="function")throw new TypeError(Pz);var t=function(){var n=arguments,r=e?e.apply(this,n):n[0],a=t.cache;if(a.has(r))return a.get(r);var l=i.apply(this,n);return t.cache=a.set(r,l)||a,l};return t.cache=new(Ed.Cache||Ix),t}Ed.Cache=Ix;var Dz=Ed,Iz=Dz,Uz=500;function Oz(i){var e=Iz(i,function(n){return t.size===Uz&&t.clear(),n}),t=e.cache;return e}var Nz=Oz,Fz=Nz,Bz=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,zz=/\\(\\)?/g,Gz=Fz(function(i){var e=[];return i.charCodeAt(0)===46&&e.push(""),i.replace(Bz,function(t,n,r,a){e.push(r?a.replace(zz,"$1"):n||t)}),e}),Hz=Gz,ov=Fc,kz=Ex,Vz=ji,Wz=Md,Xz=1/0,lv=ov?ov.prototype:void 0,cv=lv?lv.toString:void 0;function Ux(i){if(typeof i=="string")return i;if(Vz(i))return kz(i,Ux)+"";if(Wz(i))return cv?cv.call(i):"";var e=i+"";return e=="0"&&1/i==-Xz?"-0":e}var $z=Ux,qz=$z;function Yz(i){return i==null?"":qz(i)}var Kz=Yz,Zz=ji,jz=yd,Jz=Hz,Qz=Kz;function eG(i,e){return Zz(i)?i:jz(i,e)?[i]:Jz(Qz(i))}var Ox=eG,tG=Md,nG=1/0;function iG(i){if(typeof i=="string"||tG(i))return i;var e=i+"";return e=="0"&&1/i==-nG?"-0":e}var jc=iG,rG=Ox,sG=jc;function aG(i,e){e=rG(e,i);for(var t=0,n=e.length;i!=null&&t<n;)i=i[sG(e[t++])];return t&&t==n?i:void 0}var Nx=aG,oG=Nx;function lG(i,e,t){var n=i==null?void 0:oG(i,e);return n===void 0?t:n}var cG=lG;function uG(i,e){return i!=null&&e in Object(i)}var fG=uG,hG=Ox,dG=pv,pG=ji,mG=_v,_G=Wh,gG=jc;function vG(i,e,t){e=hG(e,i);for(var n=-1,r=e.length,a=!1;++n<r;){var l=gG(e[n]);if(!(a=i!=null&&t(i,l)))break;i=i[l]}return a||++n!=r?a:(r=i==null?0:i.length,!!r&&_G(r)&&mG(l,r)&&(pG(i)||dG(i)))}var xG=vG,SG=fG,MG=xG;function yG(i,e){return i!=null&&MG(i,e,SG)}var EG=yG,bG=Lx,TG=cG,wG=EG,AG=yd,RG=Px,CG=Dx,LG=jc,PG=1,DG=2;function IG(i,e){return AG(i)&&RG(e)?CG(LG(i),e):function(t){var n=TG(t,i);return n===void 0&&n===e?wG(t,i):bG(e,n,PG|DG)}}var UG=IG;function OG(i){return function(e){return e==null?void 0:e[i]}}var NG=OG,FG=Nx;function BG(i){return function(e){return FG(e,i)}}var zG=BG,GG=NG,HG=zG,kG=yd,VG=jc;function WG(i){return kG(i)?GG(VG(i)):HG(i)}var XG=WG,$G=Mz,qG=UG,YG=Sv,KG=ji,ZG=XG;function jG(i){return typeof i=="function"?i:i==null?YG:typeof i=="object"?KG(i)?qG(i[0],i[1]):$G(i):ZG(i)}var JG=jG,QG=xv,eH=$h;function tH(i,e){var t=-1,n=eH(i)?Array(i.length):[];return QG(i,function(r,a,l){n[++t]=e(r,a,l)}),n}var nH=tH,iH=Ex,rH=JG,sH=nH,aH=ji;function oH(i,e){var t=aH(i)?iH:sH;return t(i,rH(e))}var lH=oH;const cH=Os(lH);function uv(i,e){return i instanceof window.HTMLElement?[e(i)]:cH(i,e)}class Fx extends gx{constructor({classes:e,id:t,element:n,elements:r,isScrollable:a=!0}){super(),Nc(this),this.classes={...e},this.id=t,this.selectors={element:n,elements:{preloaders:"[data-src]",pagePreloaders:"[data-page-src]",animationsHighlights:'[data-animation="highlight"]',...r}},this.isScrollable=a,this.scroll={position:0,current:0,target:0,limit:0,ease:.1},this.transformPrefix=Sx("transform"),this.isVisible=!1}create(){this.animations=[],this.element=document.querySelector(this.selectors.element),this.elements={},Eo.each(this.selectors.elements,(e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList?this.elements[t]=e:Array.isArray(e)?this.elements[t]=e:(this.elements[t]=this.element.querySelectorAll(e),this.elements[t].length===0?this.elements[t]=null:this.elements[t].length===1&&(this.elements[t]=this.element.querySelector(e)))}),this.isScrollable&&(this.scroll={position:0,current:0,target:0,limit:this.elements.wrapper.clientHeight-window.innerHeight,ease:.1}),this.createAnimations(),this.createObserver(),this.createPreloaders()}createAnimations(){this.animationsHighlight=uv(this.elements.animationsHighlights,e=>new HO({element:e})),this.animations.push(...this.animationsHighlight)}createObserver(){this.observer=new window.ResizeObserver(e=>{let t=!1;for(const n of e)if(n.target===this.elements.wrapper){t=!0;break}t&&window.requestAnimationFrame(()=>{this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight})}),this.observer.observe(this.elements.wrapper)}createPreloaders(){this.preloaders=uv(this.elements.preloaders,e=>new MO({element:e}))}reset(){this.scroll={position:0,current:0,target:0,limit:0,ease:.1}}set(e){this.scroll.current=this.scroll.target=this.scroll.last=e,this.transform(this.elements.wrapper,this.scroll.current)}show(){return this.reset(),Eo.each(this.animations,e=>e.createAnimation()),this.isVisible=!0,this.addEventListeners(),Er.set(document.documentElement,{backgroundColor:this.element.getAttribute("data-background"),color:this.element.getAttribute("data-color")}),Promise.resolve()}hide(){return this.isVisible=!1,this.removeEventListeners(),Eo.each(this.animations,e=>e.destroyAnimation()),Promise.resolve()}transform(e,t){e.style[this.transformPrefix]=`translate3d(0, ${-Math.round(t)}px, 0)`}onResize(){this.elements.wrapper&&window.requestAnimationFrame(()=>{this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight,Eo.each(this.animations,e=>{e.onResize&&e.onResize()})})}onTouchDown(e){!th.isMobile||!this.isVisible||(this.isDown=!0,this.scroll.position=this.scroll.current,this.start=e.touches?e.touches[0].clientY:e.clientY)}onTouchMove(e){if(!th.isMobile||!this.isDown||!this.isVisible)return;const t=e.touches?e.touches[0].clientY:e.clientY,n=(this.start-t)*3;this.scroll.target=this.scroll.position+n}onTouchUp(){!th.isMobile||!this.isVisible||(this.isDown=!1)}onWheel(e){if(!this.isVisible)return;const t=e.pixelY;return this.scroll.target+=t,t}addEventListeners(){}removeEventListeners(){}update(){!this.isScrollable||!this.isVisible||(this.scroll.target=VO(0,this.scroll.limit,this.scroll.target),this.scroll.current=kO(this.scroll.current,this.scroll.target,this.scroll.ease),this.scroll.target===0?this.scroll.current=Math.floor(this.scroll.current):this.scroll.current=Math.ceil(this.scroll.current),this.scroll.current<.1&&(this.scroll.current=0),this.elements.wrapper&&this.transform(this.elements.wrapper,this.scroll.current),Eo.each(this.animations,e=>{e.update&&e.update(this.scroll)}),this.scroll.last=this.scroll.current)}}class uH extends Fx{constructor(){super({id:"home",classes:{},element:".home",elements:{wrapper:".home__wrapper"}})}async show(){return super.show()}async hide(){return super.hide()}}class fH extends Fx{constructor(){super({id:"about",classes:{},element:".about",elements:{wrapper:".about__wrapper"}})}async show(){return super.show()}async hide(){return super.hide()}}class hH{constructor(){Nc(this),this.url=window.location.href,this.isLoading=!1,this.init()}init(){this.createContent(),this.createCanvas(),this.createPages(),this.createPreloader(),this.addEventsListeners(),this.addLinkListeners(),this.update()}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={home:new uH,about:new fH},this.page=this.pages[this.template],this.page.create(!0)}createCanvas(){this.canvas=new oO({template:this.template})}createPreloader(){this.preloader=new gO,this.preloader.preload(this.content),this.preloader.on("preloaded",()=>this.onPreloaded())}createLoader(){this.preloader.load(this.content),this.preloader.on("loaded",()=>this.onLoaded())}onPreloaded(){this.onResize(),this.canvas.onPreloaded(),this.page.show()}onLoaded(){this.onResize(),this.canvas.onLoaded(this.template),this.page.show()}onPopState(){this.onChange({url:window.location.pathname,push:!1})}async onChange({url:e,push:t}){if(e===this.url||this.isLoading)return;this.url=e,this.isLoading=!0,this.canvas.onChangeStart(this.template,e),await this.page.hide();const n=await window.fetch(e);if(n.status===200){const r=await n.text(),a=document.createElement("div");a.innerHTML=r,t&&window.history.pushState({},"",e);const l=a.querySelector(".content");this.template=l.getAttribute("data-template"),this.content.innerHTML=l.innerHTML,this.content.setAttribute("data-template",this.template),this.page=this.pages[this.template],this.page.create(),this.createLoader(),this.addLinkListeners(),this.isLoading=!1}else console.log("error")}onResize(){this.page&&this.page.onResize&&this.page.onResize(),window.requestAnimationFrame(()=>{this.canvas&&this.canvas.onResize&&this.canvas.onResize()})}onTouchDown(e){this.canvas&&this.canvas.onTouchDown&&this.canvas.onTouchDown(e),this.page&&this.page.onTouchDown&&this.page.onTouchDown(e)}onTouchMove(e){this.canvas&&this.canvas.onTouchMove&&this.canvas.onTouchMove(e),this.page&&this.page.onTouchMove&&this.page.onTouchMove(e)}onTouchUp(e){this.canvas&&this.canvas.onTouchUp&&this.canvas.onTouchUp(e),this.page&&this.page.onTouchUp&&this.page.onTouchUp(e)}onWheel(e){const t=wR(e);this.canvas&&this.canvas.onWheel&&this.canvas.onWheel(t),this.page&&this.page.onWheel&&this.page.onWheel(t)}update(){this.page&&this.page.update&&this.page.update(),this.canvas&&this.canvas.update&&this.canvas.update(this.page.scroll.current),window.requestAnimationFrame(this.update.bind(this))}addEventsListeners(){window.addEventListener("popstate",this.onPopState,{passive:!0}),window.addEventListener("resize",this.onResize,{passive:!0}),window.addEventListener("mousedown",this.onTouchDown,{passive:!0}),window.addEventListener("mousemove",this.onTouchMove,{passive:!0}),window.addEventListener("mouseup",this.onTouchUp,{passive:!0}),window.addEventListener("touchstart",this.onTouchDown,{passive:!0}),window.addEventListener("touchmove",this.onTouchMove,{passive:!0}),window.addEventListener("touchend",this.onTouchUp,{passive:!0}),window.addEventListener("wheel",this.onWheel,{passive:!0})}addLinkListeners(){const e=document.querySelectorAll("a");Mv(e,t=>{const n=t.href.indexOf(window.location.origin)>-1,r=t.href.indexOf("#")>-1,a=t.href.indexOf("mailto")===-1,l=t.href.indexOf("tel")===-1;n?t.onclick=c=>{c.preventDefault(),r||this.onChange({url:t.href,push:!0})}:a&&l&&(t.rel="noopener",t.target="_blank")})}}new hH;
