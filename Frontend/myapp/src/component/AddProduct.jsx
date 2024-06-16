
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';

const AddProduct = () => {
    const [value, setValue] = useState({
        image: '',
        title: '',
        description: '',
        price: ''
    });

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if any field is empty
        const { image, title, description, price } = value;
        if (!image || !title || !description || !price) {
            toast.error("All fields (image, title, description, price) are required to create a product", { duration: 1000 });
            return;
        }

        try {
            const addProduct = await axios.post("http://localhost:3000/api/create", value);
            const response = addProduct.data;
            if (response.success) {
                toast.success(response.message, { duration: 1000 });
                // Clear form fields
                setValue({
                    image: '',
                    title: '',
                    description: '',
                    price: ''
                });
                // Close the modal manually after a delay
                setTimeout(() => {
                    document.getElementById('addEmployeeModal').classList.remove('show');
                    document.querySelector('.modal-backdrop').remove();
                }, 1000);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Add Product</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Image</label>
                                    <input type="text" name='image' value={value.image} onChange={handleChange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Title</label>
                                    <input type="text" name='title' value={value.title} onChange={handleChange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <input type="text" name='description' value={value.description} onChange={handleChange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Price</label>
                                    <input type="text" name='price' value={value.price} onChange={handleChange} className="form-control" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-primary" value="Add" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddProduct;
