module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define(
    'Vehicle',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      plateText: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isInside: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      exitedAt: {
          allowNull: false,
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW
      },
    },
    {
      tableName: 'tblVehicles',
      timestamps: true,
    },
    {},
  );

  Vehicle.associate = (models) => {
  };

  return Vehicle;
};
