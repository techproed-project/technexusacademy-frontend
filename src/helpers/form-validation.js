export { ValidationError as YupValiationError } from "yup";

export const convertFormDataToJSON = (formData) => {
	return Object.fromEntries(formData.entries());
};

export const response = (ok, message, errors) => {
	return {
		ok,
		message,
		errors,
	};
};

export const initialResponse = response(false, "", {});

export const transformYupErrors = (errors) => {
	const errObject = {};
	errors.forEach((error) => (errObject[error.path] = error.message));

	return response(false, "", errObject);
};

export const isStringArray = (str) => {
	if (!str) return false;
	const arr = JSON.parse(str);
	return Array.isArray(arr) && arr.length > 0;
};
