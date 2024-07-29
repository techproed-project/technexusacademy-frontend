
import { ADVISOR_GET_ALL_API } from "@/helpers/api-routes";
import { getAuthHeader } from "@/helpers/auth-helper";



export const getAllAdvisorTeachers = async () => {
	return fetch(`${ADVISOR_GET_ALL_API}`, {
		headers: await getAuthHeader(),
	});
};
