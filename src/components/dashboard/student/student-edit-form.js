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
	PasswordInput,
	DateInput,
} from "@/components/common/form-fields";
import { swAlert } from "@/helpers/swal";
import { useRouter } from "next/navigation";
import { updateStudentAction } from "@/actions/student-actions";

const StudentEditForm = ({ user, advisorTeachers }) => {
	const [state, dispatch] = useFormState(
		updateStudentAction,
		initialResponse
	);
	const router = useRouter();

	if (state.message) {
		swAlert(state.message, state.ok ? "success" : "error");
		if (state.ok) router.push("/dashboard/student");
	}

	return (
		<FormContainer title="Edit">
			<Form action={dispatch} noValidate>
				<input type="hidden" name="id" value={user.id} />
				<Row>
					<Col md={6} lg={4}>
						<TextInput
							type="text"
							name="name"
							className="mb-3"
							label="First name"
							defaultValue={user.name}
							error={state?.errors?.name}
						/>
					</Col>
					<Col md={6} lg={4}>
						<TextInput
							type="text"
							name="surname"
							className="mb-3"
							label="Last name"
							defaultValue={user.surname}
							error={state?.errors?.surname}
						/>
					</Col>
					<Col md={6} lg={4}>
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
					<Col md={6} lg={4}>
						<DateInput
							name="birthDay"
							className="mb-3"
							label="Date of birth"
							maxDate={new Date()}
							dateFormat="yy-mm-dd"
							value={user.birthDay}
							error={state?.errors?.birthDay}
						/>
					</Col>
					<Col md={6} lg={4}>
						<TextInput
							type="text"
							name="birthPlace"
							className="mb-3"
							label="Place of birth"
							defaultValue={user.birthPlace}
							error={state?.errors?.birthPlace}
						/>
					</Col>
					<Col md={6} lg={4}>
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
					<Col md={6} lg={4}>
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
					<Col md={6} lg={4}>
						<TextInput
							type="text"
							name="email"
							className="mb-3"
							label="Email"
							defaultValue={user.email}
							error={state?.errors?.email}
						/>
					</Col>

					<Col md={6} lg={4}>
						<TextInput
							type="text"
							name="motherName"
							className="mb-3"
							label="Mother"
							defaultValue={user.motherName}
							error={state?.errors?.motherName}
						/>
					</Col>
					<Col md={6} lg={4}>
						<TextInput
							type="text"
							name="fatherName"
							className="mb-3"
							label="Father"
							defaultValue={user.fatherName}
							error={state?.errors?.fatherName}
						/>
					</Col>
					<Col md={6} lg={4}>
						<SelectInput
							name="advisorTeacherId"
							className="mb-3"
							label="Advisor"
							error={state?.errors?.advisorTeacherId}
							options={advisorTeachers}
							optionLabel="label"
							optionValue="value"
							defaultValue={user.advisorTeacherId}
						/>
					</Col>
					<Col md={6} lg={4}>
						<TextInput
							type="text"
							name="username"
							className="mb-3"
							label="Username"
							defaultValue={user.username}
							error={state?.errors?.username}
						/>
					</Col>
					<Col md={6} lg={4}>
						<PasswordInput
							name="password"
							className="mb-3"
							label="Password"
							error={state?.errors?.password}
						/>
					</Col>
					<Col md={6} lg={4}>
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

export default StudentEditForm;
