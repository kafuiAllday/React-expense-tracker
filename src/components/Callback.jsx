import { useState } from "react"


function Callback({getUicolor}) {
    const [activeui, setActiveui] = useState('')

    const handleChange=(e)=>{
        setActiveui(e.target.value)
        getUicolor(e.target.value)
    }
    
  return (
    <div>
      <input type='text' 
      placeholder='ui color' value={activeui}
      onChange={handleChange} />
    </div>
  )
}

export default Callback

