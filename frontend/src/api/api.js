import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const login = (data) => API.post("/auth/login", data);
export const register = (data) => API.post("/auth/register", data);

export const getTasks = (token) =>
  API.get("/tasks", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const createTask = (token, data) =>
  API.post("/tasks", data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getInsights = (token) =>
  API.get("/tasks/insights", {
    headers: { Authorization: `Bearer ${token}` },
  });
