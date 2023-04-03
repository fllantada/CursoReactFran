import styles from './Task.module.css'

import Button from '../Button/Button'

const Task = ({ id, text, completed, handleChangeTaskState }) => {
    return (
        <article
            className={styles.task}
        >
            <h3>{text}</h3>
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