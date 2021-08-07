// Creates a simple server using node and express on port 3001.
const express = require("express");
const app = express();
const path = require("path");

// Initialise middleware (a request body parser)
app.use(express.json({ extended: false }))

app.use("/api/countdown", require("./api/countdown"));
// app.use("/api/countdown", router)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});