import axios from "axios";

const API_URL = "https://blogapplication-29oz.onrender.com/";

export const getTodo = async () => {
  try {
    const response = await axios.get(`${API_URL}/a`);
    return response.data;
  } catch (error) {
    console.error("Error fetching todo:", error);
    return null;
  }
};
