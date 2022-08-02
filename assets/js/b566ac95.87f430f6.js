"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[5016],{5162:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),i=a(6010),r="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,l),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(3117),i=a(7294),r=a(6010),l=a(2389),o=a(7392),s=a(7094),p=a(2466),d="tabList__CuJ",m="tabItem_LNqP";function c(e){var t,a,l=e.lazy,c=e.block,k=e.defaultValue,h=e.values,f=e.groupId,u=e.className,N=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:N.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.l)(g,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===k?k:null!=(t=null!=k?k:null==(a=N.find((function(e){return e.props.default})))?void 0:a.props.value)?t:N[0].props.value;if(null!==v&&!g.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,s.U)(),C=b.tabGroupChoices,T=b.setTabGroupChoices,w=(0,i.useState)(v),x=w[0],M=w[1],S=[],I=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var A=C[f];null!=A&&A!==x&&g.some((function(e){return e.value===A}))&&M(A)}var E=function(e){var t=e.currentTarget,a=S.indexOf(t),n=g[a].value;n!==x&&(I(t),M(n),null!=f&&T(f,String(n)))},R=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,i=S.indexOf(e.currentTarget)+1;a=null!=(n=S[i])?n:S[0];break;case"ArrowLeft":var r,l=S.indexOf(e.currentTarget)-1;a=null!=(r=S[l])?r:S[S.length-1]}null==(t=a)||t.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",d)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},u)},g.map((function(e){var t=e.value,a=e.label,l=e.attributes;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return S.push(e)},onKeyDown:R,onFocus:E,onClick:E},l,{className:(0,r.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),l?(0,i.cloneElement)(N.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},N.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function k(e){var t=(0,l.Z)();return i.createElement(c,(0,n.Z)({key:String(t)},e))}},4802:function(e,t,a){a.r(t),a.d(t,{Mark:function(){return h},assets:function(){return c},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return k}});var n=a(3117),i=a(102),r=(a(7294),a(3905)),l=(a(4996),a(5488)),o=a(5162),s=["components"],p={id:"ict",title:"Integrity Checker Tool (ICT)",sidebar_label:"Integrity Checker",displayed_sidebar:"tev2SideBar",scopetag:"tev2",date:20220421},d=void 0,m={unversionedId:"tev2/toolbox-specs/ict",id:"tev2/toolbox-specs/ict",title:"Integrity Checker Tool (ICT)",description:"text to mark",source:"@site/docs/tev2/toolbox-specs/ict.md",sourceDirName:"tev2/toolbox-specs",slug:"/tev2/toolbox-specs/ict",permalink:"/framework/docs/tev2/toolbox-specs/ict",draft:!1,editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/tev2/toolbox-specs/ict.md",tags:[],version:"current",lastUpdatedBy:"RieksJ",lastUpdatedAt:1659358059,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{id:"ict",title:"Integrity Checker Tool (ICT)",sidebar_label:"Integrity Checker",displayed_sidebar:"tev2SideBar",scopetag:"tev2",date:20220421},sidebar:"tev2SideBar",previous:{title:"HR Glossary Generation",permalink:"/framework/docs/tev2/toolbox-specs/hrgt"},next:{title:"MR Dictionary Generation",permalink:"/framework/docs/tev2/toolbox-specs/mrdt"}},c={},k=[{value:"Calling the Tool",id:"calling-the-tool",level:2},{value:"Parameters (Command-line arguments)",id:"parameters-command-line-arguments",level:3},{value:"Integrity Checks",id:"integrity-checks",level:2},{value:"SAF integrity",id:"saf-integrity",level:3},{value:"MRG integrity",id:"mrg-integrity",level:3},{value:"Header fields for <code>termtype: relation</code>",id:"header-fields-for-termtype-relation",level:3},{value:"Curated Text integrity",id:"curated-text-integrity",level:3},{value:"Concepts",id:"concepts",level:4},{value:"Patterns",id:"patterns",level:4},{value:"Processing, Errors and Warnings",id:"processing-errors-and-warnings",level:2},{value:"Deploying the Tool",id:"deploying-the-tool",level:2},{value:"Discussion Notes",id:"discussion-notes",level:2}],h=function(e){var t=e.children;return(0,r.kt)("span",{style:{color:"black",backgroundColor:"yellow",padding:"0.2rem",borderRadius:"2px"}},t)},f={toc:k,Mark:h};function u(e){var t=e.components,a=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,r.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Integrity Checker Tool (",(0,r.kt)("a",{parentName:"strong",href:"@"},"ICT"),")")," tests the integrity of (a selection of) the files that are ",(0,r.kt)("a",{parentName:"p",href:"@"},"curated")," within a particular ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope"),", i.e. the ",(0,r.kt)("a",{parentName:"p",href:"@"},"SAF"),", the ",(0,r.kt)("a",{parentName:"p",href:"@"},"MRGs"),", and ",(0,r.kt)("a",{parentName:"p",href:"@"},"curated files"),". The integrity checking of other files, e.g. ",(0,r.kt)("a",{parentName:"p",href:"@"},"formatted files"),", such as ",(0,r.kt)("a",{parentName:"p",href:"@"},"HRGs"),", is outside the scope of the ",(0,r.kt)("a",{parentName:"p",href:"@"},"ICT"),"."),(0,r.kt)("p",null,"In order for the ",(0,r.kt)("a",{parentName:"p",href:"@"},"ICT")," to be used optimally, it will assume for specific kinds of files that the integrity of other files is guaranteed, as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"When testing a ... ,"),(0,r.kt)("th",{parentName:"tr",align:"left"},"the integrity is assumed of"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"@"},"MRG")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"@"},"SAF"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"@"},"curated file")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"@"},"MRG")," and ",(0,r.kt)("a",{parentName:"td",href:"@"},"SAF"))))),(0,r.kt)("p",null,"The idea behind this is to enable ",(0,r.kt)("a",{parentName:"p",href:"@"},"curators")," to only test changes they have made rather than testing the entire set of files."),(0,r.kt)("admonition",{title:"Editor's Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"As the tool hasn't been made, and no practical experience has been gained, many of these optimizations may not work in the first versions.")),(0,r.kt)("admonition",{title:"Editor's Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"There's a lot of duplication in syntax specs. For example, the ",(0,r.kt)("a",{parentName:"p",href:"tev2-spec-saf"},"SAF spec")," and ",(0,r.kt)("a",{parentName:"p",href:"tev2-spec-mrg"},"MRG spec")," define the regex for various kinds of tags all over the place. It would be nice to have a way by which syntax can be specified in one location that is 'naturally predictable' so that both readers and maintainers of the documentation can easily find it. One way might be to include the syntax in a 'popover', i.e. that we define stuff with particular syntax as a ",(0,r.kt)("a",{parentName:"p",href:"@"},"concept")," and have the syntax be included in its ",(0,r.kt)("inlineCode",{parentName:"p"},"hoverText"),".")),(0,r.kt)("h2",{id:"calling-the-tool"},"Calling the Tool"),(0,r.kt)("p",null,"The behavior of the ",(0,r.kt)("a",{parentName:"p",href:"@"},"ICT")," can be configured per call e.g. by a configuration file and/or command-line parameters. Examples include specifications for:"),(0,r.kt)("p",null,"The command-line syntax is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ict [ <scopedir> ] <cmd> [ <paramlist> ]\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Where:"),(0,r.kt)("th",{parentName:"tr",align:"left"}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<scopedir>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(optional) specifies the ",(0,r.kt)("a",{parentName:"td",href:"@"},"scopedir")," of the ",(0,r.kt)("a",{parentName:"td",href:"@"},"scope")," whose integrity is to be tested. If ",(0,r.kt)("inlineCode",{parentName:"td"},"<scopedir>")," is omitted and a configuration file is used, its value is read from that file. If cases where ",(0,r.kt)("inlineCode",{parentName:"td"},"<scopedir>")," isn't specified, the current directory is assumed to be the ",(0,r.kt)("a",{parentName:"td",href:"@"},"scopedir"),".",(0,r.kt)("br",null),'In this document, we use the term "',(0,r.kt)("strong",{parentName:"td"},"this scopedir"),'" to refer to the value of ',(0,r.kt)("inlineCode",{parentName:"td"},"<scopedir>"),", and ",(0,r.kt)("strong",{parentName:"td"},"this scope"),'" to refer to the associated ',(0,r.kt)("a",{parentName:"td",href:"@"},"scope"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<cmd>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The following commands are valid:",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"-saf"),": check the integrity of the ",(0,r.kt)("a",{parentName:"td",href:"@"},"scope's")," ",(0,r.kt)("a",{parentName:"td",href:"@"},"SAF"),". It does not take any further parameters."),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"-mrg"),": check the integrity of (one of) the ",(0,r.kt)("a",{parentName:"td",href:"@"},"scope's")," ",(0,r.kt)("a",{parentName:"td",href:"@"},"MRG(s)"),". Additional parameters can be used, e.g. to specify a particular version of the ",(0,r.kt)("a",{parentName:"td",href:"@"},"MRG")," to be checked."),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"-txt"),": check the integrity of ",(0,r.kt)("em",{parentName:"td"},"this scope's")," ",(0,r.kt)("a",{parentName:"td",href:"@"},"curated files"),". Additional parameters can be used, e.g. to select a particular subset of these files."),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"-all"),": check all ",(0,r.kt)("a",{parentName:"td",href:"@"},"curated")," files within ",(0,r.kt)("em",{parentName:"td"},"this scope"),". Additional parameters may be used, e.g. to skip the checking of specific files.")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<paramlist>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"a list of parameters that provide further specifications for what the ",(0,r.kt)("a",{parentName:"td",href:"@"},"ICT")," should be checking.")))),(0,r.kt)("h3",{id:"parameters-command-line-arguments"},"Parameters (Command-line arguments)"),(0,r.kt)("admonition",{title:"Editor's Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The current set of parameters is just an initial suggestion. We'll need to see what will actually be needed in practice.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Legend"),(0,r.kt)("p",null,"The columns in the following table are defined as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Key"))," is the text to be used as a key."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Value"))," represents the kind of value to be used."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Req'd"))," specifies whether (",(0,r.kt)("inlineCode",{parentName:"li"},"Y"),") or not (",(0,r.kt)("inlineCode",{parentName:"li"},"n"),") the field is required to be present when the tool is being called. If (always) required, it MUST either be present in the configuration file, or as a command-line parameter."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Cmd"))," specifies a ",(0,r.kt)("inlineCode",{parentName:"li"},"<cmd>")," value: if the ",(0,r.kt)("a",{parentName:"li",href:"@"},"ICT")," is called with this ",(0,r.kt)("inlineCode",{parentName:"li"},"<cmd>"),", then this parameter will be used by the tool as described. A ",(0,r.kt)("inlineCode",{parentName:"li"},"*")," in this field indicates that this parameter can be used with every command."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Description"))," specifies the meaning of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Value")," field, and other things you may need to know, e.g. why it is needed, a required syntax, etc."))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Cmds"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"config")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<path>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"center"},"*"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path (including the filename) of the tool's (YAML) configuration file. This file contains the default key-value pairs to be used. Allowed keys (and the associated values) are documented in this table. Command-line arguments override key-value pairs specified in the configuration file. This parameter SHOULD NOT appear in the configuration file itself.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"scopedir")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<path>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,r.kt)("td",{parentName:"tr",align:"center"},"*"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path to the ",(0,r.kt)("a",{parentName:"td",href:"@"},"scopedir")," within which the tool is to operate, i.e.: ",(0,r.kt)("em",{parentName:"td"},"this scopedir"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"syntax")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"center"},"*"),(0,r.kt)("td",{parentName:"tr",align:"left"},"This argument has no value. If present, the syntax of all (YAML) fields in the file is checked against their specifications (see e.g. ",(0,r.kt)("a",{parentName:"td",href:"tev2-spec-saf"},"SAF specs"),", ",(0,r.kt)("a",{parentName:"td",href:"terminology-construction"},"terminology construction"),", ",(0,r.kt)("a",{parentName:"td",href:"tev2-spec-mrg"},"MRG specs"),", ",(0,r.kt)("a",{parentName:"td",href:"ctext"},"Curated Texts"),", ",(0,r.kt)("a",{parentName:"td",href:"tev2-spec-term-ref"},"term refs"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"vsntag")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<vsntag>")),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"-mrg")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"@"},"versiontag")," that is used to select the version of the ",(0,r.kt)("a",{parentName:"td",href:"@"},"MRG")," to be checked. The ",(0,r.kt)("a",{parentName:"td",href:"@"},"MRG")," that is selected will either have ",(0,r.kt)("inlineCode",{parentName:"td"},"<vsntag>")," as the contents of the field ",(0,r.kt)("inlineCode",{parentName:"td"},"terminology.vsntag"),", or as an element in the list of ",(0,r.kt)("inlineCode",{parentName:"td"},"terminology.alvsntags"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<id>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-txt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Text that ",(0,r.kt)("a",{parentName:"td",href:"@"},"identifies")," a particular ",(0,r.kt)("a",{parentName:"td",href:"@"},"curated file"),". The ",(0,r.kt)("a",{parentName:"td",href:"@"},"curated file"),", whose (front-matter) field ",(0,r.kt)("inlineCode",{parentName:"td"},"id")," matches this parameter, will be integrity-checked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"termtypes")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<termtypes>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-txt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of texts that serve to identify a specific kind of ",(0,r.kt)("a",{parentName:"td",href:"@"},"knowledge artifact"),", e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"concept"),", or ",(0,r.kt)("inlineCode",{parentName:"td"},"pattern"),". Every ",(0,r.kt)("a",{parentName:"td",href:"@"},"curated file"),", whose (front-matter) field ",(0,r.kt)("inlineCode",{parentName:"td"},"termtype")," appears as an element in the ",(0,r.kt)("inlineCode",{parentName:"td"},"<termtypes>")," list, will be integrity-checked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"grouptags")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<grouptags>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-txt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of ",(0,r.kt)("a",{parentName:"td",href:"@"},"grouptags"),". Every ",(0,r.kt)("a",{parentName:"td",href:"@"},"curated file"),", whose (front-matter) field ",(0,r.kt)("inlineCode",{parentName:"td"},"grouptags")," has an element that also appears as an element in the ",(0,r.kt)("inlineCode",{parentName:"td"},"<grouptags>")," list, will be integrity-checked.")))),(0,r.kt)("h2",{id:"integrity-checks"},"Integrity Checks"),(0,r.kt)("p",null,"The checks that are done on files depend on the kind of file that is being checked. This section lists the tests for the various kinds of files. Every file is assumed to be part of ",(0,r.kt)("em",{parentName:"p"},"this scope"),", and reside in the associated ",(0,r.kt)("a",{parentName:"p",href:"@"},"scopedir")," (i.e.: ",(0,r.kt)("em",{parentName:"p"},"this scopedir"),")."),(0,r.kt)("h3",{id:"saf-integrity"},"SAF integrity"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"@"},"SAF")," must be a file that contains valid YAML syntax."),(0,r.kt)("p",null,"The integrity of a ",(0,r.kt)("a",{parentName:"p",href:"@"},"SAF")," requires the following conditions to be satisfied for the key's in the ",(0,r.kt)("inlineCode",{parentName:"p"},"scope")," section:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scopedir")," must point to the directory in which the ",(0,r.kt)("a",{parentName:"li",href:"@"},"SAF")," is stored for public use (i.e. in this scopedir)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"curatedir"),', when appended to the value of "',(0,r.kt)("inlineCode",{parentName:"li"},"scopedir"),'/", must point to the directory that stores the ',(0,r.kt)("a",{parentName:"li",href:"@"},"curated files"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"glossarydir")," must point to an existing directory."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mrgfile"),' must be an existing file in directory "',(0,r.kt)("inlineCode",{parentName:"li"},"scopedir"),'/" (note that an empty ',(0,r.kt)("a",{parentName:"li",href:"@"},"terminology")," is still a ",(0,r.kt)("a",{parentName:"li",href:"@"},"terminology")," that can have an ",(0,r.kt)("a",{parentName:"li",href:"@"},"MRG"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hrgfile"),' must be an existing file in directory "',(0,r.kt)("inlineCode",{parentName:"li"},"scopedir"),'/" (note that an empty ',(0,r.kt)("a",{parentName:"li",href:"@"},"terminology")," is still a ",(0,r.kt)("a",{parentName:"li",href:"@"},"terminology")," that can have a ",(0,r.kt)("a",{parentName:"li",href:"@"},"HRG"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"license")," must be an existing file in the directory pointed to by ",(0,r.kt)("inlineCode",{parentName:"li"},"scopedir"),".")),(0,r.kt)("p",null,"The integrity of a ",(0,r.kt)("a",{parentName:"p",href:"@"},"SAF")," requires the following conditions to be satisfied for every element in the ",(0,r.kt)("inlineCode",{parentName:"p"},"scopes")," section:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scopetags")," must be a nonempty list of ",(0,r.kt)("a",{parentName:"li",href:"@"},"scopetags"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scopedir")," must be a valid URL, that points to an existing directory resource.")),(0,r.kt)("p",null,"The integrity of a ",(0,r.kt)("a",{parentName:"p",href:"@"},"SAF")," requires the following conditions to be satisfied for every element in the ",(0,r.kt)("inlineCode",{parentName:"p"},"versions")," section:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vsntag")," SHOULD not appear as an element in the ",(0,r.kt)("inlineCode",{parentName:"li"},"altvsntags")," field of this ",(0,r.kt)("inlineCode",{parentName:"li"},"version")," element, and it MUST NOT appear in the ",(0,r.kt)("inlineCode",{parentName:"li"},"vsntag")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"altvsntags")," fields of any other element in the ",(0,r.kt)("inlineCode",{parentName:"li"},"versions")," section."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"altvsntags")," must be a (possibly empty) list of ",(0,r.kt)("a",{parentName:"li",href:"@"},"versiontags"),", each of which SHOULD not appear in the ",(0,r.kt)("inlineCode",{parentName:"li"},"vsntag")," field of the element, and MUST NOT appear in the ",(0,r.kt)("inlineCode",{parentName:"li"},"vsntag")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"altvsntags")," fields of any other element in the ",(0,r.kt)("inlineCode",{parentName:"li"},"versions")," section."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"termselcrit")," must be a non-emptly list of ",(0,r.kt)("a",{parentName:"li",href:"@"},"term selection instructions"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status")," SHOULD be a non-empty field.")),(0,r.kt)("h3",{id:"mrg-integrity"},"MRG integrity"),(0,r.kt)("p",null,"The integrity checking for ",(0,r.kt)("a",{parentName:"p",href:"@"},"MRG")," files assumes that the integrity conditions of a ",(0,r.kt)("a",{parentName:"p",href:"@"},"SAF")," file are satisfied, and that the ",(0,r.kt)("a",{parentName:"p",href:"@"},"MRG")," file itself contains valid YAML syntax."),(0,r.kt)("p",null,"The integrity checking comprises every (group of) test(s) as specified in this sub-section."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"@"},"MRG")," MUST have sections named ",(0,r.kt)("inlineCode",{parentName:"p"},"terminology"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"scopes"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"entries"),"."),(0,r.kt)("p",null,"Integrity checks for the ",(0,r.kt)("inlineCode",{parentName:"p"},"terminology")," section include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scopedir")," must point to the directory in which the ",(0,r.kt)("a",{parentName:"li",href:"@"},"SAF")," is stored for public use (i.e. in this scopedir)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vsntag")," must be a ",(0,r.kt)("a",{parentName:"li",href:"@"},"versiontag")," that SHOULD not appear as an element in the ",(0,r.kt)("inlineCode",{parentName:"li"},"altvsntags")," field."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"altvsntags")," must be a (possibly empty) list of ",(0,r.kt)("a",{parentName:"li",href:"@"},"versiontags"),", none of which appear in the ",(0,r.kt)("inlineCode",{parentName:"li"},"vsntag")," field."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"license")," must be an existing file in the directory pointed to by ",(0,r.kt)("inlineCode",{parentName:"li"},"scopedir"),".")),(0,r.kt)("p",null,"Integrity checks for the ",(0,r.kt)("inlineCode",{parentName:"p"},"scopes")," section include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scopetags")," must be a nonempty list of ",(0,r.kt)("a",{parentName:"li",href:"@"},"scopetags"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scopedir")," must be a valid URL, that points to an existing directory resource other than the ",(0,r.kt)("a",{parentName:"li",href:"@"},"scopedir")," of the current ",(0,r.kt)("a",{parentName:"li",href:"@"},"scope"),". This directory MUST contain a ",(0,r.kt)("a",{parentName:"li",href:"@"},"SAF"),". ",(0,r.kt)(h,{mdxType:"Mark"},"Do we need an option to test the integrity of such ",(0,r.kt)("a",{parentName:"li",href:"@"},"SAFs"),"?"))),(0,r.kt)("p",null,"Integrity checks for the ",(0,r.kt)("inlineCode",{parentName:"p"},"entries")," section consist of one part that is generic for all entries, and another part that depends on the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"termtype")," field (so that checking of e.g. entries of type ",(0,r.kt)("inlineCode",{parentName:"p"},"concept")," and of type ",(0,r.kt)("inlineCode",{parentName:"p"},"pattern")," can have different checks.) The checks that every entry must pass include the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scopetag")," MUST also appear as the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"terminology.scopetag"),", or as an element in one of the ",(0,r.kt)("inlineCode",{parentName:"li"},"scopes.scopetags")," elements."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),' SHOULD be "',(0,r.kt)("inlineCode",{parentName:"li"},"termid"),'" or "concept-',(0,r.kt)("inlineCode",{parentName:"li"},"termid"),'" if ',(0,r.kt)("inlineCode",{parentName:"li"},"termtype")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"concept")," or unspecified; otherwise, ",(0,r.kt)("inlineCode",{parentName:"li"},"id"),' SHOULD be "',(0,r.kt)("inlineCode",{parentName:"li"},"termtype"),"-",(0,r.kt)("inlineCode",{parentName:"li"},"termid"),'".'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"termtype")," SHOULD be a value for which a ",(0,r.kt)("a",{parentName:"li",href:"@"},"ctext template")," exists. ",(0,r.kt)(h,{mdxType:"Mark"},"This needs further specification.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"grouptags")," MUST be a list of ",(0,r.kt)("a",{parentName:"li",href:"@"},"grouptag")," elements."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"license")," MUST be an existing file in the directory pointed to by ",(0,r.kt)("inlineCode",{parentName:"li"},"scopedir"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status")," SHOULD match an element in the list ",(0,r.kt)("inlineCode",{parentName:"li"},"scope.statuses")," of the ",(0,r.kt)("a",{parentName:"li",href:"@"},"SAF"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"locator"),", if specified, MUST have a readable resource (file) at ",(0,r.kt)("inlineCode",{parentName:"li"},"scopedir"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"curatedir"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"locator"),", where ",(0,r.kt)("inlineCode",{parentName:"li"},"scopedir")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"curatedir")," are specified in the ",(0,r.kt)("a",{parentName:"li",href:"@"},"SAF"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navurl"),", if specified, MUST return an HTML-resource when specified as the URL in a HTTP(S) request method ",(0,r.kt)("inlineCode",{parentName:"li"},"GET")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"HEAD"),".")),(0,r.kt)("p",null,"For specific kinds of ",(0,r.kt)("a",{parentName:"p",href:"@"},"MRG entries"),", the following additional constraints MUST be satisfied:"),(0,r.kt)(l.Z,{defaultValue:"concept",values:[{label:"Terms",value:"term"},{label:"Concepts",value:"concept"},{label:"Relations",value:"relation"},{label:"Mental Models",value:"pattern"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"concept",mdxType:"TabItem"},(0,r.kt)("br",null),(0,r.kt)("p",null,"The following constraints MUST hold for ",(0,r.kt)("a",{parentName:"p",href:"@"},"MRG entries")," of type ",(0,r.kt)("inlineCode",{parentName:"p"},"concept"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"if a ",(0,r.kt)("inlineCode",{parentName:"li"},"glossaryText")," contains a ",(0,r.kt)("a",{parentName:"li",href:"@"},"term ref"),", then the ",(0,r.kt)("a",{parentName:"li",href:"@"},"term ref")," SHOULD be resolvable ",(0,r.kt)(h,{mdxType:"Mark"},"(reference to the term-ref-integrity checks)"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hoverText")," MUST NOT contain any ",(0,r.kt)("a",{parentName:"li",href:"@"},"term ref"),", nor any other ",(0,r.kt)("a",{parentName:"li",href:"https://www.markdownguide.org/basic-syntax/#links"},"markdown links"),"."))),(0,r.kt)(o.Z,{value:"term",mdxType:"TabItem"},(0,r.kt)("br",null),(0,r.kt)("admonition",{title:"Editor's note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"As header fields for ",(0,r.kt)("inlineCode",{parentName:"p"},"term")," termtypes need to be discussed, we do not yet specify any constraints"))),(0,r.kt)(o.Z,{value:"relation",mdxType:"TabItem"},(0,r.kt)("br",null),(0,r.kt)("h3",{id:"header-fields-for-termtype-relation"},"Header fields for ",(0,r.kt)("inlineCode",{parentName:"h3"},"termtype: relation")),(0,r.kt)("admonition",{title:"Editor's note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"As ",(0,r.kt)("inlineCode",{parentName:"p"},"relation"),"s need to be discussed, we do not yet specify any constraints."))),(0,r.kt)(o.Z,{value:"pattern",mdxType:"TabItem"},(0,r.kt)("br",null),(0,r.kt)("admonition",{title:"Editor's note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"As ",(0,r.kt)("inlineCode",{parentName:"p"},"pattern"),"s need to be discussed, we do not yet specify any constraints.")))),(0,r.kt)("h3",{id:"curated-text-integrity"},"Curated Text integrity"),(0,r.kt)("p",null,"The integrity of any ",(0,r.kt)("a",{parentName:"p",href:"@"},"curated text")," file requires the integrity conditions of the ",(0,r.kt)("a",{parentName:"p",href:"@"},"MRG")," file to be satisfied, as well as the following conditions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(h,{mdxType:"Mark"},"TBD"))),(0,r.kt)("h4",{id:"concepts"},"Concepts"),(0,r.kt)("p",null,"The integrity of any ",(0,r.kt)("a",{parentName:"p",href:"@"},"curated text")," file that has ",(0,r.kt)("inlineCode",{parentName:"p"},"termtype: concept")," requires the integrity conditions of a ",(0,r.kt)("a",{parentName:"p",href:"@"},"curated text")," file to be satisfied, as well as the following conditions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(h,{mdxType:"Mark"},"TBD"))),(0,r.kt)("h4",{id:"patterns"},"Patterns"),(0,r.kt)("p",null,"The integrity of any ",(0,r.kt)("a",{parentName:"p",href:"@"},"curated text")," file that has ",(0,r.kt)("inlineCode",{parentName:"p"},"termtype: concept")," requires the integrity conditions of a ",(0,r.kt)("a",{parentName:"p",href:"@"},"curated text")," file to be satisfied, as well as the following conditions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(h,{mdxType:"Mark"},"TBD"))),(0,r.kt)("h2",{id:"processing-errors-and-warnings"},"Processing, Errors and Warnings"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"@"},"ICT")," starts by reading its command-line and configuration file. If the command-line has a key that is also found in the configuration file, the command-line key-value pair takes precedence. The resulting set of key-value pairs is tested for proper syntax and validity. Every improper syntax and every invalidity found will be logged."),(0,r.kt)("p",null,"Then, the ",(0,r.kt)("a",{parentName:"p",href:"@"},"ICT")," ",(0,r.kt)(h,{mdxType:"Mark"},"TBD")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"@"},"ICT")," logs every error- and/or warning condition that it comes across while processing its configuration file, commandline parameters, and input files, in a way that helps tool-operators and document authors to identify and fix such conditions."),(0,r.kt)("h2",{id:"deploying-the-tool"},"Deploying the Tool"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"@"},"ICT")," comes with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and author/modify CI-pipes to use that deployment."),(0,r.kt)("h2",{id:"discussion-notes"},"Discussion Notes"),(0,r.kt)("p",null,"This section lists the topics that may need further discission"))}u.isMDXComponent=!0}}]);