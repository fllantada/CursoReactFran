import { useState } from 'react'

import TaskList from '../TaskList/TaskList'

const TaskListContainer = () => {
    const [tasks, setTasks] = useState([
        { id: '1', text: 'Hacer la tarea 1', completed: false},
        { id: '2', text: 'Hacer la tarea 2', completed: false},
        { id: '3', text: 'Hacer la tarea 3', completed: false}
    ])

    const handleChangeTaskState = (id) => {
        const updatedTasks = tasks.map(task => {
            if(task.id === id) {
                return { ...task, completed: !task.completed } 
            } else {
                return task
            }
        })

        setTasks(updatedTasks)
    }

    return (
        <main>
            <h1>Lista de tareas</h1>
            <TaskList {...{tasks, handleChangeTaskState}} />
        </main>
    )
}

export default TaskListContainer