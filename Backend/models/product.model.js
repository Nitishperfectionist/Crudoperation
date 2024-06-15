import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"productName should be needed"]
    },
    description:{
        type:String,
        required:[true,"please add product description"]
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:[true,"please add price"],
        maxLength:[8,"price donot exceed 8 character"]
    },
},{timestamps:true})

const ProductModel=mongoose.model("Product",productSchema)

export default ProductModel;