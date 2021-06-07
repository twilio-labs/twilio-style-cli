twilio-style-cli
================

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/twilio-style-cli.svg)](https://npmjs.org/package/twilio-style-cli)
[![Downloads/week](https://img.shields.io/npm/dw/twilio-style-cli.svg)](https://npmjs.org/package/twilio-style-cli)
[![License](https://img.shields.io/npm/l/twilio-style-cli.svg)](https://github.com/twilio-labs/twilio-style-cli/blob/master/package.json)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

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
twilio-style-cli/0.1.1 darwin-x64 node-v12.18.3
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

Tool to help onboard with Twilio Style; useful for big projects with many lint errors. This command will run the linter for the directory/path provided, take the list of errors and add them as warning overrides in your eslint configuration.

```
USAGE
  $ twilio-style migrate

OPTIONS
  -c, --config=config                  (required) The path to your eslint configuration file
  -d, --dir=dir                        (required) The directory/path to lint
  -e, --extensions=extensions          The file extensions to test
  -h, --help                           show CLI help
  -i, --ignore-pattern=ignore-pattern  The directory/path to ignore when linting

EXAMPLE
  $ twilio-style migrate --config .eslintrc.json --dir src/
```

_See code: [src/commands/migrate.ts](https://github.com/twilio-labs/twilio-style-cli/blob/v0.1.1/src/commands/migrate.ts)_
<!-- commandsstop -->

## Contributing

Check out [CONTRIBUTING](CONTRIBUTING.md) for more information on how to contribute to this project.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/ahcai"><img src="https://avatars.githubusercontent.com/u/4912483?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alice Cai</b></sub></a><br /><a href="https://github.com/twilio-labs/twilio-style-cli/commits?author=ahcai" title="Code">💻</a> <a href="https://github.com/twilio-labs/twilio-style-cli/pulls?q=is%3Apr+reviewed-by%3Aahcai" title="Reviewed Pull Requests">👀</a> <a href="#ideas-ahcai" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
