module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    'Role',
    {
      id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV1,
          primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      aboutRole: {
        type: DataTypes.TEXT,
      },
    },
    {
      tableName: 'tblRole',
      timestamps: true,
    },
    {},
  );

  Role.associate = (models) => {
    Role.hasMany(models.User, {
      foreignKey: 'roleId',
      as: 'role',
      onDelete: 'CASCADE',
    });
  };

  return Role;
};