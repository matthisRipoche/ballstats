import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Réinitialise les erreurs

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      });

      const { token } = response.data; // Récupération du token
      localStorage.setItem("token", token); // Stocker le token

      navigate("/dashboard"); // Rediriger après connexion réussie
    } catch (err) {
      setError("Email ou mot de passe incorrect !");
    }
  };

  return (
    <main className="login-page">
      <div className="content">
        <div className="login-container">
          <h1>Login</h1>
          {error && <p className="error-message">{error}</p>} {/* Affichage des erreurs */}
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                value={password}
                placeholder="Mot de passe"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn orange">Se connecter</button>
          </form>
          <a href="/register">Inscription</a>
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
