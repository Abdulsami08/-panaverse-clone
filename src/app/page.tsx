import Hero from "@/components/Hero";
import Outcome from "@/components/widgets/Outcome";
import SpecializedTrack from "@/components/widgets/SpecializedTrack";
import CoreTrack from "@/components/widgets/coreTrack";
import Image from "next/image";


export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero/>

      {/* core Track Section */}
      <CoreTrack/>

      {/* Specialization Track */}
      <SpecializedTrack/>
      
      {/* outcome section */}
        <Outcome/>
    </main>
  )
  
}