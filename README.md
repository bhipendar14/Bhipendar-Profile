# Bhipendar.Profile

A modern, interactive portfolio website for Bhipendar Kumar, an AI-focused Full Stack Developer. Built with React, GSAP for smooth scroll animations, Three.js (React Three Fiber) for 3D elements, and Express/Nodemailer for the contact backend.

## ✨ Features
- **3D Character Model**: Interactive character model following the cursor direction using React Three Fiber.
- **GSAP Animations**: Fluid scrolling, scroll-triggered text reveal animations, and looping background text.
- **Fully Responsive**: Beautiful layouts for both desktop and mobile devices.
- **Glassmorphism UI**: High-end styling with translucent background components and crisp typeography.
- **Live Contact Form**: A functional Nodemailer-powered messaging form hooked up with a custom Express backend.

## 🛠 Tech Stack
- **Frontend**: React, Vite, TypeScript, GSAP, React Three Fiber, CSS.
- **Backend**: Node.js, Express, Nodemailer
- **Deployment**: Vercel

## 🚀 How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/bhipendar14/Bhipendar.Profile.git
cd Bhipendar.Profile
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root of the application with your Gmail App Password credentials (needed for the Contact Form to send emails to your mailbox):
```
EMAIL_USER=bhipendarkumar31@gmail.com
EMAIL_PASS=your_16_character_app_password
PORT=3001
```

### 4. Run the Dev Server
The project is set up to run both the Vite frontend server and the Node.js email server concurrently.
```bash
npm run dev:all
```
Your app will be running at `http://localhost:5173`.
