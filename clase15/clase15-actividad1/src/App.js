import './App.css';
import { BrowserRouter } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import { AuthProvider } from './context/AuthContext';

import AppRouter from './routes/AppRouter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <AppRouter />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
