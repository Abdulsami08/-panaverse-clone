import React from 'react'
import Wrapper from '@/components/shared/Wrapper'
import Image from 'next/image'
import hero from "../../public/assets/hero.png"
import Button from '@/components/shared/Button'
const Hero = () => {
  return (
    <section >
      <Wrapper>
        <div className='flex flex-col md:flex-row items-center'>
          {/* left side */}
          <div className='flex-1'>
            <h4 className="text-teal-700 font-semibold text-lg mt-4">Presidential Initiative for Artificial Intelligence
              and Computing (PIAIC)</h4>
            <h1 className='text-3xl sm:text-5xl font-bold '>Certified Web 3.0 and Metaverse Developer</h1>
            <p className='mt-6 text-xl text-slate-600 max-w-screen-md'>
              A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet
            </p>
            <p className='mt-4 text-slate-600 max-w-screen-md text-xl'>
            Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, 
            Network Automation, and Bioinformatics Technologies
            </p>
              <div className='mt-4'>
                <Button text={'Enroll Now'}/>
                
                
              </div>
          </div>

          {/* right side */}
          <div className='flex-1'>
            <Image src={hero} alt="hero pak"></Image>


          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Hero