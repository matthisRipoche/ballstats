import SideBar from "../components/SideBar";
import { Outlet} from "react-router-dom";


const DashBoardAdminLayout = () => {
    return (
        <>
            <SideBar />
            <main className="dashboard-admin-page">
                <Outlet />
            </main>
        </>
    );
};
  
export default DashBoardAdminLayout;
  