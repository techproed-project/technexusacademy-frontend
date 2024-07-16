import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../header/logo";
import "./footer.scss";
import { config } from "@/helpers/config";
import MainMenu from "../header/main-menu";
import SocialMenu from "./social-menu";
import ContactMenu from "./contact-menu";

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row className="g-4">
					<Col xl={12}>
						<Logo theme="light" />
						<p className="mt-3">{config.project.description}</p>
					</Col>
					<Col xs={6} lg>
						<h3>Links</h3>
						<MainMenu />
					</Col>
					<Col xs={6} lg>
						<h3>Social</h3>
                        <SocialMenu/>
					</Col>
					<Col lg>
                        <h3>Contact</h3>
                        <ContactMenu/>
                    </Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
