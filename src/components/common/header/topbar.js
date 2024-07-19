import { config } from "@/helpers/config";
import React from "react";
import { Container } from "react-bootstrap";
import "./topbar.scss";
import UserMenu from "./user-menu";

const Topbar = () => {
	return (
		<div className="topbar">
			<Container>
					<div className="slogan">
						<i className="pi pi-megaphone"></i>{" "}
						{config.project.slogan}
					</div>
					
					<UserMenu/>
			</Container>
		</div>
	);
};

export default Topbar;
