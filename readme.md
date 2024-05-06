# CRUD API

## Description

This project is a CRUD API built using Node.js and MongoDB Atlas. It provides endpoints for performing CRUD operations on a MongoDB database.

## Prerequisites

- Node.js (version 20.10.0 or higher)
- MongoDB Atlas account (or local MongoDB installation)
- Postman (or any other API testing tool)

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/spwrs-workspace/Hirademy-Assignment.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your_project_dir
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB Atlas connection string:

   ```
   MONGODB_URI=your_mongodb_uri_here
   ```

## Running the Server

Start the server using the following command:

```bash
npm start
```

The server will start on port 4000 by default.

## Testing with Postman

1. Open Postman.

2. Import the provided Postman collection (`project_name.postman_collection.json`).

3. Test the API endpoints using the imported collection.
