import styles from "./TaskList.module.css";

import Task from "../Task/Task";

const TaskList = ({ tasks }) => {
  return (
    <section className={styles.list}>
      {tasks.map((task, i) => (
        <Task key={i} {...{ ...task }} />
      ))}
    </section>
  );
};

export default TaskList;
