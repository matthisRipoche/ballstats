import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../../../components/SideBar";

const DashBoardAdminUserEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: "", email: "" });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${id}`)
            .then(response => {
                setUser(response.data);
                setLoading(false);
            })
            .catch(() => {
                setError("Utilisateur non trouvé");
                setLoading(false);
            });
    }, [id]);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8000/api/users/${id}`);
            navigate("/dashboard-admin/users");
        } catch (error) {
            setError("Erreur lors de la suppression.", error.response?.data);
        }
    };

    if (loading) return <p>Chargement...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (

        <div className="container-admin admin-users">
            <SideBar />
            <main className="dashboard-admin-page">
                <h2>Modifier l&apos;utilisateur</h2>
                <p><strong>Nom:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>

                <button onClick={handleDelete} style={{ backgroundColor: "red", color: "white", padding: "10px", border: "none", cursor: "pointer" }}>
                    Supprimer l&apos;utilisateur
                </button>
            </main>
        </div>
    );
};

export default DashBoardAdminUserEdit;

