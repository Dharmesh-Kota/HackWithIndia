import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Store from "./pages/Store";
import History from "./pages/History";
import Navbar from "./components/Navbar";
import Guidlines from "./pages/Guidlines";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/history" element={<History />} />
        <Route exact path="/guidelines" element={<Guidlines />} />
        
      </Routes>
    </>
  );
}

export default App;