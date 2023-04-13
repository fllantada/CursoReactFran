import { useState, useEffect } from 'react'

import TaskList from '../TaskList/TaskList'
import { getTasks } from '../../asyncMock'

const TaskListContainer = () => {
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getTasks()
            .then(tasks => {
                setTasks(tasks)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
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

    
    const handleChangeTaskPriority = (id, value) => {
        const updatedTasks = tasks.map(task => {
            if(task.id === id) {
                return { ...task, priority: value } 
            } else {
                return task
            }
        })

        setTasks(updatedTasks)
    }

    if(loading) {
        return (
            <main>
                <h1>Cargando tareas...</h1>
            </main>
        )
    }

    return (
        <main>
            <h1>Lista de tareas</h1>
            <TaskList {...{tasks, handleChangeTaskState, handleChangeTaskPriority}} />
        </main>
    )
}

export default TaskListContainer