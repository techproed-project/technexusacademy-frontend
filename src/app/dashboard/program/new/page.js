import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import ProgramCreateForm from "@/components/dashboard/program/program-create-form";
import { formatDateMY } from "@/helpers/date-time";
import { getTermLabel } from "@/helpers/misc";
import { getAllLessons } from "@/services/lesson-service";
import { getAllTerms } from "@/services/term-service";
import React from "react";

const Page = async () => {
	const dataLessons = (await getAllLessons()).json();
	const dataTerms = (await getAllTerms()).json();

	const [lessons, terms] = await Promise.all([dataLessons, dataTerms]);

	const newTerms = terms.map((item) => ({
		value: item.id,
		label: `${getTermLabel(item.term)} - ${formatDateMY(item.startDate)}`,
	}));

	return (
		<>
			<PageHeader title="New Program" />
			<Spacer />
			<ProgramCreateForm lessons={lessons} terms={newTerms} />
			<Spacer />
		</>
	);
};

export default Page;
