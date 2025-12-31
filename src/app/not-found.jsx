import Link from 'next/link';
import React from 'react'
import { MdOutlineReportGmailerrorred } from "react-icons/md";

function Error404() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen gap-6'>
      <MdOutlineReportGmailerrorred size={150} className='text-primary'/>
      <h1 className='text-3xl font-semibold text-primary'>Page Not Found</h1>
      <Link href={'/'} className='btn btn-primary'>Go Home</Link>
    </div>
  )
}

export default Error404
