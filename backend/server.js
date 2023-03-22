const express = require('express')
const app = express()
const { sequelize } = require('./users/sequelize/models/index.js');
const port = process.env.PORT || 5000;


const connectDb = async () => {
    console.log('Checking database connection...');
    try {
        await sequelize.authenticate();
        console.log('Database connection established.');

    } catch(e) {
        console.log('Database connection failed', e);
        process.exit(1);
    }
};

(async () => {
    await connectDb();
    console.log(`Attempting to run server on port ${port}`);
    app.listen(port, () => {

        console.log(`Here we go, Engines started at ${port}.`);
    })
})();


app.get("/", (req, res) => {

res.status(200).send("Engine Started, Ready to take off!");

})