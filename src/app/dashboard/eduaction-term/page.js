import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import React from "react";

const Page = async ({ searchParams }) => {
	const { page } = searchParams;

	const res = await getAllAdminsByPage(page);
	const data = await res.json();

	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader title="Admin" />
			<Spacer />
			<AdminList data={data} />
			<Spacer />
		</>
	);
};

export default Page;
