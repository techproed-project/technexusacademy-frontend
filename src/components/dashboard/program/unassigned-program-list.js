"use client";
import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { config } from "@/helpers/config";
import { formatTimeLT } from "@/helpers/date-time";
import Spacer from "@/components/common/spacer";

const UnassignedProgramList = ({ programs, teachers }) => {
	const [selectedItems, setSelectedItems] = useState([]);

	console.log(selectedItems)

	const header = (
		<div>
			<h2>Unassigned Programs</h2>
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
				value={programs}
				selection={selectedItems}
				onSelectionChange={(e) => setSelectedItems(e.value)}
				lazy
				dataKey="lessonProgramId"
				stripedRows
				showGridlines
				header={header}
			>
				<Column
					selectionMode="multiple"
					headerStyle={{ width: "3rem" }}
				></Column>
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


			<Spacer/>

			<Form action="" noValidate>

			</Form>


		</Container>
	);
};

export default UnassignedProgramList;
