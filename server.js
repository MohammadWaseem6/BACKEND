    // Importing required modules
    const express = require("express");
    const app = express();
    const port = 8000;

    // Middleware for parsing JSON in request bodies
    const bodyParser = require("body-parser");
    app.use(bodyParser.json());

    // Server listening on specified port
    app.listen(port, () => {
        console.log(`App is listening at port: ${port}`);
    });

    // Route: GET /
    app.get("/", (req, res) => {
        // Returns a simple homepage message
        res.send("This is the homepage");
    });

    // Route: GET /about
    app.get("/about", (req, res) => {
        // Returns a message for the about page
        res.send("This is the about page");
    });

    // Route: POST /cars
    app.post("/cars", (req, res) => {
        // Extracts data from the request body
        const { name, model } = req.body;

        // Logs the received data
        console.log(name);
        console.log(model);

        // Sends a success message
        res.send("Cars sent successfully");
    });

    // Route: POST /bikes
    app.post("/bikes", (req, res) => {
        // Extracts data from the request body
        const { wheeler, speed } = req.body;

        // Logs the received data
        console.log(wheeler);
        console.log(speed);

        // Sends a success message
        res.send("Bikes sent successfully");
    });

    // Route: POST /humans
    app.post("/humans", (req, res) => {
        // Extracts data from the request body
        const { Hname, hage } = req.body;

        // Logs the received data
        console.log(Hname);
        console.log(hage);

        // Sends a success message
        res.send("Human details fetched successfully");
    });

    // Route: POST /waseem
    app.post("/waseem", (req, res) => {
        // Extracts data from the request body
        const { name, age } = req.body;

        // Logs the received data
        console.log(name);
        console.log(age);

        // Sends a success message
        res.send("Details of Waseem are fetched");
    });

    // Route: GET /contact
    app.get("/contact", (req, res) => {
        // Extracts data from the request body (Note: Should be in the query parameters)
        const { contactNo, Pincode } = req.body;

        // Logs the received data
        console.log(contactNo);
        console.log(Pincode);

        // Sends a success message
        res.send("Successfully created");
    });

    // Database connection using Mongoose
    const mongoose = require("mongoose");
    mongoose.connect('mongodb://127.0.0.1:27017/mydb', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            // Logs a success message if the connection is successful
            console.log("DB connected successfully");
        })
        .catch((error) => {
            // Logs an error message if the connection fails
            console.log("Failed to connect to the database");
            console.error(error);
        });
