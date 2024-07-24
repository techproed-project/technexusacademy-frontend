"use client";
import React from "react";
import { Alert, Card, Col, Container, Form, Row } from "react-bootstrap";
import TextInput from "../common/form-fields/text-input";
import SubmitButton from "../common/form-fields/submit-button";
import { useFormState } from "react-dom";
import { loginAction } from "@/actions/auth-actions";
import { initialResponse } from "@/helpers/form-validation";
import PasswordInput from "../common/form-fields/password-input";

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
								<PasswordInput
									name="password"
									className="mb-3"
									label="Password"
									error={state?.errors?.password}
									defaultValue="123456aA."
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
