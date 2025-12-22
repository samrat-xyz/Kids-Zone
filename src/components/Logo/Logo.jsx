import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href={'/'} className='flex items-center gap-1'>
      <Image
      alt='kidsZone-logo'
      src={'/assets/logo.png'}
      height={50}
      width={40}
      />
      <h2 className='text-xl font-semibold text-primary'>Kids Zone</h2>
    </Link>
  )
}

export default Logo
