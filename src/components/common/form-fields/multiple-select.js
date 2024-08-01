"use client";
import { MultiSelect } from "primereact/multiselect";
import React, { useState } from "react";
import { FormGroup, FormLabel } from "react-bootstrap";

const MultipleSelect = ({ name, error, label, className, values, ...rest }) => {
	const [selectedItems, setSelectedItems] = useState(values || []);

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
					className="w-100 form-control-lg"
					value={selectedItems}
					onChange={(e) => setSelectedItems(e.value)}
				/>
			</div>
			{error ? <div className="invalid-feedback d-block">{error}</div> : null}
		</FormGroup>
	);
};

export default MultipleSelect;
