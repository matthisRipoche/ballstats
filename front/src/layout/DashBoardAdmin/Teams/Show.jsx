import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchTeamById } from "../../../services/TeamServices";

const DashBoardAdminTeamShow = () => {

    const { id } = useParams();
    const [team, setTeam] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTeamById(id).then((data) => {
            setTeam(data);
            setLoading(false);
        });
    }, [id]);

    return (
        <section className="dashboard-admin-user-show">
            <h1>Team</h1>
            {loading && <p>Chargement en cours...</p>}
            <div className="show-user">
                <p>{team.name}</p>
                <p>{team.coach.name}</p>
            </div>
        </section>
    );  
};
  
export default DashBoardAdminTeamShow;
  