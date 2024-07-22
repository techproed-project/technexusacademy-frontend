"use client";
import React, { useState } from "react";
import { Button, Nav, Offcanvas } from "react-bootstrap";
import userMenuData from "@/helpers/data/user-menu.json";
import { useRouter } from "next/navigation";

const UserMenuAuth = ({ session }) => {
	const [show, setShow] = useState(false);
	const router = useRouter();

	const { name, role } = session.user;

	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	const getUser = () => (
		<>
			<i className="pi pi-user"></i> {name}
		</>
	);

	const handleNavigate = (link) => {
		setShow(false);
		router.push(link);
	};

	const userMenu = userMenuData[role.toLowerCase()];

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				{getUser()}
			</Button>

			<Offcanvas show={show} onHide={handleClose}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>{getUser()}</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Nav className="flex-column">
						{userMenu.map((item) => (
							<Button
								key={item.link}
								variant="link"
								className="nav-link text-start"
								onClick={() => handleNavigate(item.link)}
							>
								{item.title}
							</Button>
						))}
					</Nav>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};

export default UserMenuAuth;
