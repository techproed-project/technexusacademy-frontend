"use client"
import React from "react";
import {
	Card,
	CardBody,
	CardTitle,
	Container,
	FormControl,
	FormGroup,
	FormLabel,
	Placeholder,
    Row,
    Button
} from "react-bootstrap";

const LoadingForm = ({ inputCount }) => {
	return (
		<Container>
			<Card>
				<CardBody>
					<Placeholder
						animation="glow"
						as={CardTitle}
						className=" bg-body-secondary p-2 mb-3 rounded"
					>
						<Placeholder xs={1} />
					</Placeholder>

					<Row xs={1} md={2} xl={3} gap={5}>
						{[...new Array(inputCount)].map((_, index) => (
							<Placeholder
								as={FormGroup}
								animation="glow"
								key={index}
								className="mb-3"
							>
								<Placeholder
									as={FormLabel}
									xs={3}
								></Placeholder>
								<Placeholder
									as={FormControl}
									size="lg"
								></Placeholder>
							</Placeholder>
						))}
					</Row>

                    <Placeholder animation="glow" className="d-flex gap-3">
                        <Placeholder as={Button} xs={2}></Placeholder>
                        <Placeholder as={Button} xs={2}></Placeholder>
                    </Placeholder>

				</CardBody>
			</Card>
		</Container>
	);
};

export default LoadingForm;
