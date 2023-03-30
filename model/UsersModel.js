import { Sequelize } from "sequelize";
import db from '../config/connection.js';

const {DataTypes} = Sequelize;

const User = db.define('users',{
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
},{
    freezeTableName: true
})

export default User;

(async()=>{
    await db.sync()
})();