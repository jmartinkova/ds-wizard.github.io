!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t){window.onload=function(){let e=!1;const t=document.getElementById("submenu"),n=document.getElementById("submenu-cover"),o=document.querySelectorAll("[data-submenu]"),a=document.querySelectorAll("[data-menu]"),d=function(){a.forEach((function(e){delete e.dataset.highlighted}))},c=function(a){e=!1,t.dataset.visible="1",n.dataset.visible="1",delete n.dataset.fading,o.forEach((function(e){delete e.dataset.visible}));document.querySelector(`[data-submenu=${a}]`).dataset.visible="1",d();document.querySelector(`[data-menu=${a}]`).dataset.highlighted="1"},i=function(){e=!0,setTimeout((function(){e&&(delete t.dataset.visible,n.dataset.fading="1",d(),setTimeout((function(){e&&(delete n.dataset.fading,delete n.dataset.visible)}),400))}),100)};a.forEach((function(e){e.addEventListener("mouseover",(function(){c(e.dataset.menu)})),e.addEventListener("mouseout",i)})),t.addEventListener("mouseover",(function(){e=!1})),t.addEventListener("mouseout",i);const l=document.getElementById("mobile-menu-open"),u=document.getElementById("mobile-menu-close"),r=document.getElementById("mobile-menu"),s=document.querySelectorAll("[data-submenu-mobile]"),m=document.querySelectorAll("[data-menu-mobile]"),f=function(){s.forEach((function(e){delete e.dataset.visible}))};l.addEventListener("click",(function(){r.dataset.visible="1"})),u.addEventListener("click",(function(){delete r.dataset.visible,f()})),m.forEach((function(e){e.addEventListener("click",(function(){f();document.querySelector(`[data-submenu-mobile=${e.dataset.menuMobile}]`).dataset.visible="1"}))})),document.querySelectorAll("[data-block]").forEach((function(e){const t=e.querySelector("[data-block-nav-left]"),n=e.querySelector("[data-block-nav-right]"),o=e.querySelectorAll("[data-block-page]"),a=o.length;let d=0;const c=e=>{o.forEach(e=>{e.dataset.hidden="1"}),delete o[e].dataset.hidden};var i,l;c((i=0,l=a-1,Math.floor(Math.random()*(l-i+1)+i))),t.addEventListener("click",(function(){d=(d-1+a)%a,c(d)})),n.addEventListener("click",(function(){d=(d+1)%a,c(d)}))}));const b=document.getElementById("watch-video"),v=document.getElementById("video-close"),y=document.getElementById("video"),p=document.getElementById("video-content");function g(){function e(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],e("js",new Date),e("config","UA-120469224-1")}b&&y&&v&&p&&(b.onclick=function(e){e.preventDefault(),y.dataset.open="1";p.innerHTML='<iframe allowfullscreen="true" src="https://www.youtube.com/embed/gcSPG_dyVUQ?ecver=1&amp;autoplay=1&amp;cc_load_policy=1&amp;iv_load_policy=3&amp;rel=0&amp;showinfo=0&amp;autohide=1&amp;color=white" allowtransparency="true" frameborder="0">'},v.onclick=function(e){e.preventDefault(),delete y.dataset.open,p.innerHTML=""});const E=document.getElementById("cookie-banner"),h=document.getElementById("cookie-accept");localStorage.cookieConsent?g():(E.dataset.visible="1",h.addEventListener("click",(function(){delete E.dataset.visible,localStorage.cookieConsent=1,g()})))}}]);