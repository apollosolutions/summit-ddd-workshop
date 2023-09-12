const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Reviews API',
      version: '1.0.0',
      description: 'A simple Express Reviews API',
    },
    servers: [
      {
        url: 'http://localhost:5252',
      },
    ],
  },
  apis: ['./src/routes/*.js'], 
};

module.exports = swaggerOptions;