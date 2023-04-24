import styles from './Task.module.css'

import Button from '../Button/Button'

const Task = ({ id, text, completed, priority, handleChangeTaskState, handleChangeTaskPriority }) => {
    const options = [
        { id: '1', text: 'Baja', value: 1 },
        { id: '2', text: 'Media', value: 2 },
        { id: '3', text: 'Alta', value: 3 }
    ] 

    return (
        <article
            className={styles.task}
        >
            <h3>{text}</h3>
            <select
                onChange={(e) => handleChangeTaskPriority(id, e.target.value)}
                value={priority}
            >
                {options.map(option => <option key={option.id} value={option.value}>{option.text}</option>)}
            </select>
            <Button
                color={completed ? 'green' : 'red'}
                callback={() => handleChangeTaskState(id)}
            >
                {completed ? 'Completa' : 'Incompleta'}
            </Button>
        </article>
    )
}

export default Task