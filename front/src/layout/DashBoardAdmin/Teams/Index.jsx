import { useEffect, useState } from "react";
import { fetchTeams } from "../../../services/TeamServices";
import { Link } from "react-router-dom";
import { MdEditDocument } from "react-icons/md";
import { FaTrash, FaEye } from "react-icons/fa";

const DashBoardAdminTeams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTeams();
        setTeams(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des équipes :", error);
      }
    };

    fetchData();
  }, []);


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR");
  };

  return (
    <div className="liste-teams">
      <div className="top-content">
        <h2>Les Teams</h2>
        <Link className="btn orange" to="/dashboard-admin/team/create">Créer une team</Link>
      </div>
      
      <ul>
        <li className="titles">
          <p>Name</p>
          <p>Coach</p>
          <p>Date Création</p>
          <p>Actions</p>
        </li>
        {teams.length > 0 ? (
          teams.map((team) => (
            <li key={team.id}>
              <p>{team.name}</p>
              <p>{team.coach.name || "Chargement..."}</p>
              <p>{formatDate(team.created_at)}</p>
              <p>
                <Link to={`/dashboard-admin/team/show/${team.id}`}>
                  <FaEye color="#fff" />
                </Link>
                <Link to={`/dashboard-admin/team/edit/${team.id}`}>
                  <MdEditDocument color="#fff" />
                </Link>
                <Link to={`/dashboard-admin/team/delete/${team.id}`}>
                  <FaTrash color="#fff" />
                </Link>
              </p>
            </li>
          ))
        ) : (
          <p>Aucune team trouvée.</p>
        )}
      </ul>
    </div>
  );
};

export default DashBoardAdminTeams;
