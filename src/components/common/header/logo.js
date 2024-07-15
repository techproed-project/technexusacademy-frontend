import React from "react";
import { NavbarBrand } from "react-bootstrap";
import { Link } from "next/navigation";
import Image from "next/image";
import { config } from "@/helpers/config";

const Logo = ({ theme = "dark" }) => {
	return (
		<NavbarBrand href="/" as={Link}>
			<Image
				src={`/img/logos/logo-${theme}.png`}
				alt={config.project.name}
				width={200}
				height={90}
			/>
		</NavbarBrand>
	);
};

export default Logo;
