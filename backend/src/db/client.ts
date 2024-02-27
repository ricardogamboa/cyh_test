import { Sequelize } from 'sequelize';

// TODO use env vars
const sequelize = new Sequelize('postgres://postgres:pass@127.0.0.1:5432/cyh');

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;
