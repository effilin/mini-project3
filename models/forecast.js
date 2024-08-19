const { DataTypes, Model } = require("sequelize");
const dbConnect = require('../dbConnect');
const User = require("./user");

const SequelizeInstance = dbConnect.Sequelize;

class Forecast extends Model {}

Forecast.init({
    id: { type: DataTypes.INTEGER, allowNull:false, autoIncrement: true, primaryKey:true},
    zipCode: {type: DataTypes.INTEGER, defaultValue: 23221},
    temp_f: {type: DataTypes.STRING, allowNull:false},
    wind_mph: {type: DataTypes.STRING, allowNull:true},
    air_quality: {type: DataTypes.STRING, allowNull:true },
    uv: {type: DataTypes.STRING, allowNull:true}
},{
    sequelize: SequelizeInstance, modelName: 'forecasts',
    timestamps: true,
    createdAt: 'createdAt'
});

Forecast.belongsTo(User, {foreignKey: 'zipCode'});
User.hasMany(Forecast)

module.exports = Forecast;