import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);

    
  };

  return (
    <main className="login-page">
        <div className="content">
            <div className="login-container">
                <h1>Inscription</h1>
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

  