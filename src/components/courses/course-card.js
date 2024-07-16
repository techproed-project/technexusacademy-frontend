"use client";
import Image from "next/image";
import React from "react";
import { Card } from "react-bootstrap";
import "./course-card.scss";

const CourseCard = (props) => {
	const { image, title, user, rating, price } = props;

	return (
		<Card className="course-card">
			<Card.Body>
				<Image
					src={`/img/courses/${image}`}
					width={400}
					height={300}
					className="img-fluid rounded"
				/>
				<Card.Title>{title}</Card.Title>
			</Card.Body>
			<Card.Footer>
				<span>
					<i className="pi pi-users"></i> {user}
				</span>
				<span>
					<i className="pi pi-wave-pulse"></i> {rating}
				</span>
				<span>
					<i className="pi pi-dollar"></i> {price}
				</span>
			</Card.Footer>
		</Card>
	);
};

export default CourseCard;
