"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[6466],{3e3:function(e,t,i){i.r(t),i.d(t,{assets:function(){return h},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return d}});var a=i(7462),o=i(3366),n=(i(7294),i(3905)),r=i(4345),s=i(4996),l=["components"],c={id:"pattern-jurisdiction",title:"Jurisdictions",displayed_sidebar:"essifLabSideBar",scopetag:"essifLab",termtype:"pattern",termid:"jurisdiction",symphrase:"jurisdiction",status:"draft",grouptags:null,hoverText:"The Jurisdictions pattern captures the Concepts and relations that explain what a generic Jurisdiction consists of, and relates it to Parties and Legal Entities.",date:20210601},p=void 0,m={unversionedId:"terms/pattern-jurisdiction",id:"terms/pattern-jurisdiction",title:"Jurisdictions",description:"Purpose",source:"@site/docs/terms/pattern-jurisdiction.md",sourceDirName:"terms",slug:"/terms/pattern-jurisdiction",permalink:"/framework/docs/terms/pattern-jurisdiction",editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/terms/pattern-jurisdiction.md",tags:[],version:"current",frontMatter:{id:"pattern-jurisdiction",title:"Jurisdictions",displayed_sidebar:"essifLabSideBar",scopetag:"essifLab",termtype:"pattern",termid:"jurisdiction",symphrase:"jurisdiction",status:"draft",grouptags:null,hoverText:"The Jurisdictions pattern captures the Concepts and relations that explain what a generic Jurisdiction consists of, and relates it to Parties and Legal Entities.",date:20210601},sidebar:"essifLabSideBar",previous:{title:"Parties, Actors and Actions",permalink:"/framework/docs/terms/pattern-party-actor-action"},next:{title:"Guardianship",permalink:"/framework/docs/terms/pattern-guardianship"}},h={},d=[{value:"Purpose",id:"purpose",level:3},{value:"Introduction",id:"introduction",level:3},{value:"Formalized model",id:"formalized-model",level:3}],u={toc:d};function f(e){var t=e.components,i=(0,o.Z)(e,l);return(0,n.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"purpose"},"Purpose"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Jurisdiction pattern")," captures the concepts and relations that explain how one can perceive a generic ",(0,n.kt)(r.Z,{popup:"Jurisdiction: the composition of a Legal System (legislation, enforcement thereof, and conflict resolution), a Party that governs that Legal System, a scope within which that Legal System is operational, and one or more Objectives for the purpose of which the Legal System is operated.",reference:"/framework/docs/terms/jurisdiction",mdxType:"Term"},"jurisdiction"),", how it works, and how it can be put to use in ",(0,n.kt)(r.Z,{popup:"Self-Sovereign Identity (or SSI): a term that has many different interpretations, and that we use to refer to concepts/ideas, architectures, processes and technologies that aim to support (autonomous) Parties as they negotiate and execute electronic Transactions with one another.",reference:"/framework/docs/terms/self-sovereign-identity",mdxType:"Term"},"SSI contexts"),"."),(0,n.kt)("h3",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Many people are familiar with what we call ",(0,n.kt)(r.Z,{popup:"Legal Jurisdiction: a Jurisdiction that is governed/operated by a governmental body.",reference:"/framework/docs/terms/legal-jurisdiction",mdxType:"Term"},"legal jurisdictions"),", e.g. a government that has a ",(0,n.kt)(r.Z,{popup:"Legal-system: a system in which rules are defined, and mechanisms for their enforcement and conflict resolution are (implicitly or explicitly) specified.",reference:"/framework/docs/terms/legal-system",mdxType:"Term"},"legal system")," in place which it applies to ",(0,n.kt)(r.Z,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entities")," that it knows to exist in its ",(0,n.kt)(r.Z,{popup:"Scope of Control (of a Party): the extent of the area or subject matter that the Party controls.",reference:"/framework/docs/terms/scope-of-control",mdxType:"Term"},"scope of control"),"."),(0,n.kt)("p",null,"While differences exist, a legal jurisdiction typically has a ",(0,n.kt)(r.Z,{popup:"Legal-system: a system in which rules are defined, and mechanisms for their enforcement and conflict resolution are (implicitly or explicitly) specified.",reference:"/framework/docs/terms/legal-system",mdxType:"Term"},"legal system"),", i.e. a set of rules (laws, regulations, etc.) that it enforces (within the scope of control of the legal jurisdiction), and a mechanism for resolving conflicts. The rules typically apply to entities whose existence is known within the legal jurisdiction. For example: a refugee that asks for asylum would typically first need to be registered (which is: legally establishing its existence) before the application can even be considered. Such entities are generically known as ",(0,n.kt)(r.Z,{popup:"Legal Entity (of a Jurisdiction): an Entity that is known by, recognized to exist, and registered in that Jurisdiction.",reference:"/framework/docs/terms/legal-entity",mdxType:"Term"},"legal entities"),"."),(0,n.kt)("p",null,"If we leave out the adjective 'legal', we can still say that anything that"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"has a ",(0,n.kt)(r.Z,{popup:"Legal-system: a system in which rules are defined, and mechanisms for their enforcement and conflict resolution are (implicitly or explicitly) specified.",reference:"/framework/docs/terms/legal-system",mdxType:"Term"},"legal system"),", i.e. set of rules, an enforcement mechanism and a conflict resolving mechanism,"),(0,n.kt)("li",{parentName:"ul"},"operates that legal system in a scope that it ",(0,n.kt)(r.Z,{popup:"Controller (of an Entity): the role that an Actor performs as it is executing actions on that Entity for the purpose of ensuring that the Entity will act/behave, or be used, in a particular way.",reference:"/framework/docs/terms/controller",mdxType:"Term"},"controls"),", and"),(0,n.kt)("li",{parentName:"ul"},"applies these rules to ",(0,n.kt)(r.Z,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entities")," that it knows to exist (i.e. that are 'registered' in its ",(0,n.kt)(r.Z,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"knowledge"),")\nwould also qualify as a ",(0,n.kt)(r.Z,{popup:"Jurisdiction: the composition of a Legal System (legislation, enforcement thereof, and conflict resolution), a Party that governs that Legal System, a scope within which that Legal System is operational, and one or more Objectives for the purpose of which the Legal System is operated.",reference:"/framework/docs/terms/jurisdiction",mdxType:"Term"},"jurisdiction"),", albeit not a legal jurisdiction.")),(0,n.kt)("p",null,"Note that every jurisdiction is also a ",(0,n.kt)(r.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),", because it has its own ",(0,n.kt)(r.Z,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"knowledge")," that it autonomously ",(0,n.kt)(r.Z,{popup:"Management: the act or process of managing or actually realizing of (the results associated with) a set of Objectives by the Owner of these Objectives.",reference:"/framework/docs/terms/management",mdxType:"Term"},"manages"),". This knowledge contains the rules it seeks to enforce, the rules and other guidance for maintaining and actually enforcing these rules, and for resolving conflicts. It also comprises a registration also of the ",(0,n.kt)(r.Z,{popup:"Legal Entity (of a Jurisdiction): an Entity that is known by, recognized to exist, and registered in that Jurisdiction.",reference:"/framework/docs/terms/legal-entity",mdxType:"Term"},"(legal) entities")," that the rules apply to."),(0,n.kt)("p",null,"And indeed, when we apply this criterion we can see that jurisdictions are abundant:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)(r.Z,{popup:"Organization: a Party, part of which is a group of Actors that work to realize its Objectives.",reference:"/framework/docs/terms/organization",mdxType:"Term"},"organizations")," habitually will have rules (business policies) in place, enforce them (to some extent), and have ways of resolving conflicts, and therefore would habitually qualify. Specifically, multi-nationals are known to operate multiple jurisdictions, aligning the rules and scopes with those of other (often legal) jurisdictions for the purpose of preventing situations in which conflicting rules apply, which would lead to many effort-intensive conflict-resolution cases."),(0,n.kt)("li",{parentName:"ul"},"NGO's, that may run aid-projects, refugee-camps etc., ensure that a set of rules apply within the scopes of such projects and camps, and arrange for (internal) conflicts to be resolved. Hence they qualify"),(0,n.kt)("li",{parentName:"ul"},"All sorts of clubs (sports, leisure, ...) have rules, means to enforce them, and a conflict resolution means which they operate within the scope of the locations they control and/or their activities."),(0,n.kt)("li",{parentName:"ul"},"Families qualify as well: the parents make the rules, enforce them, and resolve conflicts."),(0,n.kt)("li",{parentName:"ul"},"Even individual persons (which qualify as ",(0,n.kt)(r.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties"),"), have their own 'scope of control', within which they work according to their own rules (e.g. morals, ethics, preferred ways of working), enforce them (pretty much automatically), and resolve any conflicts (e.g. personal problems that may arise when their rules/habits conflict with what their spouse, employer, any else requires them to do). Saying that an individual operates a (personal) 'legal system' within its scope of control is aligned with the ideas human rights that say humans are 'self sovereign'.")),(0,n.kt)("p",null,"From the above, one might even be inclined to think that ",(0,n.kt)("em",{parentName:"p"},"every")," ",(0,n.kt)(r.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," qualifies as a ",(0,n.kt)(r.Z,{popup:"Jurisdiction: the composition of a Legal System (legislation, enforcement thereof, and conflict resolution), a Party that governs that Legal System, a scope within which that Legal System is operational, and one or more Objectives for the purpose of which the Legal System is operated.",reference:"/framework/docs/terms/jurisdiction",mdxType:"Term"},"jurisdiction"),". While we think that the vast majority of them are (we have no examples to the contrary), we see no relevance in actually stating this."),(0,n.kt)("p",null,"Note that while a ",(0,n.kt)(r.Z,{popup:"Jurisdiction: the composition of a Legal System (legislation, enforcement thereof, and conflict resolution), a Party that governs that Legal System, a scope within which that Legal System is operational, and one or more Objectives for the purpose of which the Legal System is operated.",reference:"/framework/docs/terms/jurisdiction",mdxType:"Term"},"jurisdiction")," is a ",(0,n.kt)(r.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),", a jurisdiction may also be owned by a (different) party, and it makes sense to distinguish between them. For example, a multinational organization may own subsidiaries in different countries, each of which could be a jurisdiction in their own right, for the purpose of aligning their rules of operation with the local legal jurisdiction. e.g. for organizations."),(0,n.kt)("h3",{id:"formalized-model"},"Formalized model"),(0,n.kt)("p",null,"Here is a visual representation of this pattern, using the following ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"../notations-and-conventions#pattern-diagram-notations"},"notations and conventions")),":"),(0,n.kt)("img",{alt:"Conceptual model of the 'Jurisdiction' pattern",src:(0,s.Z)("images/patterns/pattern-jurisdiction.png")}),(0,n.kt)("p",null,"The figure shows that a ",(0,n.kt)(r.Z,{popup:"Jurisdiction: the composition of a Legal System (legislation, enforcement thereof, and conflict resolution), a Party that governs that Legal System, a scope within which that Legal System is operational, and one or more Objectives for the purpose of which the Legal System is operated.",reference:"/framework/docs/terms/jurisdiction",mdxType:"Term"},"jurisdiction")," is ",(0,n.kt)(r.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),", and is also owned by a ",(0,n.kt)(r.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," (that may be the jurisdiction itself, or another party). This implies that a jurisdiction has ",(0,n.kt)(r.Z,{popup:"Objective: Something toward which a Party (its Owner) directs effort (an aim, goal, or end of action).",reference:"/framework/docs/terms/objective",mdxType:"Term"},"objectives")," to pursue, and ",(0,n.kt)(r.Z,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"knowledge")," to govern."),(0,n.kt)("p",null,"While the figure does not make this explicit, the knowledge contains the rules that apply to the legal entities - the entities that the jurisdiction knows to exist (i.e. has registered in its knowledge), as well as the rules and ",(0,n.kt)(r.Z,{popup:"Policy: a (set of) rules, working-instructions, preferences and other guidance for the execution of one or more kinds of Actions, that Agents of the Party that Governs the policy have access to and can interpret such that this results in these Actions being executed as intended by that Party.",reference:"/framework/docs/terms/policy",mdxType:"Term"},"policies")," for maintaining the rule set, enforcing the rules, and resolving conflicts. The latter three are the constituents of the ",(0,n.kt)(r.Z,{popup:"Legal-system: a system in which rules are defined, and mechanisms for their enforcement and conflict resolution are (implicitly or explicitly) specified.",reference:"/framework/docs/terms/legal-system",mdxType:"Term"},"legal system")," that the jurisdiction operates within its ",(0,n.kt)(r.Z,{popup:"Scope of Control (of a Party): the extent of the area or subject matter that the Party controls.",reference:"/framework/docs/terms/scope-of-control",mdxType:"Term"},"scope of control"),"."))}f.isMDXComponent=!0}}]);