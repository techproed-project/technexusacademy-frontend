"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { config } from "@/helpers/config";
import ProgramToolbar from "./program-toolbar";
import { formatTimeLT } from "@/helpers/date-time";

const ProgramList = ({ data }) => {
	const router = useRouter();

	const { content, pageable, totalElements, number } = data;

	const header = (
		<div className="d-flex justify-content-between align-items-center">
			<h2>Programs</h2>
			<Link href="/dashboard/program/new" className="btn btn-primary">
				New
			</Link>
		</div>
	);

	const onPage = (e) => {
		router.push(`/dashboard/program?page=${e.page}`);
	};

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
				value={content}
				lazy
				dataKey="lessonProgramId"
				paginator
				rows={pageable.pageSize}
				totalRecords={totalElements}
				first={number * pageable.pageSize + 1}
				stripedRows
				showGridlines
				header={header}
				onPage={onPage}
			>
				<Column
					header="#"
					body={(row, options) => options.rowIndex}
					headerStyle={{ width: "20px" }}
				/>
				<Column body={formatLessons} header="Lessons" />
				<Column body={formatDay} header="Day" />
				<Column body={formatStart} header="Start" />
				<Column body={formatEnd} header="End" />

				<Column
					header=""
					body={ProgramToolbar}
					bodyStyle={{ textAlign: "right" }}
				/>
			</DataTable>
		</Container>
	);
};

export default ProgramList;
