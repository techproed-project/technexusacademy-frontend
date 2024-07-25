"use server";

import {
	convertFormDataToJSON,
	response,
	transformYupErrors,
	YupValiationError,
} from "@/helpers/form-validation";
import { LessonSchema } from "@/helpers/schemas/lesson-schema";
import { createLesson, deleteLesson } from "@/services/lesson-service";
import { revalidatePath } from "next/cache";

export const createLessonAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJSON(formData);

		LessonSchema.validateSync(fields, { abortEarly: false });

		const res = await createLesson(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message);
		}

		revalidatePath("/dashboard/lesson");
		return response(true, data?.message);
	} catch (err) {
		if (err instanceof YupValiationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const deleteLesonAction = async (id) => {
	if (!id) throw new Error("Id is missing");

	const res = await deleteLesson(id);
	const data = await res.json();

	if (!res.ok) {
		return response(false, data?.message);
	}

	revalidatePath("/dashboard/lesson");
	return response(true, data?.message);
};
