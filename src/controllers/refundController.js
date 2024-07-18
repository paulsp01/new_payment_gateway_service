const Refund = require("../models/Refund");
const Payment = require("../models/Payment");

// Handle a refund
exports.handleRefund = async (req, res, next) => {
  try {
    const paymentId = req.params.id;
    const payment = await Payment.findById(paymentId);

    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    if (payment.status !== "processed") {
      return res
        .status(400)
        .json({ message: "Only processed payments can be refunded" });
    }

    // Simulate refund processing
    payment.status = "refunded";
    await payment.save();

    const refund = new Refund({
      paymentId,
      amount: payment.amount,
      status: "completed",
    });
    await refund.save();

    res.status(200).json(refund);
  } catch (error) {
    next(error);
  }
};
