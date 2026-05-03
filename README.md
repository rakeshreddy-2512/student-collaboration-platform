# Student Collaboration Platform

A modern full-stack collaboration platform for students to coordinate projects, communicate in group chats, organize tasks, and stay informed with notifications.

## Tech Stack

- **Frontend:** React + Vite + Tailwind CSS + React Router
- **Backend:** Node.js + Express
- **Database:** MongoDB + Mongoose
- **Auth:** JWT-based authentication

## Core Features

- 🔐 **Authentication** (register/login with JWT)
- 👥 **Group Chats** (create group chats, post messages)
- 📁 **Project Sharing** (create and browse shared projects)
- ✅ **Task Management** (create and track project tasks)
- 🔔 **Notifications** (fetch and mark notifications as read)
- 📊 **Dashboard** with overview stats

## Project Structure

```
student-collaboration-platform/
├── client/   # React + Tailwind frontend
├── server/   # Express + MongoDB backend
└── package.json  # workspace/dev orchestration
```

## Getting Started

### 1) Prerequisites

- Node.js 18+
- MongoDB instance (local or Atlas)

### 2) Install dependencies

```bash
npm install
npm run install:all
```

### 3) Configure backend environment

Create `server/.env`:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/student-collab
JWT_SECRET=replace-with-a-strong-secret
```

### 4) Run in development

```bash
npm run dev
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

## API Endpoints (Sample)

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`

### Projects
- `GET /api/projects`
- `POST /api/projects`

### Tasks
- `GET /api/tasks?project=<projectId>`
- `POST /api/tasks`

### Chats
- `GET /api/chats`
- `POST /api/chats`
- `POST /api/chats/:chatId/messages`

### Notifications
- `GET /api/notifications`
- `PATCH /api/notifications/:id/read`

> Most endpoints are protected and require an `Authorization: Bearer <token>` header.

## Roadmap

- WebSocket real-time chat
- File attachments and media sharing
- Role-based permissions and moderation
- Notification delivery channels (email/push)
- Team analytics and reporting

## License

MIT
