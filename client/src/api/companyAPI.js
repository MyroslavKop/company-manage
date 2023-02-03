import { $authHost } from "./index";

export const createCompany = async (company) => {
  return $authHost.post("api/company/create-company", company);
};

export const getAllUserCompanies = async () => {
  const { data } = await $authHost.get("api/company/get-users-companies");
  return data;
};

export const getAllCompanies = async () => {
  const { data } = await $authHost.get("api/company/get-all-companies");
  return data;
};

export const getCompany = async (companyId) => {
  const { data } = await $authHost.get(`api/company/${companyId}`);
  return data;
};

export const deleteCompany = async (companyId) => {
  return $authHost.delete(`api/company/${companyId}`);
};

export const editCompany = async (companyId, company) => {
  return $authHost.post(`api/company/${companyId}`, company);
};
