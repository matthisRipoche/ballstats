import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCreateTeam } from "../../../services/TeamServices";

const DashBoardAdminTeamCreate = () => {
    const navigate = useNavigate();
    const [team, setTeam] = useState({ name: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        setTeam({ ...team, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await fetchCreateTeam(team);
            setMessage("Équipe créée avec succès !");
            setLoading(false);
            setTimeout(() => navigate("/dashboard-admin/teams"), 2000); // Redirection après succès
        } catch (err) {
            setError("Erreur lors de la création de l'équipe.", err);
            setLoading(false);
        }
    }

    return (
        <section className="team-create">
            <h2>Créer une équipe</h2>

            {message && <p style={{ color: "green" }}>{message}</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {loading && <p>Création en cours...</p>}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={team.name}
                    onChange={handleChange}
                    placeholder="Nom de l'équipe"
                    required
                />
                <button className="btn orange" type="submit" disabled={loading}>
                    {loading ? "Création..." : "Créer"}
                </button>
            </form>
        </section>
    );
};

export default DashBoardAdminTeamCreate;
