

function Stats({expenditure}) {
let Total_cost = expenditure.reduce((acc, cur) => {
    return acc + +cur.cost
},0)

  return (
        
    <div className="stats">
      <h3>{expenditure.length} items</h3>
      <h3>Total cost:  {Total_cost}ghc</h3>
    </div>
    
  )
}

export default Stats
