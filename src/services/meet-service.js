import {
	MEET_CREATE_API,
	MEET_DELETE_API,
	MEET_GET_BY_ID_API,
	MEET_GET_BY_STUDENT_API,
	MEET_GET_BY_TEACHER_API,
	MEET_UPDATE_API,
} from "@/helpers/api-routes";
import { getAuthHeader } from "@/helpers/auth-helper";

export const getAllMeetsByPageForAdvisor = async (page = 0, size = 20) => {
	const qs = `page=${page}&size=${size}`;

	return fetch(`${MEET_GET_BY_TEACHER_API}?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const getAllMeetsForStudent = async () => {
	return fetch(`${MEET_GET_BY_STUDENT_API}`, {
		headers: await getAuthHeader(),
	});
};

export const getMeetById = async (id) => {
	return fetch(`${MEET_GET_BY_ID_API}/${id}`, {
		headers: await getAuthHeader(),
	});
};

export const createMeet = async (payload) => {
	return fetch(`${MEET_CREATE_API}`, {
		method: "post",
		body: JSON.stringify(payload),
		headers: await getAuthHeader(),
	});
};

export const updateMeet = async (payload) => {
	return fetch(`${MEET_UPDATE_API}/${payload.id}`, {
		method: "put",
		body: JSON.stringify(payload),
		headers: await getAuthHeader(),
	});
};

export const deleteMeet = async (id) => {
	return fetch(`${MEET_DELETE_API}/${id}`, {
		method: "delete",
		headers: await getAuthHeader(),
	});
};
