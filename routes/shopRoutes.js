const express = require("express");
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

const shopController = require("../controllers/shopController");
const authMiddleware = require('../authMiddleware');

router.get("/addProduct", authMiddleware.authAdmin, shopController.getAddProduct);
router.post("/addProduct", authMiddleware.authAdmin, upload.single('imageUploaded'), shopController.postAddProduct);
router.get("/cart", authMiddleware.authUser, shopController.getCart);
router.post("/cart", authMiddleware.authUser, shopController.postCart);
router.get("/orders", authMiddleware.auth, shopController.getOrders);
router.post("/orders", authMiddleware.authUser,shopController.postOrders);
router.get("/products/:productId", shopController.getProduct);

module.exports = router