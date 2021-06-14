!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}({8:function(e,t){var n,i,a=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(a,o){function r(e){try{l(i.next(e))}catch(e){o(e)}}function c(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,c)}l((i=i.apply(e,t||[])).next())}))};figma.showUI(__html__),figma.ui.resize(400,400),"run"==figma.root.getPluginData("status")&&(figma.ui.resize(400,136),figma.ui.postMessage("about")),figma.ui.onmessage=e=>a(this,void 0,void 0,(function*(){switch(e.type){case"create-projct":yield function(e,t,f){return a(this,void 0,void 0,(function*(){switch(figma.currentPage.name="📖 About",t){case"Exploration":c("🤔 Problem definition"),c("🔬 Research"),c("🏝 Explorations"),c("         ↪ Solution A"),c("         ↪ Solution B");break;case"Product":c("................................................................................................"),c("📐 Design Specs"),c("         ↪ Ready for dev"),c("         ↪ Shipped"),c("................................................................................................"),c("🕹 Prototypes"),c("         ↪ Prototype A"),c("................................................................................................"),c("🏝 Explorations"),c("         ↪ Exploration A"),c("................................................................................................"),c("📦 Archives"),c("         ↪ Archive A");break;case"Library":c("❓ How to..."),c("         ↪ Use this library"),c("         ↪ Contribute"),c("................................................................................................"),c("Component A"),c("Component B"),c("Component C"),c("................................................................................................"),c("🚧 Component template")}yield figma.loadFontAsync(o),yield figma.loadFontAsync(r),yield function(e,t){return a(this,void 0,void 0,(function*(){yield figma.importComponentByKeyAsync("ac0b158c37de3fa8ba94d2b3801913aea262ffcb").catch(e=>{figma.notify("Annotation Kit library is required for thumbnails."),figma.closePlugin()}).then(n=>a(this,void 0,void 0,(function*(){let i=figma.createFrame();if(i.name='Thumbnail - Right click to "Set as thumbnail"',i.resizeWithoutConstraints(640,320),n){let a=n.createInstance();i.appendChild(a),figma.currentPage.appendChild(i);let o=a.findOne(e=>"File Name"==e.name);yield figma.loadFontAsync(o.fontName).then(()=>{o.characters=""!==e?e:"Enter title here"});let r=a.findOne(e=>"Badge"==e.name&&"INSTANCE"==e.type),c=r.findOne(e=>"Badge"==e.name&&"TEXT"==e.type);yield figma.loadFontAsync(c.fontName).then(()=>{c.characters=t}),"Exploration"==t?r.fillStyleId=(yield figma.importStyleByKeyAsync("0ee1c479d3f21d475227a4520cb481bd98af5af5")).id:"Library"==t&&(r.fillStyleId=(yield figma.importStyleByKeyAsync("a3aa8c64d10a0b1ee92b3dc6e5f278ac978c56cf")).id,c.fillStyleId=(yield figma.importStyleByKeyAsync("492c9645d67f026dd37c301c61577504bd7d8ad7")).id)}})))}))}(e,t).then(()=>{(i=figma.createFrame()).name="Project details",i.y=340,i.resizeWithoutConstraints(640,1),i.layoutMode="VERTICAL",i.counterAxisSizingMode="FIXED",i.verticalPadding=40,i.horizontalPadding=40,i.itemSpacing=24,figma.currentPage.appendChild(i),l("Description",""!==f?f:"<Enter a description here>"),l("External Links","<Add links here> →\n<E.g. Confluence> →\n<E.g. Google Doc> →"),l("Slack Channels","#<channel name here>\n#<channel name here>"),l("Points of Contact","Design - <link Slack profile here>\nProduct - <link Slack profile here>\nEngineering - <link Slack profile here>"),(n=figma.createFrame()).name="Add other pages, as needed...",n.y=i.y+i.height+24,n.resizeWithoutConstraints(640,1),n.layoutMode="VERTICAL",n.counterAxisSizingMode="FIXED",n.verticalPadding=40,n.horizontalPadding=40,n.itemSpacing=8,figma.currentPage.appendChild(n),d("💅🏽 Styles"),d("⚙️ Components"),d("👀 Ready for Review"),figma.closePlugin()})}))}(e.projectTitle,e.projectType,e.projectDescription),figma.root.setRelaunchData({about:"This document was formated with Ztart"}),figma.root.setPluginData("status","run")}}));const o={family:"Menlo",style:"Regular"},r={family:"SF Pro Text",style:"Regular"};function c(e){figma.createPage().name=e}function l(e,t){let n=figma.createFrame();n.name=e,n.layoutMode="VERTICAL",n.counterAxisSizingMode="AUTO",n.layoutAlign="STRETCH",n.itemSpacing=8;let a=figma.createText();a.fontName=o,a.fontSize=17,a.characters=e,a.layoutAlign="STRETCH",n.appendChild(a);let c=figma.createText();c.fontName=r,c.fontSize=14,c.characters=t,c.layoutAlign="STRETCH",n.appendChild(c),i.appendChild(n)}function d(e){let t=figma.createText();t.fontName=r,t.fontSize=14,t.characters=e,n.appendChild(t)}}});