import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import Register from "./pages/Register";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import ManageHabits from "./pages/ManageHabits";
import AddHabit from "./pages/AddHabit";
import Settings from "./pages/Settings";
import EditHabit from "./pages/EditHabit";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/manage-habits" element={<ManageHabits />} />
        <Route path="/add-habit" element={<AddHabit />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/edit-habit/:id" element={<EditHabit />} />
      </Routes>
    </Router>
    
  );
}

export default App;
