import jwtDecode from "jwt-decode";
import { $authHost, $host } from "./index";

export const registration = async (user) => {
  const { data } = await $host.post("api/user/registration", user);
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const login = async (user) => {
  const { data } = await $host.post("api/user/login", user);
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const check = async () => {
  const { data } = await $authHost.get("api/user/auth");
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const getUser = async () => {
  const { data } = await $authHost.get("api/user/profile");
  return data;
};

export const editUser = async (data) => {
  return $authHost.put("api/user/edit-profile", data);
};

export const getAllUsers = async () => {
  const { data } = await $authHost.get("api/user/all-users");
  return data;
};

export const getUserById = async (userId) => {
  const { data } = await $authHost.get(`api/user/${userId}`);
  return data;
};

export const editUserById = async (userId, user) => {
  return $authHost.put(`api/user/${userId}`, user);
};
