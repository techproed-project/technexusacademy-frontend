"use server";

import {
	convertFormDataToJSON,
	response,
	transformYupErrors,
	YupValiationError,
} from "@/helpers/form-validation";
import { StudentInfoSchema } from "@/helpers/schemas/student-info-schema";
import {
	createStudentInfo,
	deleteStudentInfo,
	updateStudentInfo,
} from "@/services/student-info-service";
import { revalidatePath } from "next/cache";

export const createStudentInfoAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJSON(formData);

		StudentInfoSchema.validateSync(fields, { abortEarly: false });

		const res = await createStudentInfo(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message);
		}

		revalidatePath("/dashboard/student-info");
		return response(true, data?.message);
	} catch (err) {
		if (err instanceof YupValiationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const updateStudentInfoAction = async (prevState, formData) => {
	if (!formData.get("id"))
		throw new Error("Id is missing in update manager action");

	try {
		const fields = convertFormDataToJSON(formData);

		StudentInfoSchema.validateSync(fields, { abortEarly: false });

		const res = await updateStudentInfo(fields);
		const data = await res.json();

		if (!res.ok) {
			
			return response(false, data?.message);
		}

		revalidatePath("/dashboard/student-info");
		revalidatePath(`/dashboard/student-info/${fields.id}`);
		return response(true, data?.message);
	} catch (err) {
		if (err instanceof YupValiationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const deleteStudentInfoAction = async (id) => {
	if (!id) throw new Error("Id is missing");

	const res = await deleteStudentInfo(id);
	const data = await res.json();

	if (!res.ok) {
		return response(false, data?.message);
	}

	revalidatePath("/dashboard/student-info");
	return response(true, data?.message);
};
