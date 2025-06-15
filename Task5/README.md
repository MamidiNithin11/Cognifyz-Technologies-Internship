 🧱 MERN Notes App

A beginner-friendly full-stack ERN (MongoDB, Express, React, Node.js) application that allows users to **create**, **update**, and **delete** notes. This project covers essential full-stack development concepts and includes **rate limiting with Upstash Redis**, **environment variable setup**, and a **deployment guide**.

---

## 🚀 Features

* 📝 **CRUD Functionality** – Create, Read, Update, Delete Notes with title and description
* ⚙️ **REST API** – Well-structured API with HTTP methods and status codes
* 🔐 **Rate Limiting** – Implemented using Upstash Redis for real-world experience
* 💡 **NoSQL vs SQL** – Learn MongoDB fundamentals and how it differs from SQL
* 🌐 **Responsive UI** – Works well on all devices
* 📦 **Deployment Ready** – Easily deploy and showcase your live app
* 🧪 **Environment Variables** – Secure and configurable `.env` support

---

## 📁 Project Structure

```
/mern-notes-app
│
├── /frontend       # React frontend
│   └── ...
│
├── /backend        # Express backend
│   └── ...
│
└── README.md
```

---

## 🔧 Backend Setup

### 1. Configure `.env`

Inside the `/backend` folder, create a `.env` file:

```env
MONGO_URI=<your_mongo_uri>
UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>
NODE_ENV=development
```

### 2. Install & Run

```bash
cd backend
npm install
npm run dev
```

---

## 💻 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 Learnings Covered

* Full CRUD API with Express.js
* MongoDB operations and schema modeling
* React state, props, and hooks
* Rate limiting with Upstash Redis
* HTTP methods (GET, POST, PUT, DELETE)
* HTTP status codes (200, 201, 400, 404, 500)
* Difference between SQL vs NoSQL databases
* .env configuration for secure credentials

---

## 📦 Deployment Guide

The project is deployment-ready. You can follow these steps:

* Deploy the backend on [Render](https://render.com), [Railway](https://railway.app), or [Vercel](https://vercel.com) with environment variables.
* Deploy the frontend on [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com).
* Connect your API to the deployed frontend.
* Add the live link to your resume or portfolio.

---

## 📚 Perfect For

* New developers wanting to learn full-stack development
* Students building portfolio projects
* Anyone exploring real-world web app deployment with rate limiting and secure API practices

---

## 📎 License

This project is open source and available under the [MIT License](LICENSE).

---

Let me know if you want this turned into a downloadable file or need instructions for Docker, testing, or CI/CD setup.
