import { DataTypes } from 'sequelize';
import sequelize from '../client.js';
import User from './users.js';

// TODO: change id to UUID
// TODO: use types for sequelize models
const Purchase = sequelize.define('Purchase', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  plan: {
    type: DataTypes.STRING,
    allowNull: true
  },
  steps: {
    type: DataTypes.JSONB,
    allowNull: false
  }
}, {
  timestamps: true,
  paranoid: true
});

User.hasMany(Purchase);
Purchase.belongsTo(User);

export default Purchase;
