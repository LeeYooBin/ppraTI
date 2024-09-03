import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const registerUser = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      name,
      email,
      password,
    });

    return response.data.token;
  } catch (e) {
    if (e.response) {
      throw new Error(e.response.data.message || "Registration failed");
    } else if (e.request) {
      throw new Error("No response from server");
    } else {
      throw new Error("Error occurred while setting up the request");
    }
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });

    return response.data.token;
  } catch (e) {
    if (e.response) {
      throw new Error(e.response.data.message || "Login failed");
    } else if (e.request) {
      throw new Error("No response from server");
    } else {
      throw new Error("Error occurred while setting up the request");
    }
  }
};
