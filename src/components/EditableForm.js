import React from 'react';
import {Fragment} from 'react';

const EditableForm=({editFormData,handleEditFormChange,handleEditFormSubmit,handleCancelClick})=> {
  return (
    <Fragment>
    <center><h3 className="my-4">Update User</h3></center>
    <div className="container my-3">
  <form onSubmit={handleEditFormSubmit}>
<div className="form-row">
<div className="form-group col-md-4">
  <label for="name">Name</label>
  <input type="text" className="form-control" name="name" id="name" placeholder="Enter name" value={editFormData.name} onChange={handleEditFormChange} required/>
</div>
<div className="form-group col-md-4">
  <label for="email">Email</label>
  <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" value={editFormData.email} onChange={handleEditFormChange} required/>
</div>
<div className="form-group col-md-4">
  <label for="number">Phone number</label>
  <input type="text" className="form-control" id="number" name="number" placeholder="Enter number" value={editFormData.number} onChange={handleEditFormChange} required/>
</div>
</div>  
<div className="form-row">
<div className="form-group col-md-4">
  <label for="city">City</label>
  <input type="text" className="form-control" name="city" id="city" placeholder="Enter City" value={editFormData.city} onChange={handleEditFormChange} required/>
</div>
<div className="form-group col-md-4">
  <label for="address">Address</label>
  <input type="text" className="form-control" id="address" name="address" placeholder="Enter address" value={editFormData.address} onChange={handleEditFormChange} required/>
</div>
<div className="form-group col-md-4">
<label for="gender">Gender</label>
  <select id="gender" class="form-control" name="gender" id="gender" value={editFormData.gender} onChange={handleEditFormChange} required>
    <option selected>Choose...</option>
    <option>Male</option>
    <option>Female</option>
  </select>
</div>
</div>  
<div className="form-row">
<div className="form-group col-md-4">
<label for="type">Investor type</label>
  <select id="type" class="form-control" name="type" id="type" value={editFormData.type} onChange={handleEditFormChange} required>
    <option selected>Choose...</option>
    <option>Retail</option>
    <option>Broker</option>
  </select>
</div>
<div className="form-group col-md-4">
<label for="type">Select Stock</label>
  <select id="stock" class="form-control" name="stock" id="stock" value={editFormData.stock} onChange={handleEditFormChange} required>
    <option selected>Choose...</option>
    <option>Tata Power</option>
    <option>Adani Power</option>
    <option>Adani Gas LTD</option>
    <option>Tata Motors</option>
    <option>Reliance Industries LTD</option>
  </select>
</div>
<div className="form-group col-md-4">
<label for="quantity">Stock Quantity</label>
  <select id="quantity" class="form-control" name="quantity" id="quantity" value={editFormData.quantity } onChange={handleEditFormChange} required>
    <option selected>Choose...</option>
    <option>15</option>
    <option>30</option>
    <option>45</option>
    <option>60</option>
    <option>75</option>
  </select>
</div>
</div>  
<div>
<center><button type="submit" class="btn btn-danger my-2" >Update Book Stock</button></center>
<center><button type="submit" class="btn btn-danger" onClick={handleCancelClick}>Cancel Book Stock</button></center>
</div>
</form>
</div>
</Fragment>
  )
}

export default EditableForm
