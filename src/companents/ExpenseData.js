import React from "react";
import './ExpenseData.css'

const ExpensData = (props) => {
    const month =props.vaqt.data.toLocaleString('en-US',{month:'long'})
    const Year =props.vaqt.data.getFullYear()
    const date = props.vaqt.data.getDate()
    return (
        <div>
            <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{Year}</div>
            <div className="expense-date__day">{date}</div>
        </div>
        </div>
        
    )
}

export default ExpensData;