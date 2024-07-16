import Instructors from '@/components/about/instructors'
import Welcome from '@/components/about/welcome'
import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import React from 'react'

const Page = () => {
  return (
    <>
        <PageHeader title="About"/>
        <Spacer/>
        <Welcome/>
        <Spacer/>
        <Instructors/>
        <Spacer/>

    </>
  )
}

export default Page