import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Login from "./Components/login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
