import { useEffect, useState } from "react";
import { fetchUsers } from "../services/UserService";
import { Link } from "react-router-dom";
import { MdEditDocument } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";




const UserList = () => {
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
      <h2>Les Utilisateurs</h2>
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
                <Link to="/"><FaEye color="#fff" /></Link>
                <Link to="/"><MdEditDocument color="#fff" /></Link>
                <Link to="/"><FaTrash color="#fff" /></Link>
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

export default UserList;
