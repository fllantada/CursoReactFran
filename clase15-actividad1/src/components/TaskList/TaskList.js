import styles from './TaskList.module.css'

import Task from '../Task/Task'

const TaskList = ({ tasks }) => {

    if(!tasks || tasks.lenght === 0) {
        return <h2>No hay tareas pendientes</h2>
    }

    return (
        <section className={styles.list}>
            {
                tasks?.map(task => <Task key={task.id} {...{...task}}/>)
            }
        </section>
    )
}

export default TaskList