"use server";

import {
	convertFormDataToJSON,
	response,
	transformYupErrors,
	YupValiationError,
} from "@/helpers/form-validation";
import { AdminSchema } from "@/helpers/schemas/admin-schema";
import {
	createAssistant,
	deleteAssistant,
	updateAssistant,
} from "@/services/assistant-service";
import { revalidatePath } from "next/cache";

export const createAssistantAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJSON(formData);

		AdminSchema.validateSync(fields, { abortEarly: false });

		const res = await createAssistant(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message);
		}

		revalidatePath("/dashboard/assistant-manager");
		return response(true, data?.message);
	} catch (err) {
		if (err instanceof YupValiationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const updateAssistantAction = async (prevState, formData) => {
	if (!formData.get("id"))
		throw new Error("Id is missing in update manager action");

	try {
		const fields = convertFormDataToJSON(formData);

		AdminSchema.validateSync(fields, { abortEarly: false });

		const res = await updateAssistant(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message);
		}

		revalidatePath("/dashboard/assistant-manager");
		return response(true, data?.message);
	} catch (err) {
		if (err instanceof YupValiationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const deleteAssistantAction = async (id) => {
	if (!id) throw new Error("Id is missing");

	const res = await deleteAssistant(id);
	const data = await res.json();

	if (!res.ok) {
		return response(false, data?.message);
	}

	revalidatePath("/dashboard/assistant-manager");
	return response(true, data?.message);
};
