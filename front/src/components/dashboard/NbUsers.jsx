import { Link } from "react-router-dom";
import { fetchUsers } from "../../services/UserServices";
import { useEffect, useState } from "react";

const DashboardNbUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchUsers()
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => {
                setError("Erreur lors de la récupération des utilisateurs.", err);
                setLoading(false);
            });
    }, []);

    return (
        <section className="nb-users dashboard-home-card">
            <Link className="ghostlink" to="/dashboard-admin/users"></Link>

            {/* Affichage du nombre d'utilisateurs */}
            <h2>
                {loading
                    ? "Chargement..."
                    : error
                    ? error
                    : `${users.length} utilisateurs`}
            </h2>
        </section>
    );
};

export default DashboardNbUsers;
