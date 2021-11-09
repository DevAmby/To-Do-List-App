import Task from "./Task"

const Tasks = ({tasks, onDelete, onToggle}) => {

    
    return (

        // parent of the Task.js details

        <div className = "tasks"> 
            {tasks.map((task) => (
            <Task 
                key = {task.id}  
                task = {task}
                onDelete = {onDelete}
                onToggle = {onToggle}
            /> 
            ))}
        </div>
    )
}

export default Tasks
