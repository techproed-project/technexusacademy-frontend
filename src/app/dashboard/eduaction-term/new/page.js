import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import AdminCreateForm from "@/components/dashboard/admin/admin-create-form";
import React from "react";

const Page = () => {
	return (
		<>
			<PageHeader title="New Admin" />
			<Spacer />
			<AdminCreateForm />
			<Spacer />
		</>
	);
};

export default Page;
