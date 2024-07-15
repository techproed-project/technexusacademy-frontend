import React from "react";
import { Nav } from "react-bootstrap";
import menuItems from "@/helpers/data/main-menu.json";
import Link from "next/link";

const MainMenu = (props) => {
	return (
		<Nav {...props}>
			{menuItems.map((item) => (
				<Nav.Link key={item.title} href={item.link} as={Link}>
					<i className={item.icon}></i> {item.title}
				</Nav.Link>
			))}
		</Nav>
	);
};

export default MainMenu;
