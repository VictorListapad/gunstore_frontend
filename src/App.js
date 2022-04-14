import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import HomeView from "./views/HomeView";
import PistolView from "./views/Pistols/PistolsView";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/pistols" element={<PistolView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
