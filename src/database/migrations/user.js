'use strict';
module.exports = {
  up: async (queryInterface,DataTypes) => {
    await queryInterface.createTable("tblUsers", {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          comment: 'The User id.'
        },
      roleId: {
        type: DataTypes.UUID,
        foreignKey: true,
        allowNull: false,
        defaultValue: "50b5cfca-c3ef-11ec-a2e8-c4346b2430f5",
    },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      phoneNumber: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        comment: '0: offline, 1: online',
     },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('tblUsers');
  }
};