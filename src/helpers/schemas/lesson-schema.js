import * as Yup from "yup";

export const LessonSchema = Yup.object({
	lessonName: Yup.string().required("Required"),
	creditScore: Yup.number()
		.typeError("Invalid score")
		.min(1, "Min 1")
		.max(100, "Max 100")
		.required("Required"),
});
