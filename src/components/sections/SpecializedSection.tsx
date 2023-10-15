import Button from "@/components/shared/Button"
import Image from "next/image"
import Metaverse from "@/components/Assest/metaverse.png"
const SpecializedSection = () => {
  return (
    <section className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
        <div>
            <h4 className="pt-10 text-teal-800 font-semibold">
            Specialized Track
            </h4>
            <h1 className="font-bold text-4xl sm:text-4xl text-gray-950 md:text-yellow-700 lg:text-green-700 xl:text-red-800 whitespace-pre-line">
            Web 3.0 (Blockchain) and Metaverse Specialization
            </h1>
            <p className="py-4 max-w-xl">
            This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.
            </p>
            <div>
            <Button text="Enroll Now"></Button>
            </div>
            {/*Boxes */}
            <div className="flex flex-col md:flex-col w-8/12 my-20 gap-4">
                <div className="border rounded-md w-10/12 relative px-8 py-8">
                    <h4 className="font-bold text-lg">Quarter 4</h4>
                    <p className="mt-2"> W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps</p>
                    <div className="absolute top-0 right-20 text-9xl font-bold -z-10 text-gray-200">4</div>
                </div>
                <div className="border rounded-md w-10/12 relative px-8 py-8">
                    <h4 className="font-bold text-lg">Quarter 5</h4>
                    <p className="mt-2"> MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences</p>
                    <div className="absolute top-0 right-20 text-9xl font-bold -z-10 text-gray-200">5</div>
                </div>
            </div>
        </div>
        {/*right side page */}
        <div className="flex w-4/12 gap-x-4">
            <div className="flex-1">
            {/*1st */}
            <div className="flex gap-x-4">
            <div className="rounded-full cursor-pointer">
                <Image src={Metaverse} alt="Metaverse Image" className="w-40 h-40"></Image>
            </div>
            <div>
            <h4 className="pt-10 text-teal-800 font-semibold items-center ">Specialized Track</h4>  
            <h2 className="font-bold text-lg">Web 3.0 (Blockchain) and Metaverse Specialization</h2>
            </div> 
            </div>
            <div className="py-4">

            </div>
            {/*2nd */}
             <div className="flex gap-x-4">
            <div className="rounded-full cursor-pointer">
            <Image src={Metaverse} alt="Metaverse Image" className="w-40 h-40"></Image>
            </div>
            <div className="">
            <h4 className="pt-10 text-teal-800 font-semibold items-center ">Specialized Track</h4>  
            <h2 className="font-bold text-lg">Web 3.0 (Blockchain) and Metaverse Specialization</h2>
           </div>
           </div>
           </div>
        </div>
        </div>
    </section>
  )
}

export default SpecializedSection