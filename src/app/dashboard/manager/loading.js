import LoadingList from "@/components/common/loaders/loading-list";
import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import React from "react";

const Loading = () => {
	return (
		<>
			<PageHeader title="Manager" />
			<Spacer />
            <LoadingList/>
			<Spacer />
		</>
	);
};

export default Loading;
