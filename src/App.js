import { useEffect, useState } from 'react'
import Forms from './components/Forms';
import ItemList from './components/ItemList'
import Stats from './components/Stats';
import { v4 as uuidv4} from 'uuid'


function App() {
  
  const [expenditure, setExpenditure] = useState([])
  

 useEffect(() => {
  fetchExpenditure()
 },[])

 const fetchExpenditure =async()=>{
  const response = await fetch('http://localhost:5000/expenditure')
 const data = await response.json()
  setExpenditure(data)
 }

  const Additem=async(newItem)=>{
    const response = await fetch('http://localhost:5000/expenditure',{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(newItem)
    })
    const data = await response.json() 
    
    setExpenditure([data, ...expenditure])
    
  }
const deleteItem=async(id)=>{
   await fetch(`http://localhost:5000/expenditure/${id}`,{
    method:'DELETE'
  })
  setExpenditure(expenditure.filter((buy) => buy.id !==id))
}

  return (
    <div>
      
      <Forms handleAdd={Additem}/> 
      <Stats expenditure={expenditure}/>
      <ItemList expenditure={expenditure} handleDelete={deleteItem}/>
    </div>
  )
}

export default App;
