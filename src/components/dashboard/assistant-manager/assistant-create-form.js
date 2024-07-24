"use client";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import FormContainer from "../common/form-container";
import { initialResponse } from "@/helpers/form-validation";
import { config } from "@/helpers/config";
import { useFormState } from "react-dom";
import {
	MaskedInput,
	SelectInput,
	SubmitButton,
	TextInput,
	BackButton,
} from "@/components/common/form-fields";
import { swAlert } from "@/helpers/swal";
import { useRouter } from "next/navigation";
import { createAssistantAction } from "@/actions/assistant-actions";
import PasswordInput from "@/components/common/form-fields/password-input";

const AssistantCreateForm = () => {
	const [state, dispatch] = useFormState(createAssistantAction, initialResponse);
	const router = useRouter();

	if (state.message) {
		swAlert(state.message, state.ok ? "success" : "error");
		if (state.ok) router.push("/dashboard/assistant-manager");
	}

	return (
		<FormContainer title="New">
			<Form action={dispatch} noValidate>
				<Row xs={1} md={2} xl={3}>
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
							defaultValue=""
							error={state?.errors?.gender}
						/>
					</Col>
					<Col>
						<TextInput
							type="date"
							name="birthDay"
							className="mb-3"
							label="Date of birth"
							error={state?.errors?.birthDay}
						/>
					</Col>
					<Col>
						<TextInput
							type="text"
							name="birthPlace"
							className="mb-3"
							label="Place of birth"
							error={state?.errors?.birthDay}
						/>
					</Col>
					<Col>
						<MaskedInput
							type="text"
							mask="999-999-9999"
							name="phoneNumber"
							className="mb-3"
							label="Phone number"
							error={state?.errors?.phoneNumber}
						/>
					</Col>
					<Col>
						<MaskedInput
							type="text"
							mask="999-99-9999"
							name="ssn"
							className="mb-3"
							label="SSN"
							error={state?.errors?.ssn}
						/>
					</Col>
					<Col>
						<TextInput
							type="text"
							name="username"
							className="mb-3"
							label="Username"
							error={state?.errors?.username}
						/>
					</Col>
					<Col>
						<PasswordInput
							name="password"
							className="mb-3"
							label="Password"
							error={state?.errors?.password}
						/>
					</Col>
					<Col>
						<PasswordInput
							name="confirmPassword"
							className="mb-3"
							label="Confirm Password"
							error={state?.errors?.confirmPassword}
						/>
					</Col>
				</Row>

				<BackButton className="me-3"/>
				<SubmitButton title="Create" />
			</Form>
		</FormContainer>
	);
};

export default AssistantCreateForm;
