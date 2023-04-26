import { createContext, useState, useEffect } from "react";
import { getTasks } from "../services/firebase/firestore/tasks";

export const ProductContext = createContext({ tasks: [] });

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getTasks()
      .then((tasks) => {
        setTasks(tasks);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleChangeTaskState = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    });

    setTasks(updatedTasks);
  };

  const handleChangeTaskPriority = (id, value) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, priority: value };
      } else {
        return task;
      }
    });

    setTasks(updatedTasks);
  };

  return (
    <ProductContext.Provider
      value={{
        loading,
        tasks,
        handleChangeTaskState,
        handleChangeTaskPriority,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
