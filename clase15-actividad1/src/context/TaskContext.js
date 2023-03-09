import { createContext, useState, useEffect, useContext } from "react";
import { getTasks, updateTask } from "../services/firebase/firestore/tasks";
import { getPriorities } from "../services/firebase/firestore/priorities";

import { AuthContext } from "./AuthContext";

export const TasksContext = createContext({ tasks: []})

export const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])
    const [priorities, setPriorities] = useState([])
    const [loading, setLoading] = useState(true)

    const { user } = useContext(AuthContext)

    useEffect(() => {
        setLoading(true)

        const queries = [
            getTasks(user.uid),
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
    }, [user.uid])

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
                updateTask(task.id, { priority: value })
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