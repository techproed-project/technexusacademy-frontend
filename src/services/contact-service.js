import {
	CONTACT_CREATE_API,
	CONTACT_GET_ALL_BY_PAGE_API,
} from "@/helpers/api-routes";
import { getAuthHeader } from "@/helpers/auth-helper";

export const getAllMessagesByPage = async (
	page = 0,
	size = 20,
	sort = "date",
	type = "desc"
) => {
	const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

	return fetch(`${CONTACT_GET_ALL_BY_PAGE_API}?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const createMessage = (payload) => {
	return fetch(CONTACT_CREATE_API, {
		method: "post",
		body: JSON.stringify(payload),
		headers: {
			"Content-Type": "application/json",
		},
	});
};
