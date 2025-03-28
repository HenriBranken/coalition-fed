# Fullstack Web App (Express + Vite + React)

[![Deploy on Render](https://img.shields.io/badge/Deployed%20on-Render-blueviolet?style=for-the-badge&logo=render)](https://coalition-fed.onrender.com/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-Backend-black?style=for-the-badge&logo=express)](https://expressjs.com/)
[![Vite](https://img.shields.io/badge/Vite-Frontend-ffde57?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18%2B-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

This is a fullstack web application built using **Express.js** (backend) and **React + Vite** (frontend). This README will help you get the app running locally from scratch.

---

## 📚 Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Setup the Backend (Express)](#2-setup-the-backend-express)
  - [3. Setup the Frontend (React + Vite)](#3-setup-the-frontend-react--vite)
- [View the Web App](#view-the-web-app)
- [Deployment on Render](#deployment-on-render)
  - [1. Project Structure for Deployment](#1-project-structure-for-deployment)
  - [2. Render Configuration](#2-render-configuration)
  - [3. Live URL](#3-live-url)

---

## Prerequisites

Make sure you have the following installed:

- [Node.js & npm](https://nodejs.org/) (v16+ recommended)
- [Git](https://git-scm.com/)

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/HenriBranken/coalition-fed
cd coalition-fed
```

**NB: If, at this stage, the Git repo is still private, then please proceed by unzipping the provided `.zip` file.**

### 2. Setup the Backend (Express)

```bash
cd backend

# A clean install
rm -rfv node_modules package-lock.json
npm install

# Start the backend server
npm start
```

By default, this should run on [http://localhost:8000](http://localhost:8000)

### 3. Setup the Frontend (React + Vite)

```bash
cd frontend

# A clean install
npm -rfv node_modules package-lock.json
npm install

# Start the frontend development server:
npm run dev
```

By default, the frontend should run on:
[http://localhost:5173](http://localhost:5173)

---

## View the Web App
Once both the backend and frontend servers are running, open your browser and go to:
[http://localhost:5173](http://localhost:5173)

The React App should be live, and the API requests to `/api` will be proxied to the backend server on port `8000` using Vite's proxy configuration as specified in the `frontend/vite.config.js` file.

---

## Deployment on Render

This fullstack app is deployed to Render.com using a unified deployment setup, where the backend serves the production-ready frontend build.

### 1. Project Structure for Deployment

```bash
project-root/
│
├── backend/               # Express server (Render root)
│   ├── index.js
│   └── package.json       # Main entry point for Render
│
├── frontend/              # React + Vite frontend
│   ├── package.json
│   └── dist/              # Built via `npm run build`
```

### 2. Render Configuration

- **Root Directory**: `backend`
- **Build Command**:

  ```bash
  npm install && cd ../frontend && npm install && npm run build
  ```
  
  Notice that this:
  - Install the backend dependencies (`express`, etcetera)
  - Installs the frontend dependencies (`react`, `vite`, etcetera)
  - Builds the frontend into `frontend/dist`
- **Start Command**:

  ```bash
  npm start
  ```
  
  This runs the Express server, which:
  - Serves the built frontend from `../frontend/dist`
  - Handles the API requests under `/api/*`

### 3. Live URL
Once Deployed, the app is accessible from:
[https://coalition-fed.onrender.com/](https://coalition-fed.onrender.com/)

The Express backend serves all the static assets and handles routing using the `index.html` fallback fro React routes, ensuring that client-side routing works in production.

**With this setup, there is no need to deploy the frontend separately - Render.com serves everything from one unified backend.**

---