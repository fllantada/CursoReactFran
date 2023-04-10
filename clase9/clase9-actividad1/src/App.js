import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import TaskListContainer from './components/TaskListContainer/TaskListContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tasks' element={<TaskListContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
