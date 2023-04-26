import { createContext, useState, useEffect } from "react";
import { getTasks, updateTask } from "../services/firebase/firestore/tasks";
import { getPriorities } from "../services/firebase/firestore/priorities";

export const TasksContext = createContext({ tasks: []})

export const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])
    const [priorities, setPriorities] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        const queries = [
            getTasks(),
            getPriorities()
        ]

        Promise.all(queries)
            .then(([tasks, priorities]) => {
                setTasks(tasks)
                setPriorities(priorities)
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
                updateTask(task.id, { completed: !task.completed })
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

    return (
        <TasksContext.Provider value={{ loading, tasks, priorities, handleChangeTaskState, handleChangeTaskPriority}}>
            { children }
        </TasksContext.Provider>
    )
}