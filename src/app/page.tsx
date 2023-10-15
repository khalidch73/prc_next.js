import Hero from "@/components/sections/Hero"
import CoreTrackSection from "@/components/sections/CoreTrackSection" 
import SpecializedSection from"@/components/sections/SpecializedSection"
export default function Home() {
  return (
    <>
     <main>
      {/*Hero section */}
      <Hero></Hero>
      {/*Core track section */}
      <CoreTrackSection></CoreTrackSection>
      {/*Specialized section */}
      <SpecializedSection></SpecializedSection>
     </main>
    </>
  )
}
