const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');
const AuthController = require('./controllers/AuthController');

const authMiddleware = require('./middlewares/auth');
//routes.use(authMiddleware); //rota se quiser utilizar o middleware em todas as requisições

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

routes.post('/register', AuthController.register);
routes.post('/authenticate', AuthController.authenticate);

module.exports = routes;