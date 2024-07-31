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
} from "@/components/common/form-fields";
import { swAlert } from "@/helpers/swal";
import { useRouter } from "next/navigation";
import { updateStudentInfoAction } from "@/actions/student-info-actions";

const StudentInfoEditForm = ({ studentInfo, students, lessons, terms }) => {
	const [state, dispatch] = useFormState(
		updateStudentInfoAction,
		initialResponse
	);
	const router = useRouter();

	if (state.message) {
		swAlert(state.message, state.ok ? "success" : "error");
		if (state.ok) router.push("/dashboard/student-info");
	}

	return (
		<FormContainer title="Edit">
			<Form action={dispatch} noValidate>
				<input type="hidden" name="id" value={studentInfo.id} />
				<Row xs={1} md={2} xl={3}>
					<Col>
						<SelectInput
							name="lessonId"
							className="mb-3"
							label="Lesson"
							options={lessons}
							optionValue="lessonId"
							optionLabel="lessonName"
							defaultValue={studentInfo.lessonId}
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
							defaultValue={studentInfo.studentResponse.userId}
							error={state?.errors?.studentId}
						/>
					</Col>
					<Col>
						<SelectInput
							name="educationTermId"
							className="mb-3"
							label="Term"
							options={terms}
							optionValue="value"
							optionLabel="label"
							defaultValue={studentInfo.educationTermId}
							error={state?.errors?.educationTermId}
						/>
					</Col>
					<Col>
						<TextInput
							type="number"
							name="absentee"
							className="mb-3"
							label="Absentee"
							defaultValue={studentInfo.absentee}
							error={state?.errors?.absentee}
						/>
					</Col>
					<Col>
						<TextInput
							type="number"
							name="midtermExam"
							className="mb-3"
							label="Midterm"
							defaultValue={studentInfo.midtermExam}
							error={state?.errors?.midtermExam}
						/>
					</Col>
					<Col>
						<TextInput
							type="number"
							name="finalExam"
							className="mb-3"
							label="Final"
							defaultValue={studentInfo.finalExam}
							error={state?.errors?.finalExam}
						/>
					</Col>

					<Col>
						<TextInput
							type="text"
							name="infoNote"
							className="mb-3"
							label="Info"
							defaultValue={studentInfo.infoNote}
							error={state?.errors?.infoNote}
						/>
					</Col>
				</Row>

				<BackButton className="me-3" />
				<SubmitButton title="Update" />
			</Form>
		</FormContainer>
	);
};

export default StudentInfoEditForm;
