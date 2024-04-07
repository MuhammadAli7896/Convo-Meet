# Convo Meet - Next.js Video Conferencing Application

Convo Meet is a Next.js powered video conferencing application inspired by Zoom. It allows users to host and join meetings seamlessly. The application is built using TypeScript for enhanced type safety, Tailwind CSS and Shadcn for styling, Clerk for authentication, and Stream API for video calling functionalities.

## Features

- **Instant Meetings:** Start impromptu video conferences instantly.
- **Scheduled Meetings:** Schedule meetings for later with integrated calendar functionality.
- **Join via Invitation:** Join meetings by clicking on invitation links.
- **Personal Rooms:** Create personalized meeting rooms similar to instant meetings.
- **Recording and Playback:** Record meetings and view recordings for future reference.
- **Meeting Management:** View previous and upcoming meetings.
- **Authentication Options:** Sign in using Facebook, GitHub, or Google via Clerk.
- **Deployment:** Deployed using Vercel for seamless hosting and scaling.

## Tech Stack

- **Next.js:** Framework for React applications with server-side rendering and routing.
- **TypeScript:** Superset of JavaScript with static typing for enhanced developer experience.
- **Tailwind CSS:** Utility-first CSS framework for fast and responsive styling.
- **Shadcn:** Styling library for adding effects and depth to UI components.
- **Clerk:** Authentication service for integrating social login options.
- **Stream API:** Video calling API for building real-time video conferencing applications.
- **Vercel:** Platform for hosting and deploying web applications.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine. To install node.js visit **https://nodejs.org/en/download**

## Setting Up the Project

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/MuhammadAli7896/Convo-Meet.git
   cd convo-meet
   ```
   Make sure you have [git](https://git-scm.com/downloads) installed on your device.

2. **Install Dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Environment Variables:**
   - Create a .env.local file in the root directory and add the following environment variables:
  ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=

   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

   NEXT_PUBLIC_STREAM_API_KEY=
   STREAM_SECRET_KEY=

   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. **Run the Development Server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Access the Application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Deployment

The application is deployed using Vercel, and you can deploy your own instance by following these steps:

1. **Sign up on Vercel:**
   Create an account on [Vercel](https://vercel.com/).

2. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   # or
   yarn global add vercel
   ```

3. **Deploy the Application:**
   Run the following command in the project directory:
   ```bash
   vercel
   ```

4. **Follow the Deployment Steps:**
   Vercel CLI will guide you through the deployment process.
   
5. **Access the Deployed Application:**
   Once deployed, your application will be accessible via the provided URL.

### Contributors

- [Your Name](https://github.com/your-username)

---

Feel free to contribute to this project by submitting pull requests or reporting issues. Let's make Convo Meet even better together! 🚀
