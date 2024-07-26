import * as Yup from "yup";
import { isStringArray } from "../form-validation";

export const ProgramAssignmentSchema = Yup.object({
	teacherId: Yup.string().required("Required"),
	lessonProgramId: Yup.string().test("isArray", "Required", (val) => {
		isStringArray(val);
	}),
});
