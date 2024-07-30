"use client";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";
import { formatDateLL } from "@/helpers/date-time";

const MessageList = ({ data }) => {
	const [expandedRows, setExpandedRows] = useState(null);
	const router = useRouter();

	const { content, pageable, totalElements, number } = data;

	const header = (
		<div className="d-flex justify-content-between align-items-center">
			<h2>Messages</h2>
		</div>
	);

	const onPage = (e) => {
		router.push(`/dashboard/contact-message?page=${e.page}`);
	};

	const formatDate = (row) => formatDateLL(row.date);

	const formatSubject = (row) => {
		return row.subject.length > 60
			? `${row.subject.slice(0, 60)}...`
			: row.subject;
	};

	const rowExpansionTemplate = (row) => {
		return (
			<div className="card ms-5">
				<div className="card-body">
					<div className="card-title fw-bold">{row.subject}</div>
					<div className="card-text">{row.message}</div>
				</div>
			</div>
		);
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
				rowExpansionTemplate={rowExpansionTemplate}
				expandedRows={expandedRows}
				onRowToggle={(e) => setExpandedRows(e.data)}
			>
				<Column expander={true} style={{ width: "5rem" }} />

				<Column
					header="#"
					body={(row, options) => options.rowIndex}
					headerStyle={{ width: "20px" }}
				/>
				<Column field="name" header="Name" />
				<Column body={formatSubject} header="Subject" />
				<Column field="email" header="Email" />
				<Column body={formatDate} header="Date" />
			</DataTable>
		</Container>
	);
};

export default MessageList;
