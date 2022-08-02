"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[1033],{6585:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var r=a(3117),n=a(102),i=(a(7294),a(3905)),p=(a(4996),["components"]),o={id:"ctext",title:"Curated Texts",sidebar_label:"Curated Texts",hide_table_of_contents:!0,scopetag:"tev2",date:20220713},d=void 0,s={unversionedId:"tev2/ctext",id:"tev2/ctext",title:"Curated Texts",description:"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",source:"@site/docs/tev2/ctext.md",sourceDirName:"tev2",slug:"/tev2/ctext",permalink:"/framework/docs/tev2/ctext",draft:!1,editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/tev2/ctext.md",tags:[],version:"current",lastUpdatedBy:"RieksJ",lastUpdatedAt:1659358059,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{id:"ctext",title:"Curated Texts",sidebar_label:"Curated Texts",hide_table_of_contents:!0,scopetag:"tev2",date:20220713},sidebar:"tev2SideBar",previous:{title:"Terminology Construction",permalink:"/framework/docs/tev2/terminology-construction"},next:{title:"Concepts",permalink:"/framework/docs/tev2/ctext-concept"}},l={},m=[{value:"Context",id:"context",level:2},{value:"Structure",id:"structure",level:2},{value:"Generic Header Fields",id:"generic-header-fields",level:2},{value:"Type-specific Header Fields",id:"type-specific-header-fields",level:2}],h={toc:m};function c(e){var t=e.components,a=(0,n.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,i.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"@"},"curated text"))," is a text that documents a ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifact")," (e.g., a ",(0,i.kt)("a",{parentName:"p",href:"@"},"concept"),", ",(0,i.kt)("a",{parentName:"p",href:"@"},"pattern"),", or such) of a specific ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope")," in a format that is ",(0,i.kt)("a",{parentName:"p",href:"@"},"governed")," by the ",(0,i.kt)("a",{parentName:"p",href:"@"},"curators")," of that ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),". The documentation may contain descriptions, ",(0,i.kt)("a",{parentName:"p",href:"@"},"definitions"),", examples (",(0,i.kt)("a",{parentName:"p",href:"@"},"use-cases"),"), etc., and be targeted at various audiences and various maturity levels."),(0,i.kt)("p",null,"Every ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text")," is associated with an ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," that ",(0,i.kt)("a",{parentName:"p",href:"@"},"identifies")," the ",(0,i.kt)("a",{parentName:"p",href:"curated-file@"},"file")," that contains the ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text"),", and by implication, the ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text")," itself. Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," of a ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text")," is not a ",(0,i.kt)("a",{parentName:"p",href:"@"},"term")," (that represents a ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifact"),"). We want to accommodate for ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms")," that represents ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifacts"),", e.g. ",(0,i.kt)("a",{parentName:"p",href:"@"},"roles"),", or ",(0,i.kt)("a",{parentName:"p",href:"@"},"tags")," the documentation of which is better positioned in (a specific part of) a ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text")," that documents another ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifact"),"."),(0,i.kt)("p",null,"People that actively contribute to the creation and maintenance of ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated texts")," within a specific ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),", including those that do the actual ",(0,i.kt)("a",{parentName:"p",href:"@"},"curation")," of such ",(0,i.kt)("a",{parentName:"p",href:"curated-text@"},"texts")," - the ",(0,i.kt)("a",{parentName:"p",href:"@"},"curators")," - form what we call the ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms community")," of that ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),". They are the ones that provide contents for ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated texts"),", and get to decide when it is published, etc."),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text")," resides in a file which we call a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"@"},"curated file")),". All ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated files")," of a ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope")," are expected to live in (a subdirectory of) its ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope directory"),", as specified in the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope's")," administration file ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF"),". ",(0,i.kt)("a",{parentName:"p",href:"@"},"Curated files")," are expected to be processable using the ",(0,i.kt)("a",{parentName:"p",href:"tev2-toolbox"},"terminology tools"),". However, ",(0,i.kt)("a",{parentName:"p",href:"@"},"curators")," may decide that they are also to be processable by other, third party tools, e.g., for the purpose of making rendered versions of such files available to some public. Examples of such tools include ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs"},"Docusaurus v2"),", or ",(0,i.kt)("a",{parentName:"p",href:"https://pages.github.com/"},"github pages"),"."),(0,i.kt)("h2",{id:"structure"},"Structure"),(0,i.kt)("p",null,"Every ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text")," consists of two parts: a (",(0,i.kt)("a",{parentName:"p",href:"https://yaml.org/spec/1.2.2/"},"YAML"),") ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"@"},"header")),", and a (",(0,i.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/"},"markdown"),") ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"@"},"body")),". The ",(0,i.kt)("a",{parentName:"p",href:"@"},"header")," is a set of key-value pairs that contain meta data about the ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text")," and/or data that could also have been part of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"body"),", but is so small that it doesn't warrant to have a dedicated section for it. Here is an example"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Compact example"),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'---\nid: "concept-curated-text"\ntitle: "Curated Texts"\ntermtype: "concept"\ntermid: "curated-text"\ngrouptags: [ tev2, management ]\n---\n\nA curated text starts with three dashes `---`.\nThis indicates the start of its (YAML) header.\nTypically, the header consists of a sequence of key-value pairs.\nThe header is terminated with onother three dashes and a new line.\n\nThe body of the curated text starts behind the header block.\nIt is typically markdown, but other constructs may be inserted\nthat contribute to the rendering of these texts in a (static) website.\nAn example of this is [MDX](https://mdxjs.com/).\nA discussion on these other constructs is outside the scope of this document.\n')))),(0,i.kt)("p",null,"While part of the structure of a ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text")," is common for all of them, another part of it depends on the kind of ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifact")," that it describes: obviously, a ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text")," that defines a ",(0,i.kt)("a",{parentName:"p",href:"@"},"concept")," is quite different from one that describes a ",(0,i.kt)("a",{parentName:"p",href:"@"},"mental model"),", or a ",(0,i.kt)("a",{parentName:"p",href:"@"},"use-case"),"."),(0,i.kt)("p",null,"TEv2 assumes that the ",(0,i.kt)("a",{parentName:"p",href:"@"},"header")," of a ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text")," contains a ",(0,i.kt)("strong",{parentName:"p"},"generic part")," that is always there, regardless of the kind of ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifact")," that the ",(0,i.kt)("a",{parentName:"p",href:"curated-text@"},"text")," documents, and a ",(0,i.kt)("strong",{parentName:"p"},"type specific part")," that contains header fields that are specific for the kind of ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifact")," that the ",(0,i.kt)("a",{parentName:"p",href:"curated-text@"},"text")," documents."),(0,i.kt)("h2",{id:"generic-header-fields"},"Generic Header Fields"),(0,i.kt)("p",null,"This section describes the ",(0,i.kt)("strong",{parentName:"p"},"generic header fields")," of a ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text"),", i.e. the fields that must, or may appear in the ",(0,i.kt)("a",{parentName:"p",href:"@"},"header")," of every ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text"),". The header fields that are specific for a particular kind of ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifact")," are specified in the document of that particular artifact (e.g. for ",(0,i.kt)("a",{parentName:"p",href:"ctext-concept#header"},"concepts"),")."),(0,i.kt)("p",null,"The following table specifies the ",(0,i.kt)("strong",{parentName:"p"},"generic header fields"),":"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Legend"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Name"))," contains the field name;"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Req'd"))," specifies whether (",(0,i.kt)("inlineCode",{parentName:"li"},"Y"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"Y*"),") or not (",(0,i.kt)("inlineCode",{parentName:"li"},"n"),") the field is required to be present as a header field. The ",(0,i.kt)("inlineCode",{parentName:"li"},"Y*")," signifies that currently, the field is required, but that we envisage it to become optional when tooling becomes more mature, and will be able to automatically create the specified default value."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Default"))," If the field is NOT required, this specifies what ",(0,i.kt)("a",{parentName:"li",href:"@"},"TEv2 tools")," SHOULD assume that the value is. If the field IS required, you must provide it according to the specified value."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Description"))," specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y*"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<termtype>"),"-",(0,i.kt)("inlineCode",{parentName:"td"},"<termid>")),(0,i.kt)("td",{parentName:"tr",align:null},"Text that ",(0,i.kt)("a",{parentName:"td",href:"@"},"identifies")," this ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text")," within the context of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope"),". The value of this field can be used as the ",(0,i.kt)("inlineCode",{parentName:"td"},"id"),"-field of a ",(0,i.kt)("a",{parentName:"td",href:"@"},"term ref")," that refers to the ",(0,i.kt)("a",{parentName:"td",href:"@"},"knowledge artifact")," described by this ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text"),".",(0,i.kt)("br",null),"Must satisfy regex ",(0,i.kt)("inlineCode",{parentName:"td"},"[a-z0-9_-]+"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"scope")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"@"},"Scopetag")," that ",(0,i.kt)("a",{parentName:"td",href:"@"},"identifies")," the ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope")," within which this document is being ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated"),". The purpose of specifying this field is that it enables tools to check that resolving any ",(0,i.kt)("a",{parentName:"td",href:"@"},"term refs")," within this document will use this to ",(0,i.kt)("a",{parentName:"td",href:"@"},"identify")," the default ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope"),".",(0,i.kt)("br",null),"Must satisfy regex ",(0,i.kt)("inlineCode",{parentName:"td"},"[a-z0-9_-]+"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"termtype")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"concept")),(0,i.kt)("td",{parentName:"tr",align:null},"Text that ",(0,i.kt)("a",{parentName:"td",href:"@"},"identifies")," the kind of ",(0,i.kt)("a",{parentName:"td",href:"@"},"knowledge artifact")," that this ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text")," describes. Typical values would be ",(0,i.kt)("inlineCode",{parentName:"td"},"concept"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"relation"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"pattern")," (or ",(0,i.kt)("inlineCode",{parentName:"td"},"mental-model"),"), ",(0,i.kt)("inlineCode",{parentName:"td"},"term")," (or ",(0,i.kt)("inlineCode",{parentName:"td"},"alias"),"), or ",(0,i.kt)("inlineCode",{parentName:"td"},"usecase"),".",(0,i.kt)("br",null),"Must satisfy regex ",(0,i.kt)("inlineCode",{parentName:"td"},"[a-z0-9_-]+"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"termid")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Text that, together with the value of the ",(0,i.kt)("inlineCode",{parentName:"td"},"termtype")," field, ",(0,i.kt)("a",{parentName:"td",href:"@"},"identifies")," this ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text")," within the context of this ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope"),".",(0,i.kt)("br",null),"Must satisfy regex ",(0,i.kt)("inlineCode",{parentName:"td"},"[a-z0-9_-]+"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"termreftext")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"@"},"reftext")," that ",(0,i.kt)("a",{parentName:"td",href:"@"},"identifies")," the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text")," that documents the ",(0,i.kt)("a",{parentName:"td",href:"@"},"knowledge artifact")," that this term represents.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"formphrases")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"List of ",(0,i.kt)("a",{parentName:"td",href:"formphrase@"},"texts")," that are ",(0,i.kt)("a",{parentName:"td",href:"toolbox-specs/trrt#id"},"used to convert")," the ",(0,i.kt)("inlineCode",{parentName:"td"},"show text")," parts of ",(0,i.kt)("a",{parentName:"td",href:"@"},"term refs")," into ",(0,i.kt)("inlineCode",{parentName:"td"},"id"),"s, for the purpose of accommodating plural forms (for nouns) or conjugate forms (for verbs).",(0,i.kt)("br",null),"Must satisfy regex ",(0,i.kt)("a",{parentName:"td",href:"https://www.debuggex.com/r/TZe27fzbJskMcjl8"},(0,i.kt)("inlineCode",{parentName:"a"},"(?:\\[\\s*([a-z0-9_-{}]+)\\s*(?:,\\s*([a-z0-9_-{}]+))*\\s*\\])?")),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"grouptags")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"List of ",(0,i.kt)("a",{parentName:"td",href:"@"},"grouptags"),", each of which ",(0,i.kt)("a",{parentName:"td",href:"@"},"identifies")," a group of ",(0,i.kt)("a",{parentName:"td",href:"@"},"knowledge artifacts")," of which the ",(0,i.kt)("a",{parentName:"td",href:"@"},"knowledge artifact")," that this ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text")," describes, is a member.",(0,i.kt)("br",null),"Example: ",(0,i.kt)("inlineCode",{parentName:"td"},"[tev2, management]"),".",(0,i.kt)("br",null),"Must satisfy regex ",(0,i.kt)("a",{parentName:"td",href:"https://www.debuggex.com/r/a51CXl1NzR3kwihT"},(0,i.kt)("inlineCode",{parentName:"a"},"(?:\\[\\s*([a-z0-9_-]+)\\s*(?:,\\s*([a-z0-9_-]+))*\\s*\\])?")),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"status")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"proposed")),(0,i.kt)("td",{parentName:"tr",align:null},"Text that identifies the status of the term. (",(0,i.kt)("a",{parentName:"td",href:"@"},"Communities")," of) ",(0,i.kt)("a",{parentName:"td",href:"@"},"scopes")," may specify values for this field. An example is the ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/trustoverip/concepts-and-terminology-wg/blob/master/docs/status-tags.md"},"status tags used by ToIP"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"created")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Date at which of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text")," was created, in the date format as used within this ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"updated")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Date at which of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text")," was last modified, in the date format as used within this ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"vsntag")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Text that identifies the version of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"knowledge artifact")," that this ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text")," describes.",(0,i.kt)("br",null),"Must satisfy regex ",(0,i.kt)("inlineCode",{parentName:"td"},"[a-z0-9_-]+"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"contributors")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Text that shows (or refers to) the people that have contributed to this ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text"),".")))),(0,i.kt)("h2",{id:"type-specific-header-fields"},"Type-specific Header Fields"),(0,i.kt)("p",null,"Every ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text")," documents a ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifact")," of a specific type, as specified by the ",(0,i.kt)("inlineCode",{parentName:"p"},"termtype")," field of the generic TEv2 front-matter. Depending on the value of that ",(0,i.kt)("inlineCode",{parentName:"p"},"termtype")," field, additional front-matter may be specified. This is the case for the following ",(0,i.kt)("inlineCode",{parentName:"p"},"termtype"),"s:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"ctext-concept#header"},(0,i.kt)("inlineCode",{parentName:"a"},"termtype")," = ",(0,i.kt)("inlineCode",{parentName:"a"},"concept"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"ctext-pattern#header"},(0,i.kt)("inlineCode",{parentName:"a"},"termtype")," = ",(0,i.kt)("inlineCode",{parentName:"a"},"pattern")))))}c.isMDXComponent=!0}}]);