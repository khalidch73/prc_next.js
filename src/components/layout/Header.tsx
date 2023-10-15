import Link from "next/link"
import Logo from "/public/logo.png"
import Image from "next/image"
const Header =() => {
  return (
    <header className="flex justify-between max-w-screen-xl mx-auto bg-white py-4 px-2 sticky top-0 items-center">
     <div>
      {/*<h2 className="text-xl font-bold">Panaverse deo</h2>*/}
      <Image src={Logo } alt="Panaverse Logo" className="w-20 h-20">
      </Image>
     </div>
      <ul className="flex space-x-8 font-semibold">
        <li>
          <Link href="/">
          Home
          </Link>
        </li>
        <li>
          <Link href="/Courses" >
          Courses
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header

      {/* 01. flex in parent use to make aline logo and navigation bar*/}
      {/* 02. justify between used make a distance between two child logo and Nb*/}
      {/* 03. max-w-screen-xl set navigation bar length of last child */}
      {/* 04. mx-auto margin left and right is auto*/}
      {/* 05. py mean pad mean make large navigation bar down word */}
      {/* 06. px mean make some space on both sides for better views on small screen*/}
      {/* 07. space-x-2 mean crate some space between 2 components of ul*/}
      {/* 08. sticky top-0 used to stick the navigation bar on the top of the page*/}
      {/* 09. items center used for do center the child vertically aline*/}

      {/*Navigation bar*/}
      {/*ul = undefined list, li = list */}
      {/*logo     === Panaverse deo*/}