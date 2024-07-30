"use server";

import {
	convertFormDataToJSON,
	response,
	transformYupErrors,
	YupValiationError,
} from "@/helpers/form-validation";
import { ContactSchema } from "@/helpers/schemas/contact-schema";
import { createMessage } from "@/services/contact-service";
import { revalidatePath } from "next/cache";

export const createContactAction = async (prevData, formData) => {
	try {
		const fields = convertFormDataToJSON(formData);

		ContactSchema.validateSync(fields, { abortEarly: false });

		const res = await createMessage(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, "", data?.validations);
		}

		revalidatePath("/dashboard/contact-message");
		return response(true, "Your message was sent");
	} catch (err) {
		if (err instanceof YupValiationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};
