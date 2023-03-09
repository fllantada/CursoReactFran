import styles from './CreateTaskForm.module.css'

import { useState } from 'react'
import { useTasks } from '../../context/TaskContext'

import Select from '../Select/Select'
import Button from '../Button/Button'

const CreateTaskForm = ({ onCreate }) => {
    const INITIAL_STATE = { text: '', priority: 1 }
    const [newTaskData, setNewTaskData] = useState(INITIAL_STATE)

    const { priorities } = useTasks()

    const handleSubmit = (e) => {
        e.preventDefault()
        onCreate(newTaskData)
        setNewTaskData(INITIAL_STATE)
    }
    
    const handleOnSelect = (value) => {
        setNewTaskData(prev => ({ ...prev, priority: value}))
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formItem}>
            <label className={styles.formLabel}>Tarea: </label>
            <textarea className={styles.formInput} value={newTaskData.text} onChange={(e) => setNewTaskData(prev => ({ ...prev, text: e.target.value}))} required />
        </div>
        <div className={styles.formItem}>
            <label className={styles.formLabel}>Prioridad: </label>
            <Select options={priorities} defaultValue={newTaskData.priority} onSelect={handleOnSelect}/>
        </div>

        <div>
            <div className={styles.formAction}>
                <Button color='green'>Crear Tarea</Button>
            </div>
        </div>
    </form>
    )
}

export default CreateTaskForm