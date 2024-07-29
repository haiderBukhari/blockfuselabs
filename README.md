# Section A Q1 Array Midpoint

This is a simple implementation fo array in which placing the array element in MERGED array and getting the midpoint.

## Running
1. Clone the repository:
    ```bash
    git clone https://github.com/haiderBukhari/blockfuselabs.git
    cd Section_A
    ```

2. Run the code:
    ```bash
    node Q1.js
    ```

-------------------

# Section B Q1 Library System API

This is a simple RESTful API for a library system built using Node.js, Express.js, and Mongoose. The API allows users to perform CRUD operations on books and authors.

## Project Structure
This project is following MVC architecture  having seperate model, controllers and routes for books and authors.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/haiderBukhari/blockfuselabs.git
    cd Section_B/Q1
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

## Configuration

Set up your MongoDB connection string. You can also use Mongodb Atlas for it, but I have used mongos shell to connect locally. You can change the connection string in `config/db.js`.

## Running the Application

1. Start the MongoDB server if it's not already running.

2. Start the Node.js server:
    ```bash
    node app.js
    ```
