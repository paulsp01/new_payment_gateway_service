const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc=require("swagger-jsdoc");
require("./config/db");

const paymentRoutes = require("./routes/paymentRoutes");
const errorHandler = require("./middleware/errorHandler");
const logger = require("./middleware/logger");
const swaggerDocs = require("./docs/swagger");

const app = express();
app.use(express.json());
app.use(logger);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(paymentRoutes);
app.use(errorHandler);

module.exports = app;
