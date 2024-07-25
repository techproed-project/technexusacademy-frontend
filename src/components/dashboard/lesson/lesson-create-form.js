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
	BackButton,
	DateInput,
	TextInput,
	CheckInput,
} from "@/components/common/form-fields";
import { swAlert } from "@/helpers/swal";
import { useRouter } from "next/navigation";
import { createLessonAction } from "@/actions/lesson-actions";

const LessonCreateForm = () => {
	const [state, dispatch] = useFormState(createLessonAction, initialResponse);
	const router = useRouter();

	if (state.message) {
		swAlert(state.message, state.ok ? "success" : "error");
		if (state.ok) router.push("/dashboard/lesson");
	}

	return (
		<FormContainer title="New">
			<Form action={dispatch} noValidate>
				<Row xs={1} md={2} xl={3}>
					
					<Col>
						<TextInput
							type="text"
							name="lessonName"
							className="mb-3"
							label="Name"
							error={state?.errors?.lessonName}
						/>
					</Col>
					<Col>
						<TextInput
							type="number"
							name="creditScore"
							className="mb-3"
							label="Credit"
							error={state?.errors?.creditScore}
						/>
					</Col>
					<Col>
						<CheckInput
							name="compulsory"
							className="mb-3"
							label="Compulsory"
							error={state?.errors?.compulsory}
						/>
					</Col>
				</Row>

				<BackButton className="me-3" />
				<SubmitButton title="Create" />
			</Form>
		</FormContainer>
	);
};

export default LessonCreateForm;
