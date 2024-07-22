import React from "react";
import { Card, CardBody, CardTitle, Container } from "react-bootstrap";

const FormContainer = ({ children, title }) => {
	return (
		<Container>
			<Card>
				<CardBody>
					<CardTitle className=" bg-body-secondary p-2 mb-3 rounded">{title}</CardTitle>
					{children}
				</CardBody>
			</Card>
		</Container>
	);
};

export default FormContainer;
