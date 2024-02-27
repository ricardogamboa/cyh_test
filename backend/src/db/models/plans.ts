import { DataTypes } from 'sequelize';
import sequelize from '../client.js';

// TODO: change id to UUID
// TODO: use types for sequelize models
const Plan = sequelize.define('Plan', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  steps: {
    type: DataTypes.JSONB,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  timestamps: true
});

export default Plan;
