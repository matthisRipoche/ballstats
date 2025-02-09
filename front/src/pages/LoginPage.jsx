import { useState } from "react";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          const response = await fetch(`${API_BASE_URL}/login`, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
          });

          const data = await response.json();

          if (response.ok) {
              localStorage.setItem("token", data.token);
              alert("Connexion réussie !");
              window.location.href = "/dashboard";
          } else {
              setError(data.message || "Erreur lors de la connexion");
          }
      } catch (error) {
          setError("Une erreur est survenue. ", error);
      }
    };

    return (
        <main className="login-page">
            <div className="content">
                <div className="login-container">
                    <h1>Connexion</h1>
                    {error && <p className="error">{error}</p>}
                    <form onSubmit={handleSubmit}>
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
                        <button type="submit" className="btn orange">Se connecter</button>
                    </form>
                    <a href="/register">Pas encore inscrit ?</a>
                </div>
                <div className="links">
                    <a href="/">Retour au site</a>
                    <a href="/forgot-password">Mot de passe oublié ?</a>
                </div>
            </div>
        </main>
    );
};

export default LoginPage;
