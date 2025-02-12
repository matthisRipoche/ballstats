import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./layout/HomeLayout";
import NotFound from "./layout/NotFoundLayout";
import LoginPage from "./layout/LoginLayout";
import RegisterPage from "./layout/RegisterLayout";
import DashBoardAdminLayout from "./layout/DashboardAdminLayout";
import { DashBoardAdminHome, DashBoardAdminUsers, DashBoardAdminUserEdit, DashBoardAdminUserShow, DashBoardAdminUserDelete } from "./layout/DashBoardAdmin";
import DashBoardAdminTeams from "./layout/DashBoardAdmin/Teams/Index";
import DashBoardAdminTeamDelete from "./layout/DashBoardAdmin/Teams/Delete";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard-admin" element={<DashBoardAdminLayout />} >
          <Route index element={<DashBoardAdminHome />} />
          <Route path="users" element={<DashBoardAdminUsers />} />
          <Route path="user/edit/:id" element={<DashBoardAdminUserEdit />} />
          <Route path="user/show/:id" element={<DashBoardAdminUserShow />} />
          <Route path="user/delete/:id" element={<DashBoardAdminUserDelete />} />

          <Route path="teams" element={<DashBoardAdminTeams />} />
          <Route path="team/delete/:id" element={<DashBoardAdminTeamDelete />} />
        </Route>
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