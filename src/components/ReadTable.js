import React from 'react'

const ReadTable=({stock,handleEditClick,handleDeleteClick})=>{
  return (
    <tr>
              <td>{stock.name}</td>
              <td>{stock.email}</td>
              <td>{stock.number}</td>
              <td>{stock.city}</td>
              <td>{stock.address}</td>
              <td>{stock.gender}</td>
              <td>{stock.type}</td>
              <td>{stock.stock}</td>
              <td>{stock.quantity}</td>
              <td>
              <button type="submit" class="btn btn-primary mx-2" onClick={(event)=>handleEditClick(event,stock)}>Edit</button>
              <button type="submit" class="btn btn-danger" onClick={()=>handleDeleteClick(stock.id)}>Delete</button>
              </td>
            </tr>
  )
}

export default ReadTable
