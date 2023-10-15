import Image from "next/image"
import HeroPoster from "@/components/Assest/hero-poster.png"
import Button from "@/components/shared/Button"
const Hero = () => {
  return (
    <section className="max-w-screen-xl mx-auto">
     <div className="flex flex-col md:flex-row items-center">
      <div className="flex-1">
      {/*Right side code */}
         <h4 className="text-teal-800 font-semibold">
      Presidential Initiative for Artificial Intelligent and computing.(PIAIC)
          </h4>
           <h1 className="font-bold text-4xl sm:text-6xl text-gray-950 md:text-yellow-700 lg:text-green-700 xl:text-red-800">
      Certified Web 3.0 and Metaverse Developer
           </h1>
           <p className="my-4 max-w-xl">
      A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet.
             <br />
             <br />
      Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bio informatics Technologies
            </p>
            <Button text="Learn More"></Button>
      </div>
      <div>
        {/*Left side code */}
        <Image src={HeroPoster} alt="HeroPoster" className="w-100 h-100"></Image>
      </div>
     </div>              
    </section>
  )
}
export default Hero
