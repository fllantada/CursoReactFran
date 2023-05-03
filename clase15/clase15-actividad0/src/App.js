import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import { AuthProvider } from "./context/AuthContext";

import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <div className="App">
      <img
        style={{ width: "200px", height: "200px" }}
        src="https://tienda.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/a/1/a13-negro-frente_1.png"
      />
      <BrowserRouter>
        <AuthProvider>
          <TaskProvider>
            <Navbar />
            <AppRouter />
          </TaskProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
