const sequelize = require('sequelize');
const db = new sequelize(
    'farmacia_final', //Nombre de la base de datos
    'root', //Usuario de la base
    'Daniela123', //Contraseña del usuario
    {
        host: 'localhost', //servidor
        dialect: 'mysql', //dbms
        port: '3307'
    }
);

module.exports=db;