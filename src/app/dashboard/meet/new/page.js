import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import MeetCreateForm from "@/components/dashboard/meet/meet-create-form";
import { wait } from "@/helpers/misc";
import { getAllStudentsByAdvisor } from "@/services/student-service";
import React from "react";

const Page = async () => {

	await wait();
	const res = await getAllStudentsByAdvisor();
	const data = await res.json();

	const students = data.map((item) => ({
		value: item.userId,
		label: `${item.name} ${item.surname}`,
	}));

	return (
		<>
			<PageHeader title="New Meet" />
			<Spacer />
			<MeetCreateForm students={students}/>
			<Spacer />
		</>
	);
};

export default Page;
