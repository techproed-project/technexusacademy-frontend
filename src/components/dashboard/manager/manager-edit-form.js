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
	BackButton,PasswordInput
} from "@/components/common/form-fields";
import { swAlert } from "@/helpers/swal";
import { useRouter } from "next/navigation";
import { updateManagerAction } from "@/actions/manager-actions";

const ManagerEditForm = ({ user }) => {
	const [state, dispatch] = useFormState(
		updateManagerAction,
		initialResponse
	);
	const router = useRouter();

	if (state.message) {
		swAlert(state.message, state.ok ? "success" : "error");
		if (state.ok) router.push("/dashboard/manager");
	}

	return (
		<FormContainer title="Edit">
			<Form action={dispatch} noValidate>
				<input type="hidden" name="id" value={user.userId} />
				<Row xs={1} md={2} xl={3}>
					<Col>
						<TextInput
							type="text"
							name="name"
							className="mb-3"
							label="First name"
							defaultValue={user.name}
							error={state?.errors?.name}
						/>
					</Col>
					<Col>
						<TextInput
							type="text"
							name="surname"
							className="mb-3"
							label="Last name"
							defaultValue={user.surname}
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
							defaultValue={user.gender}
							error={state?.errors?.gender}
						/>
					</Col>
					<Col>
						<TextInput
							type="date"
							name="birthDay"
							className="mb-3"
							label="Date of birth"
							defaultValue={user.birthDay}
							error={state?.errors?.birthDay}
						/>
					</Col>
					<Col>
						<TextInput
							type="text"
							name="birthPlace"
							className="mb-3"
							label="Place of birth"
							defaultValue={user.birthPlace}
							error={state?.errors?.birthPlace}
						/>
					</Col>
					<Col>
						<MaskedInput
							type="text"
							mask="999-999-9999"
							name="phoneNumber"
							className="mb-3"
							label="Phone number"
							value={user.phoneNumber}
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
							value={user.ssn}
							error={state?.errors?.ssn}
						/>
					</Col>
					<Col>
						<TextInput
							type="text"
							name="username"
							className="mb-3"
							label="Username"
							defaultValue={user.username}
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

				<BackButton className="me-3" />
				<SubmitButton title="Update" />
			</Form>
		</FormContainer>
	);
};

export default ManagerEditForm;
