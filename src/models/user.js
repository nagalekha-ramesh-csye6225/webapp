const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    account_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    account_updated: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    verification_email_sent_timestamp: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    user_verification_status : {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }
  }, 
  {
    tableName: 'users',
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ['username']
        }
    ],
    updatedAt: 'account_updated', // Map updatedAt to account_updated
    createdAt: 'account_created', // Map createdAt to account_created
  }
);

module.exports = User;
