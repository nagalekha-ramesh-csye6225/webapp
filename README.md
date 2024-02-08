## GitHub Repository Setup for Web Applications

### Overview
This repository serves as a template for setting up web applications on GitHub. It includes guidelines for repository organization, branch protection rules, API requirements, authentication, and continuous integration (CI) setup using GitHub Actions.

### Repository Structure
- **webapp/**
  - Contains the source code and configuration files for the web application.
- **README.md**
  - Instructions and guidelines for building, deploying, and contributing to the web application.

### Prerequisites
Before building and deploying the web application locally, ensure you have the following prerequisites installed:
- [List your prerequisites here]

### Build and Deploy Instructions
To build and deploy the web application locally, follow these steps:
1. Clone the repository to your local machine.
2. Navigate to the `webapp/` directory.
3. Install dependencies using `npm install`.
4. Run the application using `npm start` or `npm run dev`.

### Branch Protection Rules
Branch protection rules are set up to ensure code integrity and maintain quality standards. The following rules are implemented:
- Require pull request reviews before merging.
- Disallow force-pushes.
- Require status checks to pass before merging.

### Database Bootstrapping
The application automatically bootstraps the database at startup using ORM framework Sequelize (for Node.js).

### RESTful API Requirements
- All API request/response payloads are in JSON format.
- No UI is implemented for the application.
- API calls return proper HTTP status codes.
- Token-based authentication is required for accessing authenticated endpoints.

### Authentication Requirements
Users must provide a basic authentication token for API calls to authenticated endpoints. Only token-based authentication is supported.

### Implemented APIs
- **Create a new user**: Endpoint for creating a user account with email, password, first name, and last name.
- **Update user information**: Endpoint for updating user account information (first name, last name, password).
- **Get user information**: Endpoint for retrieving user account information.

### Continuous Integration (CI) with GitHub Actions
A GitHub Actions workflow is set up to run simple checks (compile code) for each pull request. Pull requests can only be merged if the workflow executes successfully.

### Learning Outcome
By setting up this repository, you will learn:
- GitHub repository organization and setup.
- Branch protection rules and their importance in maintaining code quality.
- API design and authentication using token-based authentication.
- Continuous integration setup using GitHub Actions.

### References
- [Node.js PostgreSQL Tutorial](https://tinloof.com/blog/how-to-create-manage-a-postgres-database-in-node-js-from-scratch-tutorial)
- [Node Postgres Project Structure](https://node-postgres.com/guides/project-structure)
- [HTTP Authentication - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication)
- [Prevent Sequelize from Dropping Database](https://stackoverflow.com/questions/20882230/prevent-sequelize-to-drop-database-in-node-js-app)
- [Sequelize Model Synchronization](https://sequelize.org/docs/v7/models/model-synchronization/)
- [GitHub: Fork a Repo](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)
- [GitHub: Managing Forking Policy for Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)
- [CommonJS vs. ES Modules in Node.js](https://blog.logrocket.com/commonjs-vs-es-modules-node-js/)