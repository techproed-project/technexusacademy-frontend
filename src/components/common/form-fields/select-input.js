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

	console.log(options)

	return (
		<FormGroup className={className} controlId={rest.name}>
			<FormLabel>{label}</FormLabel>

			<FormSelect isInvalid={!!error} size="lg" {...rest}>
				<option value="" disabled>
					Select
				</option>
				{options.map((item) => (
					<option
						key={item[optionValue]}
						value={item[optionValue]}
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
