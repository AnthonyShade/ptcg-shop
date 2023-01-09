const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class PKMN extends Model {}

PKMN.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    poster: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "anime",
  }
);

module.exports = PKMN;