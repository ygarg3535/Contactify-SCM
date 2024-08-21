import "./App.css";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Userdashboard from "./Pages/user-routes/Userdashboard";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import AddContact from "./Pages/user-routes/AddContact";
import Contacts from "./Pages/user-routes/Contacts";
import HomePage from "./Pages/HomePage";
import Profile from "./Pages/user-routes/Profile";

function App() {
  return (
    <div>
        <Routes >
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<SignUp/>}></Route>
          <Route path="/user" element={<PrivateRoute/>}>
             <Route path="dashboard" element={<Userdashboard/>}></Route>
             <Route path="add-contact" element={<AddContact/>}></Route>
             <Route path="contacts" element={<Contacts/>}></Route>
             <Route path="profile" element={<Profile/>}></Route>
          </Route>
        </Routes>
      
    </div>
        
  );
}

export default App;
