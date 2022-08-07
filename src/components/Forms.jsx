import React, { useState } from "react"

function Forms({handleAdd}) {
    const [cost, setCost] = useState(0)
    const [text, setText] = useState('')
    const [alert, setAlert] = useState('')
    const [btn_enable, setBtn_Enable] = useState('disabled')

    const handleCostChange=(e)=>{setCost(e.target.value)}
    const handleChange=(e)=>{
     if(text === ''){
      setAlert(null)
      
     }else if(text !== '' && text.trim().length < 3){
      setAlert('text should be more than 4 letters')
      setBtn_Enable('disabled')
     }
     else{
      setAlert('')
      setBtn_Enable(null)
     }
      setText(e.target.value)
      
    
    }

    const handleSubmit=(e)=>{
      e.preventDefault()
       
          
        const newItem = {
          cost:cost,
          text:text
        }
        
        handleAdd(newItem)
      }
      
      
      return (   
        <div>
    <form onSubmit={handleSubmit}>
    
        <input value={cost} placeholder='Cost in ghc'
        type='number' onChange={handleCostChange} />
      <input value={text}  
      placeholder='Expenditure'  type='text' 
      onChange={handleChange} />
      <button type='submit' disabled={btn_enable}>Send</button>
    </form>
    <div className="alert">{alert}</div>
      </div>
    
    )
  }
  

export default Forms
