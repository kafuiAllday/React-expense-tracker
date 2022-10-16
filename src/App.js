import { useEffect, useState } from 'react'
import Forms from './components/Forms';
import ItemList from './components/ItemList'
import Stats from './components/Stats';
import { v4 as uuidv4} from 'uuid'
import Header from './components/Header';


function App() {
  
  const [expenditure, setExpenditure] = useState(JSON.parse(localStorage.getItem('expenditure')) || [])
    
  
useEffect(()=> {
  localStorage.setItem('expenditure',JSON.stringify(expenditure))

},[expenditure])
const Additem=(newItem)=>{
  newItem.id=uuidv4()
  setExpenditure([newItem, ...expenditure])

}
const deleteItem=(id)=>{
  
  setExpenditure(expenditure.filter(buy => buy.id !== id))
}


  return (
    <div>
      <Header />
      <Forms handleAdd={Additem}/> 
      <Stats expenditure={expenditure}/>
      <ItemList expenditure={expenditure} handleDelete={deleteItem}/>
    </div>
  )
}

export default App;

