import { Calendar } from "primereact/calendar";
import React from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

const DateInput = ({ error, label, className, ...rest }) => {
	return (
		<FormGroup className={className} controlId={rest.name}>
			<FormLabel>{label}</FormLabel>
			<FormControl isInvalid={!!error} size="lg" {...rest} as={Calendar} />
			<FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
		</FormGroup>
	);
};

export default DateInput;
