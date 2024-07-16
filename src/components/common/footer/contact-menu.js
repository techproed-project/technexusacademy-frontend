"use client";
import React from "react";
import { Nav } from "react-bootstrap";
import Link from "next/link";
import { config } from "@/helpers/config";

const menuItems = Object.entries(config.contact.info);

const ContactMenu = (props) => {
	console.log(menuItems)
	return (
		<Nav {...props}>
			{menuItems.map((item) => (
				<Nav.Link key={item[0]} href={item[1].link} as={Link}>
					<i className={item[1].icon}></i> {item[1].value}
				</Nav.Link>
			))}
		</Nav>
	);
};

export default ContactMenu;
