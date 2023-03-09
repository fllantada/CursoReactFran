import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import TaskListContainer from './components/TaskListContainer/TaskListContainer';
import Login from './components/Login/Login';
import { TasksProvider } from './context/TaskContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/tasks' element={<TasksProvider><TaskListContainer /></TasksProvider>} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
