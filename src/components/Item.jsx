import React, { useState } from 'react' 
import  {BsFillTrashFill} from 'react-icons/bs'                   
import './component_css/item.css'


function Item({buy, handleDelete}) {
let today = new Date().getDate();
let month_names = ['January','February','March','April','May','June','July','August','September','October','November','December']
let d = new Date().getMonth();

let month = month_names[d]

let year = new Date().getFullYear()

    
      
  return (
    <div>
      
      <div className='card'>
        <div>
        <h3>{buy.text}</h3>
      <p>{month} {today},{year}</p>
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
