# fork-cloud-webapp

# CSYE 6225

This repository contains an Express.js application designed for a basic health check API endpoint. Below is an overview of the files and their functionalities-

## Usage:

1. Clone the repository to your local environment.
2. Install dependencies using `npm install`.
3. Set up your PostgreSQL database with the name 'assignment_01' and adjust the database credentials in `database.js` if necessary.
4. Run the application using `npm start` or `npm run node-start`.
5. Access the health check endpoint at `http://localhost:8080/healthz`.

## Dependencies:

- `dotenv`: For loading environment variables.
- `express`: Web framework for Node.js.
- `pg`: PostgreSQL client for Node.js.
- `sequelize`: ORM for Node.js.
- `nodemon`: Development utility for automatic server restarts.

## Scripts:

- `start`: Uses nodemon to run the application with automatic restarts on file changes.
- `node-start`: Runs the application without nodemon.

## Learning Outcomes:

- Separation of Concerns
- File Structure for Node.js application based on Separation of Concerns
- Currying | Javascript

## References:

- [Sequelize](https://sequelize.org/docs/v6/getting-started/)
- [Node.js Project Architecture](https://blog.logrocket.com/node-js-project-architecture-best-practices/#why-project-architecture-important)
- [What is an ORM](https://www.freecodecamp.org/news/what-is-an-orm-the-meaning-of-object-relational-mapping-database-tools/)
- [How to Use PostgreSQL With Sequelize in Node.js](https://medium.com/@ahsankhaleeq10/how-to-use-postgresql-with-sequelize-in-node-js-1bed818c9f02)
- [req Request Object](https://medium.com/@ganeshsurfs/expressjs-series-what-i-need-to-know-about-the-req-request-object-in-the-route-request-handler-b4aab9e24300)
- [How strict should I be with rejecting unexpected query parameters](https://security.stackexchange.com/questions/209014/how-strict-should-i-be-in-rejecting-unexpected-query-parameters)
- [Currying in Javascript](https://blog.logrocket.com/understanding-javascript-currying/)