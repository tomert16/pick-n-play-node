const Sequelize = require('sequelize');

//connect to database
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/database.db'
});
//test connection to database
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to database successful');
    } catch (err) {
        console.log('Error connecting to database:', err);
    }
})();

console.log(sequelize.models.locations)


