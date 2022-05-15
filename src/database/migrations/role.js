module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable('tblRole', {
        id: {
            type: Sequelize.UUID,
            defaultValue: require("sequelize").UUIDV4,
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
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
        },
      }),
    down: (queryInterface) => queryInterface.dropTable('tblRole'),
  };
  