import { useState, useEffect } from 'react'

import TaskList from '../TaskList/TaskList'
import { getTasks } from '../../asyncMock'

const TaskListContainer = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        getTasks()
            .then(tasks => {
                setTasks(tasks)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

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