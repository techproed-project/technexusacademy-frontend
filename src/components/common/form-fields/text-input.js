import React from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

const TextInput = ({ error, label, className, ...rest }) => {
	return (
		<FormGroup className={className} controlId="formBasicEmail">
			<FormLabel>{label}</FormLabel>
			<FormControl isInvalid={!!error} size="lg" {...rest} />
			<FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
		</FormGroup>
	);
};

export default TextInput;
