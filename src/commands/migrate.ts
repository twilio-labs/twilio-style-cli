import * as fs from 'fs';

import { flags } from '@oclif/command';
import { ESLint, Linter } from 'eslint';

import { TwilioStyleCommand } from '../core';

export default class Migrate extends TwilioStyleCommand {
  static description = 'Tool to help onboard with Twilio Style';

  static examples = [`$ twilio-style-cli migrate`];

  static flags = {
    help: flags.help({ char: 'h' }),
    config: flags.string({
      required: true,
      description: 'The path to your eslint configuration file',
      char: 'c',
    }),
    dir: flags.string({
      required: true,
      description: 'The directory to lint',
      char: 'd',
    }),
  };

  async doRun(): Promise<void> {
    const { flags } = this.parse(Migrate);
    const configFilePath = flags.config;
    const eslint = new ESLint({ overrideConfigFile: configFilePath });
    const errorRules = new Set<string>();

    const results = await eslint.lintFiles(flags.dir);
    const errors = ESLint.getErrorResults(results);
    errors.forEach((error) => {
      error.messages.forEach((message: Linter.LintMessage) => {
        if (message.ruleId) {
          errorRules.add(message.ruleId);
        }
      });
    });

    const config = JSON.parse(fs.readFileSync(configFilePath, 'utf8'));
    const updatedRules = config.rules || {};
    errorRules.forEach((rule: string) => {
      updatedRules[rule] = 'warn';
    });
    config.rules = updatedRules;
    const updatedConfig = JSON.stringify(config, null, 2);

    fs.writeFile(configFilePath, updatedConfig, 'utf8', (error) => {
      if (error) {
        this.log(`Unable to write to ${configFilePath}`, error);
      } else {
        this.log(`Successfully wrote rule overrides to ${configFilePath}`);
      }
    });
  }
}
