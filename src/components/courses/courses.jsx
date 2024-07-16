import React from "react";
import courses from "@/helpers/data/courses.json";
import { Col, Container, Row } from "react-bootstrap";
import CourseCard from "./course-card";

const Courses = ({ featured }) => {
	let allCourses = courses;

	if (featured) {
		allCourses = allCourses.filter((item) => item.featured);
	}

	return (
		<Container>
			<Row xs={1} sm={2} md={3} lg={4} className="g-4">
				{allCourses.map((item) => (
					<Col key={item.id}>
						<CourseCard {...item} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Courses;
