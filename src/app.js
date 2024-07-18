const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./config/swagger");
const paymentRoutes = require("./routes/paymentRoutes");
const refundRoutes = require("./routes/refundRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

// Swagger Documentation
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use("/payments", paymentRoutes);
app.use("/refunds", refundRoutes);

// Error Handling Middleware
app.use(errorHandler);

module.exports = app;
