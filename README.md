AI-Powered Journaling System

Overview

The AI-Powered Journaling System is a full-stack web application that enables users to write journal entries and analyze the emotional tone of their text using an AI-based emotion analysis module.

The goal of this project is to demonstrate how Artificial Intelligence can be integrated with modern web technologies to provide meaningful insights into human emotions expressed through written text.

This application allows users to:

- Write daily journal entries
- Store entries in a database
- Analyze emotions from journal text
- View previous journal entries
- Receive instant emotional feedback

The project combines a React frontend, Node.js backend, and SQLite database with a lightweight Natural Language Processing (NLP) based emotion analysis service.

---

Motivation

People often use journaling as a way to reflect on their thoughts and emotions. However, understanding emotional patterns across multiple entries can be difficult.

This project aims to solve that problem by automatically detecting emotions from journal text and providing feedback to users.

By combining journaling with AI analysis, the application helps users gain better awareness of their emotional state.

---

Features

1. Journal Entry Creation

Users can write journal entries directly through the web interface.

The entries are sent to the backend server and saved in the database for future reference.

---

2. Emotion Analysis

The application analyzes the text written by the user and determines the emotional tone of the entry.

Possible emotion outputs include:

- Happy 😄
- Sad 😢
- Angry 😡
- Neutral 😐

The emotion is displayed directly in the UI after analysis.

---

3. Journal Storage

All journal entries are stored in a database. Users can view their previous entries anytime.

This allows the system to track emotional history over time.

---

4. Previous Entries Viewer

The UI displays a list of all previous journal entries for the user.

This helps users revisit past thoughts and reflect on emotional changes.

---

5. Simple and Modern Interface

The frontend is built using React and provides a clean, interactive interface for writing and analyzing journal entries.

---

System Architecture

The project follows a three-layer architecture.

Frontend (React.js)

The frontend handles the user interface and user interaction.

Responsibilities:

- Display journal writing interface
- Send requests to backend APIs
- Display emotion analysis results
- Show previously saved journal entries

Technologies used:

- React.js
- JavaScript
- HTML & CSS
- Fetch API

---

Backend (Node.js + Express)

The backend manages the core logic of the application.

Responsibilities:

- Receive journal entries
- Store entries in the database
- Process emotion analysis
- Serve API endpoints

Technologies used:

- Node.js
- Express.js

---

Database (SQLite)

The application uses a lightweight relational database to store journal entries.

SQLite was chosen because it is simple to use and ideal for small applications and prototypes.

Stored data includes:

- Entry ID
- User ID
- Journal Text
- Ambience
- Timestamp

---

AI Emotion Analysis

The system includes a basic emotion detection module implemented on the backend.

The module performs simple Natural Language Processing to detect emotional patterns in the journal text.

The emotion analysis works by:

1. Receiving journal text from the frontend
2. Processing the text using predefined emotional keywords
3. Classifying the emotion into one of the supported categories
4. Returning the result to the frontend

The detected emotion is displayed with emoji feedback for better user interaction.

---

API Endpoints

Create Journal Entry

POST /api/journal

Creates and stores a new journal entry.

Example request:

{
  "userId": "123",
  "ambience": "forest",
  "text": "I felt calm today listening to rain."
}

---

Get Journal Entries

GET /api/journal/:userId

Returns all journal entries for a specific user.

---

Analyze Emotion

POST /api/journal/analyze

Analyzes the emotion of the provided journal text.

Example request:

{
  "text": "I feel very happy today."
}

Example response:

{
  "emotion": "happy",
  "summary": "User expressed positive emotions."
}

---

Project Workflow

The application works in the following sequence:

1. User writes a journal entry in the frontend interface
2. The entry is sent to the backend API
3. The backend stores the entry in the SQLite database
4. The user clicks the Analyze Emotion button
5. The backend processes the text using the emotion analysis module
6. The detected emotion is returned to the frontend
7. The frontend displays the emotion and summary to the user

---

Tech Stack

Frontend

- React.js
- JavaScript
- HTML
- CSS

Backend

- Node.js
- Express.js

Database

- SQLite

Tools

- GitHub for version control
- Postman for API testing

---

Installation and Setup

Clone the Repository

git clone https://github.com/Sujanps29-cyber/ai-journal-system.git

---

Run Backend

cd backend
npm install
node server1.js

The backend server will start on:

http://localhost:5000

---

Run Frontend

npm install
npm start

The frontend will start on:

http://localhost:3000

Open the browser and navigate to:

http://localhost:3000

---

Example Usage

1. Write a journal entry

Example:

I felt calm today while listening to the rain.

2. Click Analyze Emotion

3. The system detects:

Emotion: Happy 😄

4. The entry is saved and displayed in Previous Entries.

---

Future Improvements

The system can be extended with several advanced features:

- Deep learning based sentiment analysis
- Emotion trend analytics dashboard
- Cloud database integration
- User authentication system
- Mobile responsive UI
- Advanced NLP models for better emotion detection

---

Conclusion

The AI-Powered Journaling System demonstrates how artificial intelligence can be integrated with modern web development to analyze human emotions from text.

By combining React, Node.js, and NLP techniques, the application provides a simple yet effective platform for emotional journaling and reflection.

This project highlights the potential of AI-driven applications in improving personal well-being through technology.

---

