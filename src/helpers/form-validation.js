export { ValidationError as YupValiationError } from "yup";

export const convertFormDataToJSON = (formData) => {
	return Object.fromEntries(formData.entries());
};

export const response = (ok, message, errors) => ({
	ok,
	message,
	errors,
});

export const initialResponse = response(false, "", {});


export const transformYupErrors = (errors) => {
    const errObject = {};
    errors.forEach( error=> (errObject[error.path] = error.message) )

    return response(false, "", errObject)
}