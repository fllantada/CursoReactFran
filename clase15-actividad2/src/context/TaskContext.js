import { createContext, useState, useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import { getTasks, updateTask, createTask, deleteTask } from "../services/firebase/firestore/tasks";
import { getPriorities } from "../services/firebase/firestore/priorities";

import { useAuth } from "./AuthContext";

const TasksContext = createContext({ tasks: []})

export const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])
    const [priorities, setPriorities] = useState([])
    const [loading, setLoading] = useState(true)

    const { user } = useAuth()

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

    const createTaskAndRefresh = (newTask) => {
        const newTaskWithUser = {
            ...newTask,
            user: user.uid
        }

        return createTask(newTaskWithUser).then(snapshot => {
            return getTasks(user.uid)
        }).then(tasksUpdated => {
            setTasks(tasksUpdated)
            return true
        }).catch(error => {
            return error
        })
    }

    const deleteTaskAndRefresh = (taskId) => {
        return deleteTask(taskId).then(snapshot => {
            return getTasks(user.uid)
        }).then(tasksUpdated => {
            setTasks(tasksUpdated)
            return true
        }).catch(error => {
            return error
        })
    }

    return (
        <TasksContext.Provider value={{ loading, tasks, priorities, handleChangeTaskState, handleChangeTaskPriority, createTaskAndRefresh, deleteTaskAndRefresh}}>
            { children ? children : <Outlet /> }
        </TasksContext.Provider>
    )
}

export const useTasks = () => {
    return useContext(TasksContext)
}