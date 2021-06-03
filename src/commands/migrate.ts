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

    let config: any;
    try {
      config = JSON.parse(fs.readFileSync(configFilePath, 'utf8'));
    } catch (error) {
      this.log(`Unable to read or parse ${configFilePath}`, error);
    }

    config.rules = config.rules || {};
    const results = await eslint.lintFiles(flags.dir);
    ESLint.getErrorResults(results).forEach((e) => {
      e.messages.forEach((m: Linter.LintMessage) => {
        if (m.ruleId && !config.rules[m.ruleId]) {
          config.rules[m.ruleId] = 'warn';
        }
      });
    });

    const updatedConfig = JSON.stringify(config, null, 2);
    try {
      fs.writeFileSync(configFilePath, updatedConfig);
      this.log(`Successfully wrote rule overrides to ${configFilePath}`);
    } catch (error) {
      this.log(`Unable to write to ${configFilePath}`, error);
    }
  }
}
