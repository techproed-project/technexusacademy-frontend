"use client";
import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import TextInput from "../common/form-fields/text-input";

const LoginForm = () => {
	return (
		<Container>
			<Row>
				<Col>
					<Card>
						<Card.Body>
							<h4>Please enter your username and password</h4>

							<Form>
								<TextInput
									className="mb-3"
									label="Username"
									name="username"
								/>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default LoginForm;
