"use server";

import {
	convertFormDataToJSON,
	response,
	transformYupErrors,
	YupValiationError,
} from "@/helpers/form-validation";
import { ProgramSchema } from "@/helpers/schemas/program-schema";
import { createProgram, deleteProgram } from "@/services/program-service";
import { revalidatePath } from "next/cache";

export const createProgramAction = async (prevState, formData) => {

	try {
		const fields = convertFormDataToJSON(formData);

		ProgramSchema.validateSync(fields, { abortEarly: false });

		const res = await createProgram(fields);
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

export const deleteProgramAction = async (id) => {
	if (!id) throw new Error("Id is missing");

	const res = await deleteProgram(id);
	const data = await res.json();

	if (!res.ok) {
		return response(false, data?.message);
	}

	revalidatePath("/dashboard/program");
	return response(true, data?.message);
};
