"use client";
import React from "react";
import { Alert, Card, Col, Container, Form, Row } from "react-bootstrap";
import TextInput from "../common/form-fields/text-input";
import SubmitButton from "../common/form-fields/submit-button";
import { useFormState } from "react-dom";
import { loginAction } from "@/actions/auth-actions";
import { initialResponse } from "@/helpers/form-validation";

const LoginForm = () => {
	const [state, dispatch] = useFormState(loginAction, initialResponse);

	return (
		<Container>
			<Row className="justify-content-center">
				<Col md={8} lg={6}>
					<Card>
						<Card.Body>
							<h4>Please enter your username and password</h4>

							{!state?.ok && state?.message ? (
								<Alert>{state?.message}</Alert>
							) : null}

							<Form action={dispatch}>
								<TextInput
									className="mb-3"
									label="Username"
									name="username"
									defaultValue="root"
									error={state?.errors?.username}
								/>
								<TextInput
									type="password"
									className="mb-3"
									label="Password"
									name="password"
									defaultValue="123456aA."
									error={state?.errors?.password}
								/>

								<SubmitButton title="Login" />
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default LoginForm;
