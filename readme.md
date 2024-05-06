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
   
## Creating a Database in MongoDB Atlas

1. **Sign up or Sign in to MongoDB Atlas:**
   - If you don't have an account, sign up for MongoDB Atlas. If you have an account, sign in.

2. **Create a New Cluster:**
   - Click on "Build a New Cluster" or "Build a Cluster" button in the MongoDB Atlas dashboard.
   - Choose your preferred cloud provider, region, and cluster configuration.

3. **Configure Cluster Settings:**
   - Set up additional configurations like cluster name, cloud provider region, and cluster tier.
   - Review the settings and click "Create Cluster".

4. **Whitelist Your IP Address:**
   - Navigate to the "Network Access" tab in the cluster's settings.
   - Click on "Add IP Address" and add your current IP address to the whitelist.

5. **Create a Database User:**
   - Go to the "Database Access" tab in the cluster's settings.
   - Click on "Add New Database User" and create a new user with appropriate permissions.

6. **Connect to Your Cluster:**
   - After creating the database user, navigate to the "Clusters" tab and click on "Connect" for your cluster.
   - Choose "Connect Your Application" and copy the connection string.

7. **Use the Database:**
   - Use the obtained connection string in your Node.js application to connect to the MongoDB Atlas cluster.
   - Perform operations like inserting documents into collections to interact with the database.

## Running the Server

Start the server using the following command:

```bash
npm start
```

-The server will start on port 4000 by default.

## Testing with Postman

1. Open Postman.

2. Import the provided Postman collection (`CRUD API.postman_collection.json`).

3. Test the API endpoints using the imported collection.
