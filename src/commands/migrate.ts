import * as fs from 'fs';

import { OutputFlags } from '@oclif/parser/lib/parse';
import { flags } from '@oclif/command';
import { ESLint, Linter } from 'eslint';
import { CLIError } from '@oclif/errors';

import { TwilioStyleCommand } from '../core';

export default class Migrate extends TwilioStyleCommand {
  static description = 'Tool to help onboard with Twilio Style';

  static examples = [`$ twilio-style migrate`];

  static flags = {
    help: flags.help({ char: 'h' }),
    config: flags.string({
      required: true,
      description: 'The path to your eslint configuration file',
      char: 'c',
      parse: (input) => {
        if (!fs.existsSync(TwilioStyleCommand.resolve(input))) {
          throw new CLIError(`Configuration ${input} does not exist`, { exit: 1 });
        }

        return input;
      },
    }),
    extensions: flags.string({
      multiple: true,
      description: 'The file extensions to test',
      char: 'e',
    }),
    dir: flags.string({
      required: true,
      description: 'The directory/path to lint',
      char: 'd',
    }),
    'ignore-pattern': flags.string({
      multiple: true,
      description: 'The directory/path to ignore when linting',
      char: 'i',
    }),
  };

  async doRun(): Promise<void> {
    this.log(`Running linter on ${this.flags.dir}`);

    const eslint = this.getESLintEngine();
    const config: Linter.BaseConfig = this.parseConfiguration();
    const results = await eslint.lintFiles(this.flags.dir);
    this.log('Setting linting errors as warn');

    ESLint.getErrorResults(results).forEach((e) => {
      e.messages.forEach((m: Linter.LintMessage) => {
        config.rules = config.rules || {};

        if (m.ruleId && !config.rules[m.ruleId]) {
          config.rules[m.ruleId] = 'warn';
        }
      });
    });

    this.updateConfiguration(config);
  }

  /**
   * Creates an ESLint engine
   * @private
   */
  private getESLintEngine(): ESLint {
    const options: ESLint.Options = { overrideConfigFile: this.configPath };
    if (this.flags['ignore-pattern']) {
      options.overrideConfig = {
        ignorePatterns: this.flags['ignore-pattern'],
      };
    }
    if (this.flags.extensions) {
      options.extensions = this.flags.extensions;
    }

    return new ESLint(options);
  }

  /**
   * Updates the configuration if possible, otherwise prints instruction to do so manually
   * @param config  the ESLint configuration to update
   * @private
   */
  private updateConfiguration(config: Linter.BaseConfig): void {
    if (this.isConfigurationUpdatable()) {
      fs.writeFileSync(this.configPath, TwilioStyleCommand.jsonPretty(config));
      this.log(`Successfully updated rules overrides`);
      return;
    }

    this.log(
      `Successfully computed new configuration rules. Please update your ${this.configPath} rules with the following:`,
    );
    this.log(TwilioStyleCommand.jsonPretty(config.rules));
  }

  /**
   * Parses the ESLint configuration of a variety format
   * @private
   */
  // eslint-disable-next-line consistent-return
  private parseConfiguration(): Linter.BaseConfig {
    const { configPath } = this;

    if (configPath.endsWith('.json') || configPath.endsWith('rc')) {
      return JSON.parse(fs.readFileSync(configPath, 'utf8'));
    }

    if (configPath.endsWith('.js')) {
      // eslint-disable-next-line global-require, @typescript-eslint/no-require-imports
      return require(configPath);
    }

    this.error(`Unsupported file: ${configPath}`);
    this.exit(1);
  }

  /**
   * Determines whether the file can be updated or not
   */
  private isConfigurationUpdatable(): boolean {
    return !this.configPath.endsWith('.js');
  }

  /**
   * Returns full path to the configuration
   */
  /* istanbul ignore next */
  get configPath(): string {
    return TwilioStyleCommand.resolve(this.flags.config);
  }

  /**
   * Parses the flags passed to this command
   */
  /* istanbul ignore next */
  get flags(): OutputFlags<typeof Migrate.flags> {
    return this.parse(Migrate).flags;
  }
}
