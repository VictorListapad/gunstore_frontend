import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ModeratorRoute from "./components/ModeratorRoute";
import { NavBar } from "./components/NavBar";
import AmmunitionDetailsView from "./views/Ammunition/AmmunitionDetailsView";
import AmmunitionView from "./views/Ammunition/AmmunitionView";
import SignInView from "./views/Auth/SignInView";
import SignUpView from "./views/Auth/SignUpView";
import AddAmmunitionView from "./views/controls/AddAmmunitionView";
import AddGearView from "./views/controls/AddGearView";
import AddPistolView from "./views/controls/AddPistolView";
import AddRifleView from "./views/controls/AddRifleView";
import EditAmmunitionView from "./views/controls/EditAmmunitionView";
import EditGearView from "./views/controls/EditGearView";
import EditPistolView from "./views/controls/EditPistolView";
import EditRifleView from "./views/controls/EditRifleView";
import EditView from "./views/controls/EditView";
import GearDetailsView from "./views/Gear/GearDetailsView";
import GearView from "./views/Gear/GearView";
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
        <Route element={<ModeratorRoute />}>
          <Route path="/edit" element={<EditView />} />
          <Route path="/addPistol" element={<AddPistolView />} />
          <Route path="/pistolEdit/:id" element={<EditPistolView />} />
          <Route path="/addRifle" element={<AddRifleView />} />
          <Route path="/rifleEdit/:id" element={<EditRifleView />} />
          <Route path="/addAmmo" element={<AddAmmunitionView />} />
          <Route path="/ammunitionEdit/:id" element={<EditAmmunitionView />} />
          <Route path="/gearEdit/:id" element={<EditGearView />} />
          <Route path="/addGear" element={<AddGearView />} />
        </Route>
        <Route path="/ammunition" element={<AmmunitionView />} />
        <Route path="/ammo/:id" element={<AmmunitionDetailsView />} />
        <Route path="/gear" element={<GearView />} />
        <Route path="/item/:id" element={<GearDetailsView />} />
        <Route path="/signIn" element={<SignInView />} />
        <Route path="/signUp" element={<SignUpView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
