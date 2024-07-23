import { config } from "./config";

export const CREATE_CONTACT_API = `${config.apiURL}/contactMessages/save`;

export const LOGIN_API = `${config.apiURL}/auth/login`;

export const ADMIN_GET_ALL_BY_PAGE_API = `${config.apiURL}/admin/getAll`;
export const ADMIN_DELETE_API = `${config.apiURL}/admin/delete`;
export const ADMIN_CREATE_API = `${config.apiURL}/admin/save`;

