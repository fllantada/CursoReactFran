import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import TaskListContainer from './components/TaskListContainer/TaskListContainer';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tasks' element={<TaskListContainer />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
