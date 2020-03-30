import { DataTypes, Model } from "sequelize";

import sequelize from "#root/db/connection";

export class User extends Model {};
User.init(
    {
        id: { allowNull: false, primaryKey: true, type: DataTypes.UUID },
        email: { allowNull: false, type: DataTypes.STRING, unique: true },
        passwordHash: { allowNull: false, type: DataTypes.CHAR(64) },
    },
    {
        defaultScope: {
            rawAttributes: { exclude: ["passwordHash"] }
        },
        modalName: "Users",
        sequelize: sequelize,
    }
);

export class UserSession extends Model { };
UserSession.init(
    {
        id: { allowNull: false, primaryKey: true, type: DataTypes.UUID },
        userId: {
            allowNull: false, references: { key: "id", model: "Users" },
            type: DataTypes.UUID
        },
        expiresAt: {
            allowNull: false, type: DataTypes.DATE
        },
    },
    {
        modalName: "userSessions",
        sequelize: sequelize,
        paranoid: false,
        updatedAt: false,
    },
);
