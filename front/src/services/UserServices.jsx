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
export const fetchUserById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs :", error);
    return [];
  }
}

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
    await axios.put(`${API_URL}/users/${id}`, userData);
  } catch (error) {
    return error.response?.data;
  }
}

// Ajouter un nouvel utilisateur
export const fetchCreateUser = async (userData) => {
  if (userData.password !== userData.confirmPassword) {
    alert("Les mots de passe ne correspondent pas.");
    return;
  }

  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
        password: userData.password,
      }),
    });

    // Vérifier si la réponse est OK (status 200-299)
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Erreur lors de l'inscription.");
    }

    const data = await response.json();

    // Si l'API retourne un token, on le stocke pour connecter directement l'utilisateur
    if (data.token) {
      localStorage.setItem("token", data.token);
    }

    return data; // Retourne les données pour d'éventuels traitements

  } catch (error) {
    console.error("Erreur:", error.message);
    alert(error.message); // Afficher un message clair à l'utilisateur
  }
};

