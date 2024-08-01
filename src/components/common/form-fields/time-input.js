"use client";
import moment from "moment";
import { Calendar } from "primereact/calendar";
import React, { useEffect, useState } from "react";
import { FormGroup, FormLabel } from "react-bootstrap";

const TimeInput = ({ error, label, className, value, ...rest }) => {
	const [val, setVal] = useState("");

	useEffect(() => {
		if (value) {
			const today = moment().format("YYYY-MM-DD");
			setVal(new Date(`${today} ${value}`));
		}
	}, [value]);

	return (
		<FormGroup className={className} controlId={rest.name}>
			<FormLabel>{label}</FormLabel>
			<div>
				<Calendar
					timeOnly
					{...rest}
					value={val}
					onChange={(e) => setVal(e.value)}
					className={`form-control form-control-lg ${error ? "is-invalid" : ""}`}
				/>
			</div>
			{error ? (
				<div className="invalid-feedback d-block">{error}</div>
			) : null}
		</FormGroup>
	);
};

export default TimeInput;
