import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "../components/Home/Home";
import TaskListContainer from "../components/TaskListContainer/TaskListContainer";
import Login from "../components/Login/Login";

import { TasksProvider } from "../context/TaskContext";
import DataContainer from "../components/Data/DataContainer";

const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/data" element={<DataContainer />} />

      <Route element={<PublicRoute user={user} redirectPath="/tasks" />}>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<ProtectedRoute user={user} />}>
        <Route
          path="/tasks"
          element={
            <TasksProvider>
              <TaskListContainer />
            </TasksProvider>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
