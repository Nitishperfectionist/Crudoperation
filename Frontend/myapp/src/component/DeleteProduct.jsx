

import React from 'react';

const DeleteProduct = ({ handleProductDelete }) => {
    return (
        <>
            <div id="deleteEmployeeModal" className="modal fade" tabIndex="-1" aria-labelledby="deleteEmployeeModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Delete Product</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete this product?</p>
                                <p className="text-warning"><small>This action cannot be undone.</small></p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-danger" onClick={handleProductDelete}>Delete</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteProduct;
