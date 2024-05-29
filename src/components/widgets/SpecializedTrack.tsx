"use client"
import React, { useState } from 'react'
import Wrapper from '@/components/shared/Wrapper'
import Button from '@/components/shared/Button'
import QuaterBox from '@/components/shared/QuaterBox'
//
import Image from 'next/image'
import metaverse1 from '../../../public/assets/metaverse1.webp'
import ai2 from '../../../public/assets/ai2.webp'
import cloude3 from '../../../public/assets/cloud3.webp'
import iot from '../../../public/assets/iot.bmp'
import bio from '../../../public/assets/bio.bmp'
import net from '../../../public/assets/network.bmp'
export const programsData = [
  {
    slug: "wmd",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    discription: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image: metaverse1,
    quaters: [
      {
        header: "Quarter 4",
        discription: " W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
        number: 4
      },
      {
        header: "Quarter 5",
        discription: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number: 5
      }
    ]
  },
  {
    slug: "ai",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    discription: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    image: ai2,
    quaters: [
      {
        header: "Quarter 4",
        discription: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
        number: 4
      },
      {
        header: "Quarter 5",
        discription: "AI-361: Deep Learning and MLOp",
        number: 5
      }
    ]

  },
  {
    slug: "cc",
    header: "Cloud-Native Computing Specialization",
    discription: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes. ",
    image: cloude3,
    quaters: [
      {
        header: "Quarter 4",
        discription: "CN-351: Certified Kubernetes Application Developer (CKAD",
        number: 4
      },
      {
        header: "Quarter 5",
        discription: "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
        number: 5
      }
    ]

  },
  {
    slug: "iot",
    header: "Ambient Computing and IoT Specialization",
    discription: "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
    image: iot,
    quaters: [
      {
        header: "Quarter 4",
        discription: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
        number: 4
      },
      {
        header: "Quarter 5",
        discription: "AC-361: Embedded Programming using C and Rust",
        number: 5
      }
    ]

  },
  {
    slug: "bio",
    header: "Genomics and Bioinformatics Specialization",
    discription: "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
    image: bio,
    quaters: [
      {
        header: "Quarter 4",
        discription: "Bio-351: Python for Biologists",
        number: 4
      },
      {
        header: "Quarter 5",
        discription: "Bio-361: Bioinformatics with Python",
        number: 5
      }
    ]

  },
  {
    slug: "net",
    header: "Network Programmability and Automation Specialization",
    discription: "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
    image: net,
    quaters: [
      {
        header: "Quarter 4",
        discription: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
        number: 4
      },
      {
        header: "Quarter 5",
        discription: "AI-361: Deep Learning and MLOp",
        number: 5
      }
    ]

  },
]


//////////////////////////////////////////////////////////


const SpecializedTrack = () => {


            const [selecteditem, setSelectedItem] = useState("wmd")

            const selectedItemdata = programsData.find((item) => item.slug === selecteditem)

  return (
    <section>
      <Wrapper>

        {/* headrer */}
        <div>
          <h2 className='text-4xl l font-bold whitespace-pre-line'>Specialized Tracks:</h2>

          <p className='mt-3 text-xl text-slate-600 max-w-screen-sm'>After completing the first three quarters the participants
            will select one or more specializations consisting of two courses each. </p>

        </div>
        <div className='mt-10 flex flex-col-reverse lg:flex-row gap-x-4 gap-y-8'>
          {/* content left */}
          <div className='shadow-xl  sticky top-20 self-start flex-1 basis-8/12 rounded-xl border border-slate-200 py-8 px-8'>
            <h4 className='text-primary font-semibold text-lg mt-4'>Specialized Track</h4>
            <h3 className='text-2xl font-bold'>{selectedItemdata?.header}</h3>
            <p className='text-lg text-slate-600 max-w-screen-sm '>{selectedItemdata?.discription}</p>

            <Button text={'Learn More'} />
            <div className='mt-4  flex flex-col md:flex-row gap-8 gap-x-20  '>

              {
                selectedItemdata?.quaters.map((item) => (

                  <QuaterBox
                  header={item.header}
                  discription={item.discription}
                  number={4}
                  haveborder={false}
  
                />

                ))
              }

              
    
            </div>
          </div>

          {   /* content right */}

          <div className='px-4 py-6 space-y-4   basis-4/12 bg-slate-100   flex-1'>
            {
              programsData.map((item) => (

                <div onClick={() => setSelectedItem(item.slug)} className='flex items-center gap-x-4'>
                  <div className='flex-shrink-0 h-24 w-36'>
                    {/* <div className='w-20 h-16 on rounded bg-red-400'></div> */}
                    <Image src={item.image} alt={item.header} className={"h-24  object-cover"}/>
                  </div>
                  <div>
                    <h4 className='text-primary font-medium'>Specialized Track</h4>
                    <h3 className='text-xl font-semibold'>{item.header}</h3>
                  </div>
                </div>

              ))
            }



          </div>



        </div>


      </Wrapper>

    </section>
  )
}

export default SpecializedTrack