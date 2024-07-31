import * as Yup from "yup";
import { getTermValues } from "../misc";

const terms = getTermValues();

export const TermSchema = Yup.object({
	term: Yup.string().oneOf(terms, "Invalid term").required("Required"),
	startDate: Yup.date()
		.typeError("Invalid date format")
		.min(new Date(), "Invalid date")
		.required("Required"),
	endDate: Yup.date()
		.typeError("Invalid date format")
		.min(Yup.ref("startDate"), "Invalid date")
		.required("Required"),
	lastRegistrationDate: Yup.date()
		.typeError("Invalid date format")
		.max(Yup.ref("startDate"), "Invalid date")
		.required("Required"),
});
