import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className='footer border border-t-e-border border-l-transparent border-r-transparent text-white'>
        <div className='container p-8 flex flex-col sm:flex-row items-center justify-between gap-4'>
            <span>
              <Link href={"/#home"} className='flex items-center justify-center'>
                <Image 
                  src='/images/footer/sb-logo-text-horizontal.png' 
                  width={200} 
                  height={200}
                  alt="Steven Brown Logo"
                />
              </Link>
            </span>
            <p className='text-slate-500 text-sm text-center sm:text-right'>
                Copyright <span>&#169;</span> 2026 Steven Brown. All rights reserved.
            </p>
        </div>
    </footer>
  )
}