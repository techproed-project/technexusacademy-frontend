"use client"
import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import Logo from "./logo";

const MainMenubar = () => {
	return (
		<Navbar expand="lg" className="bg-body-tertiary shadow">
			<Container>
				<Logo/>
				<Navbar.Toggle
					aria-controls="main-menu"
				/>
				<Navbar.Offcanvas
					id="main-menu"
					aria-labelledby="main-menu-title"
					placement="end"
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title
							id="main-menu-title"
						>
							Tech Nexus Academy
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="justify-content-end flex-grow-1 pe-3">
							<Nav.Link href="#action1">Home</Nav.Link>
							<Nav.Link href="#action2">Link</Nav.Link>
							
						</Nav>
						
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
};

export default MainMenubar;
