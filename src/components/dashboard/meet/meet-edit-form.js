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
	MultipleSelect,
	TimeInput,
} from "@/components/common/form-fields";
import { swAlert } from "@/helpers/swal";
import { useRouter } from "next/navigation";
import { updateMeetAction } from "@/actions/meet-actions";

const MeetEditForm = ({ meet, students, selectedStudentIds }) => {
	const [state, dispatch] = useFormState(updateMeetAction, initialResponse);
	const router = useRouter();

	if (state.message) {
		swAlert(state.message, state.ok ? "success" : "error");
		if (state.ok) router.push("/dashboard/meet");
	}

	console.log(meet);
	return (
		<FormContainer title="Edit">
			<Form action={dispatch} noValidate>
				<input type="hidden" name="id" value={meet.id} />
				<Row>
					<Col xs={12}>
						<MultipleSelect
							name="studentIds"
							label="Students"
							options={students}
							optionValue="value"
							optionLabel="label"
							className="mb-3"
							values={selectedStudentIds}
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
							value={meet.date}
							error={state?.errors?.date}
						/>
					</Col>
					<Col lg={4}>
						<TimeInput 
							name="startTime"
							className="mb-3"
							label="Start Time"
							value={meet.startTime}
							error={state?.errors?.startTime}
						/>
					</Col>
					<Col lg={4}>
						<TimeInput
							name="stopTime"
							className="mb-3"
							label="End Time"
							value={meet.stopTime}
							error={state?.errors?.stopTime}
						/>
					</Col>
					<Col xs={12}>
						<TextInput
							type="text"
							name="description"
							className="mb-3"
							label="Description"
							defaultValue={meet.description}
							error={state?.errors?.description}
						/>
					</Col>
				</Row>

				<BackButton className="me-3" />
				<SubmitButton title="Update" />
			</Form>
		</FormContainer>
	);
};

export default MeetEditForm;
