require("dotenv").config();
const app = require("./src/app");
const PORT = process.env.PORT || 3000;
const { connectToDatabase } = require("./src/db/db");
// Connect to the database before starting the server
connectToDatabase().then(() => {
    console.log("Database connection established. Starting server...");
}).catch((error) => {
    console.error("Failed to connect to database. Server will not start.", error);
    process.exit(1); // Exit the process with an error code
}
);

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
