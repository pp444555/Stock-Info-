import React from 'react'

const UserForm=({handleFormChange,handleFormSubmit})=> {
  return (
    <>
    <center><h3 style={{margin:'35px 0px',marginTop:'90px'}}>Add User</h3></center>
    <div className="container my-5">
  <form onSubmit={handleFormSubmit}>
<div className="form-row">
<div className="form-group col-md-4">
  <label for="name">Name</label>
  <input type="text" className="form-control" name="name" id="name" placeholder="Enter name" onChange={handleFormChange} required/>
</div>
<div className="form-group col-md-4">
  <label for="email">Email</label>
  <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" onChange={handleFormChange} required/>
</div>
<div className="form-group col-md-4">
  <label for="number">Phone number</label>
  <input type="text" className="form-control" id="number" name="number" placeholder="Enter number" onChange={handleFormChange} required/>
</div>
</div>  
<div className="form-row">
<div className="form-group col-md-4">
  <label for="city">City</label>
  <input type="text" className="form-control" name="city" id="city" placeholder="Enter City" onChange={handleFormChange} required/>
</div>
<div className="form-group col-md-4">
  <label for="address">Address</label>
  <input type="text" className="form-control" id="address" name="address" placeholder="Enter address" onChange={handleFormChange} required/>
</div>
<div className="form-group col-md-4">
<label for="gender">Gender</label>
  <select id="gender" class="form-control" name="gender" id="gender" onChange={handleFormChange} required>
    <option selected>Choose...</option>
    <option>Male</option>
    <option>Female</option>
  </select>
</div>
</div>  
<div className="form-row">
<div className="form-group col-md-4">
<label for="type">Investor type</label>
  <select id="type" class="form-control" name="type" id="type" onChange={handleFormChange} required>
    <option selected>Choose...</option>
    <option>Retail</option>
    <option>Broker</option>
  </select>
</div>
<div className="form-group col-md-4">
<label for="type">Select Stock</label>
  <select id="stock" class="form-control" name="stock" id="stock" onChange={handleFormChange} required>
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
  <select id="quantity" class="form-control" name="quantity" id="quantity" onChange={handleFormChange} required>
    <option selected>Choose...</option>
    <option>15</option>
    <option>30</option>
    <option>45</option>
    <option>60</option>
    <option>75</option>
  </select>
</div>
</div>  
<center><button type="submit" class="btn btn-danger">Book Stock</button></center>
</form>
</div>
</>
  )
}

export default UserForm
