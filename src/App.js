import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AdminRoute from "./components/AdminRoute";
import ModeratorRoute from "./components/ModeratorRoute";
import { NavBar } from "./components/NavBar";
import AddAmmunitionReviewView from "./views/Ammunition/AddAmmunitionReviewView";
import AmmunitionDetailsView from "./views/Ammunition/AmmunitionDetailsView";
import AmmunitionReviewsView from "./views/Ammunition/AmmunitionReviewsView";
import AmmunitionView from "./views/Ammunition/AmmunitionView";
import EditAmmunitionCommentView from "./views/Ammunition/EditAmmunitionCommentView";
import EditAmmunitionReviewView from "./views/Ammunition/EditAmmunitionReviewView";
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
import EditUsersView from "./views/controls/EditUsersView";
import EditView from "./views/controls/EditView";
import UserUpdateView from "./views/controls/UserUpdateView";
import AddGearReviewView from "./views/Gear/AddGearReviewView";
import EditGearReviewView from "./views/Gear/EditGearReviewView";
import GearCommentEditView from "./views/Gear/GearCommentEditView";
import GearDetailsView from "./views/Gear/GearDetailsView";
import GearReviewsView from "./views/Gear/GearReviewsView";
import GearView from "./views/Gear/GearView";
import HomeView from "./views/HomeView";
import EditPistolCommentView from "./views/Pistols/EditPistolCommentView";
import PistolDetailsView from "./views/Pistols/PistolDetailsView";
import PistolView from "./views/Pistols/PistolsView";
import EditRifleCommentView from "./views/Rifles/EditRifleCommentView";
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
        <Route element={<AdminRoute />}>
          <Route path="/editUsers" element={<EditUsersView />} />
          <Route path="/userEdit/:id" element={<UserUpdateView />} />
        </Route>
        <Route path="/ammunition" element={<AmmunitionView />} />
        <Route path="/ammo/:id" element={<AmmunitionDetailsView />} />
        <Route path="/gear" element={<GearView />} />
        <Route path="/item/:id" element={<GearDetailsView />} />
        <Route path="/signIn" element={<SignInView />} />
        <Route path="/signUp" element={<SignUpView />} />
        <Route path="/editGearComment/:id" element={<GearCommentEditView />} />
        <Route path="/gearItemReviews/:id" element={<GearReviewsView />} />
        <Route path="/writeGearReview/:id" element={<AddGearReviewView />} />
        <Route path="/editGearReview/:id" element={<EditGearReviewView />} />
        <Route
          path="/editPistolComment/:id"
          element={<EditPistolCommentView />}
        />
        <Route
          path="/editRifleComment/:id"
          element={<EditRifleCommentView />}
        />
        <Route
          path="/editAmmunitionComment/:id"
          element={<EditAmmunitionCommentView />}
        />
        <Route
          path="/ammunitionReviews/:id"
          element={<AmmunitionReviewsView />}
        />
        <Route
          path="/writeAmmunitionReview/:id"
          element={<AddAmmunitionReviewView />}
        />
        <Route
          path="/editAmmunitionReview/:id"
          element={<EditAmmunitionReviewView />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
