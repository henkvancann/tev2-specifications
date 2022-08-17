"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[328],{5162:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(6010),i="tabItem_Ymn6";function s(e){var t=e.children,a=e.hidden,s=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,s),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(3117),r=a(7294),i=a(6010),s=a(2389),o=a(7392),l=a(7094),u=a(2466),d="tabList__CuJ",c="tabItem_LNqP";function p(e){var t,a,s=e.lazy,p=e.block,h=e.defaultValue,m=e.values,f=e.groupId,k=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.l)(N,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===h?h:null!=(t=null!=h?h:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:g[0].props.value;if(null!==y&&!N.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,l.U)(),w=v.tabGroupChoices,x=v.setTabGroupChoices,T=(0,r.useState)(y),C=T[0],E=T[1],D=[],I=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var A=w[f];null!=A&&A!==C&&N.some((function(e){return e.value===A}))&&E(A)}var _=function(e){var t=e.currentTarget,a=D.indexOf(t),n=N[a].value;n!==C&&(I(t),E(n),null!=f&&x(f,String(n)))},H=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=D.indexOf(e.currentTarget)+1;a=null!=(n=D[r])?n:D[0];break;case"ArrowLeft":var i,s=D.indexOf(e.currentTarget)-1;a=null!=(i=D[s])?i:D[D.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},k)},N.map((function(e){var t=e.value,a=e.label,s=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return D.push(e)},onKeyDown:H,onFocus:_,onClick:_},s,{className:(0,i.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),s?(0,r.cloneElement)(g.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function h(e){var t=(0,s.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},4386:function(e,t,a){a.r(t),a.d(t,{Mark:function(){return p},assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),s=(a(4996),a(5488),a(5162),["components"]),o={id:"ctext-use-case",sidebar_label:"Use Cases",scopetag:"tev2",date:20220303},l=void 0,u={unversionedId:"tev2/spec-ctexts/ctext-use-case",id:"tev2/spec-ctexts/ctext-use-case",title:"ctext-use-case",description:"text to mark",source:"@site/docs/tev2/spec-ctexts/23-ctext-use-case.md",sourceDirName:"tev2/spec-ctexts",slug:"/tev2/spec-ctexts/ctext-use-case",permalink:"/framework/docs/tev2/spec-ctexts/ctext-use-case",draft:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/tev2/spec-ctexts/23-ctext-use-case.md",tags:[],version:"current",lastUpdatedBy:"RieksJ",lastUpdatedAt:1660742993,formattedLastUpdatedAt:"Aug 17, 2022",sidebarPosition:23,frontMatter:{id:"ctext-use-case",sidebar_label:"Use Cases",scopetag:"tev2",date:20220303}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Header",id:"header",level:2},{value:"Body",id:"body",level:2}],p=function(e){var t=e.children;return(0,i.kt)("span",{style:{color:"black",backgroundColor:"yellow",padding:"0.2rem",borderRadius:"2px"}},t)},h={toc:c,Mark:p};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"curated-texts-of-type-use-case"},"Curated Texts of type ",(0,i.kt)("inlineCode",{parentName:"h1"},"use-case")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,i.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,i.kt)("p",null,"This document specifies what specifics of ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated texts")," that describe ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifacts")," of type ",(0,i.kt)("inlineCode",{parentName:"p"},"use-case"),". The reader is assumed to be familiar with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/spec-ctexts/ctext-spec"},"generic structure of a curated text"),"."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"@"},"Use-case")," is a description of a situation that illustrates the needs (or specifies requirements) for having something, e.g. capabilities, or things that enable one to do something. A use-case describes a situation in which the use of something (e.g. a ",(0,i.kt)("a",{parentName:"p",href:"@"},"concept"),", ",(0,i.kt)("a",{parentName:"p",href:"@"},"pattern"),", software system, etc.) is beneficial."),(0,i.kt)("p",null,"A good description helps ",(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," to illustrate the benefits of ",(0,i.kt)("a",{parentName:"p",href:"@"},"concepts")," and ",(0,i.kt)("a",{parentName:"p",href:"@"},"patterns"),", test ",(0,i.kt)("a",{parentName:"p",href:"@"},"definitions"),", and identify ",(0,i.kt)("a",{parentName:"p",href:"@essif-lab"},"risks"),". In short, it augments one understanding."),(0,i.kt)("h2",{id:"header"},"Header"),(0,i.kt)("p",null," In this section, we describe the header fields that are specific for ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifacts")," of type ",(0,i.kt)("inlineCode",{parentName:"p"},"use-case"),":"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Legend"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Name"))," contains the field name;"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Req'd"))," specifies whether (",(0,i.kt)("inlineCode",{parentName:"li"},"Y"),") or not (",(0,i.kt)("inlineCode",{parentName:"li"},"n"),") the field is required to be present as a header field."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Description"))," specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"term")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that is the name of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"use-case")," in (human readable) texts. It is typically used to represent the ",(0,i.kt)("a",{parentName:"td",href:"@"},"use-case")," itself, but also to represent arbitrary/unspecified instances thereof. This text will show as an entry in the ",(0,i.kt)("a",{parentName:"td",href:"@"},"HRG"),".",(0,i.kt)("br",null),"Examples: ",'["Handling a contribution", "Glossary generation"]')))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example of a complete Use-case Header"),(0,i.kt)(p,{mdxType:"Mark"},"Revise the YAML code below"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"---\n"))),(0,i.kt)("h2",{id:"body"},"Body"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/"},"markdown")," body consists of one or more sections that each have a ",(0,i.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#headings"},"heading"),", optionally followed by a ",(0,i.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/extended-syntax/#heading-ids"},"heading id"),". We provide suggestions for a variety of sections, that we think help ",(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," get a good understanding of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"concept")," that is described."),(0,i.kt)("p",null,"We have placed the suggestions in an order that we think makes for good reading. However, if you think otherwise, you are free to change this order, leave out sections, and/or add your own."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Legend (and suggestions for using your own headings)"),(0,i.kt)("p",null,"The body is expected to consist of sections of text, for which we provide suggestions for the ",(0,i.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#headings"},"section headings"),". A section consists of a header and further text, as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"## <Heading> {#<trait>}\n\nfurther text goes here.\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"trait")," is important, as authors can use it in a ",(0,i.kt)("a",{parentName:"p",href:"@"},"term ref")," to refer to this particular section. Therefore, you SHOULD stick to the suggestions for the ",(0,i.kt)("inlineCode",{parentName:"p"},"trait")," if you write such a section."),(0,i.kt)("p",null,"The table that contains the suggestions has the following columns:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Heading")," shows a name we suggest for a particular section. If you use this suggestion, you do not need to also provide the ",(0,i.kt)("inlineCode",{parentName:"li"},"Heading ID")," (because it is automatically arranged for)."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"trait")," specifies the text to be used as a ",(0,i.kt)("a",{parentName:"li",href:"https://www.markdownguide.org/extended-syntax/#heading-id"},"heading id")," in the case that the author of the section decides to use a different heading as the one that is suggested."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Description")," describes the kinds of content you may want to put in the section, and what ",(0,i.kt)("a",{parentName:"li",href:"@"},"readers")," expect that they would know, or could do after having read the text."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Heading"),(0,i.kt)("th",{parentName:"tr",align:null},"trait"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Purpose"),(0,i.kt)("td",{parentName:"tr",align:null},"purpose"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that describes why the ",(0,i.kt)("a",{parentName:"td",href:"@"},"use-case")," is needed. What purposes does it serve? What can you do with it that you cannot do (as well) without it? What ",(0,i.kt)("a",{parentName:"td",href:"@essif-lab"},"objectives")," does it help realize? Why is this ",(0,i.kt)("a",{parentName:"td",href:"@"},"use-case")," relevant within its scope of definition?")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Introduction"),(0,i.kt)("td",{parentName:"tr",align:null},"introduction"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that gently introduces the ",(0,i.kt)("a",{parentName:"td",href:"@"},"use-case")," and its context to the ",(0,i.kt)("a",{parentName:"td",href:"@"},"reader")," - preferably in casual terms. You can state whatever you think your audience needs to keep on reading and, ultimately, change their minds.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Informal Description"),(0,i.kt)("td",{parentName:"tr",align:null},"informal-description"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that describes the ",(0,i.kt)("a",{parentName:"td",href:"@"},"use-case")," in a colloquial way, meant to ensure the ",(0,i.kt)("a",{parentName:"td",href:"@"},"reader")," will not face any surprises if she continues to read to the more formal parts.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Formal Description"),(0,i.kt)("td",{parentName:"tr",align:null},"formal-description"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that describes the ",(0,i.kt)("a",{parentName:"td",href:"@"},"use-case")," in a formal way, possibly with a figure and formal notations. This text would enable people to create formal models, e.g. in RDFS, OWL or other semantic languages.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Notes"),(0,i.kt)("td",{parentName:"tr",align:null},"notes"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that may be of importance to ",(0,i.kt)("a",{parentName:"td",href:"@"},"readers"),", but that doesn't fit anywhere else.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"References"),(0,i.kt)("td",{parentName:"tr",align:null},"references"),(0,i.kt)("td",{parentName:"tr",align:null},"List references to other texts, standards, (scientific) articles, applicable legislation, git repo's, etc., as appropriate.")))))}m.isMDXComponent=!0}}]);