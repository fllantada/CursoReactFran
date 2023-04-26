import { useContext } from "react";
import TaskList from "../TaskList/TaskList";

import { ProductContext } from "../../context/TaskContext";

const TaskListContainer = () => {
  const { loading, tasks } = useContext(ProductContext);

  if (loading) {
    return (
      <main>
        <h1>Cargando tareas...</h1>
      </main>
    );
  }

  return (
    <main>
      <h1>Lista de tareas</h1>
      <TaskList {...{ tasks }} />
    </main>
  );
};

export default TaskListContainer;
