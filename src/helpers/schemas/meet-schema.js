import * as Yup from "yup";
import { isLater } from "../date-time";
import { isStringArray } from "../form-validation";

export const MeetSchema = Yup.object({
	date: Yup.date()
		.typeError("Invalid date format")
		.min(new Date(), "Invalid date")
		.required("Required"),
	description: Yup.string()
		.min(2, "Min 2 chars")
		.max(16, "Max 16 chars")
		.required("Required"),
	startTime: Yup.string().required("Required"),
	stopTime: Yup.string()
		.test(
			"isLater",
			"End time must be later than start time",
			(val, context) => {
				return isLater(context.parent.startTime, val);
			}
		)
		.required("Required"),
	studentIds: Yup.string()
		.test("isArray", "Invalid", (val) => {
			return isStringArray(val);
		})
		.required("Required"),
});
