"use client";
import React from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import "./contact-form.scss";

const ContactForm = () => {
	return (
		<div className="contact-form">
			<Form action="">
				<Row>
					<Col md={6}>
						<InputGroup className="mb-3" size="lg">
							<InputGroup.Text id="name">
								<i className="pi pi-id-card"></i>
							</InputGroup.Text>
							<Form.Control
								placeholder="Name"
								aria-label="Name"
								aria-describedby="name"
							/>
						</InputGroup>
					</Col>
					<Col md={6}>
						<InputGroup className="mb-3" size="lg">
							<InputGroup.Text id="email">
								<i className="pi pi-envelope"></i>
							</InputGroup.Text>
							<Form.Control
								placeholder="Email"
								aria-label="Email"
								aria-describedby="email"
							/>
						</InputGroup>
					</Col>
					<Col xs={12}>
						<InputGroup className="mb-3" size="lg">
							<InputGroup.Text id="subject">
								<i className="pi pi-tag"></i>
							</InputGroup.Text>
							<Form.Control
								placeholder="Subject"
								aria-label="Subject"
								aria-describedby="subject"
							/>
						</InputGroup>
					</Col>
					<Col xs={12}>
						<InputGroup className="mb-3" size="lg">
							<InputGroup.Text id="message">
								<i className="pi pi-pen-to-square"></i>
							</InputGroup.Text>
							<Form.Control
								as="textarea"
								placeholder="Message"
								aria-label="Message"
								aria-describedby="message"
							/>
						</InputGroup>
					</Col>
				</Row>
				<Button size="lg" variant="outline-primary" className="mt-3">
					<i className="pi pi-send"></i> Send
				</Button>
			</Form>
		</div>
	);
};

export default ContactForm;
