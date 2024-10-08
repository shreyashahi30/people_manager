 People Management

 Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
5. [Usage](#usage)
6. [Project Structure](#project-structure)
7. [Running Tests](#running-tests)
8. [Deployment](#deployment)


 Introduction
People Management is an Angular application designed to manage people's information, including adding, editing, and deleting individuals. The application provides a user-friendly interface for managing user data effectively.

 Features
- Add new person with name and age
- Edit existing person details
- Delete a person
- Responsive design
- Modal popups for user confirmation
- Routing for navigation between components

 Technologies Used
- [Angular](https://angular.io/) - The front-end framework used to build the application.
- [TypeScript](https://www.typescriptlang.org/) - A superset of JavaScript that provides static typing.
- [Bootstrap](https://getbootstrap.com/) - For styling and responsive design.
- [RxJS](https://rxjs.dev/) - For reactive programming and handling asynchronous data streams.

 Getting Started

 Prerequisites
To run this project, you need to have the following installed on your machine:
- [Node.js](https://nodejs.org/en/) (version 14 or later)
- [Angular CLI](https://angular.io/cli) (installed globally)

 Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/people-management.git
   cd people-management

2. Install the dependencies:
npm install

Usage
1. Start the development server:
ng serve

2. Open your web browser and navigate to http://localhost:4200.

3.You can now use the application to manage people's information:
- Add new people using the form provided.
- Edit existing people by clicking the "Edit" button.
- Delete a person by clicking the "Delete" button and confirming the action

Running Tests
To run the tests for the project, use the following command:
ng test(This command will start the Karma test runner and execute the tests defined in the project.)

Deployment
To build the project for production, run:
ng build --prod (This command will create a dist/ directory with the production build of the application. You can then deploy the contents of this directory to your web server.)
