const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("views"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Coffee Shop running on port ${PORT}`);
});