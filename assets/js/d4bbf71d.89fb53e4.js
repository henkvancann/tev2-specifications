"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[3435],{9536:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return l}});var n=a(3117),i=a(102),r=(a(7294),a(3905)),o=(a(4996),["components"]),s={id:"tev2-spec-term-ref",title:"Term References",hide_table_of_contents:!0,scopetag:"tev2",date:20220303},p=void 0,d={unversionedId:"tev2/tev2-spec-term-ref",id:"tev2/tev2-spec-term-ref",title:"Term References",description:"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",source:"@site/docs/tev2/tev2-spec-term-ref.md",sourceDirName:"tev2",slug:"/tev2/tev2-spec-term-ref",permalink:"/framework/docs/tev2/tev2-spec-term-ref",draft:!1,editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/tev2/tev2-spec-term-ref.md",tags:[],version:"current",frontMatter:{id:"tev2-spec-term-ref",title:"Term References",hide_table_of_contents:!0,scopetag:"tev2",date:20220303},sidebar:"tev2SideBar",previous:{title:"Curated Texts",permalink:"/framework/docs/tev2/ctext"},next:{title:"Concepts",permalink:"/framework/docs/tev2/ctext-concept"}},m={},l=[{value:"Term References (Original/Default Syntax)",id:"termref",level:2},{value:"<code>showtext</code>",id:"showtext",level:3},{value:"<code>id</code>",id:"id",level:3},{value:"<code>trait</code>",id:"trait",level:3},{value:"<code>scopetag</code>",id:"scopetag",level:3},{value:"<code>vsntag</code>",id:"vsntag",level:3},{value:"Alternative notation",id:"termref-alt",level:3}],h={toc:l};function k(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,r.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions."))),(0,r.kt)("p",null,"This document specifies how you can use a ",(0,r.kt)("a",{parentName:"p",href:"@"},"term")," in a ",(0,r.kt)("a",{parentName:"p",href:"@"},"curated text")," while at the same time referring to the ",(0,r.kt)("a",{parentName:"p",href:"@"},"definition")," that defines its meaning. i.e. the syntax that you need to use in such texts. The way in which the ",(0,r.kt)("a",{parentName:"p",href:"@"},"term")," (and its ",(0,r.kt)("a",{parentName:"p",href:"@"},"definition"),") may be rendered depends on the artifact that is being generated. For example, when a ",(0,r.kt)("a",{parentName:"p",href:"@"},"term")," is rendered in a web-site, it may be enhanced, showing a popup that contains its ",(0,r.kt)("a",{parentName:"p",href:"@"},"definition")," when a ",(0,r.kt)("a",{parentName:"p",href:"@"},"reader")," hovers the mouse over it, and that hyperlinks to the page in the website that explains the term in more detail when the ",(0,r.kt)("a",{parentName:"p",href:"@"},"reader")," clicks on it. When a ",(0,r.kt)("a",{parentName:"p",href:"@"},"term")," is rendered in a PDF file, its definition may appear as an entry in a ",(0,r.kt)("a",{parentName:"p",href:"@"},"glossary")," that is added somewhere in the PDF. It all depends on the rendering tools that are being used, and this is out of scope for this specification."),(0,r.kt)("p",null,"This file specifies the syntax of ",(0,r.kt)("a",{parentName:"p",href:"@"},"Term refs"),". The ",(0,r.kt)("a",{parentName:"p",href:"@"},"TRRT")," describes ",(0,r.kt)("a",{parentName:"p",href:"tev2-toolbox-trrt#term-ref-resolution"},"how they are processed (resolved)"),"."),(0,r.kt)("h2",{id:"termref"},"Term References (Original/Default Syntax)"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"@"},"term ref")," can be thought of as a ",(0,r.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#links"},"Markdown link"),", but rather than linking to some URL or fragment, it refers/links to a specific descriptive text (e.g. a ",(0,r.kt)("a",{parentName:"p",href:"@"},"definition"),", purpose, or example) that is associated with (a specific version of) a ",(0,r.kt)("a",{parentName:"p",href:"scoped-term@"},"(scoped) term"),", which is ",(0,r.kt)("a",{parentName:"p",href:"@"},"identified")," by its ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope")," and the ",(0,r.kt)("a",{parentName:"p",href:"@"},"term")," (label, text)."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Motivation for the chosen syntax"),(0,r.kt)("p",null,"We want to enable authors to use ",(0,r.kt)("a",{parentName:"p",href:"@"},"term refs")," pervasively, which means it must be easy to use, and mistakes should be (relatively) hard to make, yet easy to detect, identify, and correct. ",(0,r.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#links"},"Markdown links")," are of the form ","[",(0,r.kt)("inlineCode",{parentName:"p"},"show text"),"]","(",(0,r.kt)("inlineCode",{parentName:"p"},"ref-text"),"), where ",(0,r.kt)("inlineCode",{parentName:"p"},"show text")," is the text that is rendered and emphasized so that a ",(0,r.kt)("a",{parentName:"p",href:"@"},"reader")," knows it can be clicked, and ",(0,r.kt)("inlineCode",{parentName:"p"},"ref-text")," is a (relative or absolute) URL, or a ",(0,r.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/extended-syntax/#linking-to-heading-ids"},"heading ID"),", that identifies the resource (e.g. web page, or place therein) that is being referenced. So, we need a syntax for ",(0,r.kt)("a",{parentName:"p",href:"@"},"term refs")," that is",(0,r.kt)("br",null),"- sufficiently similar to a ",(0,r.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#links"},"Markdown link"),",",(0,r.kt)("br",null),"- 'humanly interpretable' when it isn't processed by the ",(0,r.kt)("a",{parentName:"p",href:"@"},"TRRT"),",",(0,r.kt)("br",null),"- easy to use for authors, and",(0,r.kt)("br",null),"- sufficiently distinct from a Markdown link so that the ",(0,r.kt)("a",{parentName:"p",href:"@"},"TRRT")," will not process Markdown links yet will process the ",(0,r.kt)("a",{parentName:"p",href:"@"},"term refs"),".")),(0,r.kt)("p",null,"Here is an example of a ",(0,r.kt)("a",{parentName:"p",href:"@"},"term ref"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"[definitions](definition@)"),". When this text is rendered into a human readable form, it will show the text ",(0,r.kt)("inlineCode",{parentName:"p"},"definitions")," (plural) enhanced, and it will link to the text that describes (or defines) the term ",(0,r.kt)("inlineCode",{parentName:"p"},"definition")," (singular). If you would want to use this term as it is defined in the ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"essif-lab"),", you could do that by wrinting ",(0,r.kt)("inlineCode",{parentName:"p"},"[definitions](definition@essif-lab)")," (provided that ",(0,r.kt)("inlineCode",{parentName:"p"},"essif-lab")," is a defined ",(0,r.kt)("a",{parentName:"p",href:"@"},"scopetag")," within the ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope")," that you operate in)."),(0,r.kt)("p",null,"The complete, generic structure of a ",(0,r.kt)("a",{parentName:"p",href:"@"},"term ref")," is: ",(0,r.kt)("strong",{parentName:"p"},"[",(0,r.kt)("inlineCode",{parentName:"strong"},"show text"),"]","(",(0,r.kt)("inlineCode",{parentName:"strong"},"id"),"#",(0,r.kt)("inlineCode",{parentName:"strong"},"trait"),"@",(0,r.kt)("inlineCode",{parentName:"strong"},"scopetag"),":",(0,r.kt)("inlineCode",{parentName:"strong"},"vsntag"),")"),". However, all of its elements (except for ",(0,r.kt)("inlineCode",{parentName:"p"},"show text"),") are optional, so as to limit the 'extra work' that authors need to do to a minimum."),(0,r.kt)("h3",{id:"showtext"},(0,r.kt)("inlineCode",{parentName:"h3"},"showtext")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"showtext"))," is the text that will be highlighted/emphasized to indicate it is linked.\nIt must not contain the characters ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"]")," (this is needed to distinguish ",(0,r.kt)("a",{parentName:"p",href:"@"},"term refs")," from regular ",(0,r.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#links"},"markdown links"),")."),(0,r.kt)("h3",{id:"id"},(0,r.kt)("inlineCode",{parentName:"h3"},"id")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"id"))," is a text that ",(0,r.kt)("a",{parentName:"p",href:"@"},"identifies")," the ",(0,r.kt)("a",{parentName:"p",href:"scoped-term@"},"(scoped) term")," in the part of the ",(0,r.kt)("a",{parentName:"p",href:"@"},"corpus")," that contains the ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminology")," of a specified ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope"),".",(0,r.kt)("br",null),"It must satisfy the regex ",(0,r.kt)("inlineCode",{parentName:"p"},"[a-z0-9_-]+"),"."),(0,r.kt)("p",null,"If omitted, its value is assumed to be ",(0,r.kt)("a",{parentName:"p",href:"tev2-toolbox-trrt#id"},"derivable from ",(0,r.kt)("inlineCode",{parentName:"a"},"showtext")),".\nAt a minimum, this is the case if the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," equals the result of processing ",(0,r.kt)("inlineCode",{parentName:"p"},"showtext")," by first converting every character in the range ",(0,r.kt)("inlineCode",{parentName:"p"},"[A-Z]")," to lower-case, and then replacing every sequence of characters specified by regex ",(0,r.kt)("inlineCode",{parentName:"p"},"[^A-Za-z_-]+")," with (a single) ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," character."),(0,r.kt)("h3",{id:"trait"},(0,r.kt)("inlineCode",{parentName:"h3"},"trait")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"trait"))," is a text that ",(0,r.kt)("a",{parentName:"p",href:"@"},"identifies")," a particular (kind of) characteristic (feature, attribute, particularity) that is associated with the ",(0,r.kt)("a",{parentName:"p",href:"@"},"term"),", and to a description of which is to be referred.",(0,r.kt)("br",null),"It must satisfy the regex ",(0,r.kt)("inlineCode",{parentName:"p"},"[a-z0-9_-]+"),"."),(0,r.kt)("p",null,"If omitted (in which case the preceding ",(0,r.kt)("inlineCode",{parentName:"p"},"#"),"-character may also be omitted), the ",(0,r.kt)("a",{parentName:"p",href:"@"},"term ref")," will by default resolve to the text of its ",(0,r.kt)("a",{parentName:"p",href:"@"},"glossary")," entry. While it is envisaged that ",(0,r.kt)("inlineCode",{parentName:"p"},"trait")," must be a text from a predefined set of allowed/supported texts (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"purpose"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"criteria"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"example-3"),"), the precise semantics remain to be specified."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Editor's note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The semantics of ",(0,r.kt)("inlineCode",{parentName:"p"},"trait")," need to be better specified."))),(0,r.kt)("h3",{id:"scopetag"},(0,r.kt)("inlineCode",{parentName:"h3"},"scopetag")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"scopetag"))," is a ",(0,r.kt)("a",{parentName:"p",href:"@"},"tag")," that ",(0,r.kt)("a",{parentName:"p",href:"@"},"identifies")," the ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope")," of the ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminology")," that contains the ",(0,r.kt)("a",{parentName:"p",href:"scoped-term@"},"(scoped) term")," that is being referenced.",(0,r.kt)("br",null),"It must satisfy the regex ",(0,r.kt)("inlineCode",{parentName:"p"},"[a-z0-9_-]+"),". Also, it must appear as such in the ",(0,r.kt)("inlineCode",{parentName:"p"},"scopes")," section of the ",(0,r.kt)("a",{parentName:"p",href:"@"},"SAF")," of the ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope")," within which the document containing the ",(0,r.kt)("a",{parentName:"p",href:"@"},"term ref")," is being maintained, or it must be the ",(0,r.kt)("a",{parentName:"p",href:"@"},"scopetag")," of the ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope")," itself."),(0,r.kt)("p",null,"If omitted, a default ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope")," will be used, which is the ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope")," from which the ",(0,r.kt)("a",{parentName:"p",href:"@"},"TRRT")," is being called, which SHOULD be the ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope")," within which the document containing the ",(0,r.kt)("a",{parentName:"p",href:"@"},"term ref")," is being maintained. Note that the preceding ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," sign MUST NOT be omitted because as it serves the purpose to distinguish ",(0,r.kt)("a",{parentName:"p",href:"@"},"term refs")," from other ",(0,r.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#links"},"markdown links"),"."),(0,r.kt)("h3",{id:"vsntag"},(0,r.kt)("inlineCode",{parentName:"h3"},"vsntag")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"vsntag"))," is a ",(0,r.kt)("a",{parentName:"p",href:"@"},"versiontag")," that ",(0,r.kt)("a",{parentName:"p",href:"@"},"identifies")," the specific version of the ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminology")," in the ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope")," that contains the ",(0,r.kt)("a",{parentName:"p",href:"scoped-term@"},"(scoped) term")," that is being referenced.",(0,r.kt)("br",null),"It must satisfy the regex ",(0,r.kt)("inlineCode",{parentName:"p"},"[a-z0-9_-\\.]+"),"."),(0,r.kt)("p",null,"If omitted (in which case the preceding ",(0,r.kt)("inlineCode",{parentName:"p"},":"),"-character may also be omitted), its value will be the default, which is determined by the ",(0,r.kt)("a",{parentName:"p",href:"@"},"curators")," of that ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope")," (the ",(0,r.kt)("a",{parentName:"p",href:"@"},"MRG")," that has the ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminology")," that contains the (scoped) term](scoped-term@) that is being referenced, is specified in the ",(0,r.kt)("a",{parentName:"p",href:"@"},"SAF")," of that ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope"),", in the appropriate ",(0,r.kt)("inlineCode",{parentName:"p"},"scopes.mrgfile"),"-field). A ",(0,r.kt)("inlineCode",{parentName:"p"},"vsntag")," is only valid if it appears as the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"vsntag")," field or an element of the ",(0,r.kt)("inlineCode",{parentName:"p"},"altvsntags")," field in one of the list-elements of the ",(0,r.kt)("inlineCode",{parentName:"p"},"versions")," field in the ",(0,r.kt)("a",{parentName:"p",href:"@"},"SAF")," of the ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Editor's note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It has been suggested to provide ",(0,r.kt)("a",{parentName:"p",href:"@"},"term ref")," syntax that allows one to refer to a ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminological artifact")," from a ","[terminology]"," that was 'current'/'latest'/... at a particular date. The ",(0,r.kt)("a",{parentName:"p",href:"@"},"SAF")," ",(0,r.kt)("a",{parentName:"p",href:"tev2-spec-saf#versions"},"versioning specifications")," already cater for ",(0,r.kt)("inlineCode",{parentName:"p"},"from")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"to")," dates, but everything else needs to be worked out."))),(0,r.kt)("h3",{id:"termref-alt"},"Alternative notation"),(0,r.kt)("p",null,"It is convenient for authors to be able to use the '@",(0,r.kt)("inlineCode",{parentName:"p"},"scopetag"),"' part of a ",(0,r.kt)("a",{parentName:"p",href:"@"},"term ref")," immediately behind the ",(0,r.kt)("inlineCode",{parentName:"p"},"show text")," within the square brackets (",(0,r.kt)("inlineCode",{parentName:"p"},"[")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"]"),"), and leave out the parentheses and the text in between if all the other items are omitted."),(0,r.kt)("p",null,"This is particularly useful in the vast majority of cases, where the default processing of ",(0,r.kt)("inlineCode",{parentName:"p"},"showtext")," results in ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"trait")," is absent. Examples of this are ",(0,r.kt)("inlineCode",{parentName:"p"},"[definition](@)"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"[term ref](@)"),"."),(0,r.kt)("p",null,"The usefulness becomes even greater as the ",(0,r.kt)("a",{parentName:"p",href:"@"},"TRRT")," also implements more sophisticated ways to derive a ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," from a ",(0,r.kt)("inlineCode",{parentName:"p"},"show text"),", e.g. to accommodate for plural forms (of nouns), or conjugate forms (for verbs)."),(0,r.kt)("p",null,"This leads to an alternative notation that can be used in addition to the previously specified notation. Here is the alternative syntax and its equivalent counterpart:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Alternative syntax"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Equivalent regular syntax"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"[",(0,r.kt)("inlineCode",{parentName:"td"},"show text"),"@","]"),(0,r.kt)("td",{parentName:"tr",align:"center"},"[",(0,r.kt)("inlineCode",{parentName:"td"},"show text"),"]","(@)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"[",(0,r.kt)("inlineCode",{parentName:"td"},"show text"),"@",(0,r.kt)("inlineCode",{parentName:"td"},"scopetag"),"]"),(0,r.kt)("td",{parentName:"tr",align:"center"},"[",(0,r.kt)("inlineCode",{parentName:"td"},"show text"),"]","(",(0,r.kt)("inlineCode",{parentName:"td"},"showtext"),"@",(0,r.kt)("inlineCode",{parentName:"td"},"scopetag"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"[",(0,r.kt)("inlineCode",{parentName:"td"},"show text"),"@",(0,r.kt)("inlineCode",{parentName:"td"},"scopetag"),":",(0,r.kt)("inlineCode",{parentName:"td"},"vsntag"),"]","(",(0,r.kt)("inlineCode",{parentName:"td"},"id"),"#",(0,r.kt)("inlineCode",{parentName:"td"},"trait"),")"),(0,r.kt)("td",{parentName:"tr",align:"center"},"[",(0,r.kt)("inlineCode",{parentName:"td"},"show text"),"]","(",(0,r.kt)("inlineCode",{parentName:"td"},"id"),"#",(0,r.kt)("inlineCode",{parentName:"td"},"trait"),"@",(0,r.kt)("inlineCode",{parentName:"td"},"scopetag"),":",(0,r.kt)("inlineCode",{parentName:"td"},"vsntag"),")")))),(0,r.kt)("p",null,"In the last row of the above table, ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"#trait")," are optional. Thus, ",(0,r.kt)("inlineCode",{parentName:"p"},"[definition@]()")," is equivalent with ",(0,r.kt)("inlineCode",{parentName:"p"},"[definition](@)")," and with ",(0,r.kt)("inlineCode",{parentName:"p"},"[definition](@)"),"."))}k.isMDXComponent=!0}}]);