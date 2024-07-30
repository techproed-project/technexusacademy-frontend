import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import TeacherEditForm from "@/components/dashboard/teacher/teacher-edit-form";
import { getAllPrograms } from "@/services/program-service";
import { getTeacherById } from "@/services/teacher-service";
import React from "react";

const Page = async ({ params }) => {
	const { id } = params;
	if (!id) throw new Error("User id is missing");

	const dataTeacher = (await getTeacherById(id)).json();
	const dataPrograms = (await getAllPrograms(id)).json();

	const [teacher, programs] = await Promise.all([dataTeacher, dataPrograms]);

	const newPrograms = programs.map((item) => ({
		id: item.lessonProgramId,
		label: item.lessonName.map((lesson) => lesson.lessonName).join(" - "),
	}));

	const teacherProgramIds = teacher.object.lessonsProgramList.map(
		(item) => item.id
	);

	return (
		<>
			<PageHeader title="Edit Teacher" />
			<Spacer />
			<TeacherEditForm
				user={teacher.object}
				programs={newPrograms}
				teacherProgramIds={teacherProgramIds}
			/>
			<Spacer />
		</>
	);
};

export default Page;
