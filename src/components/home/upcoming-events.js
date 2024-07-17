import React from "react";
import { Container } from "react-bootstrap";
import SectionTitle from "../common/section-title";
import UpcomingEventsCarousel from "./upcoming-events-carousel";
import events from "@/helpers/data/events.json";

const UpcomingEvents = () => {
	const upcomingEvents = events.filter(
		(item) => new Date(item.date) >= new Date()
	);

	return (
		<Container>
			<SectionTitle title="Upcoming Events" />

			<UpcomingEventsCarousel data={upcomingEvents} />
		</Container>
	);
};

export default UpcomingEvents;
