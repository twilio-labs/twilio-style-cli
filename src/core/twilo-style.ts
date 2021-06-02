import Command from '@oclif/command';

export default abstract class TwilioStyleCommand extends Command {
  /**
   * The main OClif run command - this function will setup the environment and then invoke the command doRun method. It will then print the result to screen
   */
  async run(): Promise<void> {
    await this.doRun();
  }

  /**
   * Main method each command should implement
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  abstract doRun(): Promise<Record<string, any> | void | null>;
}
