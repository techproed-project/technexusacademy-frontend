"use client";
import Spacer from "@/components/common/spacer";
import Image from "next/image";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Page = ({ error, reset }) => {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<>
			<Spacer />
			<Container>
				<Row className="g-5 align-items-center">
					<Col md="6">
						<Image
							src="/img/errors/error.png"
							className="img-fluid"
							width={500}
							height={500}
							alt="Not found"
						/>
					</Col>
					<Col md={6} className="text-center text-md-start">
						<h2>Something went wrong</h2>

						<p>
							An unexpected error has occurred. We apologize for
							the inconvenience. Our technical team has been
							notified and is working to resolve the issue. Please
							try again later. If the problem persists, feel free
							to contact our support team for assistance. Thank
							you for your understanding.
						</p>
						<button
							className="btn btn-outline-secondary"
							onClick={
								// Attempt to recover by trying to re-render the segment
								() => reset()
							}
						>
							Try again
						</button>
					</Col>
				</Row>
			</Container>
			<Spacer />
		</>
	);
};

export default Page;
