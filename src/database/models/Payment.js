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
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      customerId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      accountId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      paymentType: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'CASH'
      },
      currency: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'RWF'
      },
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      appfee: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0.00
      },
      orderRef: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: `REF_3s2323-${new Date()}`
      },
      flwRef: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: `REF_3s2332-${new Date()}`
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

  Payment.associate = (models) => {
    Payment.belongsTo(models.User, {
      as: 'User',
      onDelete: 'CASCADE',
      foreignKey:'userId',
    });
  };

  return Payment;
};
