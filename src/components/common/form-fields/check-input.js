import React from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

const CheckInput = ({ error, label, className, ...rest }) => {
	return (
		<FormGroup className={className} controlId={rest.name}>
			<FormLabel>{label}</FormLabel>
			<div>
				<input type="checkbox" {...rest} id={rest.name} value="true" />
			</div>

			<FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
		</FormGroup>
	);
};

export default CheckInput;
