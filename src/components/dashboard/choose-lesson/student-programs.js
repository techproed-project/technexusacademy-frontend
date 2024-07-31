"use client";
import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { config } from "@/helpers/config";
import { formatTimeLT } from "@/helpers/date-time";

const StudentProgramList = ({ studentPrograms }) => {
	const header = (
		<div className="d-flex justify-content-between align-items-center">
			<h2>Student Programs</h2>
		</div>
	);

	const formatLessons = (row) =>
		row.lessonName.map((item) => item.lessonName).join(" - ");

	const formatDay = (row) => {
		const day = config.days.find((item) => item.value === row.day);
		return day ? day.label : "";
	};

	const formatStart = (row) => formatTimeLT(row.startTime);
	const formatEnd = (row) => formatTimeLT(row.stopTime);

	return (
		<Container>
			<DataTable
				value={studentPrograms}
				lazy
				dataKey="lessonProgramId"
				stripedRows
				showGridlines
				header={header}
			>
				<Column
					header="#"
					body={(row, options) => options.rowIndex + 1}
					headerStyle={{ width: "20px" }}
				/>
				<Column body={formatLessons} header="Lessons" />
				<Column body={formatDay} header="Day" />
				<Column body={formatStart} header="Start" />
				<Column body={formatEnd} header="End" />
			</DataTable>
		</Container>
	);
};

export default StudentProgramList;
