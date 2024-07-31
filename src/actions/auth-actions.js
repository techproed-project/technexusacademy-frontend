"use server";

import { AuthError } from "next-auth";

import {
	convertFormDataToJSON,
	response,
	transformYupErrors,
	YupValiationError,
} from "@/helpers/form-validation";
import { AuthSchema } from "@/helpers/schemas/auth-schema";
import { signIn, signOut } from "@/auth";

export const loginAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJSON(formData);

		AuthSchema.validateSync(fields, { abortEarly: false });

		await signIn("credentials", fields);
	} catch (err) {
		if (err instanceof YupValiationError) {
			return transformYupErrors(err.inner);
		} else if (err instanceof AuthError) {
			return response(false, "Invalid credentials");
		}

		throw err;
	}
};

export const logoutAction = async () => {
	await signOut({ redirect: true, redirectTo: "/" });
};
