import { Routes, Route, Navigate } from 'react-router-dom'

import { useAuth } from '../context/AuthContext'

import PublicRoute from './components/PublicRoute'
import ProtectedRoute from './components/ProtectedRoute'

import Home from '../components/Home/Home';
import TaskListContainer from '../components/TaskListContainer/TaskListContainer';
import CreateTask from '../components/CreateTask/CreateTask'
import Login from '../components/Login/Login';

import { TasksProvider } from '../context/TaskContext'

const AppRouter = () => {
    const { user } = useAuth()

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            
            <Route element={<PublicRoute user={user} redirectPath='/tasks'/>}>
                <Route path='/login' element={<Login />} />
            </Route>

            <Route element={<ProtectedRoute user={user}/>}>
                <Route element={<TasksProvider />}>
                    <Route path='/tasks' element={<TaskListContainer />} />
                    <Route path='/createtask' element={<CreateTask />} />
                </Route>
            </Route>

            <Route path='*' element={<Navigate to='/'/>} />
        </Routes>
    )
}

export default AppRouter