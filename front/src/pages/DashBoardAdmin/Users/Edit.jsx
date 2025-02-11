import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../../../components/SideBar";

const DashBoardAdminUserEdit = () => {
    const { id } = useParams();
    const [user, setUser] = useState({ name: "", email: "" });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    // Récupérer les infos de l'utilisateur
    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${id}`)
            .then(response => {
                setUser(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError("Utilisateur non trouvé", error);
                setLoading(false);
            });
    }, [id]);

    // Gérer les changements des inputs
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    // Gérer la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);
        
        try {
            await axios.put(`http://localhost:8000/api/users/${id}`, user);
            window.location.href = "/dashboard-admin/users";
        } catch (error) {
            setError("Erreur lors de la mise à jour.", error.response?.data);
        }
        
    };

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container-admin admin-users">
            <SideBar />
            <main className="dashboard-admin-page">
                <div className="edit-user">
                    <h1>Modifier l&apos;utilisateur {user.name}</h1>

                    {message && <p style={{ color: "green" }}>{message}</p>}
                    {error && <p style={{ color: "red" }}>{error}</p>}

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                            placeholder="Nom :"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            placeholder="Email :"
                            required
                        />

                        <button className="btn orange" type="submit">Modifier</button>
                    </form>
                </div>
            </main>
        </div>
    );  
};

export default DashBoardAdminUserEdit;
