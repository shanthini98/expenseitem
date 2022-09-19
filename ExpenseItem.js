import React from 'react';

import './ExpenseItem.css';
//import ExpenseDate from './ExpenseDate';
export default function ExpenseItem(props) { 
 
  return (
    <div>
      {props.expenses.map((items,index)=>{
      
        <div className='expense-item' >
         <div>{items.date.toLocaleString()} key={index}</div>
        <div className="expense-item__description">
        <h2 className="expenses">{items.title} key={index}</h2>
        <div className="expense-item__price">${items.amount} key={index}</div>
        </div>
       </div>
       
      })}
     
     
    </div>

  );
  }
