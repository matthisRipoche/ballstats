import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./layout/HomeLayout";
import NotFound from "./layout/NotFoundLayout";
import LoginPage from "./layout/LoginLayout";
import RegisterPage from "./layout/RegisterLayout";
import DashBoardAdminLayout from "./layout/DashboardAdminLayout";
import DashBoardAdminUsers from "./layout/DashBoardAdmin/Users/Index";
import DashBoardAdminUserEdit from "./layout/DashBoardAdmin/Users/Edit";
import DashBoardAdminUserShow from "./layout/DashBoardAdmin/Users/Show";
import DashBoardAdminUserDelete from "./layout/DashBoardAdmin/Users/Delete";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard-admin" element={<DashBoardAdminLayout />} >
          <Route path="users" element={<DashBoardAdminUsers />} />
          <Route path="user/edit/:id" element={<DashBoardAdminUserEdit />} />
          <Route path="user/show/:id" element={<DashBoardAdminUserShow />} />
          <Route path="user/delete/:id" element={<DashBoardAdminUserDelete />} />
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