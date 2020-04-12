import { DataTypes, Model } from "sequelize";

import sequelize from "#root/db/connection";

const USERS = "users";
const USERSESSIONS = "userSessions";

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
        modalName: USERS,
        tableName: USERS,
        sequelize: sequelize,
    }
);

export class UserSession extends Model { };
UserSession.init(
    {
        id: { allowNull: false, primaryKey: true, type: DataTypes.UUID },
        userId: {
            allowNull: false, references: { key: "id", model: USERS },
            type: DataTypes.UUID
        },
        expiresAt: {
            allowNull: false, type: DataTypes.DATE
        },
    },
    {
        modalName: USERSESSIONS,
        tableName: USERSESSIONS,
        sequelize: sequelize,
        paranoid: false,
        updatedAt: false,
    },
);
