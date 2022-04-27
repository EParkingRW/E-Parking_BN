module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
      'User',
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV1,
          primaryKey: true
        },
        roleId: {
            type: DataTypes.UUID,
            foreignKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            // defaultValue: 3,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.INTEGER,
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