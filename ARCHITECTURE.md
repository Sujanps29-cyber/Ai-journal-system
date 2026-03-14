\# System Architecture



\## Overview



The AI-powered journaling system follows a full-stack architecture consisting of a React frontend, Node.js backend, AI analysis service, and SQLite database.



\## Components



\### Frontend (React)

\- User interface for writing journal entries

\- Displays previous entries

\- Sends requests to backend API



\### Backend (Node.js + Express)

\- Handles API requests

\- Processes journal data

\- Communicates with database

\- Calls AI analysis service



\### AI Emotion Analysis Service

\- Analyzes journal text

\- Detects emotional sentiment

\- Returns emotion category



\### Database (SQLite)

\- Stores journal entries

\- Stores user data

\- Lightweight local database



\## Data Flow



User Input → React UI → API Request → Express Server → AI Analysis → Database Storage → Response → UI Display

