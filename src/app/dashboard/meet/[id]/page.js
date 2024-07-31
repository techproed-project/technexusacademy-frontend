import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import MeetEditForm from "@/components/dashboard/meet/meet-edit-form";
import { getMeetById } from "@/services/meet-service";
import { getAllStudentsByAdvisor } from "@/services/student-service";
import React from "react";

const Page = async ({ params }) => {
	const { id } = params;
	if (!id) throw new Error("User id is missing");

	const dataStudents = (await getAllStudentsByAdvisor()).json();
	const dataMeet = (await getMeetById(id)).json();

	const [students, meet] = await Promise.all([dataStudents, dataMeet]);

	const newStudents = students.map((item) => ({
		value: item.userId,
		label: `${item.name} ${item.surname}`,
	}));

	const selectedStudentIds = meet.object.students.map((item) => item.id);

	return (
		<>
			<PageHeader title="Edit Meet" />
			<Spacer />
			<MeetEditForm
				meet={meet.object}
				students={newStudents}
				selectedStudentIds={selectedStudentIds}
			/>
			<Spacer />
		</>
	);
};

export default Page;
