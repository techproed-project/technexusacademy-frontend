import { config } from "@/helpers/config";
import React from "react";
import { Container, Row } from "react-bootstrap";
import "./topbar.scss";

const Topbar = () => {
	return (
		<div className="topbar">
			<Container>
					<div className="slogan">
						<i className="pi pi-megaphone"></i>{" "}
						{config.project.slogan}
					</div>
					<div>Login</div>
			</Container>
		</div>
	);
};

export default Topbar;
