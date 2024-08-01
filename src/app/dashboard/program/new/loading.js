import LoadingForm from "@/components/common/loaders/loading-form";
import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import React from "react";

const Loading = () => {
	return (
		<>
			<PageHeader title="New Program" />
			<Spacer />
            <LoadingForm inputCount={5}/>
			<Spacer />
		</>
	);
};

export default Loading;
