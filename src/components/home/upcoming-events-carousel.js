"use client";
import React from "react";
import { Carousel } from "primereact/carousel";
import EventCard from "../events/event-card";

const UpcomingEventsCarousel = ({ data }) => {
	
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 3,
            numScroll: 1

        },
        {
            breakpoint: '1200px',
            numVisible: 2,
            numScroll: 1

        },
        {
            breakpoint: '768px',
            numVisible: 1,
            numScroll: 1

        }
        
    ];

    const itemTemplate = (item) => {
		return <div className="px-3 h-100"><EventCard {...item} /></div>;
	};

	return (
		<Carousel
			value={data}
			numVisible={3}
			numScroll={1}
			responsiveOptions={responsiveOptions}
			itemTemplate={itemTemplate}
		/>
	);
};

export default UpcomingEventsCarousel;
