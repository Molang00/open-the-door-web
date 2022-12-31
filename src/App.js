import logo from "./logo.svg";
import "./App.css";
import User from "./pages/user";
import { Route, Routes } from "react-router-dom";
import Admin from "./pages/admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<User />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
