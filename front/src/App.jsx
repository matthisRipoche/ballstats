import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashBoardAdminHome from "./pages/DashBoardAdmin/Home";
import DashBoardAdminUsers from "./pages/DashBoardAdmin/Users";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/dashboard-admin" element={<DashBoardAdminHome />} />
        <Route path="/dashboard-admin/users" element={<DashBoardAdminUsers />} />

        <Route path="*" element={<NotFound />} />


      </Routes>
    </Router>
  );
}

export default App;
