import { useParams, useNavigate } from "react-router-dom";
import { fetchUserById, fetchDeleteUser } from "../../../services/UserServices";
import { useState, useEffect } from "react";
import SideBar from "../../../components/SideBar";

const DashBoardAdminUserEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: "", email: "" });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUserById(id).then((data) => {
            setUser(data);
            setLoading(false);
        });
    }, [id]);

    const handleDelete = async () => {
        fetchDeleteUser(id).then(() => {
            navigate("/dashboard-admin/users");
        });
    };

    if (loading) return <p>Chargement...</p>;

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

