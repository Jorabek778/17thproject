import React, {useState} from 'react'
import "./Expensform.css"

const Expensform = (props) => {
   const [title , setTitle] = useState('')
   const [amount , setAmount] = useState('')
   const [date , setDate] = useState('')
   
   function TitleValue(e){
    setTitle(e.target.value)
   }

   function AmountValue(e){
    setAmount(e.target.value)
   }

   function DateValue(e){
    setDate(e.target.value)
   }
  

   function SubmitExpens(e){
    e.preventDefault()
    if( !(title.trim().length>0 && amount.trim().length>0 && date.trim().length>0)){
      return
     }
   
    const data = {
      name:title,
      data: new Date(date),
      price:+amount

    }
    setTitle('')
    setAmount('')
    setDate('')
    props.Fun(data)
    e.target.reset()
   }

  return (
    <form onSubmit={SubmitExpens} className='new-expense__controls'>
      <div className='new-expense__control'>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' placeholder='title' onChange={TitleValue}></input>
      </div>
      <div className='new-expense__control'>
        <label htmlFor='amount'>Title</label>
        <input  type='number' id='amount' placeholder='title' onChange={AmountValue}></input>
      </div>
      <div className='new-expense__control'>
        <label htmlFor='date'>Title</label>
        <input onChange={DateValue} type='date' id='date'></input>
      </div>
      <div style={{width:'100%' , textAlign:'right'}} className='new-expense__control'>
        <button onClick={props.close}>Close</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default Expensform