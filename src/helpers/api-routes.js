import { config } from "./config";

export const CREATE_CONTACT_API = `${config.apiURL}/contactMessages/save`;

export const LOGIN_API = `${config.apiURL}/auth/login`;

export const ADMIN_GET_ALL_BY_PAGE_API = `${config.apiURL}/admin/getAll`;
export const ADMIN_DELETE_API = `${config.apiURL}/admin/delete`;
export const ADMIN_CREATE_API = `${config.apiURL}/admin/save`;

export const MANAGER_GET_ALL_BY_PAGE_API = `${config.apiURL}/dean/search`;
export const MANAGER_GET_BY_ID_API = `${config.apiURL}/dean/getManagerById`;
export const MANAGER_DELETE_API = `${config.apiURL}/dean/delete`;
export const MANAGER_CREATE_API = `${config.apiURL}/dean/save`;
export const MANAGER_UPDATE_API = `${config.apiURL}/dean/update`;

export const ASSISTANT_GET_ALL_BY_PAGE_API = `${config.apiURL}/vicedean/search`;
export const ASSISTANT_GET_BY_ID_API = `${config.apiURL}/vicedean/getViceDeanById`;
export const ASSISTANT_DELETE_API = `${config.apiURL}/vicedean/delete`;
export const ASSISTANT_CREATE_API = `${config.apiURL}/vicedean/save`;
export const ASSISTANT_UPDATE_API = `${config.apiURL}/vicedean/update`;

export const TERM_GET_ALL_BY_PAGE_API = `${config.apiURL}/educationTerms/search`;
export const TERM_DELETE_API = `${config.apiURL}/educationTerms`;
export const TERM_CREATE_API = `${config.apiURL}/educationTerms`;

