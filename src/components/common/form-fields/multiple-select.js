"use client";
import { MultiSelect } from "primereact/multiselect";
import React, { useState } from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

const MultipleSelect = ({ name, error, label, className, ...rest }) => {
	const [selectedItems, setSelectedItems] = useState([]);

	return (
		<FormGroup className={className} controlId={rest.name}>
			<input
				type="hidden"
				name={name}
				value={JSON.stringify(selectedItems)}
			/>
			<FormLabel>{label}</FormLabel>
			<div>
				<MultiSelect
					{...rest}
                    invalid={!!error}
					className="w-100"
					value={selectedItems}
					onChange={(e) => setSelectedItems(e.value)}
				/>
			</div>
			<FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
		</FormGroup>
	);
};

export default MultipleSelect;
