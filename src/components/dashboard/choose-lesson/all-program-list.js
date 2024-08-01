"use client";
import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { config } from "@/helpers/config";
import { formatTimeLT } from "@/helpers/date-time";
import { SubmitButton } from "@/components/common/form-fields";
import { assignProgramToStudentAction } from "@/actions/student-actions";
import { initialResponse } from "@/helpers/form-validation";
import { useFormState } from "react-dom";
import Spacer from "@/components/common/spacer";
import { swAlert } from "@/helpers/swal";

const AllProgramList = ({ allPrograms }) => {
	const [selectedItems, setSelectedItems] = useState([]);

	const [state, dispatch] = useFormState(
		assignProgramToStudentAction,
		initialResponse
	);

	const header = (
		<div className="d-flex justify-content-between align-items-center">
			<h2>All Programs</h2>
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

	const handleSelection = (e) => {
		setSelectedItems(e.value);
	};

	if (state.message) {
		swAlert(state.message, state.ok ? "success" : "error");
	}

	return (
		<Container>
			<Form noValidate action={dispatch}>
				<input
					type="hidden"
					name="lessonProgramId"
					value={JSON.stringify(selectedItems)}
				/>

				<DataTable
					value={allPrograms}
					lazy
					dataKey="lessonProgramId"
					stripedRows
					showGridlines
					header={header}
					selection={selectedItems}
					onSelectionChange={handleSelection}
					style={{
						border: state?.errors?.lessonProgramId
							? "1px solid red"
							: "none",
					}}
				>
					<Column
						selectionMode="multiple"
						headerStyle={{ width: "3rem" }}
					/>
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

				{state?.errors?.lessonProgramId ? (
					<div className="text-danger mt-2">
						{state?.errors?.lessonProgramId}
					</div>
				) : null}

				<Spacer height={20} />

				<SubmitButton title="Select" />
			</Form>
		</Container>
	);
};

export default AllProgramList;
