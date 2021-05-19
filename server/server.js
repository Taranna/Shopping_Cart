require("dotenv").config();
const path=require("path");
const express=require("express");
const productRoutes=require("./routes/productRoutes");
const connectDB=require("./config/db");
connectDB();
const app=express();
app.use(express.json());
app.use("/data/products",productRoutes);

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})