import { DataTypes, Model } from "sequelize";

import sequelize from "./../connection";

const LISTINGS = "listings";

export class Listing extends Model {}

Listing.init(
    {
        title: {
            allowNull: false,
            type: DataTypes.STRING
        },
        description: {
            allowNull: false,
            type: DataTypes.TEXT
        }
    },
    {
        modelName: LISTINGS,
        tableName: LISTINGS,
        sequelize
    }
);