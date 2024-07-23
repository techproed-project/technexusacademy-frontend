"use client"
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import FormContainer from "../common/form-container";
import { createAdminAction } from "@/actions/admin-actions";
import { initialResponse } from "@/helpers/form-validation";
import { config } from "@/helpers/config";
import { useFormState } from "react-dom";
import { SelectInput, TextInput } from "@/components/common/form-fields";

const AdminCreateForm = () => {
	const [state, dispatch] = useFormState(createAdminAction, initialResponse);

	

	return (
		<FormContainer title="New">
			<Form action={dispatch} noValidate>
				<Row>
					<Col>
						<TextInput
							type="text"
							name="name"
							className="mb-3"
							label="First name"
							error={state?.errors?.name}
						/>
					</Col>
					<Col>
						<TextInput
							type="text"
							name="surname"
							className="mb-3"
							label="Last name"
							error={state?.errors?.surname}
						/>
					</Col>
					<Col>
						<SelectInput
							name="gender"
							className="mb-3"
							label="Gender"
							options={config.genders}
							optionValue="value"
							optionLabel="label"
							error={state?.errors?.gender}
						/>
					</Col>
				</Row>
			</Form>
		</FormContainer>
	);
};

export default AdminCreateForm;
