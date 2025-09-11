# AI Oracle

## Project Introduction

AI Oracle is a modern digital product designed to empower individuals in their spiritual and creative practices. Built as a high-leverage, no-capital business, this web application uses the power of AI to generate personalized rituals, ceremonies, and daily intentions.

The project is structured as a passive income business, where a high-demand digital product is delivered and scaled with minimal hands-on management, leveraging technical skills and automated marketing.

## Core Features

- **Daily Intention Generator:** A free, AI-powered tool that provides users with a single, concise intention for their day.
- **Full Ritual Generator:** A premium, paid tool that generates detailed, comprehensive rituals and ceremonies based on a user's specific prompt and needs.
- **Dynamic Content Generation:** The app leverages the OpenAI API to create unique, high-quality content on demand.
- **Static Blog:** A built-in, SEO-friendly blog for content marketing, designed to attract organic traffic and build an audience.
- **Project Log:** A transparent log of news, updates, and future ideas to build trust and community engagement.
- **Responsive UI:** A clean, mystical, and mobile-friendly design built with Next.js and Tailwind CSS.
- **Downloadable Rituals:** The ability to copy or download generated rituals as plain text for offline use.

## Tech Stack

This project is built on a modern, robust, and scalable tech stack:

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **AI Integration:** OpenAI API
- **E-commerce:** Gumroad (for payment and digital product delivery)
- **Email Marketing:** MailerLite (for email list building)
- **Hosting:** Vercel

## Getting Started

To get a copy of this project up and running on your local machine, follow these steps.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/RaizenStyx/ai-oracle.git
    cd ai-oracle
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Environment Variables

You will need an OpenAI API key to run the AI features.

1.  Create a file named `.env.local` in the root of your project.
2.  Add your OpenAI API key to this file:
    ```
    OPENAI_API_KEY=your_secret_api_key_here
    ```

### Running the Development Server

1.  **Start the server:**
    ```bash
    npm run dev
    ```
2.  Open your browser and navigate to `http://localhost:3000`.

## Project Structure

- `app/`: Contains all the pages and API routes for the application.
- `components/`: Reusable React components, such as the `Header`, `Footer`, and `NewsletterForm`.
- `lib/`: Utility functions and static data (e.g., mock prompts, blog posts).
- `public/`: Static assets like images and fonts.

## Future Roadmap

This project is the foundation for a much larger vision. Future plans include:

-   Implementing a secure user authentication system with a license key verification process.
-   Adding a conversational AI chatbot as a premium feature.
-   Creating additional digital products (e.g., eBooks, guided meditations) to increase revenue.
-   Scaling marketing efforts through paid ads and an affiliate program.

## Author

-   Connor Reed
-   [Github Link](https://github.com/RaizenStyx)