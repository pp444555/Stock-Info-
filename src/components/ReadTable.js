import React from 'react'

const ReadTable=({stock,handleEditClick,handleDeleteClick})=>{
  return (
    <tr>
              <td className="text-center">{stock.name}</td>
              <td className="text-center">{stock.email}</td>
              <td className="text-center">{stock.number}</td>
              <td className="text-center">{stock.city}</td>
              <td className="text-center">{stock.address}</td>
              <td className="text-center">{stock.gender}</td>
              <td className="text-center">{stock.type}</td>
              <td className="text-center">{stock.stock}</td>
              <td className="text-center">{stock.quantity}</td>
              <td className="text-center">
              <button type="submit" class="btn btn-primary mx-2" onClick={(event)=>handleEditClick(event,stock)}>Edit</button>
              <button type="submit" class="btn btn-danger" onClick={()=>handleDeleteClick(stock.id)}>Delete</button>
              </td>
            </tr>
  )
}

export default ReadTable
