import {
	LESSON_CREATE_API,
	LESSON_DELETE_API,
	LESSON_GET_ALL_API,
	LESSON_GET_ALL_BY_PAGE_API,
} from "@/helpers/api-routes";
import { getAuthHeader } from "@/helpers/auth-helper";

export const getAllLessonsByPage = async (
	page = 0,
	size = 20,
	sort = "lessonName",
	type = "asc"
) => {
	const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

	return fetch(`${LESSON_GET_ALL_BY_PAGE_API}?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const getAllLessons = async () => {
	return fetch(`${LESSON_GET_ALL_API}`, {
		headers: await getAuthHeader(),
	});
};

export const createLesson = async (payload) => {
	return fetch(`${LESSON_CREATE_API}`, {
		method: "post",
		body: JSON.stringify(payload),
		headers: await getAuthHeader(),
	});
};

export const deleteLesson = async (id) => {
	return fetch(`${LESSON_DELETE_API}/${id}`, {
		method: "delete",
		headers: await getAuthHeader(),
	});
};
