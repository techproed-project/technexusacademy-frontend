import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import StudentCreateForm from "@/components/dashboard/student/student-create-form";
import { getAllAdvisorTeachers } from "@/services/advisor-service";
import React from "react";

const Page = async () => {
	const res = await getAllAdvisorTeachers();
	const data = await res.json();

	const advisorTeachers = data.map((item) => ({
		id: item.advisorTeacherId,
		label: `${item.teacherName} ${item.teacherSurname}`,
	}));

	return (
		<>
			<PageHeader title="New Teacher" />
			<Spacer />
			<StudentCreateForm advisorTeachers={advisorTeachers} />
			<Spacer />
		</>
	);
};

export default Page;
