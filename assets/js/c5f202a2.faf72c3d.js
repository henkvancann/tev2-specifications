"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[2943],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||l[d]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5997:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=r(4996),s=["components"],c={id:"contributors-repo",sidebar_label:"Using Git Repo Markdown",scopetag:"tev2",date:20220513},p="Using Markdown files in a Git Repo",u={unversionedId:"manuals/contributor/contributors-repo",id:"manuals/contributor/contributors-repo",title:"Using Markdown files in a Git Repo",description:"<img",source:"@site/docs/manuals/contributor/10-contributors-repo.md",sourceDirName:"manuals/contributor",slug:"/manuals/contributor/contributors-repo",permalink:"/tev2-specifications/docs/manuals/contributor/contributors-repo",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/manuals/contributor/10-contributors-repo.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1692012836,formattedLastUpdatedAt:"Aug 14, 2023",sidebarPosition:10,frontMatter:{id:"contributors-repo",sidebar_label:"Using Git Repo Markdown",scopetag:"tev2",date:20220513},sidebar:"tev2SideBar",previous:{title:"Contributors",permalink:"/tev2-specifications/docs/manuals/contributor/contributor-overview"},next:{title:"Using Wikis (Markdown)",permalink:"/tev2-specifications/docs/manuals/contributor/contributors-wiki"}},l={},f=[{value:"Users contributions",id:"users-contributions",level:2},{value:"Curators tasks",id:"curators-tasks",level:2}],d={toc:f};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-markdown-files-in-a-git-repo"},"Using Markdown files in a Git Repo"),(0,a.kt)("img",{alt:"This page is under construction",src:(0,i.Z)("images/wip/wip-under-construction.png")}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,a.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,a.kt)("br",null),(0,a.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,a.kt)("p",null,"One way in which ",(0,a.kt)("a",{parentName:"p",href:"@"},"curators")," may decide that ",(0,a.kt)("a",{parentName:"p",href:"@"},"users")," can contribute, is by enabling them to ",(0,a.kt)("a",{parentName:"p",href:"https://opensource.com/article/19/7/create-pull-request-github"},"create pull requests")," to the repository that contains the ",(0,a.kt)("a",{parentName:"p",href:"@"},"scope's")," ",(0,a.kt)("a",{parentName:"p",href:"@"},"corpus"),". The ",(0,a.kt)("a",{parentName:"p",href:"@"},"curators")," SHOULD specify the procedures, the code of conduct, etc. that support and enable the maturing of these texts, and how it is decided that such texts can become part of the ",(0,a.kt)("a",{parentName:"p",href:"@"},"scope's")," ",(0,a.kt)("a",{parentName:"p",href:"@"},"corpus"),". That's outside the scope of this document."),(0,a.kt)("h2",{id:"users-contributions"},"Users contributions"),(0,a.kt)("p",null,"From the ",(0,a.kt)("a",{parentName:"p",href:"@"},"TEv2")," perspective, ",(0,a.kt)("a",{parentName:"p",href:"@"},"users")," contribute by creating and changing the markdown pages that describe the various ",(0,a.kt)("a",{parentName:"p",href:"@"},"knowledge artifacts"),", such as  ",(0,a.kt)("a",{parentName:"p",href:"@"},"concepts")," , ",(0,a.kt)("a",{parentName:"p",href:"@"},"use-cases"),", ",(0,a.kt)("a",{parentName:"p",href:"@"},"mental models"),", etc."),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"@"},"user")," can use ",(0,a.kt)("a",{parentName:"p",href:"@"},"TermRefs")," to mark the ",(0,a.kt)("a",{parentName:"p",href:"@"},"terms")," that it wants to be linked to a specific meaning (",(0,a.kt)("a",{parentName:"p",href:"@"},"knowledge artifact"),")."),(0,a.kt)("h2",{id:"curators-tasks"},"Curators tasks"),(0,a.kt)("admonition",{title:"Editor's note:",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Text has to be provided here")))}m.isMDXComponent=!0}}]);