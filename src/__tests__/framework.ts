import { Config } from '@oclif/test';
import { IConfig } from '@oclif/config';

import { TwilioStyleCommand } from '../core';

type Constructor<C> = new (argv: string[], config: IConfig) => C;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createTest =
  <C extends TwilioStyleCommand>(Command: Constructor<C>) =>
  async (...args: string[]): Promise<C> => {
    const config = await Config.load();
    return new Command(args, config);
  };
