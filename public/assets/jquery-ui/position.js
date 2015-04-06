/*!
 * jQuery UI Position 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){return function(){function e(t,e,i){return[parseFloat(t[0])*(f.test(t[0])?e/100:1),parseFloat(t[1])*(f.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var s,o,r=Math.max,a=Math.abs,l=Math.round,u=/left|center|right/,h=/top|center|bottom/,c=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,f=/%$/,p=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==s)return s;var e,i,n=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=n.children()[0];return t("body").append(n),e=o.offsetWidth,n.css("overflow","scroll"),i=o.offsetWidth,e===i&&(i=n[0].clientWidth),n.remove(),s=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),n=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),s="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,o="scroll"===n||"auto"===n&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:s?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),n=t.isWindow(i[0]),s=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:n,isDocument:s,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:n||s?i.width():i.outerWidth(),height:n||s?i.height():i.outerHeight()}}},t.fn.position=function(s){if(!s||!s.of)return p.apply(this,arguments);s=t.extend({},s);var f,m,g,v,b,y,_=t(s.of),w=t.position.getWithinInfo(s.within),x=t.position.getScrollInfo(w),k=(s.collision||"flip").split(" "),C={};return y=n(_),_[0].preventDefault&&(s.at="left top"),m=y.width,g=y.height,v=y.offset,b=t.extend({},v),t.each(["my","at"],function(){var t,e,i=(s[this]||"").split(" ");1===i.length&&(i=u.test(i[0])?i.concat(["center"]):h.test(i[0])?["center"].concat(i):["center","center"]),i[0]=u.test(i[0])?i[0]:"center",i[1]=h.test(i[1])?i[1]:"center",t=c.exec(i[0]),e=c.exec(i[1]),C[this]=[t?t[0]:0,e?e[0]:0],s[this]=[d.exec(i[0])[0],d.exec(i[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===s.at[0]?b.left+=m:"center"===s.at[0]&&(b.left+=m/2),"bottom"===s.at[1]?b.top+=g:"center"===s.at[1]&&(b.top+=g/2),f=e(C.at,m,g),b.left+=f[0],b.top+=f[1],this.each(function(){var n,u,h=t(this),c=h.outerWidth(),d=h.outerHeight(),p=i(this,"marginLeft"),y=i(this,"marginTop"),D=c+p+i(this,"marginRight")+x.width,T=d+y+i(this,"marginBottom")+x.height,M=t.extend({},b),S=e(C.my,h.outerWidth(),h.outerHeight());"right"===s.my[0]?M.left-=c:"center"===s.my[0]&&(M.left-=c/2),"bottom"===s.my[1]?M.top-=d:"center"===s.my[1]&&(M.top-=d/2),M.left+=S[0],M.top+=S[1],o||(M.left=l(M.left),M.top=l(M.top)),n={marginLeft:p,marginTop:y},t.each(["left","top"],function(e,i){t.ui.position[k[e]]&&t.ui.position[k[e]][i](M,{targetWidth:m,targetHeight:g,elemWidth:c,elemHeight:d,collisionPosition:n,collisionWidth:D,collisionHeight:T,offset:[f[0]+S[0],f[1]+S[1]],my:s.my,at:s.at,within:w,elem:h})}),s.using&&(u=function(t){var e=v.left-M.left,i=e+m-c,n=v.top-M.top,o=n+g-d,l={target:{element:_,left:v.left,top:v.top,width:m,height:g},element:{element:h,left:M.left,top:M.top,width:c,height:d},horizontal:0>i?"left":e>0?"right":"center",vertical:0>o?"top":n>0?"bottom":"middle"};c>m&&a(e+i)<m&&(l.horizontal="center"),d>g&&a(n+o)<g&&(l.vertical="middle"),l.important=r(a(e),a(i))>r(a(n),a(o))?"horizontal":"vertical",s.using.call(this,t,l)}),h.offset(t.extend(M,{using:u}))})},t.ui.position={fit:{left:function(t,e){var i,n=e.within,s=n.isWindow?n.scrollLeft:n.offset.left,o=n.width,a=t.left-e.collisionPosition.marginLeft,l=s-a,u=a+e.collisionWidth-o-s;e.collisionWidth>o?l>0&&0>=u?(i=t.left+l+e.collisionWidth-o-s,t.left+=l-i):t.left=u>0&&0>=l?s:l>u?s+o-e.collisionWidth:s:l>0?t.left+=l:u>0?t.left-=u:t.left=r(t.left-a,t.left)},top:function(t,e){var i,n=e.within,s=n.isWindow?n.scrollTop:n.offset.top,o=e.within.height,a=t.top-e.collisionPosition.marginTop,l=s-a,u=a+e.collisionHeight-o-s;e.collisionHeight>o?l>0&&0>=u?(i=t.top+l+e.collisionHeight-o-s,t.top+=l-i):t.top=u>0&&0>=l?s:l>u?s+o-e.collisionHeight:s:l>0?t.top+=l:u>0?t.top-=u:t.top=r(t.top-a,t.top)}},flip:{left:function(t,e){var i,n,s=e.within,o=s.offset.left+s.scrollLeft,r=s.width,l=s.isWindow?s.scrollLeft:s.offset.left,u=t.left-e.collisionPosition.marginLeft,h=u-l,c=u+e.collisionWidth-r-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,f="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,p=-2*e.offset[0];0>h?(i=t.left+d+f+p+e.collisionWidth-r-o,(0>i||i<a(h))&&(t.left+=d+f+p)):c>0&&(n=t.left-e.collisionPosition.marginLeft+d+f+p-l,(n>0||a(n)<c)&&(t.left+=d+f+p))},top:function(t,e){var i,n,s=e.within,o=s.offset.top+s.scrollTop,r=s.height,l=s.isWindow?s.scrollTop:s.offset.top,u=t.top-e.collisionPosition.marginTop,h=u-l,c=u+e.collisionHeight-r-l,d="top"===e.my[1],f=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,p="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,m=-2*e.offset[1];0>h?(n=t.top+f+p+m+e.collisionHeight-r-o,t.top+f+p+m>h&&(0>n||n<a(h))&&(t.top+=f+p+m)):c>0&&(i=t.top-e.collisionPosition.marginTop+f+p+m-l,t.top+f+p+m>c&&(i>0||a(i)<c)&&(t.top+=f+p+m))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,n,s,r,a=document.getElementsByTagName("body")[0],l=document.createElement("div");e=document.createElement(a?"div":"body"),n={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},a&&t.extend(n,{position:"absolute",left:"-1000px",top:"-1000px"});for(r in n)e.style[r]=n[r];e.appendChild(l),i=a||document.documentElement,i.insertBefore(e,i.firstChild),l.style.cssText="position: absolute; left: 10.7432222px;",s=t(l).offset().left,o=s>10&&11>s,e.innerHTML="",i.removeChild(e)}()}(),t.ui.position});