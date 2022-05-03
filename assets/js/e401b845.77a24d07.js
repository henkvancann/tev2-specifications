"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[8214],{4142:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),d=(a(4996),["components"]),o={id:"tev2-spec-ctext-header",title:"Curated Text - Header",sidebar_label:"Header Contents",hide_table_of_contents:!0,scopetag:"tev2",date:20220303},l=void 0,s={unversionedId:"tev2/tev2-spec-ctext-header",id:"tev2/tev2-spec-ctext-header",title:"Curated Text - Header",description:"The entire section on Terminology Engine v 2 (TEv2) is still under construction",source:"@site/docs/tev2/tev2-spec-ctext-header.md",sourceDirName:"tev2",slug:"/tev2/tev2-spec-ctext-header",permalink:"/framework/docs/tev2/tev2-spec-ctext-header",editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/tev2/tev2-spec-ctext-header.md",tags:[],version:"current",frontMatter:{id:"tev2-spec-ctext-header",title:"Curated Text - Header",sidebar_label:"Header Contents",hide_table_of_contents:!0,scopetag:"tev2",date:20220303},sidebar:"tev2SideBar",previous:{title:"Curated Texts",permalink:"/framework/docs/tev2/tev2-spec-ctext"},next:{title:"Body Contents",permalink:"/framework/docs/tev2/tev2-spec-ctext-body"}},p={},m=[],c={toc:m};function h(t){var e=t.components,a=(0,r.Z)(t,d);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction"))),(0,i.kt)("p",null,"This document specifies what the ","[header@]"," of a ","[curated text@]"," looks like. The ","[header@]"," is a set of key-value pairs that contain meta data about the ","[curated text@]"," and/or data that ",(0,i.kt)("em",{parentName:"p"},"could")," also have been part of the ","[body@]",", but is so small that it doesn't warrant to have a dedicated section for it."),(0,i.kt)("p",null,"The (",(0,i.kt)("a",{parentName:"p",href:"https://yaml.org/spec/1.2.2/"},"yaml"),") header starts at the top of the ","[curated text@]",' with three dashes ("',(0,i.kt)("inlineCode",{parentName:"p"},"---"),'") to signal it is followed by directives. This is followed by a collection of key-value mappings. The end of the header is again three dashes ("',(0,i.kt)("inlineCode",{parentName:"p"},"---"),'") to signal the change back to document content (the ',"[body@]","). Here is an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'---\n# Multi-purpose heading entries (serve both TEv2 and e.g. Docusaurus)\nid: concept-curate\n# Docusaurus specific heading entries (see https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter for an overview)\ntitle: "Curators (of a Scope)"\nsidebar_label: "Scope Curators"\n# TEv2 specific heading entries, e.g.:\ntermtype: concept\ntermid: curate\ngrouptags: "terminology, management"\ndate: 20220222\nsymphrase: curate, curates, curated, curation, curating\nstatus: proposed\ntermname: curate\nglossaryText: To evolve [concept](@ctwg) and [term](@ctwg) data in the direction of greater quality and richer content within a specific [scope](@ctwg).\nhoverText: Curate: to evolve concept and term data in the direction of greater quality and richer content within a specific scope.\n---\n\n## Description \x3c!-- this is where the body starts --\x3e\nCuration is to evolve [concept@] and [term@] data in the direction of ... (etc.)\n')),(0,i.kt)("p",null,"Note that header fields may serve multiple purposes. One such purpose is that it provides data to the TEv2 tools. However, since ","[curated texts@]"," may also need to be processable by other tools, such as ",(0,i.kt)("a",{parentName:"p",href:"https://pages.github.com/"},"github pages")," or ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/docs-introduction"},"Docusaurus"),", such tools may also use such header fields. The example above shows a header that has fields that serve both TEv2 and Docusaurus. Comments (text that starts with the ",(0,i.kt)("inlineCode",{parentName:"p"},"#"),"-character) in the example indicate the purpose(s) for which the subsequent fields are being used."),(0,i.kt)("p",null,"For TEv2 purposes, the following fields are defined. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Req'd")," column specifies whether (",(0,i.kt)("inlineCode",{parentName:"p"},"Y"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"Y*"),") or not (",(0,i.kt)("inlineCode",{parentName:"p"},"n"),") the field is required to be present in the header. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Y*")," signifies that currently, the field is required, but that we envisage it to become optional when tooling becomes more mature, and will be able to automatically create the specified default value."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y*"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"termtype"),"-",(0,i.kt)("inlineCode",{parentName:"td"},"termid")),(0,i.kt)("td",{parentName:"tr",align:null},"Text that ",(0,i.kt)("a",{parentName:"td",href:"identify@essiflab"},"identifies")," the ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"term")," within the context of the ","[MRG@]",", and can also be used as an ",(0,i.kt)("inlineCode",{parentName:"td"},"id")," in a ",(0,i.kt)("a",{parentName:"td",href:"term-ref@ctwg"},"term ref"),". If the ",(0,i.kt)("inlineCode",{parentName:"td"},"termtype")," part is specified, it MUST match the value of the ",(0,i.kt)("inlineCode",{parentName:"td"},"termtype")," field. If the ",(0,i.kt)("inlineCode",{parentName:"td"},"termtype")," part is not specified, it defaults to ",(0,i.kt)("inlineCode",{parentName:"td"},"concept-"),". If the ",(0,i.kt)("inlineCode",{parentName:"td"},"termid")," part is specified, it MUST match teh value of the ",(0,i.kt)("inlineCode",{parentName:"td"},"termid")," field. If the ",(0,i.kt)("inlineCode",{parentName:"td"},"termid")," part is not specified it defaults to the value of the ",(0,i.kt)("inlineCode",{parentName:"td"},"termid")," field.",(0,i.kt)("br",null),"Must satisfy PCRE regex ",(0,i.kt)("inlineCode",{parentName:"td"},"[a-z0-9_-]+"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"termtype")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y*"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"concept")),(0,i.kt)("td",{parentName:"tr",align:null},"Text that identifies the kind of entity that the ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"term")," refers to. Typical values would be ",(0,i.kt)("inlineCode",{parentName:"td"},"concept"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"relation"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"pattern")," (or ",(0,i.kt)("inlineCode",{parentName:"td"},"mental-model"),"), ",(0,i.kt)("inlineCode",{parentName:"td"},"term")," (or ",(0,i.kt)("inlineCode",{parentName:"td"},"alias"),").",(0,i.kt)("br",null),"Must satisfy PCRE regex ",(0,i.kt)("inlineCode",{parentName:"td"},"[a-z0-9_-]+"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"termid")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"There is no default. Not specifying ",(0,i.kt)("inlineCode",{parentName:"td"},"termid")," is an error."),(0,i.kt)("td",{parentName:"tr",align:null},"Text that identifies the specific entity of the ",(0,i.kt)("inlineCode",{parentName:"td"},"termtype")," field.",(0,i.kt)("br",null),"Must satisfy PCRE regex ",(0,i.kt)("inlineCode",{parentName:"td"},"[a-z0-9_-]+"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"grouptags")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},"(No default)"),(0,i.kt)("td",{parentName:"tr",align:null},"Comma-separated list of ",(0,i.kt)("a",{parentName:"td",href:"tag@ctwg"},"grouptags"),", each of which identifies a group of ",(0,i.kt)("a",{parentName:"td",href:"term@ctwg"},"terms")," to which this ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"term")," belongs.",(0,i.kt)("br",null),"Must satisfy PCRE regex ",(0,i.kt)("inlineCode",{parentName:"td"},"([a-z0-9_-]+)(?:,\\s*([a-z0-9_-]+))*"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"date")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},"(No default)"),(0,i.kt)("td",{parentName:"tr",align:null},"Date of the last update of the file that contains this header, in the format ",(0,i.kt)("inlineCode",{parentName:"td"},"<YYYY><MM><DD>"),". Must satisfy PCRE regex ",(0,i.kt)("inlineCode",{parentName:"td"},"\\d{8}"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"termvsn")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},"(No default)"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that identifies the version of the ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"term")," itself (not to be confused with the version of a ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"terminology")," that may contain that ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"term"),").",(0,i.kt)("br",null),"Must satisfy PCRE regex ",(0,i.kt)("inlineCode",{parentName:"td"},"[a-z0-9_-]+"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"commit")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},"(No default)"),(0,i.kt)("td",{parentName:"tr",align:null},"The latest (git) commit hash of the ",(0,i.kt)("a",{parentName:"td",href:"term@ctwg"},"term's")," ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"definition"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"symphrase")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},"(No default)"),(0,i.kt)("td",{parentName:"tr",align:null},"Comma-separated list of texts that the ",(0,i.kt)("a",{parentName:"td",href:"toip-toolbox-trrt"},"TRRT")," can use to convert the ",(0,i.kt)("inlineCode",{parentName:"td"},"show text")," parts of ","[term refs@]"," into ",(0,i.kt)("inlineCode",{parentName:"td"},"id"),"s, for the purpose of accommodating plural forms (for nouns) or conjugate forms (for verbs).",(0,i.kt)("br",null),"Must satisfy PCRE regex ",(0,i.kt)("inlineCode",{parentName:"td"},"([a-z0-9_-{}]+)(?:,\\s*([a-z0-9_-{}]+))*"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"status")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"proposed")),(0,i.kt)("td",{parentName:"tr",align:null},"Text that identifies the ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/trustoverip/concepts-and-terminology-wg/blob/master/docs/status-tags.md"},"status of the term"),". Allowed values are: ",(0,i.kt)("inlineCode",{parentName:"td"},"proposed"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"approved")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"deprecated"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"termname")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"(No default)"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that is used for rendering the ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"term")," in a human readable document. It typically contains human readable characters. It may include uppercase and lowercase characters, spaces, etc. (which are not allowed in the ",(0,i.kt)("inlineCode",{parentName:"td"},"termid")," field).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"synonyms")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},"(No default)"),(0,i.kt)("td",{parentName:"tr",align:null},"List of texts that that may alternatively be used for rendering the ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"term")," in a human readable document. It typically contains human readable characters. It may include uppercase and lowercase characters, spaces, etc. (which are not allowed in the ",(0,i.kt)("inlineCode",{parentName:"td"},"termid")," field).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"glossaryText")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"(No default)"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that can be used as the (raw) contents for the entry of this ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"term")," in a human readable ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"glossary"),". Note that this text SHOULD be allowed to contain ",(0,i.kt)("a",{parentName:"td",href:"term-ref@ctwg"},"term refs"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"hoverText")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},"(No default)"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that can be used as the contents of a popup that shows as the ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"term")," is rendered in a web browser and the user hovers over the ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"term")," with its mouse.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"url")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},"(No default)"),(0,i.kt)("td",{parentName:"tr",align:null},"URL of a web-page that contains human readable text that typically has further explanations of the ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"term"),", and has sections that can be addressed by ",(0,i.kt)("inlineCode",{parentName:"td"},"url#heading-id")," where ",(0,i.kt)("inlineCode",{parentName:"td"},"heading-id")," is as specified for ",(0,i.kt)("a",{parentName:"td",href:"term-ref@ctwg"},"term refs"),".")))))}h.isMDXComponent=!0}}]);