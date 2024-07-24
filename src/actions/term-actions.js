"use server";

import {
	convertFormDataToJSON,
	response,
	transformYupErrors,
	YupValiationError,
} from "@/helpers/form-validation";
import { TermSchema } from "@/helpers/schemas/term-schema";
import { createTerm, deleteTerm } from "@/services/term-service";
import { revalidatePath } from "next/cache";

export const createTermAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJSON(formData);

		TermSchema.validateSync(fields, { abortEarly: false });

		const res = await createTerm(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message);
		}

		revalidatePath("/dashboard/education-term");
		return response(true, data?.message);
	} catch (err) {
		if (err instanceof YupValiationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const deleteTermAction = async (id) => {
	if (!id) throw new Error("Id is missing");

	const res = await deleteTerm(id);
	const data = await res.json();

	if (!res.ok) {
		return response(false, data?.message);
	}

	revalidatePath("/dashboard/admin");
	return response(true, data?.message);
};
