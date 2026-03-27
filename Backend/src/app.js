
const express = require("express");

const app = express();

app.use(express.json());

// Import routes
const issueRoutes = require("./routes/issue.routes");
// Use routes
app.use("/api/issues", issueRoutes);


module.exports = app;