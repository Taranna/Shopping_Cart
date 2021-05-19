const Product=require("../models/Product");
//,

const getProductList=async (req,res)=>{
    try{
        const products=await Product.find({ });
        res.json(products);
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}

const getProductDetails=async(req,res)=>{
    try{
const prod=await Product.findById(req.params.id);
res.json(prod);

    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});

    }
};
module.exports={
    getProductList,
    getProductDetails,
}