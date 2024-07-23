import { getAuthHeader } from "@/helpers/auth-helper";

const {
	ADMIN_GET_ALL_BY_PAGE_API,
	ADMIN_DELETE_API,
	ADMIN_CREATE_API,
} = require("@/helpers/api-routes");

export const getAllAdminsByPage = async (
	page = 0,
	size = 20,
	sort = "name",
	type = "asc"
) => {
	const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

	return fetch(`${ADMIN_GET_ALL_BY_PAGE_API}?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const createAdmin = async (payload) => {
	return fetch(`${ADMIN_CREATE_API}`, {
		method: "post",
		body: JSON.stringify(payload),
		headers: await getAuthHeader(),
	});
};

export const deleteAdmin = async (id) => {
	return fetch(`${ADMIN_DELETE_API}/${id}`, {
		method: "delete",
		headers: await getAuthHeader(),
	});
};
