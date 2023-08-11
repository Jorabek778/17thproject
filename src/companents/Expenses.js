import React, { useState } from 'react'
import ExpensItem from "./comp"
import Card from '../UI/Card'
import ExpensFilter from './ExpenseFilter/ExpensFilter'
import "./Expenses.css"


const Expenses = (props) => {
  const [year,setYear] = useState (
    props.data.filter((Elem)=>{
      return 2019 === Elem.data.getFullYear()
    })
  )
  const FilterArr = (item)=>{
    const FFF = props.data.filter((Elem)=>{
      return item === Elem.data.getFullYear()
    })

    setYear(FFF)
  }
  return (
    <Card className='expenses'>
      <ExpensFilter FilterF={FilterArr} />
      
            {year.length>0?year.map((item) => {
                return (
                   <ExpensItem 
                key={item.name+1}
                name={item.name} 
                data={item.data}
                 price={item.price}
                  />
                );
            }):<h1 style={{color:'white' , textAlign:'center'}}>Not Found</h1>}

       
    </Card>
  )
}

export default Expenses