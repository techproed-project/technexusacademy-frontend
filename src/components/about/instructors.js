import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import instructors from "@/helpers/data/instructors.json";
import InstructorCard from "./instructor-card";
import "./instructors.scss";

const Instructors = () => {
	return (
		<Container className="instructors">
			<Row className="g-5">
				<Col lg={6}>
					<h2>Our Most Experinced Instructors</h2>
				</Col>

				{instructors.map((item) => (
					<Col key={item.id} sm={6}  md={4} lg={3}>
						<InstructorCard {...item} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Instructors;
