import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-black to-d-grey-bg">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-p-green to-s-blue mb-4">
          404 Error: Page Not Found
        </h1>

        <p className="text-lg text-white mb-1">
          Oops! Looks like you've stumbled into the cyber abyss.
        </p>

        <p className="text-lg text-white mb-4">
          My cyber minions are currently on a coffee break, but they'll be back soon to guide you out of this digital maze!
        </p>
        
        <Link href={'/#home'}>
          <button className='p-1 w-full rounded-lg sm:w-fit bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-white lg:mr-10 shadow-black shadow-lg'>
            <span className='block bg-h-black hover:bg-gradient-to-r from-p-greeen to-s-blue rounded-lg px-6 py-3'>
              Go Back To Home Page
            </span>
          </button>
        </Link>

        {/* ROUNDED BUTTON */}
        {/* <Link href="/#home">
          <button className='p-1 w-full rounded-full sm:w-fit bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-white mt-3 mr-3 lg:mr-10 '>
              <span className='block bg-h-black hover:bg-gradient-to-r from-p-greeen to-s-blue rounded-full px-6 py-3'>
                Go back to Home Page
              </span>
          </button>
        </Link> */}
      </div>
    </div>
  );
}