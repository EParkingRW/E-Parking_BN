module.exports = {
  up: (queryInterface, DataTypes) =>
    queryInterface.createTable('tblPayment', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.literal("gen_random_uuid()"),
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
        allowNull: true,
      },
      currency: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      appfee: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      orderRef: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      flwRef: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
      },
    }),
  down: (queryInterface) => queryInterface.dropTable('tblPayment'),
};
