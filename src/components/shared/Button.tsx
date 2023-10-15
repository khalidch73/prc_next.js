import { FC } from "react"



const Button:FC<{ text:string }> = ({text}) => {
  return (
    <button className="font-semibold bg-teal-600 hover:bg-red-900 duration-300 px-4 rounded-full text-white py-2">
    {text}</button>
  )
}

export default Button
