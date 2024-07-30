"use client";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import FormContainer from "../common/form-container";
import { initialResponse } from "@/helpers/form-validation";
import { useFormState } from "react-dom";
import {
	SelectInput,
	SubmitButton,
	TextInput,
	BackButton,
} from "@/components/common/form-fields";
import { swAlert } from "@/helpers/swal";
import { useRouter } from "next/navigation";
import { createStudentInfoAction } from "@/actions/student-info-actions";

const StudentInfoCreateForm = ({ students, lessons, terms }) => {
	const [state, dispatch] = useFormState(
		createStudentInfoAction,
		initialResponse
	);
	const router = useRouter();

	if (state.message) {
		swAlert(state.message, state.ok ? "success" : "error");
		if (state.ok) router.push("/dashboard/student-info");
	}

	return (
		<FormContainer title="New">
			<Form action={dispatch} noValidate>
				<Row xs={1} md={2} xl={3}>
					<Col>
						<SelectInput
							name="lessonId"
							className="mb-3"
							label="Lesson"
							options={lessons}
							optionValue="lessonId"
							optionLabel="lessonName"
							defaultValue=""
							error={state?.errors?.lessonId}
						/>
					</Col>
					<Col>
						<SelectInput
							name="studentId"
							className="mb-3"
							label="Student"
							options={students}
							optionValue="value"
							optionLabel="label"
							defaultValue=""
							error={state?.errors?.studentId}
						/>
					</Col>
					<Col>
						<SelectInput
							name="educationTermId"
							className="mb-3"
							label="Student"
							options={terms}
							optionValue="value"
							optionLabel="label"
							defaultValue=""
							error={state?.errors?.educationTermId}
						/>
					</Col>
					<Col>
						<TextInput
							type="number"
							name="absentee"
							className="mb-3"
							label="Absentee"
							error={state?.errors?.absentee}
						/>
					</Col>
					<Col>
						<TextInput
							type="number"
							name="midtermExam"
							className="mb-3"
							label="Midterm"
							error={state?.errors?.midtermExam}
						/>
					</Col>
					<Col>
						<TextInput
							type="number"
							name="finalExam"
							className="mb-3"
							label="Final"
							error={state?.errors?.finalExam}
						/>
					</Col>

					<Col>
						<TextInput
							type="text"
							name="infoNote"
							className="mb-3"
							label="Info"
							error={state?.errors?.infoNote}
						/>
					</Col>
				</Row>

				<BackButton className="me-3" />
				<SubmitButton title="Create" />
			</Form>
		</FormContainer>
	);
};

export default StudentInfoCreateForm;
