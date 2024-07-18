import { LOGIN_API } from "@/helpers/api-routes";

export const login = (payload) => {
	return fetch(LOGIN_API, {
		method: "post",
		body: JSON.stringify(payload),
		headers: {
			"Content-Type": "application/json",
		},
	});
};
