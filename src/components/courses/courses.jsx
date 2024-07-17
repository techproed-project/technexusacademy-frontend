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
			<Row xs={1} md={2} xl={3} className="g-5">
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
