import Item from "./Item"

function ItemList({expenditure,handleDelete}) {
  return (
    <div>
      {expenditure.map((buy,index) =>
      <Item key={index}  buy={buy} handleDelete={handleDelete} />)}
    </div>
  )
}



export default ItemList
