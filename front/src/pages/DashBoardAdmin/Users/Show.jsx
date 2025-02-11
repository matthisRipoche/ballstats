import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../../../components/SideBar";


const DashBoardAdminUserShow = () => {

    const { id } = useParams();
    const [user, setUser] = useState({ name: "", email: "" });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

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

    return (
        <div className="container-admin admin-users">
            <SideBar />
            <main className="dashboard-admin-page">
                <h1>Utilisateur</h1>
                {loading && <p>Chargement en cours...</p>}
                {error && <p>{error}</p>}
                {message && <p>{message}</p>}
                <div className="user-show">
                    <p>Nom: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            </main>
        </div>
    );  
};
  
export default DashBoardAdminUserShow;
  