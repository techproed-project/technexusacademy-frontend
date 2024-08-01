import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import MessageList from "@/components/dashboard/contact/message-list";
import { getAllMessagesByPage } from "@/services/contact-service";
import React from "react";

const Page = async ({ searchParams }) => {
	const { page } = searchParams;

	const res = await getAllMessagesByPage(page);
	const data = await res.json();

	if (!res.ok) throw new Error(data.message);

	data.content = data.content.map((item, index) => ({ ...item, id: index }));

	return (
		<>
			<PageHeader title="Message" />
			<Spacer />
			<MessageList data={data} />
			<Spacer />
		</>
	);
};

export default Page;
