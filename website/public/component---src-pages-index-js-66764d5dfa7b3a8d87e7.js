(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{195:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(205),c=t(203),i=t.n(c),A=t(219),s=t.n(A),m=(t(327),t(49),t(328)),o=function(e){return l.a.createElement("span",{className:"image avatar"},l.a.createElement(i.a,e))},u=function(){return l.a.createElement("h1",null,l.a.createElement("strong",null,"I am Sarp IŞIK"),",",l.a.createElement("br",null),"Full Stack Web Developer.")},d=function(e){var a=e.node;return l.a.createElement("li",{key:a.name},l.a.createElement("a",{href:a.url,className:"icon "+("mail"===a.name?"solid":"brands")+" fa-"+("mail"===a.name?"envelope":a.name)},l.a.createElement("span",{className:"label"},a.name)))},E=function(e){var a=e.icons;return l.a.createElement("ul",{className:"icons"},a.map(d))},g=function(){var e=m.data;return l.a.createElement(n.Fragment,null,l.a.createElement("header",{id:"header",className:"background-dark"},l.a.createElement("div",{className:"inner"},l.a.createElement(o,{fluid:e.strapiProfile.photo.childImageSharp.fluid,alt:"sarp isik avatar"}),l.a.createElement(u,null)),l.a.createElement("footer",{id:"footer",className:"social-icons"},l.a.createElement("div",{className:"inner"},l.a.createElement(E,{icons:e.allStrapiLink.edges})))))},p=function(){return l.a.createElement("footer",{id:"footer",className:"copyright-sarp"},l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"© ",(new Date).getFullYear(),", Sarp ISIK"),l.a.createElement("li",null,"Design: ",l.a.createElement("a",{href:"http://html5up.net"},"HTML5 UP"))))},f=(t(18),t(355)),h=t(333),b=t.n(h),x={paddingTop:"2em"},N=function(e){var a=e.color,t=e.text;return l.a.createElement("span",{style:{color:a}},t)},w=function(e){return l.a.createElement(N,Object.assign({color:"#dc3545"},e))},v=function(){var e=Object(n.useState)({isLoading:!1,result:""}),a=e[0],t=e[1],r=Object(f.a)(),c=r.register,i=r.handleSubmit,A=r.errors;return l.a.createElement(n.Fragment,null,l.a.createElement("form",{onSubmit:i(function(e){t(Object.assign({},a,{isLoading:!0})),b.a.post("http://localhost:1337/messages",e).then(function(){return t(Object.assign({},a,{isLoading:!1,result:"success"}))}).catch(function(e){console.error(e),t(Object.assign({},a,{isLoading:!1,result:"fail"}))})})},l.a.createElement("div",{className:"row gtr-uniform gtr-50"},l.a.createElement("div",{className:"col-12"},a.isLoading&&l.a.createElement(N,{color:"#17a2b8",text:"Your message sending, please wait..."}),"success"===a.result?l.a.createElement(N,{color:"#49bf9d",text:"Your message has been sent!"}):"fail"===a.result?l.a.createElement(w,{text:"Message sent failed! Please try again later."}):null),l.a.createElement("div",{className:"col-6 col-12-xsmall"},l.a.createElement("input",{type:"text",name:"name",id:"name",placeholder:"Name",ref:c({required:!0,minLength:2,maxLength:20})}),A.name&&"required"===A.name.type&&l.a.createElement(w,{text:"Name is required."}),A.name&&"minLength"===A.name.type&&l.a.createElement(w,{text:"Name must has minimum 2 length."}),A.name&&"maxLength"===A.name.type&&l.a.createElement(w,{text:"Name must has maximum 20 length."})),l.a.createElement("div",{className:"col-6 col-12-xsmall"},l.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Email",ref:c({required:!0,minLength:3,maxLength:100})}),A.email&&"required"===A.email.type&&l.a.createElement(w,{text:"Email is required."}),A.email&&"minLength"===A.email.type&&l.a.createElement(w,{text:"Email must has minimum 3 length."}),A.email&&"maxLength"===A.email.type&&l.a.createElement(w,{text:"Email must has maximum 100 length."})),l.a.createElement("div",{className:"col-12"},l.a.createElement("textarea",{name:"text",id:"message",placeholder:"Message",rows:"4",ref:c({required:!0,minLength:3,maxLength:200})}),A.text&&"required"===A.text.type&&l.a.createElement(w,{text:"Message is required."}),A.text&&"minLength"===A.text.type&&l.a.createElement(w,{text:"Message must has minimum 3 length."}),A.text&&"maxLength"===A.text.type&&l.a.createElement(w,{text:"Message must has maximum 200 length."}))),l.a.createElement("ul",{style:x,className:"actions"},l.a.createElement("li",null,l.a.createElement("input",{type:"submit",disabled:a.isLoading||"success"===a.result||"fail"===a.result,value:"Send Message"})))))},j=function(){return l.a.createElement("ul",{className:"labeled-icons"},l.a.createElement("li",null,l.a.createElement("h3",{className:"icon solid fa-envelope"},l.a.createElement("span",{className:"label"},"Email")),l.a.createElement("a",{href:"mailto:wdsarpisik@gmail.com"},"wdsarpisik@gmail.com")))},B=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("h2",null,"Get In Touch"),l.a.createElement("p",null,"Although I'm currently interested in freelance or remote jobs, feel free to leave a message for other offers."),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-8 col-12-small"},l.a.createElement(v,null)),l.a.createElement("div",{className:"col-4 col-12-small"},l.a.createElement(j,null))))},Q=t(200);t.d(a,"pageQuery",function(){return S});var y=function(e){return l.a.createElement(n.Fragment,null,l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,"Hi,")),l.a.createElement(s.a,e),l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement(r.a,{to:"/skills",className:"button"},"Skills & Tools"))))},k=function(e){var a=e.projects;return l.a.createElement(n.Fragment,null,l.a.createElement("h2",null,"Recent Works"),l.a.createElement("div",{className:"row"},a.map(function(e){return l.a.createElement("article",{className:"col-6 col-12-xsmall work-item",key:e.node.id},l.a.createElement(r.a,{to:"/"+e.node.id,className:"image fit thumb"},l.a.createElement(i.a,{className:"image-overlay",imgStyle:{backgroundColor:"red"},fluid:e.node.image.childImageSharp.fluid})),l.a.createElement("h3",null,e.node.title))})))},S=(a.default=function(e){var a=e.data;return l.a.createElement(n.Fragment,null,l.a.createElement(Q.a,{title:"Home",meta:[{name:"keywords",content:"web developer portfolio, web developer full stack, web developer freelance website, contact form, fullstack developer"}]}),l.a.createElement(g,null),l.a.createElement("div",{id:"main"},l.a.createElement("section",{id:"one"},l.a.createElement(y,{source:a.strapiPage.content})),l.a.createElement("section",{id:"two"},l.a.createElement(k,{projects:a.allStrapiProject.edges})),l.a.createElement("section",{id:"three"},l.a.createElement(B,null)),l.a.createElement(p,null)))},"1394782174")},199:function(e,a,t){var n;e.exports=(n=t(206))&&n.default||n},200:function(e,a,t){"use strict";var n=t(201),l=t(0),r=t.n(l),c=t(209),i=t.n(c);function A(e){var a=e.description,t=e.lang,l=e.meta,c=e.title,A=n.data.site,s=a||A.siteMetadata.description;return r.a.createElement(i.a,{htmlAttributes:{lang:t},title:c,titleTemplate:"%s | "+A.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:A.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(l)})}A.defaultProps={lang:"en",meta:[],description:""},a.a=A},201:function(e){e.exports={data:{site:{siteMetadata:{title:"Sarp ISIK Portfolio",description:"Full stack web developer portfolio with Strapi as headless CMS.",author:"@sarpisik"}}}}},205:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(66),c=t.n(r);t.d(a,"a",function(){return c.a});t(199),t(9).default.enqueue,l.a.createContext({})},206:function(e,a,t){"use strict";t.r(a);t(18);var n=t(0),l=t.n(n),r=t(95);a.default=function(e){var a=e.location,t=e.pageResources;return t?l.a.createElement(r.a,Object.assign({location:a,pageResources:t},t.json)):null}},328:function(e){e.exports={data:{strapiProfile:{photo:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAEEBQYD/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAHUzvKsvSucSVYNoB//xAAcEAABBAMBAAAAAAAAAAAAAAABAgMREgAQEyH/2gAIAQEAAQUCfdo0hZt0QM63GE+yYnX/xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAwEBPwEI/8QAFREBAQAAAAAAAAAAAAAAAAAAEAH/2gAIAQIBAT8BIf/EABwQAAICAgMAAAAAAAAAAAAAAAABAhEDEDEyQf/aAAgBAQAGPwJtckXLIzsiqtCPCt//xAAcEAADAQACAwAAAAAAAAAAAAAAAREhMYFBUWH/2gAIAQEAAT8hS51sRiEzyPmK7LpVnsseF8aJQm3ZKDx8lFP/2gAMAwEAAgADAAAAEBz4vv/EABgRAAMBAQAAAAAAAAAAAAAAAAABERAx/9oACAEDAQE/ELdIh5//xAAZEQACAwEAAAAAAAAAAAAAAAAAARAhMVH/2gAIAQIBAT8QTL4Yj//EABkQAQEBAQEBAAAAAAAAAAAAAAERAEEhMf/aAAgBAQABPxA6SCfF7hyIpteXNA0gg8a97gnE7chQh8BbcrQvTVqIbHcB4PmUvrv/2Q==",aspectRatio:1,src:"/static/d55f750319d32298cb06b25536685492/954df/3faafa44c0cdefd3b10b7e259cb47100.jpg",srcSet:"/static/d55f750319d32298cb06b25536685492/73732/3faafa44c0cdefd3b10b7e259cb47100.jpg 25w,\n/static/d55f750319d32298cb06b25536685492/a911e/3faafa44c0cdefd3b10b7e259cb47100.jpg 50w,\n/static/d55f750319d32298cb06b25536685492/954df/3faafa44c0cdefd3b10b7e259cb47100.jpg 100w,\n/static/d55f750319d32298cb06b25536685492/cb3d3/3faafa44c0cdefd3b10b7e259cb47100.jpg 150w,\n/static/d55f750319d32298cb06b25536685492/d278e/3faafa44c0cdefd3b10b7e259cb47100.jpg 200w,\n/static/d55f750319d32298cb06b25536685492/47052/3faafa44c0cdefd3b10b7e259cb47100.jpg 640w",sizes:"(max-width: 100px) 100vw, 100px"}}}},allStrapiLink:{edges:[{node:{name:"linkedin",url:"https://www.linkedin.com/in/sarp-isik/"}},{node:{name:"github",url:"https://github.com/sarpisik"}},{node:{name:"mail",url:"mailto:wdsarpisik@gmail.com"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-66764d5dfa7b3a8d87e7.js.map