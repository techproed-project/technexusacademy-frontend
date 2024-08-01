import LoadingList from "@/components/common/loaders/loading-list";
import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import React from "react";

const Loading = () => {
	return (
		<>
			<PageHeader title="Grades &amp; Meets" />
			<Spacer />
            <LoadingList colCount={8} showButton={false}/>
			<Spacer />
			<LoadingList colCount={5} showButton={false}/>
			<Spacer />
		</>
	);
};

export default Loading;
