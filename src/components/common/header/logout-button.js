"use client";
import { logoutAction } from "@/actions/auth-actions";
import { swConfirm } from "@/helpers/swal";
import React from "react";
import { Button } from "react-bootstrap";

const LogoutButton = (props) => {
	const handleLogout = async () => {
		const res = await swConfirm("Are you sure to logout?");
		if (!res.isConfirmed) return;

		await logoutAction();
	};

	return (
		<Button
			variant="link"
			className="nav-link text-start"
			onClick={() => handleLogout()}
			{...props}
		>
			<i className="pi pi-sign-out"></i> LOGOUT
		</Button>
	);
};

export default LogoutButton;
