import { Sequelize } from 'sequelize';

import { DB_URL } from './../config.js';


const sequelize = new Sequelize(DB_URL as string);

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;
