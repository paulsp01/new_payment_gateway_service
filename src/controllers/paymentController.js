const Payment = require("../models/Payment");

exports.createPayment = async (req, res) => {
  try {
    const payment = new Payment(req.body);
    await payment.save();
    res.status(201).send(payment);
  } catch (error) {
    res.status(400).send(error);
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
    res.status(400).send(error);
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
    res.status(400).send(error);
  }
};

exports.handleRefund = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) {
      return res.status(404).send({ error: "Payment not found" });
    }
    payment.refund = {
      amount: req.body.amount,
      reason: req.body.reason,
      date: new Date(),
    };
    await payment.save();
    res.send(payment);
  } catch (error) {
    res.status(400).send(error);
  }
};
