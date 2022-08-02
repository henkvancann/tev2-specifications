"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[4985],{1822:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return c}});var r=a(3117),i=a(102),n=(a(7294),a(3905)),s=["components"],o={id:"versiontag",scope:"tev2",termtype:"concept",termid:"versiontag",formphrases:"versiontag{ss}, version-tag{ss}",grouptags:null,status:"proposed",created:new Date("2022-06-06T00:00:00.000Z"),updated:new Date("2022-07-28T00:00:00.000Z"),vsntag:"v0.1",contributors:"RieksJ",isa:"tag",term:"versiontag",fullterm:"Versiontag (of/within a Scope)",shorterm:null,synonyms:null,glossaryText:"a [tag](@) that is used to [identify](@) a specific version of a [terminology](@) from within a specific [scope](@).",title:"Versiontag",hoverText:"Versiontag: a Tag (alphanumeric string) that is used to identify a specific version of a Terminology from within a specific Scope."},p=void 0,m={unversionedId:"tev2/terms/versiontag",id:"tev2/terms/versiontag",title:"Versiontag",description:"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",source:"@site/docs/tev2/terms/versiontag.md",sourceDirName:"tev2/terms",slug:"/tev2/terms/versiontag",permalink:"/framework/docs/tev2/terms/versiontag",draft:!1,editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/tev2/terms/versiontag.md",tags:[],version:"current",lastUpdatedBy:"RieksJ",lastUpdatedAt:1659106329,formattedLastUpdatedAt:"Jul 29, 2022",frontMatter:{id:"versiontag",scope:"tev2",termtype:"concept",termid:"versiontag",formphrases:"versiontag{ss}, version-tag{ss}",grouptags:null,status:"proposed",created:"2022-06-06T00:00:00.000Z",updated:"2022-07-28T00:00:00.000Z",vsntag:"v0.1",contributors:"RieksJ",isa:"tag",term:"versiontag",fullterm:"Versiontag (of/within a Scope)",shorterm:null,synonyms:null,glossaryText:"a [tag](@) that is used to [identify](@) a specific version of a [terminology](@) from within a specific [scope](@).",title:"Versiontag",hoverText:"Versiontag: a Tag (alphanumeric string) that is used to identify a specific version of a Terminology from within a specific Scope."},sidebar:"tev2SideBar",previous:{title:"Terms Community",permalink:"/framework/docs/tev2/terms/terms-community"},next:{title:"Vocabulary",permalink:"/framework/docs/tev2/terms/vocabulary"}},l={},c=[{value:"Summary",id:"summary",level:3},{value:"Criteria",id:"criteria",level:3},{value:"Examples",id:"examples",level:3},{value:"Notes",id:"notes",level:3}],h={toc:c};function u(e){var t=e.components,a=(0,i.Z)(e,s);return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,n.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,n.kt)("br",null),(0,n.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,n.kt)("h3",{id:"summary"},"Summary"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"Versiontag")," is a ",(0,n.kt)("a",{parentName:"p",href:"@"},"tag")," that is used to ",(0,n.kt)("a",{parentName:"p",href:"@"},"identify")," a specific version of a ",(0,n.kt)("a",{parentName:"p",href:"@"},"terminology")," from within a specific ",(0,n.kt)("a",{parentName:"p",href:"@"},"scope"),". It may have various forms, and would typically be chosen such that it comes in handy with the tools that the ",(0,n.kt)("a",{parentName:"p",href:"@"},"terms community")," has decided to use to curate that ",(0,n.kt)("a",{parentName:"p",href:"@"},"scope"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"pattern-terminology@"},"terminology pattern")," provides an overview of how this concept fits in with related concepts."),(0,n.kt)("h3",{id:"criteria"},"Criteria"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"Versiontag")," (of/within a ",(0,n.kt)("a",{parentName:"p",href:"@"},"scope"),") is a ",(0,n.kt)("a",{parentName:"p",href:"@"},"tag")," that is used within that ",(0,n.kt)("a",{parentName:"p",href:"@"},"scope")," to ",(0,n.kt)("a",{parentName:"p",href:"@"},"identify")," a specific version of that ",(0,n.kt)("a",{parentName:"p",href:"@"},"scope's")," ",(0,n.kt)("a",{parentName:"p",href:"@"},"terminology"),". The alphanumeric string satisfies the regex ",(0,n.kt)("inlineCode",{parentName:"p"},"[a-z0-9_-]+"),"."),(0,n.kt)("h3",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Examples of versiontags are ",(0,n.kt)("inlineCode",{parentName:"p"},"v0.1"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"latest"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"afa65fe9")," (a (git) commit-hash), etc."),(0,n.kt)("h3",{id:"notes"},"Notes"),(0,n.kt)("p",null,"Discussions about which regex a tag should satisfy must be held with care. For example, one might argue that allowing the ",(0,n.kt)("inlineCode",{parentName:"p"},".")," character for ",(0,n.kt)("a",{parentName:"p",href:"@"},"versiontags")," might be beneficial. However, allowing a ",(0,n.kt)("inlineCode",{parentName:"p"},".")," character in a ",(0,n.kt)("a",{parentName:"p",href:"@"},"scopetag")," may cause problems with (the alternative syntax) of ",(0,n.kt)("a",{parentName:"p",href:"@"},"term refs"),", as email address in square brackets might then qualify as a ",(0,n.kt)("a",{parentName:"p",href:"@"},"term ref")," while that is very likely not the author's intention."))}u.isMDXComponent=!0}}]);