(this["webpackJsonpreal-estate"]=this["webpackJsonpreal-estate"]||[]).push([[0],[,,,,,,,,,function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},,function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){"use strict";i.r(e);var l=i(1),n=i.n(l),a=i(4),s=i.n(a),r=(i(9),i(2)),c=(i(10),i(11),n.a.createContext()),o=i.p+"static/media/ru.198cc64a.webp",u=i.p+"static/media/en.3f6c5dea.webp",k=i.p+"static/media/he.08a46971.webp",d=(i(12),i(0)),h={ru:o,he:k,en:u};function b(t){var e,i=t.changeLang,n=void 0===i?function(){}:i,a=Object(l.useContext)(c),s=a.lang,r=a.langs,o=Object.keys(r).map((function(t,i){var l="LanguageDropDown__item";return t===s&&(l+=" LanguageDropDown__item_active",e=Object(d.jsxs)("div",{className:"LanguageDropDown__current",children:[Object(d.jsx)("img",{className:"LanguageDropDown__flag",src:h[t],alt:t}),Object(d.jsx)("span",{className:"LanguageDropDown__lang",children:r[t]})]})),Object(d.jsxs)("li",{className:l,onClick:function(){return n(t)},children:[Object(d.jsx)("img",{className:"LanguageDropDown__flag",src:h[t],alt:t}),Object(d.jsx)("span",{className:"LanguageDropDown__lang",children:r[t]})]},i)})),u="LanguageDropDown";return"he"===s&&(u+=" LanguageDropDown_he"),Object(d.jsxs)("div",{className:u,children:[e,Object(d.jsx)("div",{className:"LanguageDropDown__mark"}),Object(d.jsx)("ul",{className:"LanguageDropDown__list",children:o})]})}i(14);var m=i.p+"static/media/logo.6ce24c58.svg";function j(t){var e=t.changeLang,i=Object(l.useContext)(c),n=i.page,a=i.lang;n=n.Header;var s="Header"+("he"===a?" Header_he":"");return Object(d.jsx)("header",{className:s,children:Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("nav",{className:"Header__nav",children:Object(d.jsx)("ul",{className:"Header__list",children:n.leftMenu.map((function(t,e){return Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:t.link,children:t.title})},e)}))})}),Object(d.jsx)("img",{className:"Header__logo",src:m,alt:"logo"}),Object(d.jsxs)("div",{className:"Header__right-menu",children:[Object(d.jsx)("ul",{className:"Header__list",children:n.rightMenu.map((function(t,e){return Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:t.link,children:t.title})},e)}))}),Object(d.jsx)(b,{changeLang:e})]})]})})}i(15);var p=i.p+"static/media/facebook.4e08e1e7.svg",y=i.p+"static/media/apple.3a1ab172.svg",v=i.p+"static/media/google-play.ad05c889.svg";function g(t){t.changeLang;var e=Object(l.useContext)(c).page;e=e.Footer;var i=[{link:"https://google.com",icon:p},{link:"https://google.com",icon:p},{link:"https://google.com",icon:p},{link:"https://google.com",icon:p}],n=[{link:"https://google.com",icon:y,title:"app store"},{link:"https://google.com",icon:v,title:"google play"}];return Object(d.jsx)("footer",{className:"Footer",children:Object(d.jsxs)("div",{className:"content",children:[Object(d.jsxs)("div",{className:"Footer__row",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{className:"Footer__logo",src:m,alt:"logo"}),Object(d.jsx)("a",{className:"Footer__mail",href:"mailto:bibione.it.il@gmail.com",children:"bibione.it.il@gmail.com"})]}),Object(d.jsxs)("div",{className:"Footer__social",children:[Object(d.jsx)("h4",{children:e.follow}),Object(d.jsx)("ul",{children:i.map((function(t,e){return Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:t.link,target:"_blank",children:Object(d.jsx)("img",{src:t.icon,alt:"social icon"})})},e)}))})]})]}),Object(d.jsxs)("div",{className:"Footer__center",children:[Object(d.jsxs)("div",{className:"Footer__apps",children:[Object(d.jsx)("h4",{children:e.apps.title}),Object(d.jsx)("ul",{children:n.map((function(t,i){return Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:t.link,target:"_blank",children:Object(d.jsxs)("div",{className:"Footer__icon",children:[Object(d.jsx)("img",{src:t.icon,alt:"app icon"}),Object(d.jsxs)("p",{children:[e.apps.text,Object(d.jsx)("br",{}),Object(d.jsx)("span",{className:"Footer__icon__title",children:t.title})]})]})})},i)}))})]}),Object(d.jsx)("a",{className:"Footer__policy",href:"/privacy-policy",children:e.policy})]})]})})}i(16),i.p,i.p;i(17),i.p,i.p,i.p;i(18);i(19);function f(t){var e=t.type,i=void 0===e?"checkbox":e,n=t.name,a=void 0===n?"default":n,s=t.values,r=void 0===s?[]:s,o=t.update,u=Object(l.useContext)(c),k=u.page,h=u.lang;k=k.Fieldset[a],"radio"!==i&&(i="checkbox");var b="Fieldset";return"he"===h&&(b+=" Fieldset_he"),Object(d.jsxs)("fieldset",{className:b,children:[Object(d.jsx)("legend",{className:"Fieldset__title",children:k.title}),Object(d.jsx)("ul",{className:"Fieldset__list",children:k.list.map((function(t,e){return Object(d.jsx)("li",{children:Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{className:"Fieldset__input",type:i,name:a,checked:(l=t.value,r.includes(l)),onChange:function(e){return function(t,e){"radio"===i?r=[t]:e?r.push(t):r=r.filter((function(e){return e!==t})),o(a,r)}(t.value,e.target.checked)}}),Object(d.jsx)("span",{className:"Fieldset__span",children:t.title})]})},e);var l}))})]})}function x(){var t=Object(l.useState)({rooms:["1","3"],type:["rent"]}),e=Object(r.a)(t,2),i=e[0],n=e[1],a=function(t,e){var l=Object.assign({},i);l[t]=e,n(l)};return Object(l.useEffect)((function(){console.log(i.rooms,i.type)}),[i]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f,{name:"rooms",values:i.rooms,update:a}),Object(d.jsx)(f,{type:"radio",name:"type",values:i.type,update:a})]})}var O={en:"english",ru:"\u0440\u0443\u0441\u0441\u043a\u0438\u0439",he:"\u05e2\u05d1\u05e8\u05d9\u05ea"},_={en:{Header:{leftMenu:[{link:"/buy",title:"Buy"},{link:"/rent",title:"Rent"},{link:"/sell",title:"Sell"}],rightMenu:[{link:"/buy-ads",title:"Buy Ads"},{link:"/sign-up",title:"Sign up"},{link:"/sign-in",title:"Sign in"}]},Search:{placeholder:"Type here"},MainCategories:{title:"Most relevant deals",cards:[{link:"/buy",img:"buy",title:"Buy",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere risus libero, tempor porttitor leo dignissim sit amet.",button:"123"},{link:"/rent",img:"rent",title:"Rent",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere risus libero, tempor porttitor leo dignissim sit amet.",button:"123"},{link:"/sell",img:"sell",title:"Sell",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere risus libero, tempor porttitor leo dignissim sit amet.",button:"123"}]},MainFilters:{title:"Recommendations ",categories:["Buy","Rent","Sell"],links:[[{link:"/buy/northern-district",title:"Northern District"},{link:"/buy/haifa-district",title:"Haifa District"},{link:"/buy/tel-aviv-district",title:"Tel Aviv District"},{link:"/buy/central-district",title:"Central District"},{link:"/buy/jerusalem-district",title:"Jerusalem District"},{link:"/buy/southern-district",title:"Southern District"},{link:"/buy/judea-and-samaria-district",title:"Judea and Samaria District"},{link:"/buy/jerusalem",title:"Jerusalem"},{link:"/buy/tel-aviv",title:"Tel Aviv"},{link:"/buy/herzliya",title:"Herzliya"},{link:"/buy/haifa",title:"Haifa"},{link:"/buy/rishon-lezion",title:"Rishon Lezion"},{link:"/buy/netanya",title:"Netanya"},{link:"/buy/bat-yam",title:"Bat Yam"},{link:"/buy/holon",title:"Holon"},{link:"/buy/petah-tikva",title:"Petah Tikva"},{link:"/buy/kfar-saba",title:"Kfar Saba"},{link:"/buy/ashdod",title:"Ashdod"},{link:"/buy/ashkelon",title:"Ashkelon"},{link:"/buy/eilat",title:"Eilat"}],[{link:"/rent/northern-district",title:"Northern District"},{link:"/rent/haifa-district",title:"Haifa District"},{link:"/rent/tel-aviv-district",title:"Tel Aviv District"},{link:"/rent/central-district",title:"Central District"},{link:"/rent/jerusalem-district",title:"Jerusalem District"},{link:"/rent/southern-district",title:"Southern District"},{link:"/rent/judea-and-samaria-district",title:"Judea and Samaria District"},{link:"/rent/jerusalem",title:"Jerusalem"},{link:"/rent/tel-aviv",title:"Tel Aviv"},{link:"/rent/herzliya",title:"Herzliya"},{link:"/rent/haifa",title:"Haifa"},{link:"/rent/rishon-lezion",title:"Rishon Lezion"},{link:"/rent/netanya",title:"Netanya"},{link:"/rent/bat-yam",title:"Bat Yam"},{link:"/rent/holon",title:"Holon"},{link:"/rent/petah-tikva",title:"Petah Tikva"},{link:"/rent/kfar-saba",title:"Kfar Saba"},{link:"/rent/ashdod",title:"Ashdod"},{link:"/rent/ashkelon",title:"Ashkelon"},{link:"/rent/eilat",title:"Eilat"}],[{link:"/sell/northern-district",title:"Northern District"},{link:"/sell/haifa-district",title:"Haifa District"},{link:"/sell/tel-aviv-district",title:"Tel Aviv District"},{link:"/sell/central-district",title:"Central District"},{link:"/sell/jerusalem-district",title:"Jerusalem District"},{link:"/sell/southern-district",title:"Southern District"},{link:"/sell/judea-and-samaria-district",title:"Judea and Samaria District"},{link:"/sell/jerusalem",title:"Jerusalem"},{link:"/sell/tel-aviv",title:"Tel Aviv"},{link:"/sell/herzliya",title:"Herzliya"},{link:"/sell/haifa",title:"Haifa"},{link:"/sell/rishon-lezion",title:"Rishon Lezion"},{link:"/sell/netanya",title:"Netanya"},{link:"/sell/bat-yam",title:"Bat Yam"},{link:"/sell/holon",title:"Holon"},{link:"/sell/petah-tikva",title:"Petah Tikva"},{link:"/sell/kfar-saba",title:"Kfar Saba"},{link:"/sell/ashdod",title:"Ashdod"},{link:"/sell/ashkelon",title:"Ashkelon"},{link:"/sell/eilat",title:"Eilat"}]]},Footer:{follow:"follow",apps:{title:"install our app",text:"Download on the"},policy:"privacy policy"},Fieldset:{default:{title:"default text",list:[{title:"any",value:"0"}]},rooms:{title:"Rooms",list:[{title:"Any",value:"0"},{title:"1+",value:"1"},{title:"2+",value:"2"},{title:"3+",value:"3"},{title:"4+",value:"4"}]},type:{title:"Type of deal",list:[{title:"Rent",value:"rent"},{title:"Buy",value:"buy"}]}}},ru:{Header:{leftMenu:[{link:"/buy",title:"\u041f\u043e\u043a\u0443\u043f\u043a\u0430"},{link:"/rent",title:"\u0410\u0440\u0435\u043d\u0434\u0430"},{link:"/sell",title:"\u041f\u0440\u043e\u0434\u0430\u0436\u0430"}],rightMenu:[{link:"/buy-ads",title:"\u0420\u0430\u0437\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435"},{link:"/sign-up",title:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"},{link:"/sign-in",title:"\u0412\u043e\u0439\u0442\u0438"}]},Search:{placeholder:"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u0430\u0434\u0440\u0435\u0441"},MainCategories:{title:"C\u0430\u043c\u044b\u0435 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0434\u0435\u043b\u043a\u0438",cards:[{link:"/buy",img:"buy",title:"Buy",text:"\u0421 \u043d\u0430\u043c\u0438 \u0412\u044b \u043b\u0435\u0433\u043a\u043e \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0439\u0442\u0438 \u0441\u0430\u043c\u044b\u0435 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043f\u043e \u043f\u043e\u043a\u0443\u043f\u043a\u0435 \u043d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u0438.",button:"123"},{link:"/rent",img:"rent",title:"Rent",text:"\u0412 \u043d\u0430\u0448\u0435\u043c \u0441\u0435\u0440\u0432\u0438\u0441\u0435 \u0412\u044b \u0432 \u043a\u0440\u0430\u0442\u0447\u0430\u0439\u0448\u0438\u0439 \u0441\u0440\u043e\u043a \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0439\u0442\u0438 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0443\u044e \u043d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u044c \u0434\u043b\u044f \u0430\u0440\u0435\u043d\u0434\u044b.",button:"123"},{link:"/sell",img:"sell",title:"Sell",text:"- \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u043d\u0430\u0448\u0435\u0439 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0443 \u0432 \u0442\u0440\u0438 \u0440\u0430\u0437\u0430 \u0447\u0430\u0449\u0435 \u0441\u0434\u0430\u044e\u0442 \u043d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u044c.",button:"123"}]},MainFilters:{title:"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438 \u0434\u043b\u044f \u0432\u0430\u0441",categories:["\u041a\u0443\u043f\u0438\u0442\u044c","\u0421\u0434\u0430\u0442\u044c \u0432 \u0430\u0440\u0435\u043d\u0434\u0443","\u041f\u0440\u043e\u0434\u0430\u0442\u044c"],links:[[{link:"/buy/northern-district",title:"\u0421\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433"},{link:"/buy/haifa-district",title:"\u0425\u0430\u0439\u0444\u0441\u043a\u0438\u0439 \u043e\u043a\u0440\u0443\u0433"},{link:"/buy/tel-aviv-district",title:"\u0422\u0435\u043b\u044c-\u0410\u0432\u0438\u0432\u0441\u043a\u0438\u0439 \u043e\u043a\u0440\u0443\u0433"},{link:"/buy/central-district",title:"\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433"},{link:"/buy/jerusalem-district",title:"\u0418\u0435\u0440\u0443\u0441\u0430\u043b\u0438\u043c\u0441\u043a\u0438\u0439 \u043e\u043a\u0440\u0443\u0433"},{link:"/buy/southern-district",title:"\u042e\u0436\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433"},{link:"/buy/judea-and-samaria-district",title:"\u041e\u043a\u0440\u0443\u0433 \u0418\u0443\u0434\u0435\u044f \u0438 \u0421\u0430\u043c\u0430\u0440\u0438\u044f"},{link:"/buy/jerusalem",title:"\u0418\u0435\u0440\u0443\u0441\u0430\u043b\u0438\u043c"},{link:"/buy/tel-aviv",title:"\u0422\u0435\u043b\u044c-\u0410\u0432\u0438\u0432"},{link:"/buy/herzliya",title:"\u0413\u0435\u0440\u0446\u043b\u0438\u044f"},{link:"/buy/haifa",title:"\u0425\u0430\u0439\u0444\u0430"},{link:"/buy/rishon-lezion",title:"\u0420\u0438\u0448\u043e\u043d-\u043b\u0435-\u0426\u0438\u043e\u043d"},{link:"/buy/netanya",title:"\u041d\u0435\u0442\u0430\u043d\u0438\u044f"},{link:"/buy/bat-yam",title:"\u0411\u0430\u0442-\u042f\u043c"},{link:"/buy/holon",title:"\u0425\u043e\u043b\u043e\u043d"},{link:"/buy/petah-tikva",title:"\u041f\u0435\u0442\u0430\u0445-\u0422\u0438\u043a\u0432\u0430"},{link:"/buy/kfar-saba",title:"\u041a\u0444\u0430\u0440-\u0421\u0430\u0432\u0430"},{link:"/buy/ashdod",title:"\u0410\u0448\u0434\u043e\u0434"},{link:"/buy/ashkelon",title:"\u0410\u0448\u043a\u0435\u043b\u043e\u043d"},{link:"/buy/eilat",title:"\u042d\u0439\u043b\u0430\u0442"}],[{link:"/rent/northern-district",title:"\u0421\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433"},{link:"/rent/haifa-district",title:"\u0425\u0430\u0439\u0444\u0441\u043a\u0438\u0439 \u043e\u043a\u0440\u0443\u0433"},{link:"/rent/tel-aviv-district",title:"\u0422\u0435\u043b\u044c-\u0410\u0432\u0438\u0432\u0441\u043a\u0438\u0439 \u043e\u043a\u0440\u0443\u0433"},{link:"/rent/central-district",title:"\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433"},{link:"/rent/jerusalem-district",title:"\u0418\u0435\u0440\u0443\u0441\u0430\u043b\u0438\u043c\u0441\u043a\u0438\u0439 \u043e\u043a\u0440\u0443\u0433"},{link:"/rent/southern-district",title:"\u042e\u0436\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433"},{link:"/rent/judea-and-samaria-district",title:"\u041e\u043a\u0440\u0443\u0433 \u0418\u0443\u0434\u0435\u044f \u0438 \u0421\u0430\u043c\u0430\u0440\u0438\u044f"},{link:"/rent/jerusalem",title:"\u0418\u0435\u0440\u0443\u0441\u0430\u043b\u0438\u043c"},{link:"/rent/tel-aviv",title:"\u0422\u0435\u043b\u044c-\u0410\u0432\u0438\u0432"},{link:"/rent/herzliya",title:"\u0413\u0435\u0440\u0446\u043b\u0438\u044f"},{link:"/rent/haifa",title:"\u0425\u0430\u0439\u0444\u0430"},{link:"/rent/rishon-lezion",title:"\u0420\u0438\u0448\u043e\u043d-\u043b\u0435-\u0426\u0438\u043e\u043d"},{link:"/rent/netanya",title:"\u041d\u0435\u0442\u0430\u043d\u0438\u044f"},{link:"/rent/bat-yam",title:"\u0411\u0430\u0442-\u042f\u043c"},{link:"/rent/holon",title:"\u0425\u043e\u043b\u043e\u043d"},{link:"/rent/petah-tikva",title:"\u041f\u0435\u0442\u0430\u0445-\u0422\u0438\u043a\u0432\u0430"},{link:"/rent/kfar-saba",title:"\u041a\u0444\u0430\u0440-\u0421\u0430\u0432\u0430"},{link:"/rent/ashdod",title:"\u0410\u0448\u0434\u043e\u0434"},{link:"/rent/ashkelon",title:"\u0410\u0448\u043a\u0435\u043b\u043e\u043d"},{link:"/rent/eilat",title:"\u042d\u0439\u043b\u0430\u0442"}],[{link:"/sell/northern-district",title:"\u0421\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433"},{link:"/sell/haifa-district",title:"\u0425\u0430\u0439\u0444\u0441\u043a\u0438\u0439 \u043e\u043a\u0440\u0443\u0433"},{link:"/sell/tel-aviv-district",title:"\u0422\u0435\u043b\u044c-\u0410\u0432\u0438\u0432\u0441\u043a\u0438\u0439 \u043e\u043a\u0440\u0443\u0433"},{link:"/sell/central-district",title:"\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433"},{link:"/sell/jerusalem-district",title:"\u0418\u0435\u0440\u0443\u0441\u0430\u043b\u0438\u043c\u0441\u043a\u0438\u0439 \u043e\u043a\u0440\u0443\u0433"},{link:"/sell/southern-district",title:"\u042e\u0436\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433"},{link:"/sell/judea-and-samaria-district",title:"\u041e\u043a\u0440\u0443\u0433 \u0418\u0443\u0434\u0435\u044f \u0438 \u0421\u0430\u043c\u0430\u0440\u0438\u044f"},{link:"/sell/jerusalem",title:"\u0418\u0435\u0440\u0443\u0441\u0430\u043b\u0438\u043c"},{link:"/sell/tel-aviv",title:"\u0422\u0435\u043b\u044c-\u0410\u0432\u0438\u0432"},{link:"/sell/herzliya",title:"\u0413\u0435\u0440\u0446\u043b\u0438\u044f"},{link:"/sell/haifa",title:"\u0425\u0430\u0439\u0444\u0430"},{link:"/sell/rishon-lezion",title:"\u0420\u0438\u0448\u043e\u043d-\u043b\u0435-\u0426\u0438\u043e\u043d"},{link:"/sell/netanya",title:"\u041d\u0435\u0442\u0430\u043d\u0438\u044f"},{link:"/sell/bat-yam",title:"\u0411\u0430\u0442-\u042f\u043c"},{link:"/sell/holon",title:"\u0425\u043e\u043b\u043e\u043d"},{link:"/sell/petah-tikva",title:"\u041f\u0435\u0442\u0430\u0445-\u0422\u0438\u043a\u0432\u0430"},{link:"/sell/kfar-saba",title:"\u041a\u0444\u0430\u0440-\u0421\u0430\u0432\u0430"},{link:"/sell/ashdod",title:"\u0410\u0448\u0434\u043e\u0434"},{link:"/sell/ashkelon",title:"\u0410\u0448\u043a\u0435\u043b\u043e\u043d"},{link:"/sell/eilat",title:"\u042d\u0439\u043b\u0430\u0442"}]]},Footer:{follow:"\u043d\u0430\u0448\u0438 \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0435\u0442\u0438",apps:{title:"\u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043d\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435",text:"\u0441\u043a\u0430\u0447\u0430\u0442\u044c \u0438\u0437"},policy:"\u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438"},Fieldset:{default:{title:"default text",list:[{title:"\u0432\u0441\u0435",value:"0"}]},rooms:{title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043e\u043c\u043d\u0430\u0442",list:[{title:"\u0412\u0441\u0435",value:"0"},{title:"1+",value:"1"},{title:"2+",value:"2"},{title:"3+",value:"3"},{title:"4+",value:"4"}]},type:{title:"\u0412\u0438\u0434 \u0441\u0434\u0435\u043b\u043a\u0438",list:[{title:"\u0410\u0440\u0435\u043d\u0434\u0430",value:"rent"},{title:"\u041f\u043e\u043a\u0443\u043f\u043a\u0430",value:"buy"}]}}},he:{Header:{leftMenu:[{link:"/buy",title:"\u05e0\u05db\u05e1\u05d9\u05dd \u05dc\u05de\u05db\u05d9\u05e8\u05d4"},{link:"/rent",title:"\u05e0\u05db\u05e1\u05d9\u05dd \u05dc\u05d4\u05e9\u05db\u05e8\u05d4"},{link:"/sell",title:"\u05dc\u05e4\u05e8\u05e1\u05dd \u05de\u05d5\u05d3\u05e2\u05d4"}],rightMenu:[{link:"/buy-ads",title:"\u05d4\u05d5\u05e1\u05e3 \u05de\u05d5\u05d3\u05e2\u05d5\u05ea"},{link:"/sign-up",title:"\u05d4\u05d9\u05e8\u05e9\u05dd"},{link:"/sign-in",title:"\u05d4\u05ea\u05d7\u05d1\u05e8\u05d5\u05ea"}]},Search:{placeholder:"\u05d4\u05ea\u05d7\u05dc \u05dc\u05d4\u05e7\u05dc\u05d9\u05d3 \u05d0\u05ea \u05d4\u05db\u05ea\u05d5\u05d1\u05ea"},MainCategories:{title:"\u05d4\u05e2\u05e1\u05e7\u05d0\u05d5\u05ea \u05d4\u05e8\u05dc\u05d5\u05d5\u05e0\u05d8\u05d9\u05d5\u05ea \u05d1\u05d9\u05d5\u05ea\u05e8",cards:[{link:"/buy",img:"buy",title:"\u05e0\u05db\u05e1\u05d9\u05dd \u05dc\u05de\u05db\u05d9\u05e8\u05d4",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere risus libero, tempor porttitor leo dignissim sit amet.",button:"123"},{link:"/rent",img:"rent",title:"\u05e0\u05db\u05e1\u05d9\u05dd \u05dc\u05d4\u05e9\u05db\u05e8\u05d4",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere risus libero, tempor porttitor leo dignissim sit amet.",button:"123"},{link:"/sell",img:"sell",title:"\u05dc\u05e4\u05e8\u05e1\u05dd \u05de\u05d5\u05d3\u05e2\u05d4",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere risus libero, tempor porttitor leo dignissim sit amet.",button:"123"}]},MainFilters:{title:"\u05d4\u05de\u05dc\u05e6\u05d5\u05ea",categories:["\u05e7\u05e0\u05d9\u05d4","\u05dc\u05d4\u05e9\u05db\u05e8\u05d4","\u05dc\u05de\u05db\u05d9\u05e8\u05d4"],links:[[{link:"/buy/northern-district",title:"\u05de\u05d7\u05d5\u05d6 \u05d4\u05e6\u05e4\u05d5\u05df"},{link:"/buy/haifa-district",title:"\u05de\u05d7\u05d5\u05d6 \u05d7\u05d9\u05e4\u05d4"},{link:"/buy/tel-aviv-district",title:"\u05de\u05d7\u05d5\u05d6 \u05ea\u05dc \u05d0\u05d1\u05d9\u05d1"},{link:"/buy/central-district",title:"\u05de\u05d7\u05d5\u05d6 \u05d4\u05de\u05e8\u05db\u05d6"},{link:"/buy/jerusalem-district",title:"\u05de\u05d7\u05d5\u05d6 \u05d9\u05e8\u05d5\u05e9\u05dc\u05d9\u05dd"},{link:"/buy/southern-district",title:"\u05de\u05d7\u05d5\u05d6 \u05d4\u05d3\u05e8\u05d5\u05dd"},{link:"/buy/judea-and-samaria-district",title:"\u05de\u05d7\u05d5\u05d6 \u05d9\u05d4\u05d5\u05d3\u05d4 \u05d5\u05e9\u05d5\u05de\u05e8\u05d5\u05df"},{link:"/buy/jerusalem",title:"\u05d9\u05e8\u05d5\u05e9\u05dc\u05d9\u05dd"},{link:"/buy/tel-aviv",title:"\u05ea\u05dc \u05d0\u05d1\u05d9\u05d1"},{link:"/buy/herzliya",title:"\u05d4\u05e8\u05e6\u05dc\u05d9\u05d4"},{link:"/buy/haifa",title:"\u05d7\u05d9\u05e4\u05d4"},{link:"/buy/rishon-lezion",title:"\u05e8\u05d0\u05e9\u05d5\u05df \u05dc\u05e6\u05d9\u05d5\u05df"},{link:"/buy/netanya",title:"\u05e0\u05ea\u05e0\u05d9\u05d4"},{link:"/buy/bat-yam",title:"\u05d1\u05ea \u05d9\u05dd"},{link:"/buy/holon",title:"\u05d7\u05d5\u05dc\u05d5\u05df"},{link:"/buy/petah-tikva",title:"\u05e4\u05ea\u05d7 \u05ea\u05e7\u05d5\u05d5\u05d4"},{link:"/buy/kfar-saba",title:"\u05db\u05e4\u05e8 \u05e1\u05d1\u05d0"},{link:"/buy/ashdod",title:"\u05d0\u05e9\u05d3\u05d5\u05d3"},{link:"/buy/ashkelon",title:"\u05d0\u05e9\u05e7\u05dc\u05d5\u05df"},{link:"/buy/eilat",title:"\u05d0\u05d9\u05dc\u05ea"}],[{link:"/rent/northern-district",title:"\u05de\u05d7\u05d5\u05d6 \u05d4\u05e6\u05e4\u05d5\u05df"},{link:"/rent/haifa-district",title:"\u05de\u05d7\u05d5\u05d6 \u05d7\u05d9\u05e4\u05d4"},{link:"/rent/tel-aviv-district",title:"\u05de\u05d7\u05d5\u05d6 \u05ea\u05dc \u05d0\u05d1\u05d9\u05d1"},{link:"/rent/central-district",title:"\u05de\u05d7\u05d5\u05d6 \u05d4\u05de\u05e8\u05db\u05d6"},{link:"/rent/jerusalem-district",title:"\u05de\u05d7\u05d5\u05d6 \u05d9\u05e8\u05d5\u05e9\u05dc\u05d9\u05dd"},{link:"/rent/southern-district",title:"\u05de\u05d7\u05d5\u05d6 \u05d4\u05d3\u05e8\u05d5\u05dd"},{link:"/rent/judea-and-samaria-district",title:"\u05de\u05d7\u05d5\u05d6 \u05d9\u05d4\u05d5\u05d3\u05d4 \u05d5\u05e9\u05d5\u05de\u05e8\u05d5\u05df"},{link:"/rent/jerusalem",title:"\u05d9\u05e8\u05d5\u05e9\u05dc\u05d9\u05dd"},{link:"/rent/tel-aviv",title:"\u05ea\u05dc \u05d0\u05d1\u05d9\u05d1"},{link:"/rent/herzliya",title:"\u05d4\u05e8\u05e6\u05dc\u05d9\u05d4"},{link:"/rent/haifa",title:"\u05d7\u05d9\u05e4\u05d4"},{link:"/rent/rishon-lezion",title:"\u05e8\u05d0\u05e9\u05d5\u05df \u05dc\u05e6\u05d9\u05d5\u05df"},{link:"/rent/netanya",title:"\u05e0\u05ea\u05e0\u05d9\u05d4"},{link:"/rent/bat-yam",title:"\u05d1\u05ea \u05d9\u05dd"},{link:"/rent/holon",title:"\u05d7\u05d5\u05dc\u05d5\u05df"},{link:"/rent/petah-tikva",title:"\u05e4\u05ea\u05d7 \u05ea\u05e7\u05d5\u05d5\u05d4"},{link:"/rent/kfar-saba",title:"\u05db\u05e4\u05e8 \u05e1\u05d1\u05d0"},{link:"/rent/ashdod",title:"\u05d0\u05e9\u05d3\u05d5\u05d3"},{link:"/rent/ashkelon",title:"\u05d0\u05e9\u05e7\u05dc\u05d5\u05df"},{link:"/rent/eilat",title:"\u05d0\u05d9\u05dc\u05ea"}],[{link:"/sell/northern-district",title:"\u05de\u05d7\u05d5\u05d6 \u05d4\u05e6\u05e4\u05d5\u05df"},{link:"/sell/haifa-district",title:"\u05de\u05d7\u05d5\u05d6 \u05d7\u05d9\u05e4\u05d4"},{link:"/sell/tel-aviv-district",title:"\u05de\u05d7\u05d5\u05d6 \u05ea\u05dc \u05d0\u05d1\u05d9\u05d1"},{link:"/sell/central-district",title:"\u05de\u05d7\u05d5\u05d6 \u05d4\u05de\u05e8\u05db\u05d6"},{link:"/sell/jerusalem-district",title:"\u05de\u05d7\u05d5\u05d6 \u05d9\u05e8\u05d5\u05e9\u05dc\u05d9\u05dd"},{link:"/sell/southern-district",title:"\u05de\u05d7\u05d5\u05d6 \u05d4\u05d3\u05e8\u05d5\u05dd"},{link:"/sell/judea-and-samaria-district",title:"\u05de\u05d7\u05d5\u05d6 \u05d9\u05d4\u05d5\u05d3\u05d4 \u05d5\u05e9\u05d5\u05de\u05e8\u05d5\u05df"},{link:"/sell/jerusalem",title:"\u05d9\u05e8\u05d5\u05e9\u05dc\u05d9\u05dd"},{link:"/sell/tel-aviv",title:"\u05ea\u05dc \u05d0\u05d1\u05d9\u05d1"},{link:"/sell/herzliya",title:"\u05d4\u05e8\u05e6\u05dc\u05d9\u05d4"},{link:"/sell/haifa",title:"\u05d7\u05d9\u05e4\u05d4"},{link:"/sell/rishon-lezion",title:"\u05e8\u05d0\u05e9\u05d5\u05df \u05dc\u05e6\u05d9\u05d5\u05df"},{link:"/sell/netanya",title:"\u05e0\u05ea\u05e0\u05d9\u05d4"},{link:"/sell/bat-yam",title:"\u05d1\u05ea \u05d9\u05dd"},{link:"/sell/holon",title:"\u05d7\u05d5\u05dc\u05d5\u05df"},{link:"/sell/petah-tikva",title:"\u05e4\u05ea\u05d7 \u05ea\u05e7\u05d5\u05d5\u05d4"},{link:"/sell/kfar-saba",title:"\u05db\u05e4\u05e8 \u05e1\u05d1\u05d0"},{link:"/sell/ashdod",title:"\u05d0\u05e9\u05d3\u05d5\u05d3"},{link:"/sell/ashkelon",title:"\u05d0\u05e9\u05e7\u05dc\u05d5\u05df"},{link:"/sell/eilat",title:"\u05d0\u05d9\u05dc\u05ea"}]]},Footer:{follow:"\u05e2\u05e7\u05d1\u05d5 \u05d0\u05d7\u05e8\u05d9\u05e0\u05d5",apps:{title:"\u05d4\u05ea\u05e7\u05df \u05d0\u05ea \u05d4\u05d0\u05e4\u05dc\u05d9\u05e7\u05e6\u05d9\u05d4 \u05e9\u05dc\u05e0\u05d5",text:"\u05d4\u05d5\u05e8\u05d3 \u05d1"},policy:"\u05de\u05d3\u05d9\u05e0\u05d9\u05d5\u05ea \u05e4\u05e8\u05d8\u05d9\u05d5\u05ea"},Fieldset:{default:{title:"default text",list:[{title:"\u05d4\u05db\u05dc",value:"0"}]},rooms:{title:"\u05d7\u05d3\u05e8\u05d9\u05dd",list:[{title:"\u05d4\u05db\u05dc",value:"0"},{title:"1+",value:"1"},{title:"2+",value:"2"},{title:"3+",value:"3"},{title:"4+",value:"4"}]},type:{title:"\u05e1\u05d5\u05d2 \u05d4\u05e2\u05e1\u05e7\u05d4",list:[{title:"\u05d4\u05e9\u05db\u05e8\u05d4",value:"rent"},{title:"\u05e7\u05e0\u05d9\u05d4",value:"buy"}]}}}};function D(){var t=Object(l.useState)("en"),e=Object(r.a)(t,2),i=e[0],n=e[1];return Object(d.jsx)(c.Provider,{value:{page:_[i],langs:O,lang:i},children:Object(d.jsxs)("div",{className:"Page",children:[Object(d.jsx)(j,{changeLang:n}),Object(d.jsx)("main",{className:"content",children:Object(d.jsx)(x,{})}),Object(d.jsx)(g,{})]})})}var N=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,21)).then((function(e){var i=e.getCLS,l=e.getFID,n=e.getFCP,a=e.getLCP,s=e.getTTFB;i(t),l(t),n(t),a(t),s(t)}))};s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(D,{})}),document.getElementById("root")),N()}],[[20,1,2]]]);
//# sourceMappingURL=main.116a5b91.chunk.js.map