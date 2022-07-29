import "./App.css";
import Register from "./pages/Register";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Haber from "./components/Haber";
function App() {
  // const token = localStorage.getItem("token");

  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/haber" element={<Haber />} />
      </Routes>
    </div>
  );
}

export default App;
