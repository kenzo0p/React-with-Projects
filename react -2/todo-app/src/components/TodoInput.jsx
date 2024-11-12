import React ,{useState} from "react";
export function TodoInput({handleAddTodo}){
    const [inputValue , setInputValue] = useState('')
    return (
       <div className='input-container'>
           <input value={inputValue} onChange={(e)=> setInputValue(e.target.value)} placeholder='Add Task'/>
           <button onClick={()=> {
               if(!inputValue) {
                   return
               }
               handleAddTodo(inputValue)
               setInputValue('')
           }}>
               <i className='fa-soild fa-plus'></i>
           </button>
       </div>
    )
}