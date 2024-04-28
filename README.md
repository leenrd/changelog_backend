# Changelog application for product updates

Express application w/ Typescript + Postgres for DB, Prisma for ORM, and served using Docker

> [!Important]
>
> The routes and database schema are subject to change, and the application is not yet fully tested.

## Architecture

The changelog application is a modern web system designed to effectively manage and document updates made to an Express.js application, leveraging PostgreSQL as the backend database.

### Backend

- **Express.js w/ Typescript:**

  - Serves as the backend framework to handle HTTP requests and responses.
  - Utilizes middleware for routing, authentication, and error handling.

- **PostgreSQL Database:**
  - Stores changelog entries, user data, and any other necessary information.
  - Leverages relational database features for structured data storage.
    Database Schema: w/ prisma orm:

![alt text](/docs/image.png)


> [!Note]
>
> #### **_The docker image is not yet fully tested, and may contain bugs._**

