const { Sequelize } = require('sequelize')

// conection to sequelize with  my database ===> db name, username and password
// localhos === local db server || dialect === db type
const sequelize = new Sequelize('nodemvc2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

// authenticate connection
try {
    sequelize.authenticate()
    console.log('Conectamos ao MySql!')
} catch (error) {
    console.log('Não foi possível conectar: ${error}')
}


module.exports = sequelize