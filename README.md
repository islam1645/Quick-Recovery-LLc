# Vela — Business Landing Page

A full-stack business landing page built with **React**, **Node.js (Express)**, and **MongoDB**.

---

## Project Structure

```
vela/
├── client/          # React frontend (Vite)
└── server/          # Node.js + Express backend
```

---

## Prerequisites

- Node.js v18+
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/atlas))

---

## Setup

### 1. Clone the repo
```bash
git clone <your-repo-url>
cd vela
```

### 2. Setup the Server
```bash
cd server
npm install
cp ../.env.example .env   # then edit .env with your MongoDB URI
npm run dev               # starts on http://localhost:5000
```

### 3. Setup the Client
```bash
cd client
npm install
npm run dev               # starts on http://localhost:5173
```

---

## Environment Variables (`server/.env`)

| Variable     | Description                          | Example                              |
|--------------|--------------------------------------|--------------------------------------|
| `PORT`       | Port for the Express server          | `5000`                               |
| `MONGO_URI`  | MongoDB connection string            | `mongodb://localhost:27017/vela`     |
| `CLIENT_URL` | Frontend URL (for CORS)              | `http://localhost:5173`              |

---

## API Endpoints

| Method | Endpoint         | Description              |
|--------|-----------------|--------------------------|
| GET    | `/api/health`   | Health check             |
| POST   | `/api/contact`  | Submit contact form      |
| GET    | `/api/contact`  | List all messages (admin)|

### POST `/api/contact` — Request Body
```json
{
  "name": "John Smith",
  "email": "john@example.com",
  "phone": "+1 555 000 0000",
  "message": "I'd like a quote for your services."
}
```

---

## Sections

- **Hero** — Bold headline with CTA buttons and key stats
- **About** — Company story, trust signals, and key points
- **Services** — 6 service cards with hover effects
- **Contact** — Form connected to MongoDB + business info
- **Footer** — Navigation links and branding

---

## Customization

- Update business name and content in each component inside `client/src/components/`
- Colors are defined as CSS variables in `client/src/index.css` — change `--navy`, `--blue`, etc.
- Add more services in `Services.jsx`

---

## Production Build

```bash
cd client && npm run build
```
Serve the `client/dist` folder from your Express server or deploy to Vercel/Netlify.
