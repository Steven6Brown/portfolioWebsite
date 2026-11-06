import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className='footer border-t border-t-e-border text-white'>
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
            <div className='flex flex-col items-center sm:items-end gap-2'>
              <nav aria-label="Legal" className='flex gap-6 text-sm'>
                <Link href="/privacy" className='text-gray-300 underline underline-offset-4 hover:text-white py-3'>
                  Privacy Policy
                </Link>
                <Link href="/accessibility" className='text-gray-300 underline underline-offset-4 hover:text-white py-3'>
                  Accessibility Statement
                </Link>
              </nav>
              <p className='text-gray-400 text-sm text-center sm:text-right'>
                  Copyright <span>&#169;</span> 2026 Steven Brown. All rights reserved.
              </p>
            </div>
        </div>
    </footer>
  )
}
