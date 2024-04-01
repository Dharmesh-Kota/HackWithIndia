import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Store from "./pages/Store";
import History from "./pages/History";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/history" element={<History />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
