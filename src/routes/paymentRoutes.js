const express = require("express");
const {
  createPayment,
  processPayment,
  getPaymentStatus,
} = require("../controllers/paymentController");
const auth = require("../middleware/auth");

const router = express.Router();


router.post("/", auth, createPayment);


router.post("/:id/process", auth, processPayment);


router.get("/:id", auth, getPaymentStatus);

module.exports = router;
