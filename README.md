twilio-style-cli
================

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/twilio-style-cli.svg)](https://npmjs.org/package/twilio-style-cli)
[![Downloads/week](https://img.shields.io/npm/dw/twilio-style-cli.svg)](https://npmjs.org/package/twilio-style-cli)
[![License](https://img.shields.io/npm/l/twilio-style-cli.svg)](https://github.com/twilio-labs/twilio-style-cli/blob/master/package.json)

CLI for [Twilio Style](https://github.com/twilio-labs/twilio-style).

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g twilio-style-cli
$ twilio-style COMMAND
running command...
$ twilio-style (-v|--version|version)
twilio-style-cli/0.1.0 darwin-x64 node-v12.18.3
$ twilio-style --help [COMMAND]
USAGE
  $ twilio-style COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`twilio-style help [COMMAND]`](#twilio-style-help-command)
* [`twilio-style migrate`](#twilio-style-migrate)

## `twilio-style help [COMMAND]`

display help for twilio-style

```
USAGE
  $ twilio-style help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `twilio-style migrate`

Tool to help onboard with Twilio Style

```
USAGE
  $ twilio-style migrate

OPTIONS
  -c, --config=config                  (required) The path to your eslint configuration file
  -d, --dir=dir                        (required) The directory/path to lint
  -h, --help                           show CLI help
  -i, --ignore-pattern=ignore-pattern  The directory/path to ignore when linting

EXAMPLE
  $ twilio-style migrate
```

_See code: [src/commands/migrate.ts](https://github.com/twilio-labs/twilio-style-cli/blob/v0.1.0/src/commands/migrate.ts)_
<!-- commandsstop -->
