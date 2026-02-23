import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className='footer border border-t-e-border border-l-transparent border-r-transparent text-white'>
        <div className='container p-12 flex justify-between'>
            <span>
              <Link 
                  href={"/#home"}
                  className='flex items-center justify-center'
              >

              {/* LOGO #1 */}
              <Image 
                  src='/images/footer/sb-logo-text-horizontal.png' 
                  width={250} 
                  height={250}
              />
              </Link>
            </span>

            <p className='text-slate-500'>
                Copyright <span>&#169;</span> 2026 Steven Brown. All rights reserved.
            </p>
        </div>
    </footer>
  )
}
