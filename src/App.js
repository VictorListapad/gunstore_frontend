import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { NavBar } from "./components/NavBar";
import AddPistolView from "./views/controls/AddPistolView";
import AddRifleView from "./views/controls/AddRifleView";
import EditPistolView from "./views/controls/EditPistolView";
import EditRifleView from "./views/controls/EditRifleView";
import EditView from "./views/controls/EditView";
import HomeView from "./views/HomeView";
import PistolDetailsView from "./views/Pistols/PistolDetailsView";
import PistolView from "./views/Pistols/PistolsView";
import RifleDetailsView from "./views/Rifles/RifleDetailsView";
import RiflesView from "./views/Rifles/RiflesView";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/pistols" element={<PistolView />} />
        <Route path="/rifles" element={<RiflesView />} />
        <Route path="/pistol/:id" element={<PistolDetailsView />} />
        <Route path="/rifle/:id" element={<RifleDetailsView />} />
        <Route path="/addPistol" element={<AddPistolView />} />
        <Route path="/addRifle" element={<AddRifleView />} />
        <Route path="/pistolEdit/:id" element={<EditPistolView />} />
        <Route path="/rifleEdit/:id" element={<EditRifleView />} />
        <Route path="/edit" element={<EditView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
