twilio-style-cli
================

Twilio Style CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/twilio-style-cli.svg)](https://npmjs.org/package/twilio-style-cli)
[![Downloads/week](https://img.shields.io/npm/dw/twilio-style-cli.svg)](https://npmjs.org/package/twilio-style-cli)
[![License](https://img.shields.io/npm/l/twilio-style-cli.svg)](https://github.com/twilio-labs/twilio-style-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g twilio-style-cli
$ twilio-style-cli COMMAND
running command...
$ twilio-style-cli (-v|--version|version)
twilio-style-cli/0.0.0 darwin-x64 node-v12.18.3
$ twilio-style-cli --help [COMMAND]
USAGE
  $ twilio-style-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`twilio-style-cli help [COMMAND]`](#twilio-style-cli-help-command)
* [`twilio-style-cli migrate [FILE]`](#twilio-style-cli-migrate-file)

## `twilio-style-cli help [COMMAND]`

display help for twilio-style-cli

```
USAGE
  $ twilio-style-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `twilio-style-cli migrate`

Tool to help onboard with Twilio Style

```
USAGE
  $ twilio-style-cli migrate --config [ESLINT_FILE_PATH] --dir [FILE_PATH]

OPTIONS
  -h, --help  show CLI help
  --config    The path to your eslintrc configuration file
  --dir       The directory to lint

EXAMPLE
  $ twilio-style-cli migrate --config ./eslintrc --dir src/
```

_See code: [src/commands/migrate.ts](https://github.com/twilio-labs/twilio-style-cli/blob/v0.0.0/src/commands/migrate.ts)_
<!-- commandsstop -->
