const { Sequelize } = require('sequelize')

const pg = require('pg');

// url do banco de dados => neon tech
const DATABASE_URL = new URL('postgres://gtamaral:xUEgtlk1N2RT@ep-blue-sun-68579555.us-east-2.aws.neon.tech/neondb')

// conection to sequelize with  my database ===> db name, username and password
// localhos === local db server || dialect === db type
// const sequelize = new Sequelize(DATABASE_URL, {
//     dialect: 'mysql'
// }) //

// Extrair informações da URL do banco de dados Neon

const username = DATABASE_URL.username;
const password = DATABASE_URL.password;
const host = DATABASE_URL.hostname;
const port = DATABASE_URL.port;
const databaseName = DATABASE_URL.pathname.substr(1); // Remove a barra inicial

// Configurar Sequelize com as informações extraídas
const sequelize = new Sequelize({
  dialect: 'postgres',
  host: host,
  port: port,
  database: databaseName,
  username: username,
  password: password,
});

// authenticate connection
try {
    sequelize.authenticate()
    console.log('Conectamos ao MySql!')
} catch (error) {
    console.log('Não foi possível conectar: ${error}')
}


module.exports = sequelize