import { CREATE_CONTACT_API } from "@/helpers/api-routes";

export const createMessage = (payload) => {
	return fetch(CREATE_CONTACT_API, {
		method: "post",
		body: JSON.stringify(payload),
		headers: {
			"Content-Type": "application/json",
		},
	});
};
