import styles from './TaskList.module.css'

import Task from '../Task/Task'

const TaskList = ({ tasks, handleChangeTaskState, handleChangeTaskPriority }) => {
    return (
        <section className={styles.list}>
                {
                    tasks.map(task => <Task key={task.id} {...{...task, handleChangeTaskState, handleChangeTaskPriority}}/>)
                }
            </section>
    )
}

export default TaskList