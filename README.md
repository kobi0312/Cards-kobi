Cards Management Application
This project is a business card management application that allows users to create, view, update, and delete business cards. It consists of a backend server for handling API requests and a frontend client for user interaction.

Prerequisites
Node.js (version 14 or above)
MongoDB (running locally or on a service like MongoDB Atlas)
npm (Node Package Manager, usually included with Node.js)
Installation
1. Clone the repository:
bash
Copy code
git clone <repository URL>
2. Navigate to the main project folder:
bash
Copy code
cd project-folder
Running the Server
Navigate to the server directory:

bash
Copy code
cd server
Install the necessary packages:

bash
Copy code
npm install
Start the server:

bash
Copy code
node server.js
By default, the server runs on http://localhost:5000.

Running the Client
Navigate to the client directory:

bash
Copy code
cd client
Install the necessary packages:

bash
Copy code
npm install
Start the client:

bash
Copy code
npm start
By default, the client runs on http://localhost:3000 (or another available port if 3000 is in use).

Project Structure
bash
Copy code
project-folder/
├── server/
│   ├── models/
│   │   └── Card.js         # Mongoose schema for card documents
│   ├── server.js           # Main server file with API routes
│   └── .env                # Environment variables for the server
└── src/
    ├── cards/
    │   ├── components/     # Card-related components
    │   └── services/       # API services for cards
    ├── users/              # User-related components and services
    ├── App.jsx             # Main React component
    └── ...
Environment Variables
Create a .env file in the server directory with the following values:

plaintext
Copy code
MONGODB_URI=mongodb://localhost:27017/cardsDB  
PORT=5000  
JWT_SECRET=your-secret-key  
REACT_APP_BASE_URL=http://localhost:5000
MONGODB_URI: MongoDB connection string.
PORT: Port on which the server will run.
JWT_SECRET: Secret key for JWT tokens.
REACT_APP_BASE_URL: Base URL for API requests from the client.
API Documentation
API Endpoints
GET /cards
Description: Returns a list of all cards.

Response:

json
Copy code
[
  {
    "_id": "12345",
    "title": "Business Card",
    "description": "Description here",
    "phone": "123-456-7890",
    "address": "123 Business St",
    "cardNumber": 1,
    "imageUrl": "http://image.url"
  }
]
POST /cards
Description: Creates a new card.

Request Body:

json
Copy code
{
  "title": "My Card",
  "description": "Description here",
  "phone": "123-456-7890",
  "address": "123 Business St",
  "cardNumber": 1,
  "imageUrl": "http://image.url"
}
Response: Returns the newly created card.

GET /cards/:id
Description: Retrieves a single card by ID.

Response:

json
Copy code
{
  "_id": "12345",
  "title": "Business Card",
  "description": "Description here",
  "phone": "123-456-7890",
  "address": "123 Business St",
  "cardNumber": 1,
  "imageUrl": "http://image.url"
}
PUT /cards/:id
Description: Updates an existing card by ID.
Request Body: Similar to the POST /cards body.
Response: Returns the updated card.
DELETE /cards/:id
Description: Deletes a card by ID.
Response: Returns the deleted card.
Troubleshooting
Common Issues
Issue: EADDRINUSE: address already in use

Solution: Make sure no other process is using the same port. On Windows, you can find and kill the process with the following commands:
bash
Copy code
netstat -ano | findstr :5000
taskkill /PID <process_id> /F
Issue: MONGODB_URI or other environment variables showing as undefined

Solution: Ensure .env file is in the server folder and that variables are correctly defined in it. Also, ensure dotenv is correctly configured in server.js.
