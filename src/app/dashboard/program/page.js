import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import ProgramList from "@/components/dashboard/program/program-list";
import UnassignedProgramList from "@/components/dashboard/program/unassigned-program-list";
import {
	getAllProgramsByPage,
	getUnAssignedPrograms,
} from "@/services/program-service";
import { getAllTeachers } from "@/services/teacher-service";
import React from "react";

const Page = async ({ searchParams }) => {
	const { page } = searchParams;

	const dataAllProgams = (await getAllProgramsByPage(page)).json();
	const dataUnassignedProgams = (await getUnAssignedPrograms()).json();
	const dataTeachers = (await getAllTeachers(page)).json();

	const [allPrograms, unassignedPrograms, teachers] = await Promise.all([
		dataAllProgams,
		dataUnassignedProgams,
		dataTeachers,
	]);

	const newTeachers = teachers.map((item) => ({
		value: item.userId,
		label: `${item.name} ${item.surname}`,
	}));

	return (
		<>
			<PageHeader title="Program" />
			<Spacer />
			<ProgramList data={allPrograms} />
			<Spacer />
			<UnassignedProgramList
				programs={unassignedPrograms}
				teachers={newTeachers}
			/>
			<Spacer />
		</>
	);
};

export default Page;
