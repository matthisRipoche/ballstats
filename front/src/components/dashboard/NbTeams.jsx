import { Link } from "react-router-dom";
import { fetchTeams } from "../../services/TeamServices";
import { useEffect, useState } from "react";

const DashboardNbTeams = () => {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTeams()
            .then((data) => {
                setTeams(data);
                setLoading(false);
            })
            .catch((err) => {
                setError("Erreur lors de la récupération des utilisateurs.", err);
                setLoading(false);
            });
    }, []);

    return (
        <section className="nb-teams dashboard-home-card">
            <Link className="ghostlink" to="/dashboard-admin/teams"></Link>

            {/* Affichage du nombre de teams */}
            <h2>
                {loading
                    ? "Chargement..."
                    : error
                    ? error
                    : `${teams.length} Teams`}
            </h2>
        </section>
    );
};

export default DashboardNbTeams;
