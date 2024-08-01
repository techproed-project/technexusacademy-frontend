import LoadingList from "@/components/common/loaders/loading-list";
import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import React from "react";

const Loading = () => {
	return (
		<>
			<PageHeader title="Message" />
			<Spacer />
            <LoadingList colCount={5}/>
			<Spacer />
		</>
	);
};

export default Loading;
