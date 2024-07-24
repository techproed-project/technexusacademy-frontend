import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import TermCreateForm from "@/components/dashboard/term/term-create-form";
import React from "react";

const Page = () => {
	return (
		<>
			<PageHeader title="New Term" />
			<Spacer />
			<TermCreateForm/>
			<Spacer />
		</>
	);
};

export default Page;
