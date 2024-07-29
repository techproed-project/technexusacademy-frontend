"use client";
import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { config } from "@/helpers/config";
import { formatTimeLT } from "@/helpers/date-time";
import Spacer from "@/components/common/spacer";
import { SelectInput, SubmitButton } from "@/components/common/form-fields";
import { useFormState } from "react-dom";
import { assignProgramToTeacherAction } from "@/actions/teacher-actions";
import { initialResponse } from "@/helpers/form-validation";
import { swAlert } from "@/helpers/swal";

const UnassignedProgramList = ({ programs, teachers }) => {
	const [selectedItems, setSelectedItems] = useState([]);

	const [state, dispatch] = useFormState(
		assignProgramToTeacherAction,
		initialResponse
	);

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

	if (state?.message) {
		swAlert(state.message, state?.ok ? "success" : "error");
	}

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
				className={
					state?.errors?.lessonProgramId ? "border-danger border" : ""
				}
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

			{state?.errors?.lessonProgramId ? (
				<div className="text-danger mt-2">
					{state?.errors?.lessonProgramId}
				</div>
			) : null}

			<Spacer height={50} />

			<Form action={dispatch} noValidate>
				<input
					type="hidden"
					name="lessonProgramId"
					value={JSON.stringify(selectedItems)}
				/>

				<div className="d-flex align-items-end gap-2">
					<SelectInput
						name="teacherId"
						options={teachers}
						optionLabel="label"
						optionValue="value"
						defaultValue=""
						label="Teacher"
						className="flex-1"
						error={state?.errors?.teacherId}
					/>

					<SubmitButton title="Assign" />
				</div>
			</Form>
		</Container>
	);
};

export default UnassignedProgramList;
