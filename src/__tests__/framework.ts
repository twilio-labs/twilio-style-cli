import { Config, IConfig } from '@oclif/config';

import { TwilioStyleCommand } from '../core';

export const createTest =
  <C extends TwilioStyleCommand>(Command: new (argv: string[], config: IConfig) => C) =>
  async (...args: string[]): Promise<C> => {
    const root = __dirname;
    const config = new Config({ root });
    await config.load();

    return new Command(args, config);
  };
