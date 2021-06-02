import { Command, flags } from '@oclif/command';

export default class Migrate extends Command {
  static description = 'Tool to help onboard with Twilio Style';

  static examples = [
    `$ twilio-style-cli migrate`,
  ];

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [{ name: 'file' }];

  async run() {
    this.log('hello world');

  }
}
