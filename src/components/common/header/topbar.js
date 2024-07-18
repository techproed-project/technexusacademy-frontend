import { config } from "@/helpers/config";
import React from "react";
import { Container } from "react-bootstrap";
import "./topbar.scss";
import Link from "next/link";

const Topbar = () => {
	return (
		<div className="topbar">
			<Container>
				<div className="slogan">
					<i className="pi pi-megaphone"></i> {config.project.slogan}
				</div>
				<div>
					<Link href="/login"> Login</Link>
				</div>
			</Container>
		</div>
	);
};

export default Topbar;
