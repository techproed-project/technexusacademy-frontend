"use client";
import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { config } from "@/helpers/config";
import { formatDateLL, formatTimeLT } from "@/helpers/date-time";

const StudentMeetList = ({ meets }) => {
	const header = (
		<div className="d-flex justify-content-between align-items-center">
			<h2>Meets</h2>
		</div>
	);

	const formatDate = (row) => formatDateLL(row.date);

	const formatStart = (row) => formatTimeLT(row.startTime);
	const formatEnd = (row) => formatTimeLT(row.stopTime);

	return (
		<Container>
			<DataTable
				value={meets}
				lazy
				dataKey="id"
				stripedRows
				showGridlines
				header={header}
			>
				<Column
					header="#"
					body={(row, options) => options.rowIndex + 1}
					headerStyle={{ width: "20px" }}
				/>
				<Column body={formatDate} header="Date" />
				<Column body={formatStart} header="Start" />
				<Column body={formatEnd} header="End" />
				<Column field="description" header="Description" />
			</DataTable>
		</Container>
	);
};

export default StudentMeetList;
