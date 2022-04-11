const express = require('express');
const app = express();
const porta = 8080;
const bodyParser = require('body-parser');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.status(200).send("Ta funcionando");
});

app.listen(porta);
