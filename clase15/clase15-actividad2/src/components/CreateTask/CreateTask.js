import  { useState } from 'react'
import { useTasks } from "../../context/TaskContext"
import { useNavigate } from 'react-router-dom'

import CreateTaskForm from '../CreateTaskForm/CreateTaskForm'

const CreateTask = () => {
    const [loading, setLoading] = useState(false)

    const { createTaskAndRefresh } = useTasks()

    const navigate = useNavigate()

    const handleCreateTask = (newTask) => {
        setLoading(true)

        createTaskAndRefresh(newTask).then(() => {
            navigate('/tasks')
        }).catch(error => {
            console.error(error)
        }).finally(() => {
            setLoading(false)
        })
    }

    if(loading) {
        return (
            <main>
                <h1>Creando nueva tarea...</h1>
            </main>
        )
    }

    return (
        <main>
            <h1>Crea una nueva tarea:</h1>
            <CreateTaskForm onCreate={handleCreateTask}/>
        </main>
    )
}

export default CreateTask