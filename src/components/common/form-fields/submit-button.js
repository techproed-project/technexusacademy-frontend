"use client";
import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { useFormStatus } from "react-dom";

const SubmitButton = ({
	title,
	icon,
	spinnerVariant = "secondary",
	...rest
}) => {
	const { pending } = useFormStatus();

	return (
		<Button type="submit" disabled={pending} size="lg" {...rest}>
			{pending && <Spinner variant={spinnerVariant} size="sm" />}
			{icon && (
				<>
					<i className={`pi pi-${icon}`}></i>&nbsp;
				</>
			)}
			{title}
		</Button>
	);
};

export default SubmitButton;
