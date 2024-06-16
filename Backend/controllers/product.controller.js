import ProductModel from "../models/product.model.js"

//create product
const createProduct = async (req, res) => {
    try {
        const { title, description, image, price } = req.body;

        // Check if any field is missing or empty
        if (!title || !description || !image || !price) {
            return res.status(400).json({
                success: false,
                message: "All fields (title, description, image, price) are required to create a product",
            });
        }

        const newProduct = new ProductModel({
            title,
            description,
            image,
            price
        });

        await newProduct.save();

        res.status(200).json({
            success: true,
            message: "Product created successfully",
            newProduct
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};


//read/get product
const getProduct=async(req,res)=>{

try{
    const product=await ProductModel.find();
    if(!product){
        return res.status(404).json({
            success:false,
            message:"product not found",
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

// const updateProduct = async (req, res) => {
//     try {
//         const productId = req.params.id;

//         // Check if the request body is empty
//         if (Object.keys(req.body).length === 0) {
//             return res.status(400).json({
//                 success: false,
//                 message: "At least one field is required to update the product",
//             });
//         }

//         const product = await ProductModel.findByIdAndUpdate(productId, req.body, {
//             new: true,
//             runValidators: true, // Ensure validators run on update
//         });

//         if (!product) {
//             return res.status(404).json({
//                 success: false,
//                 message: "Product not found",
//             });
//         }

//         return res.status(200).json({
//             success: true,
//             message: "Product updated successfully",
//             product,
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             success: false,
//             message: "Internal server error",
//         });
//     }
// };
const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const { title, description, image, price } = req.body;

        // Check if at least one field is provided
        if (!title && !description && !image && !price) {
            return res.status(400).json({
                success: false,
                message: "At least one field (title, description, image, price) is required to update a product",
            });
        }

        const product = await ProductModel.findByIdAndUpdate(productId, req.body, { new: true });
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Product updated successfully",
            product
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};


//delete product
const deleteProduct=async(req,res)=>{
    try{
        const productId=req.params.id
        const product=await ProductModel.findByIdAndDelete(productId)

        if(!product){
            return res.status(404).json({
                success:false,
                message:"product not found",
        })
        }
        return res.status(200).json({
            success:true,
            message:"product deleted successfully",
        })
        
    }catch(error){
        console.log(error);
        res.status(500).json({
        success:false,
        message:"internal server error",
    })
    }
    
}
export {createProduct,getProduct,updateProduct,deleteProduct}