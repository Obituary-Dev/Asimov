const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/User.js")(sequelize, Sequelize);
db.role = require("../models/Role.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "U_Id_Role",
  otherKey: "U_Id"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  otherKey: "Role_No"
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
