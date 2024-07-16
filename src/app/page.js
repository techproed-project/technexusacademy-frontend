import Welcome from '@/components/about/welcome'
import Spacer from '@/components/common/spacer'
import Slider from '@/components/home/slider'
import React from 'react'

const Page = () => {
  return (
    <>
      <Slider/>
      <Spacer/>
      <Welcome/>
    </>
  )
}

export default Page