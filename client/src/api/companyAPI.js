import { $authHost, $host } from "./index";

export const createCompany = async (company) => {
  const { data } = await $authHost.post("api/company/create_company", company);
  return data;
};

export const getAllUsersCompanies = async () => {
  const { data } = await $authHost.get("api/company/get_users_companies");
  return data;
};

export const getCompany = async (companyId) => {
  const { data } = await $host.get(`api/company/${companyId}`);
  return data;
};

export const deleteCompany = async (companyId) => {
  const { data } = await $host.delete(`api/company/${companyId}`);
  return data;
};

export const getAllCompanies = async () => {
  const { data } = await $authHost.get("api/company/get_all_companies");
  return data;
};
