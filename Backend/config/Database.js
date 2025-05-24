import {Sequelize} from "sequelize";

const db = new Sequelize('notes','root','',{
    host: 'Localhost',
    dialect: 'mysql'
})

export default db;