
// import React, { useState, useEffect } from 'react';
// import Table from '../component/Table';
// import AddProduct from '../component/AddProduct';
// import UpdateProduct from '../component/UpdateProduct';
// import DeleteProduct from '../component/DeleteProduct';
// import axios from 'axios';
// import toast from 'react-hot-toast';

// const ProductTable = () => {
// const [products, setProducts] = useState([]);
// const [productId, setProductId] = useState();
// const [updateProductId, setUpdateProductId] = useState();
// const [value, setValue] = useState({
// image: "",
// title: "",
// description: "",
// price: ""
// });

// // Fetch products from the server
// const fetchProducts = async () => {
//     try {
//         const response = await axios.get('http://localhost:3000/api/products'); // Assuming you have this endpoint
//         setProducts(response.data.products);
//     } catch (error) {
//         console.log(error);
//     }
// };

// useEffect(() => {
//     fetchProducts();
// }, []);

// const deleteProduct = (productId) => {
//     setProductId(productId);
// };

// const handleProductDelete = async () => {
//     try {
//         const response = await axios.delete(`http://localhost:3000/api/delete/${productId}`);
//         if (response.data.success) {
//             toast.success(response.data.message);
//             fetchProducts(); // Refresh the product list
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };

// const handleChange = (e) => {
//     setValue({
//         ...value,
//         [e.target.name]: e.target.value
//     });
// };

// const updateProductData = (Updatedid) => {
//     const product = products.find(p => p.id === Updatedid);
//     if (product) {
//         setValue({
//             image: product.image,
//             title: product.title,
//             description: product.description,
//             price: product.price
//         });
//     }
//     setUpdateProductId(Updatedid);
// };

// const handleOnSubmit = async (e) => {
//     e.preventDefault();
//     try {
//         const response = await axios.put(`http://localhost:3000/api/update/${updateProductId}`, value);
//         if (response.data.success) {
//             toast.success(response.data.message);
//             fetchProducts(); // Refresh the product list
//             // Close the modal manually if needed
//             document.getElementById('editEmployeeModal').classList.remove('show');
//             document.querySelector('.modal-backdrop').remove();
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };

// return (
//     <>
//         <Table products={products} DeleteProduct={deleteProduct} UpdateProduct={updateProductData} />
//         <AddProduct fetchProducts={fetchProducts} />
//         <UpdateProduct handleOnSubmit={handleOnSubmit} value={value} handleChange={handleChange} />
//         <DeleteProduct handleProductDelete={handleProductDelete} />
//     </>
// );
// };

// export default ProductTable;


import React, { useState, useEffect } from 'react';
import Table from '../component/Table';
import AddProduct from '../component/AddProduct';
import UpdateProduct from '../component/UpdateProduct';
import DeleteProduct from '../component/DeleteProduct';
import axios from 'axios';
import toast from 'react-hot-toast';

const ProductTable = () => {
    const [products, setProducts] = useState([]);
    const [productId, setProductId] = useState();
    const [updateProductId, setUpdateProductId] = useState();
    const [value, setValue] = useState({
        image: "",
        title: "",
        description: "",
        price: ""
    });

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/products'); // Assuming you have this endpoint
            setProducts(response.data.products);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const deleteProduct = (productId) => {
        setProductId(productId);
    };

    const handleProductDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:3000/api/delete/${productId}`);
            if (response.data.success) {
                toast.success(response.data.message);
                fetchProducts(); // Refresh the product list
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    };

    const updateProductData = (Updatedid) => {
        const product = products.find(p => p.id === Updatedid);
        if (product) {
            setValue({
                image: product.image,
                title: product.title,
                description: product.description,
                price: product.price
            });
        }
        setUpdateProductId(Updatedid);
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/api/update/${updateProductId}`, value);
            if (response.data.success) {
                toast.success(response.data.message);
                fetchProducts(); // Refresh the product list
                // Close the modal manually if needed
                document.getElementById('editEmployeeModal').classList.remove('show');
                document.querySelector('.modal-backdrop').remove();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Table products={products} DeleteProduct={deleteProduct} UpdateProduct={updateProductData} />
            <AddProduct fetchProducts={fetchProducts} />
            <UpdateProduct handleOnSubmit={handleOnSubmit} value={value} handleChange={handleChange} />
            <DeleteProduct handleProductDelete={handleProductDelete} />
        </>
    );
};

export default ProductTable;

