
import React from 'react';

const UpdateProduct = ({ handleOnSubmit, value, handleChange }) => {
    return (
        <div className="modal fade" id="editEmployeeModal" tabIndex="-1" aria-labelledby="editEmployeeModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editEmployeeModalLabel">Update Product form</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleOnSubmit}>
                            <div className="mb-3">
                                <label htmlFor="editImage" className="form-label">Image</label>
                                <input type="text" className="form-control" id="editImage" name="image" value={value.image} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="editTitle" className="form-label">Title</label>
                                <input type="text" className="form-control" id="editTitle" name="title" value={value.title} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="editDescription" className="form-label">Description</label>
                                <input type="text" className="form-control" id="editDescription" name="description" value={value.description} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="editPrice" className="form-label">Price</label>
                                <input type="number" className="form-control" id="editPrice" name="price" value={value.price} onChange={handleChange} />
                            </div>
                            <button type="submit" className="btn btn-primary">update product</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;




  
