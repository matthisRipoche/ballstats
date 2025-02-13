import { useParams } from "react-router-dom";
import { fetchUserById, fetchEditUser } from "../../../services/UserServices";
import { useState, useEffect } from "react";

const DashBoardAdminUserEdit = () => {
    const { id } = useParams();
    const [user, setUser] = useState({ name: "", email: "" });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    // Recuperer l'utilisateur par son id
    useEffect(() => {
        fetchUserById(id).then((data) => {
            setUser(data);
            setLoading(false);
        });
    }, []);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        fetchEditUser(id, user).then((error) => {
            if (error) {
                setError(error);
            } else {
                setMessage("L'utilisateur a bien été modifié");
                window.location.href = "/dashboard-admin/users";
            }
        });
    };

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>{error}</p>;

    return (
        <section className="edit-user">
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
        </section>
    );  
};

export default DashBoardAdminUserEdit;
