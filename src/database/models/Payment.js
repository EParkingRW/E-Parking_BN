module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define(
      'Payment',
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV1,
          primaryKey: true,
        },
        fullName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        phone: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        customerId: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        accountId: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        paymentType: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        currency: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        amount: {
          type: DataTypes.DOUBLE,
          allowNull: false,
        },
        appfee: {
          type: DataTypes.DOUBLE,
          allowNull: false,
        },
        orderRef: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        flwRef: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        userId: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        tableName: 'tblPayment',
        timestamps: true,
      },
      {},
    );
  
    // Payment.associate = (models) => {
    //   Payment.hasMany(models.User, {
    //     foreignKey: {
    //       name: 'userId',
    //     },
    //   });
    // };
  
    return Payment;
  };
  