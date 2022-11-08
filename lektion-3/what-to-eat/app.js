const express = require('express');
const app = express();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors')

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

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization, Origin, X-Requested-Width')
//   if(req.method === 'OPTIONS') {
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
//   }
//   next()
// })
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/register', applicationsController)
app.use('/api/dishes', dishController);

module.exports = app;