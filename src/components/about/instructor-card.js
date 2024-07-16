"use client"
import Image from "next/image";
import React from "react";
import { Card } from "react-bootstrap";
import "./instructor-card.scss"

const InstructorCard = ({ firstName, lastName, title, image }) => {
	return (
		<Card className="instructor-card">
			<Image
				src={`/img/instructors/${image}`}
				width={400}
				height={500}
				className="card-img-top card-img-bottom"
			/>

			<Card.Title>
				<h4>
					{firstName} {lastName}
				</h4>
                <h6>{title}</h6>
			</Card.Title>
		</Card>
	);
};

export default InstructorCard;
