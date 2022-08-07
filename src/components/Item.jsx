import React, { useState } from 'react' 
import  {BsFillTrashFill} from 'react-icons/bs'                   
import './component_css/item.css'


function Item({buy, handleDelete}) {
let today = new Date().getDate()
let month = new Date().getMonth()+1
let year = new Date().getFullYear()

    
      
  return (
    <div>
      
      <div className='card'>
        <div>
        <h3>{buy.text}</h3>
      <p>{today}/{month}/{year}</p>
        </div>
        
        <h4>{buy.cost}</h4>
        <button onClick={()=>handleDelete(buy.id)}>
          <BsFillTrashFill/>
          </button>
      
      </div>
    </div>
  )
}

export default Item
