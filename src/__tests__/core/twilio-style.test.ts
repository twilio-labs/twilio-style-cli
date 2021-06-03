import { CLIError } from '@oclif/errors';

import TwilioStyleCommand from '../../core/twilo-style';
import { createTest } from '../framework';

const str = `{
  "test": true
}`;

describe('core/twilio-style', () => {
  class TestCommand extends TwilioStyleCommand {
    async doRun(): Promise<void> {
      await Promise.resolve();
    }
  }

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should invoke doRun', async () => {
    const cmd = await createTest(TestCommand)();
    const doRun = jest.spyOn(cmd, 'doRun');

    await cmd.run();
    expect(doRun).toHaveBeenCalledTimes(1);
  });

  it('should resolve path', () => {
    expect(TwilioStyleCommand.resolve('randomPath')).toContain('randomPath');
    expect(TwilioStyleCommand.resolve('randomPath')).toContain(process.cwd());
  });

  it('should pretty print JSON', () => {
    expect(TwilioStyleCommand.jsonPretty({ test: true })).toEqual(str);
  });

  it('should return CLIError', async (done) => {
    const cmd = await createTest(TestCommand)();
    const err = new CLIError('random error');
    try {
      await cmd.catch(err);
    } catch (e) {
      expect(e).toBeInstanceOf(CLIError);
      expect(e.message).toEqual(err.message);
      done();
    }
  });

  it('should convert to CLIError', async (done) => {
    const cmd = await createTest(TestCommand)();
    const err = new Error('random error');
    try {
      await cmd.catch(err);
    } catch (e) {
      expect(e).toBeInstanceOf(CLIError);
      expect(e.message).toEqual(err.message);
      done();
    }
  });
});
