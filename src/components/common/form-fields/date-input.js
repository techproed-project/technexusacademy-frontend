"use client";
import { Calendar } from "primereact/calendar";
import React, { useState } from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

const DateInput = ({ error, label, className, value, ...rest }) => {
	const [val, setVal] = useState(value);
	return (
		<FormGroup className={className} controlId={rest.name}>
			<FormLabel>{label}</FormLabel>
			<div>
				<Calendar
					{...rest}
					value={val}
					onChange={(e) => setVal(e.value)}
					className="form-control"
				/>
			</div>
			<FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
		</FormGroup>
	);
};

export default DateInput;
