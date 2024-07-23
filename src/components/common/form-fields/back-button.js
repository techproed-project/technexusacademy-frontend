"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";

const BackButton = ({ title = "Return Back", icon = "arrow-circle-left", ...rest }) => {
	const router = useRouter();

	const handleClick = () => {
		router.back();
	};

	return (
		<Button type="button" size="lg" {...rest} onClick={handleClick} variant="secondary">
			{icon && <i className={`pi pi-${icon}`}></i>}{" "}
			{title}
		</Button>
	);
};

export default BackButton;
