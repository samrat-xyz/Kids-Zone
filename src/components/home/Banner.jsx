import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-between p-10'>
      <div className='flex-1 space-y-6'>
        <h2 className="text-5xl">আপনার শিশু কে দিন সুন্দর ভবিষ্যৎ </h2>
        <p>Buy Every Toys With 15% Discount</p>
        <button className='btn btn-primary btn-outline'>Explore Toys</button>
      </div>
      <div className='flex-1'>
        <Image
        alt="KidsZone Hero"
        src={'/assets/hero.png'}
        height={500}
        width={400}
        />
      </div>
    </div>
  )
}

export default Banner
