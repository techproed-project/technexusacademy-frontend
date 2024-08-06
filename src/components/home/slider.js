"use client"
import React from "react";
import "./slider.scss";
import { Carousel } from "react-bootstrap";
import slides from "@/helpers/data/slider.json";
import Image from "next/image";

const Slider = () => {
	return (
		<Carousel fade className="main-slider">
			{slides.map((item) => (
				<Carousel.Item key={item.id}>
					<Image src={`/img/slider/${item.image}`} width={1800} height={800} alt={item.title}/>
					<Carousel.Caption>
						<h3>{item.title}</h3>
						<p>{item.desc}</p>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default Slider;
