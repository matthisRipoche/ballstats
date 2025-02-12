import { useParams, useNavigate } from "react-router-dom";
import { fetchTeamById, fetchDeleteTeam } from "../../../services/TeamServices";
import { useState, useEffect } from "react";

const DashBoardAdminTeamDelete = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);

  // Récupérer l'équipe
  useEffect(() => {
    fetchTeamById(id)
      .then((data) => {
        if (data) {
          setTeam(data);
        } else {
          console.error("Équipe non trouvée");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération de l'équipe:", error);
        setLoading(false);
      });
  }, [id]);

  // Fonction pour supprimer l'équipe
  const handleDelete = async () => {
    try {
      await fetchDeleteTeam(id);
      navigate("/dashboard-admin/teams");
    } catch (error) {
      console.error("Erreur lors de la suppression de l'équipe:", error);
    }
  };

  if (loading) return <p>Chargement...</p>; // Affiche "Chargement..." tant que l'équipe n'est pas chargée

  return (
    <section className="dashboard-admin-team-delete">
      <h2>Supprimer l&apos;Équipe {team ? team.name : "Inconnue"} ?</h2>
      <p>Êtes-vous sûr de vouloir supprimer cette équipe ? Cette action est irréversible.</p>
      <button 
        onClick={handleDelete} 
        style={{
          backgroundColor: "red", 
          color: "white", 
          padding: "10px", 
          border: "none", 
          cursor: "pointer"
        }}
      >
        Supprimer l&apos;équipe
      </button>
    </section>
  );
};

export default DashBoardAdminTeamDelete;
