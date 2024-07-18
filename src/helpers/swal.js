import Swal from "sweetalert2";

export const swAlert = (title, icon = "info", text = "") => {
	Swal.fire({
		title,
		text,
		icon,
	});
};

export const swConfirm = (
	title,
	icon = "warning",
	text = "",
	confirmButtonText = "Yes"
) => {
	return Swal.fire({
		title,
		text,
		icon,
		showCancelButton: true,
		confirmButtonText,
	});
};
