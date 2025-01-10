import React from 'react'
import { Navbar } from '../components/Navbar'

export default function layout({ children }) {
  return (
    <div>
        <header className='w-full sticky z-10'>
            <Navbar />
        </header>
        {children}
    </div>
  )
}
