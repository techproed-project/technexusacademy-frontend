import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./mobile-app.scss";

const MobileApp = () => {
	return (
		<div className="mobile-app">
			<Container>
				<Row className="g-4">
					<Col lg={7} className=" text-center text-lg-start">
						<h2>Are you ready to start your online course</h2>
					</Col>
					<Col lg={5} className="text-center text-lg-end">
						<a href="#" className="btn btn-outline-secondary me-3">
							<i className="pi pi-apple"></i> App Store
						</a>
						<a href="#" className="btn btn-outline-secondary">
							<i className="pi pi-android"></i> Play Store
						</a>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default MobileApp;
