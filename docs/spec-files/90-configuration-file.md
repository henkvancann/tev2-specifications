---
id: configuration-file
sidebar_label: TEv2 Config Files
date: 20231129
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configuration Files for TEv2 tools

Every [TEv2 tool](@) can be called using a (YAML) configuration file that specifies the parameters (arguments) that otherwise would need to be supplied on the commandline. This is done by using the command line parameter `-c <path>` or `--config <path>` (where `<path>` is the path (including the filename) of the configuration file that is to be used.

The configuration file is in a [YAML format](https://yaml.org/spec/). When the `-c` or `--config` option is specified when calling a [TEv2 tool](@), reads the specified file and evaluates all fields that are not in a specific section, as well as all fields that are in a tool-specific section. A field whose name is defined in the specifications for that tool will be interpreted as specified there. All other fields are ignored.

<details>
  <summary>Example configuration file</summary>
The following file has been used in the context of developing this documentation, and put in the root directory of the Github repository. In that root, there is a `docs` directory that contains the [curated texts](@). 

~~~ yaml
# TNO Terminology Design tools configuration file (yaml)

## General
scopedir: docs      # path of the scope directory where the SAF is located
onNotExist: warn    # the action in case something that is necessary for further processing didn't exist

## Machine Readable Glossary Tool
mrgt
  vsntag:             # versiontag for which the MRG needs to be (re)generated. Leave empty to process all versions

## Human Readable Glossary Tool
hrgt
  output: .           # (root) directory for output files to be written
  interpreter: basic  # type of interpreter (predefined, or PCRE regex)
  converter: essiflab # type of converter (predefined, or a handlebars expression)
  force: true         # toggle overwriting of existing files
  input:              # glob pattern strings for files to be processed by the HRGT
    - "/docs/glossary*.md"

## Term Reference Resolution Tool
trrt
  output: .           # (root) directory for output files to be written
  interpreter: basic  # type of interpreter (predefined, or PCRE regex)
  converter: >-       # type of converter (predefined, or a handlebars expression)
    <a
    href="{{localize navurl}}{{#if trait}}#{{trait}}{{/if}}"
    hovertext="{{#if hoverText}}{{hoverText}}{{else}}{{#if glossaryTerm}}{{glossaryTerm}}{{else}}{{capFirst term}}{{/if}}: {{noRefs glossaryText type="markdown"}}{{/if}}"
    >{{showtext}}</a>
  force: true         # toggle overwriting of existing files
  input:              # glob pattern strings for files to be processed by the TRRT
    - "**/*.md"
~~~

</details>

Here below, you can find the items you can specify in the various configuration sections.

<details>
  <summary>Legend</summary>

The columns in the following table are defined as follows:
1. **`Parameter`** specifies the parameter and further specifications.
2. **`Req'd`** specifies whether (`Y`) or not (`n`) the parameter is required to be present when the tool is being called for actual processing (so not in case a `help` or `version` parameter is specified). If `Y`, the parameter MUST either be present in the configuration file, or as a command-line parameter.
3. **`Description`** specifies the meaning of the `Value` field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

If a parameter is specified on the command line, it must be preceeded by the `--` (e.g., as in `--scopedir`), or the alternative short form can be used as described in the specifications of the individual tools.
</details>

<Tabs
  defaultValue="mrg-import"
  values={[
    {label: 'Generic', value: 'generic'},
    {label: 'MRG Import', value: 'mrg-import'},
    {label: 'TRRT', value: 'trrt'},
    {label: 'MRGT', value: 'mrgt'},
    {label: 'HRGT', value: 'hrgt'},
  ]}>

<TabItem value="generic">

Parameters that can be used by most, if not all tools can be put both in tool-specific sections, or in the 'root' of the YAML file:

| Generic Parameters     | Req'd | Description |
| :--------------------- | :---: | :---------- |
| `scopedir: <path>`       | Y | Path of the scope directory where the SAF is located. |
| `version: <bool>`        | n | Specify whether or not the version number of the tool must be output. |
| `onNotExist: <action>`   | n | the action in case something that is necessary for further processing didn't exist

The `<action>` parameter can take the following values:

| `<action>` | Description |
| :--------- | :---------- |
| `'throw'`  | an error is thrown (an exception is raised), and processing will stop. |
| `'warn'`   | a message is displayed (and logged) and processing continues. |
| `'log'`    | a message is written to a log(file) and processing continues. |
| `'ignore'` | processing continues as if nothing happened. |

</TabItem>

<TabItem value="mrg-import">

Parameters that are specific to the [MRG Import](/docs/spec-tools/mrg-import) tool can be put in the YAML section `mrg-import`:

| MRG Import Parameters | Req'd | Description |
| :-------------------- | :---: | :---------- |
| `onNotExist: <action>`  | n | The action in case an MRG file unexpectedly does not exist. |

The `<action>` parameter can take the following values:

| `<action>` | Description |
| :--------- | :---------- |
| `'throw'`  | an error is thrown (an exception is raised), and processing will stop. |
| `'warn'`   | a message is displayed (and logged) and processing continues. |
| `'log'`    | a message is written to a log(file) and processing continues. |
| `'ignore'` | processing continues as if nothing happened. |

</TabItem>

<TabItem value="trrt">

Parameters that are specific to the [TRRT](/docs/spec-tools/trrt) can be put in the YAML section `trrt`:

| TRRT Parameters                 | Req'd | Description |
| :------------------------------ | :---: | :---------- |
| `output: <dir>`                   | Y | (Root) directory for output files to be written. |
| `interpreter: <type> or <regex>`  | n | Specifies the interpreter to be used to detect [TermRefs](@). This can either be a predefined interpreter, or a [(PCRE) regex](https://www.debuggex.com/cheatsheet/regex/pcre). |
| `converter: <type> or <hexpr>`    | n | Specifies the converter to be used to produce the converted [TermRef](@). This can either be a predefined converter, or a [handlebars expression](https://handlebarsjs.com/guide/#what-is-handlebars). |
| `force: <bool>`                   | n | If `<bool>` is `true`, allow files in the output directory to be overwritten. If `<bool>` is `false` or unspecified, output files will not overwrite existing files. |

</TabItem>

<TabItem value="mrgt">

Parameters that are specific to the [mrgt](/docs/spec-tools/mrgt) can be put in the YAML section `mrgt`:

| Key                  | Req'd | Description |
| :------------------- | :---: | :---------- |
| `onNotExist: <action>` | n | The action in case a `vsntag` was specified, but wasn't found in the SAF. |
| `vsntag: <vsntag>`     | n | Versiontag for which the MRG needs to be (re)generated. |
| `prune: <bool>`        | n | If `<bool>` is `true`, remove all files in the [glossarydir](@) with filename `mrg.<something>.yaml`, where the filename does not contain an [MRG](@) whose filename is specified in the [SAF](@). If `<bool>` is `false` or unspecified, this option does nothing. |


The `<action>` parameter can take the following values:

| `<action>` | Description |
| :--------- | :---------- |
| `'throw'`  | an error is thrown (an exception is raised), and processing will stop. |
| `'warn'`   | a message is displayed (and logged) and processing continues. |
| `'log'`    | a message is written to a log(file) and processing continues. |
| `'ignore'` | processing continues as if nothing happened. |

</TabItem>

<TabItem value="hrgt">

Parameters that are specific to the [hrgt](/docs/spec-tools/hrgt) can be put in the YAML section `hrgt`

| Parameter                       | Req'd | Description |
| :------------------------------ | :---: | :---------- |
| `output: <dir>`                   | Y | (Root) directory for output files to be written. |
| `interpreter: <type> or <regex>`  | n | Specifies the interpreter to be used to detect [MRGRefs](@). This can either be a predefined interpreter, or a [(PCRE) regex](https://www.debuggex.com/cheatsheet/regex/pcre). |
| `converter: <type> or <hexpr>`    | n | Specifies the converter to be used to produce [HRG lists](@). This can either be a predefined converter, or a [handlebars expression](https://handlebarsjs.com/guide/#what-is-handlebars). |
| `force: <bool>`                   | n | If `<bool>` is `true`, allow files in the output directory to be overwritten. If `<bool>` is `false` or unspecified, output files will not overwrite existing files. |

</TabItem>

</Tabs>

---