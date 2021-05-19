const express=require("express");
const router=express.Router();
const {
    getProductList,
    getProductDetails,
} = require("../controllers/productController");

router.get("/",getProductList);
router.get("/:id",getProductDetails);

module.exports=router;
