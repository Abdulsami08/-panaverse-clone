import React from 'react'
import Wrapper from '@/components/shared/Wrapper'
import Button from '@/components/shared/Button'


const coreTracData = [
{
  header:  "Quater 1",
  discription: "CS-101: Object Oriented Programmming Using Typescript",
  number: 1
},

{
  header:  "Quater 2",
  discription: "W2-201: Developing planet Scale Web 2.0 Serverless Cloud Cloud Apps and APIs Using nextjs 14 and Cloude Development Kit (CDK) for tereform",
  number: 2
},

{
  header:  "Quater 3",
  discription: "$-101: Dollar Making Bootcamp-Full-Stack-Template and APIs product Development",
  number: 3
}


]

const CoreTrack = () => {

  const header = "Core Courses \n (Common in All Specializations):"
  return (
    <section>
        <Wrapper>
        {/* core track */}
        <div className=' mt-16 lg:mt-28 max-w-screen-md'>
            <h4 className='text-teal-700 font-semibold text-lg mt-4'>Program of Studies</h4>
            <h2 className='text-4xl l font-bold whitespace-pre-line'> {header}  </h2>
            <p className='mt-3 text-xl text-slate-600 max-w-screen-sm'>
            Every participant of the program will start by completing 
            the following three core courses
            </p>
            <div className='mt-4'>
                <Button text={'learn More'}/>
            </div>
        </div>

        {/* Bpxes */}
        <div className="mt-4  flex flex-col md:flex-row gap-8 ">
          {
            coreTracData.map((item) => (
              <div className='border rounded-md   flex-1  relative flex flex-col justify-center w-4/12  px-8 py-16 '>
              <h4 className='font-bold text-lg'> {item.header}</h4>
              <p className='mt-2 text-s Prolate-600'>{item.discription}</p>
              <span className='absolute text-gray-200 -top-10 right-10 text-[170px] font-bold -z-10'>{item.number}</span>
            </div>
            )
            )
          }
          
        </div>
        </Wrapper>
    </section>
  )
}

export default CoreTrack