import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import GradeList from "@/components/dashboard/grades-meets/grade-list";
import StudentMeetList from "@/components/dashboard/grades-meets/student-meet-list";
import { getAllMeetsForStudent } from "@/services/meet-service";
import { getAllInfoByPageForStudent } from "@/services/student-info-service";
import React from "react";

const Page = async ({ searchParams }) => {
	const { page } = searchParams;

	const dataGrades = (await getAllInfoByPageForStudent(page)).json();
	const dataMeets = (await getAllMeetsForStudent()).json();

	const [grades, meets] = await Promise.all([dataGrades, dataMeets]);

	return (
		<>
			<PageHeader title="Grades &amp; Meets" />
			<Spacer />
			<GradeList grades={grades} />
			<Spacer />
			<StudentMeetList meets={meets} />
			<Spacer/>
		</>
	);
};

export default Page;
