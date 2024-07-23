import React from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

import { InputMask } from "primereact/inputmask";

const MaskedInput = ({ error, label, className, ...rest }) => {
	return (
		<FormGroup className={className} controlId={rest.name}>
			<FormLabel>{label}</FormLabel>
			<FormControl
				isInvalid={!!error}
				size="lg"
				{...rest}
				as={InputMask}
			/>
			<FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
		</FormGroup>
	);
};

export default MaskedInput;
