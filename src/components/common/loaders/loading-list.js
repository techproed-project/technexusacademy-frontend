"use client";
import React from "react";
import { Container, Placeholder, Table } from "react-bootstrap";

const LoadingList = ({ colCount = 4, rowCount = 5, showButton = true }) => {
	return (
		<Container>
			<Placeholder
				animation="glow"
				className="d-flex justify-content-between"
				style={{ height: "35px" }}
			>
				<Placeholder xs={3} />
				{showButton && <Placeholder xs={1} />}
			</Placeholder>

			<Table className="table-striped">
				<thead>
					<tr>
						{[...new Array(colCount)].map((_, index) => (
							<Placeholder
								key={index}
								animation="glow"
								as="th"
								style={{ width: index === 0 ? "40px" : "auto" }}
							>
								<Placeholder xs={12} />
							</Placeholder>
						))}
					</tr>
				</thead>
				<tbody>
					{[...new Array(rowCount)].map((_, indexRow) => (
						<tr key={indexRow}>
							{[...new Array(colCount)].map((_, indexCol) => (
								<Placeholder
									key={indexCol}
									animation="glow"
									as="th"
									style={{
										width: indexCol === 0 ? "40px" : "auto",
									}}
								>
									<Placeholder xs={12} />
								</Placeholder>
							))}
						</tr>
					))}
				</tbody>
			</Table>
		</Container>
	);
};

export default LoadingList;
