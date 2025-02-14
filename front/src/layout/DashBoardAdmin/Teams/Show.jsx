import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchTeamById } from "../../../services/TeamServices";

const DashBoardAdminTeamShow = () => {
    const { id } = useParams();
    const [team, setTeam] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetchTeamById(id)
            .then((data) => {
                setTeam(data);
                setLoading(false);
            })
            .catch((err) => {
                setError("Erreur lors du chargement de l'équipe.", err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Chargement en cours...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <section className="show-team">
            <h2>Team</h2>
            {team ? (
                <div className="show-user">
                    <p>Nom de l&apos;équipe : {team.name}</p>
                    <p>Coach : {team.coach ? team.coach.name : "Aucun coach assigné"}</p>
                </div>
            ) : (
                <p style={{ color: "red" }}>Équipe introuvable</p>
            )}
        </section>
    );
};

export default DashBoardAdminTeamShow;
