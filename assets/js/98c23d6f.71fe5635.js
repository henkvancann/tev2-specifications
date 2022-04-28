"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[7578],{8426:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var s=a(7462),n=a(3366),i=(a(7294),a(3905)),r=a(4345),o=["components"],c={id:"transaction-data-discloser",title:"Transaction Data Discloser",displayed_sidebar:"essifLabSideBar",scopetag:"essifLab",termtype:"concept",termid:"transaction-data-discloser",symphrase:"transaction-data-discloser{ss}",status:"draft",grouptags:null,hoverText:"Transaction Data Discloser: a functional component that is capable of disclosing data.",glossaryText:"a functional component that is capable of disclosing data.",date:20210601},l=void 0,p={unversionedId:"terms/transaction-data-discloser",id:"terms/transaction-data-discloser",title:"Transaction Data Discloser",description:"Short Description",source:"@site/docs/terms/transaction-data-discloser.md",sourceDirName:"terms",slug:"/terms/transaction-data-discloser",permalink:"/framework/docs/terms/transaction-data-discloser",editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/terms/transaction-data-discloser.md",tags:[],version:"current",frontMatter:{id:"transaction-data-discloser",title:"Transaction Data Discloser",displayed_sidebar:"essifLabSideBar",scopetag:"essifLab",termtype:"concept",termid:"transaction-data-discloser",symphrase:"transaction-data-discloser{ss}",status:"draft",grouptags:null,hoverText:"Transaction Data Discloser: a functional component that is capable of disclosing data.",glossaryText:"a functional component that is capable of disclosing data.",date:20210601},sidebar:"essifLabSideBar"},d={},u=[{value:"Short Description",id:"short-description",level:3},{value:"Purpose",id:"purpose",level:3},{value:"Criteria",id:"criteria",level:3},{value:"Functionality",id:"functionality",level:3}],m={toc:u};function h(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,s.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"short-description"},"Short Description"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"Transaction Data Discloser")," is an (architectural) function (a functional component in the ",(0,i.kt)("a",{parentName:"p",href:"../essifLab-fw-func-arch"},"eSSIF-Lab functional architecture"),") that applications (that work for some ",(0,i.kt)(r.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),") can call to communicate things such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the results of a ",(0,i.kt)(r.Z,{popup:"Transaction: the exchange of goods, services, funds, or data between some Parties (called Participants of the Transaction).",reference:"/framework/docs/terms/transaction",mdxType:"Term"},"business transaction")," (e.g. statements to confirm that a transaction happened, thereby supplying appropriate details)"),(0,i.kt)("li",{parentName:"ul"},"the status of a ",(0,i.kt)(r.Z,{popup:"Transaction: the exchange of goods, services, funds, or data between some Parties (called Participants of the Transaction).",reference:"/framework/docs/terms/transaction",mdxType:"Term"},"business transaction")," (e.g. that an order has been received in good order, that delivery of an order is dealyed or otherwise changed)"),(0,i.kt)("li",{parentName:"ul"},"knowledge (including judgements) that this ",(0,i.kt)(r.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," has about ",(0,i.kt)(r.Z,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"Entities")," (people, organizations, things, orders, deliveries, etc.)")),(0,i.kt)("p",null,"The Transaction Data Discloser uses a ",(0,i.kt)(r.Z,{popup:"Transaction Data Discloser Policy: a Digital Policy that enables an operational Transaction Data Discloser component to function in accordance with the Objectives of its Principal.",reference:"/framework/docs/terms/transaction-data-discloser-policy",mdxType:"Term"},"Transaction Data Discloser policy")," to learn about the applicable (business) rules of its ",(0,i.kt)(r.Z,{popup:"Principal (of an Actor): the Party for whom, or on behalf of whom, the Actor is executing an Action (this Actor is then called an Agent of that Party).",reference:"/framework/docs/terms/principal",mdxType:"Term"},"principal"),". Such a policy may specify e.g. which types of credentials its principal is willing to (have) issue(d), to whom such credentials may be issued and the kinds of assurances that must be obtained before doing so, etcetera."),(0,i.kt)("p",null,"The Transaction Data Discloser uses the ",(0,i.kt)(r.Z,{popup:"eSSIF-Glue: interface layer that allows components with Transaction Data Collector and/or Transaction Data Discloser functionality to use the Wallet, Holder, Issuer and Verifier functionalities.",reference:"/framework/docs/terms/essif-glue",mdxType:"Term"},"eSSIF-Glue")," interface to access the ",(0,i.kt)(r.Z,{popup:"Wallet (functional component): the capability to securely store data as requested by Colleague Agents, and to provide stored data to Colleague Agents or Peer Agents, all in Compliance with the rules of its Principal's Wallet Policy.",reference:"/framework/docs/terms/wallet",mdxType:"Term"},"Wallet"),", ",(0,i.kt)(r.Z,{popup:"Holder (functional component): the capability to handle presentation requests from a Peer Agent, produce the requested data (a presentation) according to its Principal's holder-policy, and send that in response to the request.",reference:"/framework/docs/terms/holder",mdxType:"Term"},"Holder"),", ",(0,i.kt)(r.Z,{popup:"Issuer (functional component): the capability to construct Credentials from data objects, according to the content of its Principal's Issuer-Policy (specifically regarding the way in which the Credential is to be digitally signed), and pass it to the Wallet-component of its Principal allowing it to be issued.",reference:"/framework/docs/terms/issuer",mdxType:"Term"},"Issuer")," and ",(0,i.kt)(r.Z,{popup:"Verifier (functional component): the capability to request Peer Agents to present (provide) data from credentials (of a specified kind, issued by specified Parties), and to verify such responses (check structure, signatures, dates), according to its Principal's Verifier Policy.",reference:"/framework/docs/terms/verifier",mdxType:"Term"},"Verifier")," functionalities."),(0,i.kt)("h3",{id:"purpose"},"Purpose"),(0,i.kt)("p",null,"The purpose of the Transaction Data Discloser component is to state the (various, sometimes intermediary) results of transactions, by collecting data from the Business Data Stores, and creating a set of (related) statements/claims that can subsequently be issued to other ",(0,i.kt)(r.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties"),". A special kind of result is the (provisioning of) a credential that its Principal already has created."),(0,i.kt)("h3",{id:"criteria"},"Criteria"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"Transaction Data Discloser")," is a component in the ",(0,i.kt)("a",{parentName:"p",href:"../essifLab-fw-func-arch"},"eSSIF-Lab functional architecture")," that is capable of stating (various, sometimes intermediary) results of transactions, by collecting data from the Business Data Stores, and creating a set of (related) statements/claims that can subsequently be issued to other ",(0,i.kt)(r.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"Parties"),"."),(0,i.kt)("h3",{id:"functionality"},"Functionality"),(0,i.kt)("p",null,"Typically, and at any point in time, ",(0,i.kt)(r.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties")," are capable of expressing statements about entities that they know to exist. They could express statements about individuals, about themselves, the state of transactions, and so on. We will use the term '",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(r.Z,{popup:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, Employment Contracts, etc.",reference:"/framework/docs/terms/subject",mdxType:"Term"},"subject")," (of a statement of a ",(0,i.kt)(r.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),")"),"' to refer to the entity that this ",(0,i.kt)(r.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," knows to exist, and about whom/which the statement has been made."),(0,i.kt)("p",null,"We will use the term '",(0,i.kt)("strong",{parentName:"p"},"subject-id (of a statement of a ",(0,i.kt)(r.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),")"),"' to refer to the representation that this ",(0,i.kt)(r.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," has chosen to use for referring to the ",(0,i.kt)(r.Z,{popup:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, Employment Contracts, etc.",reference:"/framework/docs/terms/subject",mdxType:"Term"},"subject")," in said statement. A subject-id must have the property of being an identifier within every administrative context that this ",(0,i.kt)(r.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," uses. It need not be humanly interpretable (and preferably is not)."),(0,i.kt)("p",null,"Parties need to specify the kinds of credentials they are willing to issue, the class of entities (e.g. people, cars, Organizations) for which it will issue them, and the information schema (structure) that it will use in credentials of such kinds.",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," This allows the Transaction Data Discloser to construct data objects that conform to this information schema, and present it to the Issuer component for actual issuing."),(0,i.kt)("p",null,"The Transaction Data Discloser Issuing Policy specifies the kinds of (linked-)data-objects that credentials may be created for. This allows the Transaction Data Discloser to construct such a (linked-)data-objects for every subject-id that identifies a ",(0,i.kt)(r.Z,{popup:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, Employment Contracts, etc.",reference:"/framework/docs/terms/subject",mdxType:"Term"},"subject")," of the class for which a credential can be issued, which can subsequently be sent to the Issuer component that can turn it into a credential of a specific sort."),(0,i.kt)("p",null,"You can think of the Transaction Data Discloser as the component that pulls all data together that can be put in a credential (e.g. in a passport), and the Issuer as the component that puts the data in an (empty) passport, and signing it so as to create the actual credential."),(0,i.kt)("p",null,"The Transaction Data Discloser may either push credential data to the Issuer component, so that the Issuer always has up-to-date credentials, or it can wait until the Issuer requests credential data for the creation of a credential of a specific type for a specific ",(0,i.kt)(r.Z,{popup:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, Employment Contracts, etc.",reference:"/framework/docs/terms/subject",mdxType:"Term"},"subject"),"."),(0,i.kt)("hr",null),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"We assume/stipulate that the ",(0,i.kt)(r.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," maintains a credential catalogue that contains this, and other information about every kind of credential that it issues, and that such catalogues are available to other ",(0,i.kt)(r.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties")," that want or need to use such credentials.",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0}}]);