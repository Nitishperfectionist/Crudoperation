import React from 'react'

const DeleteProduct = ({handleProductDelete}) => {
  return (
    <>
    <div id="deleteEmployeeModal" className="modal fade">
        <div className="modal-dialog">
            <div className="modal-content">
                <form>
                    <div className="modal-header">
                        <h4 className="modal-title">Delete Product</h4>
                        {/* <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button> */}
                    </div>
                    <div className="modal-body">
                        <p>Are you sure to delete this Product?</p>
                        <p className="text-warning"><small>This action cannot be undone.</small></p>
                    </div>
                    <div className="modal-footer">
                        <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                        <input type="button" className="btn btn-danger" value="Delete" data-bs-dismiss="modal" onClick={handleProductDelete} />
                    </div>
                </form>
            </div>
        </div>
    </div>


</>
  )
}

export default DeleteProduct