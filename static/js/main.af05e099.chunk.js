(this.webpackJsonpcrispsound=this.webpackJsonpcrispsound||[]).push([[0],{17:function(e,n,t){e.exports=t(30)},22:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t.n(r),i=t(6),a=t.n(i),o=(t(22),t(1)),u=t(2);function l(){var e=Object(o.a)(["\n    @media (max-width: ","em) {\n      ",";\n    }\n  "]);return l=function(){return e},e}var f={desktop:1024,tablet:768,mobile:480},s=Object.keys(f).reduce((function(e,n){return e[n]=function(){return Object(u.a)(l(),f[n]/16,u.a.apply(void 0,arguments))},e}),{});function d(){var e=Object(o.a)(["align-items: flex-start"]);return d=function(){return e},e}function m(){var e=Object(o.a)(["\n  background: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n\n  ","\n"]);return m=function(){return e},e}var v=u.b.div(m(),s.mobile(d()));var b=function(e){var n=e.children;return c.a.createElement(v,null,n)};function h(){var e=Object(o.a)(["font-size: 0.7rem;"]);return h=function(){return e},e}function p(){var e=Object(o.a)(["\n  margin-left: 5px;\n\n  ","\n"]);return p=function(){return e},e}function j(){var e=Object(o.a)(["font-size: 1rem;"]);return j=function(){return e},e}function w(){var e=Object(o.a)(["\n  color: #22b8cf;\n\n  ","\n"]);return w=function(){return e},e}function E(){var e=Object(o.a)(["margin-left: 10px;"]);return E=function(){return e},e}function O(){var e=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  margin-left: 15px;\n  cursor: pointer;\n\n  ","\n"]);return O=function(){return e},e}var y=u.b.div(O(),s.mobile(E())),g=u.b.i(w(),s.mobile(j())),x=u.b.div(p(),s.mobile(h())),k=function(e){var n=e.children,t=e.check,r=e.onClick;return c.a.createElement(y,{onClick:function(e){return r&&r(e)}},c.a.createElement(g,{className:"material-icons"},t?"check_box":"check_box_outline_blank"),c.a.createElement(x,null,n))},S=t(3),T=t(5),B=t(4),C=["hHW1oY26kxQ","d9KosXZf7ug","8IXDbVK138w","1xCfNv6mgWQ"],F=Object(r.createContext)(),V=function(e,n){switch(n.type){case"TOGGLE":return Object(B.a)({},e,Object(T.a)({},n.name,!e[n.name]));default:return e}},z=function(e,n){switch(n.type){case"SETPLAYER":return Object(B.a)({},e,{player:n.player});case"NEXT":return console.log("next"),console.log((e.currentVideo+1+C.length)%C.length),Object(B.a)({},e,{currentVideo:(e.currentVideo+1+C.length)%C.length});case"PREV":return Object(B.a)({},e,{currentVideo:(e.currentVideo-1+C.length)%C.length});default:return e}},N=function(e){var n=e.children,t=Object(r.useReducer)(V,{}),i=Object(S.a)(t,2),a=i[0],o=i[1],u=Object(r.useReducer)(z,{currentVideo:0}),l=Object(S.a)(u,2),f={widget:a,video:l[0],dispatch:{widget:o,video:l[1]}};return c.a.createElement(F.Provider,{value:f},n)},R=(F.Consumer,F),X=function(e){var n=e.children,t=Object(r.useContext)(R),i=t.widget,a=t.dispatch,o=i[n];return c.a.createElement(k,{check:o,onClick:function(e){a.widget({type:"TOGGLE",name:n})}},n)},Y=t(13),W=t.n(Y);function _(){var e=Object(o.a)(["\n  display: flex;\n"]);return _=function(){return e},e}function I(){var e=Object(o.a)(["font-size: 1rem;"]);return I=function(){return e},e}function q(){var e=Object(o.a)(["\n  font-weight: 800;\n  font-size: 2rem;\n\n  ","\n"]);return q=function(){return e},e}function M(){var e=Object(o.a)(['\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-family: "Baloo Bhai", cursive;\n  padding: 5px 5px;\n']);return M=function(){return e},e}var P=u.b.div(M()),D=u.b.div(q(),s.mobile(I())),L=u.b.div(_()),A=["colck","studyTime"];var G=function(){return c.a.createElement(W.a,null,c.a.createElement(P,null,c.a.createElement(D,{className:"handle"},"STUDY SOUND"),c.a.createElement(L,null,A.map((function(e,n){return c.a.createElement(X,{key:n},e)})))))};function U(){var e=Object(o.a)(["\n    background: #fff;\n    width: 100%;\n    height: 100px;\n"]);return U=function(){return e},e}u.b.div(U());function H(){var e=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n"]);return H=function(){return e},e}function J(){var e=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n"]);return J=function(){return e},e}var K=u.b.div(J()),Q=u.b.div(H()),Z=function(e){var n=e.children,t=Object(r.useContext)(R),i=t.video,a=t.dispatch,o=function(e){e.target.playVideo(),a.video({type:"SETPLAYER",player:e.target})};function u(e){a.video({type:"NEXT"})}return Object(r.useEffect)((function(){new Promise((function(e){var n=document.createElement("script");n.src="https://www.youtube.com/iframe_api";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(n,t),window.onYouTubeIframeAPIReady=function(){return e(window.YT)}})).then((function(e){new e.Player("player",{videoId:C[i.currentVideo],playerVars:{fs:0,loop:1},events:{onReady:o,onError:u}})}))}),[]),Object(r.useEffect)((function(){i.player&&i.player.loadVideoById(C[i.currentVideo])}),[i.currentVideo]),c.a.createElement(K,{id:"player_wrap"},n,c.a.createElement(Q,{id:"player"}))};function $(){var e=Object(o.a)(["\n  color: white;\n  font-size: 3vw;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 0.7;\n    transition: all 0.2s linear;\n  }\n\n  @media (min-width: 1300px) {\n    font-size: 40px;\n  }\n"]);return $=function(){return e},e}function ee(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  background-color: black;\n  padding: 20px 5px;\n"]);return ee=function(){return e},e}var ne=u.b.div(ee()),te=u.b.i($()),re=function(){var e=Object(r.useContext)(R).dispatch;return c.a.createElement(ne,null,c.a.createElement(te,{className:"material-icons"},"playlist_play"),c.a.createElement(te,{className:"material-icons",style:{color:"#ff5722"}},"favorite"),c.a.createElement(te,{className:"material-icons",onClick:function(){if(document.fullscreen)document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen();else{var e=document.getElementById("display");e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}}},"fullscreen"),c.a.createElement(te,{className:"material-icons",onClick:function(){e.video({type:"NEXT"})}},"skip_next"),c.a.createElement(te,{className:"material-icons",onClick:function(){e.video({type:"PREV"})}},"skip_previous"))};var ce=function(){var e="object"===typeof window;function n(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}}var t=Object(r.useState)(n),c=Object(S.a)(t,2),i=c[0],a=c[1];return Object(r.useEffect)((function(){if(!e)return!1;function t(){a(n())}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),i};function ie(){var e=Object(o.a)(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0.8;\n  cursor: pointer;\n  transform: ",";\n\n  &:hover {\n    opacity: 0.9;\n  }\n"]);return ie=function(){return e},e}var ae=u.b.div(ie(),(function(e){return"translate(".concat(e.xp,"px, ").concat(e.yp,"px)")})),oe=function(e){var n=e.children,t=Object(r.useState)(0),i=Object(S.a)(t,2),a=i[0],o=i[1],u=Object(r.useState)(0),l=Object(S.a)(u,2),f=l[0],s=l[1],d=Object(r.useState)(0),m=Object(S.a)(d,2),v=m[0],b=m[1],h=Object(r.useState)(0),p=Object(S.a)(h,2),j=p[0],w=p[1],E=Object(r.useState)(!1),O=Object(S.a)(E,2),y=O[0],g=O[1],x=Object(r.useState)({clientX:0,xratio:0}),k=Object(S.a)(x,2),T=k[0],B=k[1],C=ce(),F=function(e){console.log(e),g(!0),B({clientX:e.clientX||e.touches[0].clientX,xratio:v,clientY:e.clientY||e.touches[0].clientY,yratio:j})},V=function(e){if(y){var n=document.getElementById("player_wrap"),t=((e.clientX||e.touches[0].clientX)-T.clientX)/n.clientWidth;b(T.xratio+t),o(n.clientWidth*(T.xratio+t));var r=((e.clientY||e.touches[0].clientY)-T.clientY)/n.clientWidth;w(T.yratio+r),s(n.clientWidth*(T.yratio+r))}},z=function(e){g(!1)};return Object(r.useEffect)((function(){var e=document.getElementById("player_wrap");o(e.clientWidth*v),s(e.clientWidth*j)}),[C]),c.a.createElement(ae,{onMouseDown:F,onTouchStart:F,onMouseMove:V,onTouchMove:V,onMouseUp:z,onTouchEnd:z,xp:a,yp:f},n)},ue=t(14),le=t.n(ue);function fe(){var e=Object(o.a)(['\n  color: white;\n  font-family: "Baloo Bhai", cursive;\n  font-size: 4vw;\n']);return fe=function(){return e},e}var se=u.b.div(fe()),de=function(){var e=Object(r.useContext)(R).widget;return c.a.createElement(oe,null,e.colck?c.a.createElement(se,null,c.a.createElement(le.a,{interval:6e4,format:"A hh:mm"})):null)};function me(){var e=Object(o.a)(['\n  color: white;\n  font-family: "Baloo Bhai", cursive;\n  font-size: 4vw;\n']);return me=function(){return e},e}var ve=u.b.div(me()),be=function(){var e=Object(r.useContext)(R).widget,n=Object(r.useState)(new Date),t=Object(S.a)(n,1)[0],i=Object(r.useState)(0),a=Object(S.a)(i,2),o=a[0],u=a[1];return Object(r.useEffect)((function(){setInterval((function(){u((new Date).getTime()-t.getTime())}),1e3)}),[]),c.a.createElement(oe,null,e.studyTime?c.a.createElement(ve,null,function(e){var n=Math.floor(e/1e3),t=Math.floor(n/3600);n-=60*t*60;var r=Math.floor(n/60),c=n-=60*r;return"".concat(t.toString().padStart(2,"0"),":").concat(r.toString().padStart(2,"0"),":").concat(c.toString().padStart(2,"0"))}(o)):null)};function he(){var e=Object(o.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n"]);return he=function(){return e},e}function pe(){var e=Object(o.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]);return pe=function(){return e},e}function je(){var e=Object(o.a)(['\n  position: relative;\n  width: 100%;\n  padding-top: 56%;\n  border-radius: 0.5rem;\n  overflow: hidden;\n  display: flex;\n  background-color: black;\n  font-family: "Baloo Bhai", cursive;\n']);return je=function(){return e},e}var we=u.b.div(je()),Ee=u.b.div(pe()),Oe=u.b.div(he());var ye=function(){return c.a.createElement(we,null,c.a.createElement(Ee,{id:"display"},c.a.createElement(Oe,null,c.a.createElement(Z,null,c.a.createElement(de,null),c.a.createElement(be,null)),c.a.createElement(re,null))))};function ge(){var e=Object(o.a)(["\n  float: left;\n  background: #fff;\n  width: 100%;\n  height: 100px;\n"]);return ge=function(){return e},e}u.b.div(ge());function xe(){var e=Object(o.a)(["\n  float: left;\n  background: #fff;\n  width: 100%;\n  height: 100%;\n"]);return xe=function(){return e},e}var ke=u.b.div(xe());var Se=function(){return c.a.createElement(ke,null,c.a.createElement(ye,null))};function Te(){var e=Object(o.a)(["width: 100%;"]);return Te=function(){return e},e}function Be(){var e=Object(o.a)(["\n  width: 80%;\n  height: 60%;\n  max-width: 1000px;\n  max-height: 600px;\n\n  ","\n"]);return Be=function(){return e},e}var Ce=u.b.div(Be(),s.mobile(Te()));var Fe=function(){return c.a.createElement(Ce,null,c.a.createElement(G,null),c.a.createElement(Se,null))};var Ve=function(){return c.a.createElement(N,null,c.a.createElement(b,null,c.a.createElement(Fe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(c.a.createElement(Ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.af05e099.chunk.js.map