"use client";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import FormContainer from "../common/form-container";
import { initialResponse } from "@/helpers/form-validation";
import { config } from "@/helpers/config";
import { useFormState } from "react-dom";
import {
	SelectInput,
	SubmitButton,
	TextInput,
	BackButton,
	DateInput,
} from "@/components/common/form-fields";
import { swAlert } from "@/helpers/swal";
import { useRouter } from "next/navigation";
import { createTermAction } from "@/actions/term-actions";

const TermCreateForm = () => {
	const [state, dispatch] = useFormState(createTermAction, initialResponse);
	const router = useRouter();

	if (state.message) {
		swAlert(state.message, state.ok ? "success" : "error");
		if (state.ok) router.push("/dashboard/education-term");
	}

	return (
		<FormContainer title="New">
			<Form action={dispatch} noValidate>
				<Row xs={1} md={2} xl={3}>
					<Col>
						<SelectInput
							name="term"
							className="mb-3"
							label="Term"
							options={config.educationTerms}
							optionValue="value"
							optionLabel="label"
							defaultValue=""
							error={state?.errors?.term}
						/>
					</Col>
					<Col>
						<DateInput
							name="startDate"
							className="mb-3"
							label="Start Date"
							minDate={new Date()}
							dateFormat="yy-mm-dd"
							error={state?.errors?.startDate}
						/>
					</Col>
					<Col>
						<DateInput
							name="endDate"
							className="mb-3"
							label="End Date"
							dateFormat="yy-mm-dd"
							error={state?.errors?.endDate}
						/>
					</Col>
					<Col>
						<DateInput
							name="lastRegistrationDate"
							className="mb-3"
							label="Last Registration Date"
							dateFormat="yy-mm-dd"
							error={state?.errors?.lastRegistrationDate}
						/>
					</Col>
				</Row>

				<BackButton className="me-3" />
				<SubmitButton title="Create" />
			</Form>
		</FormContainer>
	);
};

export default TermCreateForm;
