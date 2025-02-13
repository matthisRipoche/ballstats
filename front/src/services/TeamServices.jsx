import axios from "axios";

const API_URL = "http://localhost:8000/api";

// Récupérer la liste des teams
export const fetchTeams = async () => {
  try {
    const response = await axios.get(`${API_URL}/teams`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs :", error);
    return [];
  }
};

// Récupérer une team par son id
export const fetchTeamById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/teams/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération de la team :", error);
    return [];
  }
};

// Delete une team
export const fetchDeleteTeam = async (id) => {
  try {
    await axios.delete(`${API_URL}/teams/${id}`);
  } catch (error) {
    return error.response?.data;
  }
};

// Edit un utilisateur
export const fetchEditTeam = async (id, userData) => {
  try {
    await axios.put(`${API_URL}/teams/${id}`, userData);
  } catch (error) {
      return error.response?.data;
  }
}

// Ajouter une nouvelle team
export const fetchCreateTeam = async (teamData) => {
  try {
    const response = await axios.post(`${API_URL}/teams`, teamData);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la création de la team :", error);
    return null;
  }
};