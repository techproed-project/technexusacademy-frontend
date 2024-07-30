"use server";

import {
	convertFormDataToJSON,
	response,
	transformYupErrors,
	YupValiationError,
} from "@/helpers/form-validation";
import { ProgramAssignmentSchema } from "@/helpers/schemas/program-assignment-schema";
import { TeacherSchema } from "@/helpers/schemas/teacher-schema";
import {
	assignProgramToTeacher,
	createTeacher,
	deleteTeacher,
	updateTeacher,
} from "@/services/teacher-service";
import { revalidatePath } from "next/cache";

export const createTeacherAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJSON(formData);

		TeacherSchema.validateSync(fields, { abortEarly: false });

		const payload = { 
			...fields,
			lessonsIdList: JSON.parse(fields.lessonsIdList)
		}

		const res = await createTeacher(payload);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message);
		}

		revalidatePath("/dashboard/teacher");
		return response(true, data?.message);
	} catch (err) {
		if (err instanceof YupValiationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const updateTeacherAction = async (prevState, formData) => {
	if (!formData.get("id"))
		throw new Error("Id is missing in update teacher action");

	try {
		const fields = convertFormDataToJSON(formData);

		TeacherSchema.validateSync(fields, { abortEarly: false });

		const payload = { 
			...fields,
			lessonsIdList: JSON.parse(fields.lessonsIdList)
		}

		const res = await updateTeacher(payload);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message);
		}

		revalidatePath("/dashboard/teacher");
		revalidatePath(`/dashboard/teacher/${fields.id}`);
		
		return response(true, data?.message);
	} catch (err) {
		if (err instanceof YupValiationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const deleteTeacherAction = async (id) => {
	if (!id) throw new Error("Id is missing");

	const res = await deleteTeacher(id);
	const data = await res.json();

	if (!res.ok) {
		return response(false, data?.message);
	}

	revalidatePath("/dashboard/teacher");
	return response(true, data?.message);
};

export const assignProgramToTeacherAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJSON(formData);
	
		ProgramAssignmentSchema.validateSync(fields, { abortEarly: false });

		const payload = {
			...fields,
			lessonProgramId: JSON.parse(fields.lessonProgramId).map(
				(item) => item.lessonProgramId
			),
		};


		const res = await assignProgramToTeacher(payload);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message);
		}

		revalidatePath("/dashboard/program");
		return response(true, data?.message);
	} catch (err) {
		if (err instanceof YupValiationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};
