import Migrate from '../../commands/migrate';
import { createTest } from '../framework';

describe('commands/migrate', () => {
  it('should run hello', async () => {
    const cmd = await createTest(Migrate)();
  });
});
