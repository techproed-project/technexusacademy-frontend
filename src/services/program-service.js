import {
	PROGRAM_CREATE_API,
	PROGRAM_DELETE_API,
	PROGRAM_GET_ALL_API,
	PROGRAM_GET_ALL_BY_PAGE_API,
	PROGRAM_GET_ASSIGNED_API,
	PROGRAM_GET_BY_ID_API,
	PROGRAM_GET_STUDENT_API,
	PROGRAM_GET_TEACHER_API,
	PROGRAM_GET_UNASSIGNED_API,
} from "@/helpers/api-routes";
import { getAuthHeader } from "@/helpers/auth-helper";

export const getAllProgramsByPage = async (
	page = 0,
	size = 20,
	sort = "day",
	type = "asc"
) => {
	const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

	return fetch(`${PROGRAM_GET_ALL_BY_PAGE_API}?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const getAllPrograms = async () => {
	return fetch(`${PROGRAM_GET_ALL_API}`, {
		headers: await getAuthHeader(),
	});
};

export const getProgramsById = async (id) => {
	return fetch(`${PROGRAM_GET_BY_ID_API}/${id}`, {
		headers: await getAuthHeader(),
	});
};

export const getAssignedPrograms = async () => {
	return fetch(`${PROGRAM_GET_ASSIGNED_API}`, {
		headers: await getAuthHeader(),
	});
};

export const getUnAssignedPrograms = async () => {
	return fetch(`${PROGRAM_GET_UNASSIGNED_API}`, {
		headers: await getAuthHeader(),
	});
};

export const getProgramsByTeacher = async () => {
	return fetch(`${PROGRAM_GET_TEACHER_API}`, {
		headers: await getAuthHeader(),
	});
};

export const getProgramsByStudent = async () => {
	return fetch(`${PROGRAM_GET_STUDENT_API}`, {
		headers: await getAuthHeader(),
	});
};

export const createProgram = async (payload) => {
	return fetch(`${PROGRAM_CREATE_API}`, {
		method: "post",
		body: JSON.stringify(payload),
		headers: await getAuthHeader(),
	});
};

export const deleteProgram = async (id) => {
	return fetch(`${PROGRAM_DELETE_API}/${id}`, {
		method: "delete",
		headers: await getAuthHeader(),
	});
};
