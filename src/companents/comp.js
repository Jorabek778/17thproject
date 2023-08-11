import React from "react"
import "./comp.css"
import ExpensData from "./ExpenseData"

const ExpensItem = (props)=>{
    return(
        <div className="comp-item">
            <div className="comp-item__price">
            <ExpensData vaqt={props}/>
            </div>
        
        <div className="comp-item__description">
           <h2>{props.name}</h2>
           <div className="comp-item__price">{props.price}$</div>
          
        </div>
        </div>
    )
}

export default ExpensItem