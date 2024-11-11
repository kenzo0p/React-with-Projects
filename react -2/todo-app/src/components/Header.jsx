export function Header(props){
    const {todos} = props
    const todosLength = todos.length
    const isPluraltask = todos.length != 1
    const tasOrTasks = isPluraltask ? 'tasks' : 'task'
    return (
        <header>
            <h1 className='text-gradient'>You have {todosLength} open {tasOrTasks}.</h1>
        </header>
    )
}