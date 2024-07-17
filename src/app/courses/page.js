import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import Courses from '@/components/courses/courses'
import React from 'react'

export const metadata = {
	title: "Courses",
	description: "Explore the variety of courses we offer.",
};


const Page = () => {
  return (
    <>
        <PageHeader title="Courses"/>
        <Spacer/>
        <Courses/>
        <Spacer/>
    </>
  )
}

export default Page