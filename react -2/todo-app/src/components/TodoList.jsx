import {TodoCard} from "./TodoCard.jsx";

export function TodoList(props){
    const {todos} = props
    const filterTodoList = tab === "All" ? todos : tab === 'completed' ?todos.filter(val => val.complete)
    : todos.filter(val => !val.completed )
    const tab ='All'
    return (
        <>
            {todos.map((todo,todoIndex)=>{
                return (
                    <TodoCard  key={todoIndex} todoIndex={todoIndex} {...props}/>
                )
            })}
        </>
    )
} //1:10