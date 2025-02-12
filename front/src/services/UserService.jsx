import axios from "axios";

const API_URL = "http://localhost:8000/api";

// Récupérer la liste des utilisateurs
export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs :", error);
    return [];
  }
};

// Récupérer un utilisateur par son id
export const fetchUserbyId = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs :", error);
    return [];
  }
}

// Ajouter un nouvel utilisateur
export const fetchCreateUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users`, userData);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur :", error);
    return null;
  }
};

// Delete un utilisateur
export const fetchDeleteUser = async (id) => {
  try {
    await axios.delete(`${API_URL}/users/${id}`);
  } catch (error) {
    return error.response?.data;
  }
};

// Edit un utilisateur
export const fetchEditUser = async (id, userData) => {
  try {
    await axios.put(`http://localhost:8000/api/users/${id}`, userData);
} catch (error) {
    return error.response?.data;
}
}
