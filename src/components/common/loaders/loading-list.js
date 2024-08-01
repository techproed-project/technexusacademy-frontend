"use client";
import React from "react";
import { Container, Placeholder, Table } from "react-bootstrap";

const LoadingList = () => {
	return (
		<Container>
			<Placeholder
				animation="glow"
				className="d-flex justify-content-between"
				style={{ height: "35px" }}
			>
				<Placeholder xs={3} />
				<Placeholder xs={1} />
			</Placeholder>

			<Table className="table-striped">
				<thead>
					<tr>
						<Placeholder
							animation="glow"
							as="th"
							style={{ width: "40px" }}
						>
							<Placeholder xs={12} />
						</Placeholder>
						<Placeholder animation="glow" as="th">
							<Placeholder xs={12} />
						</Placeholder>
						<Placeholder animation="glow" as="th">
							<Placeholder xs={12} />
						</Placeholder>
						<Placeholder animation="glow" as="th">
							<Placeholder xs={12} />
						</Placeholder>
						<Placeholder animation="glow" as="th">
							<Placeholder xs={12} />
						</Placeholder>
					</tr>
				</thead>
				<tbody>
					<tr>
						<Placeholder
							animation="glow"
							as="td"
							style={{ width: "40px" }}
						>
							<Placeholder xs={12} />
						</Placeholder>
						<Placeholder animation="glow" as="td">
							<Placeholder xs={12} />
						</Placeholder>
						<Placeholder animation="glow" as="td">
							<Placeholder xs={12} />
						</Placeholder>
						<Placeholder animation="glow" as="td">
							<Placeholder xs={12} />
						</Placeholder>
						<Placeholder animation="glow" as="td">
							<Placeholder xs={12} />
						</Placeholder>
					</tr>
				</tbody>
			</Table>
		</Container>
	);
};

export default LoadingList;
