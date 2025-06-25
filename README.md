# 🎓 AI Learning Companion - Voice-Powered Tutor SaaS

![Project Banner](/public/images/banner.png)  

**Live Demo:** [Learn with your personalized AI companion](https://ai-learning-companion-jade.vercel.app/)  
**Video Demo:** [YouTube Demo Walkthrough](https://youtu.be/9DZ1HAHg5Eg)

## 🌟 Introduction

AI Learning Companion is a revolutionary SaaS platform that provides personalized education through real-time voice interactions with AI tutors. Designed for students and lifelong learners, it combines cutting-edge voice AI with comprehensive learning analytics.

## 🏆 Features

### Core Functionality
- 🗣️ **Real-time Voice Conversations** - Natural spoken interactions with AI tutors
- 🧑‍🏫 **Customizable AI Companions** - Create tutors with specialized knowledge and personalities
- 📚 **Session History** - Review past conversations with timestamps
- 📊 **Progress Tracking** - Visual analytics of learning milestones

### Technical Highlights
- 🔒 **Secure Authentication** - Powered by Clerk with multi-factor options
- 💳 **Subscription Billing** - Integrated Stripe payments
- ⚡ **Realtime Updates** - Supabase-powered data sync
- 📱 **Responsive Design** - Works on all devices

## 🛠️ Tech Stack

| Category          | Technology                          |
|-------------------|-------------------------------------|
| Framework         | Next.js 14 (App Router)             |
| Styling           | Tailwind CSS + shadcn/ui            |
| Authentication    | Clerk                               |
| Database          | Supabase (PostgreSQL)               |
| Voice AI          | Vapi.ai                             |
| Language Model    | OpenAI GPT-4                        |
| Payments          | Stripe                              |
| State Management  | Zustand                             |
| Form Validation   | Zod                                 |
| Deployment        | Vercel                              |

## 🚀 Getting Started

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/TuhinCodeCraft/ai-learning-companion
cd saas-app
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env

# Vapi
NEXT_PUBLIC_VAPI_WEB_TOKEN=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Replace the placeholder values with your actual values. 
You can obtain these credentials by signing up on: 
    1. [Supabase](https://supabase.com)
    2. [Clerk](https://clerk.com)
    3. [Vapi](https://vapi.ai).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.


## 👥 Team ByteForce

This project was developed by **Team ByteForce** during the Hack4Bengal Hackathon.

| Name                | Role                    | Profile                                  |
|---------------------|------------------------|------------------------------------------|
| Tuhin Ghosh          | Backend Engineer  | [GitHub](https://github.com/TuhinCodeCraft)   |
| Sourav Pal   | Frontend Developer     | [GitHub](https://github.com/Souravpal08)                              |
| Pritam Mahata   | UI Designer and Video Editor      | [GitHub](https://github.com/PritamMahata)                              |
