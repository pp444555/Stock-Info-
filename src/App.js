import './App.css';
import data from './data.json';
import {useState,Fragment} from "react";
import NavBar from './components/NavBar.js';
import {nanoid} from 'nanoid';
import ReadTable from './components/ReadTable.js';
import EditableForm from './components/EditableForm.js';
import UserForm from './components/UserForm.js';



const App=({stock})=> {

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
      quantity:editFormData.quantity,

    };

      const newStocks=[...stocks];

      const index=stocks.findIndex((stock)=> stock.id===editStockId);

      newStocks[index]=editedStock;

      setStocks(newStocks);
      setEditStockId(null);

      console.log(newStocks)
      
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
      <NavBar/>
      <Fragment>
      {editStockId===null?(<UserForm/>):null}
      </Fragment>
      {stocks.map((stock)=>( 
      <Fragment>
      {editStockId===stock.id?(<EditableForm editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={cancelClick}/>):null}
      </Fragment>
      ))}
        <div className="app-container my-3">
        <form onSubmit={handleEditFormSubmit}>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone number</th>
              <th>City</th>
              <th>Address</th>
              <th>Gender</th>
              <th>Investor Type</th>
              <th>Stock</th>  
              <th>Stock Quantity</th>
              <th>Actions</th>
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
  );
}

export default App;
