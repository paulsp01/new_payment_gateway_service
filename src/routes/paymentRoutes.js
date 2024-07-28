const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

/**
 * @swagger
 * components:
 *   schemas:
 *     Payment:
 *       type: object
 *       required:
 *         - amount
 *         - currency
 *         - method
 *         - customer_id
 *       properties:
 *         amount:
 *           type: number
 *           description: The amount of the payment
 *         currency:
 *           type: string
 *           description: The currency of the payment
 *         method:
 *           type: string
 *           description: The method of the payment
 *         description:
 *           type: string
 *           description: A brief description of the payment
 *         customer_id:
 *           type: string
 *           description: The ID of the customer making the payment
 *         status:
 *           type: string
 *           description: The status of the payment
 *           default: pending
 *         refund:
 *           type: object
 *           properties:
 *             amount:
 *               type: number
 *               description: The refund amount
 *             reason:
 *               type: string
 *               description: The reason for the refund
 *             date:
 *               type: string
 *               format: date-time
 *               description: The date of the refund
 */

/**
 * @swagger
 * /payments:
 *   post:
 *     summary: Create a new payment
 *     tags: [Payments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Payment'
 *     responses:
 *       201:
 *         description: The payment was created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Payment'
 *       400:
 *         description: Bad request
 */
router.post("/payments", paymentController.createPayment);

/**
 * @swagger
 * /payments/{id}/process:
 *   post:
 *     summary: Process a payment
 *     tags: [Payments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The payment ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 description: The new status of the payment
 *     responses:
 *       200:
 *         description: The payment was processed successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Payment'
 *       400:
 *         description: Bad request
 *       404:
 *         description: Payment not found
 */
router.post("/payments/:id/process", paymentController.processPayment);

/**
 * @swagger
 * /payments/{id}:
 *   get:
 *     summary: Get the status of a payment
 *     tags: [Payments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The payment ID
 *     responses:
 *       200:
 *         description: The payment status
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Payment'
 *       404:
 *         description: Payment not found
 */
router.get("/payments/:id", paymentController.getPaymentStatus);

/**
 * @swagger
 * /payments/{id}/refund:
 *   post:
 *     summary: Handle a refund for a payment
 *     tags: [Payments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The payment ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *                 description: The refund amount
 *               reason:
 *                 type: string
 *                 description: The reason for the refund
 *     responses:
 *       200:
 *         description: The refund was handled successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Payment'
 *       400:
 *         description: Bad request
 *       404:
 *         description: Payment not found
 */
router.post("/payments/:id/refund", paymentController.handleRefund);

module.exports = router;
