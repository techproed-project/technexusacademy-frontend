import * as Yup from "yup";
import { getGenderValues } from "../misc";

const genders = getGenderValues();

export const StudentSchema = Yup.object({
	name: Yup.string().required("Required"),
	surname: Yup.string().required("Required"),
	gender: Yup.string().oneOf(genders, "Invalid gender").required("Required"),
	birthDay: Yup.date()
		.typeError("Invalid date")
		.max(new Date(), "Invalid birthdate")
		.required("Required"),
	birthPlace: Yup.string().required("Required"),
	phoneNumber: Yup.string()
		.matches(/\d{3}-\d{3}-\d{4}/, "Invalid format. (###-###-####)")
		.required("Required"),
	ssn: Yup.string()
		.matches(/\d{3}-\d{2}-\d{4}/, "Invalid format. (###-##-####)")
		.required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
	advisorTeacherId: Yup.string().required("Required"),
	fatherName: Yup.string().required("Required"),
	motherName: Yup.string().required("Required"),
	username: Yup.string().required("Required"),
	password: Yup.string()
		.min(8, "Min 8 chars")
		.matches(/[a-z]+/, "At least one lowercase")
		.matches(/[A-Z]+/, "At least one uppercase")
		.matches(/\d+/, "At least one number")
		.required("Required"),
	confirmPassword: Yup.string().oneOf(
		[Yup.ref("password")],
		"Passwords don't match"
	),
});

export const ChooseLessonSchema = Yup.object({
	lessonProgramId: Yup.string().test("isArray", "Required", (val) => {
		return isStringArray(val);
	}),
});
