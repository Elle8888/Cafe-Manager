# Cafe-Manager Manager App
This is a web application built using the PERN (PostgreSQL, Express, React, Node.js) stack, Tailwind CSS, and Cypress and Jest for testing. The purpose of this application is to provide a tool for cafe managers to manage their business operations.

## Features

* **Menu Management** : Add, edit, and remove menu items from the cafe's menu.
* **Order Management**: Track and manage customer orders, including the ability to mark orders as complete and view order history.
* **Employee Management**: Add and manage employee accounts with varying levels of access.
* **Inventory Management**: Track inventory levels for menu items and receive notifications when supplies run low.
* **Sales Analytics**: View sales data and analytics to make informed business decisions.

## Technologies Used

* PERN Stack: PostgreSQL for the database, Express.js for the server, React.js for the front-end, and Node.js for the back-end.
* Tailwind CSS: A utility-first CSS framework used for styling the user interface.
* Cypress and Jest: Testing frameworks used for automated testing.

<!---
Installation
1.Clone this repository using git clone.

2.Install dependencies by running npm install in both the root directory and the client directory.

3.Create a .env file in the root directory with the following environment variables:

PGUSER=your_postgresql_username
PGHOST=localhost
PGDATABASE=your_postgresql_database
PGPASSWORD=your_postgresql_password
PGPORT=5432

4.Start the development server by running npm run dev.
5.Navigate to http://localhost:3000 in your web browser to use the application.
--->

## Testing
This application has both unit tests and end-to-end tests.

To run the unit tests, navigate to the client directory and run npm test.

To run the end-to-end tests, make sure the development server is running and then navigate to the client directory and run npm run cypress.

## Planning Stage

### Project Scope
The goal of this project is to create a web application that enables cafe managers to manage their business operations. The application will allow cafe managers to manage their menu, track and manage customer orders, manage employee accounts, track inventory levels, and view sales data and analytics.

### User Stories

<img src=image/Cafe Manager Trello Board 2023-05-02 at 11.06.49.png/>

###  Design

<img src=image/Cafe Manager UML at 11.13.43.png/>

