const express = require("express");

const app = express();

const PORT = 3000;

const products = require("./products.json");

// API starts here
app.get("/products", (req, res) => {
    res.json(products);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Product Service running on port ${PORT}`);
});
