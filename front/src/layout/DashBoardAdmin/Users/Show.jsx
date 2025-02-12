import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchUserById } from "../../../services/UserServices";

const DashBoardAdminUserShow = () => {

    const { id } = useParams();
    const [user, setUser] = useState({ name: "", email: "" });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUserById(id).then((data) => {
            setUser(data);
            setLoading(false);
        });
    }, [id]);

    return (
        <section className="dashboard-admin-user-show">
            <h1>Utilisateur</h1>
            {loading && <p>Chargement en cours...</p>}
            <div className="show-user">
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
        </section>
    );  
};
  
export default DashBoardAdminUserShow;
  