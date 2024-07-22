"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Link from "next/link";
import AdminToolbar from "./admin-toolbar";
import { useRouter } from "next/navigation";

const AdminList = ({ data }) => {
	const router = useRouter();

	const { content, pageable, totalElements, number } = data;

	const header = (
		<div className="d-flex justify-content-between align-items-center">
			<h2>Admins</h2>
			<Link href="/dashboard/admin/new" className="btn btn-primary">
				New
			</Link>
		</div>
	);

	const onPage = (e) => { 
		router.push(`/dashboard/admin?page=${e.page}`);
	}

	return (
		<Container>
			<DataTable
				value={content}
				lazy
				dataKey="id"
				paginator
				rows={pageable.pageSize}
				totalRecords={totalElements}
				first={number*pageable.pageSize+1}
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
				<Column header="" body={AdminToolbar} bodyStyle={{textAlign: "right"}} />
			</DataTable>
		</Container>
	);
};

export default AdminList;
