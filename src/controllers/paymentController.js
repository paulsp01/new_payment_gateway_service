const Payment = require("../models/Payment");
const Refund = require("../models/Refund");

exports.createPayment = async (req, res) => {
  try {
    const payment = new Payment(req.body);
    await payment.save();
    res.status(201).send(payment);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.processPayment = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) {
      return res.status(404).send({ error: "Payment not found" });
    }
    payment.status = req.body.status;
    await payment.save();
    res.send(payment);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.getPaymentStatus = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) {
      return res.status(404).send({ error: "Payment not found" });
    }
    res.send(payment);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.handleRefund = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) {
      return res.status(404).send({ error: "Payment not found" });
    }

    // Log the payment document
    console.log("Payment document:", payment);

    // Create a new refund document
    const refund = new Refund({
      amount: req.body.amount,
      reason: req.body.reason,
      payment_id: payment._id, // Link to the payment
    });

    await refund.save();

    // Log the refund document
    console.log("Refund document:", refund);

    // Update the payment document to reference the refund
    payment.refund = refund._id;

    // Log the updated payment document before saving
    console.log("Updated payment document:", payment);

    await payment.save();

    res.send({ payment, refund });
  } catch (error) {
    console.error("Error occurred:", error); // Log the error for debugging
    res.status(400).send({ error: error.message });
  }
};
