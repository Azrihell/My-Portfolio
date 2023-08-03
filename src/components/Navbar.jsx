import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
// import { NavLinks } from '../constants'
import { azLogo, menu, close } from '../assets'


const Navbar = () => {
  const [active, setActive] = useState('')


  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img src={azLogo} alt='logo' className='object-contain h-9 w-9' />
          <p className='text-white text-[18px] font-bold cursor-pointer'>Azriel Pilcher <span className='sm:block hidden'>| Build Your World</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>

        </ul>
      </div>
    </nav>
  )
}

export default Navbar