import styles from './TaskList.module.css'

import Task from '../Task/Task'

const TaskList = ({ tasks, handleChangeTaskState }) => {
    return (
        <section className={styles.list}>
                {
                    tasks.map(task => <Task key={task.id} {...task} {...{handleChangeTaskState}}/>)
                }
            </section>
    )
}

export default TaskList