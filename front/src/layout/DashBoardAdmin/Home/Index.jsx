import DashboardNbUsers from "../../../components/dashboard/NbUsers";
import DashboardNbTeams from "../../../components/dashboard/NbTeams";


const DashBoardAdminHome = () => {
    return (
        <section className="dashboard-admin-home">
            <h2>DashBoard</h2>
            <div className="cards-container">
                <DashboardNbUsers />
                <DashboardNbTeams />
            </div>
        </section>
    );
};
  
export default DashBoardAdminHome;
  