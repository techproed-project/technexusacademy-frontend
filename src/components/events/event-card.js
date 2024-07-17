"use client";
import Image from "next/image";
import React from "react";
import { Card } from "react-bootstrap";
import "./event-card.scss";

const EventCard = (props) => {
	const { image, title, time, location } = props;

	return (
		<Card className="event-card">
			<Card.Body>
				<Image
					src={`/img/events/${image}`}
					width={400}
					height={300}
					className="img-fluid rounded"
				/>
				<Card.Subtitle>
					<span>
						<i className="pi pi-clock"></i> {time}
					</span>
					<span>
						<i className="pi pi-map-marker"></i> {location}
					</span>
				</Card.Subtitle>
				<Card.Title>{title}</Card.Title>
			</Card.Body>
		</Card>
	);
};

export default EventCard;
