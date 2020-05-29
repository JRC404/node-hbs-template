// npm i express express-handlebars
const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const app = express(); // initialising express to be used as a function

require('dotenv').config(); // create a .env file and .gitignore

const APIdata = require('./lib/getAPI')

app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'
}))

app.set('view engine', '.hbs');
//view that I'm rendering plus the engine ext name

app.get('/', async (req, res) => {
    res.render('index');
})

app.get('/harry', async (req, res) => {
    let data = await APIdata.getSortingHat();
    console.log(data);
    res.render('harry', { data });
})

app.listen( 3005, () => {
    console.log('Server is running. Chase it.');
})