const express = require("express");
const { handleRefund } = require("../controllers/refundController");
const auth = require("../middleware/auth");

const router = express.Router();

/**
 * @swagger
 * /refunds/{id}:
 *   post:
 *     summary: Handle a refund
 *     tags: [Refunds]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Payment ID
 *     responses:
 *       200:
 *         description: Refund processed successfully
 *       404:
 *         description: Payment not found
 *       400:
 *         description: Invalid payment status for refund
 */
router.post("/:id", auth, handleRefund);

module.exports = router;
