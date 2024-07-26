import {
	TEACHER_ASSIGN_PROGRAM_API,
	TEACHER_CREATE_API,
	TEACHER_DELETE_API,
	TEACHER_GET_ALL_API,
	TEACHER_GET_ALL_BY_PAGE_API,
	TEACHER_GET_BY_ID_API,
	TEACHER_UPDATE_API,
} from "@/helpers/api-routes";
import { getAuthHeader } from "@/helpers/auth-helper";

export const getAllTeachersByPage = async (
	page = 0,
	size = 20,
	sort = "name",
	type = "asc"
) => {
	const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

	return fetch(`${TEACHER_GET_ALL_BY_PAGE_API}?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const getAllTeachers = async () => {
	return fetch(`${TEACHER_GET_ALL_API}`, {
		headers: await getAuthHeader(),
	});
};

export const getTeacherById = async (id) => {
	return fetch(`${TEACHER_GET_BY_ID_API}/${id}`, {
		headers: await getAuthHeader(),
	});
};

export const createTeacher = async (payload) => {
	return fetch(`${TEACHER_CREATE_API}`, {
		method: "post",
		body: JSON.stringify(payload),
		headers: await getAuthHeader(),
	});
};

export const deleteTeacher = async (id) => {
	return fetch(`${TEACHER_DELETE_API}/${id}`, {
		method: "delete",
		headers: await getAuthHeader(),
	});
};

export const updateTeacher = async (payload) => {
	return fetch(`${TEACHER_UPDATE_API}/${payload.id}`, {
		method: "put",
		body: JSON.stringify(payload),
		headers: await getAuthHeader(),
	});
};

export const assignProgramToTeacher = async (payload) => {
	return fetch(`${TEACHER_ASSIGN_PROGRAM_API}`, {
		method: "post",
		body: JSON.stringify(payload),
		headers: await getAuthHeader(),
	});
};
