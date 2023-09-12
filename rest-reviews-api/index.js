const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swaggerOptions');
const reviewsRoutes = require('./src/routes/reviews');
const metricsRoutes = require('./src/routes/metrics');
const pool = require('./src/pg-pool');

const app = express();
const port = 5252;

const swaggerDocs = swaggerJsDoc(swaggerOptions);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, {
  customCss: '.swagger-ui .topbar { display: none }',
}));

app.use('/api', reviewsRoutes);
app.use('/metrics', metricsRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log(`docs at http://localhost:${port}/api-docs`);
});

