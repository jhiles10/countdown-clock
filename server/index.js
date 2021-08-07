// Creates a simple server using node and express on port 3001.
const express = require ("express");

const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from the backend! test" });
});

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});