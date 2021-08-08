// Creates a simple server using node and express on port 3001.
const express = require("express");
const app = express();
const path = require("path");

// Initialise middleware (a request body parser)
app.use(express.json({ extended: false }));
// This will have Node serve the files for our built react app.
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use("/api/countdown", require("./api/countdown"));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});