"use server";

import {
	convertFormDataToJSON,
	response,
	transformYupErrors,
	YupValiationError,
} from "@/helpers/form-validation";
import { AdminSchema } from "@/helpers/schemas/admin-schema";
import { createAdmin, deleteAdmin } from "@/services/admin-service";
import { revalidatePath } from "next/cache";

export const createAdminAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJSON(formData);

		AdminSchema.validateSync(fields, { abortEarly: false });

		const res = await createAdmin(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message);
		}

		revalidatePath("/dashboard/admin");
		return response(true, data?.message);
	} catch (err) {
		if (err instanceof YupValiationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const deleteAdminAction = async (id) => {
	if (!id) throw new Error("Id is missing");

	const res = await deleteAdmin(id);
	const data = await res.text();

	if (!res.ok) {
		return response(false, data);
	}

	revalidatePath("/dashboard/admin");
	return response(true, data);
};
