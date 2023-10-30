---
id: trrt
sidebar_label: Term Ref Resolution Tool (TRRT)
date: 20220421
---

# Term Reference Resolution Tool

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- Use 'Mark' as an HTML tag, e.g. <mark>text to mark</Mark?-->
export const mark = ({children}) => (
  <span style={{ color:'black', backgroundColor:'yellow', padding:'0.2rem', borderRadius:'2px', }}>
    {children}
  </span> );

:::info Editor's note
Term ref resolution is the same process as we use for ingestion, and other conversions, as (will be) explained in the [profiles template section](/docs/spec-files/profile-templates). When that 'conversion pattern' is stable and properly documented, we need to revise this section to align with those descriptions.
:::

The **Term Ref(erence) Resolution Tool ([TRRT](@))** takes files that contain so-called [TermRefs](@) and outputs a copy of these files in which these [TermRefs](@) are converted into so-called [renderable refs](@), i.e. texts that can be further processed by tools such as GitHub pages, Docusaurus, etc. The result of this is that the rendered document contains markups that help [readers](@) to quickly find more explanations of the [concept](@) or other [semantic unit](@) that is being referenced.

There is currently one implementation of the tool:
- the repo is [here](https://github.com/tno-terminology-design/trrt).
- the documentation is [here](https://tno-terminology-design.github.io/trrt).

<details>
  <summary>Examples</summary>

Consider the [TermRef](@) `[the purpose of actors](actor#purpose@essif-lab)`. Here are a number of ways that it can be converted into:

<Tabs
  defaultValue="markdown"
  values={[
    {label: 'Markdown', value: 'markdown'},
    {label: 'HTML', value: 'html'},
    {label: 'eSSIF-Lab Style', value: 'essiflab-style'},
  ]}>

<TabItem value="markdown">

~~~ markdown
  [the purpose of actors](/framework/docs/terms/actor#purpose)
~~~

which is text that a markdown interpreter will render into a text `the purpose of actors` that hyperlinks to the (relative) path `/framework/docs/terms/actor#purpose`.

</TabItem>
<TabItem value="html">

~~~ html
  <a href="/framework/docs/terms/actor#purpose">
    <span style="font-weight:bold">the purpose of actors</span>
  </a>,
~~~

which is code that will render the text `the purpose of actors` as a (boldface) hyperlink, that, when clicked, will navigate to the `purpose` section of the page that documents (the [semantic unit](@) called `actor`.

</TabItem>
<TabItem value="essiflab-style">

~~~ html
  <Term popup="An Actor is someone or something that can act, i.e. actually do things, execute actions, such as people or machines."
    reference="actor">the purpose of actors
  </Term>
~~~

Note that this text is not readily renderable in a browser. `<Term ...>` and `</Term>` represent a React component that supports linking and tooltip functionality, so that users hovering over the link will see a popup/tooltip with the text `<popuptext>`. This functionality is expected to be provided by an appropriate plugin in the static website generator.

</TabItem>
</Tabs>

</details>

Conceptually, [TermRef](@) conversion is a simple two-step process:
1. The [TermRef](@) is interpreted, the result of which is a set of variables (or if regexes are used: [named capturing groups](https://riptutorial.com/regex/example/2479/named-capture-groups)) whose contents [identify](@) an [MRG entry](@) from a specific [MRG](@).
2. Then, using the contents of the [identified](@) [MRG entry](@), the [TermRef](@) is replaced by a converter with a [renderable ref](@), of the kind as specified by the [TRRT's](@) command line arguments or configuration file. Through the use of converters, the [renderable ref](@) may include all sorts of code that is processed further by other, third party rendering tools.

By cleanly separating [TermRef](@) interpretation from the part where it is overwritten with a [renderable ref](@), it becomes easy to extend the capabilities of the [TRRT](@) to include ways for rendering [TermRefs](@), e.g. for LaTeX, PDF, docx, odt and other formats, as well as for formats that we currently do not even know we would like to have.

In order to convert [TermRefs](@) into [renderable refs](@), [TRRT](@) expects the [SAF](@) and the [MRG](@) of the [scope](@) from within which it is being called, to be available. The [MRG](@) is used to resolve all links to [terms](@) that are part of the [terminology](@) of this [scope](@). The [SAF](@) is used to locate the [MRGs](@) of any (other) [scope](@) whose [scopetag](@) is used as part of a [TermRef](@) that needs to be resolved.

## Installing the Tool

The tool can be installed from the command line and made globally available by executing

~~~
npm install -g @tno-terminology-design/trrt
~~~

<details>
  <summary>Before running the tool from the command line, make sure you have met the necessary prerequisites depending on your operating environment.</summary>

<Tabs
  defaultValue="cmd.exe"
  values={[
    {label: 'CMD.exe (Windows)', value: 'cmd.exe'},
    {label: 'PowerShell(Windows)', value: 'powershell'},
    {label: 'Bash (Linux/Mac)', value: 'bash'},
  ]}>

<TabItem value="cmd.exe"><br/>

1. **Node.js and NPM**: Ensure Node.js and NPM are installed.
2. **Global Installation**: If you have installed the package globally, confirm the global NPM modules path by running `npm config get prefix`. The global modules are usually stored under `<prefix>/node_modules`.
3. **Environment Variables**: Add the path to global NPM binaries to your system's PATH environment variable. This should be `<prefix>` on Windows. To add to PATH, you can edit your environment variables or run `set PATH=%PATH%;<prefix>` in the CMD.

</TabItem>
<TabItem value="powershell"><br/>

1. **Node.js and NPM**: Ensure Node.js and NPM are installed.
2. **Global Installation**: Check the global NPM modules path as in CMD.
3. **Environment Variables**: Update the PATH environment variable as in CMD. You can also use `$env:Path += ";<prefix>"` to update the PATH temporarily in the current PowerShell session.

</TabItem>
<TabItem value="bash"><br/>

1. **Node.js and NPM**: Ensure Node.js and NPM are installed.
2. **Global Installation**: If globally installed, run `npm config get prefix` to get the global modules path, usually `<prefix>/lib/node_modules`.
3. **Environment Variables**: Add the `<prefix>/bin` directory to your `PATH` if it's not already. You can do this by adding `export PATH=$PATH:<prefix>/bin` to your `~/.bashrc` or `~/.zshrc` file.

</TabItem>
</Tabs>
</details>

## Calling the Tool

The behavior of the [TRRT](@) can be configured per call e.g. by a configuration file and/or command-line parameters. The command-line syntax is as follows:

~~~
trrt [ <paramlist> ] [ <globpattern> ]
~~~

where:
- `<paramlist>` is an (optional) list of parameters, as specified in the table below.
- [`globpattern`](https://en.wikipedia.org/wiki/Glob_(programming)#Syntax) (optional) specifies a set of (input) files that are to be processed. If a configuration file is used, its contents may specify an additional set of input files to be processed.

<details>
  <summary>Legend</summary>

The columns in the following table are defined as follows:
1. **`Parameter`** specifies the parameter and further specifications
2. **`Req'd`** specifies whether (`Y`) or not (`n`) the field is required to be present when the tool is being called. If required, it MUST either be present in the configuration file, or as a command-line parameter.
3. **`Description`** specifies the meaning of the `Value` field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

If a configuration file used, the long version of the parameter must be used (without the preceeding `--`).
</details>

| Parameter                                | Req'd | Description |
| :--------------------------------------- | :---: | :---------- |
| `-V`, `--version`                          | n | output the version number of the tool. |
| `-c`, `--config <path>`                    | n | Path (including the filename) of the tool's (YAML) configuration file. |
| `-o`, `--output <dir>`                     | Y | (Root) directory for output files to be written. |
| `-s`, `--scopedir <path>`                  | Y | Path of the scope directory where the SAF is located. |
| `-int`, `--interpreter <type> or <regex>`  | n | Type of interpreter, either: a regex, alt, or basic. |
| `-con`, `--converter <type> or <mustache>` | n | Type of converter, either: a mustache template, http, or markdown. |
| `-f`, `--force`                            | n | Allow overwriting of existing files. |
| `-h`, `--help`                             | n | display help for command. |

## Term Ref Resolution

The [TermRef](@) resolution process has three steps:
1. Interpretation of the [TermRef](@) into variables that can be used to [identify](@) an [MRG entry](@);
2. Locating the [identified](@) [MRG Entry](@);
3. Rewriting the [TermRef](@) with a [renderable ref](@).

### Interpretation of the Term Ref

The following kinds of [TermRef](@) syntaxes are (to be) supported:
- the [basic syntax](/docs/spec-syntax/term-ref-syntax#basic-syntax), i.e. \[`show text`\](`term`#`trait`@`scopetag`:`vsntag`);
- the [alternative syntax](/docs/spec-syntax/term-ref-syntax#alternative-syntax), e.g. \[`show text`@\], which basically moves the `@`-character from the basic syntax within the square brackets, which in many (if not most) cases is more convenient for [authors](@), but has the drawback that the rendering of the plain markdown text would be rendered as [show text](@), which may be inconvenient.

Interpretation of a [TermRef](@) leads to the population of the following variables (or, in case regexes are used, named capturing groups):

<details>
<summary>Using regexes to find the values for the variables</summary>

Finding a [TermRef](@) in the file can be done by using a regular expressions (regexes - you can use [debuggex](https://www.debuggex.com/) to see what these regexps do (make sure you choose PCRE as the regex flavor to work with)).

- For the [basic syntax](/docs/spec-syntax/term-ref-syntax#basic-syntax), you can use the PCRE regex
  - [``(?:(?<=[^`\\])|^)\[(?=[^@\]]+\]\([#a-z0-9_-]*@[:a-z0-9_-]*\))``](https://www.debuggex.com/r/G1uvznpNG1mhqEx5) to find the `[` that starts a [TermRef](@), and
  - [``(?<showtext>[^\n\]@]+)\]\((?:(?<id>[a-z0-9_-]*)?(?:#(?<trait>[a-z0-9_-]+))?)?@(?<scopetag>[a-z0-9_-]*)(?::(?<vsntag>[a-z0-9_-]+))?\)``](https://www.debuggex.com/r/36D57uOvsnyPehh3) to find the various parts of the [TermRef](@) as (named) capturing groups.

- For the [alternative syntax](/docs/spec-syntax/term-ref-syntax#alternative-syntax), you can use the PCRE regex
  - [``(?:(?<=[^`\\])|^)\[(?=[^@\]]+@[:a-z0-9_-]*\](?:\([#a-z0-9_-]+\))?)``](https://www.debuggex.com/r/7dEYEdoc52QeIxf4) to find the `[` that starts a [TermRef](@), and
  - [``(?<showtext>[^\n\]@]+?)@(?<scopetag>[a-z0-9_-]*)(?::(?<vsntag>[a-z0-9_-]+?))?\](?:\((?<id>[a-z0-9_-]*)(?:#(?<trait>[a-z0-9_-]+?))?\))?``](https://www.debuggex.com/r/tMBiAk_W9ipNc9Mm) to subsequently obtain the various fields as (named) capturing groups from the PCRE regex.

Note that when a value of a named capturing group is empty, it is filled by the [TRRT](@) with (default) values according to the specifications below.
</details>

#### `showtext` (required) {#showtext}

`showtext` is a (non-empty) text that will be highlighed/enhanced, and will become clickable and/or receive other features when rendered. It MUST NOT be empty, and it MUST NOT contain the characters `@` or `]` (which we need to be able to distinguish between [TermRefs](@) and other links).

:::info Editor's note
The alternative notation assumes that the `showtext` part of a [TermRef](@) won't contain the `@` character. However, it is likely that some [authors](@) will want to use an email address as the `showtext` part of a *regular* link, e.g. as in `[rieks.joosten@tno.nl](mailto:rieks.joosten@tno.nl)`. However, since [scopetags](@) should not contain `.`-characters, `[rieks.joosten@tno.nl]` does not qualify as a `showtext` in our syntax. Also, it would be detectable if such syntax is followed by `(mailto:`. Any detected problems must result in a proper warning, and the suggestion that email addresses can be used in a [link with angle brackets](https://www.markdownguide.org/basic-syntax/#urls-and-email-addresses), e.g. `<rieks.joosten@tno.nl>`.
:::

#### `scopetag` (optional) {#scopetag}

`scopetag` is a [scopetag](@) that [identifies](@) the [scope](@) within which the [TermRef](@) is to be resolved.

If specified, it MUST appear in the [SAF](@) (of the [scope](@) from which the [TRRT](@) is called), as an element of the `scopetags` field of one of elements in the list of `scopes`. That element also contains a `scopedir` field, that can subsequently be used to obtain the [SAF](@) of that [scope](@).

If not specified, the current [scope](@) (from which the [TRRT](@) is being called) will be used. This SHOULD be the [scope](@) within which the document containing the [TermRef](@) is being maintained. Note that the preceding `@` sign may never be omitted because as it serves the purpose to distinguish [TermRefs](@) from other [Markdown links](https://www.markdownguide.org/basic-syntax/#links). A `scopetag` shall only contain characters in regex `[a-z0-9_-]`.

#### `vsntag` (optional) {#vsntag}

`vsntag` is a [versiontag](@) that [identifies](@) the version of the [terminology](@) in the [scope](@) (as [identified](@) by the `scopetag`). It MUST appear either in the `vsntag` field, or as one of the elements in the `altvsntags` field of the [SAF](@) that contains the administration of that [scope](@).

If omitted (in which case the preceding `:`-character may also be omitted from the syntax), its value will [identify](@) the default [MRG](@) of the [scope](@) (as [specified](/docs/spec-files/saf#scope-section) in the `mrgfile` field os the [SAF](@)).

#### `term` (optional) {#id}

`term` is a text that [identifies](@) a [semantic unit](@), and is specified in the [curated text](@) that documents that [semantic unit](@) (in a specific version of the  [terminology](@) of a specific [scope](@)). It will be matched against the `term` fields of [MRG entries](@) in the [MRG](@) that documents said [terminology](@).

If omitted, <!-- and the `term` field is empty as well, --> it is generated as follows (assuming the [MRG](@) to be used has already been [identified](@)):

- set `term`:=`showtext`;
- convert every character in the (regex) range `[A-Z]` to lower-case;
- convert every sequence of characters `[^A-Za-z_-]+` to (a single) `-` character;
- if the resulting `term` [matches an element in the list of texts](/docs/spec-syntax/form-phrase-syntax) in the `formPhrases` field of an [MRG entry](@), then replace `term` with the contents of the `term`-field of that same [MRG entry](@).

:::info Editor's note
We should clarify the extent to which this `matching` supports [formphrase](@) macro's, Currently, this is documented as part of the [form-phrase syntax](/docs/spec-syntax/form-phrase-syntax) which doesn't seem right.
:::

It is an error if the resulting `term` does not [identify](@) an [MRG entry](@) in the selected [MRG](@). This may mean that the `showtext` has misspellings, the `term` field was not specified where it had to, or the list of `[formphrases](@)` in some [MRG entry](@) should have included more elements.

:::info Editor's note
[The Porter Stemming Algorithm](https://tartarus.org/martin/PorterStemmer/) is a process for removing the commoner morphological and inflexional endings from words in English. Its main use is as part of a term normalisation process that is usually done when setting up Information Retrieval systems. The mentioned site links to lots of freely useable code that the TRRT might want to consider using.

Perhaps the [TRRT](@) may use this tool as a means for generating the `term` field from the `showtext` if necessary. However, we would need to first experiment with that to see whether or not, c.q. to what extent this conversion does what it is expected to do.
:::

#### `trait` (optional) {#trait}

`trait` [identifies](@) a particular kind of descriptive text that is associated with the [semantic unit](@). If specified, it must be one of the elements in the list of headingid's as specified in [the `headingids` field](/docs/spec-files/mrg#mrg-entries) of the [MRG entry](@). If omitted, the preceding `#`-character should also be omitted.

### Locating the identified MRG Entry

As soon as the variables have been provided with a value, the [MRG](@) can be found by following a sequence of steps:

1. **get the [scopedir](@) and [SAF](@) associated with the `scope` variable of the [TermRef](@)**. If the value of the `scopetag` variable is the [scopetag](@) of the current [scope](@) (as specified when the [tool was called](#calling-the-tool)), then use the current [scopedir](@). Otherwise, look up the [scopedir](@) from the [`scopes` section](/docs/spec-files/saf#scopes) of the current [SAF](@). From the resulting [scopedir](@), read the [SAF](@) (i.e. the `saf.yaml` file in the root of the [scopedir](@)).

2. **get the [MRG](@) associated with the `vsntag` of the [TermRef](@)**. Search the element in the [`versions` section](docs/spec-files/mrg#versions) of the [SAF](@) where the `vsntag` variable is either the value of the `vsntag` field, or appears as one of the elements in the `altvsntags` field. Then, obtain the filename of the [MRG](@) from the `mrgfile` field of that element.

3. **identify the [MRG entry](@) associated with the `id` field of the [TermRef](@)**. Get the [MRG](@) from the location specified by the URL `<scopedir>`/`<glossarydir>`/`<mrgfile>` (which are all in the context of [scope](@) as identified by the `scopetag` variable). The [MRG entry](@) will be [identified](@) by a process that starts with the set of all [entries](mrg-entry@) that exist in the selected [MRG](@), and then weeding out any non-matching [entries](mrg-entry@) by applying the following steps:
    - since `term` must be present, all [entries](mrg-entry@) are removed whose `term` field differs from the `term` variable;
    - then, if the variable `termtype` is present, all [entries](mrg-entry@) whose `termtype` field has a different value from what that variable holds, are removed from the set;
    - If the resulting set contains exactly one [MRG entry](@), this is the one that is selected; otherwise, a warning is raised.

### Rewriting the Term Ref with a Renderable Ref

<img
  alt="From this point onward, texts are under construction"
  src={useBaseUrl('images/wip/wip-under-construction-from-here-onward.png')}
/><br/><br/>

The [TermRef](@) will by default dereference to a human readable, rendered version of the [curated text](@) associated with the [identified](@) [MRG entry](@), which can be obtained through the URL located in the `navurl` field of the [MRG entry](@), which the text `#<trait>` is appended if a `trait` was specified.

:::info Editor's note
We should think about how to document [renderable refs](@) in such a way that they can easily be found and used for different roles ([authors](@), curators, developers) and purposes (writing a trrt-config file, adding a new type of [renderable ref](@), etc.).
:::

The text with which the [TermRef](@) is to be replaced can have various formats. This enables the [TRRT](@) to be used in different contexts, and its results to be further processed by a variety of third-party rendering tools.

<details>
  <summary>Examples of term-ref replacements</summary>

<Tabs
  defaultValue="simple"
  values={[
    {label: 'ToIP Style', value: 'simple'},
    {label: 'eSSIF-Lab Style', value: 'complex'},
  ]}>

<TabItem value="simple">

The simplest example is where a [TermRef](@) is replaced with a regular [markdown link](https://www.markdownguide.org/basic-syntax/#links)

In this case, the [TermRef](@) `[Actions](@)` is replaced with ``[Actions](/<hrgfile>#action)``
where:

- `hrgfile` is the contents of the field [SAF](@).`scope.hrgfile`.

Note that if the [TermRef](@) refers to a [scope](@) that differs from the current [scope](@), then the URL should be preceeded by the text specified in the `website` field of the [SAF](@) of that [scope](@), because it would not be a relative (local) hyperlink.

</TabItem>
<TabItem value="complex">

A more complex example is what is done within eSSIF-Lab, where the [curators](@) not only want [terms](@) to be linked to their (rendered) [curated texts](@), but also want them to be provided with a tooltip that states their [definitions](@).

In this [scope](@), the [TermRef](@) `[Actions](@)` is replaced with `<Term reference="action" popup="<popuptext>">Actions</Term>`
where:

- `<popuptext>` is the text provided in the `hoverText` field of the [MRG entry](@) whose `term` field is `action`, and
- `<Term ...>` and `</Term>` represent a React component that supports linking and tooltip functionality, so that users hovering over the link will see a popup/tooltip with the text `<popuptext>`, and will navigate to the location of the (human readable, i.e. rendered) file that contains details and further explanations, as specified in the `navurl` field of the [MRG entry](@).

:::info Editor's note
The implementation of the `<Term ...>` ... `</Term>` construct will differ from that which is used by eSSIF-Lab, because a [term](@) that is defined in this, or another [scope](@), lives in the [curated file](@) at `scopedir`/`curatedir`/`locator`, where
- `scopedir` is the URL that locates the [scope directory](@) of that [scope](@);
- `curatedir` is the directory in that `scopedir` where [semantic units](@) (c.q. [curated texts](@)) live; its value is found both in the [SAF](@) and in the [MRG](@) of the [scope](@);
- `locator` is the path (including filename), relative to `scopedir`/`curatedir`/, of the [curated file](@) that describes the [semantic unit](@) that is being referred to.
:::

</TabItem>
</Tabs>

</details>

The essentials of the rewriting start with the [scopedir](@) of the [scope](@) from which the [TRRT](@) is called, and proceed as follows:
- access the [SAF](@), and in case the `scopetag` is not of this [scope](@), look up the [scopedir](@) associated with that `scopetag` and obtain its [SAF](@);
- using the `vsntag`, locate the [MRG](@) (or if `vsntag` isn't specified, use the [scope's](@) default [MRG](@)-file as specified in the [scope's](@) [SAF](@));
- Find the [MRG entry](@) that has a `term`-field that is the same as `term`;

At this point, all data is available for constructing the replacement text. As we have seen, it depends on the situation that need to be supported how the actual construction needs to be done.

## Processing, Errors and Warnings

The [TRRT](@) starts by reading its command-line and configuration file. If the command-line has a key that is also found in the configuration file, the command-line key-value pair takes precedence. The resulting set of key-value pairs is tested for proper syntax and validity. Every improper syntax and every invalidity found will be logged. Improper syntax may be e.g. an invalid [globpattern](https://en.wikipedia.org/wiki/Glob_(programming)#Syntax). Invalidities include non-existing directories or files, lack of write-permissions where needed, etc.

Then, the [TRRT](@) reads the specified input files (in arbitrary order), and for each of them, produces an output file that is the same as the input file except for the fact that all [TermRefs](@) have been replaced with regular [markdown links](https://www.markdownguide.org/basic-syntax/#links), and (optionally) with additional texts that are to be used by third-party rendering tools for enhanced rendering of such links. An example of this would be text that can be used to enhance a link with a popup that contains the definition, or a description of the [term](@) that is being referenced.

The [TRRT](@) logs every error- and/or warning condition that it comes across while processing its configuration file, commandline parameters, and input files, in a way that helps tool-operators and document [authors](@) to identify and fix such conditions.

## Deploying the Tool

The [TRRT](@) comes with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and author/modify CI-pipes to use that deployment.