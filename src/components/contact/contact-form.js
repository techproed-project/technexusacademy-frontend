"use client";
import React, { useRef } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import "./contact-form.scss";
import { useFormState } from "react-dom";
import { createContactAction } from "@/actions/contact-actions";
import { initialResponse } from "@/helpers/form-validation";
import { swAlert } from "@/helpers/swal";

const ContactForm = () => {
	const [state, dispatch] = useFormState(
		createContactAction,
		initialResponse
	);
	const formRef = useRef();

	if (state.message) {
		if (state.ok) {
			swAlert(state.message, "success");
			formRef.current.reset();
		} else {
			swAlert(state.message, "error");
		}
	}

	return (
		<div className="contact-form">
			<Form action={dispatch} ref={formRef}>
				<Row>
					<Col md={6}>
						<InputGroup className="mb-3" size="lg">
							<InputGroup.Text id="name">
								<i className="pi pi-id-card"></i>
							</InputGroup.Text>
							<Form.Control
								name="name"
								placeholder="Name"
								aria-label="Name"
								aria-describedby="name"
								isInvalid={!!state?.errors?.name}
							/>
							<Form.Control.Feedback type="invalid">
								{state?.errors?.name}
							</Form.Control.Feedback>
						</InputGroup>
					</Col>
					<Col md={6}>
						<InputGroup className="mb-3" size="lg">
							<InputGroup.Text id="email">
								<i className="pi pi-envelope"></i>
							</InputGroup.Text>
							<Form.Control
								name="email"
								placeholder="Email"
								aria-label="Email"
								aria-describedby="email"
								isInvalid={!!state?.errors?.email}
							/>
							<Form.Control.Feedback type="invalid">
								{state?.errors?.email}
							</Form.Control.Feedback>
						</InputGroup>
					</Col>
					<Col xs={12}>
						<InputGroup className="mb-3" size="lg">
							<InputGroup.Text id="subject">
								<i className="pi pi-tag"></i>
							</InputGroup.Text>
							<Form.Control
								name="subject"
								placeholder="Subject"
								aria-label="Subject"
								aria-describedby="subject"
								isInvalid={!!state?.errors?.subject}
							/>
							<Form.Control.Feedback type="invalid">
								{state?.errors?.subject}
							</Form.Control.Feedback>
						</InputGroup>
					</Col>
					<Col xs={12}>
						<InputGroup className="mb-3" size="lg">
							<InputGroup.Text id="message">
								<i className="pi pi-pen-to-square"></i>
							</InputGroup.Text>
							<Form.Control
								name="message"
								as="textarea"
								placeholder="Message"
								aria-label="Message"
								aria-describedby="message"
								isInvalid={!!state?.errors?.message}
							/>
							<Form.Control.Feedback type="invalid">
								{state?.errors?.message}
							</Form.Control.Feedback>
						</InputGroup>
					</Col>
				</Row>
				<Button
					size="lg"
					type="submit"
					variant="outline-primary"
					className="mt-3"
				>
					<i className="pi pi-send"></i> Send
				</Button>
			</Form>
		</div>
	);
};

export default ContactForm;
