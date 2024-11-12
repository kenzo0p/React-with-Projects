import {TodoCard} from "./TodoCard.jsx";
import React from 'react'
export function TodoList(props){
    const {todos,selectedTab} = props
    const filterTodoList = selectedTab === "All" ? todos : selectedTab === 'complete' ?todos.filter(val => val.complete)
    : todos.filter(val => !val.complete )
    return (
        <>
            {filterTodoList.map((todo,todoIndex)=>{
                return (
                    <TodoCard  key={todoIndex} todoIndex={todoIndex}
                               {...props} todo={todo}/>
                )
            })}
        </>
    )
}