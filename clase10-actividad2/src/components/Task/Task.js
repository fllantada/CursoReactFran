import styles from './Task.module.css'

import Button from '../Button/Button'
import Select from '../Select/Select'

const Task = ({ id, text, completed, priority, handleChangeTaskState, handleChangeTaskPriority }) => {
    const options = [
        { id: '1', text: 'Baja', value: 1 },
        { id: '2', text: 'Media', value: 2 },
        { id: '3', text: 'Alta', value: 3 }
    ] 

    const handleOnSelect = (value) => {
        handleChangeTaskPriority(id, value)
    }

    return (
        <article
            className={styles.task}
        >
            <h3>{text}</h3>
            <Select options={options} defaultValue={priority} onSelect={handleOnSelect}/>
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