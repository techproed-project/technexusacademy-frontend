import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import TeacherList from "@/components/dashboard/teacher/teacher-list";
import { getAllTeachersByPage } from "@/services/teacher-service";
import React from "react";

const Page = async ({ searchParams }) => {
	const { page } = searchParams;

	const res = await getAllTeachersByPage(page);
	const data = await res.json();

	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader title="Teacher" />
			<Spacer />
			<TeacherList data={data}/>
			<Spacer />
		</>
	);
};

export default Page;
