const Payment = require("../models/Payment");

// Create a payment
exports.createPayment = async (req, res, next) => {
  try {
    const { userId, amount, currency, paymentMethod } = req.body;
    const payment = new Payment({
      userId,
      amount,
      currency,
      paymentMethod,
      status: "pending",
    });
    await payment.save();
    res.status(201).json(payment);
  } catch (error) {
    next(error);
  }
};

// Process a payment
exports.processPayment = async (req, res, next) => {
  try {
    const paymentId = req.params.id;
    const payment = await Payment.findById(paymentId);

    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    // Simulate payment processing
    payment.status = "processed";
    await payment.save();

    res.status(200).json(payment);
  } catch (error) {
    next(error);
  }
};

// Retrieve payment status
exports.getPaymentStatus = async (req, res, next) => {
  try {
    const paymentId = req.params.id;
    const payment = await Payment.findById(paymentId);

    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    res.status(200).json(payment);
  } catch (error) {
    next(error);
  }
};
