const swaggerJsdoc = require("swagger-jsdoc");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Payment Gateway API",
      version: "1.0.0",
      description: "API for managing payments",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./src/routes/*.js","./src/controllers/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
module.exports = swaggerDocs;
