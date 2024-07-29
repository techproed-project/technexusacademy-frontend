"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Link from "next/link";
import { useRouter } from "next/navigation";
import StudentToolbar from "./student-toolbar";

const StudentList = ({ data }) => {
	const router = useRouter();

	const { content, pageable, totalElements, number } = data;

	const header = (
		<div className="d-flex justify-content-between align-items-center">
			<h2>Students</h2>
			<Link href="/dashboard/student/new" className="btn btn-primary">
				New
			</Link>
		</div>
	);

	const onPage = (e) => {
		router.push(`/dashboard/student?page=${e.page}`);
	};

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
				<Column field="name" header="FirstName" />
				<Column field="surname" header="LastName" />
				<Column field="username" header="UserName" />
				<Column field="ssn" header="SSN" />
				<Column
					header=""
					body={StudentToolbar}
					bodyStyle={{ textAlign: "right" }}
				/>
			</DataTable>
		</Container>
	);
};

export default StudentList;
