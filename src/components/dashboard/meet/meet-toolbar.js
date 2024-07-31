import { deleteMeetAction } from "@/actions/meet-actions";
import { swAlert, swConfirm } from "@/helpers/swal";
import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";

const MeetToolbar = (row) => {
	const handleDelete = async () => {
		const answer = await swConfirm("Are you sure to delete?");
		if (!answer.isConfirmed) return;

		const res = await deleteMeetAction(row.id);

		swAlert(res.message, res.ok ? "success" : "error");
	};

	if (row.built_in) return null;

	return (
		<div className="d-flex align-items-center gap-3 justify-content-end">
			<Link href={`/dashboard/meet/${row.id}`}>
				<i className="pi pi-pen-to-square"></i>
			</Link>

			<Button variant="link" onClick={handleDelete}>
				<i className="pi pi-trash"></i>
			</Button>
		</div>
	);
};

export default MeetToolbar;
