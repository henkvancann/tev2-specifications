"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[4836],{2360:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(6010),i="tabItem_OmH5";function s(e){var t=e.children,a=e.hidden,s=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,s),hidden:a},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(3117),r=a(7294),i=a(2389),s=a(7392),o=a(7094),l=a(2466),p=a(6010),d="tabList_uSqn",m="tabItem_LplD";function h(e){var t,a,i,h=e.lazy,c=e.block,f=e.defaultValue,u=e.values,k=e.groupId,N=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=u?u:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.l)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===f?f:null!=(t=null!=f?f:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(i=g[0])?void 0:i.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,o.U)(),C=w.tabGroupChoices,S=w.setTabGroupChoices,T=(0,r.useState)(y),F=T[0],A=T[1],E=[],R=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var x=C[k];null!=x&&x!==F&&v.some((function(e){return e.value===x}))&&A(x)}var L=function(e){var t=e.currentTarget,a=E.indexOf(t),n=v[a].value;n!==F&&(R(t),A(n),null!=k&&S(k,n))},U=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;a=E[n]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;a=E[r]||E[E.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,p.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":c},N)},v.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:F===t?0:-1,"aria-selected":F===t,key:t,ref:function(e){return E.push(e)},onKeyDown:U,onFocus:L,onClick:L},i,{className:(0,p.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":F===t})}),null!=a?a:t)}))),h?(0,r.cloneElement)(g.filter((function(e){return e.props.value===F}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==F})}))))}function c(e){var t=(0,i.Z)();return r.createElement(h,(0,n.Z)({key:String(t)},e))}},2306:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),s=(a(4996),a(9877),a(2360),["components"]),o={id:"tev2-spec-saf",title:"Scope Administration File (SAF)",sidebar_label:"SAF (Scope Admin File)",hide_table_of_contents:!0,scopetag:"tev2",date:20220303},l=void 0,p={unversionedId:"tev2/tev2-spec-saf",id:"tev2/tev2-spec-saf",title:"Scope Administration File (SAF)",description:"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",source:"@site/docs/tev2/tev2-spec-saf.md",sourceDirName:"tev2",slug:"/tev2/tev2-spec-saf",permalink:"/framework/docs/tev2/tev2-spec-saf",draft:!1,editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/tev2/tev2-spec-saf.md",tags:[],version:"current",frontMatter:{id:"tev2-spec-saf",title:"Scope Administration File (SAF)",sidebar_label:"SAF (Scope Admin File)",hide_table_of_contents:!0,scopetag:"tev2",date:20220303},sidebar:"tev2SideBar",previous:{title:"Installation",permalink:"/framework/docs/tev2/tev2-installation"},next:{title:"Terminology Construction",permalink:"/framework/docs/tev2/term-selection-criteria"}},d={},m=[{value:"Scope Administration File Field Descriptions",id:"scope-administration-file-field-descriptions",level:2},{value:"SAF Terminology - Defining the Scope itself",id:"terminology",level:3},{value:"SAF Scopes - Mapping Scopetags and Scopedirs",id:"scopes",level:3},{value:"SAF Versions - Enabling changes and updates in a scope&#39;s Terminology",id:"versions",level:3}],h={toc:m};function c(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,i.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions."))),(0,i.kt)("p",null,"Every ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope")," MUST have exactly one Scope Administration File or ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF"),", i.e. a file contains whatever needs to be administered in the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),", and that various tools need to find e.g. the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope's")," ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG"),", ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated texts"),", ",(0,i.kt)("a",{parentName:"p",href:"@"},"scopetags"),", etc."),(0,i.kt)("p",null,"This document specifies the structure of such ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAFs"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF")," is to be created and maintained by the ",(0,i.kt)("a",{parentName:"p",href:"@"},"curators")," of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Editor's note:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We need a paragraph that specifies the ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF"),"-file naming conventions."))),(0,i.kt)("h2",{id:"scope-administration-file-field-descriptions"},"Scope Administration File Field Descriptions"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF")," has three main parts:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"scope"))," (singular) section defines meta-data concerning the ",(0,i.kt)("a",{parentName:"li",href:"@"},"scope")," itself, both for technical use and human use. It shows where directories and files live that ar part of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"scope"),", and also ways in which people can contribute, raise issues, see what's going on, discuss, etc."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"scopes"))," (plural) section contains a mapping between ",(0,i.kt)("a",{parentName:"li",href:"@"},"scopetags")," that are used within the ",(0,i.kt)("a",{parentName:"li",href:"@"},"scope"),", and the associated ",(0,i.kt)("a",{parentName:"li",href:"@"},"scopedirs"),". This enables tools to find the ",(0,i.kt)("a",{parentName:"li",href:"@"},"SAF")," of these ",(0,i.kt)("a",{parentName:"li",href:"@"},"scopes"),", and from there all other directories, files etc. that live within them, e.g. to use/import their data."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"versions"))," section specifies all versions of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"terminology")," that are actively maintained by the ",(0,i.kt)("a",{parentName:"li",href:"@"},"curators")," of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"scope"),", and for each of them, the set of ",(0,i.kt)("a",{parentName:"li",href:"@"},"terms")," that constitute this ",(0,i.kt)("a",{parentName:"li",href:"@"},"terminology"),".")),(0,i.kt)("p",null,"The following sections specify the fields for each of these parts."),(0,i.kt)("h3",{id:"terminology"},"SAF Terminology - Defining the Scope itself"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example of a `scope` section"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"#\n# This is a Scope Administration File that can be used in conjunction with TEv2.\n#\n# The first section defines meta-data concerning the scope itself, both for technical use and human use.\n# It shows where directories and files live that ar part of the scope, and also\n# ways in which people can contribute, raise issues, see what's going on, discuss, etc.\n#\nscope:\n  scopetag: tev2 # identifier that curators have determined for this terminology\n  scopedir: https://github.com/essif-lab/framework/tree/master/docs/tev2  # URL of the scope-directory\n  curatedir: docs # directory where all curated files are located. Full URL is `scopedir`/`curatedir`\n  glossarydir: glossaries # directory where all glossary files and GDFs are located. Full URL is `scopedir`/`glossarydir`\n  mrgfile: glossaries/mrg.json # file that contains the (default) machine readable glossary. Full URL is `scopedir`/`mrgfile`\n  hrgfile: glossaries/glossary # file that contains the (default) human readable glossary. Full URL is `scopedir`/`hrgfile`\n  license: LICENSE.md # file that contains the (default) licensing conditions. Full URL is `scopedir`/`license`\n<<<<<<< HEAD\n  statuses: [ proposed, approved, deprecated ] # list of status tags that are defined for terminological artifacts in this scope\n=======\n>>>>>>> origin/master\n  issues: https://github.com/essif-lab/framework/issues # URL where issues can be raised and handled\n  website: https://essif-lab.github.io/framework/docs/tev2/tev2-overview # home page of the terminology\n  slack: https://trustoverip.slack.com/archives/C01BBNGRPUH # slack channel for discussions\n  curators: # contacting individual curators\n  - name: RieksJ\n    email: # we split up the email address to reduce the likelihood of the address being harvested for spamming\n      id: rieks.joosten\n      at: tno.nl\n"))),(0,i.kt)("p",null,"The following fields are defined for the ",(0,i.kt)("inlineCode",{parentName:"p"},"scope")," section of a ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"scopetag")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"@"},"Scopetag")," that ",(0,i.kt)("a",{parentName:"td",href:"@"},"curators")," of this scope have determined for this ",(0,i.kt)("a",{parentName:"td",href:"@"},"terminology"),". The associated ",(0,i.kt)("a",{parentName:"td",href:"@"},"scopedir")," is specified in the section ",(0,i.kt)("inlineCode",{parentName:"td"},"scopes"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"scopedir")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"left"},"URL of the location of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"scopedir")," associated with the ",(0,i.kt)("a",{parentName:"td",href:"@"},"scopetags")," listed in the ",(0,i.kt)("inlineCode",{parentName:"td"},"scopetags")," field.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"curatedir")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Path to the directory where all ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated files")," are located. Full URL is ",(0,i.kt)("inlineCode",{parentName:"td"},"scopedir"),"/",(0,i.kt)("inlineCode",{parentName:"td"},"curatedir"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"glossarydir")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Path to the directory where all ",(0,i.kt)("a",{parentName:"td",href:"@"},"glossary")," files and ",(0,i.kt)("a",{parentName:"td",href:"@"},"GDFs")," are located. Full URL is ",(0,i.kt)("inlineCode",{parentName:"td"},"scopedir"),"/",(0,i.kt)("inlineCode",{parentName:"td"},"glossarydir"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mrgfile")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Name of the file that contains the latest version of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"MRG"),". Full URL is ",(0,i.kt)("inlineCode",{parentName:"td"},"scopedir"),"/",(0,i.kt)("inlineCode",{parentName:"td"},"mrgfile"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"hrgfile")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Name of the file that contains the latest version of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"HRG"),". Full URL is ",(0,i.kt)("inlineCode",{parentName:"td"},"scopedir"),"/",(0,i.kt)("inlineCode",{parentName:"td"},"hrgfile"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"license")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"left"},"File in the root of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"scopedir")," that contains licensing data.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"statuses")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"left"},"List of ",(0,i.kt)("a",{parentName:"td",href:"@"},"tags")," that are defined in this ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope")," for specifying stages in the life-cycle of ",(0,i.kt)("a",{parentName:"td",href:"@"},"terminological artifacts"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"issues")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"left"},"URL where issues can be reported and handled.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"website")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"left"},"URL for the home page of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"terminology"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"slack")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"left"},"URL for the slack channel for discussions.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"curators")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Data that can be used to contact individual ",(0,i.kt)("a",{parentName:"td",href:"@"},"curators"),".")))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Editor's note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It might be more practical to move all of the stuff that is particular to this scope, but that is currently documented in the ",(0,i.kt)("inlineCode",{parentName:"p"},"scopes")," section, to this section. We do then need to check throughout the documentation where that section is referenced, and correct such references."))),(0,i.kt)("h3",{id:"scopes"},"SAF Scopes - Mapping Scopetags and Scopedirs"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"scopetags")," section is a list that specifies a mapping between ",(0,i.kt)("a",{parentName:"p",href:"@"},"scopetags")," as they are used in this ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),", the associated ",(0,i.kt)("a",{parentName:"p",href:"(@)"},"scopedir")," and if necessary, other paths and filenames for ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminological artifacts")," within the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),". The latter is only required when specifying the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope")," for which the ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF")," is created/maintained, as for other ",(0,i.kt)("a",{parentName:"p",href:"@"},"scopes"),", such other paths and filenames can readily be found by inspecting the ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF")," that is located in the root of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scopedir")," of such ",(0,i.kt)("a",{parentName:"p",href:"@"},"scopes"),"."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example of a `scopes` section"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"#\n# The second section contains a mapping between scopetags that are used within the scope, and the associated scopedirs.\n# This enables tools to find the [SAF](@) of these [scopes](@), and from there all other directories, files etc.\n# that live within them, e.g. to use/import their data.\n#\nscopes:  #\n- scopetags: [ essiflab, essif-lab ] # definition of (scope) tag(s) that are used within this scope to refer to a specific terminology\n  scopedir: https://github.com/essif-lab/framework/tree/master/docs # URL of the scope-directory\n- scopetags: [ ctwg, toip-ctwg ] # definition of (scope)tag(s) that are used within this scope to refer to a specific terminology\n  scopedir: https://github.com/trustoverip/ctwg # URL of the scope-directory\n"))),(0,i.kt)("p",null,"The following fields are defined for the ",(0,i.kt)("inlineCode",{parentName:"p"},"scopes")," section of a ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"scopetags")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"List of at least one ",(0,i.kt)("a",{parentName:"td",href:"@"},"scopetag"),", that the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curator(s)")," of this ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope")," have determined for the ",(0,i.kt)("a",{parentName:"td",href:"@"},"terminology")," of a specific ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope"),". The associated ",(0,i.kt)("a",{parentName:"td",href:"@"},"scopedir")," is specified in the section ",(0,i.kt)("inlineCode",{parentName:"td"},"scopes"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"scopedir")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"URL of the location of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"scopedir")," associated with the ",(0,i.kt)("a",{parentName:"td",href:"@"},"scopetags")," listed in the ",(0,i.kt)("inlineCode",{parentName:"td"},"scopetags")," field.")))),(0,i.kt)("h3",{id:"versions"},"SAF Versions - Enabling changes and updates in a scope's Terminology"),(0,i.kt)("p",null,"The third section in the ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF")," specifies the ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology")," of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),", in multiple versions that are actively maintained by the ",(0,i.kt)("a",{parentName:"p",href:"@"},"curators"),". For each version, the set of ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms")," is selected that constitute that version's ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology"),". Also, additional data is provided regarding the state/validity of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology")," over time, which may of interest for the ",(0,i.kt)("a",{parentName:"p",href:"@"},"curators")," of other scopes as they need to decide whether or not to import ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms")," from such a ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology"),"."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example of a `versions` section"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'#\n# The third section specifies the versions that are actively maintained by the curators.\n# For each version, the set of terms is selected that constitute the terminology.\n# See the Glossary Generation Tool (GGT) for details about the syntax and semantics.\n#\nversions:\n  - vsntag: 0x921456 # a versiontag that identifies this version from all other versions in the SAF\n    altvsntags: # alternative verstiontags\n      - latest\n      - v0.9.4\n    terms:\n      - "[management]@essif-lab" # import all terms from the mrg of `essif-lab:latest` that have grouptag `management`.\n      - "[party](@essif-lab:0.9.4)" # import the term `party` from the mrg of `essif-lab:0.9.4`.\n      - "[community](@essif-lab:0.9.4)" # import the term `community` from the mrg of `essif-lab:0.9.4`.\n      - "[tev2]@tev2" # import all terms defined in the scope `tev2`\n    status: proposed\n    from: 20220312\n    to:\n  - vsntag: 0x654129 # a versiontag that identifies this version from all other versions in the SAF\n    altvsntags: # alternative verstiontags\n      - v0.9.0\n    terms:\n      - "[management]@essif-lab" # import all essif-lab terms with grouptag `management`.\n      - "[party@essif-lab]" # import the term `party` from the mrg of `essif-lab:latest`.\n      - "[community@essif-lab]" # import the term `community` from the mrg of `essif-lab:latest`.\n'))),(0,i.kt)("p",null,"The following fields are defined for the ",(0,i.kt)("inlineCode",{parentName:"p"},"versions")," section of a ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,i.kt)("th",{parentName:"tr",align:null},"Description")))),(0,i.kt)("p",null,"<<<<<<< HEAD\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"vsntag"),"     | Y | ",(0,i.kt)("a",{parentName:"p",href:"@"},"Versiontag")," that that is used to ",(0,i.kt)("a",{parentName:"p",href:"@"},"identify")," this version within the set of all other versions that are maintained within this ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),". in this ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF"),". It MUST NOT be changed during the lifetime of this version.",(0,i.kt)("br",null),"Must satisfy regex ",(0,i.kt)("inlineCode",{parentName:"p"},"[a-z0-9_-\\.]+"),". |"),(0,i.kt)("h1",{id:"-altvsntags--n--list-of-alternative-versiontags-that-may-be-used-to-refer-to-this-version-of-the-scopes-terminology-a-typical-use-of-this-field-would-be-to-tag-a-version-as-the-latest-versionmust-satisfy-regex-a-z0-9_--"},"| ",(0,i.kt)("inlineCode",{parentName:"h1"},"altvsntags")," | n | List of alternative ",(0,i.kt)("a",{parentName:"h1",href:"@"},"versiontags")," that may be used to refer to this version of the ",(0,i.kt)("a",{parentName:"h1",href:"@"},"scope's")," ",(0,i.kt)("a",{parentName:"h1",href:"@"},"terminology"),". A typical use of this field would be to tag a version as the 'latest' version.",(0,i.kt)("br",null),"Must satisfy regex ",(0,i.kt)("inlineCode",{parentName:"h1"},"[a-z0-9_-\\.]+"),". |"),(0,i.kt)("p",null,"| ",(0,i.kt)("inlineCode",{parentName:"p"},"vsntag"),"     | Y | ",(0,i.kt)("a",{parentName:"p",href:"@"},"Versiontag")," that that is used to ",(0,i.kt)("a",{parentName:"p",href:"@"},"identify")," this version within the set of all other versions that are maintained within this ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),". in this ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF"),". It MUST NOT be changed during the lifetime of this version.",(0,i.kt)("br",null),"Must satisfy regex ",(0,i.kt)("inlineCode",{parentName:"p"},"[a-z0-9_-]+"),". |\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"altvsntags")," | n | List of alternative ",(0,i.kt)("a",{parentName:"p",href:"@"},"versiontags")," that may be used to refer to this version of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope's")," ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology"),". A typical use of this field would be to tag a version as the 'latest' version. |"),(0,i.kt)("blockquote",null,(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("p",{parentName:"blockquote"},"origin/master\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"license"),"    | n | File that contains the (default) licensing conditions. Full URL is ",(0,i.kt)("inlineCode",{parentName:"p"},"scopedir"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"license"),". If not specified, its value defaults to the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"license")," field in the ",(0,i.kt)("inlineCode",{parentName:"p"},"scope")," section (of this ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF"),"). The purpose of this field is to allow different versions of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope's")," ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology")," to have different licenses. |\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"terms"),"      | Y | List of ",(0,i.kt)("a",{parentName:"p",href:"@"},"term selection criteria")," that are used to generate (this version of) the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope's")," ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology"),". See ",(0,i.kt)("a",{parentName:"p",href:"term-selection-criteria"},"Term Selection")," for details. |\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"status"),"     | n | Text that ",(0,i.kt)("a",{parentName:"p",href:"@"},"identifies")," the status of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"term"),". (",(0,i.kt)("a",{parentName:"p",href:"@"},"Communities")," of) ",(0,i.kt)("a",{parentName:"p",href:"@"},"scopes")," may specify values for this field. If not specified, the status SHOULD be assumed to be 'concept', 'draft', 'proposed', or similar. An example is the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/trustoverip/concepts-and-terminology-wg/blob/master/docs/status-tags.md"},"status tags used by ToIP"),". |\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"from"),"       | n | Date at which it was decided to establish this version. |\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"to"),"         | n | Date at which this version will expire (or has expired). |")))))))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Editor's note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"from")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"to")," dates have been included to (in future) enable one to refer to a specific version of the terminology that was valid at a particular date. This feature needs to be worked out, and will impact ",(0,i.kt)("a",{parentName:"p",href:"term-selection-criteria"},"term selection criteria"),", ",(0,i.kt)("a",{parentName:"p",href:"tev2-spec-term-ref"},"term ref specs"),", and various tools."))))}c.isMDXComponent=!0}}]);