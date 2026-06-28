# Resume AI

Resume AI is a full-stack web application built with React, Node.js, and MongoDB that allows users to easily build, manage, and customize their resumes. It features direct integration with Google's Gemini AI to automatically enhance your professional summaries and job descriptions, ensuring they are impactful and ATS-friendly.

## Features

- AI-powered resume summary and job description enhancement
- Guided resume builder with editable experience, education, skills, and projects
- Multiple resume templates and live preview support
- User authentication with secure account management
- PDF resume text extraction and upload workflow
- Profile image upload and customization
- Responsive React interface with backend API integration

## 📂 Project Structure and API endpoints

### Project structure

- `client/`
  - React frontend app
  - `src/pages/` - application pages like dashboard, builder, preview, login
  - `src/components/` - reusable UI components and resume templates
  - `src/configs/api.js` - Axios setup for backend communication
- `backend/`
  - Express backend API server
  - `src/config/` - database, auth, upload, and ImageKit configuration
  - `src/controllers/` - request handlers for users, resumes, and AI endpoints
  - `src/routes/` - API route definitions
  - `src/models/` - MongoDB data models

### API endpoints

- `POST /api/users/register` - create a new user account
- `POST /api/users/login` - authenticate user and receive a token
- `POST /api/resumes/create` - create a new resume (protected)
- `PUT /api/resumes/update` - update an existing resume (protected)
- `POST /api/resumes/delete/:resumeId` - delete a resume (protected)
- `POST /api/resumes/get/:resumeId` - fetch a specific resume for the logged-in user (protected)
- `GET /api/resumes/public/:resumeId` - fetch a public resume for preview
- `POST /api/ai/...` - AI-assisted resume enhancement routes

## Frontend Dependencies

- **[React](https://react.dev/)**: The core UI library for building the user interfaces.
- **[React Router DOM](https://reactrouter.com/)**: Handling dynamic client-side routing.
- **[Redux Toolkit](https://redux-toolkit.js.org/) & [React Redux](https://react-redux.js.org/)**: For centralized application state management.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for rapid and responsive UI styling.
- **[Axios](https://axios-http.com/)**: Promise-based HTTP client for seamless backend API communication.
- **[Lucide React](https://lucide.dev/)**: Beautiful and consistent SVG icons for the interface.
- **[React Hot Toast](https://react-hot-toast.com/)**: For displaying clean and responsive notification toasts.
- **[React PDF to Text](https://www.npmjs.com/package/react-pdftotext)**: Utility to extract and parse text from PDF uploads.

## Backend Dependencies

- **[Express](https://expressjs.com/)**: Fast, unopinionated, minimalist web framework for Node.js.
- **[Mongoose](https://mongoosejs.com/)**: Elegant MongoDB object modeling for Node.js.
- **[OpenAI SDK](https://github.com/openai/openai-node)**: Used to integrate with Google's Gemini AI via their OpenAI compatibility layer.
- **[JSON Web Token (JWT)](https://jwt.io/)**: For secure, stateless user authentication and authorization.
- **[Bcrypt.js](https://www.npmjs.com/package/bcryptjs)**: For securely hashing user passwords before database storage.
- **[ImageKit Node.js](https://docs.imagekit.io/api-reference/upload-images)**: Integration for uploading and managing profile pictures.
- **[Multer](https://github.com/expressjs/multer)**: Middleware for handling `multipart/form-data`, primarily used for file uploads.
- **[Cors](https://expressjs.com/en/resources/middleware/cors.html)**: Middleware to enable Cross-Origin Resource Sharing.
- **[Dotenv](https://github.com/motdotla/dotenv)**: Module to load environment variables from a `.env` file.
