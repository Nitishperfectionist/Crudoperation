import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Table = ({UpdateProduct,DeleteProduct}) => {
    const[data,setData]=useState([]);

    useEffect(()=>{
        async function fetchdata(){
     try
     {
        const fetchproduct=await axios.get("http://localhost:3000/api/product")
        const response=fetchproduct.data;
        console.log(response);
        setData(response);
    }
     catch(error){
        console.log(error);
     }
    }
      fetchdata();
    },[data])

    
  return (
    <>
            <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Product <b>Dashboard</b></h2>
                            </div>
                            <div className="col-sm-6">
                                <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addEmployeeModal" >
                                    <i className="material-icons">&#xE147;</i> <span>Add new Product</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                                <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                           
                        </thead>
                        <tbody>
                        {data.product?.map((elem,index)=>{
                            return(
                                <tr>
                                        <td></td>
                                        <td>{elem.image}</td>
                                        <td>{elem.title}</td>
                                        <td>{elem.description}</td>
                                        <td>{elem.price}</td>
                                        <td>
                                            <a href="#" className="edit cursor-pointer" data-bs-toggle="modal" data-bs-target="#editEmployeeModal" onClick={()=>UpdateProduct(elem._id)}>
                                                <i className="material-icons" data-bs-toggle="tooltip" title="Edit">&#xE254;</i>
                                            </a>
                                            <a href="#" className="delete cursor-pointer" data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal" onClick={()=>DeleteProduct(elem._id)}>
                                                <i className="material-icons" data-bs-toggle="tooltip" title="delete" >&#xE872;</i>
                                            </a>
                                            {/* <a className="delete" data-bas-toggle='modal' data-bs-target='#deleteEmployeeModal'><i className="material-icons" data-bs-toggle="tooltip" title="Delete">&#xE872;</i></a> */}
                                        </td>
                                    </tr>
                            )
                        })}
                            
                                   
                        </tbody>
                    </table>
                </div>
            </div >


        </>
  )
}

export default Table







