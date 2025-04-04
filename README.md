# SlobberFree Paws

## Project Overview

SlobberFree Paws is a web application that utilizes AI to automatically remove saliva ("slobber") from dog photos. It aims to provide a simple and effective solution for dog owners who want to share high-quality pictures of their furry friends. The project operates on a "pay what you want" pricing model with full transparency regarding running costs and contributions.

## Technology Stack

*   **Authentication:** Clerk (handles user signup, signin, and management)
*   **Front-end:** Next.js (React framework)
*   **Back-end:** Next.js API routes (Node.js serverless functions)
*   **API Communication:** tRPC (type-safe API layer)
*   **Database:** [Choose one: PostgreSQL, MongoDB, SQLite (for prototyping)] - Used for storing user data, transaction history, and cost/usage information.
*   **AI Processing:** OpenAI API (GPT-4 Vision or similar)
*   **Payment Processing:** Stripe API
*   **Image Processing:** jimp or sharp (Node.js libraries for image manipulation)
*   **Hosting:** Vercel

## Setup

1.  **Clone the repository:**

    ```bash
    git clone [repository URL]
    cd slobberfree-paws
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**

    *   Create a `.env.local` file in the root directory.
    *   Add the following environment variables (replace with your actual values):

        ```
        DATABASE_URL="[your database connection string]"
        OPENAI_API_KEY="[your OpenAI API key]"
        STRIPE_SECRET_KEY="[your Stripe secret key]"
        STRIPE_PUBLISHABLE_KEY="[your Stripe publishable key]"
        CLERK_SECRET_KEY="[Your Clerk Secret Key]"
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="[your Stripe publishable key]" # For client-side
        VERCEL_API_TOKEN="[your Vercel API token]" # If using Vercel's billing API
        ```

4.  **Run database migrations (if using Prisma):**

    ```bash
    npx prisma migrate dev --name init
    ```

5.  **Start the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
slobberfree-paws/
├── pages/                    # Next.js pages (front-end routes and API routes)
│   ├── api/                  # API routes (serverless functions)
│   │   ├── estimate-cost.ts
│   │   ├── payment.ts
│   │   └── ...
│   ├── index.tsx            # Home page
│   └── ...
├── components/              # Reusable React components
├── utils/                   # Utility functions
├── prisma/                  # Prisma schema and migrations (if using Prisma)
├── public/                  # Static assets (images, fonts, etc.)
├── .env.local              # Environment variables (development)
├── README.md               # This file
└── ...
```

## Patterns

*   **Type Safety:** Leverage TypeScript throughout the project to ensure type safety and prevent errors.
*   **Serverless Functions:** Use Next.js API routes (serverless functions) for back-end logic.
*   **tRPC for API Communication:** Use tRPC for type-safe API communication between the front-end and back-end.
*   **Environment Variables:** Securely manage sensitive information (API keys) using environment variables.
*   **Component-Based Architecture:** Build the front-end using reusable React components.
*   **Transparency:** Implement clear and transparent communication about running costs and contributions.
## TODO
* Database model
* Transparency page code
* Stripe integration
* OpenAI integration

