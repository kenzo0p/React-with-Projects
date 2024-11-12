export function Tabs(props){
    const { todos ,setSelectedTabs,selectedTabs } =props
    const tabs = ['All' ,'Open' ,'Completed']
    return (
        <nav className='tab-container'>
            {tabs.map((tab ,tabIndex)=>{
                const numOfTasks = tab ==='All' ? todos.length : tab === 'Open' ? todos.filter((val)=> !val.complete).length : todos.filter((val)=>val.complete).length
                return (
                    <button onClick={()=>setSelectedTabs(tab)} key={tabIndex} className={'tab-button ' + (tab === selectedTabs ? 'tab-selected': '')}><h4>{tab}<span>({numOfTasks})</span></h4></button>
                )
            })}
            <hr/>
        </nav>
    )
}