const t={body:document.querySelector("body"),btnStart:document.querySelector(".start"),btnStop:document.querySelector(".stop")};let e=null;t.btnStart.addEventListener("click",(function(){e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.btnStart.setAttribute("disabled","disabled"),t.btnStop.removeAttribute("disabled")})),t.btnStop.addEventListener("click",(function(){clearInterval(e),t.btnStart.removeAttribute("disabled"),t.btnStop.setAttribute("disabled","disabled")}));
//# sourceMappingURL=01-color-switcher.bc53660a.js.map