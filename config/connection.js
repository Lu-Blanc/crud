import { Sequelize } from "sequelize";

const db = new Sequelize('Users','root','',{
    host: 'localhost',
    dialect: 'mysql' 
})

export default db