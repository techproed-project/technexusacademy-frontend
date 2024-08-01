"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";

const GradeList = ({ grades }) => {
	const router = useRouter();

	const { content, pageable, totalElements, number } = grades;

	const header = (
		<div className="d-flex justify-content-between align-items-center">
			<h2>Grades</h2>
		</div>
	);

	const onPage = (e) => {
		router.push(`/dashboard/grades-meets?page=${e.page}`);
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
				<Column field="lessonName" header="Lesson" />
				<Column field="absentee" header="Absentee" />
				<Column field="midtermExam" header="Midterm" />
				<Column field="finalExam" header="Final" />
				<Column field="note" header="Note" />
				<Column field="average" header="Average" />
				<Column field="infoNote" header="Info" />
			</DataTable>
		</Container>
	);
};

export default GradeList;
