const User = require("./User");
const PKMN = require("./PKMN");

PKMN.belongsTo(User, {
  foreignKey: "user_id",
});

PKMN.belongsTo(User, {
  foreignKey: "anime_id",
});

PKMN.hasOne(User);

module.exports = { User, PKMN };