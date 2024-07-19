# new_payment_gateway_service



A scalable and secure payment gateway service built with Node.js, Express, and MongoDB.

## Features

- Handle different types of transactions (e.g., credit card, debit card, digital wallets)
- CRUD operations related to payments
- Process payments
- Retrieve payment status
- Handle refunds
- API documentation with Swagger

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/paulsp01/new_payment_gateway_service.git


**Deployment:** [Render.com](https://new-payment-gateway-service-2.onrender.com)

API DOCUMENTATION:
*crete payment*
POST http://localhost:5000/payments

*Processing a payment.*
POST http://localhost:5000/payments/:id/process

*Retrieving payment status.*
GET http://localhost:5000/payments/:id

*Handling refunds.*
POST http://localhost:5000/payments/:id/refund