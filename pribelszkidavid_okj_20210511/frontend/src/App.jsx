import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBarComponent from "./components/NavBarComponent";
import Home from "./pages/Home";
import Szobak from "./pages/Szobak";
import Foglalas from "./pages/Foglalas";

const App = () => {
  return (
    <Router>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/szobak" element={<Szobak />} />
        <Route path="/foglalas/:szobaId" element={<Foglalas />} />
      </Routes>
    </Router>
  );
};

export default App;
