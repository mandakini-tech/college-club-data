const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/mydatabase")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Create Schema
const UserSchema = new mongoose.Schema({
    name: String,
    email: String
});

const User = mongoose.model("User", UserSchema);

// API to insert data
app.post("/add-user", async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.send("User Added Successfully");
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
