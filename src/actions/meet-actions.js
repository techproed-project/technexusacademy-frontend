"use server";

import {
	convertFormDataToJSON,
	response,
	transformYupErrors,
	YupValiationError,
} from "@/helpers/form-validation";
import { MeetSchema } from "@/helpers/schemas/meet-schema";
import { createMeet, deleteMeet, updateMeet } from "@/services/meet-service";
import { revalidatePath } from "next/cache";

export const createMeetAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJSON(formData);

		MeetSchema.validateSync(fields, { abortEarly: false });

		const payload = {
			...fields,
			studentIds: JSON.parse(fields.studentIds),
		};

		const res = await createMeet(payload);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message);
		}

		revalidatePath("/dashboard/meet");
		return response(true, data?.message);
	} catch (err) {
		if (err instanceof YupValiationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const updateMeetAction = async (prevState, formData) => {
	if (!formData.get("id"))
		throw new Error("Id is missing in update manager action");

	try {
		const fields = convertFormDataToJSON(formData);

		MeetSchema.validateSync(fields, { abortEarly: false });

		const payload = {
			...fields,
			studentIds: JSON.parse(fields.studentIds),
		};

		const res = await updateMeet(payload);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message);
		}

		revalidatePath("/dashboard/meet");
		revalidatePath(`/dashboard/meet/${fields.id}`);
		return response(true, data?.message);
	} catch (err) {
		if (err instanceof YupValiationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const deleteMeetAction = async (id) => {
	if (!id) throw new Error("Id is missing");

	const res = await deleteMeet(id);
	const data = await res.json();

	if (!res.ok) {
		return response(false, data?.message);
	}

	revalidatePath("/dashboard/meet");
	return response(true, data?.message);
};
