
import Button from "@/components/shared/Button"
const CoreTrackSection = () => {
    const Heading = "Core Courses \n(Common in all specialization)"
  return (
    <section className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
        <div>
            <h4 className="pt-10 text-teal-800 font-semibold">
            Program of Studies
            </h4>
            <h1 className="font-bold text-4xl sm:text-4xl text-gray-950 md:text-yellow-700 lg:text-green-700 xl:text-red-800 whitespace-pre-line">
            {Heading}
            </h1>
            <p className="py-4 max-w-xl">
            Every participant of the program will start by completing the following three core courses.
            </p>
            <div>
            <Button text="Enroll Now"></Button>
            </div>
            {/*Boxes */}
            <div className="flex flex-col md:flex-row my-20 gap-4">
                <div className="border rounded-md w-10/12 relative px-8 py-8">
                    <h4 className="font-bold text-lg">Quarter 1</h4>
                    <p className="mt-2"> CS-101: Object-Oriented Programming using TypeScript</p>
                    <div className="absolute top-0 right-20 text-9xl font-bold -z-10 text-gray-200">1</div>
                </div>
                <div className="border rounded-md w-10/12 relative px-8 py-8">
                    <h4 className="font-bold text-lg">Quarter 2</h4>
                    <p className="mt-2"> W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</p>
                    <div className="absolute top-0 right-20 text-9xl font-bold -z-10 text-gray-200">2</div>
                </div>
                <div className="border rounded-md w-10/12 relative px-8 py-8">
                    <h4 className="font-bold text-lg">Quarter 3</h4>
                    <p className="mt-2">Full stack website development</p>
                    <div className="absolute top-0 right-20 text-9xl font-bold -z-10 text-gray-200">3</div>
                </div>
            </div>

        </div>
        </div>
    </section>
    
  )
}
export default CoreTrackSection