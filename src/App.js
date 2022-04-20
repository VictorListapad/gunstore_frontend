import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import AddPistolView from "./views/controls/AddPistolView";
import AddRifleView from "./views/controls/AddRifleView";
import HomeView from "./views/HomeView";
import PistolDetailsView from "./views/Pistols/PistolDetailsView";
import PistolView from "./views/Pistols/PistolsView";
import RifleDetailsView from "./views/Rifles/RifleDetailsView";
import RiflesView from "./views/Rifles/RiflesView";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/pistols" element={<PistolView />} />
        <Route path="/rifles" element={<RiflesView />} />
        <Route path="/pistol/:id" element={<PistolDetailsView />} />
        <Route path="/rifle/:id" element={<RifleDetailsView />} />
        <Route path="/addPistol" element={<AddPistolView />} />
        <Route path="/addRifle" element={<AddRifleView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
