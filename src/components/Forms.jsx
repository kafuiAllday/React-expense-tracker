import React, { useState } from "react"
import Button from "./Button"

function Forms({handleAdd}) {
    const [cost, setCost] = useState(0)
    const [text, setText] = useState('')
    const [alert, setAlert] = useState('')
    const [btn_enable, setBtn_Enable] = useState(true)

    const handleCostChange=(e)=>{setCost(e.target.value)}
    const handleChange=(e)=>{
     if(text === ''){
      setAlert(null)
      setBtn_Enable(true)
      
     }else if(text !== '' && text.trim().length <= 1){
      setAlert('text should be more than 2 characters')
      setBtn_Enable(true)
     }
     else{
      setAlert('')
      setBtn_Enable(false)
     }
      setText(e.target.value)
      
    
    }

    const handleSubmit=(e)=>{
      e.preventDefault()
      if(text.trim().length >= 2){         
        const newItem = {
          cost:cost,
          text:text,
        }
        handleAdd(newItem)
        setText('')
        setCost(0)
      }
       
      }
      
      
      return (   
        <div>
    <form onSubmit={handleSubmit}>
      <div>
        
      </div>
        <input value={cost} placeholder='Cost in ghc'
        type='number' onChange={handleCostChange} />
      <input value={text}  
      placeholder='Expenditure'  type='text' 
      onChange={handleChange} />
      <Button type='submit' version={btn_enable ? 'unable' : 'able'}
      isdisabled={btn_enable}>Add +</Button>
    </form>
    <div className="alert">{alert}</div>
      </div>
    
    )
  }
  

export default Forms
