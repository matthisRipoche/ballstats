import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./layout/HomeLayout";
import NotFound from "./layout/NotFoundLayout";
import LoginPage from "./layout/LoginLayout";
import RegisterPage from "./layout/RegisterLayout";
import DashBoardAdminLayout from "./layout/DashboardAdminLayout";
import { DashBoardAdminHome, DashBoardAdminUsers, DashBoardAdminUserEdit, DashBoardAdminUserShow, DashBoardAdminUserDelete } from "./layout/DashBoardAdmin";
import DashBoardAdminTeams from "./layout/DashBoardAdmin/Teams/Index";
import DashBoardAdminTeamDelete from "./layout/DashBoardAdmin/Teams/Delete";
import DashBoardAdminTeamShow from "./layout/DashBoardAdmin/Teams/Show";
import DashBoardAdminTeamEdit from "./layout/DashBoardAdmin/Teams/Edit";
import DashBoardAdminTeamCreate from "./layout/DashBoardAdmin/Teams/Create";
import DashBoardAdminUserCreate from "./layout/DashBoardAdmin/Users/Create";


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
          <Route path="user/create" element={<DashBoardAdminUserCreate />} />

          <Route path="teams" element={<DashBoardAdminTeams />} />
          <Route path="teams/edit/:id" element={<DashBoardAdminTeamEdit />} />
          <Route path="teams/show/:id" element={<DashBoardAdminTeamShow />} />
          <Route path="teams/delete/:id" element={<DashBoardAdminTeamDelete />} />
          <Route path="teams/create" element={<DashBoardAdminTeamCreate />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;