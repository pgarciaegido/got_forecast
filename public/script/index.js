var gotForecast=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){const r=n(1),o=n(2);e.exports={pictureHandler:r,formHandler:o}},function(e,t){e.exports={openPicture:e=>{console.log(e),document.getElementById("dialog").classList.add("opened"),document.getElementById("dialog-content-image-img").src=`/images/${e}.jpg`},closePicture:()=>{document.getElementById("dialog").classList.remove("opened"),document.getElementById("dialog-content-image-img").src=""}}},function(e,t,n){const r=n(3);e.exports={storeAnswers:e=>{var t=r(e,{hash:!0});console.log(t)}}},function(e,t){var n=/^(?:submit|button|image|reset|file)$/i,r=/^(?:input|select|textarea|keygen)/i,o=/(\[[^\[\]]*\])/g;function a(e,t,n){if(t.match(o)){!function e(t,n,r){if(0===n.length)return t=r;var o=n.shift(),a=o.match(/^\[(.+?)\]$/);if("[]"===o)return t=t||[],Array.isArray(t)?t.push(e(null,n,r)):(t._values=t._values||[],t._values.push(e(null,n,r))),t;if(a){var i=a[1],u=+i;isNaN(u)?(t=t||{})[i]=e(t[i],n,r):(t=t||[])[u]=e(t[u],n,r)}else t[o]=e(t[o],n,r);return t}(e,function(e){var t=[],n=new RegExp(o),r=/^([^\[\]]*)/.exec(e);for(r[1]&&t.push(r[1]);null!==(r=n.exec(e));)t.push(r[1]);return t}(t),n)}else{var r=e[t];r?(Array.isArray(r)||(e[t]=[r]),e[t].push(n)):e[t]=n}return e}function i(e,t,n){return n=n.replace(/(\r)?\n/g,"\r\n"),n=(n=encodeURIComponent(n)).replace(/%20/g,"+"),e+(e?"&":"")+encodeURIComponent(t)+"="+n}e.exports=function(e,t){"object"!=typeof t?t={hash:!!t}:void 0===t.hash&&(t.hash=!0);for(var o=t.hash?{}:"",u=t.serializer||(t.hash?a:i),l=e&&e.elements?e.elements:[],c=Object.create(null),s=0;s<l.length;++s){var f=l[s];if((t.disabled||!f.disabled)&&f.name&&r.test(f.nodeName)&&!n.test(f.type)){var d=f.name,p=f.value;if("checkbox"!==f.type&&"radio"!==f.type||f.checked||(p=void 0),t.empty){if("checkbox"!==f.type||f.checked||(p=""),"radio"===f.type&&(c[f.name]||f.checked?f.checked&&(c[f.name]=!0):c[f.name]=!1),null==p&&"radio"==f.type)continue}else if(!p)continue;if("select-multiple"!==f.type)o=u(o,d,p);else{p=[];for(var m=f.options,g=!1,h=0;h<m.length;++h){var y=m[h],v=t.empty&&!y.value,b=y.value||v;y.selected&&b&&(g=!0,o=t.hash&&"[]"!==d.slice(d.length-2)?u(o,d+"[]",y.value):u(o,d,y.value))}!g&&t.empty&&(o=u(o,d,""))}}}if(t.empty)for(var d in c)c[d]||(o=u(o,d,""));return o}}]);