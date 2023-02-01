const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
  nickName: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  phoneNumber: { type: DataTypes.STRING },
  lastName: { type: DataTypes.STRING },
  firstName: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
  position: { type: DataTypes.STRING },
});

const Company = sequelize.define("company", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
  address: { type: DataTypes.STRING },
  serviceOfActivity: { type: DataTypes.STRING },
  numberOfEmployees: { type: DataTypes.INTEGER },
  description: { type: DataTypes.STRING },
  type: { type: DataTypes.STRING },
});

User.hasMany(Company);
Company.belongsTo(User);

module.exports = { User, Company };
