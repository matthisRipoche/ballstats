import { useState } from "react";
import { fetchCreateUser } from "../../../services/UserServices";
import { useNavigate } from "react-router-dom";

const DashBoardAdminUserCreate = () => {
    const navigate = useNavigate(); // Permet la redirection après succès
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);
        setError(null);
        setLoading(true);

        try {
            const data = await fetchCreateUser(formData);
            if (data) {
                setMessage("Inscription réussie ! Redirection en cours...");
                navigate("/dashboard-admin/users");
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="">
            <div className="content">
                <div className="login-container">
                    <h1>Inscription</h1>

                    {/* Affichage des messages */}
                    {message && <p style={{ color: "green" }}>{message}</p>}
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    {loading && <p>Chargement...</p>}

                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                placeholder="Nom"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                placeholder="Email"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                placeholder="Mot de passe"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                placeholder="Confirmer le mot de passe"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn orange" disabled={loading}>
                            {loading ? "Inscription en cours..." : "S'inscrire"}
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default DashBoardAdminUserCreate;
