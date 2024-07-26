import { TERM_CREATE_API, TERM_DELETE_API, TERM_GET_ALL_API, TERM_GET_ALL_BY_PAGE_API } from "@/helpers/api-routes";
import { getAuthHeader } from "@/helpers/auth-helper";


export const getAllTermsByPage = async (
	page = 0,
	size = 20,
	sort = "startDate",
	type = "desc"
) => {
	const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

	return fetch(`${TERM_GET_ALL_BY_PAGE_API}?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const getAllTerms = async () => {
	return fetch(`${TERM_GET_ALL_API}`, {
		headers: await getAuthHeader(),
	});
};

export const createTerm = async (payload) => {
	return fetch(`${TERM_CREATE_API}`, {
		method: "post",
		body: JSON.stringify(payload),
		headers: await getAuthHeader(),
	});
};

export const deleteTerm = async (id) => {
	return fetch(`${TERM_DELETE_API}/${id}`, {
		method: "delete",
		headers: await getAuthHeader(),
	});
};
