import * as path from 'path';

import Command from '@oclif/command';
import { CLIError } from '@oclif/errors';

export default abstract class TwilioStyleCommand extends Command {
  static readonly cwd: string = process.cwd();

  /**
   * Resolves the path
   * @param input
   */
  static resolve(input: string): string {
    return path.join(this.cwd, path.relative(this.cwd, input));
  }

  /**
   * Pretty prints a JSON object
   * @param input the input to print pretty
   */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-module-boundary-types
  static jsonPretty(input: any): string {
    return JSON.stringify(input, null, 2);
  }

  /**
   * The main OClif run command - this function will setup the environment and then invoke the command doRun method. It will then print the result to screen
   */
  async run(): Promise<void> {
    await this.doRun();
  }

  /**
   * Converts exception to {@link CLIError}
   * @param err
   */
  async catch(err: Error): Promise<void> {
    if (err instanceof CLIError) {
      throw err;
    }

    throw new CLIError(err, { exit: 1 });
  }

  /**
   * Main method each command should implement
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  abstract doRun(): Promise<Record<string, any> | void | null>;
}
