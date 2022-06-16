const express = require("express");

const router = express.Router();

const authController = require("../controllers/authController");
const authMiddleware = require('../authMiddleware');

router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/register", authController.getRegister);
router.post("/register", authController.postRegister);
router.get("/logout", authMiddleware.auth, authController.logout);

module.exports = router