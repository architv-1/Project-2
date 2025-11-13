"use client"
import AdditionalGoods from '@/components/HomeCard/AdditionalGoods'
import AiCard from '@/components/HomeCard/AiCard'

import { AnimatedNumberCounterDemo } from '@/components/HomeCard/AnimatedNumberCounterDemo'
import CardCarouselP from '@/components/HomeCard/CardCarouselP'
import { SkiperCardDemo } from '@/components/HomeCard/SpecialCard'

import Template from '@/components/HomeCard/Template'
import TextFormat from '@/components/HomeCard/TextFormat'
import Theme from '@/components/HomeCard/Theme'
import Hero from '@/components/landingPage/Hero'
import Navbar1 from '@/components/Navbar1'
import Navbar2 from '@/components/Navbar2'



import WrapButton from '@/components/ui/wrap-button'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='flex justify-between items-center py-2 px-5'>
      
      <Navbar1/>
      <Navbar2/>
      
    </div>
    <div className='flex flex-col items-center mt-19'>
      <img className='w-45' src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=806890&theme=light&t=1737565356562" alt="" />
      <Hero/>
    </div>
    <CardCarouselP/>
    <Template/>
    <AnimatedNumberCounterDemo/>
    <TextFormat/>
    <AdditionalGoods/>
    <SkiperCardDemo/>
   <AiCard/>
   <Theme/>
    </>
  )
}

export default page
