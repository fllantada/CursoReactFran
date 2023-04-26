import styles from './Task.module.css'
import { useState } from 'react'
import { useTasks } from '../../context/TaskContext'
import Button from '../Button/Button'
import Select from '../Select/Select'

const Task = ({ id, text, completed, priority }) => {
    const [loading, setLoading] = useState(false)
    const { priorities, handleChangeTaskState,  handleChangeTaskPriority, deleteTaskAndRefresh } = useTasks()

    const handleOnSelect = (value) => {
        handleChangeTaskPriority(id, value)
    }

    const handleOnDelete = () => {
        setLoading(true)

        deleteTaskAndRefresh(id)
            .catch(error => console.error(error))
            .finally(() => {
                setLoading(false)
            })
    }

    if(loading) {
        return (
            <article
                className={styles.task}
            >
                <h3>Eliminando...</h3>
            </article>
        )
    }

    return (
        <article
            className={styles.task}
        >
            <h3 className={styles.text}>{text}</h3>
            { priorities && <Select options={priorities} defaultValue={priority} onSelect={handleOnSelect}/> }
            <Button
                color={completed ? 'green' : 'red'}
                callback={() => handleChangeTaskState(id)}
            >
                {completed ? 'Completa' : 'Incompleta'}
            </Button>
            <Button
                color='red'
                callback={handleOnDelete}
            >
                X
            </Button>
        </article>
    )
}

export default Task