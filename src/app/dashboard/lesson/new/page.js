import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import LessonCreateForm from "@/components/dashboard/lesson/lesson-create-form";
import React from "react";

const Page = () => {
	return (
		<>
			<PageHeader title="New Lesson" />
			<Spacer />
			<LessonCreateForm/>
			<Spacer />
		</>
	);
};

export default Page;
