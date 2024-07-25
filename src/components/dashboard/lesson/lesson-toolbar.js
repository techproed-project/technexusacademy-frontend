import { deleteLessonAction } from "@/actions/lesson-actions";
import { swAlert, swConfirm } from "@/helpers/swal";
import React from "react";
import { Button } from "react-bootstrap";

const LessonToolbar = (row) => {
	const handleDelete = async () => {
		const answer = await swConfirm("Are you sure to delete?");
		if (!answer.isConfirmed) return;

		const res = await deleteLessonAction(row.lessonId);

		swAlert(res.message, res.ok ? "success" : "error");
	};

	if (row.built_in) return null;

	return (
		<Button variant="link" onClick={handleDelete}>
			<i className="pi pi-trash"></i>
		</Button>
	);
};

export default LessonToolbar;
