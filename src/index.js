const express = require('express');
const app = express();
const porta = 8080;
const bodyParser = require('body-parser');
var i18n = require("i18n");

i18n.configure({
    locales: ['pt', 'en'],
    directory: './traducoes',
    defaultLocale: "pt"
})

app.use(i18n.init);

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.status(200).send("Ta funcionando");
});

require('./app/controllers/index')(app);

app.listen(porta);
