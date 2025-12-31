import Logo from '@/components/Logo/Logo'
import React from 'react'

function loading() {
  return (
   <div className='flex flex-col justify-center items-center min-h-screen gap-6'>
    <h3 className='text-3xl font-semibold animate-ping'>Loading</h3>
      <div className='animate-pulse'>
        <Logo></Logo>
      </div>
    </div>
  )
}

export default loading
