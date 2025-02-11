import SideBar from "../../../components/SideBar";
import UserList from "../../../components/UserList";


const DashBoardAdminUsers = () => {
    return (
        <div className="container-admin admin-users">
            <SideBar />
            <main className="dashboard-admin-page">
                <UserList />
            </main>
        </div>
    );  
};
  
export default DashBoardAdminUsers;
  