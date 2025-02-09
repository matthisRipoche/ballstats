import { useEffect, useState } from "react";
import { fetchUsers } from "../services/userService";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Liste des utilisateurs</h2>
      <ul>
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
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
