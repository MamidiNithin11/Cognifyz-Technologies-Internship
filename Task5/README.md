🧱 MERN Notes App

A full-stack **MERN** (MongoDB Atlas, Express, React, Node.js) application that allows users to **create**, **read**, **update**, and **delete** notes. The app features a fully functional REST API, **rate limiting via Upstash Redis**, responsive UI, and a clean deployment setup. Ideal for both personal use and portfolio enhancement.

---

## 🚀 Features

* 📝 **Note Management** – Create, view, update, and delete notes with a title and description
* ⚙️ **RESTful API** – Cleanly structured API with proper HTTP methods and status codes
* 🔐 **Rate Limiting** – Secured with Upstash Redis to prevent abuse
* ☁️ **Cloud Database** – Notes are stored in **MongoDB Atlas**
* 🌐 **Responsive Frontend** – Built with React and works on all device sizes
* 🔧 **Environment-Based Config** – Use `.env` to manage secrets and configs
* 📦 **Deployment-Ready** – Easily deploy backend and frontend separately
* 🧩 **Modular Codebase** – Scalable folder structure for growth and clarity

---

## 📁 Project Structure

```
/mern-notes-app
│
├── /frontend       # React frontend (UI to create/manage notes)
│   ├── src
│   └── ...
│
├── /backend        # Express backend (API + DB logic)
│   ├── controllers
│   ├── models
│   ├── routes
│   └── ...
│
└── README.md
```

---

## 🔧 Backend Setup

### 1. Configure Environment Variables

Create a `.env` file inside the `/backend` folder:

```env
MONGO_URI=<your_mongo_atlas_uri>
UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>
NODE_ENV=development
```

### 2. Install & Run the Backend

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

## 📚 Use Case

The Notebook App allows users to manage notes with ease:

* 🆕 **Create** new notes
* 📥 **Store** them securely in **MongoDB Atlas**
* 🔍 **Retrieve** and read previously saved notes
* ✏️ **Update** content as needed
* 🗑️ **Delete** notes no longer required

All data flows through a secure API with rate-limiting for protection against abuse.

## 📚 Ideal Use Cases

* 📘 Personal note-taking system with cloud storage
* 🧠 Practice project for mastering the **MERN stack**
* 🧑‍💻 Portfolio piece showcasing REST API + real-world backend logic
* 🛡️ Example of rate-limiting, secure `.env` usage, and deployment

---

## 📎 License

This project is open-source and available under the [MIT License](LICENSE).



