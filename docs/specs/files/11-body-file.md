---
id: body-file
sidebar_label: Body Files
date: 20231009
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# Body Files

:::info[In_Short]

A curated text contains a header between `---` and a markdown body. Both can be present in one file; the header on top. However the markdown can be split off from the header and live a separate file, by using `bodyFile: {here a path to the body file}` in the header. If you use `bodyFile` the text in the body of the document will be overruled by the data in the actual bodyFile.

:::

A [body file](@) contains the [body](@) of a [curated text](@), i.e. the text that documents a [semantic unit](@), but has no a-priori structure whatsoever (as that would be part of the [header](@) of that [curated text](@)).

Typically, body files are pieces of documentation about a particular [concept](@) (or other kind of [semantic unit](@)) that already serve a purpose in some documentation set. For example, a set of documents that constitute, e.g., an architecture, or a specification, would contain files that specify a particular entity (e.g., a component, or a protocol). The contents of these files could then serve as the [body](@) of a [curated text](@) that documents that particular entity.

[Body files](@) are to be located within the [curatedir](@) of the [scope](@) of which they are part, so that the [TEv2 tools](@) can properly find and operate on them.