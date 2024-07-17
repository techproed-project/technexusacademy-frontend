"use client"
import React from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";

const ContactForm = () => {
	return (
		<div className="contact-form">
			<h2>Send Me Message</h2>

			<Form action="">
				<Row>
					<Col md={6}>
						<InputGroup className="mb-3">
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
						<InputGroup className="mb-3">
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
				</Row>
			</Form>
		</div>
	);
};

export default ContactForm;
