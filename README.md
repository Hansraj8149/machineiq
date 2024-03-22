# MachineIQ

MachineIQ is a SaaS application offering various AI tools, including chat, code generation, image generation, anime character generation, and video, and audio services.

## Note:- There is a problem with the image and anime generation LLM, so it takes 3-4 trials to generate the image
## Deployment Link: 
https://machineiq.vercel.app/

## Environment Setup

To set up the project, you'll need to configure the following environment variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Google gnererative api_key
API_KEY=

REPLICATE_API_TOKEN=
HUGGINGFACE_API_KEY=

STRIPE_API_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=
DATABASE_URL=
```

## Technology Stack
## Frontend
The frontend of this project is developed using:

Next.js: React framework for server-side rendering.
Tailwind CSS: Utility-first CSS framework for styling.
shadcn: [Please provide more information about this dependency if necessary]
Clerk: Authentication service for user management.
Stripe: Payment integration for handling transactions.
## Backend
The backend of this project utilizes:

Next.js: For server-side logic and API routes.
Prisma: ORM (Object-Relational Mapping) for database operations.
PostgreSQL: As the database for storing application data.

## Features
MachineIQ offers the following features:

Chatbot: Interact with AI-powered chat functionality.
Image Generation: Generate images using AI algorithms.
Code Generation: Automatically generate code snippets.
Anime Character Generation: Create anime characters using AI models.
Video and Audio Services: generates audio and video for the given prompt.

## Getting Started
To get started with MachineIQ, follow these steps:

Clone the repository to your local machine.
Set up the environment variables as mentioned in the Environment Setup section above.
Install dependencies by running npm install or yarn install.
Start the development server using npm run dev or yarn dev.
Visit http://localhost:3000 in your browser to access the application.

## Screenshots

![FireShot Capture 086 - MachineIQ - machineiq vercel app](https://github.com/Hansraj8149/machineiq/assets/91865531/2b94cc93-e7eb-417a-bed2-45182d047b11)
![FireShot Capture 087 - MachineIQ - machineiq vercel app](https://github.com/Hansraj8149/machineiq/assets/91865531/f7e07559-953f-4a59-b83a-9c2ad612ce2f)
![FireShot Capture 088 - MachineIQ - machineiq vercel app](https://github.com/Hansraj8149/machineiq/assets/91865531/569821ea-a0e4-4330-a54e-8c8a7c71ccaf)
![FireShot Capture 089 - MachineIQ - machineiq vercel app](https://github.com/Hansraj8149/machineiq/assets/91865531/32933f90-0f62-4581-a4fb-d30c26eaa53d)

## Contributing
We welcome contributions from the community to enhance MachineIQ. To contribute, please follow these guidelines:

Fork the repository and create your branch from the main.
Make your changes and ensure they follow the project's coding conventions.
Test your changes thoroughly.
Submit a pull request with a clear description of your changes and their purpose.
