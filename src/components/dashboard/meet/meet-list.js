"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MeetToolbar from "./meet-toolbar";
import { formatDateLL, formatTimeLT } from "@/helpers/date-time";

const MeetList = ({ data }) => {
	const router = useRouter();

	const { content, pageable, totalElements, number } = data;

	const header = (
		<div className="d-flex justify-content-between align-items-center">
			<h2>Meets</h2>
			<Link href="/dashboard/meet/new" className="btn btn-primary">
				New
			</Link>
		</div>
	);

	const onPage = (e) => {
		router.push(`/dashboard/meet?page=${e.page}`);
	};

	const handleDate = (row) => formatDateLL(row.date);
	const handleTime = (row) =>
		`${formatTimeLT(row.startTime)} - ${formatTimeLT(row.stopTime)}`;
	const handleStudents = (row) =>
		row.students.map((item) => `${item.name} ${item.surname}`).join(" - ");

	return (
		<Container>
			<DataTable
				value={content}
				lazy
				dataKey="id"
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
				<Column body={handleDate} header="Date" />
				<Column body={handleTime} header="Start - End" />
				<Column body={handleStudents} header="Students" />

				<Column
					header=""
					body={MeetToolbar}
					bodyStyle={{ textAlign: "right" }}
				/>
			</DataTable>
		</Container>
	);
};

export default MeetList;
