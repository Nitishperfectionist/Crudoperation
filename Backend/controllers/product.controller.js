import ProductModel from "../models/product.model.js"

//create product
const createProduct=async(req,res)=>{
   try{
    const{title,description,image,price}=req.body;
    const newProduct= new ProductModel({
        title,
        description,
        image,
        price
    })
 await newProduct.save();

 res.status(200).json({
    success:true,
    message:"product created successfully",
    newProduct

})
   }catch(error){
    console.log(error)
    res.status(500).json({
        success:false,
        message:"internal server error",
    })
   }
}

//read/get product
const getProduct=async(req,res)=>{

try{
    const product=await ProductModel.find();
    if(!product){
        return res.status(404).json({
            success:false,
            message:"product is not present",
    })
}
return res.status(200).json({
    success:true,
    message:"product is present",
    product
})
}
catch(error){
    console.log(error);
    res.status(500).json({
        success:false,
        message:"internal server error",
    })
}

}


// update product

const updateProduct=async(req,res)=>{
    try{
       const productId=req.params.id
        const product=await ProductModel.findByIdAndUpdate(productId,req.body,{
            new:true
        })
        if(!product){
            return res.status(404).json({
                success:false,
                message:"product is not present",
        })
        }
        return res.status(200).json({
            success:true,
            message:"product update successfully",
            product
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
        success:false,
        message:"internal server error",
    })
    }

}
export {createProduct,getProduct,updateProduct}