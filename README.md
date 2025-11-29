🎬 MicroProject 2 – Movie REST API

A complete Node.js + Express + MongoDB (Mongoose) REST API for managing movie records.
This project demonstrates CRUD operations, MongoDB Atlas connection, route handling, controllers, models, and API testing using Postman.

📁 Project Folder Structure
MicroProject2_Dhiraj/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── movieController.js
│
├── models/
│   └── Movie.js
│
├── routes/
│   └── movies.js
│
├── node_modules/
│
├── .env
│
├── package.json
├── package-lock.json
│
├── server.js
│
└── README.md

⚙️ Technologies Used

Node.js

Express.js

MongoDB Atlas

Mongoose

Postman (testing)

MongoDB Compass

🚀 How to Run the Project
1. Install dependencies
npm install

2. Create a .env file

Add your MongoDB Atlas connection URI:

MONGO_URI=your_atlas_connection_string
PORT=5000

3. Start the server
npm run dev


If successful, you should see:

MongoDB connected
Server running on port 5000

🛠️ API Endpoints
📌 Base URL
http://localhost:5000/api/movies

📥 1. Create Movie (POST)
POST /api/movies


Body (JSON example):

{
  "title": "Inception",
  "director": "Christopher Nolan",
  "category": "Sci-Fi",
  "duration": 148,
  "releaseYear": 2010,
  "rating": 8.8
}

📤 2. Get All Movies (GET)
GET /api/movies

🎯 3. Get Movie by ID (GET)
GET /api/movies/:id

✏️ 4. Update Movie (PUT)
PUT /api/movies/:id


Example Body:

{
  "rating": 9.1
}

🗑️ 5. Delete Movie (DELETE)
DELETE /api/movies/:id

🧪 Postman Testing

You must include screenshots of:

✅ POST request (movie created)
✅ GET all movies
✅ GET movie by ID
✅ PUT update movie
✅ DELETE movie
✅ Response bodies

📸 Screenshots Checklist (Submit these in Word File)
✔ Server Running

Terminal showing “MongoDB connected” & “Server running on port 5000”

✔ Postman Screenshots

POST /api/movies

GET /api/movies

GET /api/movies/:id

PUT /api/movies/:id

DELETE /api/movies/:id

✔ MongoDB Compass

Show the movies collection with documents

✔ Folder Structure

Screenshot of your VS Code project tree

🔗 GitHub Repository Link

(Replace with your repo URL)
👉 https://github.com/dhirajdc200/MicroProject2_Dhiraj

👨‍💻 Author

Dhiraj DC
Georgian @ ILAC – Semester 4
JavaScript – MicroProject 2