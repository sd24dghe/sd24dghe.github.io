import{o as Da,a as Pa,i as za,s as N,b as rt,e as Se}from"./lifecycle.CqJfVxuN.js";import{a3 as Ia,aa as $a,aH as Ra,aI as Wa,o as Na,u as Ya,aJ as qa,aK as ze,aL as Ka,v as Oa,aM as ht,c as nt,f as tt,a as Y,p as Ha,b as Ua,h as l,m as F,aF as O,g as t,d as vt,s as v,e as r,r as i,n as Xa,t as Pt,k as h}from"./utils._pqi1MJs.js";import{a as Ga,s as J}from"./render.DS8KjgJD.js";import{i as z}from"./if.BBMk-t1r.js";import{e as Ja,i as Va}from"./each.DzczNsMF.js";import{b as je}from"./this.B7cDRNk5.js";import{I as f}from"./Icon.jfCPN6rX.js";import{m as xt}from"./config.ZbzWn8RE.js";import{I as Qa}from"./zh_TW.D-i86LJH.js";import{i as Za}from"./translation.Cuw06Zjh.js";import"./props.BbN1KjDP.js";const ti=()=>performance.now(),V={tick:c=>requestAnimationFrame(c),now:()=>ti(),tasks:new Set};function Ie(){const c=V.now();V.tasks.forEach(n=>{n.c(c)||(V.tasks.delete(n),n.f())}),V.tasks.size!==0&&V.tick(Ie)}function ei(c){let n;return V.tasks.size===0&&V.tick(Ie),{promise:new Promise(w=>{V.tasks.add(n={c,f:w})}),abort(){V.tasks.delete(n)}}}function zt(c,n){ze(()=>{c.dispatchEvent(new CustomEvent(n))})}function ai(c){if(c==="float")return"cssFloat";if(c==="offset")return"cssOffset";if(c.startsWith("--"))return c;const n=c.split("-");return n.length===1?n[0]:n[0]+n.slice(1).map(w=>w[0].toUpperCase()+w.slice(1)).join("")}function De(c){const n={},w=c.split(";");for(const k of w){const[M,A]=k.split(":");if(!M||A===void 0)break;const I=ai(M.trim());n[I]=A.trim()}return n}const ii=c=>c;function ri(c,n,w,k){var M=(c&qa)!==0,A="both",I,x=n.inert,B=n.style.overflow,d,b;function P(){return ze(()=>I??=w()(n,k?.()??{},{direction:A}))}var E={is_global:M,in(){n.inert=x,zt(n,"introstart"),d=ae(n,P(),b,1,()=>{zt(n,"introend"),d?.abort(),d=I=void 0,n.style.overflow=B})},out(j){n.inert=!0,zt(n,"outrostart"),b=ae(n,P(),d,0,()=>{zt(n,"outroend"),j?.()})},stop:()=>{d?.abort(),b?.abort()}},T=Ia;if((T.transitions??=[]).push(E),Ga){var S=M;if(!S){for(var u=T.parent;u&&(u.f&$a)!==0;)for(;(u=u.parent)&&(u.f&Ra)===0;);S=!u||(u.f&Wa)!==0}S&&Na(()=>{Ya(()=>E.in())})}}function ae(c,n,w,k,M){var A=k===1;if(Ka(n)){var I,x=!1;return Oa(()=>{if(!x){var j=n({direction:A?"in":"out"});I=ae(c,j,w,k,M)}}),{abort:()=>{x=!0,I?.abort()},deactivate:()=>I.deactivate(),reset:()=>I.reset(),t:()=>I.t()}}if(w?.deactivate(),!n?.duration)return M(),{abort:ht,deactivate:ht,reset:ht,t:()=>k};const{delay:B=0,css:d,tick:b,easing:P=ii}=n;var E=[];if(A&&w===void 0&&(b&&b(0,1),d)){var T=De(d(0,1));E.push(T,T)}var S=()=>1-k,u=c.animate(E,{duration:B,fill:"forwards"});return u.onfinish=()=>{u.cancel();var j=w?.t()??1-k;w?.abort();var g=k-j,et=n.duration*Math.abs(g),at=[];if(et>0){var $=!1;if(d)for(var p=Math.ceil(et/16.666666666666668),y=0;y<=p;y+=1){var a=j+g*P(y/p),Q=De(d(a,1-a));at.push(Q),$||=Q.overflow==="hidden"}$&&(c.style.overflow="hidden"),S=()=>{var H=u.currentTime;return j+g*P(H/et)},b&&ei(()=>{if(u.playState!=="running")return!1;var H=S();return b(H,1-H),!0})}u=c.animate(at,{duration:et,fill:"forwards"}),u.onfinish=()=>{S=()=>k,b?.(k,1-k),M()}},{abort:()=>{u&&(u.cancel(),u.effect=null,u.onfinish=ht)},deactivate:()=>{M=ht},reset:()=>{k===0&&b?.(1,0)},t:()=>S()}}function Pe(c){return function(...n){var w=n[0];return w.stopPropagation(),c?.apply(this,n)}}function ni(c){const n=c-1;return n*n*n+1}function si(c,{delay:n=0,duration:w=400,easing:k=ni,axis:M="y"}={}){const A=getComputedStyle(c),I=+A.opacity,x=M==="y"?"height":"width",B=parseFloat(A[x]),d=M==="y"?["top","bottom"]:["left","right"],b=d.map(g=>`${g[0].toUpperCase()}${g.slice(1)}`),P=parseFloat(A[`padding${b[0]}`]),E=parseFloat(A[`padding${b[1]}`]),T=parseFloat(A[`margin${b[0]}`]),S=parseFloat(A[`margin${b[1]}`]),u=parseFloat(A[`border${b[0]}Width`]),j=parseFloat(A[`border${b[1]}Width`]);return{delay:n,duration:w,easing:k,css:g=>`overflow: hidden;opacity: ${Math.min(g*20,1)*I};${x}: ${g*B}px;padding-${d[0]}: ${g*P}px;padding-${d[1]}: ${g*E}px;margin-${d[0]}: ${g*T}px;margin-${d[1]}: ${g*S}px;border-${d[0]}-width: ${g*u}px;border-${d[1]}-width: ${g*j}px;min-${x}: 0`}}var oi=vt('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),li=vt('<div class="flex space-x-0.5"><div class="w-0.5 h-3 bg-white rounded-full animate-pulse"></div> <div class="w-0.5 h-4 bg-white rounded-full animate-pulse" style="animation-delay: 150ms;"></div> <div class="w-0.5 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 300ms;"></div></div>'),ui=vt('<span class="text-sm text-[var(--content-meta)]"></span>'),ci=vt('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>'),di=vt('<div class="playlist-panel float-panel fixed bottom-20 right-4 w-80 max-h-96 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80"></div></div>'),vi=vt(`<!> <div><div role="button" tabindex="0" aria-label="显示音乐播放器"><!></div> <div role="button" tabindex="0" aria-label="展开音乐播放器"><div class="flex items-center gap-3 cursor-pointer"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden"><img alt="封面"/> <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><!></div></div> <div class="flex-1 min-w-0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div></div> <div><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"><img alt="封面"/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="播放进度" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button></div> <div class="bottom-controls flex items-center gap-2"><button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="音量控制" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div> <button><!></button></div></div> <!></div> <style>.orb-player {
	position: relative;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
}
.orb-player::before {
	content: '';
	position: absolute;
	inset: -2px;
	background: linear-gradient(45deg, var(--primary), transparent, var(--primary));
	border-radius: 50%;
	z-index: -1;
	opacity: 0;
	transition: opacity 0.3s ease;
}
.orb-player:hover::before {
	opacity: 0.3;
	animation: rotate 2s linear infinite;
}
.orb-player .animate-pulse {
	animation: musicWave 1.5s ease-in-out infinite;
}
@keyframes rotate {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}
@keyframes musicWave {
	0%, 100% { transform: scaleY(0.5); }
	50% { transform: scaleY(1); }
}
.music-player.hidden-mode {
	width: 48px;
	height: 48px;
}
.music-player {
    max-width: 320px;
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
}
.mini-player {
    width: 280px;
    position: absolute;
    bottom: 0;
    right: 0;
    /*left: 0;*/
}
.expanded-player {
    width: 320px;
    position: absolute;
    bottom: 0;
    right: 0;
}
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}
.progress-section div:hover,
.bottom-controls > div:hover {
    transform: scaleY(1.2);
    transition: transform 0.2s ease;
}
@media (max-width: 768px) {
    .music-player {
        max-width: 280px;
        /*left: 8px !important;*/
        bottom: 8px !important;
        right: 8px !important;
    }
    .music-player.expanded {
        width: calc(100vw - 16px);
        max-width: none;
        /*left: 8px !important;*/
        right: 8px !important;
    }
    .playlist-panel {
        width: calc(100vw - 16px) !important;
        /*left: 8px !important;*/
        right: 8px !important;
        max-width: none;
    }
    .controls {
        gap: 8px;
    }
    .controls button {
        width: 36px;
        height: 36px;
    }
    .controls button:nth-child(3) {
        width: 44px;
        height: 44px;
    }
}
@media (max-width: 480px) {
    .music-player {
        max-width: 260px;
    }
    .song-title {
        font-size: 14px;
    }
    .song-artist {
        font-size: 12px;
    }
    .controls {
        gap: 6px;
        margin-bottom: 12px;
    }
    .controls button {
        width: 32px;
        height: 32px;
    }
    .controls button:nth-child(3) {
        width: 40px;
        height: 40px;
    }
    .playlist-item {
        padding: 8px 12px;
    }
    .playlist-item .w-10 {
        width: 32px;
        height: 32px;
    }
}
@keyframes slide-up {
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
.animate-slide-up {
    animation: slide-up 0.3s ease-out;
}
@media (hover: none) and (pointer: coarse) {
    .music-player button,
    .playlist-item {
        min-height: 44px;
    }
    .progress-section > div,
    .bottom-controls > div:nth-child(2) {
        height: 12px;
    }
}
/* 自定义旋转动画，停止时保持当前位置 */
@keyframes spin-continuous {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
.cover-container img {
    animation: spin-continuous 3s linear infinite;
    animation-play-state: paused;
}
.cover-container img.spinning {
    animation-play-state: running;
}
/* 让主题色按钮更有视觉反馈 */
button.bg-\\[var\\(--primary\\)\\] {
    box-shadow: 0 0 0 2px var(--primary);
    border: none;
}</style>`,1);function Ei(c,n){Ua(n,!1);let w=xt.mode??"meting",k=xt.meting_api??"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r",M=xt.id??"14164869977",A=xt.server??"netease",I=xt.type??"playlist",x=F(!1),B=F(!1),d=F(!1),b=F(!1),P=F(0),E=F(0),T=F(.7),S=F(!1),u=F(!1),j=F(!1),g=F(0),et=F(""),at=F(!1),$=F({title:"示例歌曲",artist:"示例艺术家",cover:"/favicon/favicon-light-192.png",url:"",duration:0}),p=F([]),y=F(0),a=F(),Q=F(),H=F();const $e=[{id:1,title:"ひとり上手",artist:"Kaya",cover:"assets/music/cover/hitori.jpg",url:"assets/music/url/hitori.mp3",duration:240},{id:2,title:"眩耀夜行",artist:"スリーズブーケ",cover:"assets/music/cover/xryx.jpg",url:"assets/music/url/xryx.mp3",duration:180},{id:3,title:"春雷の頃",artist:"22/7",cover:"assets/music/cover/cl.jpg",url:"assets/music/url/cl.mp3",duration:200}];async function Re(){if(!k||!M)return;l(u,!0);const s=k.replace(":server",A).replace(":type",I).replace(":id",M).replace(":auth","").replace(":r",Date.now().toString());try{const D=await fetch(s);if(!D.ok)throw new Error("meting api error");const U=await D.json();l(p,U.map(W=>{let ft=W.name??W.title??"未知歌曲",Ft=W.artist??W.author??"未知艺术家",R=W.duration??0;return R>1e4&&(R=Math.floor(R/1e3)),(!Number.isFinite(R)||R<=0)&&(R=0),{id:W.id,title:ft,artist:Ft,cover:W.pic??"",url:W.url??"",duration:R}})),t(p).length>0&&$t(t(p)[0]),l(u,!1)}catch{Et("Meting 歌单获取失败"),l(u,!1)}}function We(){!t(a)||!t($).url||(t(x)?t(a).pause():t(a).play())}function yt(){l(B,!t(B)),t(B)&&(l(b,!1),l(d,!1))}function _t(){l(d,!t(d)),t(d)&&(l(B,!1),l(b,!1))}function ie(){l(b,!t(b))}function Ne(){l(j,!t(j))}function Ye(){l(g,(t(g)+1)%3)}function qe(){if(t(p).length<=1)return;const s=t(y)>0?t(y)-1:t(p).length-1;wt(s)}function It(){if(t(p).length<=1)return;let s;if(t(j))do s=Math.floor(Math.random()*t(p).length);while(s===t(y)&&t(p).length>1);else s=t(y)<t(p).length-1?t(y)+1:0;wt(s)}function wt(s){if(s<0||s>=t(p).length)return;const D=t(x);l(y,s),t(a)&&t(a).pause(),$t(t(p)[t(y)]),(D||!t(x))&&setTimeout(()=>{t(a)&&(t(a).readyState>=2?t(a).play().catch(()=>{}):t(a).addEventListener("canplay",()=>{t(a).play().catch(()=>{})},{once:!0}))},100)}function kt(s){return s.startsWith("http://")||s.startsWith("https://")||s.startsWith("/")?s:`/${s}`}function $t(s){!s||!t(a)||(l($,{...s}),s.url?(l(u,!0),t(a).pause(),O(a,t(a).currentTime=0),l(P,0),l(E,s.duration??0),t(a).removeEventListener("loadeddata",re),t(a).removeEventListener("error",ne),t(a).removeEventListener("loadstart",se),t(a).addEventListener("loadeddata",re,{once:!0}),t(a).addEventListener("error",ne,{once:!0}),t(a).addEventListener("loadstart",se,{once:!0}),O(a,t(a).src=kt(s.url)),t(a).load()):l(u,!1))}function re(){l(u,!1),t(a)?.duration&&t(a).duration>1&&(l(E,Math.floor(t(a).duration)),t(p)[t(y)]&&O(p,t(p)[t(y)].duration=t(E)),O($,t($).duration=t(E)))}function ne(s){l(u,!1),Et(`无法播放 "${t($).title}"，正在尝试下一首...`),t(p).length>1?setTimeout(()=>It(),1e3):Et("播放列表中没有可用的歌曲")}function se(){}function Et(s){l(et,s),l(at,!0),setTimeout(()=>{l(at,!1)},3e3)}function Ke(){l(at,!1)}function Oe(s){if(!t(a)||!t(Q))return;const D=t(Q).getBoundingClientRect(),W=(s.clientX-D.left)/D.width*t(E);O(a,t(a).currentTime=W),l(P,W)}function He(s){if(!t(a)||!t(H))return;const D=t(H).getBoundingClientRect(),U=Math.max(0,Math.min(1,(s.clientX-D.left)/D.width));l(T,U),O(a,t(a).volume=t(T)),l(S,t(T)===0)}function oe(){t(a)&&(l(S,!t(S)),O(a,t(a).muted=t(S)))}function le(s){if(!Number.isFinite(s)||s<0)return"0:00";const D=Math.floor(s/60),U=Math.floor(s%60);return`${D}:${U.toString().padStart(2,"0")}`}function Ue(){t(a)&&(t(a).addEventListener("play",()=>{l(x,!0)}),t(a).addEventListener("pause",()=>{l(x,!1)}),t(a).addEventListener("timeupdate",()=>{l(P,t(a).currentTime)}),t(a).addEventListener("ended",()=>{t(g)===1?(O(a,t(a).currentTime=0),t(a).play().catch(()=>{})):t(g)===2||t(y)<t(p).length-1||t(j)?It():l(x,!1)}),t(a).addEventListener("error",s=>{l(u,!1)}),t(a).addEventListener("stalled",()=>{}),t(a).addEventListener("waiting",()=>{}))}Da(()=>{l(a,new Audio),O(a,t(a).volume=t(T)),Ue(),w==="meting"?Re():(l(p,[...$e]),t(p).length>0?$t(t(p)[0]):Et("本地播放列表为空"))}),Pa(()=>{t(a)&&(t(a).pause(),O(a,t(a).src=""))}),za();var ue=nt(),Xe=tt(ue);{var Ge=s=>{var D=vi(),U=tt(D);{var W=e=>{var m=oi(),_=r(m),C=r(_);f(C,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var L=v(C,2),o=r(L,!0);i(L);var X=v(L,2),ct=r(X);f(ct,{icon:"material-symbols:close",class:"text-lg"}),i(X),i(_),i(m),Pt(()=>J(o,t(et))),h("click",X,Ke),Y(e,m)};z(U,e=>{t(at)&&e(W)})}var ft=v(U,2);let Ft;var R=r(ft);let ce;var Je=r(R);{var Ve=e=>{f(e,{icon:"eos-icons:loading",class:"text-white text-lg"})},Qe=e=>{var m=nt(),_=tt(m);{var C=o=>{var X=li();Y(o,X)},L=o=>{f(o,{icon:"material-symbols:music-note",class:"text-white text-lg"})};z(_,o=>{t(x)?o(C):o(L,!1)},!0)}Y(e,m)};z(Je,e=>{t(u)?e(Ve):e(Qe,!1)})}i(R);var st=v(R,2);let de;var ve=r(st),Rt=r(ve),Wt=r(Rt);let fe;var pe=v(Wt,2),Ze=r(pe);{var ta=e=>{f(e,{icon:"eos-icons:loading",class:"text-white text-xl"})},ea=e=>{var m=nt(),_=tt(m);{var C=o=>{f(o,{icon:"material-symbols:pause",class:"text-white text-xl"})},L=o=>{f(o,{icon:"material-symbols:play-arrow",class:"text-white text-xl"})};z(_,o=>{t(x)?o(C):o(L,!1)},!0)}Y(e,m)};z(Ze,e=>{t(u)?e(ta):e(ea,!1)})}i(pe),i(Rt);var Nt=v(Rt,2),Yt=r(Nt),aa=r(Yt,!0);i(Yt);var me=v(Yt,2),ia=r(me,!0);i(me),i(Nt);var be=v(Nt,2),At=r(be),ra=r(At);f(ra,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(At);var qt=v(At,2),na=r(qt);f(na,{icon:"material-symbols:expand-less",class:"text-lg"}),i(qt),i(be),i(ve),i(st);var Ct=v(st,2);let ge;var Kt=r(Ct),Ot=r(Kt),he=r(Ot);let xe;i(Ot);var Ht=v(Ot,2),Ut=r(Ht),sa=r(Ut,!0);i(Ut);var Xt=v(Ut,2),oa=r(Xt,!0);i(Xt);var ye=v(Xt,2),la=r(ye);i(ye),i(Ht);var _e=v(Ht,2),Bt=r(_e),ua=r(Bt);f(ua,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(Bt);var Gt=v(Bt,2),ca=r(Gt);f(ca,{icon:"material-symbols:expand-more",class:"text-lg"}),i(Gt),i(_e),i(Kt);var Jt=v(Kt,2),ot=r(Jt),da=r(ot);i(ot),je(ot,e=>l(Q,e),()=>t(Q)),i(Jt);var Vt=v(Jt,2),lt=r(Vt);let we;var va=r(lt);f(va,{icon:"material-symbols:shuffle",class:"text-lg"}),i(lt);var pt=v(lt,2),fa=r(pt);f(fa,{icon:"material-symbols:skip-previous",class:"text-xl"}),i(pt);var ut=v(pt,2);let ke;var pa=r(ut);{var ma=e=>{f(e,{icon:"eos-icons:loading",class:"text-xl"})},ba=e=>{var m=nt(),_=tt(m);{var C=o=>{f(o,{icon:"material-symbols:pause",class:"text-xl"})},L=o=>{f(o,{icon:"material-symbols:play-arrow",class:"text-xl"})};z(_,o=>{t(x)?o(C):o(L,!1)},!0)}Y(e,m)};z(pa,e=>{t(u)?e(ma):e(ba,!1)})}i(ut);var mt=v(ut,2),ga=r(mt);f(ga,{icon:"material-symbols:skip-next",class:"text-xl"}),i(mt);var Lt=v(mt,2);let Ee;var ha=r(Lt);{var xa=e=>{f(e,{icon:"material-symbols:repeat-one",class:"text-lg"})},ya=e=>{var m=nt(),_=tt(m);{var C=o=>{f(o,{icon:"material-symbols:repeat",class:"text-lg"})},L=o=>{f(o,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};z(_,o=>{t(g)===2?o(C):o(L,!1)},!0)}Y(e,m)};z(ha,e=>{t(g)===1?e(xa):e(ya,!1)})}i(Lt),i(Vt);var Fe=v(Vt,2),Mt=r(Fe),_a=r(Mt);{var wa=e=>{f(e,{icon:"material-symbols:volume-off",class:"text-lg"})},ka=e=>{var m=nt(),_=tt(m);{var C=o=>{f(o,{icon:"material-symbols:volume-down",class:"text-lg"})},L=o=>{f(o,{icon:"material-symbols:volume-up",class:"text-lg"})};z(_,o=>{t(T)<.5?o(C):o(L,!1)},!0)}Y(e,m)};z(_a,e=>{t(S)||t(T)===0?e(wa):e(ka,!1)})}i(Mt);var it=v(Mt,2),Ea=r(it);i(it),je(it,e=>l(H,e),()=>t(H));var Tt=v(it,2);let Ae;var Fa=r(Tt);f(Fa,{icon:"material-symbols:queue-music",class:"text-lg"}),i(Tt),i(Fe),i(Ct);var Aa=v(Ct,2);{var Ca=e=>{var m=di(),_=r(m),C=r(_),L=r(C,!0);i(C);var o=v(C,2),X=r(o);f(X,{icon:"material-symbols:close",class:"text-lg"}),i(o),i(_);var ct=v(_,2);Ja(ct,5,()=>t(p),Va,(bt,Z,q)=>{var G=ci();let St;var gt=r(G),Ba=r(gt);{var La=K=>{f(K,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},Ma=K=>{var Dt=nt(),te=tt(Dt);{var ee=dt=>{f(dt,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},ja=dt=>{var Te=ui();Te.textContent=q+1,Y(dt,Te)};z(te,dt=>{q===t(y)?dt(ee):dt(ja,!1)},!0)}Y(K,Dt)};z(Ba,K=>{q===t(y)&&t(x)?K(La):K(Ma,!1)})}i(gt);var Qt=v(gt,2),Ce=r(Qt);i(Qt);var Be=v(Qt,2),jt=r(Be);let Le;var Ta=r(jt,!0);i(jt);var Zt=v(jt,2);let Me;var Sa=r(Zt,!0);i(Zt),i(Be),i(G),Pt((K,Dt,te,ee)=>{St=N(G,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,St,K),rt(G,"aria-label",`播放 ${t(Z).title??""} - ${t(Z).artist??""}`),rt(Ce,"src",Dt),rt(Ce,"alt",t(Z).title),Le=N(jt,1,"font-medium truncate",null,Le,te),J(Ta,t(Z).title),Me=N(Zt,1,"text-sm text-[var(--content-meta)] truncate",null,Me,ee),J(Sa,t(Z).artist)},[()=>({"bg-[var(--btn-plain-bg)]":q===t(y),"text-[var(--primary)]":q===t(y)}),()=>kt(t(Z).cover),()=>({"text-[var(--primary)]":q===t(y),"text-90":q!==t(y)}),()=>({"text-[var(--primary)]":q===t(y)})]),h("click",G,()=>wt(q)),h("keydown",G,K=>{(K.key==="Enter"||K.key===" ")&&(K.preventDefault(),wt(q))}),Y(bt,G)}),i(ct),i(m),Pt(bt=>J(L,bt),[()=>Za(Qa.playlist)]),h("click",o,ie),ri(3,m,()=>si,()=>({duration:300,axis:"y"})),Y(e,m)};z(Aa,e=>{t(b)&&e(Ca)})}i(ft),Xa(2),Pt((e,m,_,C,L,o,X,ct,bt,Z,q,G,St,gt)=>{Ft=N(ft,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,Ft,e),ce=N(R,1,"orb-player w-12 h-12 bg-[var(--primary)] rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95",null,ce,m),de=N(st,1,"mini-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-3 transition-all duration-500 ease-in-out",null,de,_),rt(Wt,"src",C),fe=N(Wt,1,"w-full h-full object-cover transition-transform duration-300",null,fe,L),J(aa,t($).title),J(ia,t($).artist),ge=N(Ct,1,"expanded-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out",null,ge,o),rt(he,"src",X),xe=N(he,1,"w-full h-full object-cover transition-transform duration-300",null,xe,ct),J(sa,t($).title),J(oa,t($).artist),J(la,`${bt??""} / ${Z??""}`),rt(ot,"aria-valuenow",t(E)>0?t(P)/t(E)*100:0),Se(da,`width: ${t(E)>0?t(P)/t(E)*100:0}%`),we=N(lt,1,"w-10 h-10 rounded-lg",null,we,q),lt.disabled=t(p).length<=1,pt.disabled=t(p).length<=1,ke=N(ut,1,"btn-regular w-12 h-12 rounded-full",null,ke,G),ut.disabled=t(u),mt.disabled=t(p).length<=1,Ee=N(Lt,1,"w-10 h-10 rounded-lg",null,Ee,St),rt(it,"aria-valuenow",t(T)*100),Se(Ea,`width: ${t(T)*100}%`),Ae=N(Tt,1,"btn-plain w-8 h-8 rounded-lg",null,Ae,gt)},[()=>({expanded:t(B),"hidden-mode":t(d)}),()=>({"opacity-0":!t(d),"scale-0":!t(d),"pointer-events-none":!t(d)}),()=>({"opacity-0":t(B)||t(d),"scale-95":t(B)||t(d),"pointer-events-none":t(B)||t(d)}),()=>kt(t($).cover),()=>({spinning:t(x)&&!t(u),"animate-pulse":t(u)}),()=>({"opacity-0":!t(B),"scale-95":!t(B),"pointer-events-none":!t(B)}),()=>kt(t($).cover),()=>({spinning:t(x)&&!t(u),"animate-pulse":t(u)}),()=>le(t(P)),()=>le(t(E)),()=>({"btn-regular":t(j),"btn-plain":!t(j)}),()=>({"opacity-50":t(u)}),()=>({"btn-regular":t(g)>0,"btn-plain":t(g)===0}),()=>({"text-[var(--primary)]":t(b)})]),h("click",R,_t),h("keydown",R,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),_t())}),h("click",At,Pe(_t)),h("click",qt,Pe(yt)),h("click",st,yt),h("keydown",st,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),yt())}),h("click",Bt,_t),h("click",Gt,yt),h("click",ot,Oe),h("keydown",ot,e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault(),t(Q).getBoundingClientRect();const _=.5*t(E);t(a)&&(O(a,t(a).currentTime=_),l(P,_))}}),h("click",lt,Ne),h("click",pt,qe),h("click",ut,We),h("click",mt,It),h("click",Lt,Ye),h("click",Mt,oe),h("click",it,He),h("keydown",it,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key==="Enter"&&oe())}),h("click",Tt,ie),Y(s,D)};z(Xe,s=>{s(Ge)})}Y(c,ue),Ha()}export{Ei as default};
