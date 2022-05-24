module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable('tblRole', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.literal("gen_random_uuid()"),
            primaryKey: true,
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        aboutRole: {
            type: Sequelize.TEXT,
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      }),
    down: (queryInterface) => queryInterface.dropTable('tblRole'),
  };