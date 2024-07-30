import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import StudentInfoList from "@/components/dashboard/student-info/student-info-list";
import { getAllInfoByPageForTeacher } from "@/services/student-info-service";
import React from "react";

const Page = async ({ searchParams }) => {
	const { page } = searchParams;

	const res = await getAllInfoByPageForTeacher(page);
	const data = await res.json();

	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader title="Student Info" />
			<Spacer />
			<StudentInfoList data={data}/>
			<Spacer />
		</>
	);
};

export default Page;
