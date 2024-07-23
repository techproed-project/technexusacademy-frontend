import {
	MANAGER_CREATE_API,
	MANAGER_DELETE_API,
	MANAGER_GET_ALL_BY_PAGE_API,
	MANAGER_UPDATE_API,
} from "@/helpers/api-routes";
import { getAuthHeader } from "@/helpers/auth-helper";

export const getAllManagersByPage = async (
	page = 0,
	size = 20,
	sort = "name",
	type = "asc"
) => {
	const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

	return fetch(`${MANAGER_GET_ALL_BY_PAGE_API}?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const createManager = async (payload) => {
	return fetch(`${MANAGER_CREATE_API}`, {
		method: "post",
		body: JSON.stringify(payload),
		headers: await getAuthHeader(),
	});
};

export const updateManager = async (payload) => {
	return fetch(`${MANAGER_UPDATE_API}/${payload.id}`, {
		method: "put",
		body: JSON.stringify(payload),
		headers: await getAuthHeader(),
	});
};

export const deleteManager = async (id) => {
	return fetch(`${MANAGER_DELETE_API}/${id}`, {
		method: "delete",
		headers: await getAuthHeader(),
	});
};
