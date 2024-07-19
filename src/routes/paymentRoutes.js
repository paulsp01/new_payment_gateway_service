const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

router.post("/payments", paymentController.createPayment);
router.post("/payments/:id/process", paymentController.processPayment);
router.get("/payments/:id", paymentController.getPaymentStatus);
router.post("/payments/:id/refund", paymentController.handleRefund);

module.exports = router;
