const express = require('express');
const bodyParser = require('body-parser')
require('dotenv').config();

const cors = require('cors');

const constructionController = require('./controller/construction');
const loginController = require('./controller/loginController');
const validation = require('./middlewares/validation');

const { isEmail, isPassword } = validation;

const app = express();
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*' )
  app.use(cors());
  next();
})
app.use(bodyParser.json())
const PORT = process.env.PORT || 3000;

app.post('/login', isEmail, isPassword, loginController.loginUser);

app.get('/construction', constructionController.getAllConstruction);
app.post('/construction', constructionController.createConstruction);
app.patch('/construction', constructionController.updateConstruction);
app.delete('/construction', constructionController.deleteConstruction);

app.listen(PORT, () => console.log(`Executando na porta: ${PORT}`));