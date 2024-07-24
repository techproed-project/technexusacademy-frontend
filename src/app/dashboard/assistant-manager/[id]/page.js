import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import AssistantEditForm from "@/components/dashboard/assistant-manager/assistant-edit-form";
import { getAssistantById } from "@/services/assistant-service";
import React from "react";

const Page = async ({ params }) => {
	const { id } = params;
	if (!id) throw new Error("User id is missing");

	const res = await getAssistantById(id);
	const data = await res.json();

	if (!res.ok) throw new Error(data?.message);

	return (
		<>
			<PageHeader title="Edit Assistant" />
			<Spacer />
			<AssistantEditForm user={data.object}/>
			<Spacer />
		</>
	);
};

export default Page;
