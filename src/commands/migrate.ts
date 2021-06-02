import { flags } from '@oclif/command';

import { TwilioStyleCommand } from '../core';

export default class Migrate extends TwilioStyleCommand {
  static description = 'Tool to help onboard with Twilio Style';

  static examples = [`$ twilio-style-cli migrate`];

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  async doRun(): Promise<void> {
    this.log('hello world');
  }
}
