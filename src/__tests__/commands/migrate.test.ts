/* eslint-disable @typescript-eslint/ban-ts-comment */
import Migrate from '../../commands/migrate';
import { createTest } from '../framework';

describe('commands/migrate', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('isConfigurationUpdatable', () => {
    it('should be true', async () => {
      const cmd = await createTest(Migrate)('--config', '.eslintrc.json', '--dir', 'src');
      // @ts-ignore
      expect(cmd.isConfigurationUpdatable()).toEqual(true);
    });
  });
});
