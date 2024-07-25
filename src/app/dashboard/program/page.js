import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import ProgramList from "@/components/dashboard/program/program-list";
import { getAllProgramsByPage } from "@/services/program-service";
import React from "react";

const Page = async ({ searchParams }) => {
	const { page } = searchParams;

	const res = await getAllProgramsByPage(page);
	const data = await res.json();

	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader title="Programs" />
			<Spacer />
			<ProgramList data={data}/>
			<Spacer />
		</>
	);
};

export default Page;
