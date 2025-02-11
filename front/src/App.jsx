import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import DashBoardAdminHome from "./pages/DashBoardAdmin/Home";
import DashBoardAdminUsers from "./pages/DashBoardAdmin/Users/Index";
import DashBoardAdminUserEdit from "./pages/DashBoardAdmin/Users/Edit";
import DashBoardAdminUserShow from "./pages/DashBoardAdmin/Users/Show";
import DashBoardAdminUserDelete from "./pages/DashBoardAdmin/Users/Delete";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/dashboard-admin" element={<DashBoardAdminHome />} />
        <Route path="/dashboard-admin/users" element={<DashBoardAdminUsers />} />

        <Route path="/dashboard-admin/user/edit/:id" element={<DashBoardAdminUserEdit />} />
        <Route path="/dashboard-admin/user/show/:id" element={<DashBoardAdminUserShow />} />
        <Route path="/dashboard-admin/user/delete/:id" element={<DashBoardAdminUserDelete />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;


/*
<Route
  path="/dashboard-admin"
  element={
    <ProtectedRoute>
      <DashboardLayout />
    </ProtectedRoute>
  }
>
*/