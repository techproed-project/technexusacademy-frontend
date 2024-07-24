import React, { useState } from "react";
import { FormControl, FormGroup, FormLabel, InputGroup } from "react-bootstrap";

const PasswordInput = ({ error, label, className, ...rest }) => {
	const [type, setType] = useState("password");

	const handleClick = () => {
		setType((prev) => (prev === "password" ? "text" : "password"));
	};

	return (
		<FormGroup className={className} controlId={rest.name}>
			<FormLabel>{label}</FormLabel>

			<InputGroup className="mb-3">
				<FormControl
					type={type}
					isInvalid={!!error}
					size="lg"
					{...rest}
				/>
				<InputGroup.Text
					id="password"
					onClick={handleClick}
					style={{ cursor: "pointer" }}
				>
					{type === "password" ? (
						<i className="pi pi-eye"></i>
					) : (
						<i className="pi pi-eye-slash"></i>
					)}
				</InputGroup.Text>

				<FormControl.Feedback type="invalid">
					{error}
				</FormControl.Feedback>
			</InputGroup>
		</FormGroup>
	);
};

export default PasswordInput;
