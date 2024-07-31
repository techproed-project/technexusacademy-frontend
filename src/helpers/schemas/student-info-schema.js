import * as Yup from "yup";

export const StudentInfoSchema = Yup.object({
	absentee: Yup.number()
		.typeError("Invalid")
		.min(0, "Min 0")
		.required("Required"),
	educationTermId: Yup.number().typeError("Invalid").required("Required"),
	lessonId: Yup.number().typeError("Invalid").required("Required"),
	studentId: Yup.number().typeError("Invalid").required("Required"),
	finalExam: Yup.number()
		.typeError("Invalid")
		.min(0, "Min 0")
		.max(100, "Max 100")
		.required("Required"),
	midtermExam: Yup.number()
		.typeError("Invalid")
		.min(0, "Min 0")
		.max(100, "Max 100")
		.required("Required"),
	infoNote: Yup.string().min(10, "Min 10 chars").required("Required"),
});
