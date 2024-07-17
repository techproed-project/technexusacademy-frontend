import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import events from "@/helpers/data/events.json";
import EventCard from "./event-card";

const Events = () => {
	return (
		<Container>
			<Row xs={1} md={2} xl={3} className="g-5">
				{events.map((item) => (
					<Col key={item.id}>
						<EventCard {...item} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Events;
