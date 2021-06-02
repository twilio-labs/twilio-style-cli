import { Config } from '@oclif/test';
import { IConfig } from '@oclif/config';

import { TwilioStyleCommand } from '../core';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createTest =
  <C extends TwilioStyleCommand>(Command: new (argv: string[], config: IConfig) => C) =>
  async (...args: string[]): Promise<C> => {
    const config = await Config.load();
    return new Command(args, config);
  };
