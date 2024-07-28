const mongoose = require("mongoose");

const refundSchema = new mongoose.Schema(
  {
    amount: { type: Number, required: true },
    reason: { type: String, required: true },
    date: { type: Date, default: Date.now },
    payment_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment",
      required: true,
    }, // Reference to the payment
  },
  { timestamps: true }
);

const Refund = mongoose.model("Refund", refundSchema);
module.exports = Refund;
