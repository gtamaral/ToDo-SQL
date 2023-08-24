const { Sequelize } = require('sequelize')

// const pg = require('pg');

// url do banco de dados => neon tech
// const DATABASE_URL = new URL('postgres://gtamaral:xUEgtlk1N2RT@ep-blue-sun-68579555.us-east-2.aws.neon.tech/neondb')

//conection to sequelize with  my database ===> db name, username and password
//localhos === local db server || dialect === db type
const sequelize = new Sequelize('nodemvc2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
}) //



// authenticate connection
try {
    sequelize.authenticate()
    console.log('Conectamos ao MySql!')
} catch (error) {
    console.log('Não foi possível conectar: ${error}')
}


module.exports = sequelize