import React, { useState } from 'react'
import Expensform from './Expensform'
import "./NewExpens.css"

const NewExpens = (props) => {
  const[shown , setShown] = useState(false)
  function ShownExpens() {
   setShown(!shown)
  }
  const Malumot = (item)=>{
   const data = {
    ...item,
    id:item.name+1
   }
   props.FuncArr(data)
  }
  return (
    <div className='new-expense'>
       {shown?<Expensform Fun={Malumot} close={ShownExpens} />:<button onClick={ShownExpens}>Add Expense</button>}
    </div>
  )
}

export default NewExpens