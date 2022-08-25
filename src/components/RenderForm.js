import '../App.css';
import data from '../data.json';
import {useState,Fragment} from "react";
import NavBar from './NavBar.js';
import {nanoid} from 'nanoid';
import ReadTable from './ReadTable.js';
import EditableForm from './EditableForm.js';
import UserForm from './UserForm.js';
import MultiSelect from './MultiSelect.js';

function RenderForm({stock}) {
  const[stocks,setStocks]=useState(data);
  const[addFormData,setAddFormData]=useState({
    name:'',
    email:'',
    number:'',
    city:'',
    address:'',
    gender:'',
    type:'',
    stock:'',
    quantity:'',
    
  });
  console.log(stocks);

  const[editFormData,setEditFormData]=useState({
    name:'',
    email:'',
    number:'',
    city:'',
    address:'',
    gender:'',
    type:'',
    stock:'',
    quantity:'',
  });



  const [editStockId,setEditStockId]=useState(null);

  const handleFormChange=(event)=>{
    event.preventDefault();

    const fieldName=event.target.getAttribute('name');
    const fieldValue=event.target.value;

    const newFormData={...addFormData};
    newFormData[fieldName]=fieldValue;

    setAddFormData(newFormData);
    console.log(newFormData);

  };

  const handleEditFormChange=(event)=>{
    event.preventDefault();

    const fieldName=event.target.getAttribute('name');
    const fieldValue=event.target.value;

    const newFormData={...editFormData};
    newFormData[fieldName]=fieldValue;

    setEditFormData(newFormData)

    console.log(newFormData)
  }

  const handleFormSubmit=(event)=>{
    event.preventDefault();
    event.target.reset();

    const newStock={
      id:nanoid(),
      name:addFormData.name,
      email:addFormData.email,
      number:addFormData.number,
      address:addFormData.address,
      city:addFormData.city,  
      gender:addFormData.gender,
      type:addFormData.type,
      stock:addFormData.stock,
      quantity:addFormData.quantity
    };

    const newStocks=[...stocks,newStock];
    setStocks(newStocks);
    // alert('clicked');
    // console.log("hello");

  };

  const handleEditFormSubmit=(event)=>{
    event.preventDefault();
    event.target.reset();

    const editedStock={
      id:editStockId,
      name:editFormData.name,
      email:editFormData.email,
      number:editFormData.number,
      address:editFormData.address,
      city:editFormData.city,
      gender:editFormData.gender,
      type:editFormData.type,
      stock:editFormData.stock,
      quantity:editFormData.quantity,

    };

      const newStocks=[...stocks];

      const index=stocks.findIndex((stock)=> stock.id===editStockId);

      newStocks[index]=editedStock;

      setStocks(newStocks);
      setEditStockId(null);

      // alert("clicked")
      

      // console.log(newStocks)
      
    };


  const handleEditClick=(event,stock)=>{
    event.preventDefault();
    setEditStockId(stock.id);

    const formValues={
      name:stock.name,
      email:stock.email,
      number:stock.number,
      city:stock.city,
      address:stock.address,
      gender:stock.gender,
      type:stock.type,
      stock:stock.stock,
      quantity:stock.quantity,

    }

    setEditFormData(formValues);
    console.log(formValues)

  }

  const cancelClick=()=>{
    setEditStockId(null);
  }

  const handleDeleteClick=(stockId)=>{
    const newStocks=[...stocks];

    const index=stocks.findIndex((stock)=>stock.id===stockId);

    newStocks.splice(index,1);

    setStocks(newStocks);
  }

  return (
    <div>
       <Fragment>
       {editStockId===null?(<UserForm handleFormSubmit={handleFormSubmit} handleFormChange={handleFormChange}/>):null}
      </Fragment>
      {stocks.map((stock)=>( 
      <Fragment>
      {editStockId===stock.id?(<EditableForm editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={cancelClick} handleEditFormSubmit={handleEditFormSubmit}/>):null}
      </Fragment>
      ))}
        <div className="app-container my-3">
        <form onSubmit={handleEditFormSubmit}>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th className="text-center">Name</th>
              <th className="text-center">Email</th>
              <th className="text-center">Phone number</th>
              <th className="text-center">City</th>
              <th className="text-center">Address</th>
              <th className="text-center">Gender</th>
              <th className="text-center">Investor Type</th>
              <th className="text-center">Stock</th>  
              <th className="text-center">Stock Quantity</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock)=>(
              <ReadTable stock={stock} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>
            ))}
          </tbody>
      </table>
      </form>
      </div>
    </div>
  )
}

export default RenderForm
