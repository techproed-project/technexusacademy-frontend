"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Link from "next/link";
import { useRouter } from "next/navigation";
import TermToolbar from "./term-toolbar";
import { getTermLabel } from "@/helpers/misc";
import { formatDateLL } from "@/helpers/date-time";

const TermList = ({ data }) => {
	const router = useRouter();

	const { content, pageable, totalElements, number } = data;

	const header = (
		<div className="d-flex justify-content-between align-items-center">
			<h2>Terms</h2>
			<Link
				href="/dashboard/education-term/new"
				className="btn btn-primary"
			>
				New
			</Link>
		</div>
	);

	const onPage = (e) => {
		router.push(`/dashboard/education-term?page=${e.page}`);
	};

	const formatTerm = (row) => getTermLabel(row.term);
	const formatStartDate = (row) => formatDateLL(row.startDate);
	const formatEndDate = (row) => formatDateLL(row.endDate);
	const formatRegisterDate = (row) => formatDateLL(row.lastRegistrationDate);

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
				<Column body={formatTerm} header="Term" />
				<Column body={formatStartDate} header="Start Date" />
				<Column body={formatEndDate} header="End Date" />
				<Column
					body={formatRegisterDate}
					header="Last Registration Date"
				/>
				<Column
					header=""
					body={TermToolbar}
					bodyStyle={{ textAlign: "right" }}
				/>
			</DataTable>
		</Container>
	);
};

export default TermList;
