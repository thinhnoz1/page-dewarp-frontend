import axios from "../axios";

const endpoints = {
  registration: (data) => axios.post("/user", data),
  login: (data) => axios.post("/auth/login", data),
  logout: (data) => axios.post("/auth/logout", data),
  // forgotPassword: (data) => axios.post("/v1/auth/forgot/password", data),
  getProfile: () => axios.get("/user/1"),
  updateProfile: (data) => axios.patch("/v1/auth/me", data),
};

export default endpoints;
