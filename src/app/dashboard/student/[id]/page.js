import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import StudentEditForm from "@/components/dashboard/student/student-edit-form";
import { getAllAdvisorTeachers } from "@/services/advisor-service";
import { getStudentById } from "@/services/student-service";
import React from "react";

const Page = async ({ params }) => {
	const { id } = params;
	if (!id) throw new Error("User id is missing");

	const dataStudent = (await getStudentById(id)).json();
	const dataAdvisors = (await getAllAdvisorTeachers()).json();

	const [student, advisors] = await Promise.all([dataStudent, dataAdvisors]);

	const advisorTeachers = advisors.map((item) => ({
		value: item.advisorTeacherId,
		label: `${item.teacherName} ${item.teacherSurname}`,
	}));


	return (
		<>
			<PageHeader title="Edit Student" />
			<Spacer />
			<StudentEditForm
				user={student}
				advisorTeachers={advisorTeachers}
			/>
			<Spacer />
		</>
	);
};

export default Page;
