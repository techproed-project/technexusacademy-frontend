import LogoutButton from "@/components/common/header/logout-button";
import Spacer from "@/components/common/spacer";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Page = () => {
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
						<h2>You`re unauthorized</h2>

						<p>
							It looks like you`re already logged in but you`re
							trying to access a page that you don`t have
							permission to visit. Please log out first and log in
							again with the appropriate credentials or contact
							the system administrator.
						</p>

						<LogoutButton
							variant="outline"
							className="btn btn-outline-secondary btn-lg"
						/>
					</Col>
				</Row>
			</Container>
			<Spacer />
		</>
	);
};

export default Page;
