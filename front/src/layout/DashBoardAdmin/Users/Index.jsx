import { useEffect, useState } from "react";
import { fetchUsers } from "../../../services/UserServices";
import { Link } from "react-router-dom";
import { MdEditDocument } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const DashBoardAdminUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetchUsers().then((data) => setUsers(data));
    }, []);
  
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("fr-FR");
    };

    return (
        <div className="liste-users">
            <div className="top-content">
                <h2>Les Utilisateurs</h2>
                <Link className="btn orange" to="/dashboard-admin/user/create">Créer un utilisateur</Link>
            </div>
            <ul>
                <li className="titles">
                    <p>Name</p>
                    <p>Email</p>
                    <p>Date Création Compte</p>
                    <p>Actions</p>
                </li>
                {users.length > 0 ? (
                    users.map((user) => (
                    <li key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{formatDate(user.created_at)}</p>
                        <p>
                        <Link to={`/dashboard-admin/user/show/${user.id}`}><FaEye color="#fff" /></Link>
                        <Link to={`/dashboard-admin/user/edit/${user.id}`}><MdEditDocument color="#fff" /></Link>
                        <Link to={`/dashboard-admin/user/delete/${user.id}`}><FaTrash color="#fff" /></Link>
                        </p>
                    </li>
                    ))
                ) : (
                    <p>Aucun utilisateur trouvé.</p>
                )}
            </ul>
        </div>
    );  
};
  
export default DashBoardAdminUsers;
  