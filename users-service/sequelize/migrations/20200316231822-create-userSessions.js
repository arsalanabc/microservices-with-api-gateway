module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable(
        "UserSessions",
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID
            },
            userId: {
                allowNull: false,
                references: {
                    key: "id",
                    model: "Users"
                },
                type: DataTypes.UUID
            },
            expiresAt: {
                allowNull: false,
                type: DataTypes.DATE
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE
            }
        },
        {
            charset: "utf8"
        }
    );
};

module.exports.down = queryInterface => queryInterface.dropTable("UserSessions");