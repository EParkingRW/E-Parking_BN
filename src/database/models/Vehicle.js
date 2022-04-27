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
  