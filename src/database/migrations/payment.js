module.exports = {
    up: (queryInterface, DataTypes) =>
      queryInterface.createTable('tblPayment', {
        id: {
          type: DataTypes.UUID,
          defaultValue: require("sequelize").UUIDV4,
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
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      }),
    down: (queryInterface) => queryInterface.dropTable('tblPayment'),
  };
  