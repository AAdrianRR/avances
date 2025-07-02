// src/services/authService.ts
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

interface LoginData {
  email: string;
  password: string;
}

export const login = async ({ email, password }: LoginData) => {
  const response = await axios.post(`${API_URL}/auth/login`, {
    email,
    password,
  });

  const { token, role } = response.data;
  localStorage.setItem("token", token);
  localStorage.setItem("role", role);

  return response.data;
};
