import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t border-[#33353f] text-white'>
      <div className='max-w-7xl mx-4 px-1 py-12 flex flex-col md:flex-row justify-between items-center gap-4'>
        <img src="/images/logo-circle.png" alt="Logo" className="h-8 w-auto" />
        <p className='text-slate-600'>All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
