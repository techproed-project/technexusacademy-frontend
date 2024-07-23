"use server";

import {
	convertFormDataToJSON,
	response,
	transformYupErrors,
	YupValiationError,
} from "@/helpers/form-validation";
import { AdminSchema } from "@/helpers/schemas/admin-schema";
import {
	createManager,
	deleteManager,
	updateManager,
} from "@/services/manager-service";
import { revalidatePath } from "next/cache";

export const createManagerAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJSON(formData);

		AdminSchema.validateSync(fields, { abortEarly: false });

		const res = await createManager(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message);
		}

		revalidatePath("/dashboard/manager");
		return response(true, data?.message);
	} catch (err) {
		if (err instanceof YupValiationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const updateManagerAction = async (prevState, formData) => {
	if (!formData.get("id"))
		throw new Error("Id is missing in update manager action");

	try {
		const fields = convertFormDataToJSON(formData);

		AdminSchema.validateSync(fields, { abortEarly: false });

		const res = await updateManager(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message);
		}

		revalidatePath("/dashboard/manager");
		return response(true, data?.message);
	} catch (err) {
		if (err instanceof YupValiationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const deleteManagerAction = async (id) => {
	if (!id) throw new Error("Id is missing");

	const res = await deleteManager(id);
	const data = await res.json();

	console.log(data)

	if (!res.ok) {
		return response(false, data?.message);
	}

	revalidatePath("/dashboard/manager");
	return response(true, data?.message);
};
