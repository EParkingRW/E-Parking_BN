module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
      },
      roleId: {
          type: Sequelize.UUID,
          foreignKey: true,
          allowNull: false,
          defaultValue: "fe2900d3-cd33-4a5f-abda-1b0cd1a91c57",
      },
      email: {
          type: Sequelize.STRING,
          unique: true,
      },
      password: {
          type: Sequelize.STRING,
      },
      name: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      phoneNumber: {
          type: Sequelize.STRING,
      },
      status: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
          comment: '0: offline, 1: online',
      },
    },
    {
      tableName: 'tblUsers',
      timestamps: true,
    },
  );

  User.associate = (models) => {
    User.belongsTo(models.Role, {
      as: 'role',
      foreignKey: 'roleId',
      onDelete: 'CASCADE',
    });
    User.hasMany(models.Payment, {
      foreignKey: {
        name: 'userId',
        onDelete: 'CASCADE',
      },
    });
  };

  return User;
};