const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    method: { type: String, required: true },
    description: { type: String },
    customer_id: { type: String, required: true },
    status: { type: String, default: "pending" },
    refund: { type: mongoose.Schema.Types.ObjectId, ref: "Refund" }, // Reference to the refund document
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", paymentSchema);
module.exports = Payment;
