import React from "react";
import SectionTitle from "../common/section-title";
import Courses from "../courses/courses";

const FeaturedCourses = () => {
	return <div className="featured-courses">
        <SectionTitle title="Featured Courses"/>
        <Courses featured={true}/>
    </div>;
};

export default FeaturedCourses;
