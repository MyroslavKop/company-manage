import { $authHost, $host } from "./index";

export const createCompany = async (company) => {
  const { data } = await $authHost.post("api/company/create-company", company);
  return data;
};

export const getAllUsersCompanies = async () => {
  const { data } = await $authHost.get("api/company/get-users-companies");
  return data;
};

export const getCompany = async (companyId) => {
  const { data } = await $host.get(`api/company/${companyId}`);
  return data;
};

export const deleteCompany = async (companyId) => {
  return $host.delete(`api/company/${companyId}`);
};

export const getAllCompanies = async () => {
  const { data } = await $authHost.get("api/company/get-all-companies");
  return data;
};

export const editCompany = async (companyId, company) => {
  return $host.post(`api/company/${companyId}`, company);
};
