const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB
mongoose.connect('mongodb://localhost:27012/nodeapi', 
    { useUnifiedTopology: true ,
        useNewUrlParser: true }
);
requireDir('./models');

//Rotas
app.use('/api', require('./routes'));

app.listen(3333);