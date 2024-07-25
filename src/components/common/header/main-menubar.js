"use client";
import React from "react";
import { Container, Navbar, Offcanvas } from "react-bootstrap";
import Logo from "./logo";
import MainMenu from "./main-menu";
import ButtonCallNow from "./button-call-now";
import Image from "next/image";
import { config } from "@/helpers/config";

const MainMenubar = () => {
	return (
		<Navbar
			expand="lg"
			className="bg-body-tertiary shadow"
			sticky="top"
			collapseOnSelect
			style={{ zIndex: 1000 }}
		>
			<Container>
				<Logo />
				<Navbar.Toggle aria-controls="main-menu" />
				<Navbar.Offcanvas
					id="main-menu"
					aria-labelledby="main-menu-title"
					placement="end"
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id="main-menu-title">
							<Image
								src="/img/logos/logo-dark-single-line.png"
								width="268"
								height="29"
								className="img-fluid"
								alt={config.project.name}
							/>
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<MainMenu className="justify-content-center flex-grow-1" />

						<ButtonCallNow />
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
};

export default MainMenubar;
