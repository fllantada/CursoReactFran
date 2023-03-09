import styles from './TaskList.module.css'

import Task from '../Task/Task'

const TaskList = ({ tasks }) => {
    return (
        <section className={styles.list}>
                {
                    tasks.map(task => <Task key={task.id} {...{...task}}/>)
                }
            </section>
    )
}

export default TaskList