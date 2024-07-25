import * as Yup from "yup";
import { getDayValues } from "../misc";

export const ProgramSchema = Yup.object({
	lessonIdList: Yup.string()
		.test("isArr", "Required", (val) => {
			const arr = JSON.parse(val);
			return Array.isArray(arr) && arr.length > 0;
		})
		.required("Required"),
	day: Yup.string().oneOf(getDayValues(), "Invalid day").required("Required"),
	educationTermId: Yup.string().required("Required"),
	startTime: Yup.string().required("Required"),
	stopTime: Yup.string()
		.test("isLater", "Must be later than start time", (val, context) =>
			isLater(context.parent.startTime, val)
		)
		.required("Required"),
});
