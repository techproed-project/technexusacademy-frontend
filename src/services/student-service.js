import {
	STUDENT_ASSIGN_PROGRAM_API,
	STUDENT_CREATE_API,
	STUDENT_DELETE_API,
	STUDENT_GET_ALL_API,
	STUDENT_GET_ALL_BY_ADVISOR_API,
	STUDENT_GET_ALL_BY_PAGE_API,
	STUDENT_GET_BY_ID_API,
	STUDENT_UPDATE_API,
} from "@/helpers/api-routes";
import { getAuthHeader } from "@/helpers/auth-helper";

export const getAllStudentsByPage = async (
	page = 0,
	size = 20,
	sort = "name",
	type = "asc"
) => {
	const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

	return fetch(`${STUDENT_GET_ALL_BY_PAGE_API}?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const getAllStudents = async () => {
	return fetch(`${STUDENT_GET_ALL_API}`, {
		headers: await getAuthHeader(),
	});
};

export const getAllStudentsByAdvisor = async () => {
	return fetch(`${STUDENT_GET_ALL_BY_ADVISOR_API}`, {
		headers: await getAuthHeader(),
	});
};

export const getStudentById = async (id) => {
	return fetch(`${STUDENT_GET_BY_ID_API}?id=${id}`, {
		headers: await getAuthHeader(),
	});
};

export const createStudent = async (payload) => {
	return fetch(`${STUDENT_CREATE_API}`, {
		method: "post",
		body: JSON.stringify(payload),
		headers: await getAuthHeader(),
	});
};

export const deleteStudent = async (id) => {
	return fetch(`${STUDENT_DELETE_API}/${id}`, {
		method: "delete",
		headers: await getAuthHeader(),
	});
};

export const updateStudent = async (payload) => {
	return fetch(`${STUDENT_UPDATE_API}/${payload.id}`, {
		method: "put",
		body: JSON.stringify(payload),
		headers: await getAuthHeader(),
	});
};

export const assignProgramToStudent = async (payload) => {
	return fetch(`${STUDENT_ASSIGN_PROGRAM_API}`, {
		method: "post",
		body: JSON.stringify(payload),
		headers: await getAuthHeader(),
	});
};
