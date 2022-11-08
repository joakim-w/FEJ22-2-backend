const express = require('express');
const app = express();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    servers: [
      {
        url: 'http://localhost:8080'
      }
    ],
    info: {
      title: 'what to eat API',
      version: '1.0.0',
    },
  },
  apis: ['./controllers/*.js'], // files containing annotations as above
};

const swaggerOptions = swaggerJsdoc(options);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerOptions));

const dishController = require('./controllers/dishController');
const applicationsController = require('./controllers/applicationsController');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/register', applicationsController)
app.use('/api/dishes', dishController);

module.exports = app;