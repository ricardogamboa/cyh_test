import User from './models/users.js';
import Plan from './models/plans.js';
import planSeeds from './plan_seeds.json' assert { type: 'json' };
import userSeeds from './user_seeds.json' assert { type: 'json' };

export const plantSeeds = async () => {
  for (const user of userSeeds) {
    //TODO: Encrypt password so we don't save a plain string
    await User.create(user);
  }
  for (const plan of planSeeds) {
    await Plan.create(plan);
  }
}
