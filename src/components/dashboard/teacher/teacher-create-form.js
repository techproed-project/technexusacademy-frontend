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
	CheckInput,
} from "@/components/common/form-fields";
import { swAlert } from "@/helpers/swal";
import { useRouter } from "next/navigation";
import { createTeacherAction } from "@/actions/teacher-actions";
import MultipleSelect from "@/components/common/form-fields/multiple-select";

const TeacherCreateForm = ({programs}) => {
	const [state, dispatch] = useFormState(
		createTeacherAction,
		initialResponse
	);
	const router = useRouter();

	if (state.message) {
		swAlert(state.message, state.ok ? "success" : "error");
		if (state.ok) router.push("/dashboard/teacher");
	}

	return (
		<FormContainer title="New">
			<Form action={dispatch} noValidate>
				<Row>
					<Col md={6} lg={4}>
						<TextInput
							type="text"
							name="name"
							className="mb-3"
							label="First name"
							error={state?.errors?.name}
						/>
					</Col>
					<Col md={6} lg={4}>
						<TextInput
							type="text"
							name="surname"
							className="mb-3"
							label="Last name"
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
							defaultValue=""
							error={state?.errors?.gender}
						/>
					</Col>
					<Col md={6} lg={4}>
						<TextInput
							type="date"
							name="birthDay"
							className="mb-3"
							label="Date of birth"
							error={state?.errors?.birthDay}
						/>
					</Col>
					<Col md={6} lg={4}>
						<TextInput
							type="text"
							name="birthPlace"
							className="mb-3"
							label="Place of birth"
							error={state?.errors?.birthDay}
						/>
					</Col>
					<Col md={6} lg={4}>
						<MaskedInput
							type="text"
							mask="999-999-9999"
							name="phoneNumber"
							className="mb-3"
							label="Phone number"
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
							error={state?.errors?.ssn}
						/>
					</Col>
					<Col md={6} lg={4}>
						<TextInput
							type="text"
							name="email"
							className="mb-3"
							label="Email"
							error={state?.errors?.email}
						/>
					</Col>
					<Col md={6} lg={4}>
						<CheckInput
							name="isAdvisorTeacher"
							className="mb-3"
							label="Is advisor teacher?"
							error={state?.errors?.isAdvisorTeacher}
						/>
					</Col>
					<Col xs={12}>
						<MultipleSelect
							name="lessonsIdList"
							className="mb-3"
							label="Programs"
							error={state?.errors?.lessonsIdList}
							options={programs}
							optionValue="id"
							optionLabel="label"
						/>
					</Col>
					<Col md={6} lg={4}>
						<TextInput
							type="text"
							name="username"
							className="mb-3"
							label="Username"
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
				<SubmitButton title="Create" />
			</Form>
		</FormContainer>
	);
};

export default TeacherCreateForm;
