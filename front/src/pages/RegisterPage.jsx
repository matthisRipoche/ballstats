import { useState } from "react";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Les mots de passe ne correspondent pas.");
            return;
        }

        try {
            const response = await fetch("http://127.0.0.1:8000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                window.location.href = "/login";
            } else {
                alert("Erreur lors de l'inscription.");
            }
        } catch (error) {
            console.error("Erreur:", error);
            alert("Une erreur est survenue.");
        }
    };

    return (
        <main className="login-page">
            <div className="content">
                <div className="login-container">
                    <h1>Inscription</h1>
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
                        <button type="submit" className="btn orange">S&apos;inscrire</button>
                    </form>
                    <a href="/login">Déjà inscrit ? Se connecter</a>
                </div>
                <div className="links">
                    <a href="/">Retour au site</a>
                    <a href="/forgot-password">J&apos;ai oublié mon mot de passe</a>
                </div>
            </div>
        </main>
    );
};

export default LoginPage;
