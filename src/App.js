import { useState } from 'react';
import Button from './components/Button';
import Forms from './components/Forms';
import ItemList from './components/ItemList'
import Stats from './components/Stats';


function App() {
  const [expenditure, setExpenditure] = useState([
    {
      id:1,
      cost:150,
      text:'Food'
    },
    {
      id:2,
      cost:200,
      text:'clothing'
    },
    {
      id:3,
      cost:150,
      text:'rent'
    }
  ])  


  const Additem=(newItem)=>{
    setExpenditure([newItem, ...expenditure])
  }
const deleteItem=(id)=>{
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