import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import TaskListContainer from "./components/TaskListContainer/TaskListContainer";
import Product from "./components/Product/Product";

function App() {
  // const [section, setSection] = useState("home");

  const handle = (e) => {
    console.log(e.target.innerText);
    // setSection(e.target.innerText);
  };

  return (
    <div className="App">
      {/* <h2>A MANOPLA</h2>
      <Navbar handleClick={handle} />
      {section === "home" && <Home />}
      {section === "about" && <TaskListContainer />}
      <hr />
      <hr />
      <hr />
      <h2>PARA Q MAXI APRUEBE PRE ENTREGAS</h2> */}

      <BrowserRouter>
        <Navbar handleClick={handle} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/taskList" element={<TaskListContainer />} />

          <Route path="/products/:idProducto" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
