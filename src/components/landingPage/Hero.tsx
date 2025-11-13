import React from 'react'
import WrapButton from '../ui/wrap-button'

const Hero = () => {
  return (
    <>
      <div className="flex relative w-full">
        {/* <div className="absolute left-11 top-43 w-24">
          <img 
            alt="Background pattern" 
            loading="lazy" 
            width="300" 
            height="300" 
            decoding="async" 
            className="w-full h-full object-cover dark:opacity-5" 
            src="https://skiper-ui.com/bg/bg_1.svg" 
          />
          </div>
          <div className="absolute right-11 top-43 w-24">
          <img 
            alt="Background pattern" 
            loading="lazy" 
            width="300" 
            height="300" 
            decoding="async" 
            className="w-full h-full object-cover dark:opacity-5" 
            src="https://skiper-ui.com/bg/bg_2.svg" 
          />
        </div> */}
        
        <div className='mt-9 items-center flex flex-col text-black/80 w-full dark:text-white'>
          <h3 className='text-4xl font-bold'>Components crafted for</h3>
          <h1 className='text-7xl font-bold'>Modern Websites</h1>
          <WrapButton className='mt-10'>Get Started</WrapButton>
          {/* ...existing SVG code... */}
          <div className="mt-7">
            <p className='text-2xl text-black/60 dark:text-gray-300'>
              To make your dream Website live by just <span className='font-bold text-3xl dark:text-white'>Copy and paste</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero