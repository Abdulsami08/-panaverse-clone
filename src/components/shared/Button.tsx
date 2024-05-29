import { FC } from "react"
import Wrapper from "@/components/shared/Wrapper"


const Button: FC<{text:string}> = ({text}) => {

  return (
    <div>
    <Wrapper> 
    <button className="bg-[#00616C] text-white px-7 py-3 rounded-full 
    hover:shadow-lg text-lg font-medium hover:scale-105">
      {text}</button>
      </Wrapper>
      </div>
  )
}

export default Button
