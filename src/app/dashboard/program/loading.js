import LoadingList from "@/components/common/loaders/loading-list";
import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import React from "react";

const Loading = () => {
	return (
		<>
			<PageHeader title="Program" />
			<Spacer />
            <LoadingList colCount={6}/>
			<Spacer />
		</>
	);
};

export default Loading;
