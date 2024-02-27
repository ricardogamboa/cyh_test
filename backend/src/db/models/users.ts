import { DataTypes } from 'sequelize';
import sequelize from '../client.js';

// TODO: change id to UUID and use an authentication service so we don't store password
// TODO: use types for sequelize models
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true,
  defaultScope: {
    attributes: { exclude: ['password'] },
  }
});

export default User;
