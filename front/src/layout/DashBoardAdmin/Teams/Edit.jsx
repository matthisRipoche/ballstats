import { useParams } from "react-router-dom";
import { fetchTeamById, fetchEditTeam } from "../../../services/TeamServices";
import { useState, useEffect } from "react";

const DashBoardAdminTeamEdit = () => {
    const { id } = useParams();
    const [team, setTeam] = useState({ name: "" });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetchTeamById(id)
            .then((data) => {
                setTeam(data);
                setLoading(false);
            })
            .catch((err) => {
                setError("Erreur lors de la récupération de l'équipe.", err);
                setLoading(false);
            });
    }, [id]);

    const handleChange = (e) => {
        setTeam({ ...team, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetchEditTeam(id, team);
            setMessage("La Team a bien été modifiée");
            window.location.href = "/dashboard-admin/teams";
        } catch (err) {
            setError("Une erreur est survenue lors de la modification de l'équipe.", err);
        }
    };

    if (loading) return <p>Chargement...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <section className="edit-team">
            <h1>Modifier l&apos;utilisateur {team.name}</h1>

            {message && <p style={{ color: "green" }}>{message}</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={team.name}
                    onChange={handleChange}
                    placeholder="Nom :"
                    required
                />
                <button className="btn orange" type="submit">Modifier</button>
            </form>
        </section>
    );
};

export default DashBoardAdminTeamEdit;
