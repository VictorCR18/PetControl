var express = require('express');
var Q_gastosController = require('./controllers/q_gastosController');
var PetController = require('./controllers/petController');


const routes = express.Router();

const q_gastosController = new Q_gastosController();

routes.get('/q_gastos', q_gastosController.getAllData);
routes.get('/q_gastos/:id', q_gastosController.getSingleData);
routes.post('/q_gastos/', q_gastosController.getCreateData);
routes.put('/q_gastos/:id', q_gastosController.getUpdateData);
routes.delete('/q_gastos/:id', q_gastosController.getDeleteData);

const petController = new PetController();

routes.get('/pets', petController.getAllPets);
routes.get('/pets/:id', petController.getSinglePet);
routes.post('/pets/', petController.getCreatePet);
routes.put('/pets/:id', petController.getUpdatePet);
routes.delete('/pets/:id', petController.getDeletePet);

module.exports = routes