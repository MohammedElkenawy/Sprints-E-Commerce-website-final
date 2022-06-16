const express = require("express");

const router = express.Router();
const path  = require('path');


router.get("/:imageId", (req, res, next) => {
    res.sendFile(path.join(__dirname, `../uploads/${req.params.imageId}`));
});

module.exports = router