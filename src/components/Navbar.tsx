 import logo from "../../public/assets/logo.png"
import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import Wrapper from "@/components/shared/Wrapper"


const Navbar = () => {
  return (
    <header className="sticky top-0 bg-white z-10">
      <Wrapper>
    <div className='flex justify-between bg-white  py-4 items-center'>
        
        {/* logo */}
        <div>
        {/* <h2 className='text-xl font-extrabold'>Panaverse Dao</h2> */}
        {/* <img src={logo} alt="panaverse" /> */}
        <Image src={logo} alt='sami' className='w-28 h-auto'>
      
        </Image>
        </div>

        {/* Navigatio bar */}
         <ul className='flex space-x-8 font-medium'>
            <li>
              <Link href={"/"}> Home
              </Link>
              </li>
            <li>
              <Link href={"/courses"}> Courses
              </Link>
              </li>

         </ul>

    </div>
    </Wrapper>
    </header>
  )
}

export default Navbar