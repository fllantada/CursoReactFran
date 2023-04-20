import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import TaskListContainer from "./components/TaskListContainer/TaskListContainer";
import Login from "./components/Login/Login";
import CursosContextProvider from "./context/CursosContextProvider";
function App() {
  return (
    <div className="App">
      <CursosContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<TaskListContainer />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </CursosContextProvider>
    </div>
  );
}

export default App;
