"use client";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import FormContainer from "../common/form-container";
import { initialResponse } from "@/helpers/form-validation";
import { useFormState } from "react-dom";
import {
	SubmitButton,
	TextInput,
	BackButton,
	DateInput,
} from "@/components/common/form-fields";
import { swAlert } from "@/helpers/swal";
import { useRouter } from "next/navigation";
import { createMeetAction } from "@/actions/meet-actions";
import MultipleSelect from "@/components/common/form-fields/multiple-select";

const MeetCreateForm = ({ students }) => {
	const [state, dispatch] = useFormState(createMeetAction, initialResponse);
	const router = useRouter();

	if (state.message) {
		swAlert(state.message, state.ok ? "success" : "error");
		if (state.ok) router.push("/dashboard/meet");
	}

	return (
		<FormContainer title="New">
			<Form action={dispatch} noValidate>
				<Row>
					<Col xs={12}>
						<MultipleSelect
							name="studentIds"
							label="Students"
							options={students}
							optionValue="value"
							optionLabel="label"
							className="mb-3"
							error={state?.errors?.studentIds}
						/>
					</Col>

					<Col lg={4}>
						<DateInput
							name="date"
							className="mb-3"
							label="Date"
							minDate={new Date()}
							dateFormat="yy-mm-dd"
							error={state?.errors?.date}
						/>
					</Col>
					<Col lg={4}>
						<DateInput
							name="startTime"
							className="mb-3"
							label="Start Time"
							timeOnly
							error={state?.errors?.startTime}
						/>
					</Col>
					<Col lg={4}>
						<DateInput
							name="stopTime"
							className="mb-3"
							label="End Time"
							timeOnly
							error={state?.errors?.stopTime}
						/>
					</Col>
					<Col xs={12}>
						<TextInput
							type="text"
							name="description"
							className="mb-3"
							label="Description"
							error={state?.errors?.description}
						/>
					</Col>
				</Row>

				<BackButton className="me-3" />
				<SubmitButton title="Create" />
			</Form>
		</FormContainer>
	);
};

export default MeetCreateForm;
