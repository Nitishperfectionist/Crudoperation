

// const UpdateProduct = ({handleOnSubmit,value,handlechange}) => {
   
//   return (
//     <>
//     <div id="editEmployeeModal" className="modal fade">
//         <div className="modal-dialog">
//             <div className="modal-content">
//                 <form onSubmit={handleOnSubmit}>
//                     <div className="modal-header">
//                         <h4 className="modal-title">Update Product</h4>
//                         <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
//                     </div>
//                     <div className="modal-body">
//                         <div className="form-group">
//                             <label>Image</label>
//                             <input type="text" name='image' value={value.image} onChange={handlechange} className="form-control" />
//                         </div>
//                         <div className="form-group">
//                             <label>Title</label>
//                             <input type="text" name='title' value={value.title}  onChange={handlechange} className="form-control" />
//                         </div>
//                         <div className="form-group">
//                             <label>Description</label>
//                             <input type="text" name='description' value={value.description}  onChange={handlechange} className="form-control" />

//                         </div>
//                         <div className="form-group">
//                             <label>Price</label>

//                             <input type="text" name='price' value={value.price}  onChange={handlechange} className="form-control" />
//                         </div>
//                     </div>
//                     <div className="modal-footer">
//                         <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
//                         <input type="submit" className="btn btn-primary" value="Update" data-bs-dismiss="modal" />
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>



// </>
//   )
// }

// export default UpdateProduct


const UpdateProduct = ({ handleOnSubmit, value, handleChange }) => {
    return (
      <div id="editEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleOnSubmit}>
              <div className="modal-header">
                <h4 className="modal-title">Update Product</h4>
                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Image</label>
                  <input type="text" name='image' value={value.image} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                  <label>Title</label>
                  <input type="text" name='title' value={value.title} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <input type="text" name='description' value={value.description} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                  <label>Price</label>
                  <input type="text" name='price' value={value.price} onChange={handleChange} className="form-control" />
                </div>
              </div>
              <div className="modal-footer">
                <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                <input type="submit" className="btn btn-primary" value="Update" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default UpdateProduct;

// UpdateProduct.jsx





  
