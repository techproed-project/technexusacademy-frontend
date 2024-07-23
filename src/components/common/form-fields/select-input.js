import React from "react";
import { FormControl, FormGroup, FormLabel, FormSelect } from "react-bootstrap";

const SelectInput = (props) => {
	const {
		options,
		optionValue,
		optionLabel,
		error,
		label,
		className,
		...rest
	} = props;

	return (
		<FormGroup className={className} controlId="formBasicEmail">
			<FormLabel>{label}</FormLabel>

			<FormSelect isInvalid={!!error} size="lg" {...rest}>
				<option defaultValue="" disabled>
					Select
				</option>
				{options.map((item) => (
					<option
						key={item[optionValue]}
						defaultValue={item[optionValue]}
					>
						{item[optionLabel]}
					</option>
				))}
			</FormSelect>

			<FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
		</FormGroup>
	);
};

export default SelectInput;
