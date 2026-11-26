# Project Management Backend (early version)

> **This repo is the starting point of TeamLine.**
> The full, maintained backend lives here: **[Team-line/TeamLine-Backend](https://github.com/Team-line/TeamLine-Backend)**

---

## What this repo is

The first stage of a Kanban-style project management API for small teams and Arabic-speaking users. The complete project continues in TeamLine-Backend, which adds boards, tasks, time tracking, reports and a dashboard.

## What is in this version

- Sign up and sign in with JWT.
- User profile, update password and update profile data.
- Forgot password and reset by email link.
- Workspace data model (owner and members).
- Rate limit on auth routes, Helmet and CORS.

**Stack:** Node.js, Express 5, MongoDB, Mongoose, Joi, JWT, bcryptjs.

## Compared with TeamLine

| Feature | This repo | TeamLine |
|---------|:---------:|:--------:|
| Auth and password reset | ✅ | ✅ |
| Refresh tokens | ❌ | ✅ |
| Workspaces and members API | ❌ | ✅ |
| Boards, columns and tasks | ❌ | ✅ |
| Time tracking | ❌ | ✅ |
| Reports (CSV and PDF) | ❌ | ✅ |
| Dashboard | ❌ | ✅ |

## Author

[Mohammed Ferwana](https://github.com/hammoudFerwana), backend developer.
[LinkedIn](https://www.linkedin.com/in/mohammed-ferwana) · mohammedferwana2@gmail.com
