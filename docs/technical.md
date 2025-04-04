
**4. `technical.md`**

```markdown
# SlobberFree Paws - Technical Specifications

## Overview

This document provides technical specifications and established patterns for the SlobberFree Paws web application.

## Technologies

*   **Programming Languages:** TypeScript, JavaScript
*   **Frameworks/Libraries:** Next.js, React, tRPC, Prisma (or alternative ORM), OpenAI Node.js library, jimp/sharp, Stripe.js
*   **Database:** [Choose one: PostgreSQL, MongoDB, SQLite]
*   **Hosting:** Vercel

## API Endpoints

*   **/api/estimate-cost:**
    *   Method: POST
    *   Description: Estimates the cost of processing an image using the OpenAI API.
    *   Request Body:
        ```json
        {
            "imageUrl": "URL of the image",
            "retouchingInstructions": "Instructions on retouching the image"
        }
        ```
    *   Response Body (Success):
        ```json
        {
            "cost": 0.05 // Estimated cost in USD
        }
        ```
    *   Response Body (Error):
        ```json
        {
            "error": "Error message"
        }
        ```
*   **/api/payment:**
    *   Method: POST
    *   Description: Processes a payment through the Stripe API.
    *   Request Body:
        ```json
        {
            "amount": 1.00, // Payment amount in USD
            "stripeToken": "Stripe token"
        }
        ```
    *   Response Body (Success):
        ```json
        {
            "success": true
        }
        ```
    *   Response Body (Error):
        ```json
        {
            "success": false,
            "error": "Error message"
        }
        ```
*   **/api/transparency:** (Data will likely be fetched directly from database)
    *   Method: GET
    *   Description: Retrieves real-time running costs, total contributions, and net balance.
    *   Response Body:
        ```json
        {
            "runningCosts": {
                "serverCosts": 0.15,
                "aiProcessing": 0.08,
                "websiteHosting": 0.02
            },
            "totalContributions": 125.50,
            "netBalance": 10.25
        }
        ```

## Data Models (Example - Adjust Based on Database Choice)

*   **Transaction:**
    *   `id`: UUID (primary key)
    *   `userId`: UUID (optional, if user authentication is implemented)
    *   `imageId`: UUID (unique identifier for the processed image)
    *   `amount`: Decimal (amount paid)
    *   `timestamp`: DateTime
    *   `stripeTransactionId`: String (Stripe transaction ID)

## Established Patterns

*   **Environment Variable Management:**
    *   Use Vercel environment variables to store sensitive information (API keys, database connection strings).
    *   Access environment variables using `process.env.VARIABLE_NAME`.
*   **Error Handling:**
    *   Implement robust error handling in all API routes.
    *   Return informative error messages to the client.
    *   Log errors to a monitoring service.
*   **Asynchronous Operations:**
    *   Use `async/await` for asynchronous operations (API calls, database queries).
*   **API Security:**
    *   Validate and sanitize all user inputs.
    *   Protect API routes from unauthorized access (e.g., using authentication).

## Code Style

*   Follow the Airbnb JavaScript Style Guide.
*   Use Prettier for code formatting.
*   Use ESLint for code linting.

