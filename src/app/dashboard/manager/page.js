import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import ManagerList from "@/components/dashboard/manager/manager-list";
import { wait } from "@/helpers/misc";
import { getAllManagersByPage } from "@/services/manager-service";
import React from "react";

const Page = async ({ searchParams }) => {
	const { page } = searchParams;

	await wait();

	const res = await getAllManagersByPage(page);
	const data = await res.json();

	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader title="Manager" />
			<Spacer />
			<ManagerList data={data} />
			<Spacer />
		</>
	);
};

export default Page;
