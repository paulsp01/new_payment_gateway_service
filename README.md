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


**Deployment:** [Render.com](https://new-payment-gateway-service.onrender.com)

API DOCUMENTATION:
POST /login
Description: Authenticates a user and returns a JWT token.


Payments
POST /payments
Description: Creates a new payment. Requires authentication.
POST /payments/:id/process
Description: Processes a payment based on payment ID. Requires authentication.
GET /payments/:id
Description: Retrieves the status of a payment based on payment ID. Requires authentication.


Refunds
POST /refunds
Description: Initiates a refund. Requires authentication.
POST /refunds/:id/process
Description: Processes a refund based on refund ID. Requires authentication.
GET /refunds/:id
Description: Retrieves the status of a refund based on refund ID. Requires authentication.
