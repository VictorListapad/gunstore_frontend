import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import HomeView from "./views/HomeView";
import PistolDetailsView from "./views/Pistols/PistolDetailsView";
import PistolView from "./views/Pistols/PistolsView";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/pistols" element={<PistolView />} />
        <Route path="/pistol/:id" element={<PistolDetailsView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
