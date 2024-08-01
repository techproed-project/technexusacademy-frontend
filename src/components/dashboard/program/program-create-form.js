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
	TimeInput,
} from "@/components/common/form-fields";
import { swAlert } from "@/helpers/swal";
import { useRouter } from "next/navigation";
import { createProgramAction } from "@/actions/program-actions";
import MultipleSelect from "@/components/common/form-fields/multiple-select";

const ProgramCreateForm = ({ lessons, terms }) => {
	const [state, dispatch] = useFormState(
		createProgramAction,
		initialResponse
	);
	const router = useRouter();

	if (state.message) {
		swAlert(state.message, state.ok ? "success" : "error");
		if (state.ok) router.push("/dashboard/program");
	}

	return (
		<FormContainer title="New">
			<Form action={dispatch} noValidate>
				<Row xs={1} md={2} xl={3}>
					<Col>
						<MultipleSelect
							name="lessonIdList"
							label="Lessons"
							options={lessons}
							optionValue="lessonId"
							optionLabel="lessonName"
							className="mb-3"
							error={state?.errors?.lessonIdList}
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
							defaultValue=""
							error={state?.errors?.educationTermId}
						/>
					</Col>
					<Col>
						<SelectInput
							name="day"
							className="mb-3"
							label="Day"
							options={config.days}
							optionValue="value"
							optionLabel="label"
							defaultValue=""
							error={state?.errors?.day}
						/>
					</Col>
					<Col>
						<TimeInput
							name="startTime"
							className="mb-3"
							label="Start Time"
							error={state?.errors?.startTime}
						/>
					</Col>
					<Col>
						<TimeInput
							name="stopTime"
							className="mb-3"
							label="End Time"
							error={state?.errors?.stopTime}
						/>
					</Col>
				</Row>

				<BackButton className="me-3" />
				<SubmitButton title="Create" />
			</Form>
		</FormContainer>
	);
};

export default ProgramCreateForm;
