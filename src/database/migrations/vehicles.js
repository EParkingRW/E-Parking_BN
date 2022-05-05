export function up(queryInterface, DataTypes) {
    return queryInterface.createTable('tblVehicles', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.literal("gen_random_uuid()"),
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
            defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    });
}
export function down(queryInterface) { return queryInterface.dropTable('tblVehicles'); }
  