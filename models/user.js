const { DataTypes, Model } = require('sequelize');
const dbConnect = require('../dbConnect');

const SequelizeInstance = dbConnect.Sequelize;

class User extends Model {}

User.init({
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false},
    username: {type: DataTypes.STRING, allowNull: false, unique: true},
    password: {type: DataTypes.STRING, allowNull: false},
    theme: {type: DataTypes.INTEGER, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false, unique: true},
    createdAt: {type: DataTypes.DATE, allowNull:false},
    zipCode: {type: DataTypes.INTEGER, defaultValue: 23221},  
    avatarType: {type: DataTypes.INTEGER, defaultValue: 1}
},{
    sequelize: SequelizeInstance, modelName: 'users',
    timestamps: true,
    createdAt: 'createdAt'
}
)

module.exports = User;