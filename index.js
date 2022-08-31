const express = require("express");
const path = require("path");
const app = express();

app.length('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
})

const port = 4006;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})