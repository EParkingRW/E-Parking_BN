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
          defaultValue: Sequelize.UUIDV1,
          // defaultValue: 3,
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

  User.associate = () => {
  //   User.belongsTo(models.Role, {
  //     as: 'role',
  //     foreignKey: {
  //       name: 'roleId',
  //     },
  //   });
    // User.hasMany(models.Object, {
    //   foreignKey: {
    //     name: 'userId',
    //   },
    // });
    // User.belongsTo(models.Payment, {
    //   as: 'userId',
    //   foreignKey: {
    //     name: 'userId',
    //   },
    // });
  };

  return User;
};