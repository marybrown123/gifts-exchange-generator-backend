# Gifts Exchange Generator - Backend
Backend API for a gift exchange generator app.  
It allows users to create a lobby, add participants, and randomly assign gift pairs so each person gets exactly one recipient.

## Table of contents
- [Tech Stack](#tech-stack)
- [Main features](#main-features)
- [Running locally](#running-locally)
- [Available scripts](#available-scripts)
- [Database](#database)
- [Screenshots](#screenshots)
- [What I practised in this project](#what-i-practiced-in-this-project)
- [Frontend](#frontend)

## Tech Stack
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="20"/> Node.js
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="20"/> Express.js
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="20"/> TypeScript
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" height="20"/> PostgreSQL
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" height="20"/> Sequelize
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" height="20"/> Jest

## Main features
-   Create a new lobby for gift exchange    
-   Add at least 2 participants 
-   Validate input data before processing requests
-   Generate random gift pairs    
-   Get all participants from a selected lobby    
-   Get the assigned recipient for a specific participant using a unique hash    
-   Separate project layers: routes, controllers, services, DTOs, models

## Running locally
### Prerequisites
Make sure you have the following tools installed:
- Node.js
- PostgreSQL
- Git
1. **Clone the repository**
```
git clone https://github.com/marybrown123/gifts-exchange-generator-backend.git
```
```
cd gifts-exchange-generator-backend
```
2. **Install dependencies**
```
npm install
```
3. **Create PostgreSQL database**
Before starting the application, create a database in PostgreSQL:
```
CREATE DATABASE your_database_name;
```
You can do this using psql, pgAdmin, or any PostgreSQL client.

4. **Create `.env` file**
```
HOST=localhost
USER=your_postgres_user
PASSWORD=your_postgres_password
DB=your_database_name
```
5. **Start the development server**
```
npm run dev
```
The server should run on `http://localhost:3001`

## Available scripts
```
npm run dev        # run app in development mode
npm run build      # build TypeScript project
npm start          # run compiled production build
npm test           # run tests
npm run test:watch # run tests in watch mode
npm run test:cov   # generate test coverage
```
## Database
This project uses **PostgreSQL** with **Sequelize** as ORM.
The application synchronizes the database on startup.

## Screenshots
### Creating a lobby
Example API request using Postman to create a new gift exchange lobby.

<img  src="https://i.imgur.com/wGELNFq.png">

### Getting participants from a lobby
This endpoint returns all participants assigned to a specific lobby.  

It can be used to view the list of people who joined the gift exchange and verify that the lobby was created correctly.

<img  src="https://i.imgur.com/6oEIcQJ.png">

### Getting assigned recipient
Each participant can check who they should prepare a gift for using their unique hash.  
  
The endpoint returns the pair:  
- the participant  
- the assigned gift recipient  
  
This ensures that every participant can only see their own assignment.

<img  src="https://i.imgur.com/g8hEQpV.png">

## What I practiced in this project
-   REST API design    
-   Express app structure    
-   TypeScript in backend development    
-   working with PostgreSQL and Sequelize    
-   DTO-based validation    
-   splitting logic into controllers and services  
-   generating random assignments in business logic    
-   writing unit tests

## Frontend
The frontend for this project is available in a separate repository:
https://github.com/marybrown123/gifts-exchange-generator-frontend
It provides a user interface for creating gift exchange lobbies and checking assigned recipients.