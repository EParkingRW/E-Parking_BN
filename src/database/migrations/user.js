'use strict';

module.exports = {
  up: async (queryInterface,Sequelize) => {
    await queryInterface.createTable("tblUsers", {
        id: {
          primaryKey: true,
          allowNull: false,
          defaultValue: Sequelize.literal("gen_random_uuid()"),
          type: Sequelize.UUID,
        },
        roleId: {
          type: Sequelize.UUID,
          foreignKey: true,
          allowNull: false,
          defaultValue: "fe2900d3-cd33-4a5f-abda-1b0cd1a91c57",
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        comment: '0: offline, 1: online',
     },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('tblUsers');
  }
};