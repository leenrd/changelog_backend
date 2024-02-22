# Changelog application for product updates

Express application w/ Typescript + Postgres for DB, Prisma for ORM

## Architecture

The changelog application is a modern web system designed to effectively manage and document updates made to an Express.js application, leveraging PostgreSQL as the backend database.
![alt text](/docs/Screenshot%202024-02-22%20112439.png)

### Backend

- **Express.js w/ Typescript:**

  - Serves as the backend framework to handle HTTP requests and responses.
  - Utilizes middleware for routing, authentication, and error handling.

- **PostgreSQL Database:**
  - Stores changelog entries, user data, and any other necessary information.
  - Leverages relational database features for structured data storage.
    Database Schema: w/ prisma orm

![alt text](/docs/image.png)

### API

- **RESTful API:**
  - Follows RESTful principles for clear and standardized communication between the frontend and backend.
  - Endpoints include functionalities for creating, updating, and retrieving changelog entries.

### Authentication: inProgress

- **JWT (JSON Web Tokens):**
  - Implements JWT for secure user authentication.
  - Provides access tokens for authorized users to interact with the application.

## Deployment: inProgress

- **Containerization:**
  - Docker containers for packaging the application, simplifying deployment across different environments.
